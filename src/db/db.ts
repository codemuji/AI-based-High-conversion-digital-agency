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
  ? globalForDb.pgClient || postgres(connectionString!, { max: 10 })
  : undefined;

if (hasLiveDb && process.env.NODE_ENV !== "production") {
  globalForDb.pgClient = client;
}

export const db = client ? drizzle(client, { schema }) : null;

// In-memory fallback store for local testing without DATABASE_URL
/* eslint-disable @typescript-eslint/no-explicit-any */
interface MockLeadRecord {
  id: number;
  createdAt: Date;
  initialQuery: string;
  category: string;
  contactName: string;
  contactPhone?: string | null;
  contactEmail?: string | null;
  answers: any;
  aiProfile?: any | null;
  status: string;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

const mockLeadsStore: Map<number, MockLeadRecord> = new Map();
let mockIdCounter = 1;

export const mockDbHelper = {
  async insertLead(lead: Omit<MockLeadRecord, "id" | "createdAt">): Promise<number> {
    if (hasLiveDb && db) {
      const [inserted] = await db
        .insert(schema.leads)
        .values({
          initialQuery: lead.initialQuery,
          category: lead.category,
          contactName: lead.contactName,
          contactPhone: lead.contactPhone || null,
          contactEmail: lead.contactEmail || null,
          answers: lead.answers,
          aiProfile: lead.aiProfile || null,
          status: lead.status,
        })
        .returning({ id: schema.leads.id });
      return inserted.id;
    } else {
      const id = mockIdCounter++;
      const record: MockLeadRecord = {
        ...lead,
        id,
        createdAt: new Date(),
      };
      mockLeadsStore.set(id, record);
      console.log(`[Mock DB] Inserted Lead #${id} (${lead.category} - ${lead.contactName})`);
      return id;
    }
  },

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  async updateAiProfile(id: number, aiProfile: any): Promise<void> {
    if (hasLiveDb && db) {
      await db
        .update(schema.leads)
        .set({ aiProfile })
        .where(eq(schema.leads.id, id));
    } else {
      const record = mockLeadsStore.get(id);
      if (record) {
        record.aiProfile = aiProfile;
        mockLeadsStore.set(id, record);
        console.log(`[Mock DB] Updated AI Profile for Lead #${id}:`, aiProfile);
      }
    }
  },

  async getLeadById(id: number): Promise<MockLeadRecord | null> {
    if (hasLiveDb && db) {
      const rows = await db.select().from(schema.leads).where(eq(schema.leads.id, id));
      return rows[0] as unknown as MockLeadRecord || null;
    }
    return mockLeadsStore.get(id) || null;
  },
};
