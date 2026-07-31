import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import postgres from "postgres";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const JSON_PATH = path.join(__dirname, "..", "src", "data", "imported-blogs.json");

async function main() {
  if (!fs.existsSync(JSON_PATH)) return;

  const posts = JSON.parse(fs.readFileSync(JSON_PATH, "utf-8"));
  console.log(`Checking cover images for ${posts.length} posts...`);

  let updatedCount = 0;
  for (const post of posts) {
    // If coverImage is not a local image path or is missing, try to find first image in content
    if (!post.coverImage || (!post.coverImage.startsWith("/blog-images/") && !post.coverImage.startsWith("/images/"))) {
      if (post.content) {
        const match = post.content.match(/<img[^>]+src=["']([^"']+)["']/i);
        if (match && match[1]) {
          post.coverImage = match[1];
          updatedCount++;
        }
      }
    }
  }

  console.log(`Updated ${updatedCount} posts with cover images extracted from content.`);
  fs.writeFileSync(JSON_PATH, JSON.stringify(posts, null, 2), "utf-8");

  // Re-seed DB if DATABASE_URL exists
  const connectionString = process.env.DATABASE_URL;
  if (connectionString) {
    console.log("Updating live PostgreSQL database with fixed cover images...");
    const sql = postgres(connectionString, { ssl: "require" });
    for (const post of posts) {
      if (post.coverImage) {
        await sql`
          UPDATE posts SET cover_image = ${post.coverImage} WHERE slug = ${post.slug};
        `;
      }
    }
    await sql.end();
    console.log("PostgreSQL database updated with fixed cover images!");
  }
}

main().catch(console.error);
