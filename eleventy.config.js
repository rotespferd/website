export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css/main.css");

  eleventyConfig.addFilter("isoDate", value => {
    const date = value instanceof Date ? value : new Date(value);
    return Number.isNaN(date.getTime()) ? value : date.toISOString().slice(0, 10);
  });

  eleventyConfig.addCollection('blog', collectionsApi => {
    var blog_posts = collectionsApi.getFilteredByGlob("post/**/*.md");
    console.log(blog_posts);
    return blog_posts;
  });
};
