# HabitForge Docs — Project Guide (CLAUDE.md)

**Last Updated**: 2026-08-17
**Mirror of `AGENTS.md`** — byte-identical except this header. Update one, update the other.

Public documentation / knowledge-base site for **HabitForge** (a habit tracker that shows your consistency as a rope — web app + Android; no iOS, no browser extension). This repo is **public**; the HabitForge app source is **private**. The docs exist so users, contributors, and search/AI engines (Google, Bing, ChatGPT, Perplexity, Claude, Gemini) can discover and learn about HabitForge.

- **Live docs**: https://habitforge-docs.aoneahsan.com
- **Parent app**: https://habitforge.aoneahsan.com
- **Repo (declared)**: https://github.com/aoneahsan/habitforge-docs (public, MIT)

| Context Budget Last Verified | 2026-08-17 — CLAUDE.md 6,067 B / no PENDING-TASKS.md; re-check due 2026-08-27 |
|---|---|

---

## What this is

- **Framework**: Docusaurus 3 (`@docusaurus/core` ^3.10.1), React 19, TypeScript ~6.0, Yarn 4.
- **Search**: `@easyops-cn/docusaurus-search-local` (offline local search — no Algolia signup).
- **Content**: 16 Markdown doc pages describing the REAL app (rewritten 2026-07-23): `intro` + `getting-started`, `habits/` ×5 (create, check-ins-and-streaks, rope-strength, levels-and-points, manage), `features/` ×4 (analytics, achievements, community, themes), `apps/` ×2 (install-and-offline, android), `reference/` ×3 (changelog, privacy-and-terms, support), plus 4 generated-index category pages. **HabitForge has NO trackers/timers/journals/browser-extension/iOS** — the old generic-template content (extension, timers, trackers, journals, productivity, mobile-iOS, etc.) was deleted 2026-07-23.
- **AEO/SEO**: `robots.txt` (AI-bot allowlist + sitemap directive), `llms.txt` (llmstxt.org format), `pricing.md` (machine-readable), site-wide JSON-LD (`WebSite` + `Organization` + `Person` + `SoftwareApplication`), Docusaurus sitemap plugin. Every page carries distinct `title`/`description` + `last_update` front-matter.
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

## Global rules — pointer, never a copy

Fleet law auto-loads into every session from `~/.claude/rules/`. It used to be pasted into this file;
a copy drifts and then contradicts the source, so only the pointer stays. (It had already drifted:
the local "Task Speed Over Docs" copy said ≤20% of effort where the rule says ~10%, and the
sub-agent copy still granted a default `Explore`/`Plan` agent for read-only exploration — a
carve-out that was **REVOKED**. No default sub-agent may be used for any work, exploration included.)

| Concern | Rule |
|---|---|
| Task speed over docs · no summary/status files | `~/.claude/rules/00-house-rules.md` |
| `nvm` → `npm` (global only) → `yarn` (all local) · `ncu -u` upgrades | `~/.claude/rules/package-management.md` |
| No default sub-agents · skills RULE #0 · model split | `~/.claude/rules/subagent-orchestration.md` + `skill-bindings.md` |
| Never start a dev server · one-shot gates only | `~/.claude/rules/dev-workflow.md` |
| Docs-site domain derivation · GitHub Pages only · never ship `docs/MANUAL-TASKS.md` | `~/.claude/rules/docs-sites.md` |
| Share = `WebShareModal` on web, `@capacitor/share` on native | `~/.claude/rules/share-feature.md` |
| Gitignore · secrets · 🔴 **PUBLIC repo — `.env`/keystores NEVER tracked** | `~/.claude/rules/project-config.md` |
| SEO/AEO · sitemap · feed | `~/.claude/rules/seo-aeo-ranking.md` |
| Portfolio + social content lives in the notebook, never here | `~/.claude/rules/portfolio-and-social.md` |

**Gitignore Last Verified: 2026-06-24.** Package upgrades last applied 2026-05-29 (all deps current).

---

## Portfolio info file — weekly update rule

- Canonical file: `/home/ahsan/Documents/ahsan-notebook/static/assets/personal/projects-info-as-portfolio-item/apps/HABITFORGE-DOCS_portfolio-info_<YYYY-MM-DD>.md`
- Update at least once per week, and on any material change. The last-updated date lives in the filename.
- Keep a max-10-entry update history inside the file. On each refresh: prepend today's row, delete the previous dated file, write the new one.
- Tracker: `/home/ahsan/Documents/01-code/docs/tracking/portfolio-info-files-update-tracker.json`
- Last applied: 2026-05-29

---

## Notes

- Identifiers for app stores / Capacitor app id / npm: **N/A** for this docs site (those belong to the parent HabitForge app, not the docs).
- Sitemap is regenerated on every `yarn build` (46 URLs as of 2026-07-23).
- Editing docs: every page needs `title`, `description`, and `last_update.date` front-matter. Keep pages **brief and honest** (definition-first opening sentence, a few internal links) — the docs-are-a-footnote rule applies; do not pad to a fixed word count.

<!-- RULE:main-context-model-workflow v2026-07-16 -->
<!-- Marker kept so the fleet write stays a no-op; the prose it guarded is now the pointer table above. -->
<!-- Global records live in ahsan-notebook/static/assets/claude-code/; ~/.claude/… symlinks into it. -->
<!-- Owner directives 2026-07-11 / 2026-07-14; fleet-rolled 2026-07-16. -->
