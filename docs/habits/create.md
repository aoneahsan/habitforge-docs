---
id: create
title: Create a habit
description: Step-by-step guide to creating a habit in HabitForge. Covers every field on the form, validation rules, and the moment your new habit shows up on the dashboard.
sidebar_label: Create a habit
sidebar_position: 1
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
keywords:
  - create habit
  - habit form
  - habitforge create
  - new habit
---

# Create a habit

**Creating a habit in HabitForge is a single form with three required fields and seven optional ones.** The required fields are name, difficulty, and frequency. Everything else — cue, routine, reward, custom days, reminder time, color, icon, keystone flag — is optional. This page documents every field, what it does, and what HabitForge will do once the habit exists.

If you have not yet signed in, start at [Sign up](../getting-started/sign-up). If you want a guided walkthrough instead of a reference, the [first habit tutorial](../getting-started/first-habit) is a five-minute end-to-end run.

## Quick start

1. From the dashboard, click **Create habit** (or the floating `+` on mobile).
2. Enter a **name**, pick a **difficulty**, pick a **frequency**.
3. Click **Save**.

The habit appears at the top of today's checklist with a strength of 0. That's the entire happy path.

## The required fields

### Name

The headline of the habit. Visible everywhere — dashboard, calendar, search, the browser extension popup. Keep it short and concrete.

| Good | Less good |
|---|---|
| `Drink water after waking` | `Be healthy` |
| `Walk 10 minutes after dinner` | `Get more exercise` |
| `Read 5 pages before bed` | `Read more books` |

The validation rule is `1 ≤ length ≤ 100`. There are no character restrictions; emoji are allowed.

### Difficulty

`Easy` / `Medium` / `Hard`. Controls how much your strength meter moves on each completion or miss:

| Difficulty | Threads gained per completion | Threads lost per miss |
|---|---|---|
| Easy | +4 | −6 |
| Medium | +5 | −8 |
| Hard | +6 | −10 |

Loss is always larger than gain. That asymmetry is intentional — it makes the meter sensitive to slips. See [Strength visual](./strength-visual) for the design reasoning, or [Why habits work](../getting-started/why-habits-work#what-habit-strength-is-actually-measuring) for the research framing.

The honest advice: pick the difficulty that fits the version of you on a tired Wednesday. Most users overrate themselves on day one. **If in doubt, go Easy.** You can change difficulty later — it only affects future completions, not historical ones.

### Frequency

`Daily` / `Weekly` / `Custom`.

- **Daily** — every calendar day counts. Misses on any day cost threads.
- **Weekly** — at least once between Sunday and Saturday. The week is the unit; misses are evaluated weekly.
- **Custom** — you pick the days. Days you didn't pick don't count as missed if you don't complete on them.

If you pick **Custom**, a row of weekday checkboxes appears (Sunday through Saturday). Tick the ones the habit applies to. The most common pattern is "weekdays only" (Mon–Fri).

## The optional fields

You can ignore all of these on day one. Most users do. They exist because users who fill them in tend to keep their habits longer — the specificity is doing most of the work.

### Description

Free-text. Useful for "what counts" — the rule that decides whether you mark complete. Example: a habit named `Workout` might have a description of `Any 20+ minute movement: gym, walk, stretching counts. Standing while reading does not.`

Description appears on the habit detail page and in the edit form, not on the dashboard.

### Cue

The trigger for the habit, from Charles Duhigg's `Cue → Routine → Reward` framing in *The Power of Habit* (2012). The cue is the most important optional field. Filling it in moves the habit from "I'll do this when I remember" to "I do this *after* this specific other thing."

Examples:

- `After my morning coffee`
- `When I close my laptop for the day`
- `Right before brushing teeth at night`

### Routine

The behaviour itself. Usually you can leave this blank because it duplicates the habit name. Useful when the name is short and the routine has detail worth recording: name `Workout`, routine `15 push-ups, 30 squats, 1-minute plank`.

### Reward

The benefit you get from doing the habit, written in your own words. The most under-used field, and arguably the most useful. Three months from now, when you're tired and don't want to do the habit, the reward field is what convinces you.

Examples:

- `Feel hydrated and clear-headed for the morning`
- `Sleep better, wake up less tired`
- `Hit my year-end reading goal`

Identity-based phrasing (James Clear, *Atomic Habits*, 2018) works well here: `I'm someone who finishes what they start.`

### Custom days

Only visible when **Frequency = Custom**. Sun–Sat checkboxes. At least one day must be checked.

### Reminder time

`HH:mm` format (24-hour clock). When set, HabitForge sends a local notification at that time on platforms that support it: web (Notifications API), iOS, Android. The reminder is one-shot per scheduled day; there is no nag escalation or repeat.

**Skip this on day one.** The strength meter alone is enough cue for many users. Reminders are a strong tool kept in reserve for habits the meter alone is not getting you to do.

Notifications require platform permission. See [Schedule and reminders](./schedule-reminders) for the permission flow on each platform.

### Color

Cosmetic. Picks the colour of the habit's strength bar. Defaults to the brand orange. Use it to group habits visually — e.g., all health habits in green, all focus habits in blue.

### Icon

Cosmetic. A pictogram shown next to the habit name on the dashboard and the calendar heatmap. The icon picker shows roughly 100 [Lucide](https://lucide.dev/) icons grouped by category. There is no upload option.

### Keystone

A boolean flag for habits that are expected to influence other behaviours. Set it on the one or two habits you consider central to your week — exercise, sleep, journaling, whatever it is for you.

Effect on the app:

- Keystone habits appear at the top of the dashboard.
- A future filter ("show only keystones") will use this flag.
- The strength math is unchanged — the flag is a label and a sort priority.

The term "keystone habit" comes from Duhigg (2012). The research base for the cascade effect is mixed; HabitForge exposes the flag so you can label what *you* consider a keystone, not because the app claims to identify keystones for you.

## What happens after you click Save

1. A new document is written to the `hf_habits` Firestore collection with your `uid`, the fields you entered, and `strength: 0`, `isArchived: false`.
2. If you set a reminder time, the platform's local notification scheduler is updated.
3. If you are connected on multiple devices, all of them receive the new habit via Firestore's real-time sync within ~1 second.
4. The dashboard re-renders with the habit at the top of today's checklist (or top of the keystone section if you flagged it).

There is no server-side computation step, no email confirmation, and no draft state. The habit is live.

## Validation rules summary

| Field | Required | Rule |
|---|---|---|
| Name | yes | 1–100 chars, any characters allowed |
| Difficulty | yes | one of `easy`, `medium`, `hard` |
| Frequency | yes | one of `daily`, `weekly`, `custom` |
| Custom days | only when `frequency=custom` | at least one Sun–Sat checkbox |
| Description | no | free text |
| Cue / Routine / Reward | no | free text |
| Reminder time | no | `HH:mm`, 00:00–23:59 |
| Color | no | one of the swatches |
| Icon | no | one of the picker icons |
| Keystone | no | boolean |

The form blocks Save until required fields are valid; invalid optional fields (like a malformed time string) reset to the default rather than blocking.

## Tips

- **Two habits, not ten.** Strength gain is small per completion (4–6 threads on a max of 100). The math is generous to consistency, not to enthusiasm. Two habits done daily for a month produce more lasting change than ten habits done sporadically for a week.
- **Use the difficulty rating honestly.** "Read for 20 minutes" should not be tagged Hard if you genuinely enjoy reading. The point of the difficulty system is to keep your strength meter believable.
- **Pair a habit with a tracker.** A "drink water" habit plus the [Water tracker](/docs/trackers) reinforce each other in a way neither does alone.
- **Cue beats Reminder.** If you have a working cue ("after morning coffee"), you usually don't need a reminder time. If you don't have a cue, a reminder is a fallback, not a substitute.

## Frequently asked questions

### Can I create a habit without a name?

No. Name is the only required text field. Validation blocks Save until it has at least one character.

### Can I duplicate an existing habit?

There is no built-in duplicate button. The fastest workaround is to open the existing habit, copy fields manually into a new habit, and Save. A duplicate feature is on the list but not committed.

### What's the maximum number of habits I can create?

There is no soft cap. Practical advice from product use says: more than five concurrent habits rarely sticks. The dashboard is designed around two to four active habits.

### Can I create a "negative" habit (something to avoid)?

Yes. Set the name as the avoidance ("No soda") with **Hard** difficulty. Marking complete on a successful day works the same; the asymmetric loss makes a relapse visible without erasing prior progress.

### What happens if I create a habit and never come back?

The habit sits at strength 0 forever. There is no decay, no automatic deletion, no email reminder. HabitForge will not chase you.

### Can I import habits from another app?

Not currently. There is no import endpoint. Most users have fewer than five habits, so the friction of bulk import has not justified building it.

### Can I create a habit with future-only start date?

Not as a separate field. The habit is active from the moment you create it. To delay, just don't complete it until your start date — strength stays at 0 until you do.

### Can two people share a habit?

No. Habits are private to your account. See [Account basics](../getting-started/account-basics) for the multi-user limitations.

## Where to next

- [Edit and archive](./edit-archive) — change a habit's fields, archive without deleting, or delete permanently.
- [Schedule and reminders](./schedule-reminders) — frequency options and how local notifications work.
- [Streak engine](./streak-engine) — how streaks count and what breaks them.
- [Strength visual](./strength-visual) — what the bar is showing.
- [Why habits work](../getting-started/why-habits-work) — research behind the strength model.
