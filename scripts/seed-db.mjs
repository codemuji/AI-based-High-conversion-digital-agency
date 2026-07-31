import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import postgres from "postgres";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function formatWpContent(rawHtml) {
  if (!rawHtml) return "";
  let cleaned = rawHtml;
  cleaned = cleaned.replace(/\[vc_btn\s+([^\]]+)\]/gi, (_, attrsString) => {
    const titleMatch = attrsString.match(/title=["']([^"']+)["']/i);
    const linkMatch = attrsString.match(/link=["']([^"']+)["']/i);
    const title = titleMatch ? titleMatch[1] : "Click Here";
    let url = "#";
    if (linkMatch) {
      const linkVal = linkMatch[1];
      const urlParam = linkVal.match(/url:([^|]+)/i);
      if (urlParam) {
        try {
          url = decodeURIComponent(urlParam[1]);
        } catch {
          url = urlParam[1];
        }
      }
    }
    return `<div class="my-4 text-center sm:inline-block sm:mr-3">
      <a href="${url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all no-underline">
        ${title} &rarr;
      </a>
    </div>`;
  });
  cleaned = cleaned.replace(/\[vc_column_text\]([\s\S]*?)\[\/vc_column_text\]/gi, "$1");
  cleaned = cleaned.replace(/\[\/?vc_[^\]]*\]/gi, "");
  return cleaned.trim();
}

async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    console.log("No DATABASE_URL environment variable found. Skipping DB insertion.");
    return;
  }

  const jsonPath = path.join(__dirname, "..", "src", "data", "imported-blogs.json");
  if (!fs.existsSync(jsonPath)) {
    console.log("No imported-blogs.json file found. Please run extract-blogs.mjs first.");
    return;
  }

  const posts = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
  console.log(`Seeding ${posts.length} blog posts into PostgreSQL database...`);

  const sql = postgres(connectionString, { ssl: "require" });

  let insertedCount = 0;
  for (const post of posts) {
    const cleanedContent = formatWpContent(post.content);
    try {
      await sql`
        INSERT INTO posts (title, slug, excerpt, content, cover_image, author, category, published, published_at, created_at, updated_at)
        VALUES (
          ${post.title},
          ${post.slug},
          ${post.excerpt},
          ${cleanedContent},
          ${post.coverImage || null},
          ${post.author || "India Web Designs Team"},
          ${post.category || "Web Design & Development"},
          ${post.published ?? true},
          ${post.publishedAt ? new Date(post.publishedAt) : new Date()},
          NOW(),
          NOW()
        )
        ON CONFLICT (slug) DO UPDATE SET
          title = EXCLUDED.title,
          excerpt = EXCLUDED.excerpt,
          content = EXCLUDED.content,
          cover_image = EXCLUDED.cover_image,
          updated_at = NOW();
      `;
      insertedCount++;
    } catch (err) {
      console.error(`Failed to insert post "${post.slug}":`, err.message);
    }
  }

  console.log(`Successfully seeded/updated ${insertedCount} blog posts in database.`);
  await sql.end();
}

main().catch(console.error);
