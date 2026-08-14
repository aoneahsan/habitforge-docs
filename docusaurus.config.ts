import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const SITE_URL = process.env.DOCS_SITE_URL ?? 'https://habitforge-docs.aoneahsan.com';
const BASE_URL = process.env.DOCS_BASE_URL ?? '/';

const AUTHOR = {
  name: 'Ahsan Mahmood',
  email: 'aoneahsan@gmail.com',
  url: SITE_URL,
  linkedin: 'https://linkedin.com/in/aoneahsan',
  github: 'https://github.com/aoneahsan',
  npm: 'https://npmjs.com/~aoneahsan',
} as const;

const APP_URL = 'https://habitforge.aoneahsan.com';
const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.aoneahsan.habitforge';
const SUPPORT_URL =
  'https://aoneahsan.com/payment?project-id=habitforge&project-identifier=com.aoneahsan.habitforge';
const DOCS_GITHUB = 'https://github.com/aoneahsan/habitforge-docs';

const config: Config = {
  title: 'HabitForge Docs',
  tagline: 'A habit tracker that turns your consistency into a rope you can watch grow stronger.',
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
      attributes: { name: 'theme-color', content: '#F97316' },
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
              'HabitForge is a habit tracker that turns your consistency into a visual rope. It uses the cue-routine-reward habit loop, daily check-ins that build streaks, points and a ten-tier level, weekly analytics, achievements, an optional community, and light/dark themes. It runs on the web and on Android. There is a free tier plus Pro and Family plans; the app currently ships the free tier and the paid plans are not yet available for purchase.',
            applicationCategory: 'LifestyleApplication',
            operatingSystem: 'Web, Android',
            /* 🔴 The offer describes what can be ACQUIRED today, which is the free tier —
               so it stays at 0 until Pro and Family are purchasable. Listing an offer for
               a plan nobody can buy is the mirror image of the claim this change removed:
               a machine-readable price that does not match reality. Update this and
               `static/pricing.md` in the SAME change when purchase goes live. */
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
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        gtag: undefined,
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
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
    image: 'img/og-default.svg',
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
        { href: PLAY_URL, label: 'Google Play ↗', position: 'right' },
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
            { label: 'Get it on Google Play', href: PLAY_URL },
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
