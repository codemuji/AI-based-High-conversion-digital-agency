import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://indiawebdesigns.in";

async function fetchPage(url) {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });
    if (!res.ok) return null;
    return await res.text();
  } catch (err) {
    console.error(`Failed to fetch ${url}:`, err.message);
    return null;
  }
}

function decodeHtml(html) {
  return html
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function stripTags(html) {
  return html.replace(/<[^>]*>/g, "").trim();
}

async function extractFromListingPage(pageno) {
  const url = `${BASE_URL}/iwd-blog?&pageno=${pageno}`;
  console.log(`Fetching page ${pageno}...`);
  const html = await fetchPage(url);
  if (!html) return [];

  const posts = [];
  const boxes = html.split('<div class="fr-latest-box">');
  boxes.shift();

  for (const box of boxes) {
    const hrefMatch = box.match(/<h3>\s*<a\s+href=["']([^"']+)["']>\s*([^<]+)<\/a>/i);
    if (!hrefMatch) continue;

    const rawSlug = hrefMatch[1].trim();
    const title = decodeHtml(hrefMatch[2].trim());

    if (!rawSlug || rawSlug.startsWith("http") || rawSlug.includes("index.php") || rawSlug === "#") {
      continue;
    }

    const imgMatch =
      box.match(/<img\s+src=["']([^"']+)["']\s+class=["']img-fluid wp-post-image["']/i) ||
      box.match(/<img\s+src=["']([^"']+)["']/i);
    let coverImage = null;
    if (imgMatch) {
      let imgSrc = imgMatch[1];
      if (!imgSrc.startsWith("http")) {
        imgSrc = `${BASE_URL}/${imgSrc.replace(/^\//, "")}`;
      }
      coverImage = imgSrc;
    }

    const dateMatch = box.match(/<i\s+class=["']fa fa-calendar["'][^>]*><\/i>\s*<span>([^<]+)<\/span>/i);
    const publishedAt = dateMatch ? dateMatch[1].trim() : null;

    const excerptMatch = box.match(/<div class="fr-latest-container">\s*<p>([\s\S]*?)<\/p>/i);
    let excerpt = excerptMatch ? stripTags(decodeHtml(excerptMatch[1])) : "";
    if (excerpt.length > 250) excerpt = excerpt.substring(0, 247) + "...";

    posts.push({
      slug: rawSlug,
      title,
      coverImage,
      publishedAt,
      excerpt: excerpt || title,
    });
  }

  return posts;
}

async function extractPostDetail(slug) {
  const detailUrl = `${BASE_URL}/${slug}`;
  const html = await fetchPage(detailUrl);
  if (!html) return null;

  const containerMatch = html.match(/<div class="fr-latest-container">([\s\S]*?)<div class="clearfix"><\/div>/i);
  if (containerMatch) {
    let contentHtml = containerMatch[1].trim();
    contentHtml = contentHtml.replace(/<!--[\s\S]*?-->/g, "").trim();
    return contentHtml;
  }

  const descMatch = html.match(/<div class="blog-detial-main-area post-excerpt post-desc">([\s\S]*?)<\/aside>/i);
  if (descMatch) {
    return descMatch[1].trim();
  }

  return null;
}

async function main() {
  const allPostsMap = new Map();

  for (let page = 1; page <= 90; page++) {
    const posts = await extractFromListingPage(page);
    if (posts.length === 0) {
      console.log(`Page ${page} returned no posts. Stopping pagination.`);
      break;
    }

    let addedNew = 0;
    for (const post of posts) {
      if (!allPostsMap.has(post.slug)) {
        allPostsMap.set(post.slug, post);
        addedNew++;
      }
    }

    console.log(`Page ${page}: Extracted ${posts.length} posts (${addedNew} new). Total so far: ${allPostsMap.size}`);
  }

  const postsArray = Array.from(allPostsMap.values());
  console.log(`\nFetching detail pages for ${postsArray.length} posts...`);

  const BATCH_SIZE = 5;
  for (let i = 0; i < postsArray.length; i += BATCH_SIZE) {
    const batch = postsArray.slice(i, i + BATCH_SIZE);
    await Promise.all(
      batch.map(async (post) => {
        console.log(`Fetching detail content for: ${post.slug}`);
        const content = await extractPostDetail(post.slug);
        post.content = content || `<p>${post.excerpt}</p>`;
        post.author = "India Web Designs Team";
        post.category = "Web Design & Development";
        post.published = true;
      })
    );
  }

  const outputDir = path.join(__dirname, "..", "src", "data");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputPath = path.join(outputDir, "imported-blogs.json");
  fs.writeFileSync(outputPath, JSON.stringify(postsArray, null, 2), "utf-8");
  console.log(`\nSuccessfully imported ${postsArray.length} blog posts into ${outputPath}`);
}

main().catch(console.error);
