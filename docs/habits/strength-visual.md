---
id: strength-visual
title: The habit-strength visual
description: How HabitForge displays habit strength — the 0–100 thread count, the four colour bands, the sparkline, and the calendar heatmap. What each visual is and is not telling you.
sidebar_label: Strength visual
sidebar_position: 6
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
keywords:
  - habit strength
  - habit visual
  - habit threads
  - strength meter
---

# The habit-strength visual

**Habit strength is a single integer from 0 to 100, displayed as a coloured bar with four bands and an optional sparkline of recent change.** This page explains what each pixel means, what the visual deliberately does NOT communicate, and how to read the calendar heatmap that aggregates strength across all habits.

The deeper "why" — research backing, asymmetric loss, the rejection of milestones like "21 days" — lives in [Why habits work](../getting-started/why-habits-work). This page is the reference for the visual itself.

## The number: 0 to 100 threads

Habit strength is internally stored as `strength: number` clamped to `[0, 100]`. Each completion adds threads at the difficulty's gain rate (4 / 5 / 6 for Easy / Medium / Hard). Each explicit miss subtracts threads at the loss rate (6 / 8 / 10).

The number itself appears in three places:

- The dashboard, as the bar's filled fraction and a small numeric label.
- The habit detail page, as the prominent header.
- The exported JSON, as `habit.strength`.

There is no fractional precision. Strength is always an integer.

## The four bands

| Band | Range | Colour |
|---|---|---|
| Weak | 0–20 | Red |
| Building | 21–50 | Orange |
| Established | 51–80 | Yellow / amber |
| Strong | 81–100 | Green |

The thresholds are product opinions, not derived from research. They produce a useful narrative:

- **Weak** — the habit is new or has just been hit by a bad week. Most new habits start here and stay here for the first 5–10 completions.
- **Building** — the habit is making real progress. A daily Easy habit reaches this band after about a week of consistency.
- **Established** — the habit is doing what habits do. Misses still cost threads, but the bar bounces back faster than it falls.
- **Strong** — the habit has accumulated meaningful inertia. A user with a Strong habit can usually take a week off without dropping below Established.

### Why these specific thresholds?

| Threshold | Reasoning |
|---|---|
| 20 (top of Weak) | A few completions get you out of the worst-looking colour. Avoids long red bars that read as "you're failing." |
| 50 (top of Building) | The midpoint. Roughly the point where one bad week can't undo the prior month. |
| 80 (top of Established) | High enough to feel earned. Easy daily habits reach this band after ~3 weeks. |
| 100 (top of Strong) | The cap. Discourages "max it out" gaming. |

There is no scientific claim that 50 threads = "the habit is automatic." The bands are useful framing, not measurement.

## The bar itself

The strength bar is rendered as an SVG path with rounded ends and a small breath of motion. Implementation notes:

- Animations are CSS-driven, ≤600 ms, and respect `prefers-reduced-motion: reduce`.
- The fill is a linear gradient inside the band's colour family — solid red looks aggressive, slightly graded red looks like real progress.
- The numeric label inside the bar is high-contrast on every band per WCAG 2.2 AA.
- On dark mode the same bands shift slightly so the green doesn't fluoresce.

There is no "thermometer mode" or "heart-rate mode" — the visual was deliberately picked to feel calm rather than dramatic.

## The sparkline

Below the strength bar, the habit detail page shows a 30-day sparkline of strength change. Each tick is one day's net change:

- Up = a completion was logged for that day.
- Down = a miss was logged.
- Flat = no record for that day.

The sparkline is a [D3.js](https://d3js.org/)-rendered SVG path. Hovering (or tapping) a tick reveals the date and the strength-change value.

The sparkline tells you the *pattern*. The bar tells you the *level*. Different signals; both are useful.

## The calendar heatmap

The calendar heatmap (sidebar → Calendar) shows every habit's completion across the last 12 months. Each cell is a day; the cell colour is the aggregate completion intensity:

| Cell colour | Meaning |
|---|---|
| Empty | no logged completions for that day |
| Light tint | one completion |
| Medium tint | two to three completions |
| Strong tint | four or more completions |

The heatmap is a multi-habit view. Individual habits' strength meters are not encoded into the cell colour — that would mix two different scales. The cell is the *count* of completions; the strength bar is the *level* of one specific habit.

Tapping a cell drills into that day's detail: which habits were completed, which were missed, and any notes attached.

## What the visuals do NOT show

Honest framing matters here. The visuals are useful but limited.

| The visual is **not** | Better signal |
|---|---|
| A measurement of "how automatic" the habit is | Phillippa Lally's automaticity scale (self-report, not in-app) |
| A comparison across users | The number is calibrated for sensitivity, not benchmarks |
| A measurement of effort | The note field on a completion |
| A measurement of outcomes | The relevant tracker (water, sleep, weight, etc.) |
| A guarantee of long-term sticking | Time and your own pattern |

If your reading-time habit is at 85 strength but you don't actually feel like a reader, the strength meter is correct (you've been logging consistently) and the identity formation is incomplete. That's a useful prompt to update the **Reward** field on the habit with an identity-based reframe.

## Two strength patterns to recognise

### The plateau

A habit climbs from 0 to ~70 over a few weeks, then sits in the high 70s. This is the most common pattern. It's not a bug. The math is calibrated so that maintaining 70 threads requires regular completions but does not push to 100 quickly. A miss-free month moves the bar from 70 to ~95 on a daily habit.

If the plateau bothers you, the lever is consistency, not difficulty. Bumping difficulty from Easy to Hard speeds up gains slightly but also speeds up losses — net plateau is unchanged.

### The sawtooth

A habit oscillates between 40 and 70 over weeks. This pattern means you complete most days but miss occasionally — and the asymmetric loss (6 down, 4 up) means the bar gets pushed down faster than it climbs back. Honest read: the habit is *almost* established but you're regularly forgetting one or two days a week.

Two fixes that work, ranked:

1. **Add a cue.** Most sawtooth patterns are about forgetting, not unwillingness. Filling in the **Cue** field on the habit (see [Create](./create#cue)) tends to flatten the pattern over a few weeks.
2. **Lower the difficulty.** If the habit is tagged Hard, switching to Easy reduces the loss-per-miss from 10 to 6, which lets the same pattern produce a higher equilibrium.

## The calendar heatmap on the dashboard

A small calendar widget on the dashboard shows the last 4 weeks. It is a strict subset of the full heatmap (sidebar → Calendar) — same data, smaller window. The weekly view is good for "did I do my habits this week?" The full heatmap is good for "did I do them this year?"

Both are read-only. To log for a past date, use [Logging for a past date](./complete-undo#logging-for-a-past-date).

## Accessibility

- The bar's text label always meets WCAG 2.2 AA contrast on its background.
- The four bands are distinguishable without colour: the numeric value (0–100) is shown beside the bar, and the band name is exposed to screen readers via `aria-label`.
- Reduced-motion users get an instant fill without the breath animation.
- The calendar heatmap announces date and completion count to screen readers; cell colour is reinforced by the aria-label.
- All hover-reveal information (sparkline tooltips) is also reachable via keyboard focus on web.

The accessibility audit and the full keyboard-shortcut list ship in [Theme & accessibility](/docs/theme) (Batch 9).

## Frequently asked questions

### Why does my habit drop more than it climbs?

By design. Loss per miss is larger than gain per completion at the same difficulty (Easy: 6 vs 4; Medium: 8 vs 5; Hard: 10 vs 6). The asymmetry comes from loss aversion (Kahneman & Tversky, 1979) — making losses feel proportionate to the slip while still being recoverable.

### Can I change the band thresholds?

Not via UI. The thresholds (20 / 50 / 80) are product opinions, not user-configurable.

### Is there a way to see strength change over time as a chart?

The 30-day sparkline is the chart. A longer-range strength chart is on the roadmap (specifically, a 90-day and 365-day view) but not committed.

### Can I export the strength values?

Yes. **Profile → Export my data** includes each habit's current strength and every completion's `strengthBefore`, `strengthAfter`, `strengthChange`. See [Privacy basics](../getting-started/privacy-basics#export-your-data).

### Why does the bar stop at 100?

Strength is clamped to `[0, 100]`. Without the cap, daily habits could accumulate hundreds of threads, which would make the bar meaningless. 100 is the cap for both display and the underlying math.

### Are achievements based on strength?

Some are. There are achievements for "first habit at 50 strength," "first habit at 80," "first habit at 100." They unlock once. See [Glossary → Achievement](../getting-started/glossary#achievement).

### Why does my friend's strength bar look different from mine?

Could be Difficulty (different gain/loss), could be the colour band (different range), could be theme (light vs dark slightly shifts shades). The math is the same across users.

### What's the technical implementation?

Strength is computed by walking the `hf_completions` records for a habit, summing `strengthChange` values, and clamping to `[0, 100]`. The current value is also denormalised onto `hf_habits.strength` for fast dashboard reads. On every new completion, both the new completion record AND the habit document are written in a Firestore batch. See [the public source for these docs](https://github.com/aoneahsan/habitforge-docs) — the app source itself is private.

## Where to next

- [Streak engine](./streak-engine) — what counts as a streak.
- [Complete and undo](./complete-undo) — marking habits done; reverting mistakes.
- [Why habits work](../getting-started/why-habits-work) — research behind the strength model.
- [Categories and tags](./categories-tags) — organising habits visually.
