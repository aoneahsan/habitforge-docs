# HabitForge Documentation

Public documentation site for **HabitForge** — a habit-tracking workspace with visual habit strength, streak engines, integrated trackers (water, weight, sleep, calories, workout, reading, expenses), timers (Pomodoro, focus, meditation, breathing), journals (daily, gratitude, affirmations), and a wellness dashboard. Available as a web app, Capacitor-powered iOS / Android app, and a browser extension.

- **Live site**: https://habitforge-docs.aoneahsan.com
- **App**: https://habitforge.aoneahsan.com
- **Author**: [Ahsan Mahmood](https://aoneahsan.com) — [aoneahsan@gmail.com](mailto:aoneahsan@gmail.com) — [LinkedIn](https://linkedin.com/in/aoneahsan) — [GitHub](https://github.com/aoneahsan) — [NPM](https://npmjs.com/~aoneahsan)
- **License**: MIT

This repository is **public**. The HabitForge app source itself is private; this site documents the product so users, contributors, and search engines (Google, Bing, ChatGPT, Perplexity, Claude) can discover and learn about HabitForge.

## Stack

- [Docusaurus 3](https://docusaurus.io/) (React 19, TypeScript)
- Local search via [@easyops-cn/docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local) — no Algolia signup needed
- Sitemap, robots.txt, llms.txt, JSON-LD (`Article`, `FAQPage`, `HowTo`, `SoftwareApplication`, `BreadcrumbList`, `Organization`, `WebSite`)
- Hosted on Firebase Hosting (free tier)
- CI: GitHub Actions

## Local development

```bash
# install deps (Yarn 4 / Berry)
yarn install

# typecheck (no dev server — see project rules)
yarn typecheck

# one-shot build (verifies everything compiles)
yarn build
```

> **Heads-up**: per workspace policy, the dev server (`yarn start`) is **not** auto-run by tooling. Run it yourself when you want to preview locally.

## Project layout

```
docs/                       # markdown content, organised by topic
src/
  components/HomepageFeatures/
  css/custom.css            # brand theme (orange→red gradient, dark mode)
  pages/                    # custom pages (homepage, /author, etc.)
  theme/                    # theme overrides
static/
  robots.txt                # AI-bot allowlist + sitemap directive
  llms.txt                  # llmstxt.org overview for LLM agents
  pricing.md                # machine-readable pricing for AI buying agents
  img/                      # logos, favicons, OG images
docusaurus.config.ts        # site config, plugins, themeConfig
sidebars.ts                 # sidebar layout
firebase.json               # Firebase Hosting config (ready for `firebase deploy`)
.firebaserc.example         # template — copy to .firebaserc with your Firebase project id
.github/workflows/          # CI pipelines
```

## Deploying

```bash
# 1. one-time: copy .firebaserc.example to .firebaserc and set your project id
cp .firebaserc.example .firebaserc
# edit "default" to your Firebase project id

# 2. one-time: log in
yarn dlx firebase-tools login

# 3. deploy
yarn build
yarn dlx firebase-tools deploy --only hosting
```

CI deploys automatically on push to `main` once the `FIREBASE_SERVICE_ACCOUNT` secret is set in the repo (see `.github/workflows/deploy.yml`).

## Editing docs

- Every doc page must include `title`, `description`, and `last_update.date` front-matter.
- Feature pages target ~1000 words with: definition-first intro, 3–5 use cases, 4–6 numbered "How it works" steps, 2–3 worked examples, 5–8 FAQ entries, 3–6 tips.
- Internal links: 6–8 per page minimum.
- See `docs/CONTRIBUTING.md` (added in a later batch) for the full content style guide.

## About the author

Built and maintained by **Ahsan Mahmood**, a senior full-stack / mobile engineer building privacy-respecting productivity tools.

- Portfolio: https://aoneahsan.com
- Email: aoneahsan@gmail.com
- WhatsApp / Phone: +92 304 6619706
- LinkedIn: https://linkedin.com/in/aoneahsan
- GitHub: https://github.com/aoneahsan
- NPM: https://npmjs.com/~aoneahsan

If HabitForge or these docs help you, you can support continued development at [aoneahsan.com/payment](https://aoneahsan.com/payment?project-id=habitforge-docs&project-identifier=habitforge-docs).
