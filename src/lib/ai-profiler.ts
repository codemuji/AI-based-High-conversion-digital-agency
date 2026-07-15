import type { Category } from "./intent-engine";

export interface AiClientProfile {
  industry: string;
  project_type: string;
  budget_signal: "low" | "mid" | "high" | "unspecified";
  urgency: "low" | "medium" | "high";
  key_requirements: string[];
  internal_notes: string;
}

export interface TeamNotificationPayload {
  leadId: number;
  category: Category;
  contactName: string;
  contactPhone?: string | null;
  contactEmail?: string | null;
  initialQuery: string;
  answers: Record<string, string>;
  aiProfile: AiClientProfile;
}

/**
 * Generates an AI Client Profile from the raw lead answers.
 * Uses Claude Haiku if ANTHROPIC_API_KEY is available, otherwise uses a smart local heuristic engine.
 */
export async function generateAiProfile(
  initialQuery: string,
  category: Category,
  answers: Record<string, string>
): Promise<AiClientProfile> {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (apiKey && apiKey.trim().length > 0) {
    try {
      const prompt = `You are a senior technical triage specialist at India Web Designs (IWD).
Analyze this incoming lead query and questionnaire answers to output a strict JSON structure for our sales team.

Category: ${category}
Initial Query: "${initialQuery}"
Answers:
${JSON.stringify(answers, null, 2)}

Return ONLY valid JSON matching this exact structure:
{
  "industry": "Identified or inferred industry",
  "project_type": "Specific project summary e.g. Custom E-commerce Store",
  "budget_signal": "low" | "mid" | "high" | "unspecified",
  "urgency": "low" | "medium" | "high",
  "key_requirements": ["list", "of", "3-5 core technical requirements"],
  "internal_notes": "One-line triage note with actionable sales advice"
}`;

      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "x-api-key": apiKey,
          "anthropic-version": "2023-06-01",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-3-haiku-20240307",
          max_tokens: 512,
          messages: [{ role: "user", content: prompt }],
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const contentText = data.content?.[0]?.text || "";
        // Extract JSON inside braces if needed
        const jsonMatch = contentText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          return JSON.parse(jsonMatch[0]) as AiClientProfile;
        }
      }
    } catch (err) {
      console.error("[AI Profiler] Claude API call failed, falling back to heuristic profiler:", err);
    }
  }

  // Smart heuristic / local fallback profiler
  const qValStr = Object.values(answers).join(" ").toLowerCase();
  let budgetSignal: AiClientProfile["budget_signal"] = "mid";
  if (qValStr.includes("5 lakhs") || qValStr.includes("10 lakhs") || qValStr.includes("enterprise")) {
    budgetSignal = "high";
  } else if (qValStr.includes("50,000") || qValStr.includes("75,000") || qValStr.includes("low")) {
    budgetSignal = "low";
  }

  let urgency: AiClientProfile["urgency"] = "medium";
  if (qValStr.includes("asap") || qValStr.includes("3 weeks") || qValStr.includes("urgent")) {
    urgency = "high";
  } else if (qValStr.includes("2 - 3 months") || qValStr.includes("exploring")) {
    urgency = "low";
  }

  return {
    industry: Object.values(answers)[0]?.split("-")?.[1]?.trim() || "General / Diverse Industry",
    project_type: `${category} Development & Scoping`,
    budget_signal: budgetSignal,
    urgency: urgency,
    key_requirements: [
      `Deliver ${category.toLowerCase()} solution tailored for target users`,
      "Ensure responsive mobile & desktop performance",
      "Fast launch timeframe with high conversion UX",
    ],
    internal_notes: `Pre-profiled lead (${category}, ${budgetSignal} budget, ${urgency} urgency). Prioritize WhatsApp contact if provided.`,
  };
}

/**
 * Sends a webhook notification to the team (Slack, Discord, Telegram, or custom webhook).
 * Automatically fires WITH the enriched AI profile attached.
 */
export async function sendTeamNotification(payload: TeamNotificationPayload): Promise<void> {
  const webhookUrl = process.env.TEAM_WEBHOOK_URL;

  console.log(`\n======================================================`);
  console.log(`[Team Alert] 🔥 New Pre-Profiled Lead #${payload.leadId} (${payload.category})`);
  console.log(`Contact: ${payload.contactName} (${payload.contactPhone || payload.contactEmail})`);
  console.log(`AI Triage Notes: ${payload.aiProfile.internal_notes}`);
  console.log(`Budget: ${payload.aiProfile.budget_signal.toUpperCase()} | Urgency: ${payload.aiProfile.urgency.toUpperCase()}`);
  console.log(`======================================================\n`);

  if (webhookUrl && webhookUrl.trim().length > 0) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          text: `🔥 *New Lead #${payload.leadId}: ${payload.category}*\n*Name:* ${payload.contactName}\n*Contact:* ${payload.contactPhone || payload.contactEmail}\n*Budget Signal:* ${payload.aiProfile.budget_signal.toUpperCase()}\n*Urgency:* ${payload.aiProfile.urgency.toUpperCase()}\n*Notes:* ${payload.aiProfile.internal_notes}`,
          payload,
        }),
      });
    } catch (err) {
      console.error("[Team Alert] Webhook delivery failed:", err);
    }
  }
}
