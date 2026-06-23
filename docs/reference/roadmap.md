---
id: roadmap
title: HabitForge roadmap — what is shipped and what is planned
description: An honest HabitForge roadmap separating shipped features from planned ones, including the planned Google Drive backup toggle. No dates are promised. HabitForge is free.
sidebar_label: Roadmap
sidebar_position: 2
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
keywords:
  - habitforge roadmap
  - habitforge planned features
  - habitforge shipped features
  - google drive backup toggle
  - habit tracker roadmap
  - free habit tracker
  - upcoming features
---

# HabitForge roadmap

This page is an **honest snapshot** of where HabitForge is today and where it is heading. It separates what has actually shipped from what is planned, and it deliberately does **not** promise dates — plans change, and a free product moves at the pace its single maintainer can sustain. HabitForge is and will remain free to use.

For the concrete history of released versions, see the [Changelog](./changelog).

## Shipped

These features are live across the relevant surfaces today (web, iOS, Android, and the Chromium browser extension as applicable).

### Core habit tracking

- A forgiving **streak engine** that respects timezones and travel without silently inflating numbers.
- A visual **habit-strength meter** so progress is legible at a glance.
- A **habit-calendar heatmap** for spotting patterns over time.

### Wellness trackers

- Integrated trackers for **water, weight, sleep, calories, workouts, reading, expenses, and mood**, each with its own logging flow and history.
- A unified **wellness dashboard** that pulls the trackers together. See [Wellness dashboard](../productivity/wellness-dashboard).

### Focus and mindset

- Focus timers: **Pomodoro, focus sessions, meditation, and breathing exercises**.
- Journals: **daily journal, gratitude journal, daily affirmations, and goal setting**.

### Accounts, sync, and reliability

- **Google Sign-In** via Firebase Authentication (web, mobile, and extension).
- **Cross-device sync** through Firestore, account-based and automatic. See [Cross-device sync](../theme/sync).
- **Offline-first** behavior: local caching plus a queue that drains on reconnect. See [Offline-first tracking](../theme/offline).
- **Manual data export** from the account pages. See [Export your data](../account/export).
- Crash resilience via a branded error screen and Sentry reporting; loading skeletons on every data page.

### Browser extension

- One-click daily check-ins and streak counters in the popup.
- **Focus Mode** that blocks distracting sites during focus sessions, with scheduling, soft/hard strength, and a whitelist.
- Google Account sync, configurable reminders, and import/export of settings — with **no third-party analytics or ad scripts**. See [Browser extension](../extension/install).

### Theming and accessibility

- A theme customizer (appearance, accent color, sizing, font size) built on Radix UI Themes, syncing with your account.
- Reduced-motion support and keyboard accessibility across pages.

## Planned

These are genuinely planned or partially built — not promises with dates. They are listed so expectations stay honest.

### Surface the Google Drive backup toggle

A Google Drive backup service already exists in the codebase, using Google's narrow `drive.file` scope (it only ever touches a "HabitForge" folder the app creates, never your other Drive files). What is **not yet surfaced** is a clear, discoverable **backup toggle in the settings UI**. The plan is to expose that toggle so the optional backup is easy to find and control, on top of the existing offline caching, account sync, and manual export. Background on the mechanism: [Google Drive backup](../theme/google-drive).

### Continued reliability and content work

- Ongoing stability, privacy, and data-safety refinements (the most recent of which shipped in v1.0.1 — see the [Changelog](./changelog)).
- Filling out the remaining documentation sections so every feature has a matching guide.

## Explicitly not planned

To set expectations honestly, some things are **not** on the roadmap:

- **A public REST or GraphQL API.** There are no programmatic integrations today and none planned.
- **Email-and-password or non-Google sign-in.** Authentication is Google-only by design; there is no near-term plan to add other providers. The reasoning is in [Sign up](../getting-started/sign-up).
- **A paid tier.** HabitForge stays free.
- **Ad networks or third-party trackers in the extension.** The extension remains free of remote analytics and ad scripts.

## How priorities are set

HabitForge is maintained by one engineer, [Ahsan Mahmood](../about/author). Priorities favor reliability and privacy over feature sprawl — fewer, well-tuned features rather than a large integrations catalogue. If something here matters to you, say so: feedback genuinely shapes what gets built next.

## Where to next

- [Changelog](./changelog) — the released versions behind this roadmap.
- [FAQ](./faq) — common questions answered.
- [What is HabitForge](../getting-started/what-is-habitforge) — the product overview.
- [Contact](../about/contact) — send a feature request or report an issue.
