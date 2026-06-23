import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const SITE_URL = process.env.DOCS_SITE_URL ?? 'https://habitforge-docs.aoneahsan.com';
const BASE_URL = process.env.DOCS_BASE_URL ?? '/';

const AUTHOR = {
  name: 'Ahsan Mahmood',
  email: 'aoneahsan@gmail.com',
  url: 'https://aoneahsan.com',
  linkedin: 'https://linkedin.com/in/aoneahsan',
  github: 'https://github.com/aoneahsan',
  npm: 'https://npmjs.com/~aoneahsan',
} as const;

const APP_URL = 'https://habitforge.aoneahsan.com';
const DOCS_GITHUB = 'https://github.com/aoneahsan/habitforge-docs';

const config: Config = {
  title: 'HabitForge Docs',
  tagline: 'Build better habits — visual streaks, science-backed scheduling, and a full wellness toolbox in one app.',
  favicon: 'img/favicon.svg',

  url: SITE_URL,
  baseUrl: BASE_URL,
  trailingSlash: false,

  organizationName: 'aoneahsan',
  projectName: 'habitforge-docs',
  deploymentBranch: 'gh-pages',

  // All content batches have landed (2026-06-23) — every navbar/footer/homepage
  // target now exists, so broken links fail the build to catch regressions.
  // Cross-page heading anchors stay `warn` (they are fragile and not worth
  // failing CI over).
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    author: AUTHOR,
    appUrl: APP_URL,
    docsGitHub: DOCS_GITHUB,
  },

  // Inject site-wide JSON-LD (WebSite + Organization + Person/author).
  // Per-page Article / FAQPage / HowTo schemas are injected via the
  // `Layout` swizzle in src/theme (added in Batch 12).
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
              'Official documentation for HabitForge — habit tracking with visual streaks, integrated wellness trackers, focus timers, journals, and a browser extension.',
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
              'HabitForge is a free habit-tracking app with a forgiving streak engine, a visual habit-strength meter, integrated wellness, fitness, finance, and productivity trackers, focus timers, and journals. It runs on the web, Android, iOS (via Capacitor), and as a browser extension.',
            applicationCategory: 'LifestyleApplication',
            operatingSystem: 'Web, Android, iOS',
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
      { name: 'keywords', content: 'habit tracker, streak, productivity, pomodoro, water tracker, mood tracker, journal, wellness, capacitor, android, ios, browser extension' },
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
        { to: '/docs/getting-started', label: 'Getting started', position: 'left' },
        { to: '/docs/habits', label: 'Habits', position: 'left' },
        { to: '/docs/about', label: 'About', position: 'left' },
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
            { label: 'Getting started', to: '/docs/getting-started' },
            { label: 'Habits', to: '/docs/habits' },
            { label: 'Trackers', to: '/docs/trackers' },
            { label: 'Timers', to: '/docs/timers' },
            { label: 'FAQ', to: '/docs/reference' },
          ],
        },
        {
          title: 'Project',
          items: [
            { label: 'Open the app', href: APP_URL },
            { label: 'Source on GitHub', href: DOCS_GITHUB },
            { label: 'Roadmap', to: '/docs/reference' },
            { label: 'Changelog', to: '/docs/reference' },
            { label: 'Privacy', to: '/docs/legal' },
            { label: 'Terms', to: '/docs/legal' },
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
            {
              label: 'Support the project',
              href: 'https://aoneahsan.com/payment?project-id=habitforge-docs&project-identifier=habitforge-docs',
            },
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
