"use server";

import { after } from "next/server";
import { mockDbHelper } from "@/db/db";
import { generateAiProfile, sendTeamNotification } from "@/lib/ai-profiler";
import type { LeadSubmissionPayload } from "@/components/modal/OnboardingModal";

export interface SubmitLeadResponse {
  success: boolean;
  leadId?: number;
  error?: string;
}

/**
 * Ponytail lead creation server action.
 * 1. Inserts raw lead answers into DB instantly (~50ms) and returns success.
 * 2. Uses Next.js 15 `after()` to run the Claude Haiku AI profiling asynchronously after response closes.
 * 3. Updates `leads.ai_profile` and fires pre-profiled team webhooks/alerts.
 */
export async function submitLeadAction(payload: LeadSubmissionPayload): Promise<SubmitLeadResponse> {
  try {
    if (!payload.category || !payload.contact?.name) {
      return { success: false, error: "Missing required contact details or category." };
    }

    // Step 1: Immediate raw DB insert
    const leadId = await mockDbHelper.insertLead({
      initialQuery: payload.initialQuery || payload.category,
      category: payload.category,
      contactName: payload.contact.name,
      contactPhone: payload.contact.phone || null,
      contactEmail: payload.contact.email || null,
      answers: payload.answers,
      status: "new",
    });

    // Step 2: Non-blocking async AI triage & team alert via Next.js `after()` (with CLI/offline fallback)
    const runAsyncJob = async () => {
      try {
        const aiProfile = await generateAiProfile(
          payload.initialQuery || payload.category,
          payload.category,
          payload.answers
        );

        await mockDbHelper.updateAiProfile(leadId, aiProfile);

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
        console.error(`[after() Job Error] Failed to generate profile or send notification for Lead #${leadId}:`, asyncErr);
      }
    };

    try {
      after(runAsyncJob);
    } catch {
      // If outside Next.js request context (e.g. standalone test scripts or background worker), run non-blocking
      runAsyncJob().catch((err) => console.error("[Background Job Error]:", err));
    }

    return { success: true, leadId };
  } catch (err: unknown) {
    console.error("[submitLeadAction Error]:", err);
    return {
      success: false,
      error: err instanceof Error ? err.message : "Failed to save lead. Please try again.",
    };
  }
}
