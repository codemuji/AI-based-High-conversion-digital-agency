import { pgTable, serial, text, timestamp, jsonb, varchar } from "drizzle-orm/pg-core";

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
