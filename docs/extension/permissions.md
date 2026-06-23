---
id: permissions
title: HabitForge extension permissions explained
description: The exact permissions the HabitForge browser extension requests — storage, alarms, notifications, identity, declarativeNetRequest — and why each is needed.
sidebar_label: Permissions
sidebar_position: 5
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
keywords:
  - extension permissions
  - manifest v3 permissions
  - declarativenetrequest
  - chrome identity permission
  - notifications permission
  - alarms permission
  - habit tracker privacy
---

# HabitForge extension permissions explained

**This page lists exactly which permissions the HabitForge browser extension requests in its Manifest V3 manifest, and why each one is needed — no more, no less.** The extension follows a minimal-permissions principle: it asks only for what its features actually use, bundles all of its own code, and loads nothing from a remote server. There is no content script injected into the pages you browse, and the extension does not read your browsing history or page contents. The five permissions below, plus one web-accessible resource for the Focus Mode redirect, are the complete set. If a browser store listing or older note mentions other permissions, treat this page — derived from the shipped manifest — as the accurate source.

## Use cases

### Deciding whether to install

Before adding any extension, it is reasonable to check what it can touch. This page lets you confirm HabitForge's footprint is small and tied to specific features.

### Explaining the install prompt

When the browser shows a permission prompt at install, this page maps each line in that prompt to the feature it powers.

## The permissions

### `storage`

Saves your extension settings and offline data locally in the browser — theme, Focus Mode blocklist, badge preferences, and the queue of completions waiting to sync. This is local browser storage, not your hard drive, and it is what lets the extension remember your choices and work offline.

### `alarms`

Schedules habit reminders without keeping a process running. The extension sets a daily reminder alarm and per-habit reminder alarms; the browser wakes the extension at those times to show a notification. Alarms only fire at the times your settings configure.

### `notifications`

Shows reminder notifications, completion confirmations, streak-milestone alerts, and an update notice. Reminder notifications can include **Complete** and **Snooze 15 min** action buttons. You can turn notifications off in settings, and the extension honors quiet hours.

### `identity`

Enables **Sign in with Google** through the browser's built-in identity flow (the Chrome Identity API). This is how the extension authenticates you to sync habits — without embedding a third-party auth SDK or loading any remote sign-in script. The requested Google scopes are your email address and basic profile only.

### `declarativeNetRequest`

Powers **Focus Mode**. When you enable it, the extension registers declarative rules that redirect the sites on your blocklist to a calm in-extension reminder page (`blocked.html`). Declarative net request rules are evaluated by the browser itself — the extension does not read, log, or intercept the contents of your traffic; it only redirects hostnames you chose to block.

### Web-accessible resource: `blocked.html`

`blocked.html` is declared as a web-accessible resource so the Focus Mode redirect can land on it from any site. This is a page bundled inside the extension, not an external URL, and it carries a control to disable Focus Mode if you need to reach a blocked site.

## What the extension does *not* request

To be explicit about the footprint:

- **No content scripts.** The extension does not inject code into the web pages you visit.
- **No `tabs` or `webNavigation` reading.** It does not enumerate your open tabs or watch your navigation history. Focus Mode is implemented with declarative redirect rules instead.
- **No host permissions for arbitrary sites.** It does not request blanket access to read or change data on the websites you browse.
- **No remote code.** All scripts are bundled; nothing is fetched from a CDN, and there is no `eval`.

## Step-by-step: review the live permissions

1. Open your browser's extensions page (`chrome://extensions`, `edge://extensions`, or `brave://extensions`).
2. Find **HabitForge** and click **Details**.
3. Read the **Permissions** section. It should match the five permissions above.
4. For the exact manifest, open the extension's folder and read `manifest.json`.

## FAQ

### Can the extension see what I browse?

No. Without content scripts or tab/history permissions, it cannot read page contents or your browsing history. Focus Mode only redirects hostnames you explicitly added to your blocklist, using declarative rules the browser enforces.

### Why does it need notification permission?

Reminders are a core feature. The `notifications` permission lets the extension nudge you about incomplete habits and confirm completions. If you do not want them, disable notifications in settings — the rest of the extension keeps working.

### What data leaves my browser?

When you sign in, habit data syncs to your HabitForge account (the same cloud data the web and mobile app use). Local-only settings stay in browser `storage`. The extension does not sell data and loads no remote scripts. See [Sync](./sync) and the [privacy policy](https://habitforge.aoneahsan.com/privacy).

### Does Focus Mode require access to every website?

It needs the ability to redirect blocked hostnames, which is why `declarativeNetRequest` plus the `blocked.html` web-accessible resource exist. It does not read the content of any site — it only redirects the hostnames on your blocklist.

### Why does an older listing mention `tabs` or `webNavigation`?

Earlier descriptions predated the move to `declarativeNetRequest` for Focus Mode. The shipped manifest documented here is authoritative; those permissions are not requested.

## Where to next

- [Sync across devices](./sync) — what the `identity` permission enables.
- [Using the popup](./popup) — where Focus Mode and notifications are controlled.
- [Privacy basics](../getting-started/privacy-basics) — how HabitForge handles your data overall.
