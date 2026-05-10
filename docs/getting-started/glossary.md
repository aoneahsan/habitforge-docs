---
id: glossary
title: HabitForge glossary
description: Every term HabitForge uses, defined in one place. Habit strength, threads, streaks, completions, keystone habits, cue/routine/reward, and more.
sidebar_label: Glossary
sidebar_position: 6
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
keywords:
  - habitforge glossary
  - habit terms
  - habit vocabulary
---

# HabitForge glossary

This page defines every technical and product term HabitForge uses. Terms are alphabetised. Where the term has a deeper conceptual home, a link points to the longer explanation.

## A

### Achievement

A deterministic, one-time unlock awarded for hitting a specific milestone (e.g., "first 7-day streak," "first habit at strength 50"). Achievements never re-unlock and never expire. HabitForge does not use random / variable-reward badges — see [Why habits work](./why-habits-work#variable-rewards-and-dopamine).

### Affirmation

A short statement, usually first-person, recorded in the [Daily affirmations](/docs/journals) feature. Affirmations are stored as journal entries and are eligible for optional Google Drive backup.

### Archive

A non-destructive way to remove a habit from the active list. Archived habits keep their history but no longer appear on the dashboard or in today's checklist. Reversible at any time. Distinct from **Delete**, which is permanent.

## C

### Capacitor

The cross-platform native runtime used to package HabitForge as iOS and Android apps from the same web codebase. See [capacitorjs.com](https://capacitorjs.com/).

### Completion

A logged event recording that you did the habit on a specific date. Each completion has a `strengthBefore`, `strengthAfter`, and `strengthChange`. You can attach an optional note. Completions are reversible — uncheck the box and the strength change is rolled back.

### Cue

The trigger that initiates a habit. Comes from Charles Duhigg's *The Power of Habit* (2012) framing of `Cue → Routine → Reward`. Optional field on every habit. See [Why habits work](./why-habits-work#the-cue--routine--reward-loop).

### Custom days

A frequency option on the habit form. Lets you pick specific days of the week (e.g., Monday / Wednesday / Friday). Days not selected do not count as missed if you don't complete on them.

## D

### Dashboard

The default landing page after sign-in. Shows today's habits with strength meters, the most recently used trackers, today's journal preview if one exists, and any unfinished timer session.

### Difficulty

A self-assigned rating for each habit: `Easy`, `Medium`, or `Hard`. Controls strength gain on completion and loss on miss. The numbers:

| Difficulty | Threads gained per completion | Threads lost per miss |
|---|---|---|
| Easy | +4 | −6 |
| Medium | +5 | −8 |
| Hard | +6 | −10 |

Difficulty is editable; changes affect future completions only.

## F

### FilesHub

The third-party file-storage backend HabitForge uses for admin-managed assets (e.g., advertisement images shown to users in the free product). User-generated files (journal exports, etc.) go to your own Google Drive folder, not FilesHub. See [filescloud documentation](https://fileshub.zaions.com/ai-integration) for the platform.

### Firestore

Google's document database, part of [Firebase](https://firebase.google.com/). HabitForge stores user accounts, habits, completions, and tracker logs in Firestore collections prefixed `hf_`.

### Frequency

How often a habit is scheduled. Three options: `Daily`, `Weekly`, or `Custom`. Frequency determines what counts as a missed day for the strength model.

## G

### Google Drive integration

Optional backup destination for journal entries. When enabled, HabitForge requests the `drive.file` OAuth scope — the narrowest possible scope, which only grants access to files HabitForge itself created in your Drive. You can revoke the scope at any time without affecting the rest of HabitForge.

### Gratitude journal

A specialised journal type where each entry is a short list of things you're grateful for. See [Gratitude journal](/docs/journals) once that page ships.

## H

### Habit

The core object of HabitForge. A named, scheduled, repeating behaviour with a strength meter and history. Fields: name, description, difficulty, cue, routine, reward, frequency, custom days, reminder time, color, icon, keystone flag.

### Habit strength

A 0–100 integer representing the cumulative effect of completions and misses for one habit. Sometimes shown as a "threads" count, sometimes as a coloured bar. Bands:

- 0–20: weak (red)
- 21–50: building (orange)
- 51–80: established (yellow / amber)
- 81–100: strong (green)

The number is grounded in real research on asymmetric loss (Kahneman & Tversky, 1979) and habit formation (Lally et al., 2009) but the specific gain/loss numbers are calibrated by feel, not validated experimentally. See [Why habits work](./why-habits-work).

### Habit-strength meter

The visual element on the dashboard that shows current habit strength. Updates in real time as you complete or miss.

## I

### Identity-based habit

A habit framed as "I am someone who [does X]" rather than "I want to [achieve outcome Y]." From James Clear's *Atomic Habits* (2018). HabitForge does not enforce the framing but the **Reward** field is a good place to write it.

## K

### Keystone habit

A habit flagged as expected to influence other behaviours. Term coined by Charles Duhigg. In HabitForge, the keystone flag is a label and a dashboard sort priority — it does not change the strength math.

## L

### Last updated

Every doc page on this site, and every habit / journal / tracker entry in the app, carries a last-updated timestamp. On doc pages it is shown above the content; in the app it is shown on the entity's detail view.

## M

### Miss

An unlogged scheduled day for a `Daily` or `Custom` habit, or an unlogged week for a `Weekly` habit. A miss subtracts threads at the difficulty's loss rate. The loss is recoverable: future completions add threads back.

### MAX_THREADS

The constant `100`. Habit strength is clamped between 0 and `MAX_THREADS`.

## N

### Notification

A local notification sent by HabitForge at a habit's reminder time. Local — not push. Requires platform permission (web Notifications API, iOS Notifications, Android Notifications). One-shot per scheduled day; no escalation.

## P

### Pomodoro

A focus-timer technique using 25-minute work intervals separated by 5-minute breaks, with longer breaks every four cycles. Implemented as the [Pomodoro timer](/docs/timers) once that page ships.

## R

### Reminder

The platform-local notification scheduled by a habit's reminder time. Optional. Does not affect the strength meter.

### Reward

The third part of the `Cue → Routine → Reward` loop. The benefit you get from doing the habit, written in your own words. Optional field on every habit.

### Routine

The middle part of the `Cue → Routine → Reward` loop. The actual behaviour you perform. Optional field; usually left blank because it duplicates the habit name.

## S

### Streak

The count of consecutive scheduled completions for a habit. HabitForge displays the streak number but treats the **strength meter** as the primary signal — see [Why habits work](./why-habits-work#what-habit-strength-is-actually-measuring) for the reason. A miss resets the streak count to 0 but does *not* reset the strength meter.

### Strength change

The integer added to (or subtracted from) habit strength when a completion or miss is logged. Positive on completions, negative on misses. Recorded on the completion document for audit purposes.

## T

### Threads

The colloquial name for habit strength units. One thread = one strength point. The metaphor comes from the metalworking framing of "forging" a habit out of repeated effort.

### TanStack Router

The React routing library used in HabitForge. URL-driven; supports search-param state for modals and tabs. See [tanstack.com/router](https://tanstack.com/router).

### Timezone

HabitForge uses your device's reported timezone for day boundaries. Travel does not double-count or skip days; the calendar day in your current timezone is the unit.

## U

### Undo

Tapping a completed checkbox a second time. Removes the completion record and rolls back the strength change.

### User document

The Firestore document at `hf_users/{uid}` that holds your profile. Created on first sign-in. Deleted on account deletion.

## W

### Wellness dashboard

The aggregated view that shows habits, trackers, journals, and timers in one place. Same data as the individual pages, just stitched together for the daily review. See [Wellness dashboard](/docs/productivity) once that page ships.

## Z

### Zustand

The state-management library used in HabitForge for client-side stores (auth, UI, form state). Not user-visible; documented here because it occasionally appears in error messages.

## Where to next

- [What is HabitForge](./what-is-habitforge) — the product overview.
- [First habit walkthrough](./first-habit) — five-minute tutorial.
- [Why habits work](./why-habits-work) — the research behind the strength model.
- [Account basics](./account-basics) — profile, multi-device sync.
