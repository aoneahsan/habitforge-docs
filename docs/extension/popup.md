---
id: popup
title: Using the HabitForge extension toolbar popup
description: A tour of the HabitForge browser extension popup — today's habits, one-click completion, the progress summary, the Focus Mode toggle, and the badge.
sidebar_label: Popup
sidebar_position: 2
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
keywords:
  - habitforge popup
  - extension toolbar window
  - one-click habit completion
  - focus mode toggle
  - habit progress summary
  - extension badge count
  - today's habits
---

# Using the HabitForge extension toolbar popup

**The HabitForge popup is the small window that opens when you click the extension's toolbar icon — it shows today's habits, lets you check them off in one click, summarizes your progress, and carries a Focus Mode toggle.** It is the extension's main surface: a compact, themed panel (about 360 pixels wide) that loads the same habits as the [web and mobile app](../mobile/install) once you are signed in. Opening the popup also clears the toolbar badge, because you have now seen today's status. This page explains every control in the popup and what happens behind it.

For installation, see [Install](./install). For the fast keyboard path that skips opening the popup, see [Quick-add](./quick-add).

## Use cases

### A 5-second morning check-in

Open the popup, glance at the progress summary, tap the habits you have already done, and close it. The whole interaction is a few seconds and needs no tab switch.

### Toggling distraction blocking on the fly

When you sit down to focus, flip the Focus Mode switch in the popup. It blocks the sites on your blocklist immediately, without opening settings. Flip it back when you are done.

### Confirming a sync went through

If you completed habits offline (on a flaky connection), the popup shows a pending-sync count and a manual sync control so you can confirm everything reached your account.

## What the popup shows

### Header

The top of the popup shows your account state and quick actions: open the full settings page, open the [HabitForge web app](https://habitforge.aoneahsan.com), and a manual sync button that displays the number of completions still waiting to sync.

### Sign-in card (signed out)

If you are not signed in, the popup shows a single card: "Sign in to sync your habits across devices" with a **Sign in with Google** button. No habits load until you sign in. Sign-in uses your browser's identity flow, not a password form — see [Sync](./sync).

### Progress summary (signed in)

Once signed in, a progress summary sits near the top: how many of today's habits are done versus remaining. It updates the instant you complete a habit.

### Focus Mode toggle

A card with a shield icon toggles Focus Mode. When on, it reads "Blocking N sites"; when off, "Block distracting sites." Flipping it sends a message to the background worker, which applies or clears the site-blocking rules right away.

### Today's habits

Below a divider, "Today's Habits" lists each habit due today with a one-click complete control. Completing a habit marks it done, updates the streak, and refreshes the summary. A sign-out control sits in this section's header.

### Footer

The footer shows the extension version and an **Open App** link to the full web app.

## The toolbar badge

The extension can show a small badge on its toolbar icon:

- A number for habits **remaining** (orange) or **completed** (green), depending on your badge setting.
- A green check mark when every habit for the day is done.
- A "NEW" badge after the extension updates, until you open the popup.

The badge is configurable — you can choose remaining versus completed, or turn the count off entirely, in the settings page (Appearance tab). Opening the popup clears the badge.

## Step-by-step: complete today's habits

1. Click the HabitForge icon in your browser toolbar.
2. If prompted, sign in with Google (one time per browser profile).
3. Review the progress summary at the top.
4. Click the complete control next to each habit you have done.
5. Close the popup — the badge and summary reflect your progress.

## Step-by-step: open full settings

1. Open the popup.
2. Click the settings action in the header.
3. The options page opens in a **new tab** (so the popup is never lost), with tabs for General, Notifications, Appearance, Privacy, Focus, Changelog, and About.

## FAQ

### Why are no habits showing?

Either you are signed out (the popup will show the sign-in card) or you have no habits scheduled for today. Create habits in the [web or mobile app](../habits/create) — the extension does not create habits itself.

### Does completing a habit here count everywhere?

Yes. A completion in the popup writes to your account and syncs to the web and mobile app. If you are offline, it is queued and synced on reconnect — see [Sync](./sync).

### Can I edit a habit from the popup?

No. The popup is intentionally minimal — check-ins, progress, and Focus Mode only. Editing names, schedules, and reminders happens in the main app under [Edit and archive](../habits/edit-archive).

### Why did the badge change to "NEW"?

The extension just updated to a new version. The badge clears the next time you open the popup. The full list of changes lives in the settings page's Changelog tab.

### Does the popup follow my theme?

Yes. It honors your theme setting (System, Light, or Dark) from the Appearance tab, defaulting to your operating system's color scheme.

## Where to next

- [Quick-add habit completions](./quick-add) — the one-click and keyboard paths in depth.
- [Sync across devices](./sync) — sign-in and offline behavior.
- [Permissions explained](./permissions) — why the popup can show notifications and block sites.
