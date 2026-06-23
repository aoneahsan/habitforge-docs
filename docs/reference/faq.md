---
id: faq
title: HabitForge frequently asked questions and answers
description: Answers to common HabitForge questions — pricing, accounts, platforms, sync, offline use, privacy, the browser extension, and data export. HabitForge is free.
sidebar_label: FAQ
sidebar_position: 1
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
keywords:
  - habitforge faq
  - is habitforge free
  - habitforge platforms
  - habitforge offline
  - habitforge privacy
  - habitforge data export
  - habitforge browser extension
  - google sign in habit tracker
---

# HabitForge FAQ

This page answers the questions people ask most often about HabitForge — a **free, zero-cost habit-tracking workspace** that combines a forgiving streak engine, a visual habit-strength meter, wellness trackers, focus timers, and journals across the web, mobile, and a browser extension. If your question is not here, email [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) or open an issue on the [docs repository](https://github.com/aoneahsan/habitforge-docs/issues).

## Pricing and accounts

### Is HabitForge really free?

Yes. HabitForge is free to use, with no paid tier, no subscription, and no "premium" features held back. There is no credit card at sign-up and no usage-based billing. The app runs on free-tier infrastructure, so cost is never passed on to you.

### Do I need an account?

You can use HabitForge fully signed out, but your data then stays on that one device. Signing in unlocks [cross-device sync](../theme/sync) so your habits, logs, settings, and theme follow your account everywhere.

### How do I sign in?

HabitForge uses **Google Sign-In** as the only authentication method, backed by Firebase Authentication. There is no email-and-password registration. One click creates an account that works identically on web, iOS, Android, and the extension. See [Sign up](../getting-started/sign-up) for the full walkthrough and the reasoning behind Google-only auth.

## Platforms and install

### Which platforms does HabitForge run on?

Four surfaces share one account:

- **Web** — [habitforge.aoneahsan.com](https://habitforge.aoneahsan.com), in any modern browser.
- **Android** — published on the Google Play Store ([listing](https://play.google.com/store/apps/details?id=com.aoneahsan.habitforge)).
- **iOS** — built natively with Capacitor.
- **Chromium browser extension** — a companion for quick check-ins and a focus-mode site blocker.

### Is there a desktop app?

There is no standalone desktop installer. The web app is the desktop experience and works offline once loaded; the browser extension adds a toolbar popup for fast check-ins. See [Browser extension](../extension/install) and [Mobile install](../mobile/install).

## Data, sync, and offline

### Where is my data stored?

Your data lives in **Firebase Firestore**, tied to your account. HabitForge is offline-first: the app caches data locally and queues any changes you make while offline, then syncs them automatically when you reconnect. See [Offline-first tracking](../theme/offline).

### Does my data sync across devices?

Yes, when you are signed in. Sync is account-based, automatic, and free — there is no separate cloud tier. Read [Cross-device sync](../theme/sync) for what syncs and how.

### Can I export my data?

Yes. You can download a copy of your data from your account pages at any time. See [Export your data](../account/export).

### Can I back up to my own Google Drive?

A Google Drive backup capability exists using the narrow `drive.file` scope, which only ever touches a "HabitForge" folder the app creates — never the rest of your Drive. Surfacing a one-tap Drive backup toggle in the settings UI is on the [roadmap](./roadmap); for now your everyday safety nets are offline caching, account sync, and manual export. Details: [Google Drive backup](../theme/google-drive).

## Privacy and security

### What does HabitForge track about me?

For product analytics HabitForge uses **Firebase Analytics** and **Amplitude**, and for crash reporting it uses **Sentry**. These help improve reliability and usability. The browser extension does **not** load any third-party analytics or ad scripts, in line with Chrome Web Store policy. See [Privacy basics](../getting-started/privacy-basics).

### Are there ads?

No. There are no third-party ad scripts anywhere, and none at all inside the browser extension.

### How do I delete my account and data?

On any device, go to **Profile → Delete account**. This removes your Firestore documents and revokes the Google authorization. See [Delete your account](../account/deletion).

## Features

### What can I track besides habits?

Alongside habit streaks, HabitForge includes integrated trackers for **water, weight, sleep, calories, workouts, reading, expenses, and mood**, plus focus timers (Pomodoro, focus, meditation, breathing) and journals (daily journal, gratitude, affirmations, goal setting), all summarized on a [wellness dashboard](../productivity/wellness-dashboard).

### Does it give medical or financial advice?

No. The wellness and finance trackers are for personal awareness and self-tracking, not diagnosis or professional advice. In-app reminders make this explicit.

## Developer and integrations

### Is there a public API?

No. HabitForge does not expose a public REST or GraphQL API, and there are no programmatic integrations today.

### Who builds HabitForge?

HabitForge is built and maintained by **Ahsan Mahmood**, a senior full-stack and mobile engineer. See [About the author](../about/author) and [Credits](../about/credits).

## Where to next

- [What is HabitForge](../getting-started/what-is-habitforge) — the product overview.
- [Sign up](../getting-started/sign-up) — create your free account.
- [Roadmap](./roadmap) — what is shipped and what is planned.
- [Changelog](./changelog) — released versions.
- [Contact](../about/contact) — reach the maintainer.
