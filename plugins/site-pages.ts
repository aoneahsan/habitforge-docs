/**
 * The site-pages plugin: the two pages people use to find everything on the docs site (`/sitemap`, `/feed`), and the
 * truthful `<lastmod>` on every `sitemap.xml` URL.
 *
 * - `allContentLoaded` reads what the docs plugin loaded (titles, descriptions, tags, sidebar order) and the feed
 *   entries from `src/plugins/discoveryFeed.ts` — the same list `/feed.xml` is written from, so the page and the file
 *   cannot disagree. It writes them once as JSON and adds both routes; Docusaurus prerenders them, so every card and
 *   entry is in the built HTML before any script runs.
 * - `withLastmod` dates every sitemap URL from the docs' own `last_update.date` front matter (never git, never the
 *   build day). A page that lists others takes the newest date of what it lists, and an undated URL fails the build.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import type { BlogContent } from '@docusaurus/plugin-content-blog';
import type { LoadedContent as DocsContent } from '@docusaurus/plugin-content-docs';
import type { AllContent, LoadContext, Plugin } from '@docusaurus/types';
import { blogFeedItems, siteFeedItems } from '../src/plugins/discoveryFeed';
import { APPS_LASTMOD } from '../src/data/platforms';

/**
 * Docusaurus writes every route module's path into the client bundle, so the absolute path createData returns
 * would publish this machine's folders and give each machine different chunk names. addRoute gets the alias.
 */
function generatedModule(generatedFilesDir: string, file: string): string {
  return `@generated/${relative(generatedFilesDir, file).split(sep).join('/')}`;
}

/** Fails the build when any client bundle still carries this site's absolute path. */
function assertNoLocalPaths(outDir: string, siteDir: string): void {
  const jsDir = join(outDir, 'assets', 'js');
  const forms = [siteDir.split(sep).join('/'), siteDir.split(sep).join('\\\\')];
  for (const file of readdirSync(jsDir).filter((name) => name.endsWith('.js'))) {
    const text = readFileSync(join(jsDir, file), 'utf8');
    const found = forms.find((form) => text.includes(form));
    if (found) throw new Error(`${file} carries the local path ${found}: pass createData paths to addRoute through generatedModule()`);
  }
}

/** One page as its `/sitemap` card shows it. */
export interface SitePage {
  readonly permalink: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
}

/** One `/feed` entry: a doc and the day its words last changed (`YYYY-MM-DD`, UTC). */
export interface SiteEntry extends SitePage {
  readonly date: string;
}

/** A `/sitemap` group: the top-level pages together, or one sidebar category with its own label. */
export type SiteGroup =
  | { readonly kind: 'docs'; readonly key: string; readonly pages: readonly SitePage[] }
  | { readonly kind: 'category'; readonly key: string; readonly label: string; readonly pages: readonly SitePage[] };

/** What `/sitemap` and `/feed` draw, written once per build. */
export interface SitePagesData {
  readonly home: SitePage;
  readonly groups: readonly SiteGroup[];
  /** Every listed doc and blog post, newest change first: the `/feed.xml` list. */
  readonly entries: readonly SiteEntry[];
  /** How many of the entries are blog posts: none until the first post is published. */
  readonly posts: number;
}

type DocsVersion = DocsContent['loadedVersions'][number];
type DocMetadata = DocsVersion['docs'][number];
type SidebarItem = DocsVersion['sidebars'][string][number];
type SidebarCategory = Extract<SidebarItem, { type: 'category' }>;

const DOCS_PLUGIN = 'docusaurus-plugin-content-docs';

/** Each doc's date by permalink, filled by `allContentLoaded` and read by the sitemap's `createSitemapItems`. */
const datedPages = new Map<string, string>();
let siteBase = '';

/**
 * A doc as its card shows it.
 *
 * @param doc - the docs plugin's metadata for one page
 * @returns the page's permalink, title, description and tag labels
 */
function docPage(doc: DocMetadata): SitePage {
  return {
    permalink: doc.permalink,
    title: doc.title,
    description: doc.description,
    // Topics are front matter, not tag routes: the /docs/tags/* pages were retired (habitforge-docs#2, SA-P32).
    tags: topicsOf(doc.frontMatter),
  };
}

/**
 * Reads the sidebar into groups in reading order. A listed doc no sidebar shows joins the category whose path holds
 * it, or else the top-level group, so every doc in `sitemap.xml` has a card.
 *
 * @param version - the docs version the site shows
 * @returns the non-empty groups, each page once
 */
function docsGroups(version: DocsVersion): SiteGroup[] {
  const docsById = new Map(version.docs.filter((doc) => !doc.unlisted && !doc.draft).map((doc) => [doc.id, doc]));
  const seen = new Set<string>();
  const topLevel: SitePage[] = [];
  const categories: { key: string; label: string; pages: SitePage[] }[] = [];

  const add = (page: SitePage, into: SitePage[]): void => {
    if (seen.has(page.permalink)) return;
    seen.add(page.permalink);
    into.push(page);
  };
  const addDoc = (id: string, into: SitePage[]): void => {
    const doc = docsById.get(id);
    if (doc !== undefined) add(docPage(doc), into);
  };
  const addCategory = (category: SidebarCategory, into: SitePage[]): void => {
    const { link } = category;
    if (link?.type === 'generated-index') {
      add(
        { permalink: link.permalink, title: link.title ?? category.label, description: link.description ?? '', tags: [] },
        into,
      );
    } else if (link?.type === 'doc') {
      addDoc(link.id, into);
    }
    for (const item of category.items) {
      if (item.type === 'doc') addDoc(item.id, into);
      else if (item.type === 'category') addCategory(item, into);
    }
  };

  for (const sidebar of Object.values(version.sidebars)) {
    for (const item of sidebar) {
      if (item.type === 'doc') {
        addDoc(item.id, topLevel);
      } else if (item.type === 'category') {
        const pages: SitePage[] = [];
        addCategory(item, pages);
        const first = pages[0];
        if (first !== undefined) categories.push({ key: first.permalink, label: item.label, pages });
      }
    }
  }
  for (const doc of docsById.values()) {
    if (seen.has(doc.permalink)) continue;
    const home = categories.find((category) => doc.permalink.startsWith(`${category.key}/`));
    add(docPage(doc), home?.pages ?? topLevel);
  }

  const groups: SiteGroup[] = [];
  if (topLevel.length > 0) groups.push({ kind: 'docs', key: 'docs', pages: topLevel });
  for (const category of categories) groups.push({ kind: 'category', ...category });
  return groups;
}

/**
 * The blog as one `/sitemap` group, led by the blog's own page: empty until the blog has a post. Its title and
 * description are the blog plugin's (`blogTitle`, `blogDescription` in docusaurus.config.ts), so they have one source.
 *
 * @param allContent - every plugin's loaded content
 * @returns no group, or the Blog group
 */
function blogGroup(allContent: AllContent): SiteGroup[] {
  const blog = allContent['docusaurus-plugin-content-blog']?.['default'] as BlogContent | undefined;
  const posts = blogFeedItems(allContent);
  if (blog === undefined || posts.length === 0) return [];
  const index: SitePage = { permalink: `${siteBase}/blog`, title: blog.blogTitle, description: blog.blogDescription, tags: [] };
  const pages = posts.map((post) => ({ permalink: post.permalink, title: post.title, description: post.description, tags: [] }));
  return [{ kind: 'category', key: index.permalink, label: 'Blog', pages: [index, ...pages] }];
}

/**
 * Collects what both pages draw.
 *
 * @param allContent - every plugin's loaded content
 * @param context - the site's load context (title, tagline, base URL)
 * @returns the home card, the groups and the feed entries
 * @throws when the docs plugin (id "default") is off
 */
function collect(allContent: AllContent, context: LoadContext): SitePagesData {
  const docs = allContent[DOCS_PLUGIN]?.['default'] as DocsContent | undefined;
  if (docs === undefined) {
    throw new Error('site-pages: /sitemap and /feed list the docs, so the docs plugin (id "default") must be on.');
  }
  const version = docs.loadedVersions.find((loaded) => loaded.isLast) ?? docs.loadedVersions[0];
  const entries = siteFeedItems(allContent).map((item) => ({
    permalink: item.permalink,
    title: item.title,
    description: item.description,
    tags: [],
    date: item.updatedAt.toISOString().slice(0, 10),
  }));
  return {
    home: {
      permalink: context.baseUrl,
      title: context.siteConfig.title,
      description: context.siteConfig.tagline,
      tags: [],
    },
    groups: [...(version === undefined ? [] : docsGroups(version)), ...blogGroup(allContent)],
    entries,
    posts: blogFeedItems(allContent).length,
  };
}

/**
 * Dates every sitemap URL from the docs' `last_update.date`. A doc takes its own date. A page that lists others takes
 * the newest date of what it lists: the home page, `/sitemap` and `/feed` every doc, a category index the docs under
 * its path. Any date Docusaurus computed (git, file time) is replaced, so the file has one source.
 *
 * @param items - the sitemap plugin's entries
 * @returns the same entries, each with a lastmod (`YYYY-MM-DD`)
 * @throws when the site-pages plugin has not run, or naming the URL that is still undated
 */
/**
 * A pathname without its trailing slash (`/` stays `/`): under `trailingSlash: true` permalinks and sitemap URLs end
 * in `/`, and the date lookups compare routes in this one form (habitforge-docs#2).
 *
 * @param pathname - a pathname or permalink
 * @returns the same route, slashless
 */
/**
 * A doc's topic labels from its `topics:` front matter.
 *
 * @param frontMatter - the doc's front matter
 * @returns the labels, empty when it has none
 */
function topicsOf(frontMatter: object): string[] {
  const topics = (frontMatter as {topics?: unknown}).topics;
  return Array.isArray(topics) ? topics.map(String) : [];
}

export function routeKey(pathname: string): string {
  return pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
}

export function withLastmod<Item extends { readonly url: string; readonly lastmod?: string | null }>(
  items: readonly Item[],
): Item[] {
  if (datedPages.size === 0) {
    throw new Error('site-pages: no doc dates were collected, so sitemap.xml cannot be dated. Is the plugin on?');
  }
  const newest = (inside: (pathname: string) => boolean): string | undefined =>
    [...datedPages]
      .filter(([pathname]) => inside(pathname))
      .reduce<string | undefined>((max, [, date]) => (max === undefined || date > max ? date : max), undefined);
  const listsEverything = new Set([`${siteBase}/`, `${siteBase}/sitemap`, `${siteBase}/feed`]);

  return items.map((item) => {
    const pathname = routeKey(new URL(item.url).pathname);
    const lastmod =
      (pathname === `${siteBase}/apps` ? APPS_LASTMOD : undefined) ??
      datedPages.get(pathname) ??
      (listsEverything.has(pathname) ? newest(() => true) : newest((doc) => doc.startsWith(`${pathname}/`)));
    if (lastmod === undefined) {
      throw new Error(`site-pages: ${item.url} has no last_update.date, and no doc it lists has one.`);
    }
    return { ...item, lastmod };
  });
}

/**
 * The plugin: adds `/sitemap` and `/feed` and records each doc's date for {@link withLastmod}.
 *
 * @param context - the site's load context
 * @returns the plugin Docusaurus loads
 */
export default function sitePages(context: LoadContext): Plugin {
  siteBase = context.baseUrl.replace(/\/$/, '');
  return {
    name: 'site-pages',
    async allContentLoaded({ allContent, actions }) {
      const data = collect(allContent, context);
      datedPages.clear();
      for (const entry of data.entries) datedPages.set(routeKey(entry.permalink), entry.date);
      const site = generatedModule(context.generatedFilesDir, await actions.createData('site-pages.json', JSON.stringify(data)));
      actions.addRoute({
        path: `${siteBase}/sitemap`,
        component: '@site/src/components/SitemapPage',
        exact: true,
        modules: { site },
      });
      actions.addRoute({
        path: `${siteBase}/feed`,
        component: '@site/src/components/FeedPage',
        exact: true,
        modules: { site },
      });
    },
    async postBuild({ outDir }) {
      assertNoLocalPaths(outDir, context.siteDir);
    },
  };
}
