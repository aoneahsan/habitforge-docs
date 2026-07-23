# HabitForge Docs — Project Guide (AGENTS.md)

**Last Updated**: 2026-07-23

Public documentation / knowledge-base site for **HabitForge** (a habit tracker that shows your consistency as a rope — web app + Android; no iOS, no browser extension). This repo is **public**; the HabitForge app source is **private**. The docs exist so users, contributors, and search/AI engines (Google, Bing, ChatGPT, Perplexity, Claude, Gemini) can discover and learn about HabitForge.

- **Live docs**: https://habitforge-docs.aoneahsan.com
- **Parent app**: https://habitforge.aoneahsan.com
- **Repo (declared)**: https://github.com/aoneahsan/habitforge-docs (public, MIT)

---

## Task Speed Over Docs (IRON-SOLID — BEHAVIORAL)

Finish the real task fast + correctly FIRST; docs/trackers/sync are a footnote (≤~20% of effort) — never let recording outpace the fix. HARD STOP when doc work outpaces the change → ship, then ONE line if anything. No new summary/status/completion files unless asked; edit/delete over add; delete stale docs. Full rule: `~/.claude/CLAUDE.md`. (Est. 2026-06-19)

---

## What this is

- **Framework**: Docusaurus 3 (`@docusaurus/core` ^3.10.1), React 19, TypeScript ~6.0, Yarn 4.
- **Search**: `@easyops-cn/docusaurus-search-local` (offline local search — no Algolia signup).
- **Content**: 16 Markdown doc pages describing the REAL app (rewritten 2026-07-23): `intro` + `getting-started`, `habits/` ×5 (create, check-ins-and-streaks, rope-strength, levels-and-points, manage), `features/` ×4 (analytics, achievements, community, themes), `apps/` ×2 (install-and-offline, android), `reference/` ×3 (changelog, privacy-and-terms, support), plus 4 generated-index category pages. **HabitForge has NO trackers/timers/journals/browser-extension/iOS** — the old generic-template content (extension, timers, trackers, journals, productivity, mobile-iOS, etc.) was deleted 2026-07-23.
- **AEO/SEO**: `robots.txt` (AI-bot allowlist + sitemap directive), `llms.txt` (llmstxt.org format), `pricing.md` (machine-readable, costs-nothing), site-wide JSON-LD (`WebSite` + `Organization` + `Person` + `SoftwareApplication`), Docusaurus sitemap plugin. Every page carries distinct `title`/`description` + `last_update` front-matter.
- **Deploy target**: **GitHub Pages** (public repo) on the custom domain `habitforge-docs.aoneahsan.com` via `static/CNAME` + `.github/workflows/deploy.yml` (build on push to `main`). `firebase.json` is kept only as an alternative host config.
- **Brand**: orange→red "fire" gradient (`#F97316` → `#DC2626`), light + dark mode.

---

## Build & verify (one-shot only — NEVER run dev/preview servers)

```bash
yarn install        # Yarn 4 / Berry (packageManager: yarn@4.17.1)
yarn typecheck      # tsc --noEmit
yarn build          # docusaurus build (writes ./build)
```

- `yarn build` is **clean** (`[SUCCESS]`, zero warnings, zero broken links). `onBrokenLinks` is `'throw'` and `onBrokenMarkdownLinks` is `'throw'` (via `markdown.hooks`) so any broken internal link fails the build. `onBrokenAnchors` stays `'warn'` (cross-page heading anchors are fragile).
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
- Sitemap is regenerated on every `yarn build` (46 URLs as of 2026-07-23).
- Editing docs: every page needs `title`, `description`, and `last_update.date` front-matter. Keep pages **brief and honest** (definition-first opening sentence, a few internal links) — the docs-are-a-footnote rule applies; do not pad to a fixed word count.


## Sub-agents & Skills — Main-Context-First (IRON-SOLID)
Default/built-in sub-agents (`general-purpose`, `Explore`, `Plan`, `claude`, `fork`, …) do NOT have
access to `/skills`, so delegating to them silently SKIPS the skills RULE #0 requires. Do all
skill-relevant work in the **MAIN context**; use a sub-agent ONLY when a **custom** agent exists in
`.claude/agents/` for that job; a default `Explore`/`Plan` agent is allowed ONLY for read-only,
no-skill search/exploration. When a relevant skill is missing, **install/enable it** rather than
proceeding skill-less. (Owner directive 2026-07-11; full text in `~/.claude/CLAUDE.md`.)

<!-- RULE:main-context-model-workflow v2026-07-16 -->
## Main-Context + Skills + Model Workflow (IRON-SOLID — CRITICAL)
1. **NO default/built-in sub-agents** (`general-purpose`, `Explore`, `Plan`, `claude`, `fork`, …) for ANY work in
   this project — they cannot invoke /skills, which RULE #0 makes mandatory. Do ALL work (planning, implementation,
   review, exploration) in the MAIN context. A sub-agent is allowed ONLY when a CUSTOM agent exists in
   `.claude/agents/` for that exact job.
2. **Skills always:** before any task, scan the available-skills list and invoke EVERY relevant skill; if a needed
   skill is missing, download/enable/install it (or use the nearest installed equivalent and say so) — never
   proceed skill-less.
3. **Model workflow:** PLAN and REVIEW on **Fable 5**; EXECUTE the approved plan on **Opus 4.8**. Plans in
   `~/.claude/plans/`; multi-phase features keep a resumable tracker (`docs/features/<slug>/00-tracker.json`),
   resumed rather than re-planned from zero.

Global records (rules, policy, audit reports) live in the `ahsan-notebook` repo at
`static/assets/claude-code/`; the `~/.claude/…` paths are symlinks into it. Full text: `~/.claude/CLAUDE.md`.
(Owner directives 2026-07-11 / 2026-07-14; fleet-rolled 2026-07-16.)
