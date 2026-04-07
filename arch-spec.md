---
title: Architecture Specification
---

# Architecture Specification

## Stack

| Layer | Technology |
|---|---|
| Framework | Vue 2 (Options API) |
| Routing | Vue Router 3 (history mode) |
| Styling | Tailwind CSS 3 + scoped component styles |
| Icons | FontAwesome 6 (SVG via npm) |
| PDF generation | jsPDF 2 |
| Build tool | Vue CLI 5 (webpack under the hood) |
| Deployment | Netlify (static hosting + CDN) |

## Application Structure

```
src/
  main.js           # App entry — registers Vue, FontAwesome, Router
  App.vue           # Root layout: HeaderComp + RouterView
  router.js         # Route definitions
  assets/           # Static assets (images, fonts)
  components/
    HeaderComp.vue  # Fixed navigation bar
    HomeComp.vue    # Landing / hero section
    AboutMe.vue     # Bio and background
    ResumeComp.vue  # Resume view + PDF download (jsPDF)
    ProjectsComp.vue # Project showcase
    ContactComp.vue  # Contact info (static links)
    DownloadResume.vue # Resume download trigger component
```

## Routing

Vue Router operates in `history` mode (clean URLs, no `#` hash). Netlify handles SPA fallback via:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

All unknown routes redirect to `/` via a catch-all `{ path: '*', redirect: '/' }` entry in the router.

Scroll position is restored on back-navigation; new navigations scroll to the top.

## Data Flow

This is a pure presentation app — there is no state management (no Vuex/Pinia), no API calls, and no persistent state. All content is hardcoded in component templates.

## Build & Deploy

```
npm run serve    # local dev server (hot reload)
npm run build    # production build → dist/
npm run lint     # ESLint via @vue/cli-plugin-eslint
```

Netlify auto-deploys on push to `master`. Build command: `npm run build`. Publish directory: `dist/`.

## Known Technical Debt

- **Vue 2 EOL** — Vue 2 reached end-of-life December 2023. No migration path is currently planned.
- **No component library** — Tailwind utilities are applied ad-hoc; some duplication exists across components.
- **No tests** — No unit or e2e test suite is present.
