export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css/main.css");

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
};
