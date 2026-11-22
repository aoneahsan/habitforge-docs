import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import type { BlogContent } from '@docusaurus/plugin-content-blog';
import type { LoadedContent } from '@docusaurus/plugin-content-docs';
import type { AllContent, Plugin } from '@docusaurus/types';

/** One feed entry. `/feed.xml` and the `/feed` page both read this list, so they cannot disagree. */
export type FeedItem = {
  title: string;
  description: string;
  permalink: string;
  updatedAt: Date;
};

export default function discoveryFeed(): Plugin {
  let items: FeedItem[] = [];
  return {
    name: 'discovery-feed',
    allContentLoaded({ allContent }) {
      items = siteFeedItems(allContent);
      if (items.length === 0) {
        throw new Error('discovery-feed: no dated documentation pages were found');
      }
    },
    async postBuild({ outDir, siteConfig }) {
      const siteUrl = new URL(siteConfig.baseUrl, siteConfig.url).toString();
      await writeFile(
        join(outDir, 'feed.xml'),
        renderFeed(items, {
          title: siteConfig.title,
          description: siteConfig.tagline,
          siteUrl,
        }),
        'utf8',
      );
    },
  };
}

/**
 * Every listed doc as a feed entry, newest `last_update.date` first.
 *
 * @param allContent - every plugin's loaded content
 * @returns the entries `/feed.xml` and the `/feed` page both show
 * @throws when a doc has no valid date, title or description
 */
export function docsFeedItems(allContent: AllContent): FeedItem[] {
  const instances = allContent['docusaurus-plugin-content-docs'] ?? {};
  const items = Object.values(instances).flatMap((raw) => {
    const content = raw as LoadedContent;
    const versions = content.loadedVersions.filter((version) => version.isLast);
    return versions.flatMap((version) =>
      version.docs.flatMap((doc) => {
        if (doc.draft || doc.unlisted) return [];
        const frontMatter = doc.frontMatter as {
          last_update?: { date?: Date | string };
        };
        const updatedAt = parseDate(frontMatter.last_update?.date);
        if (!updatedAt) {
          throw new Error(
            `discovery-feed: ${doc.permalink} has no valid last_update.date; refusing to invent a feed date`,
          );
        }
        if (!doc.title.trim() || !doc.description.trim()) {
          throw new Error(
            `discovery-feed: ${doc.permalink} needs a title and description before it can enter the feed`,
          );
        }
        return [{
          title: doc.title,
          description: doc.description,
          // A doc with `slug: /` gets the permalink `/docs/`, which 404s on this host (trailingSlash: false serves
          // `/docs`). Use the address the page is really served at, as sitemap.xml does.
          permalink: doc.permalink.length > 1 ? doc.permalink.replace(/\/+$/, '') : doc.permalink,
          updatedAt,
        }];
      }),
    );
  });
  return sortNewestFirst(items);
}

/**
 * The blog posts the blog plugin loaded, each dated by the day it was published (its `date` front matter, never git).
 * Drafts are already gone from a production build; an unlisted post stays out, as it does from the blog's own lists.
 * Empty while the blog is off (no post in blog/ yet).
 *
 * @param allContent - every plugin's loaded content
 * @returns one entry per listed post, newest first
 */
export function blogFeedItems(allContent: AllContent): FeedItem[] {
  const instances = (allContent['docusaurus-plugin-content-blog'] ?? {}) as Record<string, BlogContent | undefined>;
  const items = Object.values(instances)
    .flatMap((content) => content?.blogPosts ?? [])
    .filter((post) => !post.metadata.unlisted)
    .flatMap(({ metadata }) => {
      const updatedAt = parseDate(metadata.date);
      return updatedAt
        ? [{ title: metadata.title, description: metadata.description, permalink: metadata.permalink, updatedAt }]
        : [];
    });
  return sortNewestFirst(items);
}

/**
 * Every entry the site lists: the docs and, once the blog has any, its posts, newest first. `/feed.xml`, the `/feed`
 * page and the dates in `sitemap.xml` (plugins/site-pages.ts) all read this one list.
 *
 * @param allContent - every plugin's loaded content
 * @returns docs and posts together
 */
export function siteFeedItems(allContent: AllContent): FeedItem[] {
  return sortNewestFirst([...docsFeedItems(allContent), ...blogFeedItems(allContent)]);
}

function sortNewestFirst(items: FeedItem[]): FeedItem[] {
  return items.sort(
    (left, right) =>
      right.updatedAt.getTime() - left.updatedAt.getTime() ||
      left.permalink.localeCompare(right.permalink),
  );
}

function renderFeed(
  items: FeedItem[],
  site: { title: string; description: string; siteUrl: string },
): string {
  const newest = items[0];
  if (!newest) throw new Error('discovery-feed: refusing to render an empty feed');
  const entries = items
    .map((item) => {
      const permalink = new URL(item.permalink, site.siteUrl).toString();
      return `    <item>
      <title>${xml(item.title)}</title>
      <link>${xml(permalink)}</link>
      <guid isPermaLink="true">${xml(permalink)}</guid>
      <pubDate>${item.updatedAt.toUTCString()}</pubDate>
      <description><![CDATA[${cdata(item.description)}]]></description>
    </item>`;
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${xml(site.title)}</title>
    <link>${xml(site.siteUrl)}</link>
    <description><![CDATA[${cdata(site.description)}]]></description>
    <language>en</language>
    <lastBuildDate>${newest.updatedAt.toUTCString()}</lastBuildDate>
    <atom:link href="${xml(new URL('feed.xml', site.siteUrl).toString())}" rel="self" type="application/rss+xml" />
${entries}
  </channel>
</rss>
`;
}

function parseDate(value: Date | string | number | null | undefined): Date | null {
  if (value === null || value === undefined || value === '') return null;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

function xml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function cdata(value: string): string {
  return value.replaceAll(']]>', ']]]]><![CDATA[>');
}
