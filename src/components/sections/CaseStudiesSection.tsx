import React from "react";

const CASE_STUDIES = [
  {
    category: "E-Commerce & Next.js",
    client: "Apex Fashion Retailers",
    title: "Scaling to ₹40 Lakhs monthly GMV with sub-second headless storefronts.",
    metrics: "+180% Checkout Conversion",
    description: "Replaced an outdated monolithic WooCommerce installation with a Next.js App Router storefront and edge caching. Page load time dropped from 4.2 seconds to 0.7 seconds.",
  },
  {
    category: "AI & WhatsApp Bot",
    client: "CareConnect Medical Group",
    title: "Automating 85% of hospital outpatient triage and appointment bookings.",
    metrics: "2,400+ Daily Consults Booked",
    description: "Built a custom AI triage pipeline using Claude LLM integrated with WhatsApp Business API and hospital HIS systems. Reduced patient wait time by 45 minutes.",
  },
  {
    category: "Custom ERP & SaaS",
    client: "LogiTrack Express Supply",
    title: "Unified logistics dashboard tracking 500+ commercial vehicles in real-time.",
    metrics: "Save ₹3.2 Lakhs / mo in Fuel Waste",
    description: "Developed a custom GPS telemetry ingestion portal and driver mobile app that eliminated manual dispatch sheets and optimized daily delivery routes.",
  },
];

export function CaseStudiesSection() {
  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="bg-[#141210] text-[#fefcf9] border border-stone-800 rounded-3xl p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden">
        {/* Subtle dark grid texture inside showcase */}
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

        {/* Architectural Split Header */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-stone-800 pb-8">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#ff9933] block mb-2">
              // Verified Outcomes
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none">
              Real business <br className="hidden sm:inline" />
              outcomes.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-stone-400 max-w-md md:text-right leading-relaxed">
            Here is how our conversion-first engineering directly impacts our clients&apos; top and bottom lines in production.
          </p>
        </div>

        {/* High-Contrast Case Studies Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={idx}
              className="group p-6 sm:p-8 rounded-2xl bg-[#1c1917] border border-stone-800 hover:border-[#ff9933]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3 py-1 rounded-full bg-stone-800/80 text-[#ff9933] font-mono text-[11px] uppercase tracking-wider font-semibold border border-stone-700/60">
                    {study.category}
                  </span>
                </div>

                <span className="font-mono text-xs font-bold uppercase tracking-widest text-stone-400 block mb-1">
                  {study.client}
                </span>
                <h3 className="font-display font-black text-xl text-white group-hover:text-[#ff9933] transition-colors leading-snug">
                  {study.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-3 leading-relaxed">
                  {study.description}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-stone-800 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase text-stone-400 tracking-wider">
                  Verified Metric:
                </span>
                <span className="font-display font-black text-sm sm:text-base text-[#ff9933]">
                  {study.metrics}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
