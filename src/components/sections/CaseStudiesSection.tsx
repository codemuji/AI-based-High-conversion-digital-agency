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
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[var(--surface-border)]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--signature)]">
          Proven Results
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--foreground)] mt-3 leading-tight">
          Real business outcomes.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[var(--muted)]">
          Here is how our conversion-first architecture directly impacts our clients&apos; top and bottom lines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {CASE_STUDIES.map((study, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--surface-border)] hover:border-[var(--accent)] hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] text-xs font-semibold">
                  {study.category}
                </span>
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[var(--muted)] block">
                {study.client}
              </span>
              <h3 className="font-display font-bold text-xl text-[var(--foreground)] mt-1.5">
                {study.title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--muted)] mt-3 leading-relaxed">
                {study.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[var(--surface-border)] flex items-center justify-between">
              <span className="text-xs font-bold uppercase text-[var(--accent)]">
                Key Result:
              </span>
              <span className="font-display font-extrabold text-sm text-[var(--foreground)]">
                {study.metrics}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
