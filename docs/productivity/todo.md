---
id: todo
title: To-do list and task manager in HabitForge
description: Create tasks with priority levels and due dates, add subtasks, and filter by All, Active, or Completed. The HabitForge task manager flags what is overdue and done today.
sidebar_label: To-do list
sidebar_position: 1
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
keywords:
  - to-do list app
  - task manager
  - task priority levels
  - subtasks checklist
  - overdue task tracking
  - due date task list
  - daily task list
  - free todo app
---

# To-do list and task manager in HabitForge

**The HabitForge to-do list — the Tasks page — is a built-in task manager that stores every task with a title, a priority level, an optional due date, and an optional checklist of subtasks.** It sits alongside your habits rather than replacing them: habits are the recurring behaviours you are building, tasks are the one-off things you need to get done. Three live counters at the top of the page tell you how many tasks you have in total, how many you finished today, and how many are overdue. Everything saves to your account and syncs across devices, so the same list shows up on web and mobile.

## Use cases

### One-off work that isn't a habit

A habit like `Review inbox` repeats forever; "Email the landlord about the lease" happens once. The Tasks page is where the second kind lives. Give it a priority, set a due date if it matters, and check it off when it's done — no streak, no habit strength, just a clean done.

### Breaking a big task into steps

Any task can hold a nested checklist of subtasks. "Prepare quarterly report" becomes `Pull the numbers`, `Draft the summary`, `Send for review`. Each subtask is its own checkbox, so a single intimidating line turns into visible, tickable progress.

### Triage with priority and overdue flags

When the list grows, the priority levels (Urgent, High, Medium, Low) and the automatic overdue count keep it honest. Sorting surfaces the most pressing items first, and anything past its due date is counted as overdue so it can't quietly slip.

## How to use it

1. Open the **Tasks** page from the sidebar (or visit it in the [live app](https://habitforge.aoneahsan.com)).
2. In the **Add Task** card, type the task title under **Title**.
3. Pick a **Priority** — Urgent, High, Medium, or Low (defaults to Medium).
4. Optionally set a **Due Date** with the date field.
5. Press **Enter** in the title box or click **Add**. The task appears at the top of the list.
6. To add subtasks, expand a task, type a subtask title, and add it — each becomes its own checkbox.
7. Tick the checkbox to mark a task complete; it moves under the **Completed** tab and bumps the "Done Today" counter.
8. Use the **All / Active / Completed** tabs (each shows a live count) to filter the list. Delete a task with its delete control.

## FAQ

### What do the three counters at the top mean?

**Total** is every task you have, **Done Today** counts tasks you completed today, and **Overdue** counts active (not-yet-done) tasks whose due date has already passed. They update instantly as you add, complete, or delete tasks.

### How are tasks sorted?

Tasks are ordered by priority and then by due date, so the most urgent and time-sensitive items rise to the top. Completed tasks are shown separately under the Completed tab.

### Do subtasks have their own due dates or priority?

No. A subtask is a simple title plus a checkbox — a lightweight step inside its parent task. Due date and priority live on the parent task only. For anything that genuinely needs its own deadline, make it a top-level task instead.

### Do tasks send reminders like habits do?

The Tasks page itself is a list with due dates, not a scheduled-notification engine. For timed nudges, use a recurring [habit with a reminder](../habits/schedule-reminders). Tasks are best for "get this done" items; habits are best for "do this every day."

### Is my task list saved if I'm offline?

Yes. Tasks write to your account through Firestore's offline cache, so changes you make without a connection queue locally and sync the moment you're back online. See [Account basics](../getting-started/account-basics) for how cross-device sync works.

### Is the to-do list free?

Yes. HabitForge is a free, zero-cost app. The Tasks page, subtasks, priorities, and due dates are all included with your account at no charge.

## Where to next

- [Morning routine](./morning-routine) — an ordered, time-estimated checklist you run each morning.
- [Calendar heatmap](./calendar-heatmap) — a year-at-a-glance view of your habit consistency.
- [Wellness dashboard](./wellness-dashboard) — a 7-day score across habits, sleep, focus, and more.
- [Habits → Schedule and reminders](../habits/schedule-reminders) — for timed nudges on recurring behaviours.
- [Export your data](../account/export) — download your habits and history as JSON or CSV.
