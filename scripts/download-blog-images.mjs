import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const JSON_PATH = path.join(__dirname, "..", "src", "data", "imported-blogs.json");
const PUBLIC_DIR = path.join(__dirname, "..", "public", "blog-images");

if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

function getFilenameForUrl(url) {
  try {
    const parsed = new URL(url);
    const pathname = parsed.pathname;
    let ext = path.extname(pathname) || ".jpg";
    if (ext.length > 5 || ext.includes("?")) ext = ".jpg";
    const hash = crypto.createHash("md5").update(url).digest("hex").substring(0, 12);
    const basename = path.basename(pathname, path.extname(pathname)).replace(/[^a-zA-Z0-9_-]/g, "_");
    return `${basename || "img"}_${hash}${ext}`;
  } catch {
    const hash = crypto.createHash("md5").update(url).digest("hex").substring(0, 12);
    return `img_${hash}.jpg`;
  }
}

async function downloadImage(url) {
  try {
    let targetUrl = url;
    if (!targetUrl.startsWith("http")) {
      targetUrl = `https://indiawebdesigns.in/${targetUrl.replace(/^\//, "")}`;
    }

    const filename = getFilenameForUrl(targetUrl);
    const destPath = path.join(PUBLIC_DIR, filename);

    if (fs.existsSync(destPath) && fs.statSync(destPath).size > 100) {
      return `/blog-images/${filename}`;
    }

    const res = await fetch(targetUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });

    if (!res.ok) return null;

    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    if (buffer.length < 50) return null;

    fs.writeFileSync(destPath, buffer);
    console.log(`Downloaded: ${targetUrl} -> /blog-images/${filename}`);
    return `/blog-images/${filename}`;
  } catch (err) {
    console.error(`Failed to download ${url}:`, err.message);
    return null;
  }
}

async function main() {
  if (!fs.existsSync(JSON_PATH)) {
    console.error("imported-blogs.json not found!");
    return;
  }

  const posts = JSON.parse(fs.readFileSync(JSON_PATH, "utf-8"));
  console.log(`Processing images for ${posts.length} blog posts...`);

  const imageUrls = new Set();

  for (const post of posts) {
    if (post.coverImage && post.coverImage.length > 5) {
      imageUrls.add(post.coverImage);
    }
    const imgMatches = post.content ? post.content.matchAll(/<img[^>]+src=["']([^"']+)["']/gi) : [];
    for (const match of imgMatches) {
      if (match[1]) imageUrls.add(match[1]);
    }
  }

  console.log(`Found ${imageUrls.size} unique image URLs to download.`);

  const urlMap = new Map();
  const urlsArray = Array.from(imageUrls);

  const BATCH_SIZE = 8;
  for (let i = 0; i < urlsArray.length; i += BATCH_SIZE) {
    const batch = urlsArray.slice(i, i + BATCH_SIZE);
    await Promise.all(
      batch.map(async (url) => {
        const localPath = await downloadImage(url);
        if (localPath) {
          urlMap.set(url, localPath);
        }
      })
    );
  }

  console.log(`Successfully downloaded ${urlMap.size} images locally.`);

  let updatedCount = 0;
  for (const post of posts) {
    let modified = false;

    if (post.coverImage && urlMap.has(post.coverImage)) {
      post.coverImage = urlMap.get(post.coverImage);
      modified = true;
    }

    if (post.content) {
      post.content = post.content.replace(/<img([^>]+)src=["']([^"']+)["']/gi, (full, attrs, src) => {
        if (urlMap.has(src)) {
          modified = true;
          return `<img${attrs}src="${urlMap.get(src)}"`;
        }
        return full;
      });
    }

    if (modified) updatedCount++;
  }

  fs.writeFileSync(JSON_PATH, JSON.stringify(posts, null, 2), "utf-8");
  console.log(`Updated ${updatedCount} blog posts with local image references in ${JSON_PATH}`);
}

main().catch(console.error);
