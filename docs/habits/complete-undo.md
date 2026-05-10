---
id: complete-undo
title: Complete a habit, undo a mistake
description: How to mark a habit complete, undo a completion you tapped by mistake, attach a note to a completion, and edit or delete a single completion record from a habit's history.
sidebar_label: Complete & undo
sidebar_position: 5
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
keywords:
  - mark habit complete
  - undo completion
  - habit completion note
  - edit completion
---

# Complete a habit, undo a mistake

**Marking a habit complete is one tap. Undoing it is another tap on the same control.** This page covers the dashboard-level flow, the keyboard shortcut on web, attaching a note to a completion, marking an explicit miss, and editing or deleting a single record from history.

## The basic flow — mark complete

1. Open the dashboard.
2. Find the habit in today's checklist.
3. Tap the checkbox (or click on web).

The bar fills by `+4` (Easy), `+5` (Medium), or `+6` (Hard) threads. The streak counter increments by 1. A small confetti animation plays once. Done.

The completion is written to the `hf_completions` Firestore collection with `date = today`, `completed = true`, and the strength change. Multi-device sync pushes the update to every signed-in surface within ~1 second.

### Keyboard shortcut (web)

Hover the row → press **Space** to toggle the checkbox. Useful when you have a few habits and want to triage them quickly without grabbing the mouse.

### Mobile

On mobile, the checkbox is a 44×44 touch target — large enough for tap accuracy without zoom. Pressing it triggers a light haptic on iOS and Android.

### Browser extension

The popup shows today's habits as a checklist. Clicking a checkbox writes the completion the same way the web app does — they share the same Firestore backend.

## Undo a completion

Tap the checkbox again. The strength change rolls back, the streak decrements, and the completion record is removed from `hf_completions`.

There is no time limit on undo. You can undo a completion you marked an hour ago, a day ago, or a week ago — the action goes to the underlying record, not to a transient "did this in the last N seconds" buffer.

### Why no confirmation dialog?

Because every undo is a one-tap reversal of the same action. Adding a confirmation would slow down the common case (small mistake, fix it). The action is fully reversible — re-tap the checkbox and the completion is back.

### What if I want to undo a *miss* I marked by mistake?

Same gesture. Find the day, tap the missed indicator → it clears. The strength loss rolls back, the streak recomputes.

## Attach a note to a completion

Most users skip this. The few who use it find it useful months later.

1. **Long-press** the checkbox on mobile (≥500 ms). On web: right-click → **Mark with note**, or tap the checkbox while holding `Shift`.
2. A small modal opens with a text field.
3. Type the note (free text, no length limit).
4. Save.

The note attaches to the completion record. It shows up in:

- The habit's history view (calendar tap).
- The export JSON when you download your data.
- A small note icon next to the date in the calendar heatmap.

The note is not searchable from the global search — it's contextual to the habit.

### Useful patterns for notes

- **Conditional habits:** "Walked 25 minutes — pace was slow because of rain."
- **Quitting habits:** "Strong urge today, walked away. Trigger was lunch with X."
- **Tracking variance:** "Read for 8 minutes only, was tired but counted because of consistency."

## Mark an explicit miss

A miss tells the streak engine "I did not do this today" — different from "I haven't logged today yet." Marking miss costs threads but resets the streak counter cleanly so you can start a fresh consecutive run tomorrow.

1. From the dashboard or the calendar view, find the date.
2. Tap and hold the checkbox (mobile) or right-click → **Mark missed** (web).
3. Confirm in the small dialog.

The strength meter drops by `−6` / `−8` / `−10` (Easy / Medium / Hard), the streak counter resets to 0, and a `completed: false` record is written.

### When to mark missed vs leave it unlogged

| Situation | Recommended |
|---|---|
| You genuinely didn't do it and won't | mark missed |
| You forgot to log a successful day | mark complete (with the correct date — see below) |
| You weren't sure if it counted | leave unlogged; come back tomorrow |
| You were on vacation | leave unlogged; nothing breaks |

Most users live in the "leave unlogged" world for ambiguous days. The strength meter handles ambiguity correctly because the absence of a logged completion produces no thread gain — it captures consistency reduction without invoking the punitive miss.

## Logging for a past date

Today's checkbox writes for `date = today`. To log for a different date:

1. Tap the habit name (not the checkbox) on the dashboard.
2. The habit detail page opens with a calendar.
3. Tap the date you want to log.
4. Choose **Mark complete** or **Mark missed**.

This is how you handle "I forgot to log on Tuesday." The strength change is applied as if you'd marked it on Tuesday — but the recomputation is honest: it doesn't try to retroactively fit the curve, it just adds the same `+gain` to your current strength.

The system does **not** prevent retroactive logging. The product opinion is that users are honest about their own habits; the friction of preventing back-fill would also block legitimate fixes.

## Editing or deleting a completion

Each completion record on the calendar is editable.

1. Open the habit detail page.
2. Tap the date in the calendar grid.
3. A small action sheet appears: **Edit note**, **Toggle status**, **Delete record**.

| Action | Effect |
|---|---|
| Edit note | Note text changes; nothing else moves. |
| Toggle status | `completed: true` ↔ `completed: false`. Strength meter recomputes by reverting the old change and applying the new. |
| Delete record | The record is removed entirely. Strength meter recomputes as if you never logged that day. |

Delete is permanent for that record (no second-tier trash bin), but the action only affects one day. There's no bulk-delete completion records.

## Streak and strength after edits

Editing or deleting a completion record forces a recompute on the next stats refresh:

- The streak counter walks the (now modified) ordered records and produces a new current/longest streak.
- The strength meter is the sum of all `strengthChange` values up to the present, clamped to [0, 100].

The recompute is fast (≤365 records read, sequential scan) and runs in the client when the stats page loads.

## Common workflows

### "I marked the wrong habit complete"

1. Tap the habit's checkbox to undo (immediate; one tap).
2. Tap the right habit's checkbox to record the actual completion.

### "I forgot to log yesterday"

1. Open the habit detail page.
2. Tap yesterday's date in the calendar.
3. Mark complete (with note if useful: "logged a day late").

### "I marked yesterday complete but I didn't actually do it"

1. Open the habit detail page.
2. Tap yesterday's date.
3. Toggle status to missed, or delete the record entirely if you'd rather it not show in history.

### "I want to start a streak from today, ignoring last week's mistakes"

You can't reset history, but you can choose your own narrative: focus on the current strength meter going forward. The streak counter will rebuild from your most recent miss, which is what you want anyway.

## Frequently asked questions

### Is there an undo / redo stack across the app?

No. Each completion is its own undoable atomic action. There is no global undo history beyond the per-record toggle.

### What happens if I tap the checkbox twice quickly?

The first tap records a completion. The second tap undoes it. The dashboard debounces to avoid double-fires, but the underlying behaviour is "tap = toggle."

### Can I auto-complete every habit at midnight?

No. Auto-complete would defeat the entire point of habit tracking — the point is the act of acknowledging the habit, not the data ending up green.

### Does the analytics service log every tap?

The completion event is logged once per change (one per check, one per uncheck). Multiple rapid taps within the debounce window collapse to a single net event.

### Can I see who logged a completion across devices?

No "device" attribution exists. The completion belongs to your account; the device that wrote it isn't recorded.

### What if I want to add a completion in bulk?

Not currently supported. The cleanest path is one tap per day in the calendar. Most "I want to bulk-log" requests come from users importing data from another app — see [Account basics](../getting-started/account-basics) for the export format we use; an importer is on the roadmap but not committed.

### Can I attach a photo to a completion?

Not today. Notes are text only. A photo-completion feature is on the wishlist; it's gated on the file-storage decisions documented in [Privacy basics](../getting-started/privacy-basics).

### Does undoing a completion remove it from analytics events?

The Firestore record is removed and a `habit_completion_undo` analytics event is fired. The original `habit_complete` event remains in the analytics store (Firebase / Clarity / Amplitude) — those services don't support deletion of past events. The user-visible state in HabitForge is correct; the analytics tail is just historical.

## Where to next

- [Streak engine](./streak-engine) — exactly what counts as a streak.
- [Strength visual](./strength-visual) — what the 0–100 meter shows.
- [Schedule and reminders](./schedule-reminders) — when habits are due.
- [Edit and archive](./edit-archive) — change a habit's fields without losing history.
