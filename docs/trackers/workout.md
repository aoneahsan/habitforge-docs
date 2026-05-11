---
id: workout
title: Workout log
description: Log workouts by type (strength, cardio, flexibility, sports, other), duration, and individual exercises with sets, reps, weight, and distance. The HabitForge workout tracker handles both lifting sessions and runs in a single model.
sidebar_label: Workout
sidebar_position: 5
last_update:
  date: 2026-05-11
  author: Ahsan Mahmood
keywords:
  - workout log
  - workout tracker
  - exercise log
  - strength training log
  - cardio log
---

# Workout log

**The HabitForge workout log records each workout session with a type (strength, cardio, flexibility, sports, or other), total duration, and a flexible list of exercises with their own sets, reps, weight, and distance.** The same schema covers a 4-set squat session and a 30-minute Zone-2 run — the exercise structure is shaped by what you fill in, not by a separate "strength vs cardio" form.

This page documents the workout entry form, the exercise sub-records, the difference between session-level and exercise-level duration, and how the workout log integrates with the calorie counter for the calories-burned estimate. It does not give exercise or programming advice — see the [FAQ](#how-do-i-pick-a-workout-type) for what the tool does and does not claim.

## Use cases

### Tracking a strength program

Log each lifting session with several exercises (squat, bench, row), each with sets that capture reps and weight. The history view shows progression over weeks — useful for any progressive-overload program where you want to see what you actually lifted.

### Tracking runs and cardio sessions

A run is a single exercise with `duration` (minutes) and `distance` (km or miles). No sets, no reps. The same form handles both — the fields you skip simply don't render in the history view.

### Tracking class workouts (HIIT / yoga / CrossFit / etc.)

Pick `type: other` and log the session as a single entry with `duration` and a `note` describing what was done. The fine-grained exercise breakdown is optional. Most class workouts are too varied to log set by set; the duration plus context note is usually enough.

### Pairing with a habit

A `Workout 3× per week` Custom habit (Mon/Wed/Fri or whichever days work) plus the workout log creates a clean before-and-after picture. The habit captures the intention; the log captures what actually happened, with detail.

### Linking to weight and calories

The optional `caloriesBurned` field on each workout connects to the [calorie counter](./calories) to widen the day's net intake math. The number is your estimate (or your treadmill's estimate) — HabitForge does not compute calories burned from heart rate or movement.

## How it works

### The workout entry

Each session writes a `WorkoutLog` to `hf_workout_logs`:

| Field | Type | Notes |
|---|---|---|
| `type` | `'strength'`, `'cardio'`, `'flexibility'`, `'sports'`, or `'other'` | The session type. |
| `name` | string | "Push day," "Morning run," "Vinyasa yoga." |
| `duration` | number | Total session minutes (warm-up to cool-down). |
| `exercises` | array | One or more `WorkoutExercise` entries (see below). |
| `caloriesBurned` | number? | Optional. Your or your device's estimate. |
| `note` | string? | Free text. |
| `date` | string | `YYYY-MM-DD` in your device's timezone. |

### Exercise sub-records

Each `WorkoutExercise` inside a session has:

| Field | Type | Notes |
|---|---|---|
| `name` | string | "Squat," "Bench press," "5km run." |
| `muscleGroup` | string? | Optional. "Legs," "Chest," "Full body." |
| `sets` | array? | Optional. Used for strength exercises. |
| `duration` | number? | Optional. Per-exercise minutes (for cardio intervals). |
| `distance` | number? | Optional. Per-exercise distance (for cardio). |

Each `WorkoutSet` has:

| Field | Type | Notes |
|---|---|---|
| `reps` | number | Number of reps in the set. |
| `weight` | number? | Optional. Weight lifted (kg or lbs per your settings). |

The structure is intentionally permissive. A bodyweight squat session has `sets` with `reps` only (no weight). A treadmill interval workout has one exercise per interval with `duration` and `distance` but no sets. The export JSON preserves whatever you logged without forcing a uniform shape.

### Session vs exercise duration

`WorkoutLog.duration` is the total session minutes including warm-up, transitions, and cool-down. Individual exercises' `duration` fields are *working* minutes only. These two will not add up to the session total — and that's fine. The product opinion: total session time is what shows in the calendar; working time within exercises is for users who care about it (interval runners, mostly).

### Calories burned

The `caloriesBurned` field is optional and self-reported. HabitForge does not estimate it from heart rate or movement (no wearable integration). Users with a fitness watch typically copy the watch's estimate; users without a watch usually leave it blank.

When set, the value appears on the dashboard's net-calories card alongside intake from the [calorie counter](./calories). Net calories = intake − burned. Useful for users in a calorie-deficit phase; ignorable for users who don't care.

## Step-by-step: log a strength session

1. Sidebar → Trackers → Workout → **Add entry**.
2. Pick **type**: `strength`.
3. Name the session: "Push day," "Leg day," whatever.
4. Enter total **duration** in minutes.
5. Tap **Add exercise** for each lift:
   - Name: "Bench press"
   - Muscle group (optional): "Chest"
   - Tap **Add set** to record `reps` and `weight` per set.
6. Optionally enter `caloriesBurned`.
7. Optionally write a note ("first heavy day after deload").
8. Save.

The session appears in today's row. The history view shows your last 30 days of workouts in a list; tapping a workout shows the full exercise breakdown.

## Step-by-step: log a run

1. **Add entry** → type: `cardio`.
2. Name: "Morning run."
3. Total **duration**: 32 minutes.
4. **Add exercise** with name "5km run":
   - `duration`: 30 minutes (working time, excluding warm-up walk)
   - `distance`: 5 km
5. Optionally `caloriesBurned`.
6. Save.

The same form handles a run with two minutes of warm-up walking, 30 minutes of running, and a cool-down. No special "cardio mode" needed.

## Step-by-step: log a class workout

1. **Add entry** → type: `other`.
2. Name: "Power yoga at studio."
3. **Duration**: 60 minutes.
4. Skip the exercise breakdown — write what was done in the note ("hot yoga, sequence focused on hips").
5. Save.

For class workouts, the session entry plus note is usually enough detail.

## Step-by-step: log a sports activity

Same as class — type `sports`, name the activity ("Tennis singles match"), set duration, add a note. The exercise breakdown is optional for unstructured activity.

## Personal-record (PR) detection

The workout log does not yet detect or flag PRs automatically. The schema preserves enough information (per-set weight, per-set reps) to compute them, but the UI does not surface PR badges or notifications. Users who want a strict PR tracker rely on the export JSON or scrolling history manually.

A future PR-detection feature is on the wishlist but not committed.

## Tips

- **Type the session honestly.** Yoga is `flexibility`, not `cardio` (regardless of how sweaty it gets). The aggregate stats are only meaningful if types are consistent.
- **Pre-fill exercises from a template.** Today's UI does not have workout templates, but the next-best workflow is to copy yesterday's session by opening it, tapping the dates that say "do the same workout," and re-saving with new sets. A template feature is on the wishlist.
- **Don't over-log.** A 60-minute lifting session with 5 exercises is reasonable. A 60-minute session with 20 micro-exercises is exhausting to log and rarely informative.
- **Use the muscle-group field.** It's the laziest version of programming-balance feedback: scan back over the last two weeks and notice whether every session said "Chest" with no "Back."
- **Pair with the weight tracker for body changes.** Workout volume + the [weight tracker](./weight)'s trend line + (optional) body-fat percent gives a complete-enough picture for most strength users.

## Frequently asked questions

### How do I pick a workout type?

| Activity | Best type |
|---|---|
| Lifting weights, bodyweight strength | `strength` |
| Running, cycling, rowing, swimming | `cardio` |
| Yoga, stretching, mobility work | `flexibility` |
| Tennis, soccer, basketball, climbing | `sports` |
| HIIT, CrossFit, varied class | `other` |

Pick the one that best describes the dominant component. Don't overthink it.

### Can I track heart rate?

Not yet. HabitForge does not connect to wearables. The schema does not have a heart-rate field. Users who track heart rate typically log it in the note field as text or use their device's native app for that data.

### Will HabitForge connect to Apple Health / Google Fit?

Not currently. A read-only import from Apple Health and Google Fit is on the wishlist. The trade-off documented in [Privacy basics](../getting-started/privacy-basics) — minimum data, no third-party scopes beyond what's strictly required — applies to any future integration.

### How is "duration" calculated for a session?

You enter it. There is no automatic stopwatch tied to the workout log today. The product opinion: a stopwatch tied to the log creates pressure to "use the app for the whole workout," which users hate. Log the duration after the session.

### Can I log the same exercise across multiple sessions and see progression?

The history view does not yet cross-link by exercise name. Scrolling back manually shows progression. A "show all bench press sessions" filter is on the wishlist.

### Does HabitForge give workout advice?

No. The tracker is a record. It does not recommend programs, sets, reps, or rest. **HabitForge does not give exercise or medical advice.**

### Can I attach a video or photo?

Not today. Notes are text only. A photo or video field would significantly change the storage model (currently text-only Firestore, no Firebase Storage by policy). The wishlist entry depends on the FilesHub direction documented in [Privacy basics](../getting-started/privacy-basics).

### How long is workout history kept?

Forever, by default. There is no auto-pruning. Tens of thousands of sessions are technically supported but slow down the history view at the high end. Export and archive is the workaround if you genuinely reach that volume.

### Can I share my workout with a friend?

Not directly. Sharing exports manually (download JSON, send it to a friend) is the workaround.

### What happens if I log a workout for the wrong date?

Tap the entry → edit → change the date → save. Each session is a single document; editing the date is one field.

## Where to next

- [Reading tracker](./reading) — books, sessions, pages-per-day.
- [Expenses](./expenses) — income / expense log with categories and budgets.
- [Mood tracker](./mood) — daily 1–5 mood with factors and habit-completion correlation.
- [Calories](./calories) — for the calorie-burned integration.
- [Weight tracker](./weight) — for body composition alongside training volume.
