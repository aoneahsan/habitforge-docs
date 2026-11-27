---
id: mcp
title: "Connect Claude, ChatGPT, Claude Code or Cursor to HabitForge"
description: "Connect an AI assistant to HabitForge through MCP: the address, the steps for Claude, ChatGPT, Claude Code and Cursor, what the consent page asks, and how removals are confirmed."
slug: /developers/mcp
sidebar_label: AI assistants (MCP)
last_update:
  date: 2026-11-20
  author: Ahsan Mahmood
topics:
  - developers
---

# Connect an AI assistant (MCP)

**Claude, ChatGPT and other assistants can read your habits and check you in when you ask them to.** Tell it
*"I meditated this morning"* and it checks the habit in; ask *"which habits have I missed this week?"* and it reads
your check-ins. Each assistant sends you to a HabitForge page first, where you choose what it can reach.

## What is the address?

```text
https://tmccieiihtqinjsceqil.supabase.co/functions/v1/mcp
```

It is also under **Settings → Other apps**, with a copy button. You never paste a key into an assistant.

## How do you connect each assistant?

These apps move their menus between releases. If a step does not match what you see, look for **Connectors**
in the app's settings.

### Claude

1. In Claude, open **Settings → Connectors** and choose **Add custom connector**.
2. Name it HabitForge and paste the address above.
3. Press **Connect**. Claude opens a HabitForge page; tick what it may reach and approve.

### ChatGPT

1. In ChatGPT, open **Settings → Apps and connectors**, and turn on developer mode under **Advanced**.
2. Choose **Create**, name it HabitForge and paste the address above.
3. When ChatGPT opens a HabitForge page, tick what it may reach and approve.

### Claude Code

```bash
claude mcp add --transport http habitforge https://tmccieiihtqinjsceqil.supabase.co/functions/v1/mcp
```

Then type `/mcp` inside Claude Code and choose **habitforge** to sign in.

### Cursor

Add this to `~/.cursor/mcp.json`, save, and press the sign-in button Cursor shows beside HabitForge:

```json
{ "mcpServers": { "habitforge": { "url": "https://tmccieiihtqinjsceqil.supabase.co/functions/v1/mcp" } } }
```

## What does the consent page ask?

It names the app, shows the address it will send you back to, and lists what it may reach in the same groups
as an [access key](./authentication.md#what-do-the-scopes-mean): **Read** ticked, **Change** and **Delete** not.
You can give it a label, such as *Claude on my laptop*. Nothing is shared until you approve.

## How are removals handled?

An assistant never deletes in one step. When it wants to delete a habit or undo a check-in, it gets a link to a
HabitForge page that shows exactly what would go; you remove it there, or leave it and the request runs out on
its own after ten minutes.

## How do you disconnect it?

**Settings → Other apps → Connected apps → Remove.** The assistant is cut off at once, even mid-conversation.
