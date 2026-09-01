---
id: changelog
title: Changelog
description: 'What is new in HabitForge, latest first: the 1.0 rebuild with offline check-ins, scored challenges, a generous free tier, and the pre-release history before it.'
sidebar_label: Changelog
sidebar_position: 1
last_update:
  date: 2026-09-01
  author: Ahsan Mahmood
tags:
  - changelog
  - releases
keywords:
  - habitforge changelog
  - release notes
  - what is new
---

# Changelog

**What is new in HabitForge, latest first.** These notes mirror the app's release notes, so what you read here matches what shipped.

## 1.0.0 — 2026-08-31 — the first public release

:::note About the numbering
The versions listed below this one — 1.2.0, 1.1.0 and 1.0 — are the development history of the **earlier
app** this one replaced. **None of them was ever published**, so no one is being asked to move backwards:
this is the first HabitForge release to reach a store, and it starts the version line at 1.0.0.
:::

**HabitForge was rebuilt from the ground up.** Same idea, same rope, new foundations — a new stack, a new
backend, and a lot of things the 1.x app could not do.

- **Feature** — Habits gain real schedules, and pauses that keep your history while the run starts again from zero on resume.
- **Feature** — **Check-ins work offline.** They queue on your device and sync when you reconnect.
- **Feature** — **Challenges are scored.** Participants are ranked against the target, ties are joint wins, and
  a challenge can be bound to a habit each person chooses for themselves.
- **Feature** — **Plans, and a free tier that is genuinely generous.** Free carries **30 habits, 30
  challenges a month and up to 500 friends** — the things that cost nothing to run are not the things worth
  rationing. Pro and a Family household whose members inherit the plan sit above it. See
  [pricing](pathname:///pricing.md), which reads its numbers from the live plan table rather than from a
  page somebody has to remember to update.
- **Feature** — **A notification bell** for what happened while you were away.
- **Feature** — **Reminders raised by your own device.** A daily one at a time you choose, and **a reminder
  per habit**, on the days that habit is actually due. Both are scheduled on your phone rather than sent from
  a server, so they are right across a time-zone change and work with no connection at all.
- **Feature** — **A third kind of habit: Maintain**, beside Build and Break — for the things you are keeping
  up rather than starting or stopping.
- **Feature** — **Your longest streak ever**, on the dashboard and on the leaderboard, kept separately from
  the one you are running now so a broken streak no longer erases what you did.
- **Feature** — **A line on your dashboard about the people you know** — who kept what today.
- **Feature** — **Export everything you have, or delete your account**, from inside the app.
- **Improvement** — The theme customiser grows from a handful of options to **ten settings**, applied before
  the first paint so there is no flash of the wrong theme.
- **Improvement** — Every screen was rebuilt for keyboard and screen-reader use.
- **Improvement** — **The household screens.** If you own a Family plan you get a roster, a seat meter, an
  invitation list and a way to hand the household over; if you are a member you get a plain account of what
  you inherit and one way out.
- **Improvement** — **Deleting your account now tells you it worked** before signing you out, instead of the
  app simply disappearing.
- **Improvement** — Every link that leaves HabitForge opens in a new tab.
- **Removed** — Profile photos. Profiles now carry a handle and a display name.

**Android:** the native app is built, signed and **uploaded to Google Play internal testing**; it reaches
the public track after its on-device pass. The web app installs to your home screen in the meantime.

## 1.2.0 — 2026-07-23

- **Feature** — Upload a profile photo, shown on the leaderboard and community posts.
- **Feature** — In-app [contact form](./support.md) on the Help page, so you do not need a mail app.
- **Improvement** — [Automatic in-app updates](../apps/android.md) so fixes arrive without waiting for a store update.
- **Improvement** — Faster startup and lighter pages through code-splitting and lazy loading.
- **Improvement** — Groundwork for more reliable error handling and analytics.
- **Fixes** — Data, reliability, and UI polish throughout.

## 1.1.0 — 2026-07-08

- **Feature** — Share your streaks, achievements, and the app with friends.
- **Improvement** — In-app Privacy, Terms, and Account-deletion pages.
- **Improvement** — Android App Links and a `habitforge://` deep link, so shared links open straight in the app.
- **Improvement** — Brand and app-icon refresh.
- **Fixes** — Stability and polish.

## 1.0 — initial release

- **Feature** — Create and track habits with the cue, routine, and reward loop.
- **Feature** — Daily check-ins with streaks and points.
- **Feature** — Rope-strength visualisation that grows with your consistency.
- **Feature** — Weekly analytics and charts.
- **Feature** — Optional community: posts, comments, challenges, friends, and a leaderboard.
- **Feature** — Achievements with celebration moments.
- **Feature** — Light and dark themes with a theme customiser.
- **Feature** — Offline support so tracking works without a connection.

## Where to next

- [The Android app](../apps/android.md) — where automatic updates land.
- [Get started](../getting-started.md) — try the latest release.
