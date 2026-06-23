---
id: offline
title: Offline-first habit tracking in HabitForge
description: HabitForge works offline — cached data stays readable, completions and edits queue locally, and everything syncs automatically the moment your connection returns.
sidebar_label: Offline
sidebar_position: 6
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
keywords:
  - habitforge offline
  - offline habit tracker
  - works without internet
  - sync on reconnect
  - offline first
  - local cache
  - capacitor preferences
---

# Offline-first habit tracking

**HabitForge is offline-first: data you have already loaded stays readable without a connection, and any changes you make while offline — marking a habit complete, editing an entry, logging a tracker — are queued locally and synced automatically the moment you reconnect, so you never lose a check-in to a dead zone.** It does this with an on-device IndexedDB cache for your account data plus device storage for your settings and theme, and it watches the network so it knows when to drain the queue. There is nothing to enable; offline support is built into the free app and works on web, iOS, and Android.

## Use cases

### Logging a completion on the subway

You open HabitForge underground with no signal, tap a habit complete, and close the app. The write is held safely on the device. When the train surfaces and your phone reconnects, the completion uploads on its own — no re-tap, no reminder needed.

### Travel and flights

On a long flight you can keep logging trackers and marking habits. Each entry is stored locally and reconciled when you land and get back online. The day's records stay honest even with hours offline.

### Flaky cafe Wi-Fi

When the connection drops in and out, HabitForge keeps working rather than throwing errors at you. It records your actions and quietly catches up whenever the link comes back.

## How it works

### A local cache for your data

HabitForge stores your account data (habits, completions, tracker logs, settings) in a persistent on-device cache backed by IndexedDB. Anything you have already fetched is readable offline, and new writes are appended to a local queue. When connectivity returns, the queued writes sync up automatically — habit data is never lost while offline. If IndexedDB is unavailable (for example in some private-browsing modes), the app transparently falls back to an in-memory cache so startup never blocks.

### Device storage for settings and theme

Your preferences — including the [theme customizer](./customizer) choices — are saved through [`@capacitor/preferences`](https://capacitorjs.com/docs/apis/preferences) rather than raw `localStorage`. That means your appearance, colors, and sizing are restored instantly on the next launch, online or off.

### Network awareness

HabitForge uses [`@capacitor/network`](https://capacitorjs.com/docs/apis/network) (with a browser fallback) to detect online and offline transitions. When the connection drops it can show an offline indicator, and when it returns it knows to let the queued writes flow. This is what makes the sync feel automatic rather than manual.

### Multi-tab safety on the web

On the web, the local cache uses a multi-tab manager so several open HabitForge tabs stay consistent and do not fight over the cache — your edits in one tab show up correctly in another.

## What you can and cannot do offline

| Action | Offline behavior |
|---|---|
| View already-loaded habits and logs | Works — served from the local cache |
| Mark a habit complete / undo | Works — queued, syncs on reconnect |
| Edit or add tracker entries | Works — queued, syncs on reconnect |
| Change theme, font size, scaling | Works — stored on the device |
| First-ever load of brand-new data | Needs a connection to fetch it once |
| Signing in or creating an account | Needs a connection |

## Tips

- **Open the app while online first.** That primes the cache with your habits and recent logs so there is plenty to work with offline.
- **Don't worry about a "sync now" button.** Reconnecting is the trigger — the queue drains by itself.
- **Mobile reminders survive offline.** The mobile apps schedule real OS-level local notifications that fire even with no connection (see [Schedule and reminders](../habits/schedule-reminders)).
- **Trust the queue.** If you logged it offline, it is stored; you do not need to re-enter it after reconnecting.

## FAQ

### Do I need to do anything to use HabitForge offline?

No. Offline support is automatic. Use the app normally and it handles caching and syncing for you.

### Will I lose data if my app or phone closes while offline?

No. Offline writes are persisted to the device's local cache, not just held in memory, so they survive an app restart and sync when you reconnect.

### How do I know when my offline changes have synced?

When you come back online, HabitForge drains the queued writes automatically. The app surfaces connection state so you can tell when you are offline versus reconnected.

### Can I see data I have never loaded before while offline?

No. Only data already fetched into the cache is available offline. The first load of something brand new needs a connection.

### Is offline tracking a paid feature?

No. It is built into the free app on web, iOS, and Android.

### How does offline relate to cross-device sync?

Offline keeps you working locally; [cross-device sync](./sync) is what carries your data to your other devices through your account once you are back online and signed in.

## Where to next

- [Cross-device sync](./sync) — how your account moves data between devices.
- [Google Drive backup](./google-drive) — an optional extra backup in your own Drive.
- [Account basics](../getting-started/account-basics) — sign-in and the basics of your account.
- Try it offline at [habitforge.aoneahsan.com](https://habitforge.aoneahsan.com).
