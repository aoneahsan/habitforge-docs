---
id: quick-add
title: Quick-add habit completions from your browser
description: Log a habit completion fast from the HabitForge extension — one-click check-ins in the popup and the Alt+Shift+C quick-complete keyboard shortcut.
sidebar_label: Quick add
sidebar_position: 3
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
keywords:
  - quick add habit
  - one-click habit completion
  - quick complete shortcut
  - keyboard shortcut habit
  - log habit completion
  - alt shift c
  - browser habit check-in
---

# Quick-add habit completions from your browser

**"Quick-add" in the HabitForge extension means logging a habit *completion* for today as fast as possible — either by clicking the complete control next to a habit in the popup, or by pressing a keyboard shortcut that marks a designated habit done without opening anything.** It is about recording that you *did* the habit, not creating a new habit definition. Creating, naming, and scheduling habits happens in the [HabitForge web and mobile app](../habits/create); the extension reads those habits and gives you the quickest possible way to tick them off during your browser day. This page covers both quick paths and their honest limits.

For the full popup tour, see [the popup guide](./popup). For how completions reach your other devices, see [Sync](./sync).

## Use cases

### Ticking off a "read the news" habit in the moment

You finish your morning reading habit while already in the browser. One click in the popup records it — no context switch, no app to open.

### Keyboard-only logging

If you keep your hands on the keyboard, the quick-complete shortcut lets you mark a chosen habit done without reaching for the mouse or opening the popup at all.

### Catching up at end of day

Open the popup once in the evening and click through everything you completed but forgot to log. The progress summary updates as you go.

## The two quick paths

### One-click completion (popup)

The most reliable path. Open the popup, and each of today's habits has a complete control beside it. One click marks the habit done, advances the streak, updates the progress summary, and clears or decrements the toolbar badge. This works for any habit due today and needs no configuration.

### Quick-complete keyboard shortcut

The extension registers a **quick-complete** command, by default **Alt+Shift+C**. When pressed, it completes a single *designated* quick-complete habit and shows a brief "Habit Completed!" confirmation notification — all without opening the popup.

Two honest caveats:

- It targets one designated habit, not the whole list. If no quick-complete habit is configured for your account, the shortcut has nothing to act on and does nothing.
- The shortcut is a browser-level command. You can view and rebind it at `chrome://extensions/shortcuts` (or the equivalent on Edge/Brave).

A second shortcut, **Alt+H**, simply opens the HabitForge popup — handy as a keyboard entry point before clicking through completions.

## Step-by-step: one-click completion

1. Click the HabitForge toolbar icon to open the popup.
2. Sign in with Google if you have not already.
3. Find the habit under **Today's Habits**.
4. Click its complete control. The habit marks done and the summary updates.
5. Repeat for any other completed habits, then close the popup.

## Step-by-step: use the quick-complete shortcut

1. Make sure you are signed in (open the popup once per browser profile).
2. Press **Alt+Shift+C**.
3. If a quick-complete habit is configured, it is marked done and a short confirmation notification appears.
4. Open the popup any time to confirm the completion and streak.

## Step-by-step: rebind the shortcut

1. Open `chrome://extensions/shortcuts` in your browser.
2. Find **HabitForge** in the list.
3. Click the shortcut field for "Quick complete current habit" and press your preferred key combination.
4. The new binding takes effect immediately.

## Honest limits

- **The extension cannot create habits.** Quick-add is completion-only. Use the [Create a habit](../habits/create) flow in the app first; new habits then appear in the extension after sync.
- **One-click is per-habit; the shortcut is single-target.** There is no "complete all" button — completing several habits means several clicks (or several shortcut presses if you reconfigure the target).
- **Offline still works, with a delay.** A completion made offline is queued locally and synced on reconnect; until then it shows in the popup's pending-sync count. See [Sync](./sync).

## FAQ

### What is the difference between quick-add and quick-complete?

They describe the same goal — recording a completion fast. "Quick-add" is the user-facing idea of adding today's completion; "quick-complete" is the literal name of the keyboard command (Alt+Shift+C) that does it for one designated habit.

### Can I undo a completion I added by mistake?

Undo is handled in the main app. Open the [web or mobile app](../habits/complete-undo) and toggle the completion off; the change syncs back to the extension. The popup itself focuses on marking done.

### The Alt+Shift+C shortcut did nothing — why?

Most likely no quick-complete habit is designated for your account, so the command has no target. Use one-click completion in the popup, which always works. Also confirm you are signed in and the shortcut is not claimed by another extension at `chrome://extensions/shortcuts`.

### Do quick completions count toward streaks?

Yes. A completion logged from the extension is the same record as one logged in the app, so it feeds the [streak engine](../habits/streak-engine) identically.

### Will the shortcut work on any web page?

Browser command shortcuts work globally while the browser is focused, but some pages and other extensions can claim the same combination. If it conflicts, rebind it.

## Where to next

- [Using the popup](./popup) — the full toolbar window.
- [Create a habit](../habits/create) — where habits are actually defined.
- [Complete and undo](../habits/complete-undo) — completion semantics in the main app.
