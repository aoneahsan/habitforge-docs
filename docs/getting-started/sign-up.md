---
id: sign-up
title: Sign up for HabitForge
description: Create a free HabitForge account in one click using Google Sign-In. No credit card, no email verification loop, no password to remember. Works on web, iOS, Android, and the browser extension.
sidebar_label: Sign up
sidebar_position: 4
last_update:
  date: 2026-05-10
  author: Ahsan Mahmood
keywords:
  - habitforge sign up
  - habitforge login
  - google sign in
  - free habit tracker account
---

# Sign up for HabitForge

**HabitForge uses Google Sign-In as the only authentication method.** There is no email-and-password registration, no magic-link flow, and no third-party identity provider beyond Google. Signing up takes one click, requires no credit card, and creates an account that works identically across the web, iOS, Android, and the browser extension.

This page covers what happens during sign-up, why HabitForge picked Google-only, the data the app reads from your Google account, and how to recover access if something goes wrong.

## What you need

- A Google account (personal Gmail or a Google Workspace account both work).
- Any modern browser (Chrome 100+, Firefox 100+, Safari 16+, Edge 100+) for the web flow, **or** the installed iOS / Android app, **or** the browser extension.
- An internet connection. Sign-up is the only HabitForge action that absolutely requires you to be online; once you are signed in, most features work offline.

You do **not** need:

- A credit card.
- A separate verification email.
- A phone number.
- Any HabitForge-specific username or password.

## Step-by-step on the web

1. Open [habitforge.aoneahsan.com](https://habitforge.aoneahsan.com) in your browser.
2. Click **Sign up**. (If you already have an account, **Log in** does the same thing — both routes converge on the same Google flow and detect existing accounts automatically.)
3. The Google sign-in popup or redirect opens. Pick the Google account you want to use.
4. Google's consent screen lists what HabitForge is asking for. Confirm.
5. You land on the **Dashboard**. That's it — the account is created and ready.

The redirect / popup behaviour depends on your browser. Safari and embedded browsers tend to use the redirect flow; Chrome and Firefox tend to use the popup flow. Both produce the same end result. If a popup is blocked, the page will show a button that explicitly opens the Google sign-in URL in a new tab.

## Step-by-step on iOS / Android

1. Install HabitForge from the App Store / Play Store. (Once published — see [Mobile install](/docs/mobile) for the current status of mobile distribution.)
2. Open the app.
3. Tap **Continue with Google**.
4. The native Google sign-in sheet opens. Pick your account, confirm.
5. The app lands on the dashboard.

On Android, HabitForge uses Google's native Sign-In APIs via the `@codetrix-studio/capacitor-google-auth` plugin so the consent screen looks exactly like every other Android Google sign-in. On iOS the flow uses `ASWebAuthenticationSession` for the same reason.

## Step-by-step in the browser extension

1. Install the HabitForge extension from the Chrome Web Store (see [Browser extension install](/docs/extension)).
2. Click the extension icon in the toolbar.
3. Click **Sign in with Google** in the popup.
4. The Chrome Identity API takes over — a Google sign-in tab opens, you pick an account, and the tab closes itself.
5. The extension popup refreshes and shows your dashboard summary.

The extension does **not** load the Firebase Auth SDK or any remote script. It uses [Chrome's Identity API](https://developer.chrome.com/docs/extensions/reference/api/identity) directly, returns an OAuth access token, and authenticates Firestore reads with that token. This is a deliberate choice required for Chrome Web Store policy compliance.

## What HabitForge reads from your Google account

The Google consent screen lists the exact scopes. By default HabitForge requests:

- **Basic profile** — your name, email, and profile picture. Used to greet you in the app and to show "your" avatar in the corner. Stored in your HabitForge profile document.
- **Drive file scope** (`drive.file`) — *only* if you opt into the optional [Google Drive backup](/docs/theme) feature for journals. The `drive.file` scope is the narrowest possible: HabitForge can only see files it created in your Drive, not your existing files. You can revoke this scope at any time from Google Account → Security → Third-party apps without affecting the rest of HabitForge.

HabitForge does **not** request:

- Read access to your Gmail, Calendar, Contacts, or Photos.
- Permission to send email on your behalf.
- Your YouTube history, Maps history, or any browsing data.

If a future feature requires a new scope, the consent screen will list it before the feature can be used — Google enforces this at the OAuth layer.

## What gets created on sign-up

On the very first sign-in, HabitForge creates:

- A Firestore document in the `hf_users` collection with your `uid`, name, email, profile picture URL, and the timestamp.
- A default settings document in `hf_user_settings` with sensible defaults (light mode follows your system preference, notifications off, default difficulty = medium).
- An empty habits list. There are no demo habits or sample data inserted.

Existing accounts are detected by Google `uid`. If you sign up with a Google account you used before, HabitForge will load your existing data instead of creating a new account.

## Why Google-only?

Three reasons:

1. **Better security than passwords.** Google handles password rotation, suspicious-login detection, and 2FA enforcement on your account. HabitForge does not store a password — there is nothing to phish or leak.
2. **Compliance with the browser-extension marketplace.** Chrome Web Store policy disallows extensions that load remote auth scripts (Firebase Auth's `signInWithPopup` and `signInWithRedirect` are remote-script loaders). To make the extension shippable at all, the auth flow had to be Chrome Identity API-based — and that is essentially Google-only.
3. **Lower onboarding friction.** No email verification round trip, no "forgot password" flow, no breach risk on our end.

The honest tradeoff: if you do not have a Google account and do not want to create one, HabitForge is not for you today. There is no plan to add other providers in the near term.

## Common issues

### "Account exists with a different credential"

You probably have a HabitForge account under a different Google account on the same device. Sign out of HabitForge fully (clear the Google session if needed) and sign back in with the right account.

### Popup blocked

Allow popups for `habitforge.aoneahsan.com`, or use the redirect flow shown after the popup-blocked notice. Mobile browsers sometimes never allow popups; the redirect flow is automatic there.

### Stuck on the Google consent screen

Hard-reload the page (`Ctrl+Shift+R` / `Cmd+Shift+R`). If the issue persists, sign out of all Google accounts in that browser and try again.

### Two-factor prompt loop

Google's 2FA for unrecognised devices can fire repeatedly. Approve from the device Google asked you to approve from (usually your phone) and the loop ends.

### "Permission denied" from Firestore

This is the same root cause as the credential mismatch — your client side has a token from a different account than the Firestore document expects. Sign out, clear cookies for `habitforge.aoneahsan.com`, sign back in.

## Frequently asked questions

### Can I sign up with email and password?

Not currently. See "Why Google-only?" above.

### Can I have multiple HabitForge accounts?

Yes. Each Google account is a separate HabitForge account. You can switch by signing out and signing back in with a different Google identity.

### What if I lose access to my Google account?

HabitForge has no other recovery path. If you anticipate losing access, export your data periodically (see [Account basics](./account-basics)) so you can restore it under a new account.

### Does HabitForge see my password?

No. Google handles authentication; HabitForge only ever receives an OAuth token, never your password.

### Will HabitForge ever email me?

Only for transactional reasons (e.g., a security event you triggered). HabitForge does not run a marketing newsletter.

### Can I delete my account?

Yes — on any device, go to **Profile → Delete account**. This removes your Firestore documents and revokes the Google authorisation. See [Privacy basics](./privacy-basics) for the exhaustive deletion semantics.

### Can I sign up with a Google Workspace account?

Yes. Workspace accounts behave the same as personal Gmail accounts. Some organisations restrict Google sign-in to apps the admin has approved — in that case ask your admin to approve `habitforge.aoneahsan.com` (the sign-in client ID is shown on the Google consent screen).

### Why do I see a different consent screen on mobile vs web?

Apple and Google both render the consent screen themselves on their platforms. The text is the same; the styling is platform-native.

## Where to next

- [First habit walkthrough](./first-habit) — your first five minutes inside the app.
- [Account basics](./account-basics) — profile, multi-device sync, sign-out.
- [Privacy basics](./privacy-basics) — what we store and how to delete it.
- [What is HabitForge](./what-is-habitforge) — product overview.
