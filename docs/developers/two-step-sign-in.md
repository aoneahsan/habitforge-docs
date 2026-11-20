---
id: two-step-sign-in
title: "Two-Step Sign-In for Your HabitForge Account"
description: "Turn on two-step sign-in for HabitForge with an authenticator app: recovery codes, remembering a browser for seven days, where a code is asked for, and what to do when the phone is lost."
slug: /developers/two-step-sign-in
sidebar_label: Two-step sign-in
last_update:
  date: 2026-11-20
  author: Ahsan Mahmood
tags:
  - developers
---

# Two-step sign-in

**Two-step sign-in adds a six-digit code from your phone after Google,** so a stolen Google session is not enough
to open your habits, your keys or your connected apps.

## How do you turn it on?

1. Open **Settings → Security** and choose **Set up two-step sign-in**.
2. Scan the code with an authenticator app (Google Authenticator, 1Password, Authy or any TOTP app), or type the
   key it shows.
3. Enter the six digits it gives you.
4. Save the ten recovery codes, then tick that you saved them.

## What are recovery codes for?

Each one signs you in once without your phone. HabitForge shows them when you turn two-step on and never again;
**New codes** replaces the whole set. Keep them somewhere that is not the phone, such as a password manager. Using
one emails you, so you know if it was not you.

## What does "Remember this browser" do?

On the code screen you can tick **Remember this browser for 7 days**. It is off unless you tick it. For that week
this browser skips the code; Google is still asked every time. A remembered browser never counts for showing a
key again or for admin pages, which always want a fresh code. **Settings → Security** lists the browsers you
remembered, and **Forget** ends one at once.

## Where else does it ask for a code?

Before HabitForge shows an access key, a webhook secret or a feed address again, and when you approve an
assistant. An assistant that may only read skips the code on a browser you remembered; one that may change or
delete anything always asks.

## Lost your phone and your codes?

Write to us from [Help](https://habitforge.aoneahsan.com/help). Support checks it is you before turning two-step
sign-in off, gives you a reference starting `HF-`, and HabitForge emails you when it is done, so you can set it
up again on the new phone.

## Do admins have to use it?

Yes. HabitForge's own team cannot open an admin page without a code entered in that same sign-in.
