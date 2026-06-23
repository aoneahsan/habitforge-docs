---
id: calendar-heatmap
title: Habit calendar heatmap and consistency view
description: See a GitHub-style yearly heatmap of habit completion, filter by one habit, and read active days, longest streak, and perfect days in the HabitForge calendar.
sidebar_label: Calendar heatmap
sidebar_position: 3
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
keywords:
  - habit calendar heatmap
  - github-style contribution graph
  - yearly consistency view
  - habit completion calendar
  - longest streak tracker
  - perfect days
  - monthly completion breakdown
  - free habit tracker
---

# Habit calendar heatmap and consistency view

**The HabitForge Habit Calendar is a GitHub-style heatmap that paints one coloured square per day of the year, shaded by how much of that day's habits you completed.** Empty days stay grey; the more of the day's tracked habits you finished, the deeper green the square gets. It's the single best view for spotting your patterns at a glance — which months you showed up, where the gaps are, and how long your best run lasted. Above the grid, three stat cards summarise the year, and below it a month-by-month breakdown gives the same story in numbers. The heatmap is drawn with D3.js and scrolls horizontally on small screens.

## Use cases

### Seeing your year at a glance

A streak number tells you "31 days"; the heatmap shows you the *shape* of the year — a dense green March, a faded grey July, a strong finish in December. That visual is what most people find motivating, because gaps are impossible to hide from yourself.

### Isolating one habit

The habit filter lets you drop from "all habits" down to a single one. Switch to `Meditate` and the grid recolours to show only that habit's completion density. It's the fastest way to ask "am I actually consistent with this specific habit?" without the others masking the answer.

### Reviewing month by month

The Monthly Breakdown shows a card for each of the 12 months with its average completion rate and how many days you tracked. Green months sit at 75%+, amber months in the middle. It turns a wall of squares into a tidy scorecard you can scan in seconds.

## How to use it

1. Open the **Habit Calendar** page from the sidebar (or in the [live app](https://habitforge.aoneahsan.com)).
2. Use the year arrows in the header to move between years; you can't go past the current year.
3. Leave **Filter by habit** on **All Habits**, or pick one habit to recolour the grid for just that habit.
4. Read the three stat cards: **Active Days**, **Longest Streak**, and **Perfect Days**.
5. Hover (or tap) any square to see that day's date and "X of Y habits (Z%)" in the tooltip.
6. Use the **Less → More** legend to read the five shades, from grey (nothing tracked) to deep green (everything done).
7. Scroll down to **Monthly Breakdown** for each month's average completion rate and day count.

## FAQ

### What do the colours mean?

A grey square means no habits were tracked that day. From there, the green deepens with your daily completion rate: lighter green for lower rates and the darkest green when you completed all of the day's habits. The exact share is shown in the tooltip when you hover a square.

### What counts as a "Perfect Day"?

A Perfect Day is a day where your completion rate was 100% — every habit tracked that day was completed. The stat card counts how many such days you had in the selected year.

### How is the "Longest Streak" on this page calculated?

It's the longest run of consecutive days, within the selected year, on which you completed at least one habit. It's a quick year-scoped read of momentum. For per-habit streak logic and how missed days are handled, see the [streak engine](../habits/streak-engine).

### Why is a day grey even though I had habits?

Grey means nothing was tracked for that date — no completion records exist for it. If a habit wasn't scheduled or you didn't log it, the day has no data and stays grey rather than counting as a miss.

### Can I see more than one year?

Yes. The header arrows move between years, and each year is drawn as its own full heatmap. You can't navigate into the future, since there's no data there yet.

### Does the calendar work on mobile?

Yes. The full-year grid scrolls horizontally inside its card so it stays usable on narrow screens, and the stat cards and monthly breakdown stack responsively.

## Where to next

- [Wellness dashboard](./wellness-dashboard) — a 7-day score across habits, sleep, focus, and more.
- [Habits → Streak engine](../habits/streak-engine) — how streaks and missed days work per habit.
- [Habits → Complete and undo](../habits/complete-undo) — the completions that feed this heatmap.
- [To-do list](./todo) and [Morning routine](./morning-routine) — the productivity pages alongside this one.
