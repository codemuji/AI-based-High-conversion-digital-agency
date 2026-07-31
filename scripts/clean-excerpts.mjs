import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import postgres from "postgres";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const JSON_PATH = path.join(__dirname, "..", "src", "data", "imported-blogs.json");

function stripAllHtmlAndShortcodes(html) {
  if (!html) return "";
  let text = html;

  // Remove WP shortcodes
  text = text.replace(/\[\/?vc_[^\]]*\]/gi, " ");

  // Remove full HTML tags <...>
  text = text.replace(/<[^>]*>/g, " ");

  // Remove unclosed HTML tags or leftover attribute snippets e.g. <span style="..."
  text = text.replace(/<[a-z0-9_-]+[^>]*$/gi, " ");

  // Decode common HTML entities
  text = text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&[a-z0-9]+;/gi, " ");

  // Remove style/attribute residue if any
  text = text.replace(/style=["'][^"']*["']/gi, " ");
  text = text.replace(/font-family:[^;"]+;?/gi, " ");
  text = text.replace(/<span/gi, " ");

  return text.replace(/\s+/g, " ").trim();
}

function getCleanExcerpt(post) {
  let clean = stripAllHtmlAndShortcodes(post.excerpt);

  if (!clean || clean.length < 15 || clean.includes("style=") || clean.includes("font-family") || clean.startsWith("<span")) {
    clean = stripAllHtmlAndShortcodes(post.content);
  }

  if (clean.length > 200) {
    clean = clean.substring(0, 197) + "...";
  }

  return clean;
}

async function main() {
  if (!fs.existsSync(JSON_PATH)) return;

  const posts = JSON.parse(fs.readFileSync(JSON_PATH, "utf-8"));
  console.log(`Cleaning excerpts for ${posts.length} posts...`);

  let updatedCount = 0;
  for (const post of posts) {
    const newExcerpt = getCleanExcerpt(post);
    if (newExcerpt !== post.excerpt) {
      post.excerpt = newExcerpt;
      updatedCount++;
    }
  }

  console.log(`Cleaned excerpts for ${updatedCount} blog posts.`);
  fs.writeFileSync(JSON_PATH, JSON.stringify(posts, null, 2), "utf-8");

  const connectionString = process.env.DATABASE_URL;
  if (connectionString) {
    console.log("Updating live PostgreSQL database with clean excerpts...");
    const sql = postgres(connectionString, { ssl: "require" });
    for (const post of posts) {
      await sql`
        UPDATE posts SET excerpt = ${post.excerpt} WHERE slug = ${post.slug};
      `;
    }
    await sql.end();
    console.log("PostgreSQL database updated with clean excerpts!");
  }
}

main().catch(console.error);
