# HabitForge Documentation

Public documentation site for **HabitForge** — a habit tracker that turns your consistency into a rope you can see: a thin thread when a habit is new, an unbreakable cable once you've shown up day after day, and a fraying line when you slip. Available as a web app and an Android app on Google Play. There is no iOS app and no browser extension.

- **Live docs**: https://habitforge-docs.aoneahsan.com
- **App**: https://habitforge.aoneahsan.com
- **Google Play**: https://play.google.com/store/apps/details?id=com.aoneahsan.habitforge
- **Author**: [Ahsan Mahmood](https://aoneahsan.com) — [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) — [LinkedIn](https://linkedin.com/in/aoneahsan) — [GitHub](https://github.com/aoneahsan) — [NPM](https://npmjs.com/~aoneahsan)
- **License**: MIT

This repository is **public**. The HabitForge app source itself is private; this site documents the product so users, contributors, and search engines (Google, Bing, ChatGPT, Perplexity, Claude) can discover and learn about HabitForge.

## Stack

- [Docusaurus 3](https://docusaurus.io/) (React 19, TypeScript ~6, Yarn 4)
- Local search via [@easyops-cn/docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local) — no Algolia signup needed
- Sitemap, robots.txt, llms.txt, pricing.md, and site-wide JSON-LD (`WebSite`, `Organization`, `Person`, `SoftwareApplication`)
- Deployed to **GitHub Pages** on a custom domain (`static/CNAME`)

## Local development

```bash
yarn install
yarn build      # one-shot build; validates every internal link (onBrokenLinks: throw)
```

> Per workspace policy, the dev server (`yarn start`) is not auto-run. Run it yourself to preview.

## Content structure

`docs/` holds the Markdown, organised by topic:

- `intro.md` and `getting-started.md`
- `habits/` — create, check-ins & streaks, rope strength, levels & points, manage
- `features/` — analytics, achievements, community, themes
- `apps/` — install & offline (PWA), the Android app
- `reference/` — changelog, privacy & terms, support

Every page carries `title`, `description`, and `last_update.date` front matter. Add a page by creating the file and appending its doc id to `sidebars.ts` — the build throws on a broken doc id, so the two stay in sync.

## Deploying

Pushes to `main` build and deploy to GitHub Pages via `.github/workflows/deploy.yml` (Node 20 → `yarn install` → `yarn build` → `actions/upload-pages-artifact` → `actions/deploy-pages`). The custom domain comes from `static/CNAME`, which Docusaurus copies into `build/`.

`firebase.json` is kept as an alternative host config; the wired deploy path is GitHub Pages.

## About the author

Built and maintained by **Ahsan Mahmood**, a full-stack and mobile engineer.

- Portfolio: https://aoneahsan.com
- Email: aoneahsan@gmail.com
- LinkedIn: https://linkedin.com/in/aoneahsan
- GitHub: https://github.com/aoneahsan
- NPM: https://npmjs.com/~aoneahsan

If HabitForge or these docs help you, you can support continued development at [aoneahsan.com/payment](https://aoneahsan.com/payment?project-id=habitforge&project-identifier=com.aoneahsan.habitforge).
