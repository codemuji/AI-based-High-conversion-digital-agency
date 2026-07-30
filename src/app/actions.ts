"use server";

import { after } from "next/server";
import { cookies } from "next/headers";
import crypto from "crypto";
import { mockDbHelper, db, hasLiveDb } from "@/db/db";
import * as schema from "@/db/schema";
import { eq } from "drizzle-orm";
import { generateAiProfile, sendTeamNotification } from "@/lib/ai-profiler";
import type { LeadSubmissionPayload } from "@/components/modal/OnboardingModal";

export interface SubmitLeadResponse {
  success: boolean;
  leadId?: number;
  error?: string;
}

export interface ContactEnquiryPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface GenericResponse {
  success: boolean;
  error?: string;
  id?: number;
}

/**
 * Helper to enforce server-side authentication on admin actions
 */
async function requireAdminAuth(): Promise<void> {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session")?.value;
  if (!session || session !== "authenticated") {
    throw new Error("Unauthorized: Admin authentication required.");
  }
}

/**
 * 1. Submit Multi-Step Onboarding Lead Server Action (Public)
 */
export async function submitLeadAction(payload: LeadSubmissionPayload): Promise<SubmitLeadResponse> {
  try {
    if (!payload.category || !payload.contact?.name) {
      return { success: false, error: "Missing required contact details or category." };
    }

    const leadId = await mockDbHelper.insertLead({
      initialQuery: payload.initialQuery || payload.category,
      category: payload.category,
      contactName: payload.contact.name,
      contactPhone: payload.contact.phone || null,
      contactEmail: payload.contact.email || null,
      answers: payload.answers,
      status: "new",
    });

    const runAsyncJob = async () => {
      try {
        const aiProfile = await generateAiProfile(
          payload.initialQuery || payload.category,
          payload.category,
          payload.answers
        );

        if (hasLiveDb && db) {
          await db
            .update(schema.leads)
            .set({ aiProfile })
            .where(eq(schema.leads.id, leadId));
        }

        await sendTeamNotification({
          leadId,
          category: payload.category,
          contactName: payload.contact.name,
          contactPhone: payload.contact.phone || null,
          contactEmail: payload.contact.email || null,
          initialQuery: payload.initialQuery || payload.category,
          answers: payload.answers,
          aiProfile,
        });
      } catch (asyncErr) {
        console.error(`[Async Job Error] Lead #${leadId}:`, asyncErr);
      }
    };

    if (typeof after === "function") {
      after(runAsyncJob);
    } else {
      runAsyncJob();
    }

    return { success: true, leadId };
  } catch (err) {
    console.error("[submitLeadAction] Exception:", err);
    return { success: false, error: "Internal server error saving lead." };
  }
}

/**
 * 2. Submit Direct Contact Form Enquiry Action (Public)
 */
export async function submitContactEnquiryAction(payload: ContactEnquiryPayload): Promise<GenericResponse> {
  try {
    if (!payload.name || !payload.email || !payload.phone || !payload.message) {
      return { success: false, error: "Please fill out all required fields." };
    }

    const enquiryId = await mockDbHelper.insertEnquiry({
      name: payload.name.trim(),
      email: payload.email.trim(),
      phone: payload.phone.trim(),
      service: payload.service || "General Inquiry",
      message: payload.message.trim(),
      status: "new",
    });

    return { success: true, id: enquiryId };
  } catch (err) {
    console.error("[submitContactEnquiryAction] Exception:", err);
    return { success: false, error: "Failed to submit inquiry. Please try again." };
  }
}

/**
 * 3. Admin Authentication Actions (Constant-Time Verification)
 */
export async function verifyAdminPasswordAction(password: string): Promise<GenericResponse> {
  try {
    const secretKey = process.env.ADMIN_SECRET_KEY || "admin123";

    const targetBuffer = Buffer.from(secretKey, "utf-8");
    const inputBuffer = Buffer.from(password || "", "utf-8");

    let isValid = false;
    if (targetBuffer.length === inputBuffer.length) {
      isValid = crypto.timingSafeEqual(targetBuffer, inputBuffer);
    }

    if (isValid) {
      const cookieStore = await cookies();
      cookieStore.set("admin_session", "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24, // 24 hours
        path: "/",
      });
      return { success: true };
    }

    return { success: false, error: "Invalid admin password." };
  } catch (err) {
    console.error("[verifyAdminPasswordAction] Exception:", err);
    return { success: false, error: "Authentication check failed." };
  }
}

export async function adminLogoutAction(): Promise<GenericResponse> {
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");
  return { success: true };
}

/**
 * 4. Protected Admin Data Fetching & Update Actions
 */
export async function getAdminEnquiriesAction(): Promise<schema.Enquiry[]> {
  await requireAdminAuth();
  return mockDbHelper.getAllEnquiries();
}

export async function updateEnquiryStatusAction(id: number, status: string): Promise<GenericResponse> {
  try {
    await requireAdminAuth();
    if (hasLiveDb && db) {
      await db.update(schema.enquiries).set({ status }).where(eq(schema.enquiries.id, id));
    }
    return { success: true };
  } catch (err) {
    console.error("[updateEnquiryStatusAction] Exception:", err);
    return { success: false, error: "Unauthorized or failed to update status." };
  }
}

export async function getAdminLeadsAction(): Promise<schema.Lead[]> {
  await requireAdminAuth();
  return mockDbHelper.getAllLeads();
}

export async function getAdminPostsAction(onlyPublished = false): Promise<schema.Post[]> {
  if (!onlyPublished) {
    await requireAdminAuth();
  }
  return mockDbHelper.getAllPosts(onlyPublished);
}

export async function getPostBySlugAction(slug: string): Promise<schema.Post | null> {
  return mockDbHelper.getPostBySlug(slug);
}

export async function savePostAction(postData: schema.NewPost, id?: number): Promise<GenericResponse> {
  try {
    await requireAdminAuth();
    if (hasLiveDb && db) {
      if (id) {
        await db
          .update(schema.posts)
          .set({
            ...postData,
            updatedAt: new Date(),
            publishedAt: postData.published ? new Date() : null,
          })
          .where(eq(schema.posts.id, id));
        return { success: true, id };
      } else {
        const [inserted] = await db
          .insert(schema.posts)
          .values({
            ...postData,
            publishedAt: postData.published ? new Date() : null,
          })
          .returning({ id: schema.posts.id });
        return { success: true, id: inserted.id };
      }
    } else {
      const insertedId = await mockDbHelper.insertPost(postData);
      return { success: true, id: insertedId };
    }
  } catch (err) {
    console.error("[savePostAction] Exception:", err);
    return { success: false, error: "Unauthorized or failed to save post." };
  }
}

export async function deletePostAction(id: number): Promise<GenericResponse> {
  try {
    await requireAdminAuth();
    if (hasLiveDb && db) {
      await db.delete(schema.posts).where(eq(schema.posts.id, id));
    }
    return { success: true };
  } catch (err) {
    console.error("[deletePostAction] Exception:", err);
    return { success: false, error: "Unauthorized or failed to delete post." };
  }
}
