/**
 * Every place HabitForge is released — the ONLY place a store or surface URL lives in this docs site
 * (standard aoneahsan-cccs-platform-links). Each surface passed its release proof on `verified`:
 * the web app answered 200, the Play listing is on the owner's developer page.
 */
export type PlatformId = 'web' | 'android' | 'docs';

export interface Platform {
  id: PlatformId;
  /** Store or surface name (a proper name, not copy). */
  name: string;
  href: string;
  /** What this surface is for, in HabitForge's words. */
  title: string;
  text: string;
  cta: string;
  primary?: boolean;
  verified: string;
}

export const PLATFORMS: readonly Platform[] = [
  {id: 'web', name: 'HabitForge web app', href: 'https://habitforge.aoneahsan.com', title: 'In your browser', text: 'Check off today, see your streaks and plan the week on any computer.', cta: 'Open HabitForge', primary: true, verified: '2026-11-20'},
  {id: 'android', name: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.aoneahsan.habitforge', title: 'On your Android phone', text: 'Tick a habit the moment it is done, with reminders that arrive on time.', cta: 'Get it on Google Play', verified: '2026-11-20'},
  {id: 'docs', name: 'Documentation', href: 'https://habitforge-docs.aoneahsan.com', title: 'These docs', text: 'How habits, streaks, reminders and the community work, one page each.', cta: 'Read the docs', verified: '2026-11-20'},
];

export const APPS_PAGE = {
  title: 'Get HabitForge',
  description: 'Every place HabitForge is released: the web app, the Android app on Google Play, and these docs.',
  lead: 'Your habits and streaks on the web and on your phone, with these guides a tab away.',
} as const;

/** This site is the docs surface. */
export const CURRENT_SURFACE: PlatformId = 'docs';
export const OTHER_PLATFORMS: readonly Platform[] = PLATFORMS.filter((platform) => platform.id !== CURRENT_SURFACE);
export const PRIMARY_PLATFORM: Platform = PLATFORMS.find((platform) => platform.primary) ?? PLATFORMS[0];
export function platformHref(id: PlatformId): string {
  const found = PLATFORMS.find((platform) => platform.id === id);
  if (!found) throw new Error(`Unknown platform: ${id}`);
  return found.href;
}
/** `/apps` changes only when this list does: its sitemap date is the newest proof date. */
export const APPS_LASTMOD: string = PLATFORMS.map((platform) => platform.verified).sort().at(-1) ?? '2026-11-20';
