---
id: privacy
title: HabitForge Privacy Policy — Plain-Language Summary
description: A plain-language summary of how HabitForge collects, uses, shares, and deletes your data. The authoritative version is the in-app privacy policy at habitforge.aoneahsan.com.
sidebar_label: Privacy
sidebar_position: 1
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
keywords:
  - habitforge privacy policy
  - habit tracker data privacy
  - what data does habitforge collect
  - firebase firestore analytics
  - gdpr ccpa privacy summary
  - third-party processors
  - data retention and deletion
---

# HabitForge Privacy Policy (Summary)

This page is a plain-language summary of how **HabitForge** — a free habit-tracking app — collects, uses, shares, retains, and deletes your personal data. It exists to make the legal text easier to read, not to replace it.

> **This is a summary. The authoritative, current version is the in-app privacy policy at [habitforge.aoneahsan.com/privacy](https://habitforge.aoneahsan.com/privacy).** If anything here ever differs from that page, the in-app page governs. This documentation page is provided for convenience only.

## Quick summary

HabitForge collects only what is needed to run the service, does **not** sell your data, and lets you export or delete your data at any time. The app is free with no subscription fees. Analytics run only when configured, and the mobile app never sends your data to an independent third-party data controller.

## Who is the data controller

The data controller is **Ahsan Mahmood**, the developer of HabitForge. You can reach the developer at `aoneahsan@gmail.com`.

## What data is collected

HabitForge collects the information you create and the information needed to operate your account, including:

- **Account data** — your email address, display name, and profile photo URL from Google Sign-In (never your Google password).
- **Habit and tracking data** — the habits you create plus the completions, progress, streaks, and habit-strength metrics you generate.
- **Settings** — your preferences, notification choices, and theme.
- **Usage and diagnostic data** — anonymized usage analytics and crash/error reports used to improve the app.

The app does **not** request access to your camera, microphone, location, contacts, photos, files, SMS, or call logs.

## How the data is used

Your data is used to provide the core service (tracking habits, calculating habit strength, syncing across your devices), to improve the app through anonymized usage analysis, to communicate important account notices and respond to support, and to keep the service secure against fraud and abuse.

## Third parties actually used

These third parties were confirmed from the app's real configuration:

- **Google Firebase** — Authentication, Firestore, and Hosting (processor). Stores your account and entries; encrypted in transit and at rest.
- **Google Sign-In** — verifies your identity (processor).
- **Firebase Analytics (Google)** — product-usage analytics (processor). On Android the native SDK reads the Advertising ID for analytics only.
- **Amplitude** — detailed product-event analytics (processor).
- **Sentry** — crash and error monitoring on production builds (processor).
- **FilesHub** — hosts images for in-app promotions and blog content (processor). It does not store your personal habit data.
- **Microsoft Clarity** and **Yandex Metrica** — session analytics that run on the **website only, never in the mobile app**, and act as independent controllers under their own policies.

HabitForge does **not** sell your personal data and does not share it for third-party advertising.

## Permissions (Android)

The mobile app requests only: Notifications (for reminders you schedule), Run-reminders-after-restart, Vibration, Advertising ID (analytics only), and Internet/network state (for syncing). Declining notifications still lets you use the app — you simply won't receive reminders.

## Security

Data is encrypted in transit (TLS 1.3) and at rest (AES-256), hosted on Google Cloud (Firebase), with limited personnel access.

## Your rights

You have rights under GDPR, CCPA, and similar laws — including access, correction, erasure, portability (export), restriction, objection, and withdrawing consent. See the [GDPR rights summary](./gdpr.md) and the in-app [GDPR rights page](https://habitforge.aoneahsan.com/gdpr-rights).

## Retention and deletion

Data is kept while your account is active. When you delete your account, personal data is permanently deleted within **30 days maximum**. Some anonymized aggregate data may be retained for analysis, and limited records may be retained where required by law. See the [account deletion guide](../account/deletion.md) or the in-app [account deletion page](https://habitforge.aoneahsan.com/account-deletion).

## Children

HabitForge is not intended for children under 13 (or 16 in the EU) and does not knowingly collect their data.

## More information

- Authoritative privacy policy: [habitforge.aoneahsan.com/privacy](https://habitforge.aoneahsan.com/privacy)
- [Cookie policy summary](./cookies.md) · [Terms summary](./terms.md)
- Export your data: [/account/export](../account/export.md)

For privacy questions, contact `aoneahsan@gmail.com`.
