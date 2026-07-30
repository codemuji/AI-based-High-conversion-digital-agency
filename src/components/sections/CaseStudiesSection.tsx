import React from "react";
import Image from "next/image";

interface CaseStudy {
  category: string;
  client: string;
  image: string;
  title: string;
  metrics: string;
  description: string;
  deliverables: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    category: "Online Store",
    client: "Apex Fashion Retailers",
    image: "/images/ecommerce_website.png",
    title: "Apex E-Commerce & High-Conversion Storefront",
    metrics: "+180% Orders",
    description: "Replaced a sluggish WordPress site with a sub-0.8s Next.js shopping portal featuring instant UPI checkout and 100/100 Core Web Vitals.",
    deliverables: ["Custom Next.js Storefront", "Instant UPI Checkout", "Sub-0.8s Edge CDN"],
  },
  {
    category: "Healthcare System",
    client: "CareConnect Medical Group",
    image: "/images/Pharmaceutical_Reporting_System.png",
    title: "Pharmaceutical & Patient Reporting System",
    metrics: "2,400+ Daily Consults",
    description: "Launched an automated reporting engine and 24/7 WhatsApp consultation bot for medical distributors and clinics across India.",
    deliverables: ["Pharma Reporting System", "WhatsApp Cloud API", "EMR Database Sync"],
  },
  {
    category: "POS & Logistics",
    client: "LogiTrack Express Supply",
    image: "/images/Retail_POS_and_Billing_Software.png",
    title: "Retail POS & Inventory Billing Software",
    metrics: "Save ₹3.2L / mo",
    description: "Built an offline-first POS billing dashboard that eliminated manual paperwork and optimized delivery logistics for 500+ vehicles.",
    deliverables: ["Real-Time Billing Engine", "Offline Sync Mobile App", "Automated GST Ledger"],
  },
  {
    category: "Services App",
    client: "Urban Services Network",
    image: "/images/Marketplace_&_Services_App.png",
    title: "Marketplace & On-Demand Booking App",
    metrics: "4.9 ★ User Rating",
    description: "Designed and built a native mobile marketplace app connecting homeowners with verified service technicians in real time.",
    deliverables: ["iOS & Android App", "Live GPS Tracking", "Razorpay Payment Gateway"],
  },
  {
    category: "Web Portal",
    client: "EngageHub Network",
    image: "/images/Discussion_Forum_&_Portal.png",
    title: "Discussion Forum & Interactive Community Portal",
    metrics: "50k+ Active Members",
    description: "Engineered a high-performance community forum portal featuring instant thread search, live notifications, and user badges.",
    deliverables: ["High-Traffic Forum Architecture", "Instant Search", "Realtime Notifications"],
  },
  {
    category: "Content Portal",
    client: "ContentPulse Media",
    image: "/images/Blogging_&_Content_Portal.png",
    title: "Blogging & Digital Content Publishing Portal",
    metrics: "100/100 SEO Score",
    description: "Custom editorial and blogging portal optimized for ultra-fast Google indexing, ad placement, and organic search dominance.",
    deliverables: ["SEO Content CMS", "Sub-0.5s Edge Caching", "Ad & Revenue Engine"],
  },
];

export function CaseStudiesSection() {
  return (
    <section id="work" className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden border-t border-[var(--surface-border)] bg-[var(--background)] font-sans text-sm">
      {/* Subtle Architectural Grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute -top-32 left-1/3 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Centered Section Header */}
      <div className="relative z-10 max-w-2xl mx-auto text-center mb-12 border-b border-[var(--surface-border)] pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-stone-200 shadow-xs text-[11px] font-display font-bold text-[var(--foreground)] tracking-wider uppercase mx-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
          <span>PRODUCTION WORK &amp; SCREENSHOTS</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-black text-[var(--foreground)] tracking-tight leading-snug">
          Recent Projects &amp; Live Systems
        </h2>
        <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed max-w-lg mx-auto">
          Explore actual production screenshots and audited performance metrics from custom websites, apps, and software systems we built.
        </p>
      </div>

      {/* Screenshot Work Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CASE_STUDIES.map((study, idx) => (
          <div
            key={idx}
            className="group rounded-3xl bg-white border border-stone-200 hover:border-[var(--accent)] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Project Screenshot Showcase Header */}
              <div className="relative w-full h-52 sm:h-60 bg-stone-100 overflow-hidden border-b border-stone-200">
                <Image
                  src={study.image}
                  alt={`${study.title} Screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Metric Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-stone-900/90 backdrop-blur-md text-white font-mono text-[10px] font-bold border border-stone-700/80 shadow-md">
                  {study.metrics}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[var(--accent)] font-mono text-[10px] font-bold border border-stone-200 shadow-xs uppercase tracking-wider">
                  {study.category}
                </div>
              </div>

              {/* Text Heading & Description */}
              <div className="p-6 space-y-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] block">
                  Client: {study.client}
                </span>

                <h3 className="font-display font-extrabold text-lg sm:text-xl text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                  {study.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                  {study.description}
                </p>

                {/* Tech Deliverables */}
                <div className="pt-3 flex flex-wrap gap-1.5">
                  {study.deliverables.map((item, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md bg-stone-100 border border-stone-200 text-[10px] font-mono font-medium text-stone-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="p-6 pt-0">
              <a
                href="/#contact"
                className="inline-flex items-center gap-1.5 font-display text-xs font-bold text-[var(--accent)] hover:text-[#15803d] transition-colors"
              >
                <span>Scope Similar Project &rarr;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
