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
    title: 'Visual streaks that stay honest',
    icon: FlameIcon,
    href: '/docs/habits',
    description: (
      <>
        A habit-strength meter shows progress at a glance. The streak engine handles
        timezones, travel, and skipped days without silently inflating your numbers.
      </>
    ),
  },
  {
    title: 'A wellness toolbox in one place',
    icon: ChartIcon,
    href: '/docs/trackers',
    description: (
      <>
        Water, weight, sleep, calories, workouts, reading, expenses, mood — all
        tracked alongside habits, with D3-powered charts you can actually read.
      </>
    ),
  },
  {
    title: 'Focus timers built for deep work',
    icon: TimerIcon,
    href: '/docs/timers',
    description: (
      <>
        Pomodoro, focus sessions, meditation, and breathing exercises — with audio
        cues, background-friendly counters, and session history that ties back to
        your habits.
      </>
    ),
  },
  {
    title: 'Journals that stay yours',
    icon: NotebookIcon,
    href: '/docs/journals',
    description: (
      <>
        Daily journal, gratitude, affirmations, mood tracker, goal setting. Optional
        Google Drive backup writes to <em>your</em> Drive folder — not ours.
      </>
    ),
  },
  {
    title: 'Web, mobile, and a browser extension',
    icon: LayersIcon,
    href: '/docs/extension',
    description: (
      <>
        Same data, every surface. The Capacitor mobile build keeps things native; the
        browser extension adds quick-add and a popup view of today.
      </>
    ),
  },
  {
    title: 'Privacy-respecting by default',
    icon: ShieldIcon,
    href: '/docs/legal',
    description: (
      <>
        No third-party analytics scripts loaded into the extension. Account deletion
        removes Firestore data. Read the privacy page for the exact list of what we
        store and why.
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
