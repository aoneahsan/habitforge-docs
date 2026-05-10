import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHero(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <svg
        className={styles.heroDecor}
        aria-hidden="true"
        viewBox="0 0 1440 360"
        preserveAspectRatio="none"
      >
        <path
          d="M0 220 Q 360 120 720 220 T 1440 220 L 1440 360 L 0 360 Z"
          fill="#fff"
          opacity="0.18"
        />
        <path
          d="M0 280 Q 360 200 720 280 T 1440 280 L 1440 360 L 0 360 Z"
          fill="#fff"
          opacity="0.12"
        />
      </svg>
      <div className="container">
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs"
          >
            Get started in 5 minutes
          </Link>
          <Link
            className="button button--outline button--lg"
            href="https://habitforge.aoneahsan.com"
          >
            Open the app ↗
          </Link>
        </div>
        <p className={styles.builtBy}>
          Built and maintained by{' '}
          <Link href="https://aoneahsan.com">Ahsan Mahmood</Link> ·{' '}
          <Link href="https://linkedin.com/in/aoneahsan">LinkedIn</Link> ·{' '}
          <Link href="https://github.com/aoneahsan">GitHub</Link>
        </p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — habit tracking, streaks, and wellness in one app`}
      description="Official documentation for HabitForge: habit tracker with visual streaks, integrated water/weight/sleep/calorie/workout/reading/expense trackers, Pomodoro and meditation timers, daily journals, and a browser extension. Web, iOS, Android."
    >
      <HomepageHero />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
