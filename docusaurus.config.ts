import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import discoveryFeed from './src/plugins/discoveryFeed';

const SITE_URL = process.env.DOCS_SITE_URL ?? 'https://habitforge-docs.aoneahsan.com';
const BASE_URL = process.env.DOCS_BASE_URL ?? '/';
const FEED_URL = new URL('feed.xml', new URL(BASE_URL, SITE_URL)).toString();

const AUTHOR = {
  name: 'Ahsan Mahmood',
  email: 'aoneahsan@gmail.com',
  url: SITE_URL,
  linkedin: 'https://linkedin.com/in/aoneahsan',
  github: 'https://github.com/aoneahsan',
  npm: 'https://npmjs.com/~aoneahsan',
} as const;

const APP_URL = 'https://habitforge.aoneahsan.com';
/* The Play listing does not exist yet — the Android build is finished but unpublished
   (rebuild decision OD-02). Nothing here may link to it: a navbar and footer entry put a
   dead store link on EVERY page of the site. Restore both when the listing goes live. */
const SUPPORT_URL =
  'https://aoneahsan.com/payment?project-id=habitforge&project-identifier=com.aoneahsan.habitforge';
const DOCS_GITHUB = 'https://github.com/aoneahsan/habitforge-docs';

const config: Config = {
  title: 'HabitForge Docs',
  tagline:
    'A habit tracker that draws your consistency as a rope you watch thicken, with other people building theirs beside you.',
  favicon: 'img/favicon.svg',

  url: SITE_URL,
  baseUrl: BASE_URL,
  trailingSlash: false,

  organizationName: 'aoneahsan',
  projectName: 'habitforge-docs',
  deploymentBranch: 'gh-pages',

  // The build IS the link checker: broken doc links fail the build so a
  // regression can't ship. Cross-page heading anchors stay `warn` (fragile,
  // not worth failing CI over).
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  onDuplicateRoutes: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    author: AUTHOR,
    appUrl: APP_URL,
    docsGitHub: DOCS_GITHUB,
  },

  // Site-wide JSON-LD: WebSite + Organization + Person (author) + the
  // HabitForge SoftwareApplication.
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        type: 'application/rss+xml',
        title: 'HabitForge documentation updates',
        href: FEED_URL,
      },
    },
    {
      tagName: 'link',
      attributes: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    },
    {
      tagName: 'link',
      attributes: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    },
    {
      tagName: 'meta',
      attributes: { name: 'author', content: AUTHOR.name },
    },
    {
      tagName: 'meta',
      attributes: { name: 'application-name', content: 'HabitForge' },
    },
    {
      tagName: 'meta',
      /* ember-600, matching --ifm-color-primary in src/css/custom.css. This was
         #F97316 (orange-500) until 2026-09-01 and would have painted the mobile
         browser chrome a different colour from the page under it. */
      attributes: { name: 'theme-color', content: '#d03b23' },
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: SITE_URL,
            name: 'HabitForge Docs',
            description:
              'Official documentation for HabitForge — a habit tracker that shows your consistency as a rope, with check-in streaks, points and levels, analytics, achievements, an optional community, and themes. Web and Android.',
            inLanguage: 'en',
            publisher: { '@id': `${SITE_URL}/#organization` },
          },
          {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
            name: 'HabitForge',
            url: APP_URL,
            logo: `${SITE_URL}/img/logo.svg`,
            sameAs: [AUTHOR.github, AUTHOR.linkedin, AUTHOR.npm],
            founder: { '@id': `${SITE_URL}/#author` },
          },
          {
            '@type': 'Person',
            '@id': `${SITE_URL}/#author`,
            name: AUTHOR.name,
            email: AUTHOR.email,
            url: AUTHOR.url,
            sameAs: [AUTHOR.linkedin, AUTHOR.github, AUTHOR.npm],
            jobTitle: 'Senior Full-Stack & Mobile Engineer',
          },
          {
            '@type': 'SoftwareApplication',
            '@id': `${APP_URL}/#app`,
            name: 'HabitForge',
            url: APP_URL,
            description:
              'HabitForge is a habit tracker that turns your consistency into a visual rope. It uses the cue-routine-reward habit loop, daily check-ins that build streaks, points and a ten-tier level, weekly analytics, achievements, an optional community, and light/dark themes. It runs on the web and on Android. There is a free plan plus Pro and Family plans, paid on the developer\'s payment page and granted to the account; there is no in-app checkout.',
            applicationCategory: 'LifestyleApplication',
            operatingSystem: 'Web, Android',
            /* 🔴 CORRECTED 2026-09-05 (RW-22): this comment used to say the offer stays
               at 0 "until Pro and Family are purchasable" — a trigger that had already
               fired. They ARE purchasable, off-site, and `static/pricing.md` and the
               description above both say so.
               The single 0 offer stays anyway, and now for the real reason: it describes
               the free plan, which is genuinely acquirable at 0, and `isAccessibleForFree`
               is true. Priced offers for Pro and Family are deliberately NOT listed — the
               app's own prerenderer omits `SoftwareApplication` offers entirely because a
               price in structured data is a purchasability claim, and these are paid on a
               payment page and granted by hand rather than bought in a checkout. */
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
            author: { '@id': `${SITE_URL}/#author` },
            publisher: { '@id': `${SITE_URL}/#organization` },
            isAccessibleForFree: true,
            softwareHelp: SITE_URL,
          },
        ],
      }),
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/docs',
          sidebarPath: './sidebars.ts',
          // `docs/` is BOTH the published content dir and the home of the
          // fixed-path internal file docs/MANUAL-TASKS.md. Keep the path (the
          // global rule fixes it) but never publish it — this repo is public.
          // NOTE: `exclude` REPLACES the plugin defaults, so they are restated.
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
            'MANUAL-TASKS.md',
          ],
          editUrl: `${DOCS_GITHUB}/tree/main/`,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.7,
          ignorePatterns: ['/search', '/docs/tags', '/docs/tags/**'],
          filename: 'sitemap.xml',
        },
        gtag: undefined,
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    discoveryFeed,
    /**
     * 🔴 THE CLAIM GATE — it reads the BUILT output, never the source.
     *
     * A docs-only push deploys through GitHub Actions without ever running the
     * app repo's test suite, so the app-side parity test cannot protect this
     * host on its own. This runs inside `docusaurus build`, which is what the
     * deploy workflow executes, so a retired claim fails the build before it
     * can reach a reader.
     *
     * It asserts on `outDir` rather than on `static/` because a claim can also
     * arrive through front matter, a React page or the site-wide JSON-LD — which
     * is exactly where the 2026-09-03 duplicate of this claim was found, in
     * `SoftwareApplication.description`, by a sweep rather than by reading.
     */
    function habitforgeClaimGate() {
      return {
        name: 'habitforge-claim-gate',
        async postBuild({ outDir }: { outDir: string }) {
          const { readdirSync, readFileSync, statSync } = await import('node:fs');
          const { join } = await import('node:path');
          const { RETIRED_CLAIMS, PLAY_LISTING_LIVE } = await import('./src/lib/publicClaims');

          const files: string[] = [];
          const walk = (dir: string): void => {
            for (const entry of readdirSync(dir)) {
              const full = join(dir, entry);
              if (statSync(full).isDirectory()) {
                if (entry !== 'assets' && entry !== 'img') walk(full);
              } else if (/\.(html|txt|md|json)$/.test(entry)) {
                files.push(full);
              }
            }
          };
          walk(outDir);

          // Anti-vacuity: a walk that found nothing must fail loudly rather than
          // report a clean build. A gate silently checking zero files is worse
          // than an absent one, because its presence is cited as coverage.
          if (files.length < 20) {
            throw new Error(
              `habitforge-claim-gate: only ${files.length} built files found under ${outDir} — refusing to report a pass.`,
            );
          }

          const found: string[] = [];
          let notListedLines = 0;
          for (const file of files) {
            const text = readFileSync(file, 'utf8');
            for (const claim of RETIRED_CLAIMS) {
              const hit = claim.pattern.exec(text);
              if (hit) {
                found.push(
                  `  ${file.slice(outDir.length + 1)}: "${hit[0]}" — ${claim.truth} (${claim.record})`,
                );
              }
            }
            if (/internal.testing|not on Google Play|not publicly listed/i.test(text)) {
              notListedLines += 1;
            }
          }

          if (found.length > 0) {
            throw new Error(
              `habitforge-claim-gate: ${found.length} retired claim(s) in the built site:\n${found.join('\n')}`,
            );
          }
          if (PLAY_LISTING_LIVE && notListedLines > 0) {
            throw new Error(
              `habitforge-claim-gate: the Play listing is live, but ${notListedLines} built file(s) still say it is not.`,
            );
          }
          if (!PLAY_LISTING_LIVE && notListedLines === 0) {
            throw new Error(
              'habitforge-claim-gate: no built file says the Android app is unlisted, but PLAY_LISTING_LIVE is false — either the flips ran early or this gate is reading nothing.',
            );
          }
          console.log(
            `habitforge-claim-gate: ${files.length} built files scanned, 0 retired claims, ${notListedLines} truthful "not listed" file(s).`,
          );
        },
      };
    },
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        indexBlog: false,
        docsRouteBasePath: '/',
      },
    ],
  ],

  themeConfig: {
    /* 🔴 A PNG, NOT THE SVG THIS NAMED UNTIL 2026-09-01. Facebook, X, LinkedIn
       and WhatsApp do not rasterise SVG, so every share of every docs page
       rendered with no card at all — while the tag was present and correct
       looking, which is why nothing caught it. The master beside it is
       `img/og-master.svg`; the PNG is its export. */
    image: 'img/og-default.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    metadata: [
      { name: 'keywords', content: 'habit tracker, habit streak, habit loop, rope visualization, check-in, points, levels, achievements, habit community, android habit app, pwa' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@aoneahsan' },
      { name: 'twitter:creator', content: '@aoneahsan' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'HabitForge Docs' },
    ],
    navbar: {
      title: 'HabitForge',
      logo: {
        alt: 'HabitForge logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/docs', label: 'Docs', position: 'left' },
        { to: '/docs/getting-started', label: 'Get started', position: 'left' },
        { to: '/docs/habits', label: 'Habits', position: 'left' },
        { to: '/docs/features/community', label: 'Community', position: 'left' },
        { href: APP_URL, label: 'Open the app ↗', position: 'right' },
        { href: DOCS_GITHUB, label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Get started', to: '/docs/getting-started' },
            { label: 'Habits', to: '/docs/habits' },
            { label: 'Features', to: '/docs/features' },
            { label: 'Apps & offline', to: '/docs/apps' },
            { label: 'Changelog', to: '/docs/reference/changelog' },
          ],
        },
        {
          title: 'HabitForge',
          items: [
            { label: 'Open the web app', href: APP_URL },
            { label: 'Privacy & terms', to: '/docs/reference/privacy-and-terms' },
            { label: 'Support', to: '/docs/reference/support' },
            { label: 'Docs source on GitHub', href: DOCS_GITHUB },
          ],
        },
        {
          title: 'Built by Ahsan Mahmood',
          items: [
            { label: 'Portfolio — aoneahsan.com', href: AUTHOR.url },
            { label: 'LinkedIn', href: AUTHOR.linkedin },
            { label: 'GitHub', href: AUTHOR.github },
            { label: 'NPM packages', href: AUTHOR.npm },
            { label: 'Email', href: `mailto:${AUTHOR.email}` },
            { label: 'Support the project', href: SUPPORT_URL },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ahsan Mahmood · HabitForge · MIT licensed docs.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'tsx', 'typescript'],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
