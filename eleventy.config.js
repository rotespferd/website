import { readdirSync } from "node:fs";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("css/main.css");
  // Article images live in assets/images/<slug>/ and are served at /images/<slug>/.
  eleventyConfig.addPassthroughCopy({ "assets/images": "images" });

  // {% gallery "slug" %} lists every image in assets/images/<slug>/ in name order.
  eleventyConfig.addShortcode("gallery", slug => {
    const files = readdirSync(`assets/images/${slug}`)
      .filter(name => /\.(jpe?g|png|webp|avif|gif)$/i.test(name))
      .sort();
    const items = files
      .map(name => `<a href="/images/${slug}/${name}"><img src="/images/${slug}/${name}" alt="" loading="lazy"></a>`)
      .join("");
    return `<div class="gallery">${items}</div>`;
  });

  eleventyConfig.addFilter("isoDate", value => {
    const date = value instanceof Date ? value : new Date(value);
    return Number.isNaN(date.getTime()) ? value : date.toISOString().slice(0, 10);
  });

  const NAMED_ENTITIES = {
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
    nbsp: " ",
  };

  eleventyConfig.addFilter("rfc3339", value => new Date(value).toISOString());

  eleventyConfig.addFilter("teaser", (content, maxLength = 250) => {
    const text = String(content ?? "")
      .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
      .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
      .replace(/&(\w+);/g, (match, name) => NAMED_ENTITIES[name.toLowerCase()] ?? match)
      .replace(/\s+/g, " ")
      .trim();

    if (text.length <= maxLength) return text;

    // Leave room for the ellipsis so the teaser never exceeds maxLength.
    const limit = Math.max(1, maxLength - 1);
    const cut = text.slice(0, limit);
    const lastSpace = cut.lastIndexOf(" ");
    return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trimEnd()}\u2026`;
  });

  eleventyConfig.addCollection('blog', collectionsApi => {
    return collectionsApi
      .getFilteredByGlob("post/**/*.md")
      .sort((a, b) => b.date - a.date);
  });

  // One entry per tag with its posts (newest first). Feeds the label list
  // in the sidebar and the generated /tags/<slug>/ pages.
  eleventyConfig.addCollection('tagList', collectionsApi => {
    const byTag = new Map();
    for (const post of collectionsApi.getFilteredByGlob("post/**/*.md").sort((a, b) => b.date - a.date)) {
      for (const tag of post.data.tags ?? []) {
        if (!byTag.has(tag)) byTag.set(tag, []);
        byTag.get(tag).push(post);
      }
    }
    const counts = [...byTag.values()].map(posts => posts.length);
    const min = Math.min(...counts);
    const max = Math.max(...counts);
    // weight 1-5 for the tag cloud; a flat distribution gets the middle size.
    const weight = count => (max === min ? 3 : 1 + Math.round((4 * (count - min)) / (max - min)));
    return [...byTag]
      .map(([name, posts]) => ({
        name,
        slug: eleventyConfig.getFilter("slugify")(name),
        posts,
        weight: weight(posts.length),
      }))
      .sort((a, b) => a.name.localeCompare(b.name, "de"));
  });

  // All posts grouped by year, newest year and newest post first.
  eleventyConfig.addCollection('postsByYear', collectionsApi => {
    const byYear = new Map();
    for (const post of collectionsApi.getFilteredByGlob("post/**/*.md").sort((a, b) => b.date - a.date)) {
      const year = post.date.getUTCFullYear();
      if (!byYear.has(year)) byYear.set(year, []);
      byYear.get(year).push(post);
    }
    return [...byYear].map(([year, posts]) => ({ year, posts }));
  });
};
