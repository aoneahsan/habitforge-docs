---
id: reading
title: Reading tracker
description: Track books across want-to-read, reading, finished, and abandoned. Log per-session pages and minutes, give each book a 1–5 rating, and see a running history of what you've finished and what you've put down.
sidebar_label: Reading
sidebar_position: 6
last_update:
  date: 2026-05-11
  author: Ahsan Mahmood
keywords:
  - reading tracker
  - book log
  - reading goals
  - books read
  - reading sessions
---

# Reading tracker

**The HabitForge reading tracker logs each book you own, want, or have read, plus a per-session record of pages and minutes you spent reading.** Each book carries a status (`want_to_read`, `reading`, `finished`, or `abandoned`), an optional 1–5 rating, start and finish dates, and a free-text notes field. The reading-session sub-records let you pair a daily "read 5 pages" habit with actual page counts.

This page documents the book entry, the per-session record, the four statuses, and the optional ISBN / cover-URL fields. It does not give book recommendations — see the [FAQ](#how-do-i-decide-what-to-rate-a-book) for what HabitForge does and does not claim.

## Use cases

### Finishing more books

Most readers track "books read this year" as a vague number. The reading tracker turns the vague number into a list, which turns the list into a habit (literally — pair with a `Read 5 pages before bed` habit). Users who track usually finish more books per year than users who don't, by a noticeable margin.

### Letting books go without guilt

The `abandoned` status is the underappreciated feature. Many readers feel obligated to finish every book they start. Marking a book abandoned formally — with the date and an optional note about why — is a release valve. Future-you will appreciate the honest history.

### Tracking variety, not just volume

Users who track 30 books a year often discover those 30 books are in 3 genres. The list view makes the bias visible without judgement. Variety is your call; the tracker just shows the data.

### Tracking re-reads

The cleanest workflow for a re-read: create a new entry for the second read, with `notes: "Re-read; first read in 2024"`. The two reads have independent ratings and finish dates, which is more honest than overwriting the first read.

### Building a reading-streak habit

A `Read 5 pages` daily habit + sessions logged from the same page tells you whether the habit is real. The sessions field aggregates to "pages this week" / "pages this month" on the dashboard.

## How it works

### The book entry

Each book writes a `ReadingLog` to `hf_reading_logs`:

| Field | Type | Notes |
|---|---|---|
| `title` | string | The book's title. Required. |
| `author` | string | The author's name. Required. |
| `isbn` | string? | Optional. Useful if you want unambiguous identification later. |
| `coverUrl` | string? | Optional. A URL to a cover image. |
| `totalPages` | number | Total page count for the edition. |
| `currentPage` | number | Where you are now. Updates as you log sessions. |
| `status` | `'want_to_read' \| 'reading' \| 'finished' \| 'abandoned'` | See below. |
| `rating` | 1, 2, 3, 4, or 5 | Optional. Your own rating after finishing. |
| `startDate` | string? | Optional. The date you started reading. |
| `finishDate` | string? | Optional. The date you finished (only meaningful when `status='finished'`). |
| `notes` | string? | Free-text. Reflections, quotes, why you abandoned. |
| `sessions` | array | Reading-session sub-records. |

### Reading session sub-record

| Field | Type | Notes |
|---|---|---|
| `date` | string | `YYYY-MM-DD` of the session. |
| `pagesRead` | number | Pages read in this session. |
| `minutesRead` | number | Minutes spent reading. |

Sessions accumulate per-book. The book's `currentPage` updates automatically when you add a session.

### The four statuses

| Status | When to use |
|---|---|
| `want_to_read` | A book you've decided to read but haven't started. |
| `reading` | A book you are actively reading. |
| `finished` | A book you finished (you read it through). |
| `abandoned` | A book you started and decided to stop. |

The statuses are mutually exclusive — a book is in exactly one bucket at a time. Moving a book from `reading` to `finished` typically pairs with setting the `finishDate` and a `rating`.

There is no `did_not_start` status. The presumption: a book in `want_to_read` for two years that you'll never read is one you should manually delete (or move to `abandoned` with a note).

### ISBN and cover URL

The `isbn` and `coverUrl` fields exist for users who want bibliographic precision. There is no auto-fetch from a book database (no remote API calls per the privacy stance). To populate, copy the ISBN from the book's copyright page or back cover, and the cover URL from a public source (Google Books, OpenLibrary, publisher's site).

Most users skip both fields and just type title and author.

## Step-by-step: add a book

1. Sidebar → Trackers → Reading → **Add book**.
2. Enter `title` and `author`.
3. Optionally fill in `totalPages` (helpful for progress percentage).
4. Set `status` to `want_to_read` if you haven't started, `reading` if you have.
5. Optionally add `isbn`, `coverUrl`, `startDate`, `notes`.
6. Save.

The book appears in the reading list, filtered by status.

## Step-by-step: log a reading session

1. Open the book's detail page.
2. Tap **Log session**.
3. Enter `pagesRead` and `minutesRead`.
4. Save.

The book's `currentPage` updates by the pages-read delta. The session shows up in the book's history and contributes to the dashboard's reading totals.

## Step-by-step: finish a book

1. Open the book's detail page.
2. Change `status` to `finished`.
3. Set `finishDate` (defaults to today).
4. Set a `rating` if you want.
5. Save.

The book moves from the `reading` list to the `finished` list. Stats (books finished this year, average rating, pages per book) recompute.

## Step-by-step: abandon a book

1. Open the book → change `status` to `abandoned`.
2. Optionally fill in `notes` with why you abandoned ("dragged after chapter 4," "wasn't what I expected," "library due date").
3. Save.

The book moves to the `abandoned` list. Reading history shows the partial completion (current page vs total pages).

## Step-by-step: reorder the reading queue

The `want_to_read` list is sorted by most-recently-added by default. There is no drag-to-reorder yet. The workaround is to re-add a book — opening, saving without changes, bumps it to the top. A real reorder gesture is on the wishlist.

## Stats and the dashboard

The dashboard's reading row shows (when pinned):

- Currently-reading count
- Pages read today / this week / this month
- Books finished this year

The book detail page shows per-book stats: average pages per session, average minutes per session, total reading time, percent complete.

The wellness dashboard cross-plots reading volume against habit-completion days. As with all cross-plots, it's descriptive — useful for "did I read more on days I worked out?" pattern-spotting, not for any causal claim.

## Tips

- **Track in your reading session, not after.** Logging right after a session keeps page counts honest. Trying to remember "I read about 15 pages last night" three days later produces drift.
- **Use `abandoned`, not delete.** The history of what you put down is informative. If a pattern emerges (you abandon 40% of fiction), that's data.
- **Don't over-rate.** If every book you finish is a 5, the rating system is uncalibrated. Let yourself rate 3 — most books are 3s.
- **Pair with a habit.** `Read for 15 minutes` or `Read 5 pages before bed` are the canonical pairs. Strength meter shows habit consistency; session log shows actual pages.
- **Keep the want-to-read list short.** A 200-book queue is just a wish list. A 5–10-book queue is a real list.

## Frequently asked questions

### How do I decide what to rate a book?

Your scale. Common patterns:

| Rating | Personal meaning |
|---|---|
| 5 | One of the best books I've read; will reread or recommend widely. |
| 4 | Strong recommendation; worth my time. |
| 3 | Solid; no regret reading it. |
| 2 | Mostly disappointing; specific recommendations only. |
| 1 | Didn't enjoy or didn't get value. |

Or any other scale that's consistent for you. The tracker stores 1–5 and doesn't enforce meaning.

### Can I import my Goodreads / Storygraph data?

Not currently. Bulk import is on the wishlist; the export format from those services would map cleanly onto `ReadingLog`. Manual entry is the workflow today.

### Can I track audiobooks?

Yes — log `minutesRead` and leave `pagesRead` at 0 (or estimate based on the audiobook's runtime). The schema doesn't distinguish format. Some users keep audio and physical reads on different entries; others combine. Your call.

### Will HabitForge recommend books?

No. The tracker is a record. No recommendation engine, no "users who finished X also finished Y," nothing. The honest framing: book recommendations are a separate product, and lukewarm algorithmic recommendations are usually worse than personal ones from people you trust.

### What about page-time variance — some pages are denser than others?

The tracker doesn't differentiate. Sessions are just `pagesRead` and `minutesRead`. The "minutes per page" derived stat will fluctuate; that's fine.

### Can I tag books by genre?

Not as a structured field today. The `notes` field is the workaround — hashtags in notes (e.g., `#fiction #sci-fi`) are findable via the book-list search. A real genre tag system is on the wishlist.

### How do reading sessions affect the dashboard if I log them later?

Sessions are dated. Logging a session today with `date: yesterday` correctly attributes it to yesterday for the weekly / monthly totals.

### Can I see a book's reading sessions in one place?

Yes — the book's detail page has a Sessions tab listing every logged session with date, pages, and minutes. The list is sortable by date.

### What's the longest book I can track?

`totalPages` and `currentPage` are integers with no enforced upper bound. A 10,000-page reference work is technically supported.

### Can I delete a book entirely?

Yes — book detail page → **Delete book**. The action removes the `ReadingLog` document and all its sessions. There's no undo, same as habits.

### Does HabitForge ever post reading stats publicly?

No. Your reading list is private to your account. The tracker has no social or sharing features.

## Where to next

- [Workout log](./workout) — exercise sessions with sets, reps, distance.
- [Expenses](./expenses) — income / expense log with categories.
- [Mood tracker](./mood) — daily mood with factor correlation.
- [Habits → Create](../habits/create) — for the `Read 5 pages` habit pattern.
