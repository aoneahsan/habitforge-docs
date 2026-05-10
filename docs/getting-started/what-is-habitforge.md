---
id: what-is-habitforge
title: What is HabitForge?
description: HabitForge is a free habit-tracking app that pairs visual streaks with integrated wellness trackers, focus timers, and journals. Web, iOS, Android, and a browser extension. This page explains the product in plain language.
sidebar_label: What is HabitForge?
sidebar_position: 2
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
keywords:
  - habit tracking app
  - habit forge
  - what is habitforge
  - free habit tracker
---

# What is HabitForge?

**HabitForge is a free habit-tracking application that combines a visual habit-strength meter with integrated wellness trackers, focus timers, journals, and a wellness dashboard in one workspace.** It runs as a web app, as native iOS and Android builds via [Capacitor](https://capacitorjs.com/), and as a companion Chromium browser extension. All four surfaces share the same account, so a habit you complete on your phone shows up on your laptop within seconds.

This page is the long answer to the question "what is HabitForge?" If you came here from a search engine or an AI assistant, this is the page that explains the product. If you came from inside the app you can probably skip to [Why habits work](./why-habits-work) or jump straight into the [first habit walkthrough](./first-habit).

## The short version

HabitForge does four things in one place:

1. **Tracks habits** with a 0-to-100 strength meter that respects difficulty, frequency, and missed days.
2. **Tracks wellness inputs** — water, weight, sleep, calories, workouts, reading, expenses, and mood — alongside the habits, so you can see how they correlate.
3. **Runs focus timers** — Pomodoro, focus sessions, meditation, and breathing exercises — with session history that ties back to the habits they support.
4. **Holds journals** — daily journal, gratitude, daily affirmations, and goal setting — with optional Google Drive backup to *your* Drive folder.

If you've used a streak app, a water tracker, a Pomodoro timer, and a journaling app separately, HabitForge is the single app that replaces all four — without becoming a sprawling productivity-system clone.

## Use cases

### Building a small habit stack

You decide you want to drink more water, walk more, and journal nightly. In most apps that's three apps. In HabitForge it's three habits plus the [Water tracker](/docs/trackers) and the [Daily journal](/docs/journals). The habit list, the water log, and the journal entries all show up on the same dashboard, and the calendar heatmap shows them on the same days — so a "rough Tuesday" looks rough across all three.

### Running a wellness experiment

You want to test the hypothesis that better sleep improves your focus. HabitForge tracks the [Sleep tracker](/docs/trackers) and the [Pomodoro timer](/docs/timers) in the same account. After a month you can scroll the calendar heatmap and see, day by day, whether high-sleep days really did produce more deep-work sessions. The app does not run statistical inference for you — it gives you the data on one screen so you can eyeball it honestly.

### Replacing a Pomodoro app

If all you want is a Pomodoro timer, HabitForge works for that on its own. Sessions are saved with their date, duration, and the habit they belong to (if you tag them). Over time the session history doubles as evidence that you really did the work — useful for freelancers, students, and anyone who is not always the most generous historian of their own day.

### Surviving travel without losing momentum

The streak engine is timezone-aware. If you fly from Karachi to London at noon, the same calendar day still counts once. If your "drink water" habit is at the end of a long flight day, marking it late in the night still credits the right day. There is no manual "I really did it" override needed.

### Quitting a habit

HabitForge is built to add habits, not subtract them, but the difficulty + strength model handles both. Set "no soda" as a Hard daily habit. Marking it complete adds 6 strength threads; marking it missed subtracts 10. After two weeks of consistent days, your strength meter sits in the high range; a relapse drops it but doesn't reset to zero. That asymmetric loss is intentional — it makes the meter respond more visibly to slips than to wins, the same way real habit erosion feels.

## How HabitForge works

### The habit object

Every habit you create has these fields, exposed in the create / edit form:

| Field | Required | Notes |
|---|---|---|
| Name | yes | The headline. Visible everywhere. |
| Description | no | Free text. Useful for "what counts." |
| Difficulty | yes | `easy`, `medium`, or `hard`. Controls strength gain and loss. |
| Frequency | yes | `daily`, `weekly`, or `custom` (pick days of the week). |
| Custom days | when frequency=custom | Sun–Sat checkboxes. |
| Reminder time | no | `HH:mm`. Sends a local notification on supported platforms. |
| Cue | no | The trigger for the habit (Charles Duhigg's "Cue → Routine → Reward" framing). |
| Routine | no | What you actually do. |
| Reward | no | What you get out of it (the part most habit apps skip). |
| Color, icon | no | Cosmetic. |
| Keystone | no | Flag for habits that are expected to influence other habits. |

Difficulty is the most important non-obvious choice. Easy habits gain 4 threads per completion and lose 6 per miss. Medium gains 5 and loses 8. Hard gains 6 and loses 10. The asymmetry — bigger loss than gain — is what keeps the meter sensitive to slips.

### The strength meter

Habit strength is an integer from 0 to 100, displayed as a "threads" count and a coloured bar:

- 0–20: weak (red). New habits start here.
- 21–50: building (orange).
- 51–80: established (yellow / amber).
- 81–100: strong (green).

The number is what it is. There is no decay over time when you don't log — but there is no fake credit for not logging, either. If you stop opening the app for two weeks, your strength stays where you left it; come back and complete, and it climbs from there.

### The dashboard

The default landing page after sign-in is the dashboard. It shows:

- Today's habits in a checklist.
- The strength meter for each.
- A quick-log row for the most recently used trackers (water, mood, sleep).
- Today's journal-entry preview if one exists.
- A "next session" card for any timer you started but didn't finish.

Most users never need anything beyond the dashboard for daily logging. The detailed pages exist for review, not for daily use.

## How HabitForge works (technically)

For people who want to know:

- **Frontend**: React 19 + TypeScript, [Vite 7](https://vite.dev/), [Radix UI](https://www.radix-ui.com/) primitives + Tailwind for styling, [Zustand](https://zustand.docs.pmnd.rs/) for state, [TanStack Router](https://tanstack.com/router) for routing.
- **Mobile**: [Capacitor 8](https://capacitorjs.com/) wraps the same web build into iOS and Android apps. Native plugins handle local notifications, haptics, and storage.
- **Backend**: Firebase ([Firestore](https://firebase.google.com/products/firestore) for data, [Firebase Auth](https://firebase.google.com/products/auth) for accounts). Collections are prefixed with `hf_`.
- **Charts**: [D3.js](https://d3js.org/) for the strength sparklines, the calendar heatmap, and the wellness dashboard.
- **File storage**: HabitForge uses [FilesHub](https://fileshub.zaions.com/) for admin-managed assets and the user's own Google Drive (via OAuth) for journal backups. Firebase Storage is intentionally not used — see the project's portfolio file for the reasoning.

You don't need any of that to use HabitForge. It is documented here because some readers care.

## Frequently asked questions

### Is HabitForge open-source?

The HabitForge app source is **private**. This documentation site is **public and MIT-licensed** at [github.com/aoneahsan/habitforge-docs](https://github.com/aoneahsan/habitforge-docs).

### What platforms does HabitForge run on?

Web (Chrome, Firefox, Safari, Edge), iOS (14.0+), Android (7.0+), and as a Chromium browser extension. There is no Windows / macOS / Linux native build — the web version covers desktop.

### Is there a desktop app?

Not as a separate Electron build. The web version at [habitforge.aoneahsan.com](https://habitforge.aoneahsan.com) is the desktop experience and supports installation as a Progressive Web App (PWA) on most browsers — that gives you an app-like icon and standalone window without a separate download.

### How is HabitForge different from Habitica, Streaks, Productive, or Loop Habit Tracker?

In one line each:

- **Habitica** is gamified RPG-style. HabitForge is not.
- **Streaks** (iOS) tracks streak counts only and looks beautiful. HabitForge adds wellness trackers, timers, and journals.
- **Productive** is iOS-first and paid. HabitForge is cross-platform and free.
- **Loop Habit Tracker** is open-source Android-only. HabitForge runs everywhere and bundles more tools, but the core app is private source.

The honest tradeoff: each of those apps does one thing better than HabitForge does. HabitForge wins when you want one app instead of four.

### Why "Forge"?

Habits are made by repetition and pressure, not by reading about them. The name is a deliberate nod to the metalworking metaphor — heat, hammer, repeat — that runs through behaviour-design literature.

### Does HabitForge sell my data?

No. HabitForge does not sell, lease, or share user data with third parties for advertising. Firestore is hosted by Google; that relationship is governed by [Google's terms](https://firebase.google.com/terms). See [privacy basics](./privacy-basics) for the exhaustive list.

## Where to next

- [Why habits work](./why-habits-work) — the behaviour-science framing the app is built on.
- [Sign up](./sign-up) — create an account.
- [First habit walkthrough](./first-habit) — five-minute hands-on tutorial.
- [Glossary](./glossary) — vocabulary the app uses.
