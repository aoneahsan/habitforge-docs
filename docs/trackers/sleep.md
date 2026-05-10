---
id: sleep
title: Sleep tracker
description: Log bedtime, wake time, sleep duration, and quality (1–5) with optional factors and notes. The HabitForge sleep tracker computes duration from bedtime and wake time and shows trends over weeks and months.
sidebar_label: Sleep
sidebar_position: 3
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
keywords:
  - sleep tracker
  - sleep log
  - sleep duration
  - sleep quality
  - bedtime tracker
---

# Sleep tracker

**The HabitForge sleep tracker logs one entry per night with bedtime, wake time, computed duration, and a 1–5 quality rating, plus optional factors (caffeine late, stress, exercise, alcohol, screens) and a note.** It does not use the phone's microphone or accelerometer — every value is what you enter. The tradeoff is privacy: nothing about your sleep is captured without your action.

This page documents the entry form, the duration computation across midnight, the quality scale, the factor list, and the trend chart. It does not give medical sleep advice — see the [FAQ](#how-do-i-pick-a-quality-rating-honestly) for what HabitForge does and does not claim.

## Use cases

### Validating that "sleep enough" actually happens

Most users overestimate how much sleep they get. A week of honest logging usually shifts the perceived average by 30–60 minutes. The tracker exists for that reality check.

### Spotting the cause of a bad night

The factor list (caffeine late, stress, exercise, alcohol, screens, work-late, social, illness, kids, travel) is selectable on each entry. After a few weeks you can scroll back and see whether bad nights cluster around specific factors. The tracker does not run statistical analysis — it just lets you eyeball the pattern.

### Pairing with a habit

A user with a `Lights out by 22:30` habit pairs naturally with the sleep tracker. The habit captures the intention; the tracker captures what actually happened. Over a month the two together tell you whether the habit is meaningful.

### Shift work or irregular schedules

The tracker does not assume a particular sleep schedule. A 03:00–11:00 night logs the same as a 22:00–06:00 night — bedtime and wake time are independent. The duration computation handles overnight rollovers correctly.

### Travel and jet lag

The factor list includes "travel," and the date is your device's current local date. A flight night with a 4-hour sleep gets logged honestly; the trend line absorbs it without breaking.

## How it works

### The log entry

Each entry writes a `SleepLog` to `hf_sleep_logs`:

| Field | Type | Notes |
|---|---|---|
| `bedtime` | string | `HH:mm`. Time you actually went to sleep, not got into bed. |
| `wakeTime` | string | `HH:mm`. Time you actually got up. |
| `duration` | number | Computed from bedtime → wakeTime in minutes. |
| `quality` | 1, 2, 3, 4, or 5 | Subjective. See [the quality scale](#the-quality-scale). |
| `factors` | string[] | Multi-select (caffeine late, stress, exercise, etc.). |
| `note` | string? | Optional free text. |
| `sleepScore` | number? | Optional composite, currently informational. |
| `date` | string | The morning's date in your device's timezone. |

The entry is keyed by date — one entry per night. Re-saving the same date overwrites the existing entry.

### Duration across midnight

Bedtime is usually before midnight; wake time is usually after. The duration calc:

```
if wakeTime < bedtime:
  duration = (24:00 - bedtime) + wakeTime
else:
  duration = wakeTime - bedtime
```

So `bedtime: 22:30, wakeTime: 06:30` → `duration: 480 minutes` (8 hours).
`bedtime: 02:00, wakeTime: 09:30` → `duration: 450 minutes` (7.5 hours).

Multi-day sleeps are not supported — if you slept 16 hours through a sick day, you'd log it as a 16-hour entry by setting bedtime and wake-time accordingly.

### The quality scale

| Rating | Meaning |
|---|---|
| 1 | Terrible. Tossed and turned. Woke up exhausted. |
| 2 | Poor. Restless. Not refreshed. |
| 3 | Okay. Acceptable, not great. |
| 4 | Good. Slept well, woke up reasonably refreshed. |
| 5 | Excellent. Slept deeply, woke up refreshed. |

The scale is subjective. The tracker does not ask for sleep stages, REM, or deep sleep. The honest framing: a phone or watch's "deep sleep" estimate is a guess based on movement; this rating is a guess based on how you feel. The latter is at least transparent about being a guess.

### The factor list

Selectable factors per entry:

- caffeine late
- stress
- exercise (recent)
- alcohol
- screens (late)
- work late
- social (event late)
- illness
- kids
- travel
- (custom — type your own)

Factors are tags on the entry. The trend chart can filter by factor; the sleep page shows aggregate stats (e.g., "average quality on caffeine-late days: 2.8 vs 3.6 overall"). The aggregates are descriptive, not inferential.

### The trend chart

A 30-day chart shows duration (line) and quality (dot colour) per night. Days with high duration and high quality are visually obvious; bad weeks cluster as red-tinted runs.

## Step-by-step: log a night

1. Sidebar → Trackers → Sleep → **Add entry**.
2. Enter **bedtime** (when you fell asleep, approximately).
3. Enter **wake time** (when you got up — not the alarm time, the real time).
4. Pick a **quality** rating 1–5.
5. Tap any **factors** that applied.
6. Optionally write a note.
7. Save.

Default date is today. The duration is computed automatically.

## Step-by-step: edit an entry

1. Sidebar → Trackers → Sleep → calendar view.
2. Tap the night you want to edit.
3. Change any field → Save.

There's no time limit on edits. If you remember in three days that Tuesday was actually 6 hours not 7.5, the change is one tap.

## Step-by-step: log a nap separately

Naps are not tracked separately today. The sleep tracker is one entry per night. Workarounds:

- Note the nap in the night's note field ("plus 45-min nap at 14:00").
- Add the nap minutes to a custom field via the export and reimport workflow.

A dedicated nap-tracking entry is on the wishlist.

## Tips

- **Log immediately on waking.** Memory of bedtime and wake time decays fast. The tracker's value is the trend, and the trend depends on data accuracy.
- **Use the factor list, even just two factors per entry.** The aggregate insights are the highest-value output of the tracker, and they only work if you tag.
- **Don't over-rate quality.** A 4 every night with no actual changes is meaningless. Be honest; the bad nights are the informative ones.
- **Pair with the bedtime habit.** A `Lights out by 22:30` habit + this tracker is the cleanest before/after data you'll get on whether the habit matters.
- **Don't compare to a partner.** Subjective quality scales differ wildly between people. Your 3 is not someone else's 3.

## Frequently asked questions

### How do I pick a quality rating honestly?

Compare to your last few weeks. A "good" week's quality average should be around 4. Excellent nights pull above; bad nights pull below. If every night is a 4, the scale is uncalibrated for you — recalibrate so the bad nights are 2s.

### Does the app track sleep stages or REM?

No. HabitForge does not connect to wearables and does not estimate sleep stages from phone movement. The honest framing: phone-and-watch stage estimates are guesses based on movement and heart rate; the app would rather be transparent about asking for your subjective rating than fake-precise about an algorithmic guess.

### Can I import data from a Fitbit / Apple Watch / Oura ring?

Not currently. Manual entry only. Bulk import via the export format is on the wishlist.

### What if I forgot to log last night?

Open Sleep → calendar → tap last night → fill in the form. There's no time limit.

### Why is my duration off by an hour around clock changes?

Daylight saving in either direction can produce a one-hour discrepancy depending on your device's timezone behaviour. The duration calc trusts bedtime and wakeTime as wall-clock entries; if one was before the change and one after, the math is off by an hour. Edit the entry to enter the actual clock-time-difference if it matters.

### Does HabitForge give sleep advice?

No. The tracker is a record. It does not tell you to sleep more, take naps, or change your routine. **HabitForge does not give medical or sleep-disorder advice.**

### Can I see sleep vs habit completion?

The wellness dashboard cross-plots sleep duration / quality with habit-strength data. The cross-plot is descriptive — it shows the data, you eyeball it. There is no "sleep predicts habit success" claim.

### What's the longest sleep duration I can log?

The form accepts any duration up to 24 hours. Beyond that, you'd need to split into multiple entries.

### Can I log sleep for someone else (a child)?

Each HabitForge account is private to one user. The supported pattern is one account per person.

### Does the sleep score do anything?

The `sleepScore` field is reserved for a future composite (duration × quality × consistency). Today it is not auto-computed; you can leave it blank or use it as your own custom metric.

## Where to next

- [Water tracker](./water) — hydration log.
- [Weight tracker](./weight) — weight + body composition.
- [Calories](./calories) — food log with macros.
- [Habits → Schedule and reminders](../habits/schedule-reminders) — for the bedtime-habit reminder pattern.
