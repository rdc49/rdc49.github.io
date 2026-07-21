# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal academic website for Robb Calder (astrophysics PhD student, University of Cambridge), served via GitHub Pages from this repo (`rdc49.github.io`). It's a static, single-page, hand-written site (plain HTML/CSS/vanilla JS, no framework, no build step). It originally started from the "Dimension" template by HTML5 UP (CCA 3.0 licensed); that template's CSS, Sass, and jQuery-based panel JS have since been fully replaced with custom code — `README.txt`/`LICENSE.txt` are kept only as a historical record of that origin, not because any of their code is still in use.

## Architecture

- **`index.html`** is the entire site: a normal scrolling single page with sections (`#about`, `#research`, `#cv`, `#contact`) inside `<main>`, and a sticky header with anchor-link nav (`#site-nav`). Nav `href`s and section `id`s must stay in sync or a link breaks.
- **`assets/css/main.css`** is a plain, hand-written stylesheet (no Sass, no preprocessor, no build step) — edit it directly. Site-wide look-and-feel constants (colors, fonts, spacing) are CSS custom properties in the `:root` block at the top of the file.
- **`assets/js/main.js`** is a small dependency-free vanilla JS file handling two things: the mobile nav toggle and scroll-spy active-link highlighting (via `IntersectionObserver`). The site works fully without it (plain anchor links, CSS `scroll-behavior: smooth`); it's a progressive enhancement, not a requirement.
- **`assets/css/fontawesome-all.min.css`** + `assets/webfonts/` provide icon glyphs (Font Awesome Free 5.15.4, self-hosted) used for things like the email/address/download icons and any profile-link icons (ORCID, GitHub, etc.).
- **`images/`** holds only photos/figures actually referenced from `index.html` — don't let unused images accumulate here; delete any that stop being referenced.
- **`Academic_CV.pdf`** is embedded in `#cv` via `<object>` (with a download-link fallback for browsers that can't render inline PDFs) and also offered as a direct download button.

## Working in this repo

- There is no build, lint, or test step — changes are made directly to `index.html`/CSS/JS and verified by opening the page in a browser (or via GitHub Pages once pushed).
- Content edits (bio text, publications, research description, contact info) are almost always confined to the relevant `<section>` block in `index.html`.
- Don't reintroduce jQuery or a Sass build — the site intentionally has neither. If a change seems to need one, prefer plain CSS/vanilla JS instead.
