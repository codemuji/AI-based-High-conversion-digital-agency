import type { Category } from "./intent-engine";

export interface QuestionDef {
  id: string;
  step: number;
  title: string;
  subtitle?: string;
  type: "text" | "select" | "contact";
  placeholder?: string;
  options?: string[];
  required?: boolean;
}

export type CategoryQuestions = Record<Category, QuestionDef[]>;

export const QUESTIONS_BY_CATEGORY: CategoryQuestions = {
  Website: [
    {
      id: "q1",
      step: 1,
      title: "What is your business name and primary industry?",
      subtitle: "Helps us benchmark competitors and design appropriate aesthetics.",
      type: "text",
      placeholder: "e.g., Apex Retail — E-commerce & Fashion",
      required: true,
    },
    {
      id: "q2",
      step: 2,
      title: "Do you have an existing website or is this brand new?",
      subtitle: "Select the option that best matches your current situation.",
      type: "select",
      options: [
        "Brand new website from scratch",
        "Redesigning our current outdated site",
        "Migrating to Shopify / E-commerce platform",
        "Adding landing pages to existing domain",
      ],
      required: true,
    },
    {
      id: "q3",
      step: 3,
      title: "What is your target launch timeline and budget range?",
      subtitle: "Enables us to scope realistic features and team allocation.",
      type: "select",
      options: [
        "ASAP (< 3 weeks) — ₹50,000 to ₹1.5 Lakhs",
        "Standard (1 - 2 months) — ₹1.5 Lakhs to ₹3 Lakhs",
        "Comprehensive (2 - 3 months) — ₹3 Lakhs to ₹5 Lakhs+",
        "Custom Enterprise Scope — Budget flexible",
      ],
      required: true,
    },
    {
      id: "q4",
      step: 4,
      title: "How should our technical team reach you?",
      subtitle: "We'll send your instant AI scoping profile and portfolio samples here.",
      type: "contact",
      required: true,
    },
  ],
  App: [
    {
      id: "q1",
      step: 1,
      title: "What is the primary purpose of your app and who will use it?",
      subtitle: "e.g., Customer booking app, driver partner app, or internal dashboard.",
      type: "text",
      placeholder: "e.g., On-demand home cleaning app for urban homeowners and service partners",
      required: true,
    },
    {
      id: "q2",
      step: 2,
      title: "Which target platforms do you need supported?",
      subtitle: "We build native and cross-platform high performance apps.",
      type: "select",
      options: [
        "Cross-Platform (iOS & Android — Recommended)",
        "iOS App Only",
        "Android App Only",
        "Web App / PWA + Mobile Apps",
      ],
      required: true,
    },
    {
      id: "q3",
      step: 3,
      title: "What is your expected timeline and budget range?",
      subtitle: "Helps determine MVP feature set vs complete phased rollouts.",
      type: "select",
      options: [
        "Rapid MVP (4 - 6 weeks) — ₹2 Lakhs to ₹4 Lakhs",
        "Full Feature App (2 - 3 months) — ₹4 Lakhs to ₹8 Lakhs",
        "Enterprise Platform (3 - 5 months) — ₹8 Lakhs+",
        "Exploring options / Flexible budget",
      ],
      required: true,
    },
    {
      id: "q4",
      step: 4,
      title: "Where should we send your mobile architecture proposal?",
      subtitle: "Our senior product architect will review and share tech recommendations.",
      type: "contact",
      required: true,
    },
  ],
  "Custom Software": [
    {
      id: "q1",
      step: 1,
      title: "What operational process or bottleneck do you want to solve?",
      subtitle: "Tell us about manual spreadsheets, tracking issues, or disparate systems.",
      type: "text",
      placeholder: "e.g., Automating inventory tracking and multi-warehouse order fulfillment",
      required: true,
    },
    {
      id: "q2",
      step: 2,
      title: "Who will use this software and what is the rough user count?",
      subtitle: "e.g., Internal staff, field executives, or B2B enterprise partners.",
      type: "select",
      options: [
        "Internal Team (< 25 users)",
        "Growing Organization (25 - 100 users)",
        "Large Enterprise (100 - 500+ users)",
        "External B2B Clients / Vendor Portal",
      ],
      required: true,
    },
    {
      id: "q3",
      step: 3,
      title: "What is your target timeline and budget investment?",
      subtitle: "Ensures we architect scalable cloud infrastructure within budget.",
      type: "select",
      options: [
        "Phase 1 Core Module (4 - 6 weeks) — ₹2.5 Lakhs to ₹5 Lakhs",
        "Multi-Module System (2 - 4 months) — ₹5 Lakhs to ₹10 Lakhs",
        "Full Digital Transformation — ₹10 Lakhs+",
        "Needs scoping consultation first",
      ],
      required: true,
    },
    {
      id: "q4",
      step: 4,
      title: "Who is leading this initiative on your team?",
      subtitle: "We'll share technical specifications and schedule a deep-dive demo.",
      type: "contact",
      required: true,
    },
  ],
  "Digital Marketing": [
    {
      id: "q1",
      step: 1,
      title: "What marketing channels or funnels do you currently use?",
      subtitle: "e.g., Google Ads, Meta Ads, Organic SEO, or starting fresh.",
      type: "text",
      placeholder: "e.g., Currently doing word-of-mouth and some basic Instagram posts",
      required: true,
    },
    {
      id: "q2",
      step: 2,
      title: "What is your primary growth goal for the next 90 days?",
      subtitle: "We optimize directly for ROI and verified qualified leads.",
      type: "select",
      options: [
        "Generate high-intent B2B qualified leads",
        "Increase direct E-commerce product sales",
        "Dominant local search / Organic SEO ranking",
        "Complete funnel redesign & conversion optimization",
      ],
      required: true,
    },
    {
      id: "q3",
      step: 3,
      title: "What is your planned monthly ad / growth budget?",
      subtitle: "Allows us to calculate projected lead volumes and channel mix.",
      type: "select",
      options: [
        "Starter Scale — ₹40,000 to ₹1 Lakh / month",
        "Aggressive Growth — ₹1 Lakh to ₹3 Lakhs / month",
        "Market Leader — ₹3 Lakhs to ₹10 Lakhs+ / month",
        "Audit first — Budget based on projected ROI",
      ],
      required: true,
    },
    {
      id: "q4",
      step: 4,
      title: "Where should we send your custom growth & SEO audit?",
      subtitle: "Includes competitor ad analysis and quick-win recommendations.",
      type: "contact",
      required: true,
    },
  ],
  "AI Automation": [
    {
      id: "q1",
      step: 1,
      title: "What manual workflow or task do you want AI to automate?",
      subtitle: "e.g., Customer support triage, document data extraction, or sales qualification.",
      type: "text",
      placeholder: "e.g., An AI agent that answers WhatsApp support queries and books meetings 24/7",
      required: true,
    },
    {
      id: "q2",
      step: 2,
      title: "What software tools or CRMs do you currently use for this process?",
      subtitle: "We integrate custom AI directly into your existing software stack.",
      type: "select",
      options: [
        "WhatsApp Business / Hubspot / Salesforce",
        "Google Sheets / Airtable / Zapier / Make",
        "Custom internal software / Database APIs",
        "No structured tools yet — building from scratch",
      ],
      required: true,
    },
    {
      id: "q3",
      step: 3,
      title: "What is your target timeline and deployment budget?",
      subtitle: "AI agents can often be deployed rapidly in modular phases.",
      type: "select",
      options: [
        "Quick AI Pilot (2 - 3 weeks) — ₹75,000 to ₹2 Lakhs",
        "Full Multi-Agent Pipeline (1 - 2 months) — ₹2 Lakhs to ₹5 Lakhs",
        "Enterprise AI Transformation — ₹5 Lakhs+",
        "Flexible / Looking for ROI assessment",
      ],
      required: true,
    },
    {
      id: "q4",
      step: 4,
      title: "Where should we send your AI agent blueprint & ROI estimate?",
      subtitle: "Our AI engineers will draft a specific workflow architecture diagram for you.",
      type: "contact",
      required: true,
    },
  ],
};
