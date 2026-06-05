#!/usr/bin/env node

const http = require("http");
const https = require("https");

const MAX_REDIRECTS = 5;

function fetchHTML(url, redirects = 0) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const client = parsed.protocol === "https:" ? https : http;

    const request = client.get(parsed, (response) => {
      const location = response.headers.location;

      if (response.statusCode >= 300 && response.statusCode < 400 && location) {
        if (redirects >= MAX_REDIRECTS) {
          reject(new Error("Too many redirects"));
          return;
        }

        const nextUrl = new URL(location, parsed).toString();
        response.resume();
        fetchHTML(nextUrl, redirects + 1).then(resolve, reject);
        return;
      }

      if (response.statusCode < 200 || response.statusCode >= 300) {
        response.resume();
        reject(new Error(`HTTP ${response.statusCode}: ${response.statusMessage}`));
        return;
      }

      let html = "";
      response.setEncoding("utf8");
      response.on("data", (chunk) => {
        html += chunk;
      });
      response.on("end", () => {
        resolve({ html, finalUrl: parsed.toString() });
      });
    });

    request.on("error", reject);
    request.setTimeout(10000, () => {
      request.destroy(new Error("Request timeout"));
    });
  });
}

function decodeEntities(value) {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function getAttr(tag, name) {
  const pattern = new RegExp(`${name}\\s*=\\s*(["'])(.*?)\\1`, "i");
  return tag.match(pattern)?.[2] || "";
}

function metaContent(html, selectorName, selectorValue) {
  const metaTags = html.match(/<meta\b[^>]*>/gi) || [];

  for (const tag of metaTags) {
    const value = getAttr(tag, selectorName);
    if (value.toLowerCase() === selectorValue.toLowerCase()) {
      const content = getAttr(tag, "content");
      if (content) {
        return decodeEntities(content);
      }
    }
  }

  return "";
}

function extractTitle(html) {
  return (
    metaContent(html, "property", "og:title") ||
    metaContent(html, "name", "twitter:title") ||
    decodeEntities(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "")
  );
}

function extractDescription(html) {
  return (
    metaContent(html, "property", "og:description") ||
    metaContent(html, "name", "description") ||
    metaContent(html, "name", "twitter:description")
  );
}

function parseDate(value) {
  if (!value) {
    return null;
  }

  const date = new Date(value);
  if (!Number.isNaN(date.getTime())) {
    return date.toISOString().slice(0, 10);
  }

  return value.match(/\d{4}-\d{2}-\d{2}/)?.[0] || null;
}

function extractPublicationDate(html, url) {
  const candidates = [
    metaContent(html, "property", "article:published_time"),
    metaContent(html, "property", "article:published"),
    metaContent(html, "name", "article:published_time"),
    metaContent(html, "name", "publication_date"),
    metaContent(html, "name", "date"),
    metaContent(html, "property", "datePublished"),
    metaContent(html, "name", "DC.date"),
    metaContent(html, "name", "DC.date.created"),
    getAttr(html.match(/<time\b[^>]*datetime=["'][^"']+["'][^>]*>/i)?.[0] || "", "datetime"),
    url.match(/\/(\d{4})\/(\d{2})\/(\d{2})\//)?.slice(1).join("-"),
  ];

  for (const candidate of candidates) {
    const parsed = parseDate(candidate);
    if (parsed) {
      return parsed;
    }
  }

  return null;
}

async function main() {
  const url = process.argv[2];

  if (!url) {
    console.error("Usage: node .agents/skills/blogpost-creator/extract-meta.js <url>");
    process.exit(1);
  }

  try {
    const { html, finalUrl } = await fetchHTML(url);
    const result = {
      url,
      finalUrl,
      title: extractTitle(html),
      description: extractDescription(html),
      publicationDate: extractPublicationDate(html, finalUrl),
    };

    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

main();
