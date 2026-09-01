import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  href: string;
  icon: ReactNode;
};

/**
 * 🔴 Every icon paints with `currentColor`. The colour comes from
 * `.featureSvg` in styles.module.css, which reads `--ifm-color-primary`.
 *
 * They previously hardcoded `stroke="#ea580c"` and a `#fb923c -> #dc2626`
 * gradient inline, so retuning the site palette in custom.css left six orange
 * icons sitting on an ember page. Do not put a hex back in this file.
 *
 * Three of the six also depicted the wrong thing, which mattered more than the
 * colour did:
 *   - a FLAME headed the card about the ROPE. The rope is the product's motif,
 *     and the docs OG card had already been rebuilt for exactly this reason.
 *   - a TIMER headed check-ins, and a NOTEBOOK headed points and levels.
 *     HabitForge has no timers and no journal; this repo's own guide says so
 *     in as many words, and the old generic-template pages for both were
 *     deleted in 2026-07. The icons outlived the pages.
 */

/** A braid thickening left to right: thread -> string -> rope. */
const RopeIcon = (
  <svg viewBox="0 0 24 24" className={styles.featureSvg} aria-hidden="true" fill="none" stroke="currentColor" strokeLinecap="round">
    <g opacity="0.45">
      <path d="M2 12c1.67 0 1.67 3.5 3.33 3.5s1.67-3.5 3.34-3.5" strokeWidth="1.4" />
      <path d="M8.67 12c1.67 0 1.67 5 3.33 5s1.67-5 3.33-5" strokeWidth="2.2" />
      <path d="M15.33 12c1.67 0 1.67 6.5 3.33 6.5s1.67-6.5 3.34-6.5" strokeWidth="3.2" />
    </g>
    <path d="M2 12c1.67 0 1.67-3.5 3.33-3.5s1.67 3.5 3.34 3.5" strokeWidth="1.4" />
    <path d="M8.67 12c1.67 0 1.67-5 3.33-5s1.67 5 3.33 5" strokeWidth="2.2" />
    <path d="M15.33 12c1.67 0 1.67-6.5 3.33-6.5s1.67 6.5 3.34 6.5" strokeWidth="3.2" />
  </svg>
);

/** A day marked done — what a check-in actually is. */
const CheckDayIcon = (
  <svg viewBox="0 0 24 24" className={styles.featureSvg} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="16" rx="2.5" />
    <path d="M8 3v4M16 3v4M3 10h18" />
    <path d="m8.5 15.5 2.5 2.5 4.5-5" />
  </svg>
);

/** A milestone, for the levels and achievements card. */
const MedalIcon = (
  <svg viewBox="0 0 24 24" className={styles.featureSvg} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="9" r="5.5" />
    <path d="m12 6.6 1 2 2.2.3-1.6 1.5.4 2.2-2-1-2 1 .4-2.2-1.6-1.5 2.2-.3z" />
    <path d="M8.5 14.2 7 21l5-2.4L17 21l-1.5-6.8" />
  </svg>
);

const ChartIcon = (
  <svg viewBox="0 0 24 24" className={styles.featureSvg} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="M7 15l4-6 3 4 5-7" />
  </svg>
);

/** Other people — the community card's actual subject. */
const PeopleIcon = (
  <svg viewBox="0 0 24 24" className={styles.featureSvg} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 20a6 6 0 0 1 12 0" />
    <path d="M16.5 5.5a3.2 3.2 0 0 1 0 5.6" />
    <path d="M18 14.4A6 6 0 0 1 21 20" />
  </svg>
);

/** A screen and a phone, for the web-and-Android card. */
const DevicesIcon = (
  <svg viewBox="0 0 24 24" className={styles.featureSvg} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="12.5" height="9.5" rx="1.5" />
    <path d="M8.25 13.5V18M5.5 18h5.5" />
    <rect x="16.5" y="8.5" width="5.5" height="11.5" rx="1.5" />
  </svg>
);

const FEATURES: FeatureItem[] = [
  {
    title: 'Your consistency, drawn as a rope',
    icon: RopeIcon,
    href: '/docs/habits/rope-strength',
    description: (
      <>
        Each habit is drawn as a rope that thickens from a thin thread towards a
        chain as you keep showing up, and frays where you stopped. A deterministic
        picture, not a prediction.
      </>
    ),
  },
  {
    title: 'Check in, build a streak',
    icon: CheckDayIcon,
    href: '/docs/habits/check-ins-and-streaks',
    description: (
      <>
        Mark a habit done on each day it is due. Consecutive check-ins build a streak
        and earn points, around the cue → routine → reward loop.
      </>
    ),
  },
  {
    title: 'Points, levels and achievements',
    icon: MedalIcon,
    href: '/docs/habits/levels-and-points',
    description: (
      <>
        Showing up earns points, and points earn ten levels from Spark to Forge
        Master. Milestones unlock achievements, and each one is worth points.
      </>
    ),
  },
  {
    title: 'Read your week',
    icon: ChartIcon,
    href: '/docs/features/analytics',
    description: (
      <>
        Weekly analytics turn your check-in history into charts, so you can see which
        habits are holding and where consistency is slipping.
      </>
    ),
  },
  {
    title: 'The community, and who sees you',
    icon: PeopleIcon,
    href: '/docs/features/community',
    description: (
      <>
        Post to a board, add friends, and join challenges scored against a target. A
        new profile is public and on the leaderboard until you change one switch and
        one separate choice. Neither is opt-in.
      </>
    ),
  },
  {
    title: 'Web now, Android in testing',
    icon: DevicesIcon,
    href: '/docs/apps/android',
    description: (
      <>
        Use it in any browser, or add the web app to your home screen. It works
        offline and syncs when you reconnect. The Android build is in internal testing
        and not on Google Play yet.
      </>
    ),
  },
];

function Feature({ title, description, icon, href }: FeatureItem): ReactNode {
  return (
    <div className={clsx('col col--4')}>
      <Link to={href} className={styles.featureCard}>
        <div>{icon}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FEATURES.map((f) => (
            <Feature key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
