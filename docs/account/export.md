---
id: export
title: Export your HabitForge data as JSON or CSV
description: Download your full HabitForge data as a JSON file, or your habits and completions as separate CSV files, straight from the Settings page — free and in your browser.
sidebar_label: Export your data
sidebar_position: 2
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
keywords:
  - export habit data
  - download data as json
  - habits csv export
  - completions csv export
  - habit data backup
  - data portability
  - gdpr data export
  - free data download
---

# Export your HabitForge data as JSON or CSV

**HabitForge lets you download your own data from the Settings page in two real formats — one complete JSON file, or two separate CSV files (one for your habits, one for your completion history).** The export runs entirely in your browser: it pulls your records from your account and saves a file straight to your device, with a date stamped into the filename. There's no upload, no third party, and no cost. This is your portable backup and your way of taking your data elsewhere — to a spreadsheet, another tool, or just an archive. The exact contents are described below so you know precisely what you're getting.

## Use cases

### Keeping a personal backup

A periodic JSON export is a clean, self-contained snapshot of your habits and history that you can store wherever you keep your files. If you ever want a point-in-time record, this is it.

### Analysing in a spreadsheet

The CSV exports open directly in Excel, Google Sheets, or Numbers. The habits CSV is one row per habit; the completions CSV is one row per logged completion — perfect for pivot tables, charts, or your own analysis.

### Taking your data with you (portability)

Because the formats are open (JSON and CSV), nothing locks you in. You can move your data to another app or keep it for your own records, in support of your data-portability rights.

## How to use it

1. Open **Settings** from the sidebar (or in the [live app](https://habitforge.aoneahsan.com)).
2. Scroll to the **Export Data** card.
3. Click **Export All Data (JSON)** for a complete `habitforge-export-YYYY-MM-DD.json` file.
4. Click **Export Habits (CSV)** for `habitforge-habits-YYYY-MM-DD.csv` (one row per habit).
5. Click **Export Completions (CSV)** for `habitforge-completions-YYYY-MM-DD.csv` (one row per completion).
6. Your browser downloads the file immediately — no email, no waiting.

## What's in each file

### JSON export

The JSON file contains a single object with `exportedAt` (the export timestamp), your `userId`, a `habits` array (your full habit records), and a `completions` array (your full completion history). It's the most complete single-file export.

### Habits CSV

Columns: **ID, Name, Description, Difficulty, Cue, Routine, Reward, Frequency, Strength, Is Archived, Created At, Updated At**. Values containing commas, quotes, or line breaks are escaped so the file opens cleanly in any spreadsheet.

### Completions CSV

Columns: **ID, Habit ID, Date, Completed, Strength Before, Strength After, Strength Change, Note, Created At**. Each row is one completion record, so you can trace how a habit's strength changed over time.

## FAQ

### What formats are available?

Exactly three downloads: one **JSON** file (everything in one), one **habits CSV**, and one **completions CSV**. There is no PDF, Excel `.xlsx`, or XML export — JSON and CSV are the supported formats.

### Does the export include my tracker logs (water, sleep, mood, etc.)?

The current export covers your **habits and your completion history**. Your tracker logs are stored in your account, but the JSON and CSV downloads on the Settings page are focused on habits and completions. If you need a full copy of everything for a formal data request, see "Request a copy before deletion" below.

### Where do the files download to?

Wherever your browser saves downloads. The export is generated locally in your browser and saved directly — nothing is sent through a server, so it works offline against your cached data too.

### Why is the export under Settings and not a "Profile" page?

HabitForge keeps account tools — including data export — on the [Settings page](./profile). The Export Data card lives there alongside notifications, privacy, and account actions.

### Can I request a copy of my data before deleting my account?

Yes. The [account-deletion page](./deletion) offers a "Request Data Export" option that emails a request for a copy in a portable format — useful as a final, formal export before you erase your account.

### Is exporting free?

Yes. HabitForge is a free, zero-cost app, and exporting your own data is included at no charge.

## Where to next

- [Account & profile](./profile) — where the Export Data card lives, plus other account settings.
- [Account deletion](./deletion) — export first, then permanently delete your account.
- [Getting started → Privacy basics](../getting-started/privacy-basics) — how your data is handled.
