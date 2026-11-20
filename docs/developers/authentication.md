---
id: authentication
title: "HabitForge Access Keys: Scopes, Expiry and Rate Limits"
description: "Make a HabitForge access key, choose what it may read, change or delete, see it again within ten minutes of signing in, and keep inside the rate limits."
slug: /developers/authentication
sidebar_label: Access keys
last_update:
  date: 2026-11-20
  author: Ahsan Mahmood
tags:
  - developers
---

# Access keys

**An access key lets your own script use HabitForge as you, within what you tick.** It starts `hf_pat_` and
goes in the `Authorization` header.

## How do you make a key?

1. Open **Settings → Other apps** and choose **Make a key**.
2. Name it after where it will live, for example *Morning tally to my spreadsheet*.
3. Tick what it may do, group by group. **Read** is ticked for you; **Change** and **Delete** are not.
4. Choose how long it lasts: 30, 90 or 365 days. A key that can only read may also never expire.
5. Copy it. HabitForge shows it in full this once.

## Can you see a key again?

Yes, within **ten minutes of signing in**. After that HabitForge asks you to sign in again, then shows it. With
two-step sign-in on, it also asks for a code. Someone who finds your laptop open an hour later cannot read your
keys off the screen.

## What do the scopes mean?

| Scope | Lets a key |
|---|---|
| `habits:read` · `habits:write` · `habits:delete` | See, change, and delete your habits, their schedules and pauses |
| `checkins:read` · `checkins:write` · `checkins:delete` | See your check-ins, check in, and undo a check-in |
| `settings:read` · `settings:write` | See and change your settings |
| `notifications:read` · `notifications:write` | See your notifications and mark them read |
| `points:read` · `achievements:read` | See your points and the achievements you unlocked |
| `household:read` · `friends:read` · `challenges:read` | See your household, your friends' activity and your challenges, read only |
| `calendar:read` | Read your habit days and challenge dates together |

## How do you replace or remove a key?

**Replace** issues a new key and keeps the old one working for 24 hours, so a script can be moved over without a
gap. **Remove** stops a key at once.

## How does an app connect without a key?

An assistant or another app uses the [MCP connection](./mcp.md): it sends you to a HabitForge page, you tick what
it may reach, and it never sees a key at all.

## What are the rate limits?

Each key and each connected app may send **120 requests a minute**. Your account also has a daily total, set by
your plan and shared by every key and app, so making more keys never raises it. The headers `RateLimit-Limit`,
`RateLimit-Remaining` and `RateLimit-Reset` say where you stand; past a limit the API answers `429` with
`Retry-After`.

## What does an error look like?

```json
{ "error": { "code": "scope_required", "message": "This credential needs the habits:delete permission.", "details": { "scope": "habits:delete" }, "correlation_id": "req_…" } }
```

Program against `code`; `message` is for people. A HabitForge rule, such as your plan's habit limit, answers
`409 conflict` with the rule in `message`. Quote the `correlation_id` if you write to us about a request.

| Status | Usually means |
|---|---|
| `400` | A field is missing or not allowed |
| `401` | The key is missing, expired or removed |
| `403` | The key lacks a scope, or you need to sign in again to see a key |
| `404` | Nothing of yours at that address |
| `409` | A HabitForge rule refused the change |
| `429` | Too many requests; wait for `Retry-After` |
