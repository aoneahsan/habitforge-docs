/** Every word the guides' fact tables print, in one place, beside the component that prints them. */
export const rivalWords = {
  lastChecked: 'Last checked',
  checkNote: 'Prices and features change, so every fact links to the page it came from.',
  checkSite: (name: string) => `Check ${name} yourself`,
  pricesCaption: (name: string) => `What ${name} charges`,
  featuresCaption: (name: string) => `${name} and HabitForge, feature by feature`,
  plan: 'Plan',
  price: 'Price',
  terms: 'Terms',
  source: 'Source',
  feature: 'Feature',
  amountNotStated: 'Amount not stated',
  free: 'Free',
  guideLink: (name: string) => `Moving from ${name}`,
  period: { month: 'a month', year: 'a year', week: 'a week', 'one-time': 'once' },
  status: {
    yes: 'Yes',
    no: 'No',
    partial: 'Partly',
    'not-stated': 'Not stated on the pages we checked',
  },
} as const;
