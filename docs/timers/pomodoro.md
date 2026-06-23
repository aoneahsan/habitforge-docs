---
id: pomodoro
title: Pomodoro timer with work and break sessions
description: Run timed work sprints with short and long breaks, a circular progress ring, a configurable daily pomodoro goal, and focus minutes logged per day.
sidebar_label: Pomodoro
sidebar_position: 1
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
keywords:
  - pomodoro timer app
  - work and break timer
  - 25 minute focus timer
  - pomodoro daily goal
  - free pomodoro technique tool
  - focus session tracker
---

# Pomodoro timer with work and break sessions

**The HabitForge Pomodoro timer counts down a work block, then a break, and loops between them so you work in focused, timed sprints.** It starts from the classic 25-minute work / 5-minute short break / 15-minute long break rhythm, draws a circular SVG ring that empties as time runs down, and switches to a long break after every fourth completed work block. Each completed work session is saved to your account, so the page can show how many pomodoros and how many focus minutes you have done today against a daily goal you choose. It is a plain personal-productivity timer — free, with no ads in the timer and no account upsell.

## Use cases

### Breaking a long task into sprints

When a task feels too big to start, a 25-minute block lowers the bar: you only commit to one sprint. Hit **Start**, work until the ring empties, then take the break the timer hands you. Stacking four sprints with breaks is a full Pomodoro cycle and usually more than an hour of real focus.

### Pairing focus blocks with a habit

Create a habit like `Two deep-work pomodoros` and use the timer as the proof. The habit is the commitment; the "Today's Pomodoros" counter is the evidence. See [Habits → Create a habit](../habits/create) for setting one up.

### Protecting your breaks

Most people skip breaks and burn out by mid-afternoon. Because the timer automatically moves you into a short or long break, it nudges you to actually step away. You can turn on **Auto-start Breaks** so the break begins the instant work ends.

## How to use it

1. Open the Pomodoro timer in the app at [habitforge.aoneahsan.com/pomodoro](https://habitforge.aoneahsan.com/pomodoro) (you will need to be signed in — see [Getting started → Sign up](../getting-started/sign-up)).
2. Press the green **Start** button. The ring begins to empty and the time counts down from your work duration.
3. Use **Pause** to stop the clock, **Reset** to send the current phase back to full, or **Skip** to jump straight to the next phase.
4. When a work block finishes, the timer records it and switches to a short break — or a long break after every fourth work block.
5. To change durations, open **Settings** and use the steppers: Work (5–60 min), Short Break (1–15 min), Long Break (5–30 min). You can also toggle **Auto-start Breaks** / **Auto-start Work** and set your **Daily Goal** (1–20 pomodoros).
6. Watch the three stat cards — Today's Pomodoros, Focus Time Today, and Sessions Today — fill in as you go.

## FAQ

### Do my settings save between visits?

No. The duration, automation, and daily-goal settings live in the timer screen only and reset to the 25 / 5 / 15 defaults (daily goal 8) when you reload or come back later. Your completed **sessions**, however, are saved to your account, so the daily counters are accurate. Adjust the settings at the start of each working session.

### Does the timer keep running if I close the tab?

No. The countdown runs in the page while it is open. If you reload, navigate away, or close the tab, the running timer is lost and you start a fresh block next time. Completed sessions that were already recorded stay saved.

### Does it play a sound or alert when a block ends?

The timer ends silently — it just switches to the next phase and updates the count. There is no audible chime in this screen, so keep the tab visible if you want to notice the change. This is an honest limitation, not a hidden setting.

### How is "Focus Time Today" calculated?

It adds up the actual minutes from your **completed work** sessions for the current day. Short and long breaks are not counted as focus time, and an incomplete work block (one you reset or skipped) is not added.

### When does the long break happen?

After every fourth completed work block by default. That interval comes from the long-break setting; the timer checks whether the number of completed pomodoros is a multiple of four and, if so, gives you a long break instead of a short one.

## Where to next

- [Deep focus timer](./focus) — longer, single-block deep-work sessions with a focus score.
- [Meditation timer](./meditation) — a calm timer with a breathing circle and mood check.
- [Habits → Create a habit](../habits/create) — pair a focus habit with the timer.
- [Habits → Streak engine](../habits/streak-engine) — how daily completions roll into streaks.
