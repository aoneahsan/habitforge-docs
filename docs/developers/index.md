---
id: index
title: "HabitForge for Developers: API, MCP, Webhooks and Two-Step"
description: "Use HabitForge from a script, an AI assistant, another app or your calendar: one API, one assistant connection, signed webhooks, and two-step sign-in to guard it all."
slug: /developers
sidebar_label: Overview
last_update:
  date: 2026-11-20
  author: Ahsan Mahmood
tags:
  - developers
---

# HabitForge for developers

**Your habits do not have to live only in HabitForge.** A spreadsheet can tally your check-ins every morning,
Claude can check you in when you tell it you went for a run, and your own server can hear the moment a streak
ends. Everything here works on every plan, Free included, and every door opens only as far as you tick.

## Which one do you need?

| You want | Use |
|---|---|
| A script or an app of yours to read or change your habits | An [access key](./authentication.md) and the [API](./api.md) |
| Claude, ChatGPT, Claude Code or Cursor to work with your habits | The [MCP connection](./mcp.md) |
| Your server told when something changes | [Webhooks](./webhooks.md) |
| Your habit days and challenge dates in Google Calendar, Outlook or Apple Calendar | A [calendar feed](./calendar-feed.md) |
| Your account kept safe while all of this is switched on | [Two-step sign-in](./two-step-sign-in.md) |

## What can it reach?

- **Yours, in full:** habits, their schedules and pauses, check-ins, settings and notifications. Points and
  achievements can be read; they are earned, never written.
- **Shared, read only:** the household you belong to, your friends and their posts as your feed shows them, and the
  challenges you have joined. Nothing outside HabitForge posts, comments, likes, invites, joins or leaves.
- **Never:** anyone else's habits, anything an admin sees, and your payments.

## What holds whichever way you use?

- A key or an assistant acts as you and no further. The database checks every row against your account, so a
  connection cannot reach what your own screen cannot.
- Deleting is never on by default. It is a separate tick, and an assistant that wants to delete something sends
  you to HabitForge to confirm it first.
- Every key, connection and webhook address is listed under **Settings → Other apps**, where you can remove it at
  once. You get an email when one is added.

| Limit | Free | Pro | Family |
|---|---|---|---|
| Access keys | 5 | 25 | 50 |
| API requests a day | 5,000 | 50,000 | 100,000 |
| Webhook addresses | 3 | 20 | 40 |
| Assistant connections | 3 | 10 | 25 |
| Calendar feeds | 2 | 10 | 20 |
