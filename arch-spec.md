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
| Fonts | Inter (body), Playfair Display (headings) — Google Fonts |
| Icons | FontAwesome 6 (SVG via npm) |
| PDF generation | jsPDF 2 (imported but currently inactive) |
| Build tool | Vue CLI 5 (webpack under the hood) |
| Deployment | Netlify (static hosting + CDN) |

## Application Structure

```
src/
  main.js           # App entry — registers Vue, FontAwesome, Router, v-animate directive
  App.vue           # Root layout: HeaderComp + RouterView + global CSS utilities
  router.js         # Route definitions
  assets/           # Static assets (images, fonts)
  components/
    HeaderComp.vue  # Glass navbar (desktop) + full-screen overlay nav (mobile)
    HomeComp.vue    # Hero section + CTA sections + quote
    AboutMe.vue     # Bio, philosophy sections, hobby grid
    ResumeComp.vue  # Experience timeline, skills grid, education
    ProjectsComp.vue # Project showcase cards
    ContactComp.vue  # Contact info (static links)
    DownloadResume.vue # Inactive (commented out)
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

## Global Utilities (App.vue)

Global styles and utilities are defined in `App.vue`:

- **`.glass`** — `backdrop-filter: blur(12px)` + semi-transparent border. Used throughout for cards and panels.
- **`.glass-warm`** — Same as `.glass` but with a warm stone tint.
- **`.animate-hidden` / `.animate-visible`** — Scroll-triggered entrance animation classes (fade + slide up).

## Scroll Animation Directive

A global `v-animate` directive is registered in `main.js`. It uses `IntersectionObserver` to add `.animate-visible` to elements when they enter the viewport, triggering a fade + translateY entrance. An optional numeric binding sets the transition delay in ms (e.g. `v-animate="120"` for staggered children).

## Navigation

**Desktop:** Glass navbar fixed to the top with active-route underline indicator and social icon links.

**Mobile:** A slim top bar (name + hamburger) sits fixed at the top. Tapping the hamburger fades in a full-screen overlay with large centered nav links. Body scroll is locked while the overlay is open. The hamburger animates to an × icon with a spin transition.

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
- **jsPDF inactive** — Resume download feature is commented out; either implement or remove the dependency.
