# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```
npm install
npm run dev      # dev server at localhost:4321
npm run build    # static build to dist/
npm run preview  # serve dist/ locally
```

No test runner, linter, or formatter is configured. `npm run build` is the only correctness check — it runs Astro's type/content validation.

## State of the repo

A bare Astro scaffold. `src/pages/index.astro` is an empty HTML shell and `src/content/` is empty. There is no content pipeline, no layouts, and no components yet — build what the task needs rather than looking for existing structure.

Git history was intentionally squashed to a single commit. There is nothing to recover from earlier commits; do not suggest it.

## Architecture notes

- Astro 5, static output, no framework integrations installed. Adding Svelte/React requires `npx astro add`.
- `astro.config.mjs` sets `site: 'https://www.jaredkorba.com'`, which is what canonical URLs and RSS depend on.
- Deployed on Vercel from `main`. Pushing to `main` publishes.
