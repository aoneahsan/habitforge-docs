---
id: changelog
title: HabitForge changelog — released app and extension versions
description: The HabitForge changelog of released versions for the app (web, iOS, Android) and the Chromium browser extension, latest first. No fabricated entries. HabitForge is free.
sidebar_label: Changelog
sidebar_position: 3
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
keywords:
  - habitforge changelog
  - habitforge release notes
  - habitforge versions
  - habitforge extension changelog
  - habit tracker updates
  - whats new habitforge
  - version history
---

# HabitForge changelog

This is the public changelog for HabitForge, covering both the **app** (web, iOS, and Android) and the **Chromium browser extension**, with the most recent versions first. Entries mirror the project's real release notes — nothing here is fabricated. The forward-looking view lives on the [Roadmap](./roadmap).

The app and the extension are versioned separately, so they are listed under their own headings below.

## App (web · iOS · Android)

The single source of truth for the app's "What's New" text is the project's release notes. The current Play Store package is `com.aoneahsan.habitforge`.

### v1.0.1 — June 2026

> Android `versionCode` 3 · prepared 2026-06-10. At the time of writing this build was prepared but not yet uploaded to the Play Store, so the live store version may still show v1.0.0 until it rolls out.

A reliability and privacy update:

- **Stronger privacy** — optional website-only analytics no longer run inside the mobile app.
- **Clearer guidance** — in-app reminders make explicit that the wellness and finance tools are for self-tracking, not professional advice.
- **Accurate disclosures** — complete, correct privacy and data-safety information.
- **Stability** — assorted bug fixes and stability improvements.

### v1.0.0 — Initial release

> Android `versionCode` 1 · first Play Store submission.

The initial public release of HabitForge: habit tracking with a forgiving streak engine and visual habit-strength meter, the integrated wellness trackers (water, weight, sleep, calories, workouts, reading, expenses, mood), focus timers (Pomodoro, focus, meditation, breathing), journals (daily, gratitude, affirmations, goal setting), the wellness dashboard, Google Sign-In, cross-device sync, and offline-first behavior.

## Browser extension

The HabitForge browser extension is versioned on its own track. Its changelog follows the [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format and Semantic Versioning.

### v1.0.0 — 26 January 2026

The initial release of the companion extension, with a full feature set:

- **Habit tracking** — one-click daily check-in, visual streak counters, automatic midnight reset with streak calculation, and search/filter in the popup.
- **Focus mode** — block distracting websites during focus sessions, scheduled focus mode for work hours, soft and hard blocking strengths, a whitelist for sites that should never be blocked, and block notifications. Hostname matching was tuned to avoid false positives.
- **Reminders** — a configurable daily reminder time, frequency options (daily, weekdays, weekends, custom), an optional second evening reminder, completion and streak-milestone notifications, and notification sounds.
- **Display settings** — theme selection (system/light/dark), a habit display limit, sorting by name, streak, or custom order, badge display options, and a compact mode.
- **Privacy & sync** — Google Account sync across devices, sync-frequency options (real-time, hourly, daily, manual), and opt-outs for both analytics and error reporting.
- **Data management** — export settings as JSON, import from a backup, and reset to defaults.
- **User experience** — a first-run welcome modal, a help modal with FAQ and keyboard shortcuts, loading skeletons, helpful empty states, and full keyboard accessibility.

**Under the hood:** built with the WXT framework, React 19, and Radix UI Themes; authentication uses the Chrome Identity API (Web Store compliant) rather than a remote auth SDK; analytics are bundled with **no remote scripts**; strict Content-Security-Policy compliance; written in TypeScript.

## Notes on versioning

- The **app** and the **extension** ship independently, so their version numbers do not need to match.
- App release notes are maintained as the project's single source of truth and copied into the Play Console "What's New" field on each upload; this page mirrors them.
- Because some app builds are prepared before they are uploaded, the live store version can briefly trail the latest prepared version listed here.

## Where to next

- [Roadmap](./roadmap) — what is shipped versus planned.
- [FAQ](./faq) — common questions answered.
- [Browser extension](../extension/install) — install and sync the extension.
- [What is HabitForge](../getting-started/what-is-habitforge) — the product overview.
