# Repository Guidelines

## Project Structure & Module Organization

This repository contains the Eleventy (11ty) sources for `www.marianhahne.de`. Eleventy 3 is the only build tool; there is no framework or client-side bundler.

- `eleventy.config.js` — build config: the `blog` collection, the `isoDate` and `teaser` filters, and passthrough copying of `css/main.css`.
- `_includes/layout/` — Nunjucks layouts: `base.njk` (HTML shell, nav, footer), `default.njk`, `homepage.njk` (post listing), `post.njk`. A page picks its layout via the `layout:` front matter key, for example `layout: layout/post.njk`.
- `index.md` — homepage; uses `layout/homepage.njk`, which renders `index.md`'s body followed by the `blog` collection.
- `posts/<year>/<slug>.md` — blog posts, one file per post.
- `meta/*.md` — standalone meta pages, for example `meta/layout.md`.
- `css/main.css` — plain CSS, passthrough-copied verbatim to `/css/main.css`.
- `_site/` — generated output directory (gitignored).
- `_content/` — legacy Hugo content kept for reference and excluded from the build via `.eleventyignore`.
- `assets/images/`, `assets/css/extended/uberblogr.css` — legacy Hugo assets. They are neither passthrough-copied nor templates, so Eleventy never emits them; nothing under `assets/` is served today.

Eleventy ignores `_content`, `.agents`, `.claude`, `AGENTS.md`, and `CLAUDE.md` (see `.eleventyignore`), so this file and the skills directory are never rendered into the site.

## Build, Test, and Development Commands

`nix develop` provides Node, pnpm, git and git-lfs, plus `serve` and `build` helpers for the commands below. Run `git lfs pull` once so images under `assets/images/` are real files instead of LFS pointers.

```sh
pnpm install
```

Installs Eleventy. The repo pins pnpm 11.27.0 via `packageManager`/`devEngines`, so plain `npm` installs emit an `EBADDEVENGINES` warning — that warning is noise, not a failure.

```sh
pnpm exec eleventy --serve
```

Runs the local development server with live reload. It uses port 8080 by default and silently moves to the next free port if that one is taken, so read the URL it prints.

```sh
pnpm exec eleventy
```

Builds the production site into `_site/`. This is the required validation step for every change.

No `dev`/`build` npm scripts are defined, so invoke Eleventy through `pnpm exec` (or `npx @11ty/eleventy`). `_site/` is not cleaned between builds, so stale files from earlier runs can linger there; delete it if output looks wrong.

## Coding Style & Naming Conventions

Write posts in Markdown with YAML front matter delimited by `---`. Keep metadata explicit:

```yaml
---
title: 'Fiat Lux'
date: '2024-09-16'
layout: layout/post.njk
tags: ['git', 'kochen']
---
```

Use lowercase kebab-case filenames: `posts/2024/mein-fedora-update-script.md`. Quote dates as `'YYYY-MM-DD'` strings — the `isoDate` filter formats them for the `<time>` element. German prose is the default for published content.

Template logic stays in `_includes/layout/`, which are Nunjucks files: `{% unless %}` and other Liquid-only tags fail the build there. Note that Markdown bodies default to Liquid (the build log prints `(liquid)` for `posts/...` and `index.md`), so a Liquid tag inside post prose may behave differently than the same tag in a layout — keep logic in layouts. Keep date output on the `isoDate` filter and excerpts on the `teaser` filter (rendered HTML is stripped to plain text and cut at 250 visible characters on a word boundary, with an ellipsis; pass a length to override, for example `{{ post.content | teaser(150) }}`).

CSS is hand-written in `css/main.css` with native nesting (for example `a { &:hover { … } }`) and no preprocessor or build step. Verify nesting support for any browser you care about.

## Testing Guidelines

There is no automated test suite. Treat `pnpm exec eleventy` succeeding as the baseline check, then inspect the rendered output rather than trusting the build exit code.

For content changes, confirm on the homepage and on the post's own page: newest-first ordering, teaser length and truncation, comma-separated tags, dates, and working title links to `/posts/<slug>/`.

For CSS or layout changes, check both the list page (`index.html`) and a single post page, plus the meta pages using `layout/default.njk`.

## Commit & Pull Request Guidelines

Use Conventional Commits, for example `feat: rework homepage post listing`, `fix: correct post typo`, or `chore: port build to eleventy`. Keep the subject concise and lowercase after the type, and use scopes when helpful (`content`, `css`, `templates`).

Pull requests should include a brief summary, state whether `pnpm exec eleventy` builds cleanly, link any related issue, and include screenshots for visual, CSS, or layout changes.

## Security & Configuration Tips

Nunjucks autoescaping is on, so only use `| safe` on content you trust — post bodies are currently trusted and rendered with it. Raw HTML in Markdown is enabled (markdown-it renders it by default), so review embedded HTML carefully and avoid untrusted scripts or iframes.

There is no draft mechanism: front matter such as `draft: true` is inert and any file under `posts/` is published by the next build. Keep production behavior in `eleventy.config.js` and the layouts.

## Migration Status (Hugo → Eleventy)

This repo is mid-migration. These pieces still assume Hugo and are known to be stale:

- `.forgejo/workflows/build.yaml` installs Hugo, runs `hugo`, and rsyncs `public/` to production. There is no `hugo.toml`, so this pipeline does not match the repo and needs porting to `pnpm exec eleventy` plus `_site/` before the next push to `main`.
- `.agents/skills/blogpost-creator/SKILL.md` documents the Hugo conventions (`content/posts/`, TOML `+++` front matter, `hugo` as the validation command). Follow this file instead until that skill is updated; the remaining backlog in `_content/posts/` still uses Hugo front matter, some of it TOML-style (`tags = [...]`).
- Only a few posts have been migrated into `posts/`; homepage navigation links in `base.njk` are empty hrefs, and the footer links to `/meta/kontakt` and `/meta/impressum`, which do not exist yet.
- No image or gallery pipeline exists yet, and `post.njk` renders only title and body — no date or tags on single post pages.
