---
id: water
title: Water intake tracker
description: Log water intake in ml or oz, set a daily hydration goal, and pair it with a habit. The HabitForge water tracker uses one-tap quick-amounts and shows the day's running total against your goal.
sidebar_label: Water
sidebar_position: 1
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
keywords:
  - water tracker
  - hydration tracker
  - water intake log
  - daily water goal
---

# Water intake tracker

**The HabitForge water tracker logs each glass or bottle of water you drink, totals it for the day, and shows progress toward a daily hydration goal you set.** It supports both metric (millilitres) and imperial (fluid ounces) units, optional reminders at a fixed interval, and a row of one-tap quick-amount buttons so logging takes about half a second.

This page documents the form, the daily goal, the quick-amounts row, and the reminders. It does not give medical hydration advice — see the [FAQ on goal sizing](#how-do-i-pick-a-daily-goal) for what the app does and does not claim.

## Use cases

### Pairing with a habit

The most common pattern: a habit named `Drink water after waking` plus the water tracker. Marking the habit complete is the cue; tapping `+ 250 ml` on the water row is the actual record. The two reinforce each other — the habit is the routine, the tracker is the proof.

### Catching afternoon drift

A user who drinks plenty of water before noon and forgets afterward will see the running total flatline on the dashboard's water row from 2pm onward. The visual signal is what most users say flips the behaviour, more than any specific goal number.

### Fluid-restricted users

For users who genuinely need to monitor fluid intake (kidney issues, heart failure, lithium adherence), the same tracker supports a goal as a *cap* rather than a target — see [Inverting the goal](#inverting-the-goal-as-a-cap) below. HabitForge does not give medical advice; the tool is general-purpose.

### Travel days

Long flights are the most reliable producers of dehydration. Logging from your phone during a flight (offline write, syncs on reconnect) keeps the day's total honest and the next day's goal rebound easier.

### Workout context

A user with a workout habit can log a `+500 ml` post-workout entry to capture the spike. Over weeks the calendar heatmap shows whether workout days are also hydration days — useful pattern, no analytics required.

## How it works

### The log entry

Each log writes a `WaterLog` record to Firestore (`hf_water_logs`):

| Field | Type | Notes |
|---|---|---|
| `amount` | number | Quantity drunk for this entry. |
| `unit` | `'ml'` or `'oz'` | Inherited from your settings; can be overridden per-entry. |
| `time` | string | The local time you logged at, `HH:mm`. |
| `date` | string | `YYYY-MM-DD` in your device's timezone. |
| `userId` | string | Your `uid`. |

The day's total is `sum(amount where date = today)`. The dashboard's water row shows that total with the goal alongside.

### Quick-amounts

The quick-amount buttons are a row of pre-set values you tap to log without typing. The defaults are `250 ml`, `500 ml`, `750 ml` (metric) or `8 oz`, `16 oz`, `24 oz` (imperial). They are configurable in **Water settings** — pick any four values that match the cups, bottles, or mugs you actually use.

The whole point of quick-amounts is to make logging cost almost nothing. A typed entry takes 8–10 seconds and most users abandon it after a week. A one-tap quick-amount takes half a second and survives long-term.

### The daily goal

`WaterSettings.dailyGoal` is a single number in your chosen unit. Common picks:

- 2000–2500 ml (metric, sedentary day)
- 2500–3000 ml (metric, active day)
- 64 oz / 96 oz (imperial)

There is no "calculated for you based on weight and weather" — the goal is what you set. See the [FAQ](#how-do-i-pick-a-daily-goal).

### Reminders

`WaterSettings.reminderEnabled` plus `reminderInterval` lets you nudge yourself every N minutes during waking hours. The reminder fires as a local notification on the platforms that support it (web, iOS, Android). Default off.

Useful pattern: 60-minute interval from 09:00 to 18:00. That's nine reminders, which is plenty without becoming background noise.

### The chart

A 30-day line chart on the water page shows daily totals against your goal. Days at or above goal are green; days below are amber. The chart is rendered with [D3.js](https://d3js.org/) and respects reduced-motion preferences.

## Step-by-step: log a glass

1. Open the dashboard.
2. Find the **Water** row (it appears once you've used the tracker once or pinned it from the customizer).
3. Tap one of the quick-amount buttons (`+ 250 ml` is the default leftmost).
4. The day's total bumps and the progress bar fills.

To log a custom amount: tap the row's name → enter the amount and time → Save.

## Step-by-step: edit yesterday's total

1. Tap the Water row's name on the dashboard, or sidebar → Trackers → Water.
2. Switch the date selector to the day you want.
3. Tap **Add entry** for a new line, or tap an existing entry to edit / delete.

Each entry is independent — you can split a 750 ml mug into three 250 ml entries if that's more honest about *when* you drank, or keep it as one entry if the moment doesn't matter.

## Step-by-step: change units

1. Sidebar → Trackers → Water → **Settings** (gear icon).
2. Toggle **Unit** between `ml` and `oz`.
3. Save.

Changing units does **not** convert past entries. A 500 ml entry stays 500 ml in the database; the display converts when it shows. The goal value is converted when you switch — 2000 ml becomes 67 oz, rounded to a whole number. If you want a specific oz goal, set it after the switch.

## Inverting the goal as a cap

If you need to keep intake *under* a value, the cleanest approach today is:

1. Set your `dailyGoal` to your daily *limit* (e.g., 1500 ml).
2. Mentally read green-bar = "near my limit" instead of "achieved goal."

There is no separate "max" mode in the UI. Treat the bar as informational; the visual still works. A future cap-mode toggle is on the wishlist.

## Tips

- **Pick the smallest quick-amount you actually drink.** If your default cup is 250 ml, having `+ 100 ml` as a button is a lie — you'll never tap it. Match the buttons to your real glasses.
- **Don't set a heroic goal.** A 4-litre/day goal you hit twice and miss five days a week is worse than a 2-litre goal you hit five days a week. The water tracker rewards consistency.
- **Pair with a workout habit.** Most users underestimate post-workout dehydration. A `+500 ml` entry tagged to your post-workout moment is high-leverage.
- **Disable reminders during sleep hours.** The reminder interval covers a 24-hour day; clip it to your waking hours so you don't get pinged at 3am.
- **Re-evaluate the goal monthly.** If you're hitting goal effortlessly, raise it slightly. If you're missing by 20% every day, lower it. The goal should be *aspirational but achievable*, not punitive.

## Frequently asked questions

### How do I pick a daily goal?

The honest answer: there is no single number that's right for everyone. Common heuristics include `30 ml × kg of body weight` and the older `8 × 8 oz glasses` (~ 1.9 L) — but these are population averages, not prescriptions. Pick a goal you can hit on a normal day; the tracker's value is the awareness, not the specific number. **HabitForge does not give medical hydration advice.** If you have a clinical reason to monitor intake, follow your doctor's number, not a heuristic.

### Does coffee / tea count?

That's your call. The tracker does not classify what you logged. If you choose to count coffee as `200 ml of fluid`, log it that way. Many users only count plain water; some count herbal tea but not coffee. Pick a rule and stick with it for the data to be comparable across days.

### Can I use cups / bottles instead of ml or oz?

Indirectly. Set your quick-amounts to match your cups (`+ 240 ml = 1 mug`, `+ 500 ml = 1 bottle`, etc.). The underlying unit is still ml or oz, but the buttons think in your real-world quantities.

### Does the tracker save when I'm offline?

Yes. Firestore's offline cache holds the write locally, and it syncs the moment you reconnect. The dashboard shows a small "syncing" indicator while the queue drains. See [Account basics → Sync when offline](../getting-started/account-basics#sync-when-offline).

### What happens if I log a duplicate by mistake?

Tap the entry → Delete. The day's total recomputes. There's no time limit on edits or deletions.

### Can I see my hydration vs sleep / mood?

The wellness dashboard cross-plots trackers and habits. If you also use the [Sleep tracker](./sleep) or the [Mood tracker](#) (Batch 5), the dashboard's cross-correlation chart shows water vs sleep-quality vs mood across the same date range. The chart is read-only and does not run statistical inference — it shows the data and you eyeball it.

### Can I export my water log?

Yes. **Profile → Export my data** includes every `WaterLog` record across your full history. See [Privacy basics → Export your data](../getting-started/privacy-basics#export-your-data).

### Does the reminder fire if I close the browser?

Web reminders fire only while the browser is running. The mobile apps schedule a real OS-level local notification that fires regardless of whether HabitForge is open. See [Schedule and reminders](../habits/schedule-reminders).

### Can I share my hydration data with a family member?

Not directly. Each HabitForge account is private. The supported pattern: each person has their own account.

### Can I log negative entries (I spilled the glass)?

No. Quantities must be positive. The closest workaround is to delete the original positive entry; spilling water is not actually a logged event in the data model.

### Does the tracker know what time zone I'm in?

It uses the device's current timezone for date and time fields. Travel handles correctly without input from you. See [Streak engine → Timezones](../habits/streak-engine#timezones) for the underlying behaviour.

## Where to next

- [Weight tracker](./weight) — daily / weekly weight log with optional body measurements.
- [Sleep tracker](./sleep) — bedtime, wake time, duration, quality.
- [Calories](./calories) — meal-by-meal food log with macro splits.
- [Habits → Schedule and reminders](../habits/schedule-reminders) — for the reminder system the water tracker shares.
