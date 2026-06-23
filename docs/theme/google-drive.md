---
id: google-drive
title: Optional Google Drive backup in HabitForge
description: HabitForge can back up to your own Google Drive using the restricted drive.file scope — it only ever touches a HabitForge folder it creates, never your other files.
sidebar_label: Google Drive backup
sidebar_position: 8
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
keywords:
  - habitforge google drive backup
  - drive.file scope
  - own google drive
  - backup habit data
  - revoke drive access
  - zero cost backup
  - privacy backup
---

# Optional Google Drive backup

**HabitForge includes optional Google Drive backup that writes to your own Google Drive — into a folder named "HabitForge" that the app creates — using Google's restricted `drive.file` scope, which means HabitForge can only ever see and touch the files it created itself, never the rest of your Drive.** It is an opt-in extra on top of your normal [account sync](./sync) and [manual export](../account/export), not a requirement, and it costs nothing: the data lives in your Drive, under your control, on your own storage. This page explains what the backup does, how the permission model keeps it private, and how to grant or revoke access.

> **Availability:** Google Drive backup is currently a back-end capability that is not yet surfaced as a one-tap toggle in the app. The live, always-on backup paths today are [cross-device account sync](./sync) and [manual JSON / CSV export](../account/export). The Drive integration described below documents the privacy model it uses; the in-app enable switch is on the [roadmap](../reference/roadmap).

## Use cases

### A backup you fully control

Some users want a copy of their data somewhere they own outright. Backing up to your own Google Drive puts the file in your account, in a clearly named "HabitForge" folder, where you can see it, keep it, or delete it yourself.

### Belt-and-suspenders alongside account sync

Your data already follows you across devices through [cross-device sync](./sync). Google Drive backup is a second, independent copy — useful if you like redundancy or want a portable file outside the app.

### Zero-cost storage

Because the backup writes to your Drive rather than HabitForge's servers, it does not depend on any paid storage on our side. You use the free space in your own Google account.

## How the permission model protects you

HabitForge requests the **`drive.file`** scope for this feature. That scope is deliberately narrow:

- HabitForge can **create** files and folders in your Drive (the "HabitForge" folder and the backups inside it).
- HabitForge can **read and update only the files it created** — it has no visibility into your photos, documents, or anything else in your Drive.
- HabitForge **cannot list or open your other Drive files**. The scope simply does not grant that.

In other words, granting Drive backup is not granting access to your whole Drive — it is granting access to a HabitForge-owned corner of it.

## What it backs up

The backup writes HabitForge data files into the "HabitForge" folder in your Drive (organized into subfolders as needed). It is designed to capture your HabitForge content so you have an independent copy. For the data the app stores about you generally, see your [data export](../account/export), which is the most complete, self-serve way to pull everything down at once.

## How to enable it

Google Drive backup is **opt-in** and works only with a Google sign-in, because it needs your Google authorization:

1. Sign in to HabitForge with **Google** (see [Sign up](../getting-started/sign-up)).
2. When you choose to connect Google Drive backup, Google asks you to grant the **`drive.file`** permission. Approve it to allow HabitForge to create its folder and backups.
3. HabitForge creates (or reuses) the **"HabitForge"** folder in your Drive and stores backups there.

If you do not grant the Drive permission, the rest of HabitForge still works exactly as before — your data is kept safe by [account sync](./sync) and is always available via [export](../account/export).

## How to revoke access

You are always in control and can withdraw Drive access at any time from your Google account, not just from HabitForge:

1. Go to your **Google Account → Security → Third-party apps with account access** (also reachable at myaccount.google.com).
2. Find **HabitForge** in the list.
3. Choose **Remove access**.

After revoking, HabitForge can no longer create or update files in your Drive. Any backups already saved remain in your "HabitForge" folder until you delete them yourself — they are your files.

## Good to know (honest limits)

- **Optional, not primary.** Google Drive backup is an extra. Your everyday safety net is [offline caching](./offline) plus [cross-device sync](./sync); your most complete on-demand copy is the [data export](../account/export).
- **Google sign-in required.** The feature depends on a Google account and the `drive.file` grant; it is not available without them.
- **Your storage, your files.** Backups count against your Google Drive space and stay yours — including after you revoke access.

## FAQ

### Does HabitForge get to see all my Google Drive files?

No. It uses the `drive.file` scope, which limits access to files HabitForge itself creates. Your other Drive content is invisible to the app.

### Where do the backups go?

Into a folder named **"HabitForge"** in your own Google Drive, created by the app the first time it backs up.

### Is Google Drive backup required to use the app?

No. It is entirely optional. HabitForge works fully without it, with offline support, account sync, and manual export.

### Does it cost anything?

No. The backup uses free space in your own Google account; there is no charge from HabitForge.

### How do I stop HabitForge from accessing my Drive?

Revoke its access from your Google Account's third-party access page (steps above). Existing backup files stay in your Drive until you remove them.

### What is the difference between Drive backup and account sync?

[Account sync](./sync) keeps your data current across your devices through your HabitForge account. Drive backup is a separate, user-owned copy stored in your Google Drive. They complement each other.

## Where to next

- [Cross-device sync](./sync) — your primary path for data across devices.
- [Offline-first tracking](./offline) — local caching and sync on reconnect.
- [Export your data](../account/export) — the most complete self-serve copy.
- [Delete your account](../account/deletion) — remove your data when you are done.
