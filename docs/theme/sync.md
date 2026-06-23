---
id: sync
title: Cross-device sync with your HabitForge account
description: Sign in to sync HabitForge across devices — habits, completions, tracker logs, settings, and your theme follow your account so your data is the same everywhere.
sidebar_label: Cross-device sync
sidebar_position: 7
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
keywords:
  - habitforge sync
  - cross device sync
  - cloud sync habit tracker
  - account sync
  - firestore sync
  - sync settings across devices
  - sign in to sync
---

# Cross-device sync

**When you are signed in to HabitForge, your data syncs across every device through your account — habits, completions, tracker logs, your settings, and even your theme are stored against your account so that signing in on a phone, tablet, or laptop shows the same up-to-date picture everywhere.** Sync is account-based: it requires sign-in, and it runs automatically in the background whenever you are online. Signed out, HabitForge still works fully, but your data and preferences stay on that one device. Sync is part of the free app — there is no paid "cloud" tier.

## Use cases

### Phone in the morning, laptop at night

Mark your morning habits on your phone, then open HabitForge on your laptop in the evening and see those completions already there. Because your data lives with your account, the two devices show the same state without any manual export or import.

### Replacing or adding a device

Get a new phone, install HabitForge, sign in, and your full history is there. Nothing to transfer by hand — your habits and logs download from your account.

### Carrying your look between devices

Set your [theme](./customizer) — appearance, accent, sizing — on one device, and signing in elsewhere brings the same look with you, so the app feels consistent across your screens.

## What syncs

| Data | Syncs with your account |
|---|---|
| Habits and their settings | Yes |
| Completions / streak history | Yes |
| Tracker logs (water, sleep, mood, expenses, and the rest) | Yes |
| App settings and notification preferences | Yes |
| Theme settings (appearance, colors, sizing) | Yes |

Your account profile holds these under your user record (`users/{uid}`), and theme preferences specifically live at `users/{uid}.settings.themeSettings`. The app reads from there when you sign in and writes back when you make changes.

## How it works

### Sign-in is the switch

Sync only happens when you are signed in. Signing in connects the app to your account record; from then on, changes flow to and from your account automatically while you are online.

### Background, automatic, and offline-aware

You never trigger a sync by hand. New writes go up as you make them, and they reconcile through the same offline queue described in [Offline-first tracking](./offline) — if you are offline when you change something, it syncs the moment you reconnect. There is no "sync now" button because there does not need to be one.

### Theme sync, specifically

Your theme is a good illustration of the model. Change your accent or appearance and the new value is written locally immediately and pushed to your account. Sign in on another device and HabitForge pulls your saved theme and applies it — merged with sensible defaults so any newer option still gets a good value. On sign-out, the app keeps your last theme on the device for continuity rather than wiping it.

## How to turn on sync

1. Open HabitForge and choose **Sign in** (or create an account) — see [Sign up](../getting-started/sign-up).
2. Complete sign-in. The app connects to your account.
3. Use the app normally — your habits, logs, settings, and theme now sync in the background.
4. On any other device, install HabitForge and sign in with the same account to see the same data.

## Tips

- **Sign in on every device you use.** Sync is account-based, so each device needs to be signed in to share your data.
- **Be online to sync.** Changes made offline sync when you reconnect; sign-in itself needs a connection.
- **Sync is not sharing.** Each account is private to you — there is no shared or family account. Everyone keeps their own.
- **Want a separate backup?** Pair sync with the optional [Google Drive backup](./google-drive) or a manual [data export](../account/export).

## FAQ

### Do I need an account to use HabitForge?

No. HabitForge works fully signed out, but your data and preferences stay on that one device. Sign in when you want them to sync across devices.

### Does sync cost anything?

No. Cross-device sync is part of the free app. There is no premium sync tier.

### What happens to my signed-out data when I sign in?

Your signed-out data lives on the device. When you sign in, the app connects you to your account; your theme, for example, is pulled from your account if you have saved settings there. Keep your important logging tied to a signed-in session if you want it to follow you.

### Can I share my data with a partner or family member?

Not directly. Each HabitForge account is private. The supported pattern is one account per person.

### How current is the synced data?

It updates in near real time while you are online, and reconciles automatically after any offline period. See [Offline-first tracking](./offline) for how the queue drains on reconnect.

### Is my synced data backed up anywhere else?

Sync keeps your data with your account. For an extra copy you control, use the optional [Google Drive backup](./google-drive) or export your data from your [account pages](../account/export).

## Where to next

- [Offline-first tracking](./offline) — how local writes reconcile on reconnect.
- [Google Drive backup](./google-drive) — an optional backup in your own Drive.
- [Export your data](../account/export) — download a copy anytime.
- [Account basics](../getting-started/account-basics) — sign-in and account essentials.
