---
id: mood
title: Mood tracker
description: Log a daily 1–5 mood rating with optional factors (sleep, work, social, exercise, food, etc.) and a note. The HabitForge mood tracker shows trends over weeks and cross-references mood against habit completion.
sidebar_label: Mood
sidebar_position: 8
last_update:
  date: 2026-05-11
  author: Ahsan Mahmood
keywords:
  - mood tracker
  - daily mood log
  - mood rating
  - mood factors
  - emotional tracking
---

# Mood tracker

**The HabitForge mood tracker logs one entry per day with a 1–5 mood rating, a selectable list of factors that may have influenced the mood, and an optional note.** It shows mood trends over weeks and months and automatically links each entry to your habit-completion rate for the same day. The tracker is descriptive, not diagnostic — it captures how you say you feel and lays it next to what you actually did.

This page documents the entry form, the 1–5 rating scale, the factor list, the auto-attached habit-completion percentage, and the mood-vs-habit cross-plot on the wellness dashboard. It does not give mental-health advice — see the [FAQ](#what-if-my-mood-stays-low-for-weeks) for what HabitForge does and does not claim.

## Use cases

### Spotting weekly patterns

Most users have a "Sunday-night dread" or a "post-Wednesday energy slump" they vaguely sense but never confirm. A month of honest mood logging makes the pattern impossible to miss — and once seen, it's actionable.

### Validating a habit's emotional impact

A daily-walk habit that "should" improve mood can be tested directly: walk days vs no-walk days, average mood on each. The cross-plot on the wellness dashboard shows it visually. The tracker is descriptive — it doesn't claim causation, but the pattern is informative.

### Spotting external triggers

The factor list (sleep, work, social, exercise, food, news / world events, weather, illness, hormonal cycle, conflict, money) lets you tag what was going on. Aggregated over months, recurring negative-tag patterns surface. "Work" tagged on every 2-rating Monday is data.

### Therapy / journaling support

Users in therapy often find the mood log useful between sessions — having an honest week of numbers to share beats trying to remember in the moment. The tracker is a record, not a therapeutic tool, but a record can be useful.

### Detecting hypomania / depressive spirals (low-grade)

Honest framing: this is not a clinical diagnostic. But a user with a tendency toward mood disorders may notice a multi-day pattern they'd otherwise rationalise. **If patterns concern you, talk to a clinician.** The tracker captures data; interpretation is yours.

## How it works

### The entry

Each day writes a `MoodEntry` to `hf_mood_entries`:

| Field | Type | Notes |
|---|---|---|
| `mood` | 1, 2, 3, 4, or 5 | Your subjective rating. |
| `factors` | string[] | Multi-select tags. |
| `note` | string? | Optional free text. |
| `habitCompletionRate` | number? | Auto-attached: % of today's due habits completed. |
| `date` | string | `YYYY-MM-DD` in your device's timezone. |

One entry per day. Re-saving the same date overwrites the existing entry.

### The 1–5 scale

| Rating | Meaning (calibration suggestion) |
|---|---|
| 1 | Very low. Bad day. Struggling. |
| 2 | Low. Off. Something is wrong. |
| 3 | Neutral / fine. Normal day. |
| 4 | Good. Above baseline. |
| 5 | Excellent. Great day. |

The scale is subjective. The honest framing: the *direction* of change matters more than the absolute number. A 3 → 2 trend over a week is information; a 3 every day for a year is more about the scale's resolution than about your life.

### The factor list

Selectable factors per entry:

- sleep (good or bad)
- work
- social
- exercise
- food
- news / world events
- weather
- illness
- hormonal cycle
- conflict
- money
- (custom — type your own)

Factors are tags, not directions. "Work" can appear on a great Monday and on a terrible Monday — what the factor signals is "work was a big part of today." Patterns surface in aggregate.

### Habit-completion auto-link

When you save a mood entry, the app records the percentage of your due habits that were marked complete on the same date. This is `habitCompletionRate` — a number 0–100. It's stored on the entry so that historical analysis (mood vs habit completion) doesn't rely on recomputing.

The link is one-way: habits don't reference the mood. The mood entry borrows the habit data once at save time.

### The trend chart

A 30-day chart shows daily mood (line) with factor tags as small icons below each day. The chart respects reduced-motion preferences and is keyboard-navigable.

A separate 12-month heatmap (Mood → Calendar) shows every day as a cell coloured by mood rating. Bad-stretch weeks are visually obvious.

## Step-by-step: log today's mood

1. Sidebar → Trackers → Mood → **Add entry**.
2. Tap a **mood rating** 1–5.
3. Optionally tap any **factors** that applied.
4. Optionally write a note.
5. Save.

The mood row on the dashboard updates immediately. The habit-completion rate is attached automatically.

## Step-by-step: log mood for yesterday

1. Mood → calendar view → tap yesterday.
2. **Add / edit** entry.
3. Pick mood, factors, note → Save.

There's no time limit. Logging late is better than not logging.

## Step-by-step: change the entry

1. Mood → calendar → tap the date.
2. Edit fields → Save.

The previous entry is replaced. The history shows the latest state, not a revision trail.

## Cross-plot with habits

The wellness dashboard (sidebar → Dashboard) shows a scatter of mood (Y-axis) against habit-completion rate (X-axis) for the last 90 days. Each point is one day.

Patterns to look for:

- **Tight cluster top-right** — high mood days are also high habit-completion days. The habits are working (or you log habits more honestly when you feel better).
- **Wide scatter** — mood and habit completion are decoupled. Mood is being driven by factors other than your habit list.
- **Cluster bottom-left, scatter top-right** — bad days are uniformly bad, but good days vary widely. Common pattern; often points to a specific consistent stressor on the low-mood days.

The chart is read-only and runs no statistical inference. It shows the data; you eyeball it.

## Tips

- **Log at the same time daily.** End-of-day or first-thing-morning. Time-of-day affects mood ratings — keep the time consistent to keep the data comparable.
- **Don't game the scale.** A 4 every day "to stay positive" defeats the tracker. The bad days are the informative ones; honest 2s and 3s are what make the chart useful.
- **Use factors generously.** Tagging adds 5 seconds and roughly doubles the long-term value of the data.
- **Don't compare to a partner.** Subjective 1–5 scales differ wildly between people. Your 3 is not someone else's 3.
- **Take breaks from logging.** A two-week pause is fine. Resume when it feels useful again. The tracker is a tool, not an obligation.

## Frequently asked questions

### What if my mood stays low for weeks?

The tracker is a record, not a treatment. Persistent low mood is a signal to talk to a doctor or therapist. **HabitForge does not give mental-health advice or screen for clinical conditions.** If a multi-week pattern concerns you, please contact a clinician. Mental-health crisis resources are linked at the bottom of the in-app mood page.

### Can I log multiple mood entries per day?

One entry per day in the current data model. Workarounds: use the note to capture intra-day shifts ("morning 4, afternoon 2 after meeting"), or split the day with two manual entries on the same date — the second overwrites the first.

The product opinion: a single end-of-day rating captures most of the signal. Multiple ratings per day add complexity without much gain.

### Does the mood tracker integrate with the Emotion Wheel?

The Emotion Wheel (sidebar → Tools → Emotion Wheel) is a separate, more granular feeling-naming tool used for in-the-moment emotional clarity. The mood tracker is the daily-summary tool. They're complementary and don't share data automatically — by design, since granular emotional vocabulary and a 1–5 daily rating capture different things.

### Will HabitForge ever screen for depression / anxiety?

Not from validated clinical instruments (PHQ-9, GAD-7, etc.). Those instruments belong in a clinical context with someone who can interpret them. HabitForge's stance: be transparent about being a record, not a diagnostic.

### Can I share my mood data?

Not from within the app. Export your data (**Profile → Export my data**) and share the JSON manually if you want to share it with a therapist or partner.

### Does the cross-plot prove anything?

No. Cross-plots show correlations within your own data — they do not establish causation, control for confounders, or generalise to anyone else. Useful for spotting patterns; not useful as evidence of anything.

### What if I forgot to log for a week?

Open Mood → calendar → tap each missed day → log as best as you remember. Honest backfill is better than no data, but pristine real-time data is best.

### Why is habit-completion rate auto-attached?

So that historical mood-vs-habits analysis works even after habits are archived or deleted. If the rate were computed on the fly, deleting a habit would retroactively change the cross-plot. Storing the rate on the entry is the more honest record.

### Can I disable the habit-completion auto-link?

Not currently. The field is populated automatically. The privacy implication: a mood entry contains a small fact about your habits from that day. If that's a concern, see [Privacy basics](../getting-started/privacy-basics) for the full data picture.

### Can I customise the factor list?

Yes — type a custom factor in the entry form. Custom factors are saved to your account and appear in the picker on future entries.

### Does HabitForge ever auto-detect mood?

No. The app does not analyse your typing patterns, voice, or face. Mood ratings come from you, every time.

## Where to next

- [Workout log](./workout) — exercise sessions.
- [Reading tracker](./reading) — books and reading sessions.
- [Expenses](./expenses) — income / expense with budgets.
- [Sleep tracker](./sleep) — bedtime / wake time / quality (commonly cross-referenced with mood).
- [Habits → Create](../habits/create) — for mood-supporting habits.
