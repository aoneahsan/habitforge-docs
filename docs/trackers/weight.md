---
id: weight
title: Weight tracker
description: Log weight in kg or lbs, optional body-fat percentage, and optional body measurements (waist, chest, hips, arms). The HabitForge weight tracker shows a smoothed trend rather than reactive day-to-day spikes.
sidebar_label: Weight
sidebar_position: 2
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
keywords:
  - weight tracker
  - weight log
  - body measurements
  - body fat tracker
  - weight trend
---

# Weight tracker

**The HabitForge weight tracker logs body weight (kg or lbs) at any frequency you choose, plus optional body-fat percentage and a small set of body measurements.** It shows a smoothed trend line that intentionally damps day-to-day water-weight noise, alongside the raw entries for users who want to see them. There is no "weight goal must be reached by date X" pressure; the tool is a record, not a coach.

This page documents the form, the smoothing logic, the optional measurements, and unit handling. It does not give medical or nutritional advice — see the [FAQ](#how-often-should-i-weigh-myself) for what HabitForge claims and does not claim.

## Use cases

### Long-term trend, not daily reactivity

Daily weight fluctuates by 1–2 kg purely from water and food in transit. A user who weighs daily and reacts to each spike is fighting noise, not signal. The weight tracker's trend line smooths the last 7 entries so you see the slow movement, not the noise.

### Cutting / bulking with a consistent reference

If you're in a deliberate calorie-deficit or surplus phase, a daily morning weigh-in (after using the toilet, before drinking or eating) at consistent conditions gives the most readable trend. Log it, see the line move, ignore the day-to-day.

### Weekly check-ins

Many users prefer weekly weigh-ins. The tracker handles either pattern — the chart and the trend line both work whether you log 7×/week or 1×/week.

### Combining with weight-relevant habits

A user with a `Daily walk` habit and a weight goal can use the calendar heatmap to see whether high-activity periods coincide with downward-trending weight. The dashboard does not run causal inference — it lays the data side by side.

### Body-composition recomp

Weight alone misses recomposition (muscle gained while fat is lost). The optional `bodyFat` field plus the body-measurements section (waist, chest, hips, arms) lets users tracking recomp see the more complete picture.

## How it works

### The log entry

Each entry writes a `WeightLog` to `hf_weight_logs`:

| Field | Type | Notes |
|---|---|---|
| `weight` | number | The recorded weight, in your chosen unit. |
| `unit` | `'kg'` or `'lbs'` | Inherited from settings; per-entry override allowed. |
| `bodyFat` | number? | Optional body-fat percentage. |
| `measurements` | object? | Optional. `waist`, `chest`, `hips`, `leftArm`, `rightArm` — all in cm or inches per settings. |
| `note` | string? | Optional context (e.g., "post-workout," "after a heavy meal"). |
| `date` | string | `YYYY-MM-DD` in your device's timezone. |

### Settings

| Field | Notes |
|---|---|
| `unit` | `'kg'` or `'lbs'`. Default kg. |
| `heightCm` | Used for BMI calculation in the BMI page (separate from this tracker). Stored once. |
| `goalWeight` | A target value. Optional; informational only. |
| `measurementUnit` | `'cm'` or `'inches'` for the body-measurements section. |

### The trend line

The chart shows two layers:

1. **Raw entries** as small dots.
2. **Trend line** as a 7-point centred moving average.

The 7-point window is wide enough to absorb a one-off bad measurement and narrow enough to react to a real shift within a couple of weeks. The moving-average is recomputed each time the chart loads from the most recent 90 entries.

There is no projection ("at this rate you'll reach X by Y") — projections are easy to draw and almost always wrong on real human weight data.

### The body-measurements section

Six optional fields:

- Waist (cm or inches)
- Chest (cm or inches)
- Hips (cm or inches)
- Left arm (cm or inches)
- Right arm (cm or inches)
- (Body fat % is separate from these but lives in the same form.)

Most users skip this section. It exists for users who care about body-composition shifts that weight alone misses. Measurements are stored per-entry, so you can see how waist changed over a six-month cut even when weight barely moved.

## Step-by-step: log today's weight

1. Sidebar → Trackers → Weight (or pin it to the dashboard).
2. Tap **Add entry**.
3. Enter weight (e.g., `78.4`).
4. Optionally enter body-fat % and measurements.
5. Save.

Defaults to today's date. To log for a different date, change the date picker before saving.

## Step-by-step: change units

Settings (gear icon) → toggle **Unit** between `kg` and `lbs`. The change does not convert existing entries — a 78 kg entry stays 78 kg. The display converts on the fly. The chart re-renders in the new unit.

If you want all entries shown in the new unit, the conversion is one-way at display time; the underlying records are preserved. This is intentional — round-trip conversion through floating point loses precision, and your historical data should be byte-for-byte what you logged.

## Step-by-step: set a goal weight

Settings → **Goal weight** → enter a number → Save. The chart shows a horizontal line at the goal value. The goal is informational — there are no notifications based on distance from goal, and no penalty for being above or below it.

## Tips

- **Same time, same conditions.** Weighing first thing in the morning, after using the toilet, before food or drink, gives the most consistent reads. The tracker doesn't care, but your trend line will be cleaner.
- **Log even on bad-feeling days.** Skipping the heavy days produces a flatteringly biased trend. The trend line is honest only if the data is honest.
- **Don't over-react to a single number.** A 1.5 kg jump overnight is almost certainly water (sodium, glycogen, time of day). The 7-point moving average is the signal.
- **If you're tracking recomp, log measurements monthly.** Weekly measurement entries add noise without much signal; monthly entries are usually enough to show real changes.
- **Pair with the calorie counter for a calorie-deficit phase.** The weight chart's trend line plus the [calorie tracker](./calories)'s daily totals together tell a more complete story than either alone.

## Frequently asked questions

### How often should I weigh myself?

The tracker supports any frequency. Common patterns:

- **Daily** — best for tight calorie phases. Use the trend line, not individual entries.
- **Weekly** — best for steady-state monitoring.
- **Monthly** — fine if weight is stable and you just want a reality check.

There is no "right" answer. The honest framing: HabitForge does not give weight-management advice. The tool records what you tell it. If weight is loaded for you, weighing less often (or not at all) is a perfectly valid choice.

### Why does the chart look so smooth?

The trend line is a 7-point centred moving average. It's deliberately smooth so you read the actual movement instead of fighting noise. The raw entries are visible as dots if you prefer that view.

### Does the tracker calculate BMI?

Not on this page. The BMI calculator is a separate page (sidebar → Tools → BMI) that uses the `heightCm` from settings plus your most recent weight. BMI is included as a reference number; the limits of BMI as a metric (it doesn't account for muscle mass, frame size, etc.) are explained on that page.

### Can I track multiple people?

No. Weight entries belong to a single account. Family or partner tracking would need separate accounts.

### What about lean mass / fat-free mass?

If you log `weight` and `bodyFat`, the math gives you fat mass and lean mass — but the tracker does not show those derived numbers on the chart. They appear as derived columns in the export JSON. A future "recomp view" with those breakdowns is on the wishlist.

### Can I import historical data from a smart scale or another app?

Not directly today. The supported flow is to enter past entries one by one with the date picker set to the historical date. For users with hundreds of historical entries, the export format is documented in [Privacy basics → Export your data](../getting-started/privacy-basics#export-your-data); a bulk-import endpoint is on the wishlist.

### Does HabitForge give weight-loss recommendations?

No. The tracker is a record. It does not tell you to eat less, exercise more, or hit a specific number. **HabitForge does not give medical, nutritional, or weight-management advice.**

### What happens if I log a wildly wrong number?

Tap the entry → edit or delete. There is no validation that flags outliers — a 200 kg entry on an account previously logging 70 kg saves without complaint. The tradeoff: less paternalism, more user responsibility.

### Can I hide the weight tracker if I'm not using it?

Yes. The dashboard's tracker rows are pinned individually. Sidebar → Theme → Dashboard → unpin **Weight**. The tracker still exists in the sidebar; it just doesn't clutter the dashboard.

### Why is body fat optional?

Because most users either don't measure it or measure it inaccurately (consumer scale impedance readings vary by 3–5 percentage points day-to-day). The field is there for the users who do measure consistently.

## Where to next

- [Water tracker](./water) — hydration log with quick-amounts.
- [Sleep tracker](./sleep) — bedtime, wake time, quality.
- [Calories](./calories) — meal-by-meal food log.
- [Habits → Strength visual](../habits/strength-visual) — for the dashboard's weight-row visual style.
