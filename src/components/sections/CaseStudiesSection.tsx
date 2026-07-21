import React from "react";

const CASE_STUDIES = [
  {
    category: "Online Store & Sales",
    client: "Apex Fashion Retailers",
    code: "Portal SLA • Sub-0.8s",
    title: "Growing monthly sales to ₹40 Lakhs with instant checkout speeds.",
    metrics: "+180% More Orders",
    description: "Replaced a slow, clunky online store with a lightning-fast shopping experience. Page load times dropped instantly, giving shoppers a delightful checkout and almost doubling daily sales.",
    deliverables: ["Custom Next.js Storefront", "Instant UPI Checkout", "Sub-0.8s Global CDN"],
  },
  {
    category: "24/7 WhatsApp Support",
    client: "CareConnect Medical Group",
    code: "Bot Protocol • Instant",
    title: "Handling patient inquiries instantly and booking 2,400+ daily consults.",
    metrics: "2,400+ Daily Consults",
    description: "Launched a friendly 24/7 WhatsApp assistant to answer common patient questions and book appointments automatically, saving staff hours of phone time every single day.",
    deliverables: ["WhatsApp Cloud API Engine", "Automated Scheduling", "EMR Database Sync"],
  },
  {
    category: "Operations & Management",
    client: "LogiTrack Express Supply",
    code: "ERP System • Realtime",
    title: "Simplifying daily dispatch tracking for 500+ delivery vehicles.",
    metrics: "Save ₹3.2 Lakhs / mo",
    description: "Created an easy-to-use custom dashboard and mobile app for drivers that eliminated manual paperwork and optimized daily delivery routes for maximum efficiency.",
    deliverables: ["Real-Time GPS Fleet Dashboard", "Driver Offline Mobile App", "Automated GST Ledger"],
  },
];

export function CaseStudiesSection() {
  return (
    <section id="work" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden border-t border-[var(--surface-border)] bg-[var(--background)] font-sans text-sm">
      {/* Subtle Architectural Grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute -top-32 left-1/3 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Architectural Split Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-[var(--surface-border)] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 shadow-xs mb-2 text-[11px] font-display font-bold text-[var(--foreground)] tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
            <span>Verified Client Work</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--foreground)] tracking-tight leading-snug">
            Real business results <br className="hidden sm:inline" />
            that help you grow.
          </h2>
        </div>
        <div className="max-w-md md:text-right space-y-1.5">
          <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
            See how our fast, reliable digital tools directly help high-growth Indian businesses increase sales, save time, and eliminate operational bloat every day.
          </p>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-display font-bold text-[var(--accent)]">
            <span>✓ All Metrics Audited &amp; Production Verified</span>
          </div>
        </div>
      </div>

      {/* Compact Case Studies Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {CASE_STUDIES.map((study, idx) => (
          <div
            key={idx}
            className="group p-5 sm:p-6 rounded-xl bg-white border border-stone-200 hover:border-[var(--accent)] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent)] via-emerald-400 to-transparent opacity-80" />

            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700 font-display text-[10px] uppercase tracking-wider font-bold border border-stone-200">
                  {study.category}
                </span>
                <span className="font-display text-[10px] font-bold text-[var(--muted)]">
                  {study.code}
                </span>
              </div>

              <span className="font-display text-[11px] font-bold uppercase tracking-widest text-[var(--accent)] block mb-1">
                {study.client}
              </span>
              <h3 className="font-display font-bold text-base sm:text-lg text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                {study.title}
              </h3>
              <p className="text-xs text-[var(--muted)] mt-2 leading-relaxed">
                {study.description}
              </p>

              {/* Specifications Pills */}
              <div className="mt-4 pt-4 border-t border-stone-100 space-y-2">
                <span className="font-display text-[10px] font-bold uppercase text-stone-400 block tracking-wider">
                  Deliverables:
                </span>
                <div className="flex flex-wrap gap-1">
                  {study.deliverables.map((item, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-md bg-stone-50 border border-stone-200 font-display text-[10px] text-stone-700 font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center justify-between">
              <div>
                <span className="font-display text-[10px] uppercase text-stone-400 block font-bold tracking-wider">
                  Customer Impact
                </span>
                <span className="font-display font-extrabold text-sm sm:text-base text-[var(--accent)]">
                  {study.metrics}
                </span>
              </div>
              <a
                href="#contact"
                className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-[var(--accent)] group-hover:text-white transition-all flex items-center justify-center font-display text-xs shadow-xs shrink-0"
                aria-label="Scope similar project"
              >
                &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Strip */}
      <div className="mt-10 p-5 sm:p-6 rounded-xl bg-stone-900 text-white border border-stone-800 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#16a34a] flex items-center justify-center text-xl shrink-0 shadow-[0_0_12px_rgba(22,163,74,0.5)]">
            🚀
          </div>
          <div>
            <h4 className="font-display font-bold text-base text-white">Want to see exact architecture patterns for your industry?</h4>
            <p className="text-xs text-stone-400">Our senior engineering team can share live reference demos during your scoping call.</p>
          </div>
        </div>
        <a
          href="#contact"
          className="px-5 py-2.5 rounded-full bg-white text-stone-900 hover:bg-[#4ade80] font-display font-bold text-xs tracking-wide transition-all shrink-0 shadow-xs"
        >
          Request Demos &rarr;
        </a>
      </div>
    </section>
  );
}
