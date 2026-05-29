# HabitForge Docs — Project Guide (CLAUDE.md)

**Last Updated**: 2026-05-29

Public documentation / knowledge-base site for **HabitForge** (the habit-tracking + wellness app). This repo is **public**; the HabitForge app source is **private**. The docs exist so users, contributors, and search/AI engines (Google, Bing, ChatGPT, Perplexity, Claude, Gemini) can discover and learn about HabitForge.

- **Live docs**: https://habitforge-docs.aoneahsan.com
- **Parent app**: https://habitforge.aoneahsan.com
- **Repo (declared)**: https://github.com/aoneahsan/habitforge-docs (public, MIT)

---

## What this is

- **Framework**: Docusaurus 3 (`@docusaurus/core` ^3.10.1), React 19, TypeScript ~6.0.
- **Search**: `@easyops-cn/docusaurus-search-local` (offline local search — no Algolia signup).
- **Content**: 24 Markdown doc pages today (getting-started ×8, habits ×7, trackers ×8, plus `intro.md`). Categories `timers`, `journals`, `extension`, `mobile`, `about`, `legal`, `reference` are scaffolded in nav/footer and land in later content batches (see the in-config note on `onBrokenLinks`).
- **AEO/SEO**: `robots.txt` (AI-bot allowlist + sitemap directive), `llms.txt` (llmstxt.org format), `pricing.md` (machine-readable, "free" tier), site-wide JSON-LD (`WebSite` + `Organization` + `Person`), Docusaurus sitemap plugin.
- **Deploy target**: Firebase Hosting (free tier) — `firebase.json` ready; CI in `.github/workflows/`. Docusaurus `organizationName/projectName` also set for optional gh-pages deploy.
- **Brand**: orange→red "fire" gradient (`#F97316` → `#DC2626`), light + dark mode.

---

## Build & verify (one-shot only — NEVER run dev/preview servers)

```bash
yarn install        # Yarn 4 / Berry (packageManager: yarn@4.14.1)
yarn typecheck      # tsc --noEmit
yarn build          # docusaurus build (writes ./build)
```

- `yarn build` currently emits **expected** broken-link *warnings* for not-yet-written category pages (config sets `onBrokenLinks: 'warn'` on purpose during the scaffold phase). The build still reports `[SUCCESS]`. Do **not** "fix" these by deleting the nav/footer links — they resolve when the remaining content batches land. Flip `onBrokenLinks` back to `throw` only once all targets exist.
- Per workspace policy the dev server (`yarn start`) is **not** auto-run by tooling — run it yourself to preview.

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

## Notes

- Identifiers for app stores / Capacitor app id / npm: **N/A** for this docs site (those belong to the parent HabitForge app, not the docs).
- Sitemap is regenerated on every `yarn build` (29 URLs as of 2026-05-29).
- Editing docs: every page needs `title`, `description`, and `last_update.date` front-matter; feature pages target ~1000 words (definition-first intro, use cases, numbered how-it-works, examples, FAQ, tips, 6–8 internal links).
