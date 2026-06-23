---
id: sync
title: Sync extension habits across your devices
description: How the HabitForge extension signs in with Google, syncs habits with the web and mobile app, queues offline completions, and resolves the pending-sync count.
sidebar_label: Sync
sidebar_position: 4
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
keywords:
  - habitforge sync
  - extension google sign-in
  - cross-device habit sync
  - chrome identity api
  - offline completion queue
  - manual sync
  - sync across devices
---

# Sync extension habits across your devices

**Sync is how the HabitForge extension shares one set of habits with the web and mobile app: you sign in with your Google account, the extension reads and writes the same cloud data, and completions you make in the browser appear on every signed-in device.** Sign-in uses your browser's built-in identity flow (the Chrome Identity API) rather than a password form, so there is no separate extension account to manage. Until you sign in, the extension stores settings locally but shows no habits. This page explains sign-in, how completions travel, the offline queue, and the pending-sync count you see in the popup.

For the popup controls referenced here, see [the popup guide](./popup). For account and data questions, see [Account basics](../getting-started/account-basics).

## Use cases

### Start in the browser, finish on your phone

Check off a habit from the extension at your desk; open the [mobile app](../mobile/install) later and the completion is already there. One account, one source of truth.

### Working through a spotty connection

On a train or a flaky café network, completions queue locally and sync the moment you reconnect — you never lose a check-in to a dropped request.

### Confirming everything is saved

Before closing the laptop, glance at the popup's pending-sync count. Zero means everything reached your account.

## How sign-in works

The extension authenticates with **Google via the Chrome Identity API**. This is a deliberate, store-compliant choice: it avoids loading any remote sign-in scripts and never embeds a third-party auth SDK in the extension. The flow:

1. Click **Sign in with Google** in the popup.
2. Your browser handles the Google account chooser and consent.
3. The extension receives an identity token, identifies you, and loads your habits.

Sign-in needs the build to be configured with a valid OAuth client ID. Official store builds include it; an unpacked build compiled without it reports a clear "not configured" error instead of failing silently. See [Install](./install).

## How completions travel

Once signed in, the extension reads today's habits from your cloud data and writes completions back to the same place. A completion made in the popup is the identical record the app would write, so streaks, progress, and history stay consistent across surfaces. The toolbar badge and progress summary update locally the instant you act, then the write propagates.

## The offline queue

If you complete a habit while offline, the extension does not drop it:

- The completion is held in a local queue.
- The popup shows a **pending-sync count** (the number of completions waiting).
- When the browser reports it is back online, the background worker processes the queue automatically — and you can also trigger it manually.

The extension uses the browser's online/offline signal to decide when to drain the queue, so syncing resumes without you having to remember.

## Sync frequency

Sync behavior is configurable in settings (sync frequency options include real-time, hourly, daily, and manual). Real-time keeps the extension closest to your other devices; manual gives you full control over when network calls happen. Pick what fits your workflow in the settings page.

## Step-by-step: sign in and sync

1. Open the popup from the toolbar.
2. Click **Sign in with Google** and choose your account.
3. Your habits load; the progress summary and badge populate.
4. Complete habits as normal — changes sync to your account.

## Step-by-step: manually sync queued completions

1. Open the popup.
2. Look at the sync button in the header — it shows how many completions are pending.
3. Click it to drain the queue now.
4. When the count reaches zero, everything is saved to your account.

## Step-by-step: sign out

1. Open the popup (signed in).
2. Click **Sign out** in the "Today's Habits" header.
3. The extension clears your session locally. Your cloud data is untouched and returns when you sign back in.

## FAQ

### Do I need to sign in to use the extension?

To track habits, yes — habits live in your account and load only after sign-in. Settings (theme, Focus Mode blocklist) are stored locally and work without an account, but the habit list will be empty until you sign in.

### Is this the same account as the web and mobile app?

Yes. Signing in with the same Google account gives the extension the same habits, completions, and streaks as the [web app](https://habitforge.aoneahsan.com) and the [mobile app](../mobile/install).

### What happens to offline completions if I close the browser?

They remain queued in local extension storage and sync the next time the browser is open and online. Closing the browser does not discard them.

### Why does the extension use Chrome Identity instead of a login form?

For Chrome Web Store compliance and security. The extension bundles all its code and loads nothing remote; Chrome Identity handles Google sign-in natively without an embedded auth SDK or CDN script.

### Can two people share one extension install?

Each Google account is separate. Sign out and sign in as the other account to switch; there is no shared multi-user view. For data ownership and deletion, see [Account basics](../getting-started/account-basics).

### Does signing out delete my data?

No. Sign-out only clears the local session. To remove your data, use the app's [account deletion](../account/deletion) flow.

## Where to next

- [Using the popup](./popup) — where the sync button and counts live.
- [Account basics](../getting-started/account-basics) — accounts, data ownership, and export.
- [Mobile install](../mobile/install) — the other half of cross-device sync.
