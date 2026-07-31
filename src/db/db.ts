import { drizzle } from "drizzle-orm/postgres-js";
import { eq } from "drizzle-orm";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;

// Global singleton for Postgres client
const globalForDb = globalThis as unknown as {
  pgClient: postgres.Sql | undefined;
};

export const hasLiveDb = Boolean(connectionString && connectionString.trim().length > 0);

const client = hasLiveDb
  ? globalForDb.pgClient ||
    postgres(connectionString!, {
      max: 10,
      ssl: "require",
      connect_timeout: 10,
    })
  : undefined;

if (hasLiveDb && process.env.NODE_ENV !== "production") {
  globalForDb.pgClient = client;
}

export const db = client ? drizzle(client, { schema }) : null;

/* eslint-disable @typescript-eslint/no-explicit-any */
// In-memory fallback stores for local testing without DATABASE_URL
const mockLeadsStore: Map<number, schema.Lead> = new Map();
const mockEnquiriesStore: Map<number, schema.Enquiry> = new Map();
const mockPostsStore: Map<number, schema.Post> = new Map();

let mockLeadId = 1;
let mockEnquiryId = 1;
let mockPostId = 1;
/* eslint-enable @typescript-eslint/no-explicit-any */

// Seed initial sample blog posts into mock store if empty
if (mockPostsStore.size === 0) {
  let initialPosts: schema.NewPost[] = [];
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const imported = require("@/data/imported-blogs.json");
    if (Array.isArray(imported) && imported.length > 0) {
      initialPosts = imported.map((item: any) => ({
        title: item.title,
        slug: item.slug,
        excerpt: item.excerpt,
        content: item.content,
        coverImage: item.coverImage || null,
        category: item.category || "Web Design & Development",
        author: item.author || "India Web Designs Team",
        published: true,
        publishedAt: item.publishedAt ? new Date(item.publishedAt) : new Date(),
      }));
    }
  } catch {
    // Fallback if file not found yet
  }

  if (initialPosts.length === 0) {
    initialPosts = [
      {
        title: "Why Custom Next.js Engineering Beats Outdated WordPress Themes in 2026",
        slug: "why-custom-nextjs-beats-wordpress-in-2026",
        excerpt: "Discover how custom Next.js web application architecture delivers sub-0.8s edge load speeds, 100/100 Core Web Vitals, and immune security compared to vulnerable WordPress plugins.",
        content: `In 2026, page load speed and security dictate digital revenue. Indian businesses relying on bloated WordPress themes face slow 3+ second page loads, plugin vulnerabilities, and costly monthly plugin maintenance fees.\n\n### 1. Sub-0.8s Edge Performance\nNext.js leverages Server Components and global Edge CDN distribution to render pages instantly in under 800 milliseconds worldwide.\n\n### 2. Zero Plugin Vulnerability\nCustom React & Next.js architectures eliminate third-party PHP plugin exploits and SQL injection risks completely.\n\n### 3. Superior Google SEO Rankings\nGoogle prioritizes sites with top-tier Core Web Vitals. Fast Next.js websites rank significantly higher for competitive local and national keywords.`,
        coverImage: "/images/static_website.png",
        category: "Web Design",
        author: "India Web Designs Architecture Team",
        published: true,
        publishedAt: new Date("2026-07-15T10:00:00Z"),
      },
      {
        title: "How Indian Businesses Are Automating 24/7 WhatsApp Customer Service",
        slug: "automating-247-whatsapp-customer-service-in-india",
        excerpt: "Learn how official WhatsApp Business API integration and intelligent responder bots capture leads, answer FAQs, and process orders around the clock.",
        content: `Indian consumers prefer communicating via WhatsApp. Businesses that automate initial customer inquiries see a 3.4x increase in conversion rates.\n\n### Instant Response SLA\nWhen a potential client asks for pricing or catalog details at midnight, automated WhatsApp workflows respond instantly within 2 seconds.\n\n### Seamless Lead Routing\nInquiries are categorized automatically and pushed straight into your internal CRM or office dashboard for immediate team follow-up.`,
        coverImage: "/images/Whatsapp_Messaging_&_Bots.png",
        category: "Digital Marketing",
        author: "India Web Designs AI Team",
        published: true,
        publishedAt: new Date("2026-07-22T14:30:00Z"),
      },
    ];
  }

  for (const post of initialPosts) {
    const id = mockPostId++;
    const record: schema.Post = {
      id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      coverImage: post.coverImage || null,
      author: post.author || "India Web Designs Team",
      category: post.category || "Web Design",
      published: post.published ?? true,
      publishedAt: post.publishedAt || new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    mockPostsStore.set(id, record);
  }
}

export const mockDbHelper = {
  // --- LEADS ---
  async insertLead(lead: schema.NewLead): Promise<number> {
    if (hasLiveDb && db) {
      const [inserted] = await db
        .insert(schema.leads)
        .values(lead)
        .returning({ id: schema.leads.id });
      return inserted.id;
    } else {
      const id = mockLeadId++;
      const record: schema.Lead = {
        ...lead,
        id,
        contactPhone: lead.contactPhone || null,
        contactEmail: lead.contactEmail || null,
        aiProfile: lead.aiProfile || null,
        status: lead.status || "new",
        createdAt: new Date(),
      };
      mockLeadsStore.set(id, record);
      return id;
    }
  },

  async getAllLeads(): Promise<schema.Lead[]> {
    if (hasLiveDb && db) {
      return db.select().from(schema.leads).orderBy(schema.leads.createdAt);
    }
    return Array.from(mockLeadsStore.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  },

  // --- ENQUIRIES ---
  async insertEnquiry(enquiry: schema.NewEnquiry): Promise<number> {
    if (hasLiveDb && db) {
      const [inserted] = await db
        .insert(schema.enquiries)
        .values(enquiry)
        .returning({ id: schema.enquiries.id });
      return inserted.id;
    } else {
      const id = mockEnquiryId++;
      const record: schema.Enquiry = {
        ...enquiry,
        id,
        status: enquiry.status || "new",
        createdAt: new Date(),
      };
      mockEnquiriesStore.set(id, record);
      return id;
    }
  },

  async getAllEnquiries(): Promise<schema.Enquiry[]> {
    if (hasLiveDb && db) {
      return db.select().from(schema.enquiries).orderBy(schema.enquiries.createdAt);
    }
    return Array.from(mockEnquiriesStore.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  },

  // --- POSTS (BLOG) ---
  async getAllPosts(onlyPublished = false): Promise<schema.Post[]> {
    if (hasLiveDb && db) {
      const query = db.select().from(schema.posts);
      if (onlyPublished) {
        return query.where(eq(schema.posts.published, true));
      }
      return query;
    }
    let list = Array.from(mockPostsStore.values());
    if (onlyPublished) {
      list = list.filter((p) => p.published);
    }
    return list.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  },

  async getPostBySlug(slug: string): Promise<schema.Post | null> {
    if (hasLiveDb && db) {
      const results = await db.select().from(schema.posts).where(eq(schema.posts.slug, slug));
      return results[0] || null;
    }
    for (const post of mockPostsStore.values()) {
      if (post.slug === slug) return post;
    }
    return null;
  },

  async insertPost(post: schema.NewPost): Promise<number> {
    if (hasLiveDb && db) {
      const [inserted] = await db
        .insert(schema.posts)
        .values(post)
        .returning({ id: schema.posts.id });
      return inserted.id;
    } else {
      const id = mockPostId++;
      const record: schema.Post = {
        ...post,
        id,
        coverImage: post.coverImage || null,
        author: post.author || "India Web Designs Team",
        category: post.category || "Web Design",
        published: post.published ?? false,
        publishedAt: post.published ? new Date() : null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      mockPostsStore.set(id, record);
      return id;
    }
  },
};
