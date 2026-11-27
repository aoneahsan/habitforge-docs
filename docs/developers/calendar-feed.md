---
id: calendar-feed
title: "Your HabitForge Habits and Challenges in Any Calendar App"
description: "Subscribe Google Calendar, Outlook or Apple Calendar to your HabitForge habit days and challenge dates with a read-only calendar feed, and stop it whenever you like."
slug: /developers/calendar-feed
sidebar_label: Calendar feed
last_update:
  date: 2026-11-20
  author: Ahsan Mahmood
topics:
  - developers
---

# Calendar feed

**A calendar feed puts your habit days and challenge dates in the calendar you already look at.** It updates by
itself and can only be read.

## How do you subscribe?

1. Open **Settings → Other apps → Calendar feed** and choose **Make a calendar feed**.
2. Copy its address.
3. In Google Calendar choose **Other calendars → From URL**; in Outlook **Add calendar → Subscribe from web**; on
   Apple Calendar **File → New Calendar Subscription**. Paste the address.

Calendar apps fetch a feed on their own schedule, often every few hours, so a change can take a while to appear.

## What is in it?

Each active habit on the days it is due, from a week back to eight weeks ahead, at its reminder time, and the
first and last day of each challenge you have joined. Paused habits drop out while the pause is open.

## Is the address a secret?

Yes. Anyone with it can read the feed, so treat it like a key: it carries its own `hf_cal_` token, which only reads
this one feed. You can see the address again under the [ten-minute rule](./authentication.md#can-you-see-a-key-again).

## How do you stop a feed?

**Remove** it under Settings → Other apps. The address stops working at once and your calendar app shows the
calendar as empty or unreachable.
