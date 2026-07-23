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
      link: { type: 'generated-index', slug: '/habits' },
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
      link: { type: 'generated-index', slug: '/features' },
      items: [
        'features/analytics',
        'features/achievements',
        'features/community',
        'features/themes',
      ],
    },
    {
      type: 'category',
      label: 'Apps & offline',
      link: { type: 'generated-index', slug: '/apps' },
      items: [
        'apps/install-and-offline',
        'apps/android',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      link: { type: 'generated-index', slug: '/reference' },
      items: [
        'reference/changelog',
        'reference/privacy-and-terms',
        'reference/support',
      ],
    },
  ],
};

export default sidebars;
