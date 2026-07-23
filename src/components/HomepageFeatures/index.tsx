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

const FlameIcon = (
  <svg viewBox="0 0 24 24" className={styles.featureSvg} aria-hidden="true">
    <path
      fill="url(#hf-flame)"
      d="M12 2c1.5 3 4 5 4 8a4 4 0 0 1-8 0c0-1 .5-2 1-3-2 1-4 3-4 6a7 7 0 0 0 14 0c0-5-4-8-7-11Z"
    />
    <defs>
      <linearGradient id="hf-flame" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fb923c" />
        <stop offset="100%" stopColor="#dc2626" />
      </linearGradient>
    </defs>
  </svg>
);

const ChartIcon = (
  <svg viewBox="0 0 24 24" className={styles.featureSvg} aria-hidden="true" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="M7 15l4-6 3 4 5-7" />
  </svg>
);

const TimerIcon = (
  <svg viewBox="0 0 24 24" className={styles.featureSvg} aria-hidden="true" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="13" r="8" />
    <path d="M12 9v4l2 2" />
    <path d="M9 2h6" />
  </svg>
);

const NotebookIcon = (
  <svg viewBox="0 0 24 24" className={styles.featureSvg} aria-hidden="true" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4a2 2 0 0 1 2-2h11a3 3 0 0 1 3 3v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
    <path d="M8 7h8M8 11h8M8 15h5" />
  </svg>
);

const LayersIcon = (
  <svg viewBox="0 0 24 24" className={styles.featureSvg} aria-hidden="true" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 2 8l10 6 10-6Z" />
    <path d="M2 14l10 6 10-6" />
  </svg>
);

const ShieldIcon = (
  <svg viewBox="0 0 24 24" className={styles.featureSvg} aria-hidden="true" fill="none" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2 4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const FEATURES: FeatureItem[] = [
  {
    title: 'See your habits as a rope',
    icon: FlameIcon,
    href: '/docs/habits/rope-strength',
    description: (
      <>
        Each habit is drawn as a rope that thickens from a thin thread to a cable as
        you stay consistent, and frays when you slip. A deterministic picture — not a
        prediction.
      </>
    ),
  },
  {
    title: 'Check in, build streaks',
    icon: TimerIcon,
    href: '/docs/habits/check-ins-and-streaks',
    description: (
      <>
        Mark a habit done each day it's due. Consecutive check-ins build a streak and
        earn points, using the cue → routine → reward loop from <em>The Power of
        Habit</em>.
      </>
    ),
  },
  {
    title: 'Points, levels, and achievements',
    icon: NotebookIcon,
    href: '/docs/habits/levels-and-points',
    description: (
      <>
        Points climb a ten-tier forge level from Spark to Forge Master, and
        milestones unlock achievements with a celebration moment and bonus points.
      </>
    ),
  },
  {
    title: 'Read your week',
    icon: ChartIcon,
    href: '/docs/features/analytics',
    description: (
      <>
        Weekly analytics turn your check-in history into D3 charts, so you can see
        which habits are holding and where consistency is slipping.
      </>
    ),
  },
  {
    title: 'An optional community',
    icon: ShieldIcon,
    href: '/docs/features/community',
    description: (
      <>
        Opt in to a feed, challenges, friends, and a leaderboard — with report and
        block tools you control. Track alone or together; it's your choice.
      </>
    ),
  },
  {
    title: 'Web and Android, online or off',
    icon: LayersIcon,
    href: '/docs/apps/android',
    description: (
      <>
        Use it in any browser or install the Android app from Google Play, with
        automatic updates. As a PWA it keeps working offline and syncs when you
        reconnect.
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
