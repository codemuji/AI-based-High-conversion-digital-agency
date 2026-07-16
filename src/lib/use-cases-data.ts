import type { Category } from "@/lib/intent-engine";

export interface UseCaseStep {
  stepNumber: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface UseCaseItem {
  slug: string;
  category: Category;
  vertical: string;
  bentoSpan: string;
  title: string;
  tagline: string;
  metrics: {
    highlight: string;
    description: string;
  };
  challenge: {
    title: string;
    points: string[];
  };
  steps: UseCaseStep[];
  marketAdvantage: string[];
  sampleQuery: string;
}

export const USE_CASES_DATA: UseCaseItem[] = [
  {
    slug: "ecommerce-retail-growth",
    category: "Website",
    vertical: "E-Commerce & Retail",
    bentoSpan: "col-span-1 md:col-span-2",
    title: "How to Launch a High-Speed Online Store & Scale Daily Orders",
    tagline: "Replace slow loading speeds and expensive 30% aggregator commissions with a lightning-fast, custom online storefront owned 100% by your brand.",
    metrics: {
      highlight: "+180% More Orders",
      description: "Average order volume increase when switching from slow templates to sub-second custom checkouts.",
    },
    challenge: {
      title: "Why Most Retail Stores & Brands Lose Money Online",
      points: [
        "High Commission Drain: Platforms like Amazon, Swiggy, or Myntra take 20% to 35% of your hard-earned margin on every single order.",
        "Slow Loading Speeds: Over 70% of shoppers on mobile phones abandon their cart if your online store takes longer than 3 seconds to load.",
        "Complex Checkout & Payment Failures: Multi-step checkouts and clunky OTP redirects cause frustrated customers to leave without buying.",
        "Zero Customer Ownership: When selling through third-party marketplaces, you don't even own your customer phone numbers or email list for future marketing.",
      ],
    },
    steps: [
      {
        stepNumber: "01",
        title: "High-Conversion Custom Storefront Setup",
        description: "We build a tailored, visually stunning online store that matches your exact brand aesthetic. Unlike heavy cookie-cutter themes, every page is engineered to load almost instantly (< 1 second) on any smartphone across India.",
        deliverable: "Custom responsive store design with instant page load speeds",
      },
      {
        stepNumber: "02",
        title: "1-Click UPI & WhatsApp Checkout Integration",
        description: "We eliminate cart abandonment by adding instant UPI checkout (GPay, PhonePe, Paytm) and WhatsApp ordering. Shoppers can complete their purchase in just two taps without creating complicated passwords or filling out long forms.",
        deliverable: "Seamless UPI, Card & WhatsApp instant checkout gateway",
      },
      {
        stepNumber: "03",
        title: "Automated Order Tracking & Customer Follow-Ups",
        description: "Whenever an order is placed, both you and your customer receive automatic notifications via WhatsApp and SMS. Abandoned carts are followed up automatically with friendly reminders and special discounts.",
        deliverable: "Automated WhatsApp order confirmation & cart recovery system",
      },
    ],
    marketAdvantage: [
      "Keep 100% of your sales profits—zero third-party marketplace commissions.",
      "Instant loading speeds that outpace your competitors and rank higher on Google.",
      "Complete ownership over customer data to run profitable WhatsApp and email campaigns.",
      "Rock-solid uptime during festive flash sales and high-traffic peak seasons.",
    ],
    sampleQuery: "We want to launch a lightning-fast custom online store with instant UPI checkout to grow our direct retail sales and stop paying marketplace commissions.",
  },
  {
    slug: "doctor-clinic-automation",
    category: "AI Automation",
    vertical: "Healthcare & Clinics",
    bentoSpan: "col-span-1 md:col-span-1",
    title: "Automating 24/7 Patient Consultations & WhatsApp Appointments",
    tagline: "Free your reception staff from endless phone calls with an intelligent 24/7 WhatsApp assistant that answers patient inquiries and schedules visits automatically.",
    metrics: {
      highlight: "Save 45+ Mins Daily",
      description: "Hours saved every morning by clinic receptionists by automating routine appointment bookings.",
    },
    challenge: {
      title: "The Bottlenecks Facing Modern Doctors & Clinics",
      points: [
        "Overwhelmed Front Desk: Receptionists spend hours answering the exact same questions about clinic timings, consultation fees, and doctor availability.",
        "Missed After-Hours Inquiries: Patients searching for medical help late at night or during holidays get no response and book elsewhere.",
        "High No-Show Rates: Without automated reminders, up to 25% of booked patients forget their appointments, leaving valuable doctor slots empty.",
      ],
    },
    steps: [
      {
        stepNumber: "01",
        title: "Smart 24/7 WhatsApp Clinic Assistant",
        description: "We deploy an empathetic, polite WhatsApp assistant trained specifically on your clinic's services, fees, doctor profiles, and visiting timings to answer patients instantly around the clock.",
        deliverable: "Custom trained 24/7 WhatsApp and website chat assistant",
      },
      {
        stepNumber: "02",
        title: "Instant Appointment Calendar & Slot Booking",
        description: "Patients can check real-time doctor availability and book verified consultation slots directly inside chat without calling or waiting on hold.",
        deliverable: "Live doctor schedule integration & automatic slot allocation",
      },
      {
        stepNumber: "03",
        title: "Automated Reminders & Digital Health Records",
        description: "The system automatically sends friendly WhatsApp reminders 24 hours and 2 hours before the appointment, alongside digital prescriptions and follow-up care notes.",
        deliverable: "Automated WhatsApp appointment reminders & patient intake portal",
      },
    ],
    marketAdvantage: [
      "Never miss a new patient inquiry—even at 2:00 AM on Sunday nights.",
      "Reduce patient no-shows by up to 60% with automated polite reminders.",
      "Give doctors and staff a calm, organized workday with clean digital appointment lists.",
    ],
    sampleQuery: "We want to set up an automated 24/7 WhatsApp assistant for our clinic to handle patient inquiries, book appointments, and send automatic reminders.",
  },
  {
    slug: "wholesale-b2b-portal",
    category: "Custom Software",
    vertical: "Wholesale & Manufacturing",
    bentoSpan: "col-span-1 md:col-span-1",
    title: "Replacing Paper Catalogues with an Instant Dealer Order Portal",
    tagline: "Empower your distributors and retail dealers across India to check live inventory, download digital invoices, and place bulk orders 24/7.",
    metrics: {
      highlight: "Save ₹4.5 Lakhs/Yr",
      description: "Direct savings by eliminating paper catalogues, manual order entry errors, and phone order taking.",
    },
    challenge: {
      title: "The Hidden Cost of Manual Wholesale Management",
      points: [
        "Outdated Paper & PDF Catalogues: Sending bulky PDF catalogues via WhatsApp is messy, and pricing changes require re-printing or re-sending everything.",
        "Manual Order Entry Errors: Sales coordinators taking bulk orders over phone or voice notes frequently make quantity and pricing mistakes.",
        "No Live Stock Visibility: Dealers frequently order out-of-stock items, resulting in delayed shipments, disputes, and frustrated distributors.",
      ],
    },
    steps: [
      {
        stepNumber: "01",
        title: "Digital B2B Product Catalog & Live Stock Display",
        description: "We build a secure, password-protected online catalog where verified dealers can log in from their phones to view tiered wholesale pricing and live factory inventory.",
        deliverable: "Interactive mobile-first B2B product catalog with custom pricing tiers",
      },
      {
        stepNumber: "02",
        title: "1-Click Bulk Order & Quick Re-Order Portal",
        description: "Dealers can add hundreds of SKUs into their bulk order sheet in seconds, view instant GST breakdown, and submit orders directly to your warehouse dispatch team.",
        deliverable: "Automated bulk ordering sheet & GST calculation engine",
      },
      {
        stepNumber: "03",
        title: "Live Dispatch Tracking & Digital Ledger",
        description: "Distributors can download their credit ledgers, check past order histories, and track transport dispatch slips anytime without calling your accounts department.",
        deliverable: "Self-service dealer ledger & dispatch tracking dashboard",
      },
    ],
    marketAdvantage: [
      "Double your sales team's productivity by automating routine dealer order processing.",
      "Eliminate 100% of order transcription errors and dispatch delays.",
      "Give your brand a modern, professional corporate image that attracts top tier distributors across India.",
    ],
    sampleQuery: "We need a custom wholesale B2B ordering portal where our distributors can log in, view live stock, and place bulk orders with tiered pricing.",
  },
  {
    slug: "logistics-fleet-operations",
    category: "App",
    vertical: "Logistics & Transport",
    bentoSpan: "col-span-1 md:col-span-2",
    title: "Eliminating Paperwork & Live Tracking for 500+ Delivery Vehicles",
    tagline: "Replace scattered phone calls and paper dispatch slips with a clean driver mobile app and a central command dashboard for real-time fleet operations.",
    metrics: {
      highlight: "Save ₹3.2 Lakhs/Mo",
      description: "Average monthly fuel and overhead savings by optimizing delivery routes and eliminating manual dispatch delays.",
    },
    challenge: {
      title: "Why Transport & Logistics Firms Lose Hours Every Day",
      points: [
        "Endless Driver Phone Check-Ins: Managers spend half their workday calling drivers to ask 'Where are you right now?' and 'Was the delivery completed?'",
        "Lost Proof of Delivery Sheets: Paper delivery receipts get damaged, lost, or delayed, holding up customer billing and monthly payment collections.",
        "Route Inefficiencies & Fuel Waste: Without intelligent routing, drivers take long, congested roads, wasting precious fuel and delaying subsequent deliveries.",
      ],
    },
    steps: [
      {
        stepNumber: "01",
        title: "Driver-Friendly Mobile App (Works Offline)",
        description: "We create a simple, intuitive app for drivers where they receive daily delivery assignments, GPS directions, and customer contact details in bold, large text.",
        deliverable: "Custom Android/iPhone driver app with offline sync capability",
      },
      {
        stepNumber: "02",
        title: "Digital Proof of Delivery & Photo Signatures",
        description: "Upon delivery, drivers take a quick photo of the goods or capture the recipient's digital signature right on their phone, which uploads to the central dashboard instantly.",
        deliverable: "Instant digital proof of delivery (POD) capture & invoicing trigger",
      },
      {
        stepNumber: "03",
        title: "Central Command Dashboard for Fleet Managers",
        description: "Your operations team gets a live bird's-eye map view of every vehicle, active delivery statuses, fuel consumption alerts, and driver performance scores.",
        deliverable: "Live operations control room & route optimization dashboard",
      },
    ],
    marketAdvantage: [
      "Speed up client invoice payments by attaching instant digital proof of delivery within seconds of completion.",
      "Cut daily dispatch phone calls by 85%, allowing managers to focus on business expansion.",
      "Lower fuel costs and vehicle maintenance overhead through intelligent route planning.",
    ],
    sampleQuery: "We want a custom mobile app for our delivery drivers and a live tracking dashboard for our logistics dispatch managers to eliminate paperwork.",
  },
  {
    slug: "coaching-edtech-platform",
    category: "Website",
    vertical: "Coaching & Institutes",
    bentoSpan: "col-span-1 md:col-span-1",
    title: "Automating Student Enrollment & Video Course Delivery",
    tagline: "Transform your coaching institute into a national academy with a branded student learning portal, automated fee collection, and secure video lectures.",
    metrics: {
      highlight: "3x Student Reach",
      description: "Expand beyond your local classroom to enroll students across India without adding administrative overhead.",
    },
    challenge: {
      title: "The Growing Growing Pains of Coaching Institutes",
      points: [
        "Manual Admission & Fee Collection: Chasing monthly tuition fees, issuing manual receipts, and reconciling bank transfers takes up dozens of staff hours.",
        "Unsecured Video Piracy: Sending lecture links via YouTube or Google Drive leads to unauthorized sharing among non-paying students.",
        "Fragmented Student Communication: Managing study materials across multiple WhatsApp groups creates confusion and missing assignments.",
      ],
    },
    steps: [
      {
        stepNumber: "01",
        title: "Branded Student Enrollment & Fee Gateway",
        description: "We launch a professional institute website where new students can explore course curriculums, pay admission fees via UPI or EMI, and get enrolled in seconds.",
        deliverable: "Automated student onboarding & fee management portal",
      },
      {
        stepNumber: "02",
        title: "Encrypted Video Lecture & Study Material Hub",
        description: "Students log into their private dashboard to watch HD recorded lectures with DRM protection (preventing screen recording or downloading) and access study PDFs.",
        deliverable: "Secure video streaming portal with anti-piracy protection",
      },
      {
        stepNumber: "03",
        title: "Live Exam Engine & Automated Performance Reports",
        description: "Conduct online mock tests with instant grading. Parents and students receive automated monthly progress scorecards and attendance updates via WhatsApp.",
        deliverable: "Online mock test engine & automated WhatsApp progress reports",
      },
    ],
    marketAdvantage: [
      "Scale your teaching expertise nationwide without leasing more physical classroom space.",
      "Protect your valuable intellectual property and recorded lectures from unauthorized distribution.",
      "Provide a world-class, modern learning experience that parents and students trust and recommend.",
    ],
    sampleQuery: "We want to build a custom student learning portal and website for our coaching institute with secure video lectures and automated fee payment.",
  },
  {
    slug: "restaurant-cloud-kitchen",
    category: "App",
    vertical: "Food & Restaurants",
    bentoSpan: "col-span-1 md:col-span-1",
    title: "Direct Commission-Free Ordering App & WhatsApp Loyalty",
    tagline: "Stop losing 30% of every food order to delivery apps. Build your own branded ordering system with instant table QR menus and direct customer rewards.",
    metrics: {
      highlight: "Zero Commission",
      description: "Keep 100% of your food revenue and build a loyal repeat customer base that orders directly from your kitchen.",
    },
    challenge: {
      title: "How Food Delivery Apps Squeeze Restaurant Margins",
      points: [
        "Exorbitant 25-30% Commissions: Third-party food apps take nearly a third of your revenue, making it difficult to maintain profitable kitchen operations.",
        "No Customer Brand Loyalty: Customers order based on food app discounts rather than loyalty to your restaurant's brand and quality.",
        "Delayed Payouts & Aggressive Penalties: Platforms hold your earnings for days and deduct arbitrary refund penalties without clear explanations.",
      ],
    },
    steps: [
      {
        stepNumber: "01",
        title: "Direct WhatsApp & Mobile Ordering Menu",
        description: "We build a mouth-watering visual menu where customers can order food directly via WhatsApp or your branded web app with instant UPI payment.",
        deliverable: "Direct commission-free ordering menu & kitchen printer integration",
      },
      {
        stepNumber: "02",
        title: "Smart QR Table Ordering for Dine-In Guests",
        description: "Dine-in customers scan a sleek QR code on their table to browse digital photos, request waiter service, and pay bills from their phone without waiting.",
        deliverable: "Instant QR dine-in ordering & contactless billing system",
      },
      {
        stepNumber: "03",
        title: "Automated Customer Rewards & Birthday Offers",
        description: "The system remembers your regular diners and automatically sends them personalized discount coupons on their birthday or after their 5th order.",
        deliverable: "Automated WhatsApp loyalty rewards & repeat order retention engine",
      },
    ],
    marketAdvantage: [
      "Save ₹50,000 to ₹2 Lakhs every month by converting third-party app orders into direct repeat customers.",
      "Build deep, lasting relationships with food lovers through automated loyalty rewards.",
      "Enjoy instant cash flow with customer payments going straight into your restaurant bank account.",
    ],
    sampleQuery: "We need a direct commission-free food ordering app and table QR menu for our restaurant to stop paying 30% commission to delivery platforms.",
  },
];
