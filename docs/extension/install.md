---
id: install
title: Install the HabitForge browser extension
description: Install the HabitForge habit-tracking extension on Chrome, Edge, Brave, and other Chromium browsers, or load an unpacked development build for testing.
sidebar_label: Install
sidebar_position: 1
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
keywords:
  - habitforge extension
  - install chrome extension
  - chromium habit tracker
  - manifest v3 extension
  - edge extension install
  - brave extension install
  - load unpacked extension
---

# Install the HabitForge browser extension

**The HabitForge browser extension is a Manifest V3 (MV3) extension, built with the WXT framework, that brings one-click habit check-ins, streak tracking, reminders, and a site-blocking Focus Mode into your browser toolbar.** It is a free companion to the [HabitForge web and mobile app](https://habitforge.aoneahsan.com) — your habits live in one account and the extension reads and updates the same data. It runs on Chromium-based browsers (Chrome, Microsoft Edge, Brave, Opera, Vivaldi, Arc) and can also be built for Firefox. This page covers installing a published build from a web store and loading an unpacked development build for testing.

This page documents installation only. For what the toolbar window does once installed, see [the popup guide](./popup); for cross-device sync, see [Sync](./sync); for exactly what the extension is allowed to access, see [Permissions](./permissions).

## Use cases

### Tracking habits without opening the app

If you spend the day in your browser, the extension keeps your habits one click away in the toolbar. You check off a habit, see the streak update, and never lose your place — no tab switch to the web app required.

### Staying focused during work blocks

The extension's Focus Mode redirects distracting sites you have blocklisted to a calm reminder page. Installing the extension is what makes that browser-level blocking possible; the web app alone cannot redirect other sites.

### Testing a development build

Contributors and the developer load an unpacked build straight from the compiled output to verify changes before any store submission. The steps below cover that path too.

## Install from a browser web store

The extension is published as a standard store listing. When it is available on the Chrome Web Store (or the Edge / Firefox add-on stores):

1. Open the store listing for **HabitForge** in your browser.
2. Click **Add to Chrome** (or **Get** / **Add to Firefox**, depending on the browser).
3. Confirm the permission prompt. The browser lists the permissions described in [Permissions](./permissions).
4. The HabitForge icon appears in your toolbar. Pin it (puzzle-piece menu → pin) so it is always visible.
5. On first install, a welcome page opens automatically in a new tab to help you get oriented.

> Store availability varies by browser. This documentation does not assert that a specific store listing is live in your region — search your browser's extension store for "HabitForge" to confirm.

## Load an unpacked development build

For local testing from source, build the extension first, then side-load it. This requires the project repository and Node.js.

1. In the `extension/` folder, run `yarn` to install dependencies, then `yarn build` (Chrome) or `yarn build:firefox` (Firefox). The compiled output is written under `dist/`.
2. Open `chrome://extensions` (Chrome), `edge://extensions` (Edge), or `brave://extensions` (Brave).
3. Toggle **Developer mode** on (top-right).
4. Click **Load unpacked** and select the built folder that contains the generated `manifest.json` (produced by `yarn build`).
5. The extension loads and its icon appears in the toolbar, exactly as a store install would.

For Firefox, use `about:debugging` → **This Firefox** → **Load Temporary Add-on** and pick the built manifest.

## First run

On a fresh install the background service worker initializes default settings, schedules a daily reminder alarm, and opens a welcome page. Sign in with your Google account from the popup to sync habits across devices — see [Sync](./sync). Until you sign in, the popup shows a sign-in card and no habits load.

## FAQ

### Is the extension free?

Yes. HabitForge and its extension are free to use, with no paid tier required to install or track habits. Cloud sync uses your own Google account and the app's free Firebase tier.

### Which browsers are supported?

Any Chromium-based browser that supports Manifest V3 extensions — Chrome, Edge, Brave, Opera, Vivaldi, Arc — plus Firefox via a separate build. The minimum supported Chrome version is 88.

### Do I need the mobile app or web app too?

No, but they share the same account. Habits you create in the [web or mobile app](../mobile/install) appear in the extension after you sign in, and completions made in the extension sync back. The extension does not create new habits itself — see [Quick-add](./quick-add).

### Why did a welcome tab open by itself?

That is intentional. The first-install handler opens a welcome page so new users are not left staring at an empty toolbar icon. It only opens once, on install — not on every update.

### The sign-in button does nothing — why?

Google sign-in needs the build to be configured with a valid OAuth client ID. Official store builds include this. An unpacked build compiled without that configuration will report a "not configured" error at sign-in time by design, rather than shipping a broken placeholder.

### How do I remove it?

Right-click the toolbar icon → **Remove from Chrome** (wording varies by browser), or open your browser's extensions page and remove it there. Your synced habit data remains in your account; see [Account basics](../getting-started/account-basics).

## Where to next

- [Using the extension popup](./popup) — the toolbar window and what each control does.
- [Quick-add habit completions](./quick-add) — one-click check-ins and the keyboard shortcut.
- [Sync across devices](./sync) — sign-in and how data stays consistent.
- [Permissions explained](./permissions) — exactly what the extension can access.
