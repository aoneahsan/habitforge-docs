---
id: notifications
title: Local habit reminder notifications on mobile
description: How HabitForge schedules native local reminder notifications on iOS and Android — permissions, weekly repeats, Complete and Skip actions, quiet timing, and limits.
sidebar_label: Notifications
sidebar_position: 4
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
keywords:
  - habit reminder notifications
  - local notifications mobile
  - ios android reminders
  - notification permission
  - complete skip actions
  - weekly repeating reminder
  - capacitor local notifications
---

# Local habit reminder notifications on mobile

**On mobile, HabitForge sends reminders as native local notifications scheduled directly on your device, so a habit reminder fires at its set time on the chosen weekdays even when the app is closed — and the notification carries Complete and Skip actions you can tap without opening the app.** These are on-device local notifications, not push messages from a server: nothing has to reach your phone over the network for a reminder to appear. This page explains how to grant permission, how reminders are scheduled and repeated, what the notification looks like, and the honest timing limits under battery optimization.

For setting reminder times on a habit, see [Schedule and reminders](../habits/schedule-reminders). For offline behavior, see [Offline](./offline).

## Use cases

### A fixed morning cue

Set a habit's reminder to 07:00 on weekdays. Each weekday morning the notification fires; tapping **Complete** logs the habit straight from the lock screen.

### Evening catch-up

Schedule a reminder for habits you tend to forget after work, so the day does not end with an unintended broken streak.

### Skipping a planned rest day

When a reminder fires on a day you are deliberately resting, tap **Skip** to dismiss it honestly rather than ignoring it.

## Granting permission

Reminders need notification permission. On first launch (or the first time you set a reminder) the app requests it. If you decline, the rest of the app works, but no reminders fire until you grant permission in your device settings. The app checks the current permission state before scheduling, so it never assumes access it does not have.

On the web, HabitForge falls back to the browser's Notification API where available; native mobile notifications are more reliable because they are scheduled with the operating system.

## How reminders are scheduled

When a habit has a reminder time and selected weekdays, the app schedules a repeating local notification for each chosen weekday at that time:

- **Time** is `HH:mm` in your device's local time.
- **Days** are the weekdays you pick (any subset of the week).
- **Repeat** is weekly — the same weekday and time each week — until you change or remove it.
- **Content** reads "Time for *(habit name)*!" with the habit's cue as the body, or a default "Remember to complete your habit today." if no cue is set.

Each habit-and-day combination is scheduled as its own notification, so changing one habit's reminder does not disturb the others.

## Notification actions

Reminder notifications register a **habit-reminder** action type with two buttons:

- **Complete** — logs the habit as done for today.
- **Skip** — dismisses the reminder (marked as a destructive/secondary action).

Tapping the notification body opens the app to the relevant habit. The app listens for these actions and applies them even if it was not in the foreground.

## Step-by-step: turn on reminders for a habit

1. Open HabitForge on your phone and sign in.
2. Open the habit and set a **reminder time** and the **weekdays** it should repeat — see [Schedule and reminders](../habits/schedule-reminders).
3. Grant notification permission when prompted.
4. Save. The app schedules the repeating local notifications.

## Step-by-step: stop reminders for a habit

1. Open the habit's reminder settings.
2. Clear the reminder time (or turn reminders off for that habit).
3. Save. The app cancels that habit's scheduled notifications.

To stop everything, archive or remove the habit, or revoke notification permission in your device settings.

## Honest limits

- **Timing is reliable but not to the exact second.** To avoid requiring an exact-alarm permission and to stay friendly with Android's battery-saving Doze mode, reminders use the platform's allow-while-idle scheduling. They fire reliably around the scheduled minute, but under aggressive battery optimization the OS may deliver them slightly late.
- **Permission is required.** No permission, no reminders. The app cannot override your device's notification settings.
- **These are reminders, not nags.** HabitForge schedules what you set; it does not escalate or repeatedly re-fire a missed reminder beyond its weekly repeat.
- **Web reminders are weaker.** In a browser, a reminder fires only while the browser is running. Native mobile notifications fire regardless — which is the main reason to install the app.

## FAQ

### Are these push notifications?

No. They are local notifications scheduled on your device. No server sends them and they fire without a network connection, which is why they work offline.

### Will a reminder fire if the app is closed?

Yes, on mobile. The notification is scheduled with the operating system, so it fires at its time whether or not HabitForge is open or running in the background.

### Can I get a reminder at the exact second?

It will fire around the set minute. To respect battery optimization, the app does not request exact-alarm scheduling, so the OS may deliver it slightly late under Doze. For habit reminders, near-the-minute is the intended behavior.

### Why did I stop getting reminders?

Common causes: notification permission was revoked, the habit's reminder was cleared, the habit was archived, or the system's battery optimization is suppressing background activity for the app. Re-grant permission and re-check the habit's reminder settings.

### Do reminders sync across devices?

The reminder schedule is applied per device from your habit's settings. The habits and their reminder times sync to your account; each device schedules its own local notifications from that data.

## Where to next

- [Schedule and reminders](../habits/schedule-reminders) — set reminder times and weekdays on a habit.
- [Using HabitForge offline](./offline) — why local notifications work without a connection.
- [Mobile features](./features) — the rest of the native capabilities.
