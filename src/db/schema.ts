import { pgTable, serial, text, timestamp, jsonb, varchar, boolean } from "drizzle-orm/pg-core";

// 1. Multi-Step Onboarding Leads Table
export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  initialQuery: text("initial_query").notNull(),
  category: varchar("category", { length: 64 }).notNull(),
  contactName: text("contact_name").notNull(),
  contactPhone: varchar("contact_phone", { length: 64 }),
  contactEmail: varchar("contact_email", { length: 128 }),
  answers: jsonb("answers").notNull(),
  aiProfile: jsonb("ai_profile"),
  status: varchar("status", { length: 32 }).default("new").notNull(),
});

export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;

// 2. Direct Contact Form Enquiries Table
export const enquiries = pgTable("enquiries", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  name: text("name").notNull(),
  email: varchar("email", { length: 128 }).notNull(),
  phone: varchar("phone", { length: 64 }).notNull(),
  service: varchar("service", { length: 128 }).notNull(),
  message: text("message").notNull(),
  status: varchar("status", { length: 32 }).default("new").notNull(), // 'new' | 'contacted' | 'closed'
});

export type Enquiry = typeof enquiries.$inferSelect;
export type NewEnquiry = typeof enquiries.$inferInsert;

// 3. Blog Articles & Content CMS Table
export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: varchar("slug", { length: 256 }).notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  coverImage: text("cover_image"),
  author: varchar("author", { length: 128 }).default("India Web Designs Team").notNull(),
  category: varchar("category", { length: 64 }).default("Web Design").notNull(),
  published: boolean("published").default(false).notNull(),
  publishedAt: timestamp("published_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;
