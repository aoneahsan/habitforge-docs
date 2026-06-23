---
id: features
title: HabitForge mobile app features and native extras
description: What the HabitForge mobile app adds over the web app — native reminders, haptics, an app-icon badge, share sheet, app shortcuts, and a privacy screen.
sidebar_label: Features
sidebar_position: 2
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
keywords:
  - habitforge mobile features
  - native habit tracker
  - app icon badge
  - haptic feedback
  - native share sheet
  - app shortcuts
  - in-app update
  - privacy screen
---

# HabitForge mobile app features and native extras

**The HabitForge mobile app runs the same habit workspace as the web app — habits, streaks, trackers, timers, journals — and layers native device capabilities on top: on-device reminder notifications, haptic feedback, an app-icon badge, the system share sheet, home-screen app shortcuts, in-app review and update prompts, and a privacy screen.** Everything you can do on the [web app](https://habitforge.aoneahsan.com) you can do on mobile, synced to the same account. The difference is the native integrations a browser tab cannot offer. This page focuses on those mobile-specific extras; for installing the app see [Install](./install), and for the full feature catalogue, browse the Habits, Trackers, Timers, Journals, and Productivity sections of these docs.

## Use cases

### A phone that nudges you at the right time

Native reminders fire as real OS notifications at scheduled times, even with the app closed — see [Notifications](./notifications).

### Quick logging that feels physical

Haptic feedback gives a small confirming buzz when you complete a habit, so the action registers without you staring at the screen.

### Sharing your progress

The native share sheet lets you share HabitForge (or a public link) to any app on your phone in one tap.

## Native capabilities

### On-device reminder notifications

The app schedules local notifications for habits with a reminder time, repeating on the weekdays you choose. Reminders carry **Complete** and **Skip** actions you can tap from the notification itself. Full detail is in [Notifications](./notifications).

### Haptic feedback

Using the device's haptics, the app provides subtle tactile confirmation for key actions like completing a habit. It is a small touch that makes logging feel responsive.

### App-icon badge

The app can display a badge on its home-screen icon to reflect outstanding habits, so you get an at-a-glance prompt without opening the app. Badge behavior follows your settings.

### System share sheet

HabitForge uses the native share sheet for any "share" action. Tapping share opens your phone's standard sharing UI so you can send a link to any installed app. On the web the same action opens an in-app share modal instead — the app picks the right path automatically. HabitForge shares the app or public URLs only, never your private habit data.

### Home-screen app shortcuts

Long-pressing the app icon can expose quick actions (app shortcuts) to jump straight into common tasks, shortening the path from your home screen to logging a habit.

### In-app review prompt

At appropriate moments the app can surface the platform's native in-app review prompt, so you can rate HabitForge without leaving the app. It is occasional and never blocks your workflow.

### In-app update prompt (Android)

On Android, the app integrates Google Play's in-app update flow, so when a new version is available you can update in place rather than hunting for it in the store.

### Privacy screen

A privacy screen helps keep your content from showing in the app switcher or in screenshots on supported platforms, useful if you track personal habits, moods, or journals.

### Edge-to-edge native UI

On modern Android, the app draws edge-to-edge with the status and navigation bars colored to match the current light or dark theme, so content sits correctly within the safe areas rather than behind the system bars.

## Shared with the web app

Because mobile and web run the same codebase, the full HabitForge feature set is available on your phone: the [streak engine](../habits/streak-engine), the visual habit-strength meter, wellness [trackers](../trackers/water), focus [timers](../timers/focus), journals, and the wellness dashboard. Sign in with the same Google account and it is all there.

## Step-by-step: enable the native extras

1. Install the app from your store and open it — see [Install](./install).
2. Sign in with your Google account so your habits load.
3. Grant notification permission when prompted to enable reminders.
4. Set a reminder time on a habit (see [Schedule and reminders](../habits/schedule-reminders)) to start receiving native notifications.
5. Use the share control anywhere you see it to open the native share sheet.

## FAQ

### Are the mobile-only features extra-cost?

No. They are part of the free app. HabitForge has no paid tier required for any of these capabilities.

### Do haptics drain my battery?

Haptic pulses are brief, tied to discrete actions like completing a habit, and have negligible battery impact. They follow your device's system haptic settings.

### Why does HabitForge use the system share sheet instead of its own?

So you can share to whatever apps you actually have installed, using your phone's familiar sharing UI. On the web, where a native sheet is not guaranteed, the app falls back to an in-app share modal automatically.

### Is the in-app update prompt available on iOS too?

The in-app update flow described here is the Android Google Play flow. iOS app updates follow the standard App Store update mechanism.

### Does the privacy screen guarantee no screenshots?

It helps obscure content in the app switcher and limits screenshots on supported platforms, but platform behavior varies. Treat it as a privacy aid, not an absolute guarantee.

## Where to next

- [Mobile notifications](./notifications) — scheduling and managing reminders.
- [Using HabitForge offline](./offline) — offline-first storage and sync.
- [Mobile install](./install) — getting the app on your device.
