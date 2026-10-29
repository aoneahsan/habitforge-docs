# HabitForge pricing

> Machine-readable pricing for AI buying agents and search systems. Last updated: 2026-10-29.
> The generated source of truth is the app's own file, written on every build from the plan registry the
> app enforces: https://habitforge.aoneahsan.com/pricing.md — the numbers below match it on the date above.

## Summary

HabitForge has a free plan and two paid plans, Pro and Family. The free plan is a real product rather than a
trial: habits, check-ins, streaks, the rope visualization, points and levels, analytics, achievements and the
community are all included at no cost, limited by scale rather than by feature. Pro and Family lift those
limits.

**Platforms:** the web app at https://habitforge.aoneahsan.com, installable as a PWA. The Android app is
on Google Play (https://play.google.com/store/apps/details?id=com.aoneahsan.habitforge). There is no iOS app.

**Availability:** Pro and Family are available now. On the web a plan is paid for by card through Polar, the
payment provider, and starts when the payment is confirmed.

## Plans

| Plan | Monthly | Yearly | Seats | Notes |
|---|---|---|---|---|
| Free | $0 | $0 | 1 | The whole product, limited by scale rather than by feature. |
| Pro | $9.99 | $99.90 | 1 | One person, with the ceilings lifted. |
| Family | $8.99 a seat | $89.90 a seat | 3–6 | Priced per seat, from three seats ($26.97 a month) to six. Each member is on better numbers than Pro. Below three people the tier does not apply. |

## Limits

| Limit | Free | Pro | Family |
|---|---|---|---|
| Active habits | 30 | 100 | Unlimited |
| Challenges you create | 30 per 30 days | 100 per 30 days | Unlimited |
| Your challenges open at once | 30 | 100 | Unlimited |
| People in a challenge you created | 50 | 500 | Unlimited |
| Friends | 500 | Unlimited | Unlimited |
| Analytics history | 90 days | Full history | Full history |
| Seats | 1 | 1 | 3–6 |
| AI level | Spark | Pulse | Surge |
| Surge after unbroken paid months | On a paid plan | 3 months | Surge from the start |
| Habit drafts with AI | 30 a month | 200 a month | 300 a month |
| Weekly reflections | 4 a month | 30 a month | 60 a month |
| Post wording help | 30 a month | 200 a month | 300 a month |
| Speak recordings turned into records | 30 a month | 200 a month | 300 a month |

- Paused and archived habits do not count towards the habit limit.
- Joining someone else's challenge is never limited.
- Check-ins are kept on every plan; analytics history is how far back the charts read.
- Family is three to six people, paid per seat. Three is the floor, not a suggestion.
- AI level: Spark is fast and efficient, Pulse reasons more sharply, Surge thinks deepest. A Pro plan paid month
  after month, without a gap, reaches Surge. Each AI allowance is per month and comes back on the 1st.
- Speak: recording is never limited; the allowance counts the recordings HabitForge drafts records from.
- All prices are in US dollars. A year costs ten months' price.
- A tier's limits are administered from the app's admin panel, so a number above can move without a
  release; the app's generated file is always current.

## How payment works

On the web, sign in and open the plans page (https://habitforge.aoneahsan.com/pricing), choose Pro or Family
and press Continue to payment. The card is entered on a page run by Polar, the payment provider and seller of
record; HabitForge never sees or stores it. The plan starts when the payment is confirmed, usually within a
minute, and renews each period until it is cancelled from the same page.

Every plan records the plan it falls back to and the date that happens. Cancelling stops the renewal rather
than the period already paid for, and nothing is deleted on downgrade.

The Android app shows plan status and gates features; it never sells and never links out to a payment page,
because Google Play requires Play Billing for digital goods and this product takes payment on the web.

## Included on every plan, including Free

- Habits with the cue → routine → reward loop, three kinds (build, break, maintain), schedules and pauses
- Daily check-ins, streaks, points, and the ten-level forge ladder
- The rope habit-strength visualization
- Personal analytics and charts
- Twelve achievements
- The community: board, friends, challenges, a leaderboard you can leave, with report and block moderation
- Ten appearance settings, dark mode included, that follow your account
- Offline support (PWA) and the Android app with over-the-air updates
- Account data export and deletion

Nothing here is funded by selling what you record, on any plan.

## Things HabitForge cannot help with at any price

- Medical advice or diagnoses
- Programmatic API access (none exists)
- An iOS app (there is no App Store build)
- A browser extension (there is none)
