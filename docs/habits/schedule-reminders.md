---
id: schedule-reminders
title: Schedule and reminders
description: Frequency options (daily, weekly, custom days), reminder time configuration, and the platform-specific notification permission flow on web, iOS, and Android.
sidebar_label: Schedule & reminders
sidebar_position: 3
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
keywords:
  - habit schedule
  - habit reminder
  - habit frequency
  - daily weekly custom
  - notifications
---

# Schedule and reminders

**Every HabitForge habit has a schedule (when it's due) and an optional reminder (a notification at a specific time).** This page covers the three frequency modes, what counts as a "scheduled day" for each, and how to set up local notifications on web, iOS, and Android. Reminders use the platform's native notification system — they fire even when HabitForge is closed, but they require a one-time permission grant per platform.

## Frequency modes

### Daily

Every calendar day in your device's timezone counts as a scheduled day. Missing any day costs threads at the difficulty's loss rate.

Use Daily for habits that genuinely belong to every day:

- Drinking water
- Brushing teeth
- Taking medication
- Daily journal entries
- 10-minute walk

### Weekly

The unit is the week (Sunday–Saturday by default; the week boundary follows the [ISO week](https://en.wikipedia.org/wiki/ISO_week_date) convention in your locale where applicable). The habit is "complete" if you logged a completion at least once during that week. Misses are evaluated weekly.

Use Weekly for habits that don't need daily repetition:

- Deep house clean
- Long-form planning session
- Weekly call with a friend
- Strength training (for habits that benefit from rest days)

### Custom days

You pick the days of the week the habit applies to. Days you didn't pick don't count as missed if you don't complete on them.

The form shows seven Sun–Sat checkboxes. At least one must be checked.

Use Custom for habits with a specific weekly pattern:

- Weekday-only habits (Mon–Fri): work-related routines, commute habits.
- Mon/Wed/Fri or Tue/Thu schedule: gym days, language lessons.
- Weekend-only habits: long meal prep, recreational reading.

### What "due today" means in each mode

| Mode | Due today if… |
|---|---|
| Daily | always |
| Weekly | not yet completed in the current week |
| Custom | today is one of the selected days *and* not yet completed today |

The dashboard shows you the "due today" subset by default. Habits not due today still appear in the All habits view but don't clutter the daily checklist.

### Switching modes mid-stream

You can change frequency at any time via [Edit](./edit-archive). The change takes effect immediately. Past completions are unchanged. Today's "due" status recomputes — the habit may disappear from today's checklist if today is no longer scheduled.

## Reminders

A reminder is a one-shot local notification at a specified time. It is optional, easy to enable, and easy to forget after enabling — so the page covers both directions.

### Setting a reminder

1. From [Create habit](./create) or Edit habit, set the **Reminder time** field to `HH:mm` (24-hour clock).
2. Save.
3. Grant the platform's notification permission when prompted (see below).

Examples: `07:00` for a morning habit, `22:30` for an evening habit.

### Reminders are local, not push

HabitForge uses **local notifications**, not push notifications. The difference:

- Local notifications are scheduled by your device and fired by your device's OS. HabitForge tells your phone "fire a notification at 07:00 daily" once, and the phone takes care of it from there.
- Push notifications would require a server, would land in your notification tray after a network round-trip, and would let HabitForge target you arbitrarily. HabitForge has no server-side push pipeline by design.

Practical effects:

- Reminders work offline.
- Reminders work even if HabitForge is force-closed.
- HabitForge cannot send a "we missed you" reminder out of the blue. Only reminders you set up.

### Web notifications

The web app uses the [Web Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API). On the first reminder set, the browser asks for permission via the standard prompt.

| Browser | Behaviour |
|---|---|
| Chrome / Edge | Native prompt at the first reminder. Grant → notifications fire. Deny → reminders silently disabled until you grant in Settings. |
| Firefox | Native prompt. Same behaviour. |
| Safari (macOS 13+) | Native prompt. Requires the page to be open in a tab or installed as a PWA for delivery. |
| Safari (iOS / iPadOS 16.4+) | Requires PWA installation (Share → Add to Home Screen) for notification permission to be available. |

Web notifications fire only when the browser is running. If you closed the browser before the reminder time, the reminder is missed. The mobile apps don't have this limitation — see iOS / Android below.

### iOS

The iOS app uses Apple's local-notification scheduler via [`@capacitor/local-notifications`](https://capacitorjs.com/docs/apis/local-notifications). On the first reminder, iOS prompts for notification permission. Tap **Allow**.

Once granted:

- Reminders fire at the scheduled time even if the app is closed or the phone is locked.
- The notification shows the habit name. Tapping it deep-links to the habit's detail page.
- Focus / Do Not Disturb modes suppress notifications per Apple's rules. HabitForge's reminders are not classified as "Time Sensitive" and so are filtered by Focus mode unless you allow them in Settings → Focus → HabitForge.

If you previously denied the permission: Settings → Notifications → HabitForge → Allow Notifications.

### Android

The Android app uses the same Capacitor plugin. On Android 13+, the OS prompts for the [`POST_NOTIFICATIONS`](https://developer.android.com/develop/ui/views/notifications/notification-permission) permission on first reminder.

Once granted:

- Reminders fire at the scheduled time even with the app closed.
- Battery-optimisation can suppress reminders for apps you haven't opened recently, especially on Samsung, Xiaomi, OnePlus, and Huawei devices. The fix: Settings → Apps → HabitForge → Battery → Unrestricted.
- Notification channels are created automatically. You can mute channels individually via Android's notification settings.

### Browser extension

The browser extension does **not** send reminders. Reminders fire on whichever surface (web / mobile) is signed in. The extension's role is quick-add and a popup view of today; it intentionally avoids the notification permission ask to stay slim.

### Removing a reminder

Edit the habit and clear the **Reminder time** field. Save. The local notification is cancelled.

## Multiple reminders for one habit

Not currently supported. Each habit has at most one reminder time. The product opinion: multiple reminders for one habit means the underlying habit is too hard, and the right fix is to lower difficulty, not add notifications.

If you really want two reminders for a habit, the workaround is to create two habits with different names and reminder times.

## Reminders across timezones

Reminders fire based on the device's current local time. If you set `07:00` in EST and travel to GMT, the reminder fires at 07:00 GMT after your device's timezone updates.

Travel implications:

- A habit you set for `07:00` becomes a meaningfully different cue if you're in a different timezone for a few weeks.
- The streak engine uses the device's current timezone for day boundaries — see [Streak engine](./streak-engine#timezones).

## Common issues

### Reminder didn't fire (web)

Most likely cause: the browser was closed at the reminder time. Web notifications require the browser process to be running.

Less common causes:

- Notifications permission revoked. Check `chrome://settings/content/notifications` (Chrome) or equivalent.
- Tab discarded by the browser to save memory. Pin the tab or install as a PWA.

### Reminder didn't fire (Android)

Top cause: battery optimisation. Allow HabitForge in Settings → Apps → HabitForge → Battery → Unrestricted.

Other causes:

- POST_NOTIFICATIONS permission denied. Re-grant in Settings → Apps → HabitForge → Notifications.
- Do Not Disturb / Focus mode active.
- Phone in airplane mode at the time (local notifications do still fire, but if your phone was off, it won't).

### Reminder didn't fire (iOS)

- Notification permission off. Settings → Notifications → HabitForge.
- Focus mode active. Allow HabitForge in Settings → Focus → [active focus] → Apps.
- Phone off / out of battery at the scheduled time.

### Reminders fire at the wrong time

The reminder fires at the device's local time. If your device's clock or timezone is wrong, the reminder is wrong. Check Settings → General → Date & Time → Set Automatically (iOS) or equivalent.

### "Why isn't there a reminder for unlogged habits at end of day?"

Because that would be a server-side push, and HabitForge doesn't run a server-side push pipeline. The reminder is a notification you scheduled, not a behavioural prompt.

## Frequently asked questions

### Can I have a reminder for the whole habit list, not per-habit?

Not currently. Reminders are per-habit. The implicit list-level reminder is "open the app at a habitual time" — many users settle into a morning or evening dashboard check that handles all their habits in one go.

### Can I snooze a reminder?

The native notification's snooze behaviour is whatever your OS provides. HabitForge does not implement an in-app snooze.

### Will I get a reminder on every device I'm signed in on?

Yes. Each device schedules its own local notification. If you're signed in on a phone and a tablet, both fire at the reminder time. If you don't want that, sign out on the device you don't want pinging you.

### Can I set a reminder for a specific date (one-off)?

Not for a habit. For one-off reminders, use your phone's clock app or a calendar.

### How does Weekly + reminder time interact?

The reminder fires every day at the time you set, regardless of whether the habit is "due" that day. The product opinion is that weekly habits often benefit from a daily nudge until the user has a fixed day for them. If you want the reminder only on a specific day, switch to **Custom** with that one day checked.

### What's the longest reminder schedule I can set?

The local notification scheduler accepts any future time. There is no upper bound. The plugin schedules the notification with a daily repeat trigger.

## Where to next

- [Streak engine](./streak-engine) — how streaks count.
- [Complete and undo](./complete-undo) — marking habits done.
- [Strength visual](./strength-visual) — what the meter shows.
- [Mobile notifications](/docs/mobile) — platform-specific deep dive (Batch 10).
