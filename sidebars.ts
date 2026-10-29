import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Sidebar layout for the HabitForge docs.
 *
 * Every entry below points to a page that exists in `docs/`. Docusaurus
 * throws on a broken doc id at build time, so the build is the check that
 * this file and the content stay in sync.
 *
 * To add a page: create `docs/<group>/<slug>.md` and append its doc id
 * (e.g. `habits/create`) to the relevant array.
 */
const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    'getting-started',
    {
      type: 'category',
      label: 'Habits',
      collapsed: false,
      link: {
        type: 'generated-index',
        slug: '/habits',
        description:
          'Create a habit, check in, and read what the rope says: streaks, rope strength, points and levels, and how to pause or delete a habit.',
      },
      items: [
        'habits/create',
        'habits/check-ins-and-streaks',
        'habits/rope-strength',
        'habits/levels-and-points',
        'habits/manage',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      link: {
        type: 'generated-index',
        slug: '/features',
        description:
          'What HabitForge does beyond the daily check-in: analytics, achievements, the community, themes, reminders, AI and Speak, and the page tours.',
      },
      items: [
        'features/analytics',
        'features/achievements',
        'features/community',
        'features/themes',
        'features/reminders-and-notifications',
        'features/tours-and-walkthrough',
      ],
    },
    {
      type: 'category',
      label: 'Apps & offline',
      link: {
        type: 'generated-index',
        slug: '/apps',
        description:
          'Run HabitForge as a web app that installs to your home screen and works offline, or as the Android app on Google Play.',
      },
      items: [
        'apps/install-and-offline',
        'apps/android',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      link: {
        type: 'generated-index',
        slug: '/reference',
        description:
          'The changelog, a plain summary of the privacy policy and terms, and where to get help.',
      },
      items: [
        'reference/changelog',
        'reference/privacy-and-terms',
        'reference/support',
      ],
    },
  ],
};

export default sidebars;
