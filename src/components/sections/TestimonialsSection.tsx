"use client";

import React from "react";

interface TestimonialCard {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  highlightMetric: string;
  rating: string;
}

const TESTIMONIALS: TestimonialCard[] = [
  {
    id: "t1",
    quote:
      "Before India Web Designs, our staff spent 5 hours daily manually verifying WhatsApp screenshots for student fee installments. They engineered a custom LMS portal and automated GST invoicing pipeline in just 3 weeks. Our admin overhead dropped 80% instantly.",
    author: "Rajesh Kumar Sharma",
    role: "Director",
    company: "Apex Vocational & Academy",
    industry: "EdTech & Coaching",
    highlightMetric: "+180% Fee Conversions",
    rating: "★★★★★ 5.0 / 5.0",
  },
  {
    id: "t2",
    quote:
      "We were paying heavy retainers for bloated WordPress plugins that crashed every time we ran a festival flash sale. The custom high-speed storefront they built loads sub-second, and our repeat purchase rate jumped 42% in the first two months alone.",
    author: "Ananya Deshmukh",
    role: "Founder & CEO",
    company: "Nectar Organics D2C",
    industry: "E-Commerce Operations",
    highlightMetric: "0.7s Page Load Speed",
    rating: "★★★★★ 5.0 / 5.0",
  },
  {
    id: "t3",
    quote:
      "Our previous agency built a clunky CRM that took 20 seconds to load patient reports across our 6 clinics. India Web Designs replaced it with a lightning-fast cloud dashboard. Our doctors love it, and our monthly cloud server bills fell by over 65%.",
    author: "Dr. Vikram Singh Mehta",
    role: "Operations Head",
    company: "MediPulse Diagnostic Network",
    industry: "Multi-Branch Healthcare",
    highlightMetric: "65% Server Cost Saved",
    rating: "★★★★★ 5.0 / 5.0",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[var(--surface-border)]">
      {/* Editorial Split Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[var(--surface-border)] pb-8">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[var(--accent)] block mb-2">
            {"// VERIFIED TECHNICAL PROOF"}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[var(--foreground)] tracking-tight leading-none">
            Real business results <br className="hidden sm:inline" />
            that prove the architecture.
          </h2>
        </div>
        <p className="text-base sm:text-lg text-[var(--muted)] max-w-md md:text-right leading-relaxed">
          Don&apos;t take our word for it. Here is what directors, founders, and operations heads experience after deploying our custom engineering workflows.
        </p>
      </div>

      {/* Social Proof Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="group relative p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] hover:border-[var(--accent)] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity" />

            <div>
              {/* Top Row: Industry Tag & Highlight Metric */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-[var(--background)] text-[var(--muted)] font-mono text-xs uppercase tracking-wider font-semibold border border-[var(--surface-border)]">
                  {t.industry}
                </span>
                <span className="px-3 py-1 rounded-full bg-[var(--success)]/10 text-[var(--success)] font-mono text-xs font-bold border border-[var(--success)]/30">
                  {t.highlightMetric}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="relative z-10 text-sm sm:text-base text-[var(--foreground)] leading-relaxed font-normal">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>

            {/* Bottom Row: Author Attribution & Rating */}
            <div className="relative z-10 mt-8 pt-5 border-t border-[var(--surface-border)] flex items-center justify-between">
              <div>
                <strong className="text-sm sm:text-base font-bold text-[var(--foreground)] block">
                  {t.author}
                </strong>
                <span className="text-xs font-mono text-[var(--muted)] block mt-0.5">
                  {t.role}, <span className="text-[var(--accent)] font-semibold">{t.company}</span>
                </span>
              </div>
              <span className="text-xs font-mono text-[var(--accent)] bg-[var(--background)] px-2.5 py-1 rounded-lg border border-[var(--surface-border)] shrink-0">
                {t.rating.split(" ")[0]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
