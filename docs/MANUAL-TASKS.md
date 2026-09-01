# Manual / User-Only Tasks — Habitforge Docs

> The ONE place for everything only you (the human) can do. Fixed path: `docs/MANUAL-TASKS.md`.
> Global spec: `~/.claude/rules/manual-tasks.md`. Excluded from the published site (see
> `docusaurus.config.ts` → `docs.exclude`) because this repo is public.
> Last updated: 2026-09-01

## ⏳ Pending manual tasks

🔴 **BOTH ROWS BELOW APPEAR TO HAVE BEEN DONE LONG AGO, AND THE BOXES ARE LEFT FOR YOU TO TICK.** Only you
tick a row here — that is the rule and the agent does not get to close your record. But a row reading "Not
started" for something that has been live for weeks is worse than an unticked box, so the **evidence** is
recorded here instead. Probed 2026-09-01:

| Claim | Probe | Result |
|---|---|---|
| DNS `CNAME` exists | `dig +short habitforge-docs.aoneahsan.com CNAME` | **`aoneahsan.github.io.`** |
| Pages serves the custom domain over HTTPS | `curl -sI https://habitforge-docs.aoneahsan.com` | **`HTTP/2 200`**, `server: GitHub.com` |
| **Enforce HTTPS** is on | `curl -sI http://habitforge-docs.aoneahsan.com` | **`HTTP/1.1 301 Moved Permanently`** |

Tick them when you are satisfied; nothing is blocked either way.

| # | Task | Why only you | Status |
|---|------|--------------|--------|
| 1 | **Add DNS.** In Hostinger, add a `CNAME` record `habitforge-docs` → `aoneahsan.github.io` on `aoneahsan.com`. | Only you control the `aoneahsan.com` DNS zone. | ☐ **Evidence says done** — CNAME resolves (above) |
| 2 | **Configure GitHub Pages.** Repo **Settings → Pages**: source = **GitHub Actions**, custom domain = `habitforge-docs.aoneahsan.com`, then **Enforce HTTPS** once the certificate provisions. | Repo settings are owner-only. | ☐ **Evidence says done** — 200 over HTTPS from GitHub, and HTTP 301s (above) |

`static/CNAME` already ships `habitforge-docs.aoneahsan.com` inside `build/`, and `.github/workflows/deploy-pages.yml` builds and
publishes on every push to `main`.

## ✅ Completed manual tasks

| # | Task | Resolution | Date |
|---|------|-----------|------|
| — | — | — | — |
