# Search-console fix log — habitforge-docs

Fixed path in every repo (`aoneahsan-cccs-search-issue-remediation`). Newest first. Not published: excluded in
`docusaurus.config.ts`. The audit session retests with the commands under **Retest**.

## habitforge-docs#2 — URL-level indexing + AEO fix list · 2026-11-27 · commit: see `git log -- docs/search-consoles/fix-log.md`

Status: the trailing-slash boxes and box 1 fixed; box 2 Pending. `yarn build` (zero warnings) ends with
`yarn seo:contract` (`plugins/seo-contract.mts`), which failed on a planted noindex on `/docs/` and then passed.
Rendered `/docs/` at 1440. Live-verified, google-pending (commit `153d72d`, gh-pages `48bac95`, IndexNow 200): `/docs` → 301
`/docs/` → 200; `/docs/tags/habits/` → refresh `/sitemap/`; 0 unslashed URLs in `sitemap.xml`.

| Box | SA | What was wrong (evidence) | Root fix (file) | Contract | Live proof |
|---|---|---|---|---|---|
| Trailing-slash 404 (`/docs/` and every `/x/`) | P26 | `trailingSlash: false` wrote `x.html`; GitHub Pages 404s the slashed form | `docusaurus.config.ts` `trailingSlash: true`; the sitemap's ignore patterns gained their slashed forms; `plugins/site-pages.ts` dates routes slashless (`routeKey`) | fails on any `x.html` page, unslashed canonical or sitemap URL | see Retest |
| found by the contract · 32 tag pages had no meta description | P29/P32 | generated `/docs/tags/*` lists of pages the sidebar already groups | `tags:` → `topics:` in 46 docs (the `/sitemap` chips read it, `topicsOf`); every `/docs/tags/*` redirects to its matching page or `/sitemap` (`plugins/seo-redirects.mts`, new dependency `@docusaurus/plugin-client-redirects`). Not noindexed | each redirect and target checked | see Retest |
| 1 · feeds / llms.txt / sitemap | P33 | machine files; no `.md` mirrors on this host | none needed | — | — |

### Pending

| Box | Why not done | Who | Next action |
|---|---|---|---|
| 2 · 2 other content pages | quality and authority signal | content pass | a unique angle per page; two inbound links each |
| Google re-crawl and Validate fix | console | daily audit | Validate fix |

### Retest

```bash
H=https://habitforge-docs.aoneahsan.com
for p in /docs /docs/ /docs/tags/habits/; do printf '%s %s\n' "$p" "$(curl -s -o /dev/null -w '%{http_code} %{redirect_url}' "$H$p")"; done
curl -s "$H/docs/tags/habits/" | grep -o 'http-equiv="refresh"[^>]*'
curl -s "$H/sitemap.xml" | grep -oE '<loc>[^<]*</loc>' | grep -vc '/</loc>'   # 0
```
