---
name: blogpost-creator
description: Create Hugo Markdown blog posts for Marian's blog, including regular posts, single link recommendations, weekly link roundups, and photo/gallery posts matching the repository's content conventions.
allowed-tools: Read, Grep, Glob, WebFetch, Edit, Write
---

# Blog Post Creator

Create new posts for Marian's Hugo site at `www.marianhahne.de`.

## Repository Conventions

- Blog content lives in `content/posts/`.
- Most posts are single Markdown files named with lowercase kebab-case, for example `content/posts/mein-fedora-update-script.md`.
- Posts with colocated assets use a leaf bundle, for example `content/posts/linux-kurz-und-gut/index.md` plus images in the same directory.
- Standalone image collections can use `assets/images/<slug>/` with absolute cover paths like `/images/pfalz-2024/PA221969.jpg`.
- Front matter is TOML delimited by `+++`, not YAML.
- Published content is German by default.
- The required validation command is `hugo`.

## Post Types

Use the current content structure instead of inventing new types.

### Regular Post

Use for essays, technical notes, recommendations, and single link/video recommendations. Single link posts are not redirects; they are normal posts tagged `linktipps` with prose and the link embedded in the body.

File:

```text
content/posts/<slug>.md
```

Front matter:

```toml
+++
title = '<title>'
date = YYYY-MM-DDTHH:MM:SS+HH:MM
draft = false
tags = ['tag-one', 'tag-two']
+++
```

Body starts immediately after the closing `+++`. Keep prose in Marian's direct German blog style.

### Weekly Links

Use for "Links der Woche" roundups.

Filename:

```text
content/posts/links-kw<week>-<year>.md
```

Title and metadata:

```toml
+++
title = 'Links KW<week>/<year>'
date = YYYY-MM-DDTHH:MM:SS+HH:MM

tags = ['links der woche', 'linktipps']
draft = false
+++
```

Body pattern:

```markdown
Meine Linksammlung der Woche <week>/<year>:

### https://example.com/article
Ein kurzer deutscher Kommentar, warum der Link interessant ist.
```

Use `### <url>` headings for each item. A blank line after headings is acceptable and already appears in some posts.

### Photo Or Gallery Post

Use when the post is mainly images or travel photos.

For images under `assets/images/<slug>/`, use:

```toml
+++
title = '<title>'
date = YYYY-MM-DDTHH:MM:SS+HH:MM
draft = false
tags = ['bilder', 'reise']

[cover]
image = "/images/<slug>/<filename>.jpg"
+++
```

Gallery shortcode pattern:

```markdown
{{<gallery
    globalMatch="images/<slug>/*"
    sortOrder="asec"
    rowHeight="200"
    margins="5"
    thumbnailResizeOptions="600x600 q90 Lanczos"
    showExif=false
    title=false
    previewType="blur"
    embedPreview=true
    loadJQuery=true
>}}
```

For leaf bundles with colocated images, use `content/posts/<slug>/index.md` and a relative cover path such as `image = "linux.jpg"`.

## Workflow

1. Inspect recent similar posts before creating a file.
2. Choose the post type from the user's request. If unclear, default to a regular post.
3. Generate a lowercase kebab-case slug from the title unless the user provides one.
4. Use the current local date/time with the Europe/Berlin offset unless the user provides a date.
5. Set `draft = false` for posts intended to publish; use `draft = true` only when the user explicitly asks for a draft.
6. Add explicit `tags` when they are clear. Common tags in this repo include `linktipps`, `links der woche`, `linux`, `fedora`, `ai`, `dev`, `bilder`, `reise`, `git`, `buch`.
7. Create the Markdown file with TOML front matter and German body text or placeholders that match the requested post.
8. Run `hugo` after creating or changing content and report whether it passed.

## Optional Link Metadata Helper

For link recommendations or weekly link items, `.agents/skills/blogpost-creator/extract-meta.js` can fetch a URL title and publication date:

```bash
node .agents/skills/blogpost-creator/extract-meta.js <url>
```

Treat this as a convenience only. The helper does not create posts and may need local Node dependencies. Do not add redirect front matter; linked articles belong in normal Markdown prose.
