---
id: credits
title: Credits — the open-source technology behind HabitForge
description: HabitForge is built on open-source projects — React 19, TypeScript, Vite, Capacitor, Firebase, Radix UI, TanStack Router, D3, Zod, Zustand, Sentry, and more. With thanks.
sidebar_label: Credits
sidebar_position: 2
last_update:
  date: 2026-06-23
  author: Ahsan Mahmood
keywords:
  - habitforge credits
  - habitforge tech stack
  - open source acknowledgements
  - react capacitor firebase
  - radix ui tanstack router
  - d3 zod zustand
  - built with
---

# Credits

HabitForge stands on a lot of excellent open-source work. This page acknowledges the main projects the app and these docs are built with, and thanks the communities behind them. Versions below reflect the app's current dependencies; they move forward over time.

## Core framework and language

- **[React 19](https://react.dev/)** — the UI library powering the app, used with the React Compiler.
- **[TypeScript](https://www.typescriptlang.org/)** — static typing across the entire codebase.
- **[Vite](https://vite.dev/)** — the build tool and dev server for fast, modern bundling.

## Cross-platform and native

- **[Capacitor 8](https://capacitorjs.com/)** — the runtime that ships the same web codebase to native iOS and Android, plus its official plugins (app, browser, clipboard, device, dialog, haptics, local notifications, network, preferences, privacy screen, share, splash screen, toast).
- **[Capawesome Capacitor plugins](https://capawesome.io/)** — app review, app update, app shortcuts, badges, and Android edge-to-edge support.
- **[@codetrix-studio/capacitor-google-auth](https://github.com/CodetrixStudio/CapacitorGoogleAuth)** — native Google Sign-In on mobile.

## Backend, data, and reliability

- **[Firebase](https://firebase.google.com/)** — Authentication (Google Sign-In), Firestore (data storage with offline persistence), and Firebase Analytics.
- **[Amplitude](https://amplitude.com/)** — product analytics on the web surface.
- **[Sentry](https://sentry.io/)** — error and crash reporting (`@sentry/react`).

## UI, routing, forms, and visualization

- **[Radix UI Themes](https://www.radix-ui.com/themes)** — accessible, themeable component primitives behind the interface and theme customizer.
- **[TanStack Router](https://tanstack.com/router)** — type-safe routing and navigation.
- **[D3](https://d3js.org/)** — the data visualizations, including the habit-strength meter and heatmaps.
- **[react-hook-form](https://react-hook-form.com/)** with **[Zod](https://zod.dev/)** (via `@hookform/resolvers`) — performant forms with schema validation.
- **[Zustand](https://github.com/pmndrs/zustand)** — lightweight global state management.
- **[Lucide](https://lucide.dev/)** — the icon set.
- **[Fuse.js](https://www.fusejs.io/)** — fuzzy search.
- **[clsx](https://github.com/lukeed/clsx)** and **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** with **[Tailwind CSS](https://tailwindcss.com/)** — class composition and styling utilities.
- **[vite-plugin-pwa](https://vite-pwa-org.netlify.app/)** — progressive web app support.

## Browser extension

- **[WXT](https://wxt.dev/)** — the framework used to build the Chromium browser extension, again with React 19 and Radix UI Themes. The extension authenticates through the Chrome Identity API and bundles its analytics, with no remote scripts.

## This documentation site

- **[Docusaurus](https://docusaurus.io/)** — the framework that builds these public docs, with offline local search and a sitemap for discoverability.

## A word of thanks

Every project listed here is maintained by people who give their work away for others to build on. HabitForge — a free product — exists in large part because that ecosystem exists. If you maintain or contribute to any of the above: thank you. Trademarks and project names belong to their respective owners; their inclusion here is acknowledgement, not endorsement.

For the person who assembled all of this into HabitForge, see [About the author](./author).

## Where to next

- [About the author](./author) — who builds and maintains HabitForge.
- [Roadmap](../reference/roadmap) — what is shipped and what is planned.
- [Contact](./contact) — report an issue or send feedback.
- [Live app](https://habitforge.aoneahsan.com) — try HabitForge for free.
