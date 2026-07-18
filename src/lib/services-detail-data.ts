import { SERVICES_DROPDOWN_GROUPS, type ServiceDropdownItem } from "./services-dropdown-data";

export interface PillarItem {
  title: string;
  description: string;
  tag: string;
}

export interface TechStackItem {
  name: string;
  category: string;
}

export interface PhaseItem {
  number: string;
  title: string;
  duration: string;
  description: string;
}

export interface ComparisonItem {
  feature: string;
  ourStandard: string;
  typicalAgency: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  id: string;
  groupName: string;
  groupColumn: string;
  item: ServiceDropdownItem;
  overview: string;
  targetAudience: string;
  corePillars: PillarItem[];
  deliverables: string[];
  techStack: TechStackItem[];
  phases: PhaseItem[];
  comparison: ComparisonItem[];
  faqs: FaqItem[];
}

const DEFAULT_COMPARISON: ComparisonItem[] = [
  {
    feature: "Performance & Page Speed",
    ourStandard: "Sub-second load times (< 0.8s) with edge caching & zero bloat.",
    typicalAgency: "Slow 4–8s loading due to bloated WordPress/Shopify plugins.",
  },
  {
    feature: "Code & Data Ownership",
    ourStandard: "100% full intellectual property and source code ownership.",
    typicalAgency: "Locked inside proprietary SaaS platforms with monthly hostage fees.",
  },
  {
    feature: "Ongoing Commission & Cut",
    ourStandard: "0% commissions on sales, bookings, or transactions forever.",
    typicalAgency: "Takes 2%–5% cut on every transaction plus monthly SaaS subscriptions.",
  },
  {
    feature: "Security & Compliance",
    ourStandard: "Enterprise SSL, DDoS mitigation, and Indian data localization.",
    typicalAgency: "Vulnerable to third-party plugin exploits and unpatched themes.",
  },
];

const DEFAULT_PHASES: PhaseItem[] = [
  {
    number: "Phase 01",
    title: "Discovery & Architectural Blueprinting",
    duration: "Week 1",
    description: "Deep-dive scoping of your Indian business workflows, competitor teardown, database schema modeling, and wireframing.",
  },
  {
    number: "Phase 02",
    title: "Core Engineering & UI/UX Prototyping",
    duration: "Week 2 - 3",
    description: "Custom frontend design and backend API development using high-performance frameworks with zero third-party dependencies.",
  },
  {
    number: "Phase 03",
    title: "Rigorous Testing & Security Hardening",
    duration: "Week 4",
    description: "Stress-testing under high concurrency, penetration testing, payment gateway sandbox validation, and mobile device QA.",
  },
  {
    number: "Phase 04",
    title: "Deployment, Training & Launch",
    duration: "Go-Live",
    description: "Zero-downtime production deployment on edge infrastructure, complete staff training, and 30-day post-launch optimization.",
  },
];

export const SERVICE_DETAILS_DICTIONARY: Record<string, Partial<ServiceDetail>> = {
  // --- GROUP 1: WEB DESIGN ---
  "static-website": {
    overview: "In today's fast-moving Indian market, your website is your digital flagship. Our Static Website Design service delivers ultra-fast, highly secure informational websites engineered with modern static generation tools. Unlike sluggish WordPress sites burdened by heavy themes and vulnerable plugins, our bespoke static builds load in under 0.8 seconds, ensuring immediate credibility and superior Google quality scores.",
    targetAudience: "Ideal for corporate consultancies, manufacturing units, law firms, healthcare clinics, and B2B enterprises needing a bulletproof, zero-maintenance brand showcase.",
    corePillars: [
      { title: "Sub-Second Edge Rendering", description: "Compiled at build-time and distributed across global CDN nodes for instant loading even on 3G/4G Indian mobile networks.", tag: "Speed Optimization" },
      { title: "Zero Attack Surface", description: "No database queries or server-side scripting exposed to the internet, eliminating SQL injections and malware exploits.", tag: "Impenetrable Security" },
      { title: "High-Converting UI/UX", description: "Custom-designed layouts with clear call-to-action hierarchies that guide visitors straight to inquiry or direct phone contact.", tag: "Conversion Focus" },
      { title: "SEO-First Semantic Markup", description: "Engineered with flawless HTML5 semantic structure, structured schema markup, and optimized OpenGraph social sharing tags.", tag: "Google Rank #1" },
    ],
    deliverables: [
      "Custom 5 to 10 page responsive website build",
      "100% source code handover with zero recurring licensing fees",
      "Optimized Core Web Vitals (95+ score guaranteed on Google PageSpeed)",
      "Integrated lead capture contact forms with instant email/SMS alerts",
      "Complete Google Analytics 4 (GA4) & Search Console verification",
      "Free SSL certificate setup and Cloudflare edge configuration",
      "30 days of complimentary post-launch minor text/image updates",
    ],
    techStack: [
      { name: "Next.js Static Export", category: "Core Framework" },
      { name: "Tailwind / Vanilla CSS", category: "Styling Engine" },
      { name: "Cloudflare CDN", category: "Global Edge Hosting" },
      { name: "GSAP / CSS Motion", category: "Micro-Animations" },
    ],
    faqs: [
      { question: "Can I update the text or images myself without a developer?", answer: "Yes! While static sites are ultra-fast because they don't rely on heavy databases, we can connect a lightweight Headless CMS (like Git-based CMS or Supabase) so you can edit text and blog posts easily." },
      { question: "Why should we avoid standard WordPress themes?", answer: "Off-the-shelf WordPress themes come with 50+ bloated plugins, slow page load times (draining your ad budget), and require constant security patches to prevent hacking. Our custom code is clean, permanent, and fast." },
      { question: "How fast will the website go live?", answer: "Typically within 7 to 14 business days once your logo, brand guidelines, and page content are finalized." },
    ],
  },
  "dynamic-website": {
    overview: "When your business requires frequent content updates, custom calculators, client portals, or dynamic database interactions, standard templates fall apart. Our Dynamic Website Design service builds high-speed, database-driven web applications powered by modern server-side rendering and intuitive administrative dashboards.",
    targetAudience: "Perfect for real estate agencies with active property listings, educational institutions, news portals, and scaling businesses requiring dynamic content management.",
    corePillars: [
      { title: "Custom Admin Control Room", description: "A clean, custom-built management dashboard designed specifically for your staff—no confusing technical menus or clunky plugins.", tag: "Effortless Management" },
      { title: "High-Speed Server-Side Rendering", description: "Pages render instantly on the server, ensuring search engines index dynamic listings immediately while users experience zero lag.", tag: "SSR Performance" },
      { title: "Automated Data & Lead Sync", description: "Inquiries directly feed into your internal CRM, Google Sheets, or WhatsApp broadcast systems without manual data entry.", tag: "Workflow Automation" },
      { title: "Enterprise Role-Based Security", description: "Granular access controls separating administrators, editors, and customers with encrypted authentication tokens.", tag: "Data Governance" },
    ],
    deliverables: [
      "Full custom dynamic website with bespoke administrative portal",
      "Custom relational database architecture (PostgreSQL / MySQL)",
      "Automated daily database backups with cloud redundancy",
      "WhatsApp & SMS instant lead notification integration",
      "High-speed server-side caching layer for instant content retrieval",
      "Full documentation and video walkthrough training for your team",
    ],
    techStack: [
      { name: "Next.js App Router", category: "Fullstack Framework" },
      { name: "PostgreSQL / Supabase", category: "Relational Database" },
      { name: "Prisma / Drizzle ORM", category: "Type-Safe Data Layer" },
      { name: "Redis Caching", category: "Ultra-Fast Cache" },
    ],
    faqs: [
      { question: "Will the database slow down the website as we add thousands of records?", answer: "No. We implement proper database indexing, pagination, and Redis edge caching so whether you have 100 or 100,000 records, load times remain under 1 second." },
      { question: "Is training provided for our administrative team?", answer: "Absolutely. We conduct live screen-share training sessions and record customized video tutorials on how to add listings, manage users, and export reports." },
    ],
  },
  "ecommerce-website": {
    overview: "Don't let Shopify or WooCommerce eat away your profit margins with recurring subscription fees, transaction percentages, and sluggish checkout flows. Our E-Commerce Website Design delivers a high-speed, custom-engineered digital storefront optimized for high conversion in the Indian retail ecosystem with seamless UPI and Razorpay checkouts.",
    targetAudience: "Direct-to-Consumer (D2C) brands, fashion labels, electronics distributors, and established brick-and-mortar retailers looking to dominate online sales without paying platform commissions.",
    corePillars: [
      { title: "Lightning 1-Click Indian Checkout", description: "Optimized specifically for Indian shoppers with instant UPI deep-linking (GPay, PhonePe, Paytm), NetBanking, and COD verification.", tag: "Zero Friction Checkout" },
      { title: "Zero Platform Commissions", description: "Keep 100% of your sales revenue. You pay exact payment gateway fees (like Razorpay 2%) and zero platform cuts or monthly SaaS rent.", tag: "Maximum Profit Margins" },
      { title: "Automated WhatsApp Recovery", description: "Automatically trigger WhatsApp messages for abandoned carts, order confirmations, and live shipment tracking updates.", tag: "Automated Retention" },
      { title: "Instant Inventory & GST Billing", description: "Automated GST invoicing, live SKU stock deductions, and multi-warehouse inventory tracking built directly into the core.", tag: "GST & ERP Sync" },
    ],
    deliverables: [
      "Custom high-converting e-commerce storefront with mobile-first UI",
      "Integrated Razorpay / Cashfree payment gateway with UPI deep-links",
      "Automated GST invoice generation and PDF download for customers",
      "Abandoned cart recovery automation via WhatsApp & Email",
      "Customer account dashboard with order history & return requests",
      "Custom coupon code engine, bundle discounts & festive sale banners",
      "Shiprocket / Delhivery courier API integration for automated dispatch",
    ],
    techStack: [
      { name: "Next.js Commerce", category: "Storefront Engine" },
      { name: "Razorpay / Cashfree API", category: "Payment Gateway" },
      { name: "PostgreSQL Database", category: "Secure Order Store" },
      { name: "WhatsApp Cloud API", category: "Automated Messaging" },
    ],
    faqs: [
      { question: "How does this compare to Shopify?", answer: "Shopify charges $39 to $399 per month plus 1-2% extra transaction fees if you don't use Shopify Payments, plus paid apps for basic features like reviews and GST invoices. Our custom solution has zero monthly platform fees, zero commissions, and all Indian e-commerce features built directly inside." },
      { question: "Can we integrate courier partners like Shiprocket?", answer: "Yes, we integrate courier APIs so whenever an order is placed, a shipping label and waybill number are generated automatically." },
    ],
  },
  "mobile-website": {
    overview: "Over 85% of internet traffic in India originates from mobile devices. If your website isn't engineered mobile-first, you are losing the vast majority of potential customers. Our Mobile Website Design focuses on touch ergonomics, thumb-friendly navigation, low-bandwidth resilience, and app-like responsiveness.",
    targetAudience: "Consumer-facing brands, local service providers, restaurants, and retail outlets whose customers browse primarily on smartphones while on the move.",
    corePillars: [
      { title: "Thumb-Zone Ergonomics", description: "Primary action buttons, call dials, and inquiry forms are positioned precisely within the natural thumb reach of mobile users.", tag: "Touch-Optimized UX" },
      { title: "Low-Data Bandwidth Resilience", description: "Image compression and smart resource loading ensure the site loads rapidly even on congested 3G or variable mobile data networks.", tag: "Data-Efficient" },
      { title: "Native App-Like Micro-Interactions", description: "Smooth swipe gestures, bottom drawer sheets, and haptic-like visual feedback without requiring an App Store download.", tag: "App-Like Feel" },
      { title: "One-Tap Communication Dials", description: "Direct one-tap WhatsApp chat initiation and instant phone dialing buttons fixed at the bottom of the screen.", tag: "Instant Conversion" },
    ],
    deliverables: [
      "Dedicated mobile-first responsive design architecture",
      "Fixed bottom navigation bar for quick access to Contact & WhatsApp",
      "Optimized WebP/AVIF image pipeline minimizing mobile data usage",
      "Progressive Web App (PWA) manifest so users can 'Add to Home Screen'",
      "Complete testing across iOS (iPhone) and Android devices of all screen sizes",
    ],
    techStack: [
      { name: "HTML5 / CSS Grid & Flex", category: "Responsive Core" },
      { name: "Next.js Image Optimization", category: "Adaptive Media" },
      { name: "Progressive Web App (PWA)", category: "App-Like Caching" },
      { name: "Touch Events API", category: "Gesture Handling" },
    ],
    faqs: [
      { question: "Will this also work nicely on desktop computers?", answer: "Yes! While we design mobile-first to guarantee perfection on smartphones, the layout fluidly adapts and expands into a rich, full-screen experience on laptops and desktop monitors." },
    ],
  },
  "redesign-website": {
    overview: "Is your legacy website hurting your brand reputation? Outdated designs, broken links, non-responsive layouts, and excruciatingly slow loading speeds actively drive high-value clients to your competitors. Our Redesign of Existing Website service strips away years of technical debt and transforms your online presence into a sleek, modern conversion engine.",
    targetAudience: "Established Indian companies whose current website looks like it was built a decade ago, suffering from low conversions, high bounce rates, or bloated WordPress maintenance costs.",
    corePillars: [
      { title: "Complete Visual & Brand Modernization", description: "Elevating your aesthetics from dated layouts to modern typography, refined color palettes, and authoritative visual storytelling.", tag: "Brand Elevation" },
      { title: "Zero SEO Ranking Loss Guarantee", description: "Meticulous 301 URL redirect mapping, canonical preservation, and metadata migration so you maintain and boost your Google authority.", tag: "Flawless SEO Migration" },
      { title: "Removal of Technical Bloat", description: "Replacing heavy legacy plugins and messy page builders with clean, hand-crafted code that loads 4x to 10x faster.", tag: "Technical Reset" },
      { title: "Conversion Funnel Re-Engineering", description: "Restructuring navigation and call-to-action placement based on modern user behavior to maximize inquiry conversion rates.", tag: "Conversion Multiplier" },
    ],
    deliverables: [
      "Complete visual teardown and modern UX/UI redesign",
      "Full migration of existing blog posts, pages, and historical data",
      "Comprehensive 301 redirect map preventing any broken links (404s)",
      "Technical audit fixing all Core Web Vitals and mobile usability errors",
      "High-speed server migration and zero-downtime DNS switchover",
    ],
    techStack: [
      { name: "Next.js 15 Modern Stack", category: "Modern Replacement" },
      { name: "Tailwind CSS Design System", category: "Clean Styling" },
      { name: "Automated SEO Scripting", category: "URL Mapping Engine" },
      { name: "Edge Caching", category: "Speed Optimization" },
    ],
    faqs: [
      { question: "Will our website go offline while you redesign it?", answer: "Never. We build and test your complete new website on a secure staging server. Once approved, we perform a zero-downtime DNS switchover during off-peak hours so you never lose business." },
      { question: "Will we lose our existing Google search rankings?", answer: "No. We carefully map every single old URL to your new clean URLs using permanent 301 redirects, ensuring all SEO juice and backlinks are preserved." },
    ],
  },

  // --- GROUP 2: DIGITAL MARKETING ---
  "seo-optimisation": {
    overview: "Ranking #1 on Google isn't about keyword stuffing or spammy backlinks—it's about technical excellence, structural clarity, and high-intent local relevance. Our Search Engine Optimisation service combines deep technical Core Web Vitals engineering with targeted Indian search intent strategies to put your brand directly in front of active buyers right when they are ready to transact.",
    targetAudience: "B2B service providers, local Indian businesses, healthcare clinics, educational institutes, and e-commerce stores wanting consistent, high-intent organic lead flow without endless ad spend.",
    corePillars: [
      { title: "Technical Core Web Vitals Dominance", description: "We optimize your codebase for sub-second LCP and zero CLS, giving you a massive ranking advantage over slower competitors.", tag: "Technical SEO Advantage" },
      { title: "High-Intent Buyer Keyword Targeting", description: "Targeting commercial and transactional keywords with high purchase intent rather than vanity traffic that never converts.", tag: "Commercial Intent" },
      { title: "Local & All-India Schema Engineering", description: "Implementing structured JSON-LD data schemas (LocalBusiness, Organization, Product, FAQ) so Google highlights your rich snippets.", tag: "Rich Snippets" },
      { title: "Google Business Profile Authority", description: "Optimizing your local map pack presence across Indian cities with geo-tagged citations and review acceleration workflows.", tag: "Map Pack Dominance" },
    ],
    deliverables: [
      "Complete technical SEO audit and codebase error elimination",
      "Granular keyword research identifying high-converting Indian search terms",
      "Implementation of JSON-LD Schema markup across all core pages",
      "Optimization of meta titles, descriptions, heading hierarchy (H1-H6)",
      "Google My Business (GMB) map pack optimization & review strategy",
      "Monthly transparent rank tracking report & organic traffic analysis",
    ],
    techStack: [
      { name: "Google Search Console API", category: "Index Monitoring" },
      { name: "Ahrefs / SEMrush Engine", category: "Keyword Intelligence" },
      { name: "JSON-LD Structured Schema", category: "Semantic Data" },
      { name: "Lighthouse CI", category: "Performance Tracking" },
    ],
    faqs: [
      { question: "How long does it take to see tangible ranking improvements on Google?", answer: "While technical fixes yield immediate indexing benefits within 2 to 4 weeks, establishing page-1 rankings for competitive high-volume Indian keywords typically requires 60 to 90 days of consistent execution." },
    ],
  },
  "social-media-marketing": {
    overview: "Your audience is scrolling through Instagram, LinkedIn, and Facebook every single day. Our Social Media Marketing service creates distinctive, thumb-stopping visual campaigns and precision performance ad funnels that turn casual scrollers into loyal customers and high-ticket inquiries.",
    targetAudience: "Lifestyle brands, real estate developers, coaching academies, and B2B tech consultancies aiming to build brand authority and generate consistent inbound inquiries across social channels.",
    corePillars: [
      { title: "Distinctive Visual Storytelling", description: "High-aesthetic graphic designs, carousels, and short-form reel concepts that cut through the noise of generic social media posts.", tag: "Creative Excellence" },
      { title: "Precision Audience Retargeting", description: "Deploying Meta Pixel and LinkedIn Insight tag tracking to retarget website visitors with high-conversion promotional offers.", tag: "Smart Retargeting" },
      { title: "Data-Driven Ad Spend Allocation", description: "Continuous A/B testing of ad creatives, headlines, and target demographics to lower Cost-Per-Lead (CPL) and maximize ROAS.", tag: "ROAS Optimization" },
      { title: "Community & Comment Management", description: "Engaging with inquiries, responding to direct messages, and maintaining active brand reputation across all platforms.", tag: "Active Engagement" },
    ],
    deliverables: [
      "Custom monthly social media content calendar & creative strategy",
      "Design of 12-20 high-aesthetic branded posts, carousels & banners",
      "Setup and management of Meta (Instagram/Facebook) & LinkedIn Ad campaigns",
      "Installation of conversion tracking pixels and custom audience creation",
      "Bi-weekly performance analytics dashboard covering reach, clicks, and ROAS",
    ],
    techStack: [
      { name: "Meta Graph API & Ads Manager", category: "Ad Orchestration" },
      { name: "LinkedIn Campaign Manager", category: "B2B Targeting" },
      { name: "Figma & Vector Studios", category: "Creative Production" },
      { name: "GA4 UTM Attribution", category: "Conversion Tracking" },
    ],
    faqs: [
      { question: "Do you create both organic posts and paid advertisements?", answer: "Yes! We handle full-funnel social marketing: high-quality organic content to build your long-term brand equity, paired with precision paid ad campaigns to drive immediate leads and revenue." },
    ],
  },
  "bulk-sms-marketing": {
    overview: "With a 98% open rate—often within 3 minutes of delivery—SMS remains one of the most reliable and direct communication channels in India. Our Bulk SMS Broadcasting & Marketing service provides TRAI DLT-compliant, instant messaging pipelines for promotional blasts, OTP verification, and automated customer transaction alerts.",
    targetAudience: "Retail chains, educational institutions sending fee/exam alerts, event organizers, healthcare clinics for appointment reminders, and financial services requiring instant alerts.",
    corePillars: [
      { title: "100% TRAI DLT Compliance", description: "Full assistance and management of your Entity and Header/Sender ID registration on Indian DLT portals to ensure zero message blocks.", tag: "DLT Guaranteed" },
      { title: "High-Throughput Instant Delivery", description: "Direct operator connectivity with multiple Tier-1 telecom routes ensuring thousands of SMS alerts are delivered in seconds.", tag: "Instant Routing" },
      { title: "API Integration for Automated Alerts", description: "Seamless REST APIs ready to plug into your website, ERP, or billing software for automated OTPs and transaction receipts.", tag: "Developer Ready" },
      { title: "Granular Delivery Reporting", description: "Real-time delivery confirmation logs tracking successful deliveries, bounced numbers, and timestamp reports.", tag: "Real-Time Tracking" },
    ],
    deliverables: [
      "Complete TRAI DLT registration and sender ID (Header) setup guidance",
      "Custom SMS dashboard setup for manual group broadcasts and scheduling",
      "REST API keys and documentation for automated software triggers",
      "Custom message template drafting approved under DLT norms",
      "Real-time delivery log portal with Excel report export capability",
    ],
    techStack: [
      { name: "Direct Telecom SMPP Gateways", category: "Telecom Routing" },
      { name: "DLT Compliance Engine", category: "Regulatory Layer" },
      { name: "High-Concurrency Node.js API", category: "API Gateway" },
      { name: "Redis Queueing", category: "Burst Handling" },
    ],
    faqs: [
      { question: "What is DLT registration and why is it required in India?", answer: "As per TRAI regulations, every business sending SMS to Indian mobile numbers must register their business entity and message templates on a telecom DLT portal to prevent spam. We guide your team through this entire simple registration process." },
    ],
  },
  "whatsapp-messaging": {
    overview: "WhatsApp is where India does business. Our WhatsApp Messaging & Bots service leverages the official WhatsApp Cloud API to deploy verified 24/7 AI business assistants, instant query responders, automated customer support workflows, and high-conversion promotional broadcast campaigns without risk of number banning.",
    targetAudience: "D2C brands, educational admission cells, real estate brokerages, and customer support centers needing instant, automated 24/7 engagement on India's #1 messaging app.",
    corePillars: [
      { title: "Official WhatsApp Cloud API & Green Tick", description: "Direct integration using Meta's official cloud API, with full assistance in applying for the verified Green Tick badge.", tag: "Official Meta API" },
      { title: "24/7 AI-Powered Conversational Bot", description: "Intelligent chatbot workflows that answer common customer queries, share PDF brochures, and qualify leads while your team sleeps.", tag: "AI Lead Qualification" },
      { title: "High-Conversion Interactive Buttons", description: "Rich interactive messages featuring Quick Reply buttons, Website CTA links, and direct product catalog cards right inside chat.", tag: "Interactive UI" },
      { title: "Automated CRM & Notification Triggers", description: "Automatically send order updates, payment receipts, appointment reminders, and abandoned cart alerts from your core software.", tag: "Software Sync" },
    ],
    deliverables: [
      "Official Meta Business Verification and WhatsApp API Business Account setup",
      "Development of custom interactive chatbot flow tailored to your sales funnel",
      "Integration of WhatsApp API into your website contact forms and CRM",
      "Dashboard for live human agent takeover whenever complex queries arise",
      "Broadcast management portal for sending approved promotional templates to opt-in contacts",
    ],
    techStack: [
      { name: "Official WhatsApp Cloud API", category: "Meta Messaging" },
      { name: "Node.js Webhook Handler", category: "Event Pipeline" },
      { name: "PostgreSQL Conversation Store", category: "Chat History" },
      { name: "AI NLP Classification", category: "Intent Detection" },
    ],
    faqs: [
      { question: "Will our WhatsApp number get blocked when sending promotional broadcasts?", answer: "No! Because we use the official Meta WhatsApp Cloud API with approved message templates and opt-in contact lists, your account remains 100% compliant and secure against algorithmic bans." },
    ],
  },
  "google-adwords": {
    overview: "When a potential customer searches Google for your exact service in your city, you need to be at the very top of the page instantly. Our Google AdWords (PPC) Management service constructs precision pay-per-click search campaigns, eliminating wasted ad clicks and capturing high-intent inquiries from day one.",
    targetAudience: "High-ticket B2B services, emergency local contractors, legal/medical specialists, and businesses seeking immediate, qualified customer inquiries within 72 hours.",
    corePillars: [
      { title: "Laser-Targeted Search Intent Match", description: "We meticulously structure exact-match and phrase-match keywords, excluding negative search terms to prevent budget wastage.", tag: "Precision Targeting" },
      { title: "High-Converting Dedicated Landing Pages", description: "We don't send ad clicks to a generic homepage. We pair your ads with custom-engineered, ultra-fast landing pages built to convert.", tag: "Dedicated Funnels" },
      { title: "Granular Conversion & Call Tracking", description: "Exact tracking of phone calls, WhatsApp clicks, and form submissions attributed right down to the specific keyword that triggered them.", tag: "100% Attribution" },
      { title: "Continuous Bid & Quality Score Optimization", description: "Daily monitoring and optimization of your ad copy quality score, allowing you to pay less per click than your competitors.", tag: "Lower CPC" },
    ],
    deliverables: [
      "Complete Google Ads account setup and campaign architecture creation",
      "Deep keyword analysis and comprehensive negative keyword list build",
      "Crafting of high-CTR ad copy featuring sitelinks, callouts & phone extensions",
      "Creation of a custom, sub-second conversion landing page for the campaign",
      "GA4 and Google Tag Manager conversion tracking configuration",
      "Weekly optimization & transparent monthly cost-per-lead ROI reports",
    ],
    techStack: [
      { name: "Google Ads API & Scripts", category: "Bid Automation" },
      { name: "Google Tag Manager (GTM)", category: "Event Tracking" },
      { name: "Next.js High-Speed Landing Pages", category: "Conversion Engine" },
      { name: "Call Tracking Dynamic Insertion", category: "Attribution" },
    ],
    faqs: [
      { question: "How quickly will we start receiving inquiries after launching the campaign?", answer: "Once the campaigns and custom landing pages are approved and live, qualified customer inquiries typically begin arriving within 24 to 48 hours." },
    ],
  },

  // --- GROUP 3: MOBILE APPS ---
  "ecommerce-mobile-app": {
    overview: "While websites capture new visitors, native mobile apps drive customer loyalty, repeat purchases, and higher average order values. Our E-Commerce Mobile App Development service builds slick, native iOS and Android shopping experiences featuring instant UPI payments, real-time order tracking, and high-conversion push notifications.",
    targetAudience: "Established fashion brands, grocery & daily essentials delivery networks, electronics retailers, and D2C brands looking to own their customer's smartphone home screen.",
    corePillars: [
      { title: "Silky 60fps Native Performance", description: "Engineered using React Native for flawless, butter-smooth animations, instant screen transitions, and crash-free reliability.", tag: "Native 60fps UX" },
      { title: "Direct UPI & Wallet Deep-Linking", description: "One-tap payment checkout that opens directly into GPay, PhonePe, or Paytm with pre-filled amounts and instant verification.", tag: "1-Tap UPI Checkout" },
      { title: "High-Conversion Push Notifications", description: "Send free, instant promotional notifications for flash sales, order status updates, and abandoned cart reminders right to user lock screens.", tag: "Free Direct Marketing" },
      { title: "Real-Time Order & Driver Tracking", description: "Live GPS map tracking so customers can watch their shipment or delivery driver arrive in real time.", tag: "Live Order Tracking" },
    ],
    deliverables: [
      "Native iOS App (published on Apple App Store) & Android App (published on Google Play)",
      "Sync with existing e-commerce backend / inventory database",
      "Integrated UPI deep-link checkout and secure payment gateway",
      "Firebase Cloud Messaging (FCM) push notification broadcast panel",
      "Customer wishlist, reviews, and loyalty rewards points engine",
      "Complete source code handover with zero ongoing agency commission",
    ],
    techStack: [
      { name: "React Native / Expo Enterprise", category: "Mobile Framework" },
      { name: "Razorpay Native SDK", category: "In-App Payments" },
      { name: "Firebase Cloud Messaging", category: "Push Notifications" },
      { name: "Google Maps SDK", category: "Live GPS Tracking" },
    ],
    faqs: [
      { question: "Will this mobile app sync with our existing website inventory?", answer: "Yes! We build a unified API bridge so whenever an item is sold on your website or mobile app, stock levels update across all platforms instantly." },
    ],
  },
  "multivendor-mobile-app": {
    overview: "Build your own digital marketplace. Our Multivendor Mobile App Development service creates a scalable, three-pillar ecosystem connecting independent vendors, end-consumers, and delivery agents into a seamless platform—complete with automated commission splitting and vendor payouts.",
    targetAudience: "Entrepreneurs launching regional food delivery networks, B2B wholesale marketplaces, service booking aggregators, or multi-brand retail platforms.",
    corePillars: [
      { title: "Three-App Synchronized Ecosystem", description: "Dedicated apps for Consumers (Shopping), Vendors (Order/Inventory Management), and Delivery Agents (Dispatch & Navigation).", tag: "3-Pillar Architecture" },
      { title: "Automated Commission Split & Payouts", description: "Automatically calculate vendor earnings, deduct platform commission rates, and execute scheduled bank transfer payouts.", tag: "Automated Fintech" },
      { title: "Granular Vendor Storefront Controls", description: "Each vendor gets their own dashboard to manage product catalogs, set operating hours, track reviews, and print invoices.", tag: "Vendor Autonomy" },
      { title: "Real-Time Geo-Dispatching Engine", description: "Intelligent order assignment connecting the nearest available delivery executive to the vendor kitchen or warehouse immediately.", tag: "Smart Logistics" },
    ],
    deliverables: [
      "Customer Mobile App (iOS & Android) for browsing, ordering & tracking",
      "Vendor Management App & Web Portal for inventory, order acceptance & earnings",
      "Delivery Agent App with live GPS navigation, order pickup & digital proof-of-delivery",
      "Master Super-Admin Dashboard for setting commission rates, resolving disputes & tracking platform GMV",
      "Full cloud deployment on scalable AWS / Google Cloud infrastructure",
    ],
    techStack: [
      { name: "React Native Mobile Suite", category: "Cross-Platform Apps" },
      { name: "Node.js / NestJS Microservices", category: "Backend Engine" },
      { name: "PostgreSQL & PostGIS", category: "Geo-Spatial Database" },
      { name: "Razorpay Route / Nodal Banking", category: "Automated Payouts" },
    ],
    faqs: [
      { question: "How does the platform handle commission deductions when a customer pays?", answer: "Using automated payment splitters (like Razorpay Route), when a customer pays ₹1,000, the platform automatically retains your agreed commission (e.g. 15%) and routes the remaining balance directly to the vendor's bank account." },
    ],
  },
  "video-streaming-ott": {
    overview: "Launch your own Netflix or MasterClass. Our Video Streaming App (OTT) Development builds high-concurrency, buffer-free video entertainment and educational platforms engineered with DRM content protection, multi-bitrate adaptive streaming, and flexible subscription or pay-per-view monetization models.",
    targetAudience: "Regional entertainment producers, ed-tech academies, religious organizations, and fitness trainers wanting to monetize their video catalog without relying on YouTube.",
    corePillars: [
      { title: "DRM Anti-Piracy Content Protection", description: "Enterprise encryption preventing unauthorized screen recording, downloading, or URL sharing of your valuable video assets.", tag: "Maximum Security" },
      { title: "Buffer-Free Adaptive Bitrate Streaming", description: "Videos dynamically adjust from 4K down to 360p in real time depending on the user's internet connection speed.", tag: "Flawless Playback" },
      { title: "Flexible Monetization (SVOD / TVOD)", description: "Support monthly/annual subscription plans, one-off pay-per-view movie rentals, and ad-supported free tiers.", tag: "Multiple Revenue Streams" },
      { title: "Multi-Screen Cross-Device Sync", description: "Start watching on a smartphone on the train and seamlessly resume from the exact same second on Smart TV or laptop.", tag: "Omnichannel UX" },
    ],
    deliverables: [
      "Mobile OTT Apps for iOS & Android with offline secure downloading",
      "Web-based video streaming portal with custom HTML5 video player",
      "Integrated AWS MediaConvert / Cloudflare Stream transcoding pipeline",
      "Subscription recurring billing and payment gateway integration",
      "Content Management System (CMS) for uploading videos, setting categories, trailers & subtitles",
    ],
    techStack: [
      { name: "Cloudflare Stream / AWS Media", category: "Video Transcoding" },
      { name: "HLS / DASH Streaming Protocol", category: "Adaptive Delivery" },
      { name: "React Native / WebRTC", category: "Player Frontend" },
      { name: "Redis High-Speed Caching", category: "Session Management" },
    ],
    faqs: [
      { question: "Can users download videos to watch offline inside the app?", answer: "Yes! Users can securely download videos inside the mobile app for offline viewing during flights or commutes. The downloaded files are encrypted and cannot be exported or played outside your app." },
    ],
  },
  "food-ordering-app": {
    overview: "Take back control from Zomato and Swiggy. Our Food Ordering Mobile App Development creates bespoke, zero-commission ordering applications for restaurants and cloud kitchen networks—complete with live order ticketing, delivery dispatching, and direct customer loyalty rewards.",
    targetAudience: "Multi-outlet restaurant chains, independent fine-dining establishments, bakery networks, and fast-growing cloud kitchens tired of paying 25% to 30% aggregator commissions.",
    corePillars: [
      { title: "Zero Aggregator Commissions", description: "Every single rupee ordered through your custom app goes straight into your bank account. Stop paying 30% commissions forever.", tag: "Keep 100% Revenue" },
      { title: "Kitchen Order Ticketing (KOT) Sync", description: "Orders placed on the app instantly print out or buzz on a digital display terminal right inside your kitchen.", tag: "Instant Kitchen Alert" },
      { title: "Live Rider GPS Tracking", description: "Customers can track their food delivery rider in real time on an interactive map from kitchen pickup to doorstep arrival.", tag: "Doorstep Tracking" },
      { title: "In-App Loyalty & Cashback Wallet", description: "Reward repeat diners with custom cashback points, birthday discount vouchers, and exclusive push notification offers.", tag: "Customer Retention" },
    ],
    deliverables: [
      "Custom Branded Food Ordering App for iOS & Android",
      "Restaurant KOT & Order Management Tablet / Web Dashboard",
      "Delivery Driver Dispatch & Navigation App",
      "Direct UPI, Card, and Cash-on-Delivery payment processing",
      "Automated WhatsApp order confirmation & rider assignment alerts",
      "Menu management portal with instant out-of-stock toggle switches",
    ],
    techStack: [
      { name: "React Native Apps", category: "Customer & Rider UX" },
      { name: "WebSockets / Socket.io", category: "Real-Time KOT Alerts" },
      { name: "Google Maps Platform", category: "Live Route Tracking" },
      { name: "WhatsApp Cloud API", category: "Instant Status Updates" },
    ],
    faqs: [
      { question: "How much can a typical restaurant save by having its own ordering app?", answer: "A restaurant doing ₹5 Lakhs monthly on third-party apps typically pays ₹1.25 Lakhs to ₹1.5 Lakhs in commissions every single month. With your own custom app, your monthly software cost drops to zero after launch, keeping lakhs of extra profit every year." },
    ],
  },
  "consultation-apps": {
    overview: "Whether you are a medical doctor, legal advocate, astrological consultant, or business coach, our Consultation & Booking Apps provide a seamless virtual office. We engineer complete platforms featuring automated time-slot scheduling, upfront fee collection, and high-definition encrypted video consultations.",
    targetAudience: "Healthcare clinics, legal firms, therapy centers, expert consultants, and fitness instructors wanting to monetize their time and expertise globally without scheduling headaches.",
    corePillars: [
      { title: "Automated Time-Slot Scheduling", description: "Syncs directly with your Google Calendar, automatically adjusting for time zones and preventing double-booking conflicts.", tag: "Smart Scheduling" },
      { title: "Upfront Fee Collection", description: "Patients or clients must complete UPI or card payment before the appointment time slot is confirmed and locked.", tag: "Guaranteed Payments" },
      { title: "Encrypted HD Video Consultations", description: "High-definition, HIPAA/GDPR-compliant video calling built directly inside the app—no need for external Zoom links.", tag: "In-App Video Calling" },
      { title: "Digital Prescription & Report Vault", description: "Consultants can generate and share digital prescriptions, PDF advice notes, or case files securely inside the client's account.", tag: "Secure Document Vault" },
    ],
    deliverables: [
      "Client Booking Mobile App & Web Portal",
      "Doctor / Consultant Schedule Management Dashboard",
      "Integrated WebRTC / Twilio HD video calling engine with screen sharing",
      "UPI & Card payment gateway with automated receipt generation",
      "Automated WhatsApp & SMS appointment reminders 1 hour before call",
      "Secure cloud storage for uploading medical reports or case briefs",
    ],
    techStack: [
      { name: "WebRTC / LiveKit Engine", category: "Encrypted Video Calls" },
      { name: "Next.js & React Native", category: "Omnichannel UX" },
      { name: "PostgreSQL Database", category: "Encrypted Records" },
      { name: "Automated Cron Scheduling", category: "Reminder System" },
    ],
    faqs: [
      { question: "Do clients need to install third-party apps like Zoom or Google Meet?", answer: "No! The video consultation opens directly right inside your branded mobile app or web browser with one single tap." },
    ],
  },

  // --- GROUP 4: WEB PORTALS ---
  "online-learning-portal": {
    overview: "Scale your educational institution beyond physical classrooms. Our Online Learning Web Portal (LMS) development creates powerful, interactive digital learning platforms complete with structured video course modules, online assignments, automated MCQ grading, and verifiable digital certificate issuance.",
    targetAudience: "Coaching institutes, universities, corporate employee upskilling programs, and individual subject-matter experts creating structured online academies.",
    corePillars: [
      { title: "Structured Course & Batch Architecture", description: "Organize courses by semester, topic, or difficulty with sequential lesson locking and drip-feed content release.", tag: "Structured Learning" },
      { title: "Automated Exam & MCQ Grading Engine", description: "Conduct timed online mock tests, instant MCQ evaluation, and comprehensive student performance analytics.", tag: "Automated Evaluation" },
      { title: "Anti-Piracy Video Protection", description: "Secure video playback ensuring students cannot download, screen-record, or share private lecture recordings.", tag: "Content Security" },
      { title: "Automated Certificate Generator", description: "Automatically generate high-resolution, verifiable PDF completion certificates with unique QR verification codes upon passing.", tag: "Instant Certification" },
    ],
    deliverables: [
      "Complete custom Learning Management System (LMS) web portal",
      "Student dashboard for course access, progress tracking & gradebook",
      "Instructor portal for uploading lectures, notes & creating quizzes",
      "Payment gateway integration for course enrollment & installment billing",
      "Live class integration (Zoom/WebRTC API) with automated recording archives",
      "Discussion forum & student-to-teacher doubt resolution ticketing",
    ],
    techStack: [
      { name: "Next.js App Router", category: "High-Speed Web Portal" },
      { name: "PostgreSQL Database", category: "Student Progress Store" },
      { name: "Cloudflare Secure Stream", category: "Encrypted Lectures" },
      { name: "PDFKit Engine", category: "Dynamic Certificate Generation" },
    ],
    faqs: [
      { question: "Can we offer courses with installment or EMI payment options?", answer: "Yes! We can configure flexible payment plans, allowing students to pay in monthly installments with automatic course access suspension if an installment is missed." },
    ],
  },
  "matrimony-portal": {
    overview: "Trust, privacy, and granular compatibility are the pillars of Indian matchmaking. Our Matrimony Web Portal development builds high-security, culturally tailored matrimonial platforms featuring advanced profile filtering, ID verification badges, privacy-guarded photo vaults, and smart astrological matching.",
    targetAudience: "Community organizations, regional matrimonial bureaus, and entrepreneurs launching specialized matchmaking networks across India.",
    corePillars: [
      { title: "Granular Cultural & Astrological Filtering", description: "Deep filtering by community, sub-caste, gotra, mother tongue, education, profession, horoscope details, and lifestyle preferences.", tag: "Precision Matchmaking" },
      { title: "Aadhaar & Mobile ID Verification Badges", description: "Automated identity and phone verification workflows to ensure high-trust, genuine profiles and eliminate fake accounts.", tag: "100% Verified Profiles" },
      { title: "Privacy-Guarded Photo Vaults", description: "Users maintain full control over who views their photographs, requiring explicit approval before pictures are unlocked.", tag: "Strict Privacy Controls" },
      { title: "Tiered Membership & Contact Credits", description: "Monetize through free registration paired with paid premium membership tiers granting contact number unlock credits.", tag: "High-ROI Monetization" },
    ],
    deliverables: [
      "Full custom matrimonial portal with responsive mobile & desktop UX",
      "Advanced search and multi-parameter filtering engine",
      "Secure member profile creation wizard with multi-step validation",
      "Integrated payment gateway for purchasing membership subscription packages",
      "In-portal secure messaging and interest expression system",
      "Admin verification dashboard for reviewing IDs and approving profiles",
    ],
    techStack: [
      { name: "Next.js & React", category: "Frontend Portal Engine" },
      { name: "PostgreSQL with Advanced Indexing", category: "High-Speed Search" },
      { name: "AWS S3 Private Buckets", category: "Secure Photo Storage" },
      { name: "Razorpay Subscription API", category: "Recurring Billing" },
    ],
    faqs: [
      { question: "How do you ensure member data and contact numbers remain safe?", answer: "All sensitive data and phone numbers are encrypted at rest. Contact numbers are never displayed publicly and can only be accessed when a premium member utilizes an official contact unlock credit." },
    ],
  },
  "food-delivery-portal": {
    overview: "Manage an entire multi-restaurant food delivery network from a central command dashboard. Our Food Delivery Web Portal provides web-based ordering networks complete with real-time kitchen status, delivery driver dispatching, customer tracking, and comprehensive settlement accounting.",
    targetAudience: "City-wide food delivery cooperatives, cloud kitchen conglomerates, and enterprise hospitality brands managing high-volume web food ordering across multiple locations.",
    corePillars: [
      { title: "Multi-Location Geo-Fenced Ordering", description: "Automatically detects the customer's exact coordinates and shows only kitchens and menus capable of delivering within that radius.", tag: "Geo-Fenced Menus" },
      { title: "Real-Time Dispatch Command Center", description: "Live map visualization of all active orders, kitchen preparation times, and delivery rider coordinates on one screen.", tag: "Executive Control Room" },
      { title: "Automated Payout & Tax Accounting", description: "Daily automated reconciliation calculating restaurant dues, driver delivery fees, and GST tax liability seamlessly.", tag: "Automated Accounting" },
      { title: "High-Load Peak Hour Resilience", description: "Engineered with Redis caching to handle massive traffic spikes during Friday nights and festival dinner rushes without slowdowns.", tag: "High Concurrency" },
    ],
    deliverables: [
      "Customer Web Food Ordering Portal & PWA",
      "Central Executive Operations Command Dashboard",
      "Restaurant Portal for menu pricing, availability & order acceptance",
      "Delivery Driver Dispatch management portal",
      "Real-time SMS & WhatsApp automated customer status updates",
    ],
    techStack: [
      { name: "Next.js Enterprise Stack", category: "High-Speed Web App" },
      { name: "PostGIS Geo-Spatial Engine", category: "Radius Filtering" },
      { name: "Redis In-Memory Cache", category: "Peak Load Handling" },
      { name: "Socket.io", category: "Live Order Telemetry" },
    ],
    faqs: [
      { question: "Can the web portal handle sudden traffic spikes during major cricket matches or festivals?", answer: "Yes! By utilizing edge caching and Redis in-memory queueing, our portals routinely handle thousands of concurrent orders per minute with zero lag or crash failures." },
    ],
  },
  "news-portal": {
    overview: "Journalism demands speed, reliability, and monetization efficiency. Our Online News Portal Development creates lightning-fast, high-concurrency digital publishing platforms optimized for breaking news alerts, Google News indexing, programmatic ad management, and editorial workflow automation.",
    targetAudience: "Regional news networks, digital magazines, independent journalists, and media publishing houses aiming for dominant online readership across India.",
    corePillars: [
      { title: "Ultra-Fast LCP & Google News Compliance", description: "Engineered to meet all Google News and AMP/Core Web Vitals criteria, ensuring your breaking stories appear instantly in Google Discover.", tag: "Google Discover Ready" },
      { title: "Granular Editorial Workflow System", description: "Multi-tiered publishing workflow supporting Reporters, Sub-Editors, and Chief Editors with draft scheduling and revision logs.", tag: "Editorial Control" },
      { title: "Optimized Programmatic Ad Slots", description: "Strategic ad placements designed for high viewability without causing page layout shifts (CLS), maximizing Google AdSense / Adx revenue.", tag: "Max Ad Revenue" },
      { title: "Instant Breaking News Tickers & Alerts", description: "Live breaking news ticker banners and instant web push notification broadcasts across thousands of subscribers simultaneously.", tag: "Instant Broadcasting" },
    ],
    deliverables: [
      "Custom high-speed news publication portal with responsive typography",
      "Editorial CMS with rich-text editor, media library & SEO scoring meter",
      "Automated sitemap generation specifically formatted for Google News",
      "Integrated Web Push Notification engine for breaking news alerts",
      "Ad space management panel supporting Google AdSense & direct sponsors",
      "Social media instant auto-sharing integration (Twitter/X & Facebook)",
    ],
    techStack: [
      { name: "Next.js Static & ISR Rendering", category: "Sub-Second Publishing" },
      { name: "Tailwind CSS Editorial System", category: "Clean Layouts" },
      { name: "Cloudflare Edge Caching", category: "High Traffic Handling" },
      { name: "OneSignal / Web Push API", category: "Instant News Alerts" },
    ],
    faqs: [
      { question: "Will the portal crash if a breaking news story goes viral and brings 100,000 visitors in an hour?", answer: "No. Because our architecture leverages Incremental Static Regeneration (ISR) and global Cloudflare edge caching, viral traffic spikes are served directly from edge CDN nodes with zero strain on your origin database." },
    ],
  },
  "classifieds-portal": {
    overview: "Connect buyers, sellers, and local service providers in your region. Our Free Classifieds Portal development builds high-speed community directories and listing marketplaces complete with location-based discovery, category filtering, user moderation tools, and featured listing monetization.",
    targetAudience: "Entrepreneurs building city-specific directories, B2B industrial surplus marketplaces, job boards, or used vehicles/real estate classified networks.",
    corePillars: [
      { title: "Instant Geo-Radius & Category Search", description: "Ultra-fast faceted search enabling users to filter ads by city, neighborhood, price range, and item condition instantly.", tag: "Sub-Second Search" },
      { title: "Automated Fraud & Spam Moderation", description: "AI-assisted screening and keyword filtering to detect duplicate ads, forbidden items, and phone number spam automatically.", tag: "Spam Protection" },
      { title: "Featured Ad Monetization Engine", description: "Sellers can pay via UPI to highlight their listing as a 'Top Featured Ad' or bump it to the top of category search results.", tag: "High-Margin Revenue" },
      { title: "Direct Buyer-Seller Chat & Call Masking", description: "In-portal direct messaging and secure call inquiry options keeping conversations organized and user contact details protected.", tag: "Safe Communication" },
    ],
    deliverables: [
      "Full responsive classifieds web portal and mobile-optimized interface",
      "User portal for posting ads, uploading photos & managing active listings",
      "Admin moderation panel for reviewing, approving, or flagging classifieds",
      "Payment gateway integration for selling Premium / Featured ad boosts",
      "Faceted search engine with instant auto-suggest search bar",
    ],
    techStack: [
      { name: "Next.js & TypeScript", category: "High-Performance Core" },
      { name: "PostgreSQL & Full-Text Search", category: "Search & Filtering" },
      { name: "AWS S3 / Cloudflare Images", category: "Optimized Ad Photos" },
      { name: "Razorpay Checkout API", category: "Ad Boost Payments" },
    ],
    faqs: [
      { question: "Can we restrict ad postings to specific cities or states in India?", answer: "Yes, we can configure exact geographic boundaries, allowing you to launch city-by-city or operate across the entire country with localized sub-domains." },
    ],
  },

  // --- GROUP 5: SOFTWARES ---
  "school-management": {
    overview: "Eliminate messy paper registers, scattered WhatsApp groups, and billing confusion. Our School Management Software (ERP) is a comprehensive, centralized academic administration system tracking student attendance, fee collection, exam report cards, teacher timetables, and parent communications in one clean portal.",
    targetAudience: "K-12 schools, international academies, and educational trusts across India needing a modern, unified campus management solution.",
    corePillars: [
      { title: "Automated Fee Billing & UPI Collection", description: "Generate term-wise fee challans, send automated WhatsApp reminders, and collect instant UPI payments with automated receipt issuance.", tag: "Automated Collections" },
      { title: "Biometric & RFID Attendance Sync", description: "Integrate with campus biometric scanners or mobile teacher apps to send instant SMS alerts to parents the moment a student marks attendance.", tag: "Instant Safety Alerts" },
      { title: "Automated Exam Report Card Generator", description: "Teachers input subject marks, and the system automatically calculates grades, percentages, class ranks, and generates printable PDF report cards.", tag: "One-Click Report Cards" },
      { title: "Dedicated Parent & Teacher Portals", description: "Parents view homework, fee dues, and attendance on their phones, while teachers manage lesson plans and grading effortlessly.", tag: "Unified Campus UX" },
    ],
    deliverables: [
      "Complete School ERP software deployed on secure cloud servers",
      "Master Admin Portal for principal and school management trustees",
      "Teacher Portal for daily attendance, homework upload & marks entry",
      "Parent / Student Portal & Mobile Web App for fee payment & report cards",
      "Automated WhatsApp & SMS gateway integration for school announcements",
      "Full staff onboarding training and annual technical support guarantee",
    ],
    techStack: [
      { name: "Next.js Fullstack ERP Stack", category: "Web Administration" },
      { name: "PostgreSQL Relational Database", category: "Academic Records" },
      { name: "WhatsApp Cloud API & SMS", category: "Parent Communication" },
      { name: "PDFKit Report Generator", category: "Automated Challans & Cards" },
    ],
    faqs: [
      { question: "Can the software handle complex Indian fee structures with concession quotas and late fines?", answer: "Yes! We build highly customizable fee structures supporting RTE concessions, sibling discounts, bus transport zone charges, and automated daily/weekly late fee calculations." },
    ],
  },
  "college-management": {
    overview: "Managing a multi-department university or technical college requires industrial-grade software architecture. Our College Management Software provides a unified campus ERP managing admissions, semester registrations, faculty workloads, hostel room allocation, library assets, and placement cell automation.",
    targetAudience: "Engineering colleges, degree universities, medical institutes, and autonomous educational campuses managing thousands of students and staff across multiple departments.",
    corePillars: [
      { title: "Online Admission & Merit List Automation", description: "Digital application forms, document verification workflows, entrance rank processing, and automated merit list generation.", tag: "Paperless Admissions" },
      { title: "Semester Choice Based Credit System (CBCS)", description: "Handles complex elective course registrations, credit hour calculations, and automated exam hall ticket generation with barcode verification.", tag: "CBCS Compliant" },
      { title: "Hostel & Mess Allocation Management", description: "Complete tracking of hostel room availability, student check-in/out logs, mess fee billing, and visitor security management.", tag: "Hostel & Campus ERP" },
      { title: "Corporate Placement Cell Portal", description: "Connects students with visiting recruiters, tracks interview rounds, resume repositories, and generates placement statistics.", tag: "Placement Automation" },
    ],
    deliverables: [
      "Comprehensive multi-department College ERP suite",
      "Admissions & student lifecycle management module",
      "Examination controller dashboard with confidential grading workflows",
      "Hostel, Library, and Inventory asset management modules",
      "Alumni network & corporate placement cell portal",
    ],
    techStack: [
      { name: "Enterprise Node.js & TypeScript", category: "Core Backend ERP" },
      { name: "PostgreSQL & Redis Cache", category: "High-Concurrency Data" },
      { name: "Role-Based Access Control (RBAC)", category: "Enterprise Security" },
      { name: "Automated Backup & DR Cloud", category: "Data Disaster Recovery" },
    ],
    faqs: [
      { question: "Is data secure against unauthorized grade modifications?", answer: "We enforce strict cryptographic audit logs and immutable role permissions. Every grade entry or modification is time-stamped with the exact IP address and faculty credentials, preventing any unauthorized tampering." },
    ],
  },
  "vocational-management": {
    overview: "Specialized skill development institutes and vocational training academies operate on dynamic batch schedules and practical certification workflows. Our Vocational Institute Management software streamlines batch scheduling, instructor allocations, student lab attendance, and corporate placement tracking.",
    targetAudience: "IT training institutes, fashion design academies, culinary schools, language centers, and government-affiliated skill development organizations across India.",
    corePillars: [
      { title: "Dynamic Batch & Lab Scheduling", description: "Avoid classroom and computer lab clashes with intelligent timetable scheduling tailored for rotating batch timing across weekdays and weekends.", tag: "Clash-Free Timetables" },
      { title: "Practical Assignment & Project Tracking", description: "Students upload project files, GitHub links, or design portfolios for instructor evaluation and milestone feedback.", tag: "Practical Evaluation" },
      { title: "Installment Fee Tracking & Alerts", description: "Automated tracking of course fee installments with automatic SMS reminders and temporary LMS access restriction on overdue payments.", tag: "Guaranteed Fee Recovery" },
      { title: "Corporate Interview & Placement Pipeline", description: "Track student job readiness, schedule campus interviews with hiring partners, and manage offer letter records.", tag: "Placement Tracker" },
    ],
    deliverables: [
      "Custom Vocational Academy Management Portal",
      "Batch management & instructor assignment module",
      "Student project submission and grading evaluation portal",
      "Automated fee installment tracking and reminder alerts",
      "Digital completion certificate generator with unique verification ID",
    ],
    techStack: [
      { name: "Next.js & React Dashboard", category: "Admin Frontend" },
      { name: "PostgreSQL Database", category: "Batch & Student Store" },
      { name: "Automated Cron Workers", category: "Installment Reminders" },
      { name: "Cloud Storage API", category: "Student Portfolio Vault" },
    ],
    faqs: [
      { question: "Can we track students enrolled in multiple short-term courses simultaneously?", answer: "Yes, our architecture supports multi-course enrollments under a single unified student ID, providing a clean overview of all active batches and fee ledgers." },
    ],
  },
  "billing-client-management": {
    overview: "Throw away messy Excel sheets and fragmented accounting software. Our Billing & Client Management (CRM) custom software replaces administrative chaos with clean, automated GST invoice generation, client project pipelines, automated payment follow-ups, and comprehensive financial reporting built specifically for Indian businesses.",
    targetAudience: "Digital agencies, chartered accountants, legal consultancies, B2B service contractors, and distributors wanting an all-in-one CRM and GST billing power-tool.",
    corePillars: [
      { title: "Flawless 100% GST Compliant Invoicing", description: "Automatically calculate CGST, SGST, and IGST based on client state codes, generating clean, professional PDF invoices in one click.", tag: "100% GST Ready" },
      { title: "Automated WhatsApp Payment Follow-ups", description: "Schedule polite, automated reminder messages via WhatsApp and Email 3 days before, on due date, and after invoice overdue dates.", tag: "Automated Recovery" },
      { title: "Visual Client Lead & Project CRM", description: "Track leads from initial inquiry to closed deal using intuitive Kanban boards, with complete communication history and file storage.", tag: "Kanban Lead CRM" },
      { title: "Direct Payment Gateway Payment Links", description: "Embed instant Razorpay payment buttons directly inside digital PDF invoices so clients can pay via UPI with one tap.", tag: "1-Tap Invoice Pay" },
    ],
    deliverables: [
      "Bespoke Cloud CRM & GST Billing Software setup on private domain",
      "Custom branded invoice, quotation, and proforma PDF templates",
      "Client portal where customers can login to view and download past invoices",
      "Automated recurring subscription billing and payment link generation",
      "Expense tracking and monthly GST summary export for your accountant",
    ],
    techStack: [
      { name: "Next.js & TypeScript Suite", category: "CRM Application" },
      { name: "PostgreSQL & Prisma ORM", category: "Financial Ledger" },
      { name: "PDFKit & Puppeteer Engine", category: "Clean Invoice PDFs" },
      { name: "Razorpay / Cashfree API", category: "Instant Payment Links" },
    ],
    faqs: [
      { question: "Can our accountant easily export data for monthly GSTR-1 and GSTR-3B filings?", answer: "Yes! With one single click, your accountant can download complete, clean Excel reports formatted specifically with B2B, B2C, HSN codes, and tax breakdowns ready for direct portal upload." },
    ],
  },
  "restaurant-management": {
    overview: "Streamline your hospitality operations from table reservation to kitchen prep and billing checkout. Our Restaurant Management (POS & KOT) software connects front-of-house waiters, kitchen chefs, and cashiers into a real-time, synchronized workflow eliminating order delays, billing errors, and ingredient theft.",
    targetAudience: "Busy dine-in restaurants, cafes, bars, quick-service food courts, and cloud kitchen brands requiring fast, reliable table and kitchen synchronization.",
    corePillars: [
      { title: "Instant Table to Kitchen POS & KOT", description: "Waiters take orders on mobile tablets, and Kitchen Order Tickets (KOT) instantly appear on kitchen monitors with audio alerts.", tag: "Zero Order Delay" },
      { title: "Granular Ingredient Recipe Inventory", description: "Automatically deduct raw ingredient stock (grams of cheese, ml of oil) the exact moment a dish is billed at the POS terminal.", tag: "Stop Ingredient Theft" },
      { title: "QR Code Self-Ordering Table Menus", description: "Diners scan a table QR code to browse digital menus with rich photos, place orders, and pay via UPI without waiting for staff.", tag: "Self-Order QR Menus" },
      { title: "Split Billing & Automated Discounting", description: "Effortlessly handle split bills, corporate discounts, happy hour auto-pricing, and instant GST tax calculations.", tag: "Lightning POS Billing" },
    ],
    deliverables: [
      "Fast Touchscreen POS Billing software (works offline & cloud-synced)",
      "Kitchen Order Display (KOT) system for chefs with preparation timers",
      "Table QR Code digital menu and self-ordering customer portal",
      "Raw material inventory tracking with low-stock SMS alert triggers",
      "Daily executive sales summary & top-selling dish analytics report",
    ],
    techStack: [
      { name: "Electron / Next.js Hybrid POS", category: "Offline/Online POS" },
      { name: "WebSockets Real-Time Sync", category: "Instant KOT Delivery" },
      { name: "PostgreSQL Cloud & Local Store", category: "Resilient Storage" },
      { name: "Thermal Printer ESC/POS API", category: "Instant Receipt Printing" },
    ],
    faqs: [
      { question: "Will the POS billing software still work if internet connectivity drops temporarily?", answer: "Yes! Our hybrid POS architecture continues billing tables and printing kitchen KOTs seamlessly offline on local Wi-Fi, automatically syncing data to your cloud reports the moment internet returns." },
    ],
  },

  // --- GROUP 6: GRAPHIC DESIGN ---
  "logo-design": {
    overview: "Your logo is the foundation of your brand identity and the first thing customers judge. Our Logo & Brand Identity Design service crafts distinctive, memorable, and strategically engineered visual identities. We don't use generic clipart or AI generators—we build bespoke typography, powerful symbols, and comprehensive brand guidelines that command respect across every Indian and global touchpoint.",
    targetAudience: "Ambitious startups launching new ventures, established Indian businesses undergoing premium rebranding, and corporate enterprises needing a cohesive, authoritative visual identity.",
    corePillars: [
      { title: "Bespoke Vector Craftsmanship", description: "Every curve, letterform, and symbol is hand-crafted in vector format, ensuring mathematical precision and infinite scalability.", tag: "100% Original Vectors" },
      { title: "Strategic Color & Typography Psychology", description: "Selecting color palettes and typography pairings scientifically chosen to evoke trust, prestige, energy, or innovation in your target demographic.", tag: "Color Psychology" },
      { title: "Multi-Format Versatility Engineering", description: "Logos engineered to look striking whether printed on a giant highway billboard, stamped on metal packaging, or displayed as a tiny 16x16 mobile favicon.", tag: "Infinite Scalability" },
      { title: "Comprehensive Brand Guidelines Book", description: "A detailed rulebook covering exact PANTONE/CMYK/RGB color codes, typography hierarchy, clear-space rules, and correct usage guidelines.", tag: "Full Brand Book" },
    ],
    deliverables: [
      "3 to 5 distinct, highly creative conceptual logo design directions",
      "Unlimited refinement rounds on the selected primary design concept",
      "Complete master vector file package (AI, EPS, SVG, PDF, transparent PNG, JPG)",
      "Full Brand Identity Guidelines PDF book (Color codes, fonts, usage rules)",
      "Social media profile kit (pre-sized profile icons & banners for LinkedIn, Insta, X)",
      "100% full copyright and intellectual property transfer certificate",
    ],
    techStack: [
      { name: "Adobe Illustrator CC", category: "Vector Craftsmanship" },
      { name: "Grid & Golden Ratio Systems", category: "Geometric Precision" },
      { name: "PANTONE & CMYK Profiles", category: "Print Perfection" },
      { name: "SVG Clean Code Export", category: "Web Performance" },
    ],
    faqs: [
      { question: "Do we receive the original vector source files?", answer: "Yes! Once finalized, you receive the complete industry-standard vector source package (AI, EPS, and SVG) giving you full ownership and the ability to scale your logo from a business card to a stadium billboard with zero quality loss." },
    ],
  },
  "flyer-design": {
    overview: "When advertising your upcoming event, seasonal discount sale, or local store launch, your promotional material must grab attention in less than 2 seconds. Our Flyer & Marketing Collateral design creates vibrant, high-converting digital handbills and print flyers engineered with sharp visual hierarchy and compelling call-to-action placement.",
    targetAudience: "Retail showrooms running festival sales, educational institutes announcing new admissions, event organizers, and real estate developers showcasing new project launches.",
    corePillars: [
      { title: "2-Second Visual Hierarchy", description: "Strategic arrangement of headlines, offer percentages, and key benefits so the core message is understood in the blink of an eye.", tag: "Instant Impact Hierarchy" },
      { title: "High-Resolution Print & Digital Export", description: "Delivered in crisp 300 DPI CMYK format with printer bleed marks, alongside optimized RGB digital files ready for instant WhatsApp broadcasting.", tag: "Print & WhatsApp Ready" },
      { title: "Scannable Action Points & QR Codes", description: "Integrating clean QR codes, map directions, and direct contact numbers so interested prospects can take immediate action.", tag: "Direct Action UI" },
      { title: "Distinctive Custom Layouts", description: "Zero generic Canva templates. Every flyer is custom-composed from scratch to match your exact brand colors and typography.", tag: "100% Custom Layout" },
    ],
    deliverables: [
      "Custom single-sided or double-sided flyer/handbill design",
      "2 rapid revision rounds to perfect exact wording and visual balance",
      "High-resolution print-ready PDF file (300 DPI, CMYK with trim marks)",
      "Digital-ready PNG/JPG formats optimized for WhatsApp & Social media distribution",
    ],
    techStack: [
      { name: "Adobe InDesign & Illustrator", category: "Professional Layout" },
      { name: "CMYK 300 DPI Export Engine", category: "Print Grade Quality" },
      { name: "Custom Typography Pairing", category: "Visual Readability" },
      { name: "Vector Iconography Library", category: "Crisp Visual Cues" },
    ],
    faqs: [
      { question: "Can we use this flyer for both physical printing and WhatsApp distribution?", answer: "Yes! We provide two dedicated master files: a high-res CMYK file tailored specifically for professional offset/digital printers, and a lightweight, crisp RGB file optimized for instant WhatsApp broadcasting and social sharing." },
    ],
  },
  "brochure-design": {
    overview: "Present your corporate capabilities, product lines, and architectural vision with unmatched elegance. Our Brochure Design service crafts sophisticated multi-page corporate brochures, company profiles, and investor pitch deck PDFs featuring editorial grid layouts, rich custom iconography, and authoritative storytelling.",
    targetAudience: "B2B manufacturing conglomerates, real estate builders presenting luxury properties, IT consulting firms, and educational universities publishing prospectus catalogs.",
    corePillars: [
      { title: "Editorial Magazine-Grade Layouts", description: "Structured multi-column grid layouts utilizing generous negative space, sophisticated typography, and balanced visual pacing.", tag: "Editorial Excellence" },
      { title: "Custom Infographics & Data Visualization", description: "We transform complex technical specifications and business statistics into clean, scannable custom vector diagrams and charts.", tag: "Custom Infographics" },
      { title: "Cohesive Narrative Flow", description: "Structuring the document from executive summary and core strengths to detailed case studies and clear contact calls-to-action.", tag: "Strategic Storytelling" },
      { title: "Print & Interactive Digital PDF Formats", description: "Delivering both luxurious print-ready layouts and interactive digital PDFs with clickable table of contents and website hyperlinks.", tag: "Interactive PDF & Print" },
    ],
    deliverables: [
      "Custom multi-page brochure / company profile design (4, 8, 12, or 16+ pages)",
      "Creation of custom vector infographics, flowcharts & process diagrams",
      "Professional photo editing and color grading of supplied imagery",
      "Print-ready master PDF (CMYK, 300 DPI with exact bleed specifications)",
      "Interactive digital PDF with clickable links, navigation bookmarks & email triggers",
    ],
    techStack: [
      { name: "Adobe InDesign Professional", category: "Multi-Page Publishing" },
      { name: "Adobe Illustrator Vectors", category: "Custom Infographics" },
      { name: "Color Management Profiles", category: "Exact Color Consistency" },
      { name: "Interactive PDF Hyperlinking", category: "Digital Engagement" },
    ],
    faqs: [
      { question: "Do you also assist with organizing and refining the content structure?", answer: "Yes! We review your raw text structure and assist in breaking down dense paragraphs into scannable bullet points, callout boxes, and visual infographics to maximize reader engagement." },
    ],
  },
  "poster-design": {
    overview: "Whether dominating a outdoor billboard, adorning a corporate exhibit booth, or capturing clicks across high-traffic social media feeds, your posters must command immediate authority. Our Poster & Banner Design service delivers striking, high-contrast visual artworks designed for maximum retention and click-through engagement.",
    targetAudience: "Event promoters, corporate exhibitors, retail chains launching festival campaigns, and digital marketers needing high-conversion ad banners.",
    corePillars: [
      { title: "High-Contrast Visual Magnetism", description: "Bold color blocking, dramatic lighting contrasts, and super-scaled typography that arrest attention from 30 feet away or mid-scroll.", tag: "Maximum Visibility" },
      { title: "Platform & Size Customization", description: "Custom sizing adapted for outdoor hoardings, roll-up standees, website hero banners, and responsive Google Display Network ad ratios.", tag: "Omni-Channel Sizing" },
      { title: "Conversion-Oriented Composition", description: "Every visual element guides the viewer's eye sequentially towards the central offer and the primary booking/contact call-to-action.", tag: "Focused Eye-Flow" },
      { title: "Crisp High-Resolution Graphics", description: "Zero pixelation. We build utilizing high-resolution assets and vector typography to guarantee razor-sharp clarity at any dimension.", tag: "Razor-Sharp Quality" },
    ],
    deliverables: [
      "Custom promotional poster or display banner artwork",
      "Delivery across all required dimensions (e.g., A2/A1 print, Instagram 4:5, Story 9:16, Web Banner 16:9)",
      "High-resolution master files suitable for large-format hoarding printing",
      "Optimized web-banner formats ready for direct upload to ad managers",
    ],
    techStack: [
      { name: "Adobe Photoshop & Illustrator", category: "High-End Artistry" },
      { name: "Large-Format Vector Scaling", category: "Hoarding Grade Output" },
      { name: "Responsive Aspect Ratio Grid", category: "Multi-Platform Fit" },
      { name: "Color Calibration Profiles", category: "True-To-Life Colors" },
    ],
    faqs: [
      { question: "Can you provide the exact same poster design resized for our website banner and Instagram story?", answer: "Yes! We structure our artwork to adapt cleanly across multiple aspect ratios, providing dedicated exports for your large-format physical posters, website banners, and social media feeds." },
    ],
  },
  "catalogue-design": {
    overview: "Showcase your entire product inventory with crystal-clear specifications and effortless digital browsing. Our Digital Catalogue Design transforms lengthy product lists into sleek, interactive PDF and web-based product showcases—enabling B2B buyers and retail distributors to explore your offerings and place bulk orders with ease.",
    targetAudience: "Industrial manufacturers, jewelry & fashion exporters, hardware distributors, and wholesale suppliers showcasing hundreds of products with detailed technical specs.",
    corePillars: [
      { title: "Structured Product Grid Architecture", description: "Clean, standardized layouts that display product photographs, SKU numbers, dimensions, and technical specifications with zero visual clutter.", tag: "Clutter-Free Layout" },
      { title: "Interactive Category Navigation", description: "Clickable table of contents and quick-jump category tabs allowing buyers to instantly navigate between different product lines.", tag: "Instant Navigation" },
      { title: "Direct WhatsApp Inquiry Triggers", description: "Embed direct clickable inquiry buttons next to every product SKU, allowing buyers to tap and immediately inquire about that exact item on WhatsApp.", tag: "1-Tap SKU Inquiry" },
      { title: "Optimized File Size for Easy Sharing", description: "Smart PDF compression algorithms keeping a 50-page product catalogue crisp and beautiful while under 5MB for instant email and WhatsApp delivery.", tag: "Compact & Crisp" },
    ],
    deliverables: [
      "Complete custom multi-page digital product catalogue design",
      "Standardized layout grids for consistent product specification tables",
      "Interactive clickable index and direct WhatsApp SKU inquiry links",
      "High-resolution master catalog for print distribution",
      "Optimized lightweight digital PDF (< 5MB) ready for instant client sharing",
    ],
    techStack: [
      { name: "Adobe InDesign Data Merge", category: "Bulk SKU Formatting" },
      { name: "Interactive PDF Action Links", category: "Direct WhatsApp Triggers" },
      { name: "Vector Table Grid Engine", category: "Crisp Technical Specs" },
      { name: "Smart PDF Compression", category: "Fast Digital Distribution" },
    ],
    faqs: [
      { question: "Can buyers click directly on a product in the PDF catalog to inquire on WhatsApp?", answer: "Yes! We embed smart interactive hyperlinks so when a buyer taps on 'SKU-4022' inside the PDF on their phone, it immediately opens a WhatsApp chat pre-filled with: 'Hi, I want to inquire about SKU-4022 from your catalog.'" },
    ],
  },
};

export function getServiceDetail(id: string): ServiceDetail {
  // Find group and item from SERVICES_DROPDOWN_GROUPS
  let foundGroup = SERVICES_DROPDOWN_GROUPS[0];
  let foundItem = foundGroup.items[0];
  let isFound = false;

  for (const group of SERVICES_DROPDOWN_GROUPS) {
    for (const item of group.items) {
      if (item.id === id) {
        foundGroup = group;
        foundItem = item;
        isFound = true;
        break;
      }
    }
    if (isFound) break;
  }

  // If not found by exact ID, fallback cleanly to the requested ID or first item
  if (!isFound) {
    foundItem = {
      id: id,
      title: id.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      category: "Website",
      description: "Comprehensive, high-performance digital solution engineered specifically for your business growth.",
      timeline: "2 - 3 Weeks",
      metrics: "Guaranteed ROI",
      badge: "Custom Engineered",
    };
  }

  const dictData = SERVICE_DETAILS_DICTIONARY[id] || {};

  return {
    id: foundItem.id,
    groupName: foundGroup.name,
    groupColumn: foundGroup.columnNumber,
    item: foundItem,
    overview: dictData.overview || `${foundItem.title} engineered by India Web Designs delivers state-of-the-art custom architecture without technical debt, slow load times, or bloated agency fees. We build 100% custom code tailored specifically to your business workflows.`,
    targetAudience: dictData.targetAudience || "Tailored for high-growth Indian enterprises, startups, and established businesses seeking permanent digital dominance and zero platform dependencies.",
    corePillars: dictData.corePillars || [
      { title: "100% Custom In-House Code", description: "Built from scratch using modern frameworks with zero bloated plugins or off-the-shelf templates.", tag: "Custom Engineered" },
      { title: "Sub-Second Performance (< 0.8s)", description: "Optimized Core Web Vitals and edge caching ensuring instant loading across all Indian mobile networks.", tag: "Blazing Speed" },
      { title: "Full Code & Data Ownership", description: "Complete handover of source code and intellectual property. No recurring licensing fees or vendor lock-in.", tag: "100% IP Ownership" },
      { title: "Conversion & Revenue Focus", description: "Every UI layout, button, and interaction is intentionally designed to maximize customer inquiries and sales.", tag: "High ROI" },
    ],
    deliverables: dictData.deliverables || [
      `Complete bespoke ${foundItem.title} implementation`,
      "100% source code ownership and intellectual property handover",
      "Responsive mobile, tablet, and desktop design architecture",
      "Security hardening, SSL verification, and edge caching setup",
      "Integrated instant lead notification alerts (WhatsApp & Email)",
      "30 days of complimentary post-launch optimization and support",
    ],
    techStack: dictData.techStack || [
      { name: "Next.js & React 19", category: "Core Framework" },
      { name: "Tailwind CSS & GSAP", category: "Design System" },
      { name: "PostgreSQL Database", category: "Secure Storage" },
      { name: "Cloudflare CDN", category: "Global Edge Hosting" },
    ],
    phases: dictData.phases || DEFAULT_PHASES,
    comparison: dictData.comparison || DEFAULT_COMPARISON,
    faqs: dictData.faqs || [
      {
        question: `Why should we choose India Web Designs for ${foundItem.title}?`,
        answer: "We engineer 100% custom code in-house in India. Unlike agencies that resell bloated templates or charge recurring SaaS rent, we build permanent, ultra-fast assets that you own completely with zero commissions.",
      },
      {
        question: "What is the expected timeline and onboarding process?",
        answer: `Once we complete scoping your requirements, ${foundItem.title} typically takes ${foundItem.timeline} from initial discovery to live production deployment.`,
      },
      {
        question: "Do you provide ongoing support after launch?",
        answer: "Yes! Every project includes 30 days of complimentary post-launch minor adjustments, plus optional annual maintenance packages for peace of mind.",
      },
    ],
  };
}
