---
id: setup
title: Setting up your white-label copy
description: The steps from paying for a HabitForge licence to your copy going live on your own domain with your name, logo and colours.
sidebar_label: Setting up your copy
last_update:
  date: 2026-11-14
  author: Ahsan Mahmood
tags:
  - white-label
keywords:
  - white label setup
  - custom domain habit app
---

# Setting up your copy

**Nothing is set up until we confirm your payment.** You pay by bank transfer to our Wise account and send the transfer reference from the payment page. The licence is issued once we confirm it, and its key and certificate arrive at the email you gave with your order. The page you land on after paying reads the order once; the email is what counts.

## 1. Your brand

We ask for what is still missing: the domain you want, your logo (an SVG if you have one), your colours and the name your members know you by. The domain can be one you already own; you add the DNS record we send you.

## 2. Your copy goes live

We deploy HabitForge on that domain with your name on every screen, on the emails it sends and on the app icon. The copy serves a licence file at `/.well-known/habitforge-white-label-license.json` and a copy of its certificate beside it.

## 3. The Android app, if you licensed mobile

We build the Android app under your name and icon. It is published through a Google Play developer account in your name, so the listing, the reviews and the store fees are yours.

## 4. Anyone can check it

From the day the licence is active, its key answers on [the verify page](./verify.md).
