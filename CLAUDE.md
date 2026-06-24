# HabitForge Docs — Project Guide (CLAUDE.md)

**Last Updated**: 2026-06-23

Public documentation / knowledge-base site for **HabitForge** (the habit-tracking + wellness app). This repo is **public**; the HabitForge app source is **private**. The docs exist so users, contributors, and search/AI engines (Google, Bing, ChatGPT, Perplexity, Claude, Gemini) can discover and learn about HabitForge.

- **Live docs**: https://habitforge-docs.aoneahsan.com
- **Parent app**: https://habitforge.aoneahsan.com
- **Repo (declared)**: https://github.com/aoneahsan/habitforge-docs (public, MIT)

---

## Task Speed Over Docs (IRON-SOLID — BEHAVIORAL)

Finish the real task fast + correctly FIRST; docs/trackers/sync are a footnote (≤~20% of effort) — never let recording outpace the fix. HARD STOP when doc work outpaces the change → ship, then ONE line if anything. No new summary/status/completion files unless asked; edit/delete over add; delete stale docs. Full rule: `~/.claude/CLAUDE.md`. (Est. 2026-06-19)

---

## What this is

- **Framework**: Docusaurus 3 (`@docusaurus/core` ^3.10.1), React 19, TypeScript ~6.0.
- **Search**: `@easyops-cn/docusaurus-search-local` (offline local search — no Algolia signup).
- **Content**: 66 Markdown doc pages (2026-06-23 — all batches landed): `intro` + getting-started ×8, habits ×7, trackers ×8, timers ×4, journals ×4, productivity ×4, theme & accessibility ×8, extension ×5, mobile ×4, account ×3, reference ×3 (faq/roadmap/changelog), legal ×4, about ×3. All sidebar categories are now fully wired (no commented-out items).
- **AEO/SEO**: `robots.txt` (AI-bot allowlist + sitemap directive), `llms.txt` (llmstxt.org format, `/docs/*` URLs), `pricing.md` (machine-readable, "free" tier), site-wide JSON-LD (`WebSite` + `Organization` + `Person` + `SoftwareApplication`), Docusaurus sitemap plugin. Every page carries distinct `title`/`description`/`keywords` + `last_update` front-matter.
- **Deploy target**: Firebase Hosting (free tier) — `firebase.json` ready; CI in `.github/workflows/`. Docusaurus `organizationName/projectName` also set for optional gh-pages deploy.
- **Brand**: orange→red "fire" gradient (`#F97316` → `#DC2626`), light + dark mode.

---

## Build & verify (one-shot only — NEVER run dev/preview servers)

```bash
yarn install        # Yarn 4 / Berry (packageManager: yarn@4.14.1)
yarn typecheck      # tsc --noEmit
yarn build          # docusaurus build (writes ./build)
```

- `yarn build` is **clean** (`[SUCCESS]`, 0 broken-link warnings). As of 2026-06-23 all content batches landed, so `onBrokenLinks` is now `'throw'` (regressions fail the build). `onBrokenAnchors` stays `'warn'` (cross-page heading anchors are fragile). The only remaining build warning is the harmless Docusaurus-v4 `onBrokenMarkdownLinks` deprecation notice.
- Per workspace policy the dev server (`yarn start`) is **not** auto-run by tooling — run it yourself to preview.

---

## Package Manager Hierarchy: nvm → npm (global) → yarn (local) (IRON-SOLID)

Three tiers, each tool ONLY for its tier — for the best, most reproducible dev results:
- **`nvm`** → install/update Node.js (which bundles `npm`): `nvm install --lts`. Use nvm to get/update `npm` itself.
- **`npm`** → ALL global packages: `npm install -g yarn` (install yarn globally if missing) + `npm install -g <pkg>` (every other global CLI).
- **`yarn`** → ALL local project work: `yarn`, `yarn add <pkg>`, `yarn add -D <pkg>` inside the project.

❌ NEVER use `npm`/`pnpm` for LOCAL installs. NEVER use `pnpm` at all. ✅ Only `yarn.lock` in the project — delete `package-lock.json` and `pnpm-lock.yaml`.

---

## Package Upgrades: Use `npm-check-updates`

For dependency upgrades use `npx -y npm-check-updates -u && yarn install` (latest STABLE), NOT `yarn upgrade --latest`. Full rule in global `~/.claude/CLAUDE.md`. Last applied: 2026-05-29 (all deps already current — no changes).

---

## Portfolio Info File — Weekly Update Rule

- Canonical portfolio info file: `/home/ahsan/Documents/ahsan-notebook/static/assets/personal/projects-info-as-portfolio-item/apps/HABITFORGE-DOCS_portfolio-info_<YYYY-MM-DD>.md`
- Update at least once per week (and on any material change). Keep the last-updated date in the filename.
- Keep a max-10-entry update history inside the file. On each refresh: prepend today's row, delete the previous dated file, write the new one.
- Tracker: `/home/ahsan/Documents/01-code/docs/tracking/portfolio-info-files-update-tracker.json`
- Last applied: 2026-05-29

---

## Share Feature — Web + Mobile Contract (IRON-SOLID)

All user-facing "share" actions follow the global contract: **web** (any browser, incl. mobile web) opens an in-app `WebShareModal` — a social grid (X, Facebook, LinkedIn, WhatsApp, Telegram, Reddit, Email web-intents) + a copy-link button; **native** (Capacitor) uses the OS share sheet via `@capacitor/share`. The web-vs-native split is decided at button-click via `Capacitor.isNativePlatform()`. ❌ Never use `navigator.share` as the primary web path with a silent clipboard fallback. **Full spec: `~/.claude/rules/share-feature.md`.**

---

## Gitignore Hygiene (IRON-SOLID)
`.gitignore` stays current with the project structure — ignore only recoverable artifacts (build/`dist`/`www`/`node_modules`/logs/caches/IDE), never lose source. Custom rules always present: `*.ignore.*`, `project-record-ignore/`. This is a **PUBLIC** repo -> secrets/`.env`/keystores are NEVER tracked.
Full rule + private/public protocol: `~/.claude/rules/project-config.md`.
Gitignore Last Verified: 2026-06-24

---

## Notes

- Identifiers for app stores / Capacitor app id / npm: **N/A** for this docs site (those belong to the parent HabitForge app, not the docs).
- Sitemap is regenerated on every `yarn build` (29 URLs as of 2026-05-29).
- Editing docs: every page needs `title`, `description`, and `last_update.date` front-matter; feature pages target ~1000 words (definition-first intro, use cases, numbered how-it-works, examples, FAQ, tips, 6–8 internal links).
