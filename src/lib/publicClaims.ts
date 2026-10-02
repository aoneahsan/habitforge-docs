/**
 * VENDORED from the app repo's `src/config/publicClaims.ts`. Do not edit here.
 *
 * 🔴 WHY A COPY RATHER THAN AN IMPORT. This is a separate repository with its
 * own build; it cannot import from the app tree, and the docs site is exactly
 * where the retired claim survived last time — `pricing.md` and the site-wide
 * JSON-LD were corrected on 2026-09-03 while `llms.txt` kept saying the paid
 * plans were not for sale until 2026-09-05, on this host.
 *
 * 🔴 THE COPY IS HELD TRUE BY A TEST IN THE APP REPO
 * (`src/config/publicClaims.parity.test.ts`), which compares the two lists and
 * fails if they drift. Two layers, the same shape `ecosystemProducts.ts` uses:
 * this file gates the DEPLOY, and the app-side test gates the copy.
 */

export type RetiredClaim = {
  readonly pattern: RegExp;
  readonly truth: string;
  readonly record: string;
};

export const PLAY_LISTING_LIVE = false;

export const RETIRED_CLAIMS: readonly RetiredClaim[] = [
  {
    pattern: /not yet available for purchase/i,
    truth: 'Pro and Family are available now; on the web a card payment through Polar starts the plan, and a payment made another way is granted by hand.',
    record: 'RW-08 (2026-09-03), RW-22 (2026-09-05)',
  },
  {
    pattern: /currently ships the free tier/i,
    truth: 'All three plans are live. The free plan is generous by design, not the only one shipped.',
    record: 'RW-22 (2026-09-05)',
  },
  {
    pattern: /\bno paid tier\b/i,
    truth: 'Every product ships a plan set; this one has Free, Pro and Family.',
    record: 'OD-42 / W1 footer',
  },
  {
    pattern: /streak waits for you/i,
    truth: 'A pause keeps history and points, and the run restarts from zero on resume.',
    record: 'OD-140 — the sixth and last instance',
  },
  {
    pattern: /\bno (?!third-party )ads\b/i,
    truth:
      'There are house promotions for the developer\'s own other apps. The honest claim is "no third-party ads".',
    record: 'OD-151 (RW-20)',
  },
];
