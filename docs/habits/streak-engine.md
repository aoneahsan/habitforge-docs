---
id: streak-engine
title: How the streak engine works
description: Plain explanation of how HabitForge counts streaks, what breaks them, what doesn't, and why an unlogged day does not auto-reset your streak. Timezones, recovery, and the difference between streaks and habit strength.
sidebar_label: Streak engine
sidebar_position: 4
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
keywords:
  - habit streak
  - streak counter
  - streak reset
  - habit streak rules
---

# How the streak engine works

**A streak is the count of consecutive logged completions for a habit. HabitForge breaks a streak only when an explicit miss is recorded — not when you forget to open the app.** This page documents the exact rules: what counts, what doesn't, how timezones are handled, and how to recover after a slip.

If you want the philosophy first, [Why habits work — the 21 / 66 day claims](../getting-started/why-habits-work#the-21-days-and-66-days-claims) explains why HabitForge does not punish a missed day with a hard streak reset.

## The short rules

1. A streak counts consecutive **completed: true** records.
2. A **completed: false** record (an explicit miss) resets the streak to 0.
3. An **unlogged day** does not, by itself, reset the streak in the database. The dashboard's "due today" indicator still flags missed days visually.
4. The streak meter and the strength meter are two different things. They can diverge — see [Streaks vs strength](#streaks-vs-strength).
5. Day boundaries follow the device's local timezone. Travel does not double-count or skip days.

## What is a "completion"?

In HabitForge data, a completion is a Firestore document under `hf_completions` with these fields:

| Field | Type | Meaning |
|---|---|---|
| `habitId` | string | The habit this record belongs to. |
| `userId` | string | Your `uid`. |
| `date` | string (`YYYY-MM-DD`) | The calendar day in your device's timezone. |
| `completed` | boolean | `true` for a completion, `false` for an explicit miss. |
| `strengthBefore` | int | Strength before this record was applied. |
| `strengthAfter` | int | Strength after. |
| `strengthChange` | int | The delta (positive on completion, negative on miss). |
| `note` | string? | Optional note you attached. |

Each tap on the dashboard checkbox creates one of these records (`completed: true`). Each tap of the explicit "Mark missed" action creates one with `completed: false`.

## Streak calculation, step by step

The streak is computed from the completion records:

1. Load completions for this habit, ordered by date ascending.
2. Walk through them in order. For each completion:
   - If `completed: true`, increment a temporary counter.
   - If `completed: false`, reset the counter to 0.
3. The final counter value is the **current streak**.
4. The maximum value the counter ever reached is the **longest streak**.

That's it. There is no time-based decay, no grace period, no "max streak you ever had" multiplier.

### What this rule produces in practice

Three concrete scenarios:

**Scenario A — Daily user, no misses:** Mon ✓, Tue ✓, Wed ✓, Thu ✓, Fri ✓ → streak = 5.

**Scenario B — Marks an explicit miss:** Mon ✓, Tue ✓, Wed ✗ (mark missed), Thu ✓, Fri ✓ → streak = 2 (Thu, Fri).

**Scenario C — Unlogged Wednesday:** Mon ✓, Tue ✓, (Wed nothing), Thu ✓, Fri ✓ → streak = 4.

Scenario C is the one that surprises users coming from streak-aggressive apps. The default product opinion: if you didn't open the app, the system doesn't have evidence either way. Marking the miss is *your* call.

This is intentional. It means an honest streak number is one you logged. The strength meter is the secondary signal that tracks consistency more aggressively — see [Streaks vs strength](#streaks-vs-strength).

## What if I want unlogged days to count as misses?

Today there is no automatic "auto-miss at end of day" cron. Implementing one would require a server-side scheduled function (Firebase Functions), which HabitForge doesn't use by design.

Workarounds:

- **End-of-day check:** open the dashboard before bed and explicitly mark anything you didn't do as a miss. The strength meter and streak both update.
- **Use the Strength meter as your honest signal:** stop opening the app for two weeks → strength stays where you left it but does not climb. The "missing" data is captured in the absence of new data.

## Timezones

Day boundaries are computed in the device's current local timezone. The current date is taken from the device's clock and converted to `YYYY-MM-DD` in local time when a completion is logged.

Implications:

| Situation | What happens |
|---|---|
| You travel from EST to GMT mid-day | The same calendar day still counts once. Phone updates timezone; the next completion is for the new day in the new zone. |
| You log a completion at 11:59 pm | It's recorded for today. Crossing midnight one minute later starts tomorrow's window. |
| Your device clock is wrong | The completion is recorded for the wrong date. Fix: correct the clock and use the [edit a single completion](./complete-undo#editing-or-deleting-a-completion) flow. |
| You manually change your phone's date | The completion goes to whatever date your phone says. HabitForge trusts the OS. |

For most users, the practical answer is: don't think about timezones. The app handles it. Travel is fine; a one-day flight is fine. Genuine multi-week timezone shifts (long-haul moves) are also fine — the date is whatever your device says it is.

## Streaks vs strength

These are two different signals on the same habit:

| | Streak | Strength |
|---|---|---|
| Range | 0 to ∞ | 0 to 100 |
| What it measures | consecutive logged completions | cumulative weighted completions and misses |
| Effect of one miss | resets to 0 | drops by 6 / 8 / 10 (Easy / Medium / Hard) |
| Effect of unlogged day | nothing | nothing |
| Recovery after one miss | back to 0, climbs by 1 per day | drops 6–10, gains 4–6 per next completion |
| What HabitForge displays first | the strength meter | (also strength) |

The strength meter is the primary signal because it is more sensitive to your real pattern. A user with a 50-day streak who missed only one day of the last 60 has a high strength score (low 80s) and a streak number that's low because of a single recent miss. Both numbers are honest; the strength tells the longer-term story.

The streak number is still useful — it captures momentum, and many users find it motivating. HabitForge shows both, with the strength meter given the larger visual treatment on the dashboard.

## Recovering after a slip

The system is designed to make recovery easy. After an explicit miss:

- Streak: back to 0. One completion → streak of 1. Five completions → streak of 5.
- Strength: drops by 6 / 8 / 10 (Easy / Medium / Hard). Strength climbs back at 4 / 5 / 6 per completion. Three to five completions of the same difficulty restore most of the lost ground.

There is no "rebuild" penalty. You don't have to earn back what you lost at a slower rate. The math is the same as before the slip.

## Edge cases

### Two completions on the same day

The first writes a `completed: true` record for that date. The second is suppressed — the dashboard treats today as already complete. There is no "double-count" for a single day.

If you really want to log twice (e.g., morning and evening doses for medication), the recommended approach today is to keep two separate habits, one for each occurrence. A multi-completion-per-day field is on the roadmap but not committed.

### Marking miss after already marking complete

The first completion record for that date is replaced with the new one. Strength meter recomputes from the corrected record (i.e., the previous +gain is rolled back, the −loss is applied).

### Deleting a completion record

You can delete an individual completion record from the habit's history view. The strength change is rolled back; if it's the most recent completion, the streak recomputes. See [Complete and undo](./complete-undo#editing-or-deleting-a-completion) for the exact flow.

### Custom-day habits and gaps

For a Custom habit scheduled Mon/Wed/Fri:

- Tuesday and Thursday are not scheduled days. Not logging on them does not affect anything.
- Wednesday is scheduled. Not logging on Wednesday does not auto-break the streak (same rule as Daily). You'd have to mark a miss for Wednesday explicitly.

### Weekly habits

A Weekly habit's streak counts consecutive *weeks* with at least one completion. The unit changes from days to weeks, but the rules are otherwise identical.

## Frequently asked questions

### Why doesn't HabitForge auto-reset my streak when I forget to log?

Because that punishes opening-the-app inconsistency, not habit inconsistency. A user on vacation for a week without phone access shouldn't lose a streak built over two months — the data simply isn't there to say what happened. The honest answer is "we don't know," and the streak engine reflects that.

### Can I "freeze" a streak before going on vacation?

Not as a separate feature. The system already does the right thing: don't log, streak doesn't change. When you come back, you can log forward without penalty.

### Does a Weekly streak count the same week twice?

No. Each week contributes at most 1 to the streak count. Logging the habit five times in one week is just five completions in that week.

### What if I want a strict daily streak?

You can simulate it: mark explicit misses every time you don't complete. The product opinion is this is unnecessarily punitive, but the data model supports it.

### How is the longest streak calculated?

It is the maximum value the streak counter ever reached during the iteration over your completion records. It is recomputed from records every time the stats page loads, so deleting a record can change it.

### Does archiving a habit preserve the streak?

Yes. Archive freezes the strength and streak values. Restoring the habit picks up exactly where you left off — but if there's a gap of unlogged days during the archive period, those days are not back-filled as misses.

### What happens to streaks when I delete a habit?

The completion records are deleted along with the habit. The streak data goes with them.

### Can two habits share a streak?

No. Streaks are per-habit by design. Cross-habit "compound streaks" (do all three keystone habits today → group streak +1) is on the roadmap but not committed.

## Where to next

- [Strength visual](./strength-visual) — what the 0–100 meter is showing.
- [Complete and undo](./complete-undo) — marking habits done; reverting mistakes.
- [Why habits work](../getting-started/why-habits-work) — research behind the model.
- [Schedule and reminders](./schedule-reminders) — when habits are due.
