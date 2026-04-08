---
title: Application Security
---

# Application Security

## Overview

This is a fully static single-page application (SPA) with no backend, no database, and no user authentication. The attack surface is minimal by design.

## Deployment

- Hosted on **Netlify** (CDN-distributed static assets)
- HTTPS enforced by Netlify by default
- No server-side code or API endpoints

## Input Handling

There is no user input. The contact page displays static links only (email, LinkedIn, GitHub). No forms, no user-submitted data, no client-side storage (cookies, localStorage, sessionStorage).

## External Links

All external links (`linkedin.com`, `github.com`) now include `rel="noopener noreferrer"` across all components (`HeaderComp`, `ProjectsComp`, `ContactComp`). Reverse tabnapping risk is resolved.

## External Resources

Google Fonts (`fonts.googleapis.com`) is loaded via `@import` in component styles. This is a third-party network request. If a strict CSP is added, `fonts.googleapis.com` and `fonts.gstatic.com` must be allowlisted.

## Dependencies

| Concern | Detail |
|---|---|
| Vue 2 | EOL as of December 2023 — no further security patches. Migration to Vue 3 is recommended. |
| jsPDF | Imported but currently commented out — not active. |
| FontAwesome | SVG icons loaded from npm, not a CDN — no third-party script execution risk. |

Run `npm audit` periodically to catch known CVEs in the dependency tree.

## Content Security Policy (CSP)

No explicit CSP headers are currently configured in `netlify.toml`. A restrictive policy is recommended. Note that Google Fonts must be included:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    Content-Security-Policy = "default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data:; script-src 'self'"
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

## Risk Summary

| Risk | Severity | Status |
|---|---|---|
| Vue 2 EOL | Medium | Open |
| Missing `rel="noopener noreferrer"` on external links | Low | Resolved |
| No CSP headers | Low | Open |
| Google Fonts external request not covered by CSP | Low | Open (blocked by no CSP) |
| No user data exposure | N/A | Not applicable |
| No auth/secrets in codebase | N/A | Verified |
