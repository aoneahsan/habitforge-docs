---
id: webhooks
title: "HabitForge Webhooks: Events, Signatures and Retries"
description: "Have HabitForge post to your server when a habit, check-in, pause or achievement changes: the events, the Standard Webhooks signature, retries and how to test."
slug: /developers/webhooks
sidebar_label: Webhooks
last_update:
  date: 2026-11-20
  author: Ahsan Mahmood
tags:
  - developers
---

# Webhooks

**HabitForge tells your server when something changes in your account, signed so your server can check it came
from us.** Add an address under **Settings → Other apps → Webhooks**, choose its events, and check the signature on
every request.

## Which events are there?

Webhooks cover your own account. Nothing shared (household, friends, challenges) sends one.

| Event | Sent when |
|---|---|
| `habit.created` · `habit.updated` · `habit.deleted` | You add, change or delete a habit |
| `habit.paused` · `habit.resumed` | You pause a habit or it resumes |
| `completion.created` · `completion.deleted` | You check in, or undo a check-in |
| `achievement.unlocked` | You unlock an achievement |
| `webhook.test` | You send a test event |

Each payload carries the same fields the API returns for that record, no more. The
[OpenAPI file](./api.md#where-is-the-full-reference) lists them.

## Which addresses are accepted?

- `https://` only, on port 443 or 8443.
- Never a private or local address: `localhost`, `127.0.0.1`, `10.x.x.x`, `192.168.x.x`, link-local addresses or
  cloud metadata addresses. A host name that resolves to one of them is refused too, at registration and at send.

## What does a request carry?

HabitForge follows [Standard Webhooks](https://www.standardwebhooks.com/). Each request has `webhook-id` (the
same on every retry: use it to ignore a repeat), `webhook-timestamp` (seconds since 1970) and
`webhook-signature` (`v1,` and a base64 HMAC-SHA256; more than one during a secret rotation).

The signing secret starts `whsec_`. You can see it again under the same
[ten-minute rule](./authentication.md#can-you-see-a-key-again) as a key. Rotating signs with both secrets for 24
hours.

## How do you check a request?

Check before you parse, against the exact bytes you received.

```js
import { Webhook } from 'standardwebhooks';

const wh = new Webhook(process.env.HABITFORGE_WEBHOOK_SECRET); // the whsec_… value

app.post('/hooks/habitforge', express.raw({ type: 'application/json' }), (req, res) => {
  let event;
  try {
    event = wh.verify(req.body, req.headers); // throws on a bad signature or an old timestamp
  } catch {
    return res.sendStatus(400);
  }
  if (alreadyHandled(req.headers['webhook-id'])) return res.sendStatus(200);
  queue.add(event); // answer fast, do the work later
  res.sendStatus(200);
});
```

In any other language: decode the secret after `whsec_` from base64, sign
`webhook-id + "." + webhook-timestamp + "." + raw body` with HMAC-SHA256, base64 it, compare it with each `v1,`
value in constant time, and refuse a timestamp more than 300 seconds away from now.

## What if your server does not answer?

Any `2xx` counts as delivered. Anything else is a failed attempt, retried at once, then after 5 seconds, 5
minutes, 30 minutes, 2 hours, 5 hours, 10 hours and 10 hours. A delivery that fails all eight stays in the log,
ready to send again.

An address is turned off only by **`410 Gone`** (at once; answer with it when you retire an address) or by **5
days of failing** without one delivery getting through. HabitForge emails you the last error when it does.

## How do you test, replay and pause?

**Send a test event** posts `webhook.test` now. The **delivery log** lists every attempt with its status, the
response code and when the next retry is due. **Send again** repeats a delivery with the same `webhook-id`.
**Pause** stops sending until you resume.
