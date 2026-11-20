---
id: api
title: "The HabitForge API: Base Address, OpenAPI and Pagination"
description: "The HabitForge REST API: its base address, the OpenAPI 3.1 file that lists every route and field, cursor pagination and the error shape."
slug: /developers/api
sidebar_label: API reference
last_update:
  date: 2026-11-20
  author: Ahsan Mahmood
tags:
  - developers
---

# The HabitForge API

**One REST API for your habits, described in full by an OpenAPI file built from the same source.**

## What is the base address?

```text
https://tmccieiihtqinjsceqil.supabase.co/functions/v1/api/v1
```

```bash
curl -H "Authorization: Bearer $HABITFORGE_KEY" "https://tmccieiihtqinjsceqil.supabase.co/functions/v1/api/v1/habits?limit=5"
```

## Where is the full reference?

| File | Address |
|---|---|
| OpenAPI 3.1, JSON | [`/v1/openapi.json`](https://tmccieiihtqinjsceqil.supabase.co/functions/v1/api/v1/openapi.json) |
| The same, as Markdown | [`/v1/openapi.md`](https://tmccieiihtqinjsceqil.supabase.co/functions/v1/api/v1/openapi.md) |

Both come from the code the API runs, so neither lists a route that does not exist or misses one that does.

## What are the resources?

| Resource | What it holds | Can |
|---|---|---|
| `habits` | Your habits: cue, routine, reward, reminder, due days | list, get, create, update, delete |
| `habit_schedules` | Every schedule a habit has had; a new one starts today | list, get, create |
| `habit_pauses` | When each habit was paused and resumed | list, get, create, update |
| `checkins` | Every day you marked a habit done | list, get, create, delete |
| `settings` | Language, week start, time zone, reminders, appearance | list, get, update |
| `notifications` | Your notifications and whether you read them | list, get, update |
| `points` · `achievements` | What you earned and unlocked | list, get |
| `household` · `household_members` | Your household and who is in it | list, get |
| `friends` · `friend_posts` · `friend_comments` · `friend_likes` | Your friends and their activity, as your feed shows it | list, get |
| `challenges` · `challenge_members` | The challenges you joined and who takes part | list, get |
| `habit_days` · `challenge_days` · `calendar` | Your due days and challenge dates | list, get |

A check-in made through the API counts exactly like one made on the dashboard: the streak, the rope and the
points move the same way, and the check-in window applies.

## How does pagination work?

Lists come **20 rows a page**, **50 at most**. A page with more after it carries `meta.next_cursor`; send it
back as `cursor` for the next page. A cursor is a bookmark, so a check-in made while you read does not shift
the rows.

## What about limits and errors?

They are the same on every route: see [Access keys](./authentication.md#what-are-the-rate-limits).
