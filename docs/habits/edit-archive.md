---
id: edit-archive
title: Edit, archive, and delete habits
description: How to change a habit's fields, archive a habit without losing its history, or permanently delete it. Includes the exact rules for what changes when you edit a difficulty mid-stream.
sidebar_label: Edit & archive
sidebar_position: 2
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
keywords:
  - edit habit
  - archive habit
  - delete habit
  - habit history
---

# Edit, archive, and delete habits

**Editing a habit changes its future behaviour. Archiving hides the habit but keeps its history. Deleting is permanent and irreversible.** This page covers when to use each action, what fields you can edit, and the surprising-but-deliberate rule that editing difficulty does not retroactively rewrite past completions.

## At a glance

| Action | Reversible? | Strength meter | Completions kept? | Use when |
|---|---|---|---|---|
| **Edit** | yes | unchanged | yes | The habit changed (difficulty, schedule, reminder, etc.) |
| **Archive** | yes | frozen | yes | You're done with the habit but want the record |
| **Delete** | no | gone | no | You really want the habit and its data erased |

If you're not sure: **archive**. Archive is the safe default for "I'm done with this habit." Delete only if you genuinely want the data gone.

## Edit a habit

### How

1. From the dashboard or any list view, click the habit.
2. Click **Edit** (the pencil icon, top-right of the detail page).
3. Change any field.
4. Click **Save**.

The edit form is the same form as [Create a habit](./create), pre-populated with current values. All fields are editable.

### What changes when you save

- Updated fields take effect immediately on every signed-in surface (Firestore real-time sync).
- The habit's existing completions, miss records, strength meter, and streak count are **not** touched.
- If you changed the **reminder time**, HabitForge re-schedules the local notification.
- If you changed the **frequency** from Daily to Custom (or vice versa), today's "due" status recomputes — the habit may disappear from today's checklist if today is no longer a scheduled day.

### The non-obvious rule: difficulty edits are not retroactive

This is the one rule worth memorising. If you change a habit from Easy to Hard:

- All past completions and misses keep the strength change they were originally calculated with (Easy: +4 / −6).
- All future completions and misses use the new difficulty (Hard: +6 / −10).
- The current strength meter is unchanged at the moment of the edit.

The reason: rewriting history would mean a single difficulty edit could reset a months-old habit's strength to zero (or push it to 100). That is bad UX and dishonest to the underlying record. The current value reflects what actually happened; the future reflects the new rule.

If you genuinely want a clean restart on a new difficulty, the cleanest path is **Archive the old habit, create a new one** with the new difficulty.

### What you can edit

| Field | Editable? | Notes |
|---|---|---|
| Name | yes | Free-text. No length restriction beyond 1–100 chars. |
| Description | yes | |
| Difficulty | yes | Future-only effect (see above). |
| Cue / Routine / Reward | yes | |
| Frequency | yes | Today's "due" status recomputes. |
| Custom days | yes | Only relevant when Frequency = Custom. |
| Reminder time | yes | Local notifications rescheduled. |
| Color | yes | Cosmetic. |
| Icon | yes | Cosmetic. |
| Keystone flag | yes | Affects dashboard sort order. |
| Strength | no | Read-only. Changes through completions and misses, not direct edits. |
| Created date | no | Read-only. |

### Editing on multiple devices

If you edit the same habit on two devices within the same second, Firestore's last-writer-wins rule applies. The window for a real conflict is small. There is no manual conflict-resolution dialog — the second write wins.

## Archive a habit

### How

1. Open the habit's detail page.
2. Click **Edit**.
3. Toggle the **Archive** switch to on.
4. Save.

The habit disappears from today's checklist and the active list. It still exists in Firestore (`isArchived: true`) and in any historical view (calendar heatmap, completion history).

### What archive does

- Removes the habit from the dashboard.
- Removes it from the create-completion dropdown.
- Cancels any pending local notification for it.
- Keeps every past completion and miss record intact.
- Freezes the strength meter at its current value. No more changes.

### What archive does NOT do

- It does not delete data. Everything is recoverable.
- It does not affect any *other* habit's strength.
- It does not retroactively recompute streaks or stats.

### Restoring an archived habit

1. Open the **All habits** view (sidebar → All habits, or Settings → Archived).
2. Find the archived habit in the list (filter or scroll).
3. Click it → **Edit** → toggle Archive off → Save.

The habit reappears on the dashboard. Its strength is exactly where it was when you archived it. New completions resume from there.

### When to archive vs delete

| Reason | Archive | Delete |
|---|---|---|
| Took a break, might come back | ✓ | |
| Goal achieved, want to celebrate later | ✓ | |
| Replaced with a better habit | ✓ | |
| Created by mistake | | ✓ |
| Privacy / want it gone | | ✓ |
| Test habit you no longer want in the data | | ✓ |

Archive is almost always the better choice. The cost of keeping archived habits is one Firestore document per habit; the benefit is being able to look back honestly at what you tried.

## Delete a habit

### How

1. Open the habit's detail page.
2. Click **Edit**.
3. Scroll to the bottom of the form.
4. Click **Delete habit**.
5. Confirm in the dialog.

The dialog is intentionally a two-step (button + confirm) because the action is irreversible.

### What delete does

- Removes the habit document from `hf_habits`.
- Removes every completion record for that habit from `hf_completions`.
- Cancels any pending local notification.
- Does **not** touch any tracker logs, journal entries, or other unrelated data.

### What delete does NOT do

- It does not delete your account. Use [Privacy basics → Delete account](../getting-started/privacy-basics#delete-your-account) for that.
- It does not delete shared dashboard widgets. The wellness dashboard recomputes without the habit.
- It does not undo achievements you unlocked while the habit existed. Achievements stay.

### Recovery after delete

There is **no undo for delete.** This is intentional — undo would either require a server-side trash bin (we don't have a backend beyond Firestore) or client-side state that survives navigation (it doesn't).

If you exported your data recently, you can manually re-create the habit and re-import its history through a future feature. As of now, the practical advice is: **archive first, delete only when you're certain.**

## Bulk operations

There are no bulk edit, archive, or delete actions today. Each habit is acted on individually. The product opinion: bulk actions encourage cleanup sprees that delete data the user later regrets.

If you have many habits to clean up, the recommended order is:

1. Open each → archive (one click in the edit form).
2. Wait a week. If you don't miss it, you didn't need it.
3. Optionally delete after that cooling-off period.

## Editing reminders specifically

Editing the reminder time goes through the same edit flow but has a few platform-specific notes:

- **Web** — the schedule is JS-driven and updates immediately.
- **iOS / Android** — the local notification is cancelled and re-scheduled via [`@capacitor/local-notifications`](https://capacitorjs.com/docs/apis/local-notifications). The OS may take a few seconds to reflect the new time in its scheduled list.
- **Browser extension** — the extension does not send reminders. Reminders fire on whichever surface (web / mobile) is signed in.

Setting the reminder time to empty string disables the reminder. There is no separate "remove reminder" toggle; clearing the field is the action.

## Frequently asked questions

### If I edit a habit's name, do my past completions still link to it?

Yes. Completions are linked by habit `id`, not name. Renaming is purely cosmetic.

### If I archive a habit, do its reminders stop?

Yes, immediately. Archive cancels all pending local notifications for that habit.

### Can I delete just the completion records and keep the habit?

Not via UI. The habit detail page does let you remove individual completions one at a time (see [Complete and undo](./complete-undo)), but there's no bulk-clear-completions action.

### Will deleting a habit affect my achievements?

No. Achievements you unlocked stay unlocked. The achievement system records what you did at the time; deleting the habit doesn't rewrite that history.

### Can I undo a delete within a few seconds?

No. The delete is committed to Firestore at confirm-time. There is no soft-delete window.

### What happens to the streak count of a deleted habit's "successor"?

If you delete habit A and create habit B that you think of as the same thing, B starts fresh. There is no inheritance. The two habits are independent records.

### Can I merge two habits into one?

Not directly. The cleanest workaround: keep the longer-history habit, archive the other, and continue logging in the kept one.

### How do I see archived habits?

Settings → Archived, or All habits → toggle "Show archived." Archived habits also appear in the calendar heatmap and the long-range strength chart.

### Does archiving a Keystone-flagged habit demote it visually?

Once archived, the habit doesn't appear on the dashboard at all, so the keystone-priority sort order doesn't matter. If you restore it, the keystone flag is preserved and it returns to the top.

## Where to next

- [Schedule and reminders](./schedule-reminders) — frequency, custom days, notifications.
- [Streak engine](./streak-engine) — how streaks count and what breaks them.
- [Complete and undo](./complete-undo) — marking habits done, taking it back.
- [Strength visual](./strength-visual) — interpreting the meter.
