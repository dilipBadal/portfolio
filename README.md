# Reactfolio — Dilip Badal

A modern, lightweight React portfolio site tailored for Dilip Badal. It features a clean layout, projects showcase, contact page, and a built‑in light/dark theme toggle with persisted preference.

## Features

-   Light/dark theme with persisted preference (localStorage) and system default detection
-   Responsive layout with a centered navbar and icon theme toggle
-   Projects grid and works section
-   About and Contact pages
-   Centralized content config via `src/data/user.js` and `src/data/seo.js`
-   Articles removed (navigation, routes, and homepage list)

## Getting Started

Requirements: Node.js 16+ and npm.

```bash
npm install
npm start
```

The app runs at `http://localhost:3000/`.

## Build

```bash
npm run build
```

Outputs a production build to `build/`.

## Customize Your Portfolio

-   Branding & Info: edit `src/data/user.js`
    -   `main.title`, `main.name`, `main.email`, `socials`
    -   `homepage.title`, `homepage.description`
    -   `about.title`, `about.description`
    -   `projects` array: `title`, `description`, `logo`, `link`
-   SEO: edit `src/data/seo.js` (page descriptions and keywords)
-   Images: replace in `public/`
    -   `logo.png` (navbar logo)
    -   `homepage.jpg` (hero image)
    -   `about.jpg` (about page image)

## Theme

-   The theme uses CSS variables in `src/data/styles.css`.
-   Light is the default; dark overrides are applied via `[data-theme="dark"]`.
-   Users can toggle via the moon/sun icon in the navbar; the preference is saved in `localStorage`.

## Structure Overview

-   `src/pages/` — page components (`homepage.jsx`, `about.jsx`, `projects.jsx`, `contact.jsx`)
-   `src/components/` — UI components (navbar, footer, cards, works, etc.)
-   `src/data/` — content and SEO configuration
-   `src/index.js` — bootstraps theme and router

## Deployment (GitHub Pages)

One simple approach:

1. Build: `npm run build`
2. Serve with any static host or configure GitHub Pages for the built output (e.g., via a separate `gh-pages` branch or GitHub Actions).

## Notes

-   Articles functionality was intentionally removed (links/routes/components) to simplify the portfolio.
-   This project was adapted from a React portfolio template and customized for Dilip Badal.

## License

See `LICENSE` in the repository.
