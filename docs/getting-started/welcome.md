---
id: welcome
title: Welcome to HabitForge
description: Start here. HabitForge is a habit-tracking workspace with visual streaks, integrated wellness trackers, focus timers, and journals — on web, mobile, and as a browser extension. Free, opinionated, and honest about your data.
sidebar_label: Welcome
sidebar_position: 1
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
keywords:
  - habit tracker
  - getting started
  - habit app
  - streak
---

# Welcome to HabitForge

**HabitForge is a free, opinionated habit-tracking workspace** that combines a visual habit-strength meter, a forgiving streak engine, integrated wellness trackers (water, weight, sleep, calories, workouts, reading, expenses, mood), focus timers (Pomodoro, focus, meditation, breathing), and journaling tools (daily journal, gratitude, affirmations, goals) in a single app. It runs in any modern browser, on iOS and Android via [Capacitor](https://capacitorjs.com/), and as a companion browser extension.

This page is the front door. By the time you finish reading it you will know whether HabitForge fits your situation, what you'll spend the next ten minutes doing, and where to go next.

## Who HabitForge is for

HabitForge is built for people who:

- **Want to track more than habits.** A streak app is rarely enough. Real change usually involves drinking more water, moving more, sleeping enough, journaling, and learning to focus — all at the same time. HabitForge keeps these in one place so they reinforce each other instead of fighting for screen time.
- **Have tried streak apps before and bounced off.** The streak engine here is forgiving of timezones, travel, and skipped days, but does not silently inflate your numbers. The [habit-strength meter](#what-makes-habitforge-different) gives you signal even when a streak technically broke.
- **Care about where their data lives.** Your account is in [Firebase](https://firebase.google.com/) (Google's backend). Optional journal backups go to *your* Google Drive folder, not ours. Account deletion removes Firestore data. There are no third-party analytics scripts in the browser extension. See [privacy basics](./privacy-basics) for the exact list of what is stored and why.
- **Use multiple devices.** Sign in once, get the same data on the web, your phone, your tablet, and the browser extension.

If you want a single-purpose minimalist tracker, HabitForge will feel busy. If you want a sprawling self-quantification dashboard, it will feel opinionated. The sweet spot is somewhere in the middle: a few well-tuned tools you actually open every day.

## What you'll be doing in 10 minutes

The core flow is short:

1. [Sign up](./sign-up) with your Google account. One click. No credit card. No verification email loop.
2. Land on the dashboard.
3. [Create your first habit](./first-habit) — pick a name, a difficulty (easy / medium / hard), a frequency (daily / weekly / custom days), and an optional reminder time.
4. Open the habit, mark today complete, and watch the strength meter tick up.
5. Add a tracker (water and sleep are the most common starting points) or a timer (Pomodoro is a good first focus tool).

That's the loop. Everything else — the [calendar heatmap](/docs/productivity), the [wellness dashboard](/docs/productivity), the [browser extension](/docs/extension), and the deeper [behaviour-design framing](./why-habits-work) — is icing on top of those four steps.

## What makes HabitForge different

Three opinions shape the product. Disagree with any of them and another tool may serve you better:

1. **Streaks should be honest.** When you mark a habit incomplete, your habit strength goes down. When you mark it complete, it goes up. The numbers are the numbers. There is no "I forgot to log it" autofill, and there is no silent grace period that pretends a missed day didn't happen. The forgiveness lives in the *strength model*, not in the streak count: a single missed day costs strength but does not erase weeks of progress.
2. **Visualisation beats notification.** Reminders exist, but they are optional. The habit-strength meter (0–100 "threads") is designed to be the thing you actually look at. A high-strength habit looks alive at a glance; a fading habit looks faded. Looking is a stronger cue than buzzing.
3. **Your data stays yours.** Profile and habit data live in Firestore. Journals and exports can be backed up to your own Google Drive folder. Account deletion removes Firestore data. The browser extension uses [Chrome Identity API](https://developer.chrome.com/docs/extensions/reference/api/identity) for sign-in instead of loading the Firebase Auth SDK — that means it never injects remote scripts into your browser.

## What HabitForge does *not* do

Setting expectations honestly:

- It does not give medical advice. The trackers are for awareness, not diagnosis.
- It does not have a public REST or GraphQL API. There is no programmatic ingestion endpoint.
- It does not import data from arbitrary third-party services in bulk. You can paste data manually or, for journals, sync via your own Google Drive folder.
- It does not gamify aggressively. There are achievements and streak counts, but no daily login bonuses or badges that exist purely for engagement.
- It does not run on KaiOS, feature phones, or browsers older than the last three Chrome / Firefox / Safari versions.

## Where to go next

| If you want to… | Read |
|---|---|
| Understand what HabitForge is in one paragraph | [What is HabitForge](./what-is-habitforge) |
| Understand *why* habits work and what HabitForge borrowed from that research | [Why habits work](./why-habits-work) |
| Just sign up | [Sign up](./sign-up) |
| Walk through your first habit step by step | [First habit walkthrough](./first-habit) |
| Look up a term (streak, strength, threads, keystone, completion) | [Glossary](./glossary) |
| Understand profile + sync + multi-device | [Account basics](./account-basics) |
| See what data we store and how to delete it | [Privacy basics](./privacy-basics) |

## Frequently asked questions

### Is HabitForge really free?

Yes. There is no paid tier, no in-app purchase, and no credit card requirement. If the app is useful you can support continued development at [aoneahsan.com/payment](https://aoneahsan.com/payment?project-id=habitforge&project-identifier=com.aoneahsan.habitforge), but donations have no effect on what you can do inside the app.

### Do I need to install anything?

Not to try it. The web version at [habitforge.aoneahsan.com](https://habitforge.aoneahsan.com) works in any modern browser. If you want native notifications, install the iOS or Android build (see [Mobile install](/docs/mobile)) or the [browser extension](/docs/extension) for desktop quick-add.

### Will my data be there if I close the browser?

Yes. Once you sign in, your habits, completions, journals, tracker logs, and timer sessions sync to Firestore. Closing the tab is fine; clearing site data while signed out before signing in is the only situation where local-only state can be lost.

### What happens to streaks if I travel?

The day boundary in HabitForge follows your *device's* timezone. If you move from EST to GMT mid-day, the same calendar day still counts the same — there is no double-marking. Sleep tracker entries that span timezones are stored with both the start and end times so a flight night still parses correctly.

### Can I use HabitForge offline?

Partially. The web app caches the shell and your most recent data so reading what you logged works offline; new completions and tracker entries written offline are queued and pushed once Firebase reconnects. The mobile app behaves the same way. See [Sync and offline](/docs/theme) for the exact rules.

### How is HabitForge maintained?

Built and maintained by [Ahsan Mahmood](/docs/about), a senior full-stack and mobile engineer. The HabitForge app source is private; this documentation site is open-source under MIT at [github.com/aoneahsan/habitforge-docs](https://github.com/aoneahsan/habitforge-docs).

### Why one app for so many things instead of separate apps?

Habits do not live in isolation. The reason your meditation streak fails is often your sleep, which is often your hydration, which is often your evening routine. Keeping the trackers under one roof means a single morning open-the-app moment touches all of them — that is the only realistic way most people maintain more than two simultaneously.

## Tips for the first week

- **Pick two habits, not ten.** Strength gain is small per completion (4–6 threads on a max of 100). The math is generous to consistency, not to enthusiasm. See [streak engine](/docs/habits) once that section ships.
- **Use the difficulty rating honestly.** "Read for 20 minutes" should not be tagged Hard if you genuinely enjoy it. The point of the difficulty system is to keep your strength meter believable.
- **Don't enable reminders on day one.** Try the app for two days first. If the strength meter alone isn't enough to get you to log, *then* add reminders.
- **Pair a habit with a tracker.** "Drink water" + the [Water tracker](/docs/trackers) shipping in Batch 4 reinforces each other in a way that drinking water alone, without measurement, never quite does.

When you're ready, head to [Sign up](./sign-up).
