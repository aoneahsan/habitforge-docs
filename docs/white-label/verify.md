---
id: verify
title: Verify a HabitForge licence
description: Every licensed HabitForge copy serves a licence file. Check a licence by its key or by the domain the copy runs on.
sidebar_label: Verify a licence
last_update:
  date: 2026-11-13
  author: Ahsan Mahmood
tags:
  - white-label
keywords:
  - verify habitforge licence
  - licence key check
---

# Verify a licence

**Anyone can check whether a copy of HabitForge is licensed.** Open [the verify page](https://habitforge.aoneahsan.com/verify-license) and paste either the licence key or the domain the copy runs on. The answer comes from our licensing service, never from the copy itself.

## The licence file

Every licensed copy serves a small file at:

```text
https://<the copy's domain>/.well-known/habitforge-white-label-license.json
```

It names the product, the licence key, the licensee and the domain, and links straight to the verify page with the key filled in. The certificate sits beside it as a PDF.

## What the check shows

The licensee's name, the platforms, the domains and the dates: when it was issued and how long its updates run. It never shows an email address or a price.

| Answer | What it means |
| --- | --- |
| Active licence | The key is real and the licence is in force |
| Issued, not set up yet | Paid for; the copy is still being set up |
| Revoked | The licence was ended, for use outside its terms |
| A real licence, but not for this domain | The file names a valid key that does not cover that domain |
| No licence file on this domain | The domain serves no licence file |
