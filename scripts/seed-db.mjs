import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import postgres from "postgres";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
    try {
      await sql`
        INSERT INTO posts (title, slug, excerpt, content, cover_image, author, category, published, published_at, created_at, updated_at)
        VALUES (
          ${post.title},
          ${post.slug},
          ${post.excerpt},
          ${post.content},
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
