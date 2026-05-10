import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Sidebar layout for HabitForge docs.
 *
 * The structure mirrors the master plan in the main HabitForge repo
 * (`docs/docusaurus-docs-plan/00-MASTER-PLAN.md`). Pages are added batch
 * by batch — references here may point to pages that will exist after
 * a later batch lands. Docusaurus throws on broken doc IDs at build
 * time, so each entry below is enabled only when its file ships.
 *
 * To add a new doc page:
 *   1. Create the file under `docs/<group>/<slug>.md`
 *   2. Append its doc id (e.g. `getting-started/welcome`) to the
 *      relevant array below.
 */
const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Getting started',
      collapsed: false,
      link: { type: 'generated-index', slug: '/getting-started' },
      items: [
        'getting-started/welcome',
        'getting-started/what-is-habitforge',
        'getting-started/why-habits-work',
        'getting-started/sign-up',
        'getting-started/first-habit',
        'getting-started/glossary',
        'getting-started/account-basics',
        'getting-started/privacy-basics',
      ],
    },
    {
      type: 'category',
      label: 'Habits',
      link: { type: 'generated-index', slug: '/habits' },
      items: [
        'habits/create',
        'habits/edit-archive',
        'habits/schedule-reminders',
        'habits/streak-engine',
        'habits/complete-undo',
        'habits/strength-visual',
        'habits/categories-tags',
      ],
    },
    {
      type: 'category',
      label: 'Trackers',
      link: { type: 'generated-index', slug: '/trackers' },
      items: [
        'trackers/water',
        'trackers/weight',
        'trackers/sleep',
        'trackers/calories',
        // 'trackers/workout',     // Batch 5
        // 'trackers/reading',     // Batch 5
        // 'trackers/expenses',    // Batch 5
        // 'trackers/mood',        // Batch 5
      ],
    },
    {
      type: 'category',
      label: 'Timers',
      link: { type: 'generated-index', slug: '/timers' },
      items: [
        // 'timers/pomodoro',
        // 'timers/focus',
        // 'timers/meditation',
        // 'timers/breathing',
      ],
    },
    {
      type: 'category',
      label: 'Journals & mindset',
      link: { type: 'generated-index', slug: '/journals' },
      items: [
        // 'journals/daily-journal',
        // 'journals/gratitude',
        // 'journals/affirmations',
        // 'journals/goal-setting',
      ],
    },
    {
      type: 'category',
      label: 'Productivity & dashboards',
      link: { type: 'generated-index', slug: '/productivity' },
      items: [
        // 'productivity/todo',
        // 'productivity/morning-routine',
        // 'productivity/calendar-heatmap',
        // 'productivity/wellness-dashboard',
      ],
    },
    {
      type: 'category',
      label: 'Theme & accessibility',
      link: { type: 'generated-index', slug: '/theme' },
      items: [
        // 'theme/customizer',
        // 'theme/accent-colors',
        // 'theme/font-size',
        // 'theme/reduced-motion',
        // 'theme/keyboard-shortcuts',
        // 'theme/offline',
        // 'theme/sync',
        // 'theme/google-drive',
      ],
    },
    {
      type: 'category',
      label: 'Browser extension',
      link: { type: 'generated-index', slug: '/extension' },
      items: [
        // 'extension/install',
        // 'extension/popup',
        // 'extension/quick-add',
        // 'extension/sync',
        // 'extension/permissions',
      ],
    },
    {
      type: 'category',
      label: 'Mobile (iOS & Android)',
      link: { type: 'generated-index', slug: '/mobile' },
      items: [
        // 'mobile/install',
        // 'mobile/features',
        // 'mobile/offline',
        // 'mobile/notifications',
      ],
    },
    {
      type: 'category',
      label: 'Account & data',
      link: { type: 'generated-index', slug: '/account' },
      items: [
        // 'account/profile',
        // 'account/export',
        // 'account/deletion',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      link: { type: 'generated-index', slug: '/reference' },
      items: [
        // 'reference/faq',
        // 'reference/roadmap',
        // 'reference/changelog',
      ],
    },
    {
      type: 'category',
      label: 'Legal',
      link: { type: 'generated-index', slug: '/legal' },
      items: [
        // 'legal/privacy',
        // 'legal/terms',
        // 'legal/cookies',
        // 'legal/gdpr',
      ],
    },
    {
      type: 'category',
      label: 'About',
      link: { type: 'generated-index', slug: '/about' },
      items: [
        // 'about/author',
        // 'about/credits',
        // 'about/contact',
      ],
    },
  ],
};

export default sidebars;
