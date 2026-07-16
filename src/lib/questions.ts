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
      title: "Tell us about your business and what you want your website to achieve.",
      subtitle: "Helps us understand your customers and design a site that brings more sales.",
      type: "text",
      placeholder: "e.g., We run a retail brand and want an online store that turns visitors into loyal buyers",
      required: true,
    },
    {
      id: "q2",
      step: 2,
      title: "Where are you currently in your online journey?",
      subtitle: "Select the option that best describes your situation right now.",
      type: "select",
      options: [
        "Starting fresh with our very first website",
        "Redesigning our current slow or outdated site",
        "Upgrading to a faster online e-commerce store",
        "Adding high-converting landing pages to our brand",
      ],
      required: true,
    },
    {
      id: "q3",
      step: 3,
      title: "When would you love to launch and what is your comfortable budget?",
      subtitle: "We'll suggest the best features and approach to give you maximum return within your budget.",
      type: "select",
      options: [
        "Quick Launch (Under 3 weeks) — ₹50,000 to ₹1.5 Lakhs",
        "Full Custom Website (1 - 2 months) — ₹1.5 Lakhs to ₹3 Lakhs",
        "Complete E-Commerce Suite (2 - 3 months) — ₹3 Lakhs to ₹5 Lakhs+",
        "Flexible budget — Let's discuss what works best",
      ],
      required: true,
    },
    {
      id: "q4",
      step: 4,
      title: "Where should we send your free tailored growth plan?",
      subtitle: "Our team will review your goals and share a custom roadmap and timeline.",
      type: "contact",
      required: true,
    },
  ],
  App: [
    {
      id: "q1",
      step: 1,
      title: "What will your app do and how will it make life easier for your users?",
      subtitle: "Tell us whether it's for your customers, field staff, or internal operations.",
      type: "text",
      placeholder: "e.g., An easy mobile app for our customers to book services and track orders in real time",
      required: true,
    },
    {
      id: "q2",
      step: 2,
      title: "Which devices do you want your users to access your app from?",
      subtitle: "We build reliable apps that run smoothly across all phones and tablets.",
      type: "select",
      options: [
        "Both iPhone & Android (Most Popular)",
        "iPhone / iPad App Only",
        "Android App Only",
        "Web App accessible from any phone or computer",
      ],
      required: true,
    },
    {
      id: "q3",
      step: 3,
      title: "What timeline and budget feel right for your first rollout?",
      subtitle: "We can start with a clean core version and add more features as your user base grows.",
      type: "select",
      options: [
        "First Version (4 - 6 weeks) — ₹2 Lakhs to ₹4 Lakhs",
        "Full Feature App (2 - 3 months) — ₹4 Lakhs to ₹8 Lakhs",
        "Large Business System (3 - 5 months) — ₹8 Lakhs+",
        "Exploring ideas — Budget flexible",
      ],
      required: true,
    },
    {
      id: "q4",
      step: 4,
      title: "Where should we send your app overview and free recommendations?",
      subtitle: "Our product specialists will review and share our tailored advice.",
      type: "contact",
      required: true,
    },
  ],
  "Custom Software": [
    {
      id: "q1",
      step: 1,
      title: "What daily work or spreadsheet task takes up too much of your team's time?",
      subtitle: "Tell us about manual paperwork, tracking headaches, or disconnected systems.",
      type: "text",
      placeholder: "e.g., We spend hours manually entering orders and checking warehouse stock every day",
      required: true,
    },
    {
      id: "q2",
      step: 2,
      title: "Who will be using this new software every day?",
      subtitle: "Helps us design clean, super simple screens tailored for your exact team.",
      type: "select",
      options: [
        "Our internal office team (< 25 users)",
        "Our growing staff across branches (25 - 100 users)",
        "Large operations workforce (100 - 500+ users)",
        "Our external business clients or suppliers",
      ],
      required: true,
    },
    {
      id: "q3",
      step: 3,
      title: "What timeline and budget range do you have in mind?",
      subtitle: "We build modular systems so you start saving time immediately with Phase 1.",
      type: "select",
      options: [
        "Core Essential System (4 - 6 weeks) — ₹2.5 Lakhs to ₹5 Lakhs",
        "Comprehensive Software (2 - 4 months) — ₹5 Lakhs to ₹10 Lakhs",
        "Complete Operations Upgrade — ₹10 Lakhs+",
        "Let's consult first and map out the savings",
      ],
      required: true,
    },
    {
      id: "q4",
      step: 4,
      title: "Where should we send your custom time-saving software plan?",
      subtitle: "We'll draft a clean layout of how the software will streamline your workflow.",
      type: "contact",
      required: true,
    },
  ],
  "Digital Marketing": [
    {
      id: "q1",
      step: 1,
      title: "How do customers currently discover your business?",
      subtitle: "Tell us about online search, social media, ads, or if you're looking for fresh channels.",
      type: "text",
      placeholder: "e.g., Currently relying on word-of-mouth and want to attract steady buyers online",
      required: true,
    },
    {
      id: "q2",
      step: 2,
      title: "What is your #1 business goal over the next 3 months?",
      subtitle: "Every rupee we invest is focused directly on bringing you qualified, high-value customers.",
      type: "select",
      options: [
        "Attract ready-to-buy business leads and inquiries",
        "Grow direct online sales for our products",
        "Rank #1 on Google when local customers search for us",
        "Improve our website so more visitors turn into buyers",
      ],
      required: true,
    },
    {
      id: "q3",
      step: 3,
      title: "What monthly budget would you like to dedicate to growing revenue?",
      subtitle: "We'll estimate exactly how many potential customers this budget can reach.",
      type: "select",
      options: [
        "Starter Growth Plan — ₹40,000 to ₹1 Lakh / month",
        "Accelerated Expansion — ₹1 Lakh to ₹3 Lakhs / month",
        "Market Leader Campaign — ₹3 Lakhs to ₹10 Lakhs+ / month",
        "Let's audit first and decide based on projected results",
      ],
      required: true,
    },
    {
      id: "q4",
      step: 4,
      title: "Where should we send your custom growth strategy and audit?",
      subtitle: "We'll review what your competitors are doing and show you easy ways to win.",
      type: "contact",
      required: true,
    },
  ],
  "AI Automation": [
    {
      id: "q1",
      step: 1,
      title: "What repetitive customer or office task would you love to automate?",
      subtitle: "Tell us about answering common questions, organizing leads, or sorting documents.",
      type: "text",
      placeholder: "e.g., An assistant that answers WhatsApp customer inquiries instantly around the clock",
      required: true,
    },
    {
      id: "q2",
      step: 2,
      title: "Where do you currently manage your customer messages or data?",
      subtitle: "We connect smart assistants directly into the tools your team already uses every day.",
      type: "select",
      options: [
        "WhatsApp Business / Hubspot / Salesforce",
        "Google Sheets / Excel / Simple tracking tools",
        "Custom company database or internal system",
        "We don't use special tools yet — let's set up something simple",
      ],
      required: true,
    },
    {
      id: "q3",
      step: 3,
      title: "What timeline and budget feel right to get started?",
      subtitle: "Smart assistants can often be set up in just a few weeks to start saving you time right away.",
      type: "select",
      options: [
        "Quick Assistant Setup (2 - 3 weeks) — ₹75,000 to ₹2 Lakhs",
        "Full Automation System (1 - 2 months) — ₹2 Lakhs to ₹5 Lakhs",
        "Complete Business Automation — ₹5 Lakhs+",
        "Let's review our workflow and discuss options",
      ],
      required: true,
    },
    {
      id: "q4",
      step: 4,
      title: "Where should we send your free AI action plan and time-saving estimate?",
      subtitle: "Our specialists will sketch out exactly how the assistant will handle your daily inquiries.",
      type: "contact",
      required: true,
    },
  ],
};
