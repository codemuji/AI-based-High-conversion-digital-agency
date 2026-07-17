import type { Category } from "./intent-engine";

export interface ServiceDropdownItem {
  id: string;
  title: string;
  category: Category;
  description: string;
  timeline: string;
  metrics: string;
  badge?: string;
}

export interface ServiceDropdownGroup {
  id: string;
  columnNumber: string;
  name: string;
  tagline: string;
  items: ServiceDropdownItem[];
}

export const SERVICES_DROPDOWN_GROUPS: ServiceDropdownGroup[] = [
  {
    id: "web-design",
    columnNumber: "01",
    name: "Web Design",
    tagline: "High-converting, responsive websites & stores",
    items: [
      {
        id: "static-website",
        title: "Static Website Design",
        category: "Website",
        description: "Fast, secure, and beautiful informational websites that build instant credibility for your business brand.",
        timeline: "1 - 2 Weeks",
        metrics: "Instant 0.8s Load",
      },
      {
        id: "dynamic-website",
        title: "Dynamic Website Design",
        category: "Website",
        description: "Content-rich websites powered by custom databases, blog engines, and intuitive administrative dashboards.",
        timeline: "2 - 3 Weeks",
        metrics: "Easy Admin Portal",
      },
      {
        id: "ecommerce-website",
        title: "Ecommerce Website Design",
        category: "Website",
        description: "Lightning-fast online stores engineered with secure checkout, inventory tracking, and UPI payment gateways.",
        timeline: "2 - 4 Weeks",
        metrics: "+180% More Sales",
        badge: "Popular",
      },
      {
        id: "mobile-website",
        title: "Mobile Website Design",
        category: "Website",
        description: "Flawlessly responsive digital experiences tailored specifically for mobile shoppers and tablet users.",
        timeline: "1 - 2 Weeks",
        metrics: "100% Mobile Ready",
      },
      {
        id: "redesign-website",
        title: "Redesign of Existing Website",
        category: "Website",
        description: "Transform slow, clunky, or outdated legacy sites into modern, high-performing conversion engines.",
        timeline: "2 - 3 Weeks",
        metrics: "3.4x Conversion Boost",
      },
    ],
  },
  {
    id: "digital-marketing",
    columnNumber: "02",
    name: "Digital Marketing",
    tagline: "Targeted campaigns & SEO that attract buyers",
    items: [
      {
        id: "seo-optimisation",
        title: "Search Engine Optimisation",
        category: "Digital Marketing",
        description: "Rank #1 on Google for high-intent search terms so ready-to-buy local customers discover your business first.",
        timeline: "Ongoing Growth",
        metrics: "Top 3 Google Rank",
        badge: "High ROI",
      },
      {
        id: "social-media-marketing",
        title: "Social Media Marketing",
        category: "Digital Marketing",
        description: "Engaging content campaigns and targeted advertisements across Instagram, Facebook, and LinkedIn.",
        timeline: "Monthly Campaigns",
        metrics: "3.8x Ad Return",
      },
      {
        id: "bulk-sms-marketing",
        title: "Bulk SMS Broadcasting & Marketing",
        category: "Digital Marketing",
        description: "Direct instant notification campaigns and promotional offers delivered reliably straight to customer mobile phones.",
        timeline: "Instant Setup",
        metrics: "98% Open Rate",
      },
      {
        id: "whatsapp-messaging",
        title: "Whatsapp Messaging & Bots",
        category: "AI Automation",
        description: "Deploy automated 24/7 WhatsApp business assistants, instant query responders, and verified broadcast workflows.",
        timeline: "1 - 2 Weeks",
        metrics: "24/7 Instant Support",
        badge: "AI Powered",
      },
      {
        id: "google-adwords",
        title: "Google Adwords (PPC Ads)",
        category: "Digital Marketing",
        description: "Precision pay-per-click search campaigns tailored to capture high-value customer inquiries immediately.",
        timeline: "3 Days Setup",
        metrics: "Qualified Leads Fast",
      },
    ],
  },
  {
    id: "mobile-apps",
    columnNumber: "03",
    name: "Mobile Apps",
    tagline: "Native iOS & Android apps for your customers",
    items: [
      {
        id: "ecommerce-mobile-app",
        title: "Ecommerce Mobile App Development",
        category: "App",
        description: "Native iOS and Android shopping applications with push notifications, UPI checkouts, and customer loyalty rewards.",
        timeline: "4 - 6 Weeks",
        metrics: "99.9% Crash-Free",
        badge: "Top Rated",
      },
      {
        id: "multivendor-mobile-app",
        title: "Multivendor Mobile App Development",
        category: "App",
        description: "Scale a complete digital marketplace connecting independent sellers, customers, and delivery personnel.",
        timeline: "2 - 3 Months",
        metrics: "Scalable Ecosystem",
      },
      {
        id: "video-streaming-ott",
        title: "Video Streaming App (OTT) Development",
        category: "App",
        description: "High-concurrency video platforms with DRM content protection, subscription tiers, and buffer-free playback.",
        timeline: "2 - 3 Months",
        metrics: "Buffer-Free 4K",
      },
      {
        id: "food-ordering-app",
        title: "Food Ordering Mobile App Development",
        category: "App",
        description: "Custom restaurant and cloud kitchen ordering apps with live delivery tracking and zero third-party commissions.",
        timeline: "3 - 5 Weeks",
        metrics: "Zero Commission",
      },
      {
        id: "consultation-apps",
        title: "Consultation & Booking Apps",
        category: "App",
        description: "Telemedicine, legal, and expert coaching apps with integrated video calls, scheduling, and payment collection.",
        timeline: "4 - 6 Weeks",
        metrics: "Seamless Video & Booking",
      },
    ],
  },
  {
    id: "web-portals",
    columnNumber: "04",
    name: "Web Portals",
    tagline: "Specialized web platforms & community portals",
    items: [
      {
        id: "online-learning-portal",
        title: "Online Learning Web Portal",
        category: "Website",
        description: "Interactive LMS portals featuring course enrollment, HD video lectures, online grading, and automated certifications.",
        timeline: "4 - 6 Weeks",
        metrics: "Interactive LMS",
      },
      {
        id: "matrimony-portal",
        title: "Matrimony Web Portal",
        category: "Website",
        description: "High-security matchmaking platforms with granular profile filtering, verification badges, and privacy controls.",
        timeline: "6 - 8 Weeks",
        metrics: "Verified Profiles",
      },
      {
        id: "food-delivery-portal",
        title: "Food Delivery Web Portal",
        category: "Website",
        description: "Web-based food ordering networks complete with live kitchen status, driver dispatching, and customer notifications.",
        timeline: "3 - 5 Weeks",
        metrics: "Real-Time Dispatch",
      },
      {
        id: "news-portal",
        title: "Online News Portal Development",
        category: "Website",
        description: "High-traffic digital journalism platforms built for breaking news alerts, ad management, and instant LCP speeds.",
        timeline: "3 - 4 Weeks",
        metrics: "High-Traffic Ready",
      },
      {
        id: "classifieds-portal",
        title: "Free Classifieds Portal",
        category: "Website",
        description: "Community directory and listing portals for buying, selling, and discovering local products and professional services.",
        timeline: "4 - 6 Weeks",
        metrics: "Fast Geo-Search",
      },
    ],
  },
  {
    id: "softwares",
    columnNumber: "05",
    name: "Softwares",
    tagline: "Smart internal tools & automated ERP systems",
    items: [
      {
        id: "school-management",
        title: "School Management Software",
        category: "Custom Software",
        description: "Complete academic administration system tracking student attendance, fee billing, exam grading, and parent communications.",
        timeline: "4 - 6 Weeks",
        metrics: "Save 30+ Hrs/Week",
        badge: "Time Saver",
      },
      {
        id: "college-management",
        title: "College Management Software",
        category: "Custom Software",
        description: "Comprehensive university campus portal managing departments, hostels, admissions, library assets, and faculty schedules.",
        timeline: "2 - 3 Months",
        metrics: "Unified Campus ERP",
      },
      {
        id: "vocational-management",
        title: "Vocational Institute Management",
        category: "Custom Software",
        description: "Specialized training center software for batch scheduling, student progress tracking, and corporate placement automation.",
        timeline: "4 - 6 Weeks",
        metrics: "Streamlined Batches",
      },
      {
        id: "billing-client-management",
        title: "Billing & Client Management (CRM)",
        category: "Custom Software",
        description: "Replace messy spreadsheets with clean invoicing, GST billing compliance, automated payment reminders, and lead CRM.",
        timeline: "2 - 4 Weeks",
        metrics: "Automated GST & CRM",
        badge: "Essential",
      },
      {
        id: "restaurant-management",
        title: "Restaurant Management (POS & KOT)",
        category: "Custom Software",
        description: "Smart table reservations, kitchen order ticketing (KOT), inventory ingredient tracking, and fast point-of-sale checkout.",
        timeline: "3 - 4 Weeks",
        metrics: "Table to Kitchen POS",
      },
    ],
  },
  {
    id: "graphic-design",
    columnNumber: "06",
    name: "Graphic Design",
    tagline: "Distinctive brand identity & marketing collateral",
    items: [
      {
        id: "logo-design",
        title: "Logo & Brand Identity Design",
        category: "Website",
        description: "Memorable, high-impact corporate logos, color palettes, typography systems, and complete brand identity guidelines.",
        timeline: "5 - 7 Days",
        metrics: "Distinctive Branding",
      },
      {
        id: "flyer-design",
        title: "Flyer & Marketing Collateral",
        category: "Digital Marketing",
        description: "Eye-catching promotional flyers and digital handbills designed to capture attention and boost event or sale turnouts.",
        timeline: "2 - 3 Days",
        metrics: "High Conversion Layout",
      },
      {
        id: "brochure-design",
        title: "Brochure Design",
        category: "Digital Marketing",
        description: "Multi-page corporate brochures and pitch deck PDFs showcasing your services, case studies, and vision with elegance.",
        timeline: "3 - 5 Days",
        metrics: "Premium Presentation",
      },
      {
        id: "poster-design",
        title: "Poster & Banner Design",
        category: "Digital Marketing",
        description: "Vibrant promotional posters and web banners optimized for high-click social media advertising and outdoor display.",
        timeline: "2 - 3 Days",
        metrics: "High Engagement",
      },
      {
        id: "catalogue-design",
        title: "Digital Catalogue Design",
        category: "Website",
        description: "Interactive PDF and web catalogues presenting your complete product inventory with crisp imagery and clear specifications.",
        timeline: "4 - 6 Days",
        metrics: "Interactive Showcase",
      },
    ],
  },
];
