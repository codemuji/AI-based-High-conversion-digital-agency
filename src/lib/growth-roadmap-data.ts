import type { Category } from "@/lib/intent-engine";

export interface RoadmapStage {
  stageNumber: string;
  title: string;
  description: string;
}

export interface GrowthRoadmapCard {
  id: string;
  slug: string;
  industry: string;
  scaleBracket: string;
  imageUrl: string;
  highlightMetric: string;
  timeline: string;
  investmentLevel: string;
  intentCategory: Category;
  stages: RoadmapStage[];
}

export interface GrowthScaleTab {
  id: "micro" | "medium" | "high";
  label: string;
  badge: string;
  tagline: string;
  description: string;
  cards: GrowthRoadmapCard[];
}

export const GROWTH_ROADMAP_SCALES: GrowthScaleTab[] = [
  {
    id: "micro",
    label: "Micro Scale",
    badge: "01 // LAUNCH & TRAFFIC",
    tagline: "Early-Stage Authority & Instant Lead Capture",
    description:
      "Engineered for new or local businesses looking to establish dominant online credibility, capture leads 24/7 without manual effort, and eliminate technical barriers.",
    cards: [
      {
        id: "micro-coaching",
        slug: "micro-coaching",
        industry: "Coaching & Vocational Institute",
        scaleBracket: "0 – 100 Active Students",
        imageUrl: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
        highlightMetric: "Instant WhatsApp Booking",
        timeline: "1 - 2 Weeks Delivery",
        investmentLevel: "Lean & High-ROI",
        intentCategory: "Website",
        stages: [
          {
            stageNumber: "01",
            title: "High-Conversion Authority Landing Page",
            description: "Ultra-fast loading (under 0.8s) showcase with course highlights, faculty credentials, and verified parent reviews tailored for local search visibility.",
          },
          {
            stageNumber: "02",
            title: "Automated WhatsApp Lead Capture",
            description: "Direct course syllabus download flow that triggers instant automated WhatsApp responses to prospective students and parents within seconds.",
          },
          {
            stageNumber: "03",
            title: "Instant Fee Calculator & Inquiry Booking",
            description: "Interactive batch selection and fee breakdown widget that lets parents book trial classes directly without phone tag.",
          },
        ],
      },
      {
        id: "micro-retail",
        slug: "micro-retail",
        industry: "E-Commerce & Local Retail",
        scaleBracket: "1 – 50 Orders / Day",
        imageUrl: "https://images.pexels.com/photos/4397919/pexels-photo-4397919.jpeg?auto=compress&cs=tinysrgb&w=800",
        highlightMetric: "Zero Commission Sales",
        timeline: "1 - 2 Weeks Delivery",
        investmentLevel: "Lean & High-ROI",
        intentCategory: "Website",
        stages: [
          {
            stageNumber: "01",
            title: "Custom Direct Storefront (No 30% Cuts)",
            description: "Your own branded online store optimized for rapid mobile browsing with frictionless checkout and UPI QR instant payment.",
          },
          {
            stageNumber: "02",
            title: "WhatsApp Order Confirmation & Tracking",
            description: "Automated order receipts and dispatch status updates delivered straight to your customers' WhatsApp numbers.",
          },
          {
            stageNumber: "03",
            title: "Google Reviews & Local Map Dominance",
            description: "Automated post-purchase review generation system to catapult your business to the top of local map searches.",
          },
        ],
      },
      {
        id: "micro-software",
        slug: "micro-software",
        industry: "Custom Software & CRM Workflow",
        scaleBracket: "1 – 10 Team Members",
        imageUrl: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
        highlightMetric: "Save 15+ Hrs / Week",
        timeline: "2 - 3 Weeks Delivery",
        investmentLevel: "Lean & High-ROI",
        intentCategory: "Custom Software",
        stages: [
          {
            stageNumber: "01",
            title: "Centralized Customer Lead Ledger",
            description: "Replace messy Excel sheets and scattered WhatsApp messages with a single, fast cloud dashboard tracking every lead pipeline.",
          },
          {
            stageNumber: "02",
            title: "1-Click Quotation & Invoice Generator",
            description: "Create professional, branded PDF estimates and invoices in seconds right from your phone or desktop.",
          },
          {
            stageNumber: "03",
            title: "Automated Follow-Up Reminders",
            description: "Smart notification triggers ensuring no customer inquiry falls through the cracks due to busy daily operations.",
          },
        ],
      },
      {
        id: "micro-agency",
        slug: "micro-agency",
        industry: "Service Business & Consulting",
        scaleBracket: "1 – 10 High-Value Clients",
        imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
        highlightMetric: "3X Lead Quality",
        timeline: "1 - 2 Weeks Delivery",
        investmentLevel: "Lean & High-ROI",
        intentCategory: "Website",
        stages: [
          {
            stageNumber: "01",
            title: "Premium Portfolio & Case Study Engine",
            description: "Editorial, high-contrast case study layouts designed to immediately establish premium market positioning and trust.",
          },
          {
            stageNumber: "02",
            title: "Interactive Project Scoping & Intake",
            description: "Replace static contact forms with intelligent, multi-step qualification flows that filter out low-budget inquiries.",
          },
          {
            stageNumber: "03",
            title: "Automated Calendar Booking Integration",
            description: "Frictionless scheduling sync that books qualified prospects directly onto your team calendar without email back-and-forth.",
          },
        ],
      },
    ],
  },
  {
    id: "medium",
    label: "Medium Scale",
    badge: "02 // AUTOMATE & SCALE",
    tagline: "Custom Portals, Workflow Automation & High Concurrency",
    description:
      "Engineered for rapidly growing businesses needing custom software portals, automated invoicing/inventory systems, and frictionless multi-channel operations.",
    cards: [
      {
        id: "medium-coaching",
        slug: "medium-coaching",
        industry: "Coaching & Vocational Institute",
        scaleBracket: "100 – 1,000 Active Students",
        imageUrl: "https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=800",
        highlightMetric: "Save 30+ Hrs/Week Admin",
        timeline: "3 - 5 Weeks Delivery",
        investmentLevel: "High-Growth ROI",
        intentCategory: "Custom Software",
        stages: [
          {
            stageNumber: "01",
            title: "Custom Student LMS & Study Portal",
            description: "Dedicated web portal where enrolled students access encrypted recorded video lectures, PDF notes, and assignment submissions securely.",
          },
          {
            stageNumber: "02",
            title: "Automated Fee Reminders & GST Invoicing",
            description: "System automatically detects due installments, dispatches payment links via SMS/WhatsApp, and generates compliant accounting invoices.",
          },
          {
            stageNumber: "03",
            title: "Online MCQ Test Engine & Live Leaderboards",
            description: "High-speed examination system with instant automated grading, detailed topic-wise weakness analysis, and batch ranking.",
          },
        ],
      },
      {
        id: "medium-retail",
        slug: "medium-retail",
        industry: "E-Commerce & Retail Operations",
        scaleBracket: "50 – 500 Orders / Day",
        imageUrl: "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=800",
        highlightMetric: "+180% Repeat Purchases",
        timeline: "3 - 5 Weeks Delivery",
        investmentLevel: "High-Growth ROI",
        intentCategory: "App",
        stages: [
          {
            stageNumber: "01",
            title: "High-Speed Headless E-Commerce Engine",
            description: "Custom React/Next.js storefront delivering sub-second page loads even during heavy traffic spikes and festival flash sales.",
          },
          {
            stageNumber: "02",
            title: "Omnichannel POS & Inventory Sync",
            description: "Real-time bidirectional synchronization between physical store billing systems and online warehouse stock levels.",
          },
          {
            stageNumber: "03",
            title: "Automated Cart Recovery & Loyalty Engine",
            description: "Dynamic abandoned cart recovery sequences and tiered loyalty reward points to systematically maximize customer lifetime value.",
          },
        ],
      },
      {
        id: "medium-software",
        slug: "medium-software",
        industry: "Custom Software & CRM Workflow",
        scaleBracket: "10 – 50 Team Members",
        imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
        highlightMetric: "Zero Data Silos",
        timeline: "4 - 6 Weeks Delivery",
        investmentLevel: "High-Growth ROI",
        intentCategory: "Custom Software",
        stages: [
          {
            stageNumber: "01",
            title: "Custom Multi-Department Operations CRM",
            description: "Role-based workspaces tailored exactly to your internal workflows across sales, operations, support, and dispatch teams.",
          },
          {
            stageNumber: "02",
            title: "Automated SLA & Task Escalation System",
            description: "Smart rules that monitor ticket aging and automatically reassign or escalate critical customer bottlenecks to department managers.",
          },
          {
            stageNumber: "03",
            title: "Executive Business Intelligence Dashboard",
            description: "Real-time visual charts displaying daily revenue trends, team productivity metrics, and customer acquisition costs at a glance.",
          },
        ],
      },
      {
        id: "medium-agency",
        slug: "medium-agency",
        industry: "Service Business & Consulting",
        scaleBracket: "50 – 200 Monthly Retainers",
        imageUrl: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
        highlightMetric: "65% Faster Client Onboarding",
        timeline: "3 - 5 Weeks Delivery",
        investmentLevel: "High-Growth ROI",
        intentCategory: "Custom Software",
        stages: [
          {
            stageNumber: "01",
            title: "White-Label Client Portal & Asset Vault",
            description: "Branded login portal where clients view live project timelines, download deliverables, and approve milestones securely.",
          },
          {
            stageNumber: "02",
            title: "Automated Subscription Billing & Auto-Pay",
            description: "Seamless recurring mandate integrations that automatically charge retainer invoices and update client standing.",
          },
          {
            stageNumber: "03",
            title: "Automated Monthly Reporting Generator",
            description: "One-click data synthesis pulling metrics from Google Analytics, ads, and internal logs into polished client review PDFs.",
          },
        ],
      },
    ],
  },
  {
    id: "high",
    label: "High Scale",
    badge: "03 // ENTERPRISE DOMINANCE",
    tagline: "Dedicated Mobile Apps, Cloud ERP & AI Architecture",
    description:
      "Engineered for market leaders, educational institutions, and high-concurrency platforms demanding 99.99% uptime, native iOS/Android apps, and proprietary AI engines.",
    cards: [
      {
        id: "high-coaching",
        slug: "high-coaching",
        industry: "Coaching & EdTech University",
        scaleBracket: "1,000 – 50,000+ Students",
        imageUrl: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
        highlightMetric: "99.99% Cloud Uptime",
        timeline: "6 - 10 Weeks Delivery",
        investmentLevel: "Enterprise Infrastructure",
        intentCategory: "App",
        stages: [
          {
            stageNumber: "01",
            title: "Dedicated Native iOS & Android Mobile Apps",
            description: "Custom App Store and Google Play apps featuring offline video caching, DRM anti-piracy protection, and instant push notifications.",
          },
          {
            stageNumber: "02",
            title: "Live Video Streaming (OTT) & Interactive Classes",
            description: "Low-latency live streaming architecture supporting thousands of concurrent students with real-time Q&A and polls.",
          },
          {
            stageNumber: "03",
            title: "AI Adaptive Grading & Multi-Campus ERP",
            description: "Proprietary AI engines that generate custom practice questions based on student errors alongside total institutional payroll/accounting sync.",
          },
        ],
      },
      {
        id: "high-retail",
        slug: "high-retail",
        industry: "Pan-India D2C / B2B Marketplace",
        scaleBracket: "500 – 10,000+ Orders / Day",
        imageUrl: "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=800",
        highlightMetric: "Sub-50ms Response Time",
        timeline: "6 - 10 Weeks Delivery",
        investmentLevel: "Enterprise Infrastructure",
        intentCategory: "App",
        stages: [
          {
            stageNumber: "01",
            title: "High-Concurrency Cloud Microservices",
            description: "Auto-scaling AWS/GCP architecture designed to handle massive traffic bursts without slowdowns or server crashes.",
          },
          {
            stageNumber: "02",
            title: "Multi-Vendor Marketplace & Automated Settlement",
            description: "Complex vendor onboarding, independent inventory pools, automated commission splits, and scheduled payouts.",
          },
          {
            stageNumber: "03",
            title: "AI-Driven Product Matchmaking & Recommendation Engine",
            description: "Machine learning algorithms that predict buyer preferences to dramatically boost average order value and cross-sells.",
          },
        ],
      },
      {
        id: "high-software",
        slug: "high-software",
        industry: "Enterprise ERP & Cloud Architecture",
        scaleBracket: "100+ Team & Multi-Branch",
        imageUrl: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
        highlightMetric: "Total Operational Mastery",
        timeline: "8 - 12 Weeks Delivery",
        investmentLevel: "Enterprise Infrastructure",
        intentCategory: "Custom Software",
        stages: [
          {
            stageNumber: "01",
            title: "Custom Enterprise Resource Planning (ERP)",
            description: "Unifying supply chain, warehouse stock, human resources, payroll, and regional branch finance into a cohesive operating system.",
          },
          {
            stageNumber: "02",
            title: "Bank & SAP / Tally Bidirectional Bridge",
            description: "Automated bank statement reconciliation and direct ledger synchronization with existing corporate financial software.",
          },
          {
            stageNumber: "03",
            title: "Bank-Grade Security Audit & SOC2 Compliance Setup",
            description: "End-to-end encryption, multi-factor authentication, immutable audit trails, and strict data residency compliance.",
          },
        ],
      },
      {
        id: "high-agency",
        slug: "high-agency",
        industry: "Franchise Network & Service Chain",
        scaleBracket: "10+ Physical Locations",
        imageUrl: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
        highlightMetric: "100% Brand Consistency",
        timeline: "6 - 10 Weeks Delivery",
        investmentLevel: "Enterprise Infrastructure",
        intentCategory: "Custom Software",
        stages: [
          {
            stageNumber: "01",
            title: "Centralized Franchise Management OS",
            description: "Command center empowering headquarters to monitor real-time daily revenue, quality metrics, and customer feedback across every branch.",
          },
          {
            stageNumber: "02",
            title: "Automated Royalty Calculation & Billing",
            description: "System automatically computes monthly franchise fees and dispatches compliant billing invoices to branch owners.",
          },
          {
            stageNumber: "03",
            title: "Franchisee Training & Knowledge Base Portal",
            description: "Secure digital university housing operational SOPs, video training, and marketing asset libraries for rapid branch rollout.",
          },
        ],
      },
    ],
  },
];
