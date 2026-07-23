# Contributing to HabitForge Docs

Thanks for your interest in improving the HabitForge documentation. This repository
holds the Docusaurus source for https://habitforge-docs.aoneahsan.com.

## How the project is governed

`main` is protected. The owner (aoneahsan) pushes to `main` directly to maintain the
site; **everyone else contributes through a pull request** that needs:

- **at least one approving review**, and
- a **green CI build** (the `Build check` job — Docusaurus builds with broken-link
  and warning checks turned on).

Force-pushes and branch deletion on `main` are blocked. Only a repository admin can
bypass these rules.

## How to contribute

1. **Fork and open a PR** — anyone can, no access needed. Fork the repo, create a
   branch, make your change, and open a pull request against `main`.
2. **Request collaborator access** (optional) — email aoneahsan@gmail.com or open an
   issue. Write access is granted at the owner's discretion, and even with it you
   **still cannot push to `main`** — every change is reviewed.

## Local development

```bash
corepack enable        # Yarn 4
yarn install
yarn start             # local dev server
yarn build             # must pass — CI runs this, with broken links treated as errors
```

## Standards

- Keep pages **brief and honest** — describe features the app actually has.
- Use **Conventional Commits** (`docs:`, `fix:`, `chore:` …).
- No broken internal links (the build fails on them).
- Never commit secrets, keys, or `.env` files.

## Support

Questions or issues: open a GitHub issue, or use the support link —
https://aoneahsan.com/payment?project-id=habitforge&project-identifier=com.aoneahsan.habitforge
