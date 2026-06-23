---
id: install
title: Install the HabitForge mobile app (iOS & Android)
description: How to install the HabitForge habit tracker on Android and iOS, how the native apps relate to the web app, and what to expect on first launch and sign-in.
sidebar_label: Install
sidebar_position: 1
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
keywords:
  - habitforge mobile app
  - install android habit tracker
  - ios habit tracker
  - google play habitforge
  - capacitor app
  - habit tracker app install
  - cross-device habits
---

# Install the HabitForge mobile app (iOS & Android)

**The HabitForge mobile app is a native iOS and Android build of HabitForge, packaged with Capacitor, that runs the same habit-tracking workspace as the web app with added native features: on-device reminder notifications, haptic feedback, an app-icon badge, offline support, and a native share sheet.** It signs into the same account as the [web app](https://habitforge.aoneahsan.com) and the [browser extension](../extension/install), so your habits, streaks, and history are identical everywhere. The app's identifier is `com.aoneahsan.habitforge`. This page covers installing on Android and iOS, the relationship to the web app, and what happens the first time you open it.

For what the native app can do beyond the web, see [Features](./features). For working without a connection, see [Offline](./offline). For reminders, see [Notifications](./notifications).

## Use cases

### Reminders that fire even when the app is closed

The native apps schedule real operating-system local notifications, so a habit reminder fires at the scheduled time whether or not HabitForge is open — something a browser tab cannot reliably do.

### Tracking on the go

Phone-first users log completions wherever they are. Offline writes queue locally and sync when a connection returns, so a subway commute never costs you a check-in.

### One account across phone, laptop, and browser

Install on your phone, sign in with the same Google account you use on the web, and every device shows the same habits.

## Install on Android

HabitForge is distributed for Android through Google Play.

1. Open the HabitForge listing on **Google Play**: [play.google.com/store/apps/details?id=com.aoneahsan.habitforge](https://play.google.com/store/apps/details?id=com.aoneahsan.habitforge).
2. Tap **Install**.
3. Open the app and sign in with your Google account.
4. Allow notifications when prompted so reminders can fire (you can change this later — see [Notifications](./notifications)).

## Install on iOS

HabitForge has a native iOS build packaged with Capacitor. When it is published to the Apple App Store:

1. Search for **HabitForge** in the App Store.
2. Tap **Get** to install.
3. Open the app and sign in with your Google account.
4. Allow notifications when prompted.

> This page does not assert a specific App Store listing is live in your region. If you cannot find the iOS app yet, use the [web app](https://habitforge.aoneahsan.com) in your mobile browser in the meantime — it works on phones and tablets without any install.

## Prefer no install? Use the web app

HabitForge runs fully in any modern browser at [habitforge.aoneahsan.com](https://habitforge.aoneahsan.com), on desktop and mobile, with no download. The native apps add device features (OS-level notifications, haptics, app-icon badge, offline-first storage) on top of the same experience. Pick whichever fits — they share one account.

## First launch and sign-in

On first open you will see a brief splash screen, then a sign-in prompt. Sign in with Google to load your habits. If you are brand new, follow [Sign up](../getting-started/sign-up) and [Create your first habit](../getting-started/first-habit). Granting notification permission at this point lets the app schedule reminders for habits that have a reminder time set.

## FAQ

### Is the mobile app free?

Yes. HabitForge is free to install and use. There is no paid tier required to track habits.

### Do I need a HabitForge account separate from Google?

No. Sign-in is handled through your Google account, the same one you use on the web and in the extension. There is no separate password to remember.

### Will my habits from the web app appear on mobile?

Yes. Sign in with the same Google account and your habits, completions, and streaks sync down. Changes made on mobile sync back. See [Account basics](../getting-started/account-basics).

### What is the app's package name?

`com.aoneahsan.habitforge` — the identifier used on both Android and iOS builds.

### Why ask for notification permission?

So habit reminders can fire as native notifications at their scheduled times. You can decline and still use the app; you just will not get reminders until you grant it. Details in [Notifications](./notifications).

### Does the app work without internet?

Yes — it is offline-first. You can view cached habits and log completions offline; they sync when you reconnect. See [Offline](./offline).

## Where to next

- [Mobile features](./features) — native capabilities beyond the web app.
- [Using HabitForge offline](./offline) — how offline writes and sync work.
- [Mobile notifications](./notifications) — scheduling and managing reminders.
- [Create your first habit](../getting-started/first-habit) — get started once installed.
