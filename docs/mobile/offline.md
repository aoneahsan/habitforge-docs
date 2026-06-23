---
id: offline
title: Using HabitForge offline and syncing on mobile
description: How HabitForge works without a connection — offline-first cached reads, queued completions, network detection, local storage, and automatic sync on reconnect.
sidebar_label: Offline
sidebar_position: 3
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
keywords:
  - habitforge offline
  - offline habit tracking
  - sync on reconnect
  - offline first app
  - queued completions
  - network detection
  - capacitor preferences
---

# Using HabitForge offline and syncing on mobile

**HabitForge is offline-first: on mobile you can open the app without a connection, read your cached habits, and log completions, and those changes are queued locally and synced to your account automatically the moment you are back online.** It does this with a persistent local cache for your habit data, on-device storage for settings, and live network detection that triggers sync when connectivity returns. You do not have to remember to "save" or manually re-enter anything — the app holds the work and reconciles it for you. This page explains what works offline, what does not, and how to confirm a sync completed.

For how the extension handles the same idea, see [Sync](../extension/sync). For accounts and data, see [Account basics](../getting-started/account-basics).

## Use cases

### The subway commute

You open HabitForge underground with no signal, tick off your morning habits, and pocket the phone. When you surface and regain signal, the completions sync without any prompt.

### Flights and dead zones

On a flight or in a rural dead zone, you keep logging. Each write is held locally and drains to the cloud when you reconnect — see the [water tracker FAQ on offline](../trackers/water) for the same behavior in a tracker.

### Flaky café Wi-Fi

On an unreliable connection, the app does not block on every request. It reads from cache and queues writes, so a dropped packet never costs you a check-in.

## What works offline

- **Reading habits and recent history.** Your habit list and recent data are served from the local cache, so the app opens and is usable without a connection.
- **Logging completions.** Marking a habit done works offline; the write is queued.
- **Reading and changing settings.** Settings are stored on-device, so preferences load and change offline.
- **Scheduled reminders.** Reminders are scheduled as native OS notifications when you set them, so they fire at their times regardless of connectivity — see [Notifications](./notifications).

## What needs a connection

- **Signing in for the first time on a device.** Initial sign-in and the first data load need a connection. Once your data is cached, later offline opens work.
- **Pulling changes made on another device.** A completion you made on your laptop reaches the phone only after the phone syncs, which needs connectivity.
- **Real-time freshness.** Offline, you see the last cached state, not other devices' latest changes until you reconnect.

## How sync works

Under the hood, HabitForge keeps a persistent local cache of your habit data. Reads come from that cache first, so the UI is fast and works offline. Writes you make offline are recorded locally and queued. The app watches the device's network status; when it reports you are back online, the queued writes are sent and any remote changes are pulled down. A small syncing indicator appears while the queue drains, then clears when everything is reconciled.

Settings and other local preferences are persisted with the device's native storage rather than the browser's transient storage, so they survive app restarts.

## Step-by-step: confirm a sync completed

1. Reconnect to Wi-Fi or mobile data.
2. Open HabitForge.
3. Watch for the syncing indicator — it shows while queued changes upload and remote changes download.
4. When it clears, your local and cloud data match. Cross-check on the [web app](https://habitforge.aoneahsan.com) if you want visual confirmation.

## Honest limits

- **Conflict edges are rare but possible.** If you complete the *same* habit on two devices while both are offline, the records reconcile when each syncs; the result reflects that the habit is complete for the day rather than double-counting. HabitForge does not run manual conflict resolution screens — it favors keeping your data and not losing completions.
- **First load needs the network.** Offline mode relies on a cache that must be populated at least once online.
- **Web reminders are weaker offline.** In a browser, reminders fire only while the browser runs; native mobile reminders are real OS notifications. See [Notifications](./notifications).

## FAQ

### Will I lose a completion if I close the app while offline?

No. Offline writes are persisted locally, not held only in memory, so they survive closing the app and sync on the next online launch.

### Does offline mode cost anything or use a different account?

No. It is the same free app and the same Google account. Offline-first is built in; there is nothing to enable.

### How do I know something is still waiting to sync?

The syncing indicator is shown while the queue drains. If you are unsure, reconnect and reopen the app — it reconciles automatically.

### Can I use HabitForge entirely offline forever?

You can use it offline for long stretches after the first online load, but syncing across devices and pulling others' changes needs occasional connectivity. A fully air-gapped, never-syncing mode is not the design.

### Where is offline data stored?

Habit data lives in a persistent local cache; settings live in the device's native key-value storage. HabitForge does not use the browser's plain `localStorage` for this.

## Where to next

- [Mobile notifications](./notifications) — reminders that fire offline.
- [Extension sync](../extension/sync) — the same offline-queue idea in the browser.
- [Account basics](../getting-started/account-basics) — data ownership and export.
