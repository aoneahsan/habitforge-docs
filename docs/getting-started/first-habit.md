---
id: first-habit
title: Your first habit — a five-minute walkthrough
description: Hands-on walkthrough of creating your first habit in HabitForge. Learn the difficulty system, frequency options, cue/routine/reward fields, and how the strength meter responds to your first completion.
sidebar_label: First habit
sidebar_position: 5
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
keywords:
  - first habit
  - create habit
  - habitforge tutorial
  - habit walkthrough
---

# Your first habit — a five-minute walkthrough

**This page walks you through creating your first habit in HabitForge end-to-end** — from the create form to your first completion to seeing the strength meter respond. You should have a working habit and your first few "threads" earned by the end of it.

If you have not signed up yet, start at [Sign up](./sign-up). The walkthrough below assumes you are signed in and looking at an empty dashboard.

## What you will accomplish

By the end of this tutorial:

1. You will have one habit on your dashboard.
2. You will have completed it once and earned 4–6 strength threads.
3. You will know the meaning of every field on the create-habit form.
4. You will know how to undo a completion you marked by mistake.

Estimated time: about five minutes.

## Step 1 — Pick a real habit, not an aspirational one

Before clicking anything: pick a habit you genuinely want to track for the next 30 days. The strength model rewards consistency more than ambition, and tracking five aspirational habits never goes well.

Good first-habit picks:

- "Drink a glass of water after waking up."
- "Walk 10 minutes after dinner."
- "Read 5 pages before bed."
- "Spend 5 minutes on language flashcards."
- "Take vitamins."

Notice the pattern: each one names a specific action attached to a specific moment. Vague picks like "exercise more" or "be productive" do not survive contact with a Tuesday evening.

## Step 2 — Click Create habit

On the dashboard, click the **Create habit** button (or the floating + on mobile). The create-habit form opens as a modal. The form has a small required core and a larger optional section.

## Step 3 — Fill in the required fields

| Field | What it is | Example |
|---|---|---|
| **Name** | The headline of the habit. Visible everywhere. | `Drink water after waking up` |
| **Difficulty** | Easy / Medium / Hard. Controls the strength gain on completion and loss on miss. | `Easy` |
| **Frequency** | Daily, Weekly, or Custom (pick days). | `Daily` |

That is the entire required surface. Click **Save** and you have a habit; the rest is optional polish.

### A few words on Difficulty

Difficulty looks like a vanity setting. It is not. The numbers are real:

| Difficulty | Threads gained per completion | Threads lost per miss |
|---|---|---|
| Easy | +4 | −6 |
| Medium | +5 | −8 |
| Hard | +6 | −10 |

Difficulty controls the *sensitivity* of your strength meter. A Hard habit that you complete 90% of the time will end up with a lower long-run strength than the same habit tagged Easy and completed 90% of the time. That is by design — Hard is for habits where a miss is a meaningful event you want to feel.

The advice we keep repeating: pick the difficulty that fits the version of you on a tired Wednesday. If in doubt, go Easy.

### A few words on Frequency

- **Daily** — every day counts. Missed days lose threads.
- **Weekly** — must be done at least once between Sunday and Saturday. The strength model treats the week as the unit.
- **Custom** — you pick the days. Useful for "weekday only" habits or "Monday/Wednesday/Friday gym."

Pick Daily for your first habit unless the activity legitimately doesn't make sense daily.

## Step 4 — Optionally fill in Cue, Routine, and Reward

Below the required fields are three optional text inputs:

- **Cue** — what triggers the habit. "After my morning coffee." "When I close my laptop for the day."
- **Routine** — what you actually do. "Pour 250 ml of water." "Walk 10 minutes around the block."
- **Reward** — what you get out of it. "Feel hydrated and clear-headed." "Sleep better."

You can ignore all three on day one. Most people do. The reason they exist: users who fill them in tend to keep their habits longer, because writing down the cue moves the habit from "I'll do this when I remember" to "I do this *after* this specific other thing." That specificity is doing most of the work.

The framing comes from Charles Duhigg's *The Power of Habit* (2012); see [Why habits work](./why-habits-work) for the underlying research.

## Step 5 — Optionally enable a reminder

The **Reminder time** field accepts an `HH:mm` value. If you set it, HabitForge sends a local notification at that time on platforms that support it (web with Notifications permission granted, iOS, Android). The reminder is a single one-shot per scheduled day; there is no nag escalation.

**Skip this on day one.** Try the app for a couple of days first. The strength meter alone is enough cue for many users; reminders are a strong tool kept in reserve for habits the meter alone is not getting you to do.

## Step 6 — Save the habit

Click **Save**. The form closes; the habit appears on your dashboard with its strength bar at 0 (no threads yet) and a checkbox for today.

## Step 7 — Complete the habit

Go do the actual thing. Then come back and tap the checkbox.

The bar updates in real time. An Easy habit goes from 0 to 4 threads. A Medium goes 0 → 5. A Hard goes 0 → 6. The colour stays in the "weak" range below 20 threads, which is correct — one completion does not establish a habit. The point is to see the bar move, prove the loop works, and keep showing up.

## Step 8 — If you marked it by mistake, undo

Tap the same checkbox again. The completion record is removed and the strength change is rolled back. There is no penalty for undoing — the strength model only counts logged events.

## What happens if you skip a day

Tomorrow morning, if you don't mark the habit complete by your day's cutoff (midnight in your device's timezone for Daily), the system records a miss and subtracts the difficulty's loss amount. An Easy habit at 4 threads loses 6, clamped to 0. A Hard habit at 6 loses 10, clamped to 0.

You can recover. The next completion adds threads again. There is no permanent penalty, no streak reset that erases prior weeks, and no "you've broken the habit" message. The model is built around the [Lally et al. (2009) finding](./why-habits-work) that a single missed day does not measurably affect long-term habit formation.

## What you have just done

You have created a habit, completed it once, learned to undo, and seen the strength meter respond. From here, daily use is one tap on the dashboard each morning. The habit will gradually climb the colour bands:

- 0–20 threads: weak (red).
- 21–50 threads: building (orange).
- 51–80 threads: established (yellow / amber).
- 81–100 threads: strong (green).

A Daily Easy habit completed every day reaches the green band in about three weeks. A Daily Hard habit reaches it in about two weeks if you never miss, longer if you do. Those numbers are the nature of the gain/loss math, not a target — see [Why habits work](./why-habits-work) for why HabitForge does not advertise milestones like "21 days."

## Next steps

Pick **one** of these depending on what you want next:

| If you want to… | Do this |
|---|---|
| Add a second habit | Hit Create habit again. Two habits is the recommended cap for week one. |
| Add a wellness tracker alongside the habit | Open the dashboard's tracker row and pick water / sleep / mood. |
| Try a focus timer | Click the Pomodoro timer in the sidebar. |
| Understand the strength model better | [Why habits work](./why-habits-work) |
| Look up a vocabulary word | [Glossary](./glossary) |
| See what's stored on the server | [Privacy basics](./privacy-basics) |

## Frequently asked questions

### Can I edit a habit after creating it?

Yes. Click the habit on the dashboard → **Edit**. All fields can be changed. Changing Difficulty does not retroactively recompute past strength — only future completions and misses use the new gain/loss numbers.

### Can I delete a habit?

Yes, but consider archiving instead. **Edit → Archive** keeps the historical data for your records but removes the habit from the active list. **Edit → Delete** is permanent and removes all completion records.

### What happens if I have multiple habits?

The dashboard lists them all. Today's checklist shows the ones due today; the rest stay accessible from the All habits view. There is no soft cap on how many you can have, but research and our own product opinion both say: start with one or two.

### Why didn't my reminder fire?

On web, you must have granted Notifications permission. On iOS, the app must have been granted notification access (Settings → HabitForge). On Android, battery-optimisation can suppress reminders for apps you haven't opened recently — see [Mobile notifications](/docs/mobile) for the exact fix.

### Can I bulk-import habits from another app?

Not currently. Habits in HabitForge are one-by-one. Most users have fewer than five habits, so the friction of bulk import has not justified building it.

### What if my day boundary is different from midnight?

Day boundaries follow your device's timezone, with midnight as the rollover. There is no custom day-start setting today. If you frequently work past midnight, the cleanest workaround is to mark habits before going to bed; their timestamp will fall on the correct day even if you mark them at 11:55 pm.

### Can I share a habit with someone else?

Not directly. Habits are private to your account. Joint accountability features (shared streaks, partner reminders) are on the roadmap but not committed.

## Where to next

- [Glossary](./glossary) — every vocabulary word the app uses.
- [Account basics](./account-basics) — multi-device sync, profile, sign-out.
- [Privacy basics](./privacy-basics) — what is stored and how to delete it.
- [Why habits work](./why-habits-work) — the research behind the strength model.
