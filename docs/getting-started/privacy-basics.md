---
id: privacy-basics
title: Privacy basics
description: A plain-language summary of what HabitForge stores, where it stores it, who can see it, and how to delete everything. The short answer first; the detailed list second.
sidebar_label: Privacy basics
sidebar_position: 8
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
keywords:
  - habitforge privacy
  - data deletion
  - what data is stored
  - habit app privacy
---

# Privacy basics

**HabitForge stores the minimum data needed to make the product work, hosts it in Firestore (Google's managed database), does not sell it, does not share it with advertisers, and lets you delete all of it from any device.** This page is the plain-language summary. The full legal terms live at [/legal/privacy](/docs/legal) (added in Batch 11) — but if you only have two minutes, the short version below is enough.

This page is informational. It does not replace legal advice and is not a contract.

## The short answer

| Question | Answer |
|---|---|
| Who hosts my data? | Google Firestore (Firebase). |
| Does HabitForge sell or share my data with advertisers? | No. |
| Can I delete everything? | Yes — Profile → Delete account. Permanent and immediate. |
| Does the browser extension load remote scripts? | No (Chrome Web Store policy compliance). |
| Are there third-party trackers in the app? | No third-party advertising trackers. Internal analytics events are fired to Firebase Analytics, Microsoft Clarity, and Amplitude — disclosed below. |
| Does HabitForge read my email / contacts / calendar? | No. The OAuth scopes requested are basic profile only, plus `drive.file` (only if you opt into journal backup, and only for files HabitForge creates). |
| Can I export my data? | Yes — Profile → Export my data, JSON download. |

If any answer above changes, this page is the first place it gets updated, and the change is dated.

## What HabitForge stores

Stored on **Firestore** under your `uid`:

- **Profile** (`hf_users/{uid}`) — display name, email, profile picture URL, account-creation timestamp, last-sign-in timestamp.
- **Settings** (`hf_user_settings/{uid}`) — theme preference (light/dark/system), accent color, default difficulty, notification preferences.
- **Habits** (`hf_habits`, queried by `userId`) — name, description, difficulty, cue, routine, reward, frequency, custom days, reminder time, color, icon, keystone flag, current strength, archived flag, timestamps.
- **Completions** (`hf_completions`) — one document per habit per day, with `strengthBefore`, `strengthAfter`, `strengthChange`, optional note.
- **Tracker logs** (`hf_water_logs`, `hf_weight_logs`, `hf_sleep_logs`, `hf_food_logs`, `hf_workout_logs`, `hf_reading_logs`, `hf_expenses`, `hf_mood_entries`) — one document per logged event with the value, timestamp, and any optional notes.
- **Timer sessions** (`hf_pomodoro_sessions`, `hf_meditation_sessions`, `hf_breathing_sessions`, `hf_focus_sessions`) — start time, duration, the habit it was tagged to (if any).
- **Journal entries** (`hf_journal_entries`, `hf_gratitude_entries`, `hf_affirmations`) — title, body (free text), timestamp.
- **Goals** (`hf_goals`) — title, description, target, deadline, status.
- **Achievements** (`hf_achievements`) — list of which achievements you've unlocked.

Each document has your `uid` as a field; Firestore's security rules enforce that only your authenticated session can read or write your documents.

Stored on **your own Google Drive** (only if you opt in):

- **Journal exports** — written to a `HabitForge Backups` folder using the `drive.file` OAuth scope. HabitForge cannot read or modify any other file in your Drive.

Stored on **FilesHub** (admin only, never user-generated content):

- Advertisement images and admin-managed assets shown in-app. Not your data.

## What HabitForge does **not** store

- No password. Authentication is delegated to Google; no password ever reaches HabitForge.
- No phone number.
- No location data. The app does not request location permission on any platform.
- No contacts.
- No calendar events.
- No SMS messages.
- No browsing history.
- No biometric data. (Biometric unlock, when added, will use the OS keychain — the biometric itself never leaves the device.)
- No payment data (HabitForge is free; no payment is processed).
- No advertising ID.

## Analytics

HabitForge fires anonymous usage events to three platforms:

- **Firebase Analytics** — hosted by Google. Standard Firebase usage events plus product-defined events (e.g., `habit_create`, `tracker_log`).
- **Microsoft Clarity** — session-level UX analytics, including heatmaps and session recordings on the web. Recordings auto-mask form inputs and password fields per Clarity's privacy defaults; HabitForge additionally tags journal-text fields as masked.
- **Amplitude** — funnel analytics for product-team review.

Events do not include the *contents* of your habits or journals — only the *kind* of action (e.g., "habit created with difficulty=medium," not the habit's name). Events are tied to your Firebase `uid` so a single user's funnel can be reviewed for product debugging.

The browser extension does **not** fire any analytics events. The extension complies with Chrome Web Store's no-remote-script policy, which forbids loading any of the three analytics SDKs. See [Browser extension](/docs/extension) for details.

## How HabitForge protects your data

- **Authentication**: Google Sign-In, OAuth 2.0. HabitForge never sees your password. See [Sign up](./sign-up).
- **Encryption in transit**: HTTPS / TLS for every request. The app refuses non-HTTPS connections in production.
- **Encryption at rest**: Firestore encrypts all data at rest by default, managed by Google.
- **Access control**: Firestore security rules enforce per-`uid` isolation. There is no admin "view as user" feature.
- **Access by the developer**: The developer (Ahsan Mahmood) has admin access to Firestore for support and debugging purposes. Production debugging follows least-privilege practices and is logged via Firestore audit logs.

## Delete your account

You can delete your HabitForge account from any signed-in device:

1. Open **Profile** (top-right avatar).
2. Click **Delete account**.
3. Confirm the prompt. The action is permanent and immediate.

What gets deleted:

- Your `hf_users/{uid}` profile document.
- Every Firestore document keyed by your `uid` across every collection.
- Achievements, settings, and tracker logs.

What does **not** get deleted automatically:

- Files in your Google Drive backup folder. They are in *your* Drive — HabitForge respects that boundary. Delete the `HabitForge Backups` folder yourself if you want them gone.
- Cached data on the device (it gets cleared on the next sign-in attempt, which fails for the deleted account).
- Aggregate / anonymised analytics events that have already been recorded (Firebase Analytics, Clarity, Amplitude all retain anonymised events per their own retention policies).

After deletion, you can sign up again with the same Google account; that creates a fresh, empty HabitForge account.

## Export your data

Profile → **Export my data** generates a JSON file with all your habits, completions, journals, tracker logs, timer sessions, goals, and achievements. The file is downloaded to your device immediately. Exports are not pushed anywhere automatically; you decide where the file goes.

The format is documented in `docs/account/export.md` (added in Batch 11). It is plain JSON — readable by any tool that reads JSON.

## Children

HabitForge is not directed at children under 13. The app has no special features for kids and the sign-up flow does not collect age. Google Sign-In's own age verification handles the account-eligibility side.

## Changes to this page

When the data-handling practices on this page change, the change is dated and noted in the [changelog](/docs/reference) (added in Batch 11). Material changes — for example, adding a new analytics provider — will be announced in-app.

## Frequently asked questions

### Where is my data physically stored?

Firestore is hosted in the `asia-south1` region (Mumbai). Cross-region reads are routed through Google's global network. The data does not leave Google Cloud's infrastructure.

### Does HabitForge use cookies?

The web app uses a small number of essential cookies for session continuity (Google sign-in tokens). It does not use third-party advertising cookies. The full cookie list is on the [cookies page](/docs/legal) (added in Batch 11).

### Is HabitForge GDPR-compliant?

HabitForge is a small one-developer project, not a regulated organisation. The app implements the practical pieces of GDPR-style rights: right of access (export), right of erasure (delete), and minimisation (we don't store more than the product needs). EU residents who want a formal data-controller letter or a Data Processing Agreement should email [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) to request one.

### Can I see what HabitForge stored about me without exporting?

Profile → **My data** shows a summary count by collection (e.g., "12 habits, 248 completions, 3 journal entries"). For the full content, use the JSON export.

### Does HabitForge train AI on my data?

No. Your habit names, completion notes, and journal entries are never used as training data for any model.

### What happens if Firebase / Google has a security incident?

Firestore is audited under SOC 2, ISO 27001, and ISO 27018. Google publishes its [security incident response process](https://cloud.google.com/security/compliance). HabitForge would re-publish any incident notification through the changelog and (where individual users are affected) by email.

### Can I run HabitForge on my own server?

Not currently. The app is tightly coupled to Firebase and is not designed as self-hostable software. The documentation source is open under MIT, but the app source is private.

## Where to next

- [Account basics](./account-basics) — profile, multi-device sync, sign-out.
- [First habit walkthrough](./first-habit) — five-minute hands-on.
- [Glossary](./glossary) — vocabulary reference.
- [What is HabitForge](./what-is-habitforge) — product overview.
