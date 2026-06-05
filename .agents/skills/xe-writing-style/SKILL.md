---
name: marian-writing-style
description:
  Draft, revise, and review posts for Marian Hahne's Hugo blog in Marian's
  direct German style. Use when turning notes into posts for
  www.marianhahne.de, editing blog prose to match Marian's voice, or reviewing
  drafts for tone, structure, and blog fit.
---

# Marian Writing Style

Write for Marian's personal Hugo blog at `www.marianhahne.de`. This skill is
about voice, structure, and editorial judgment. When creating actual post files,
also use the `blogpost-creator` skill for front matter, filenames, post types,
and validation.

## Calibration

Before drafting or heavily editing, read 2-4 existing posts that match the
requested format:

- Technical/practical notes: `content/posts/mein-fedora-update-script.md`,
  `content/posts/rezepte-in-git.md`,
  `content/posts/chatgpt-buchstaben-zaehlen.md`
- Link roundups: `content/posts/links-kw18-2025.md`
- Short statements: `content/posts/i-will-not-fix-your-vibecoded-app.md`
- Travel/photo posts: `content/posts/pfalz-2024.md`
- Personal/profile context: `content/ueber-mich.md`

Use these as calibration, not as templates to copy verbatim.

## Core Voice

German is the default for published content. English is acceptable only when the
user asks for it or when the post is intentionally bilingual/quoted.

The voice is:

- direct, personal, and grounded in everyday use
- technically literate without performing expertise
- pragmatic: explain what works, where it helps, and where it has limits
- reflective without becoming grandiose
- politically aware when the topic naturally calls for it
- comfortable saying "für mich", "aus meiner Sicht", "im Zweifelsfall", and
  "aktuell" when those qualifiers are honest

The narrator is usually present. Marian often starts from a concrete personal
use case, explains the setup or observation, then draws a practical conclusion.

## What To Avoid

Avoid MDX/JSX components, character dialogue, fantasy
framing, heavy satire, or English internet catchphrases
unless the user explicitly asks for that.

Avoid:

- corporate prose: "nutzen Sie Synergien", "Potenziale heben", "smarte
  Lösungen", "revolutionär"
- AI-polished drama: "Was dann geschah", "Hier ist der Clou", inflated stakes
- listicle filler and generic summaries
- excessive rhetorical questions
- emoji, decorative Unicode, and em dash-heavy cadence
- intentionally reproducing typos from older posts

Keep the text human and specific. Fix obvious spelling and grammar mistakes when
editing, but preserve Marian's plain, direct phrasing.

## Structure Patterns

Choose the structure that fits the material.

### Technical Or Tool Post

Use for Linux, Git, scripts, backups, development notes, and self-hosting.

Pattern:

1. Personal reason or recurring problem
2. Existing setup or assumptions
3. Concrete implementation, command, config, or workflow
4. Why the approach is useful
5. Limits, tradeoffs, or alternatives
6. Short conclusion

Code blocks should be complete enough to understand. Prefer concise explanation
around the code instead of line-by-line commentary.

### AI Or Technology Reflection

Use for ChatGPT, LLMs, software trends, and social/technical commentary.

Pattern:

1. A concrete example or small experiment
2. What happened and why it is interesting
3. Context from sources or personal experience
4. Assessment with uncertainty where appropriate
5. Practical consequence for Marian's own behavior or expectations

Be skeptical of hype. If discussing AI, include costs, reliability limits, or
environmental/social implications when they are relevant.

### Link Recommendation

Use concise commentary. Explain why the link is worth reading and what angle
matters. Marian's link posts often allow a clear political or personal opinion
instead of neutral annotation.

For weekly roundups, use the format from `blogpost-creator`: a short intro,
then `### <url>` headings with German commentary.

### Photo Or Travel Post

Keep prose minimal unless the user supplies a story. It is acceptable to use a
short quote with attribution followed by the gallery shortcode conventions from
`blogpost-creator`.

## Sentence And Paragraph Style

- Prefer short to medium paragraphs.
- Lead paragraphs with concrete context, not a generic thesis.
- Use headings only when they help the reader scan the post.
- Inline links should be integrated naturally into the sentence.
- Use Markdown blockquotes for quoted material.
- Let conclusions be modest: "für mich ist das aktuell der richtige Weg" is
  often better than a universal claim.

Good paragraph shape:

```markdown
Um meine Fedora-Systeme aktuell zu halten, habe ich über die Zeit ein kleines
Update-Skript etabliert. Damit aktualisiere ich nicht nur die DNF-Pakete,
sondern auch Flatpaks und VS Code Extensions in einem Durchlauf.
```

Good reflective close:

```markdown
Natürlich ist das der nerdy way, um damit umzugehen. Es gibt gute Apps dafür.
Aber wie immer gilt: man muss den Weg finden, der für einen selbst der richtige
ist.
```

## Editorial Checks

Before delivering a draft or edit:

1. Confirm the language choice fits the blog, usually German.
2. Check that the post starts from a concrete use case, observation, or link.
3. Remove generic AI-writing phrases and marketing language.
4. Keep claims scoped to Marian's experience unless evidence is provided.
5. Preserve Hugo Markdown conventions: TOML front matter with `+++`, normal
   Markdown body, Hugo shortcodes where already used by the blog.
6. If files were changed, run `hugo` unless the user explicitly asked only for a
   prose draft.
