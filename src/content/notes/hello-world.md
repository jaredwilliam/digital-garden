---
title: 'Hello World'
description: 'The first note in the garden, and how to plant another one.'
pubDate: 2026-08-27
draft: false
---

This site is a digital garden. Notes here are living documents — published early,
revised often, not polished essays with a finish line.

## Publishing a new note

Add a markdown file to `src/content/notes/`. The filename becomes the URL, so
`src/content/notes/why-astro.md` publishes at `/notes/why-astro`.

Every note needs frontmatter:

```markdown
---
title: 'Why Astro'
description: 'Optional one-line summary shown on the index.'
pubDate: 2026-09-01
updatedDate: 2026-09-14 # optional
draft: false # true keeps it out of the build
---
```

Then commit and push to `main`. Vercel builds and deploys it.
