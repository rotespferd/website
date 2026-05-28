# Repository Guidelines

## Project Structure & Module Organization

This repository contains the Hugo sources for `www.marianhahne.de`. Core site settings live in `hugo.toml`. Blog content is under `content/posts/`, standalone pages are under `content/`, and new page defaults are defined in `archetypes/default.md`. Theme overrides belong in `layouts/`, currently `layouts/partials/extend_footer.html`. Custom styling lives in `assets/css/extended/uberblogr.css`. Themes are checked out under `themes/` and are referenced through Git submodules; the active themes are `PaperMod` and `hugo-shortcode-gallery`.

## Build, Test, and Development Commands

Use Hugo for local development and validation:

```sh
hugo server -D
```

Runs the local development server and includes draft posts.

```sh
hugo
```

Builds the production site using `buildDrafts = false`, `buildFuture = false`, and minification from `hugo.toml`. This is also the command used by `.forgejo/workflows/build.yaml`.

```sh
git submodule update --init --recursive
```

Fetches the theme submodules after cloning or when themes are missing.

## Coding Style & Naming Conventions

Write content in Markdown with TOML front matter delimited by `+++`. Use lowercase kebab-case filenames for posts, for example `content/posts/links-kw18-2025.md`. Keep post metadata explicit: `title`, `date`, `tags`, and `draft`. German prose is the default for published content. Prefer small, scoped Hugo template overrides in `layouts/` instead of modifying files inside `themes/`.

## Testing Guidelines

There is no separate automated test suite. Treat `hugo` as the required validation step before submitting changes. For content edits, also run `hugo server -D` and check the rendered page, navigation, tags, dates, and any embedded HTML or shortcodes. For CSS or layout changes, verify both list pages and single post pages.

## Commit & Pull Request Guidelines

Use Conventional Commits for commit messages, for example `feat: add links of week 18-2025`, `fix: correct post typo`, or `chore: update templates`. Keep the subject concise, lowercase after the type, and focused on the user-visible change. Use scopes when helpful, such as `content`, `css`, or `templates`. Pull requests should include a brief summary, note whether `hugo` passes, link any related issue, and include screenshots for visual, CSS, or layout changes.

## Security & Configuration Tips

`markup.goldmark.renderer.unsafe = true` allows raw HTML in Markdown. Review embedded HTML carefully and avoid untrusted scripts or iframes. Keep production behavior aligned with `hugo.toml`; do not publish drafts unless intentionally changing the build configuration.
