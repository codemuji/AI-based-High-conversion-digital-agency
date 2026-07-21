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
      "Before India Web Designs, our staff spent 5 hours daily manually verifying WhatsApp screenshots for fee installments. They engineered a custom LMS portal and automated GST invoicing in just 3 weeks. Our admin overhead dropped 80% instantly.",
    author: "Rajesh Kumar Sharma",
    role: "Director",
    company: "Apex Vocational & Academy",
    industry: "EdTech & Coaching",
    highlightMetric: "+180% Conversions",
    rating: "★★★★★ 5.0",
  },
  {
    id: "t2",
    quote:
      "We were paying heavy retainers for bloated plugins that crashed every time we ran a festival sale. The custom high-speed storefront they built loads sub-second, and our repeat purchase rate jumped 42% in the first two months alone.",
    author: "Ananya Deshmukh",
    role: "Founder & CEO",
    company: "Nectar Organics D2C",
    industry: "E-Commerce",
    highlightMetric: "0.7s Load Speed",
    rating: "★★★★★ 5.0",
  },
  {
    id: "t3",
    quote:
      "Our previous agency built a clunky CRM that took 20 seconds to load patient reports across our clinics. India Web Designs replaced it with a lightning-fast cloud dashboard. Our doctors love it, and server bills fell by 65%.",
    author: "Dr. Vikram Singh Mehta",
    role: "Operations Head",
    company: "MediPulse Diagnostic Network",
    industry: "Healthcare",
    highlightMetric: "65% Cost Saved",
    rating: "★★★★★ 5.0",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[var(--surface-border)] font-sans text-sm">
      {/* Editorial Split Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-[var(--surface-border)] pb-6">
        <div>
          <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[var(--accent)] block mb-1.5">
            Verified Technical Proof
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--foreground)] tracking-tight leading-snug">
            Real business results <br className="hidden sm:inline" />
            that prove our architecture.
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[var(--muted)] max-w-md md:text-right leading-relaxed">
          Don&apos;t take our word for it. Here is what directors, founders, and operations heads experience after deploying our custom engineering workflows.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.id}
            className="group relative p-5 sm:p-6 rounded-xl bg-[var(--surface)] border border-[var(--surface-border)] hover:border-[var(--accent)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity" />

            <div>
              {/* Top Row: Industry Tag & Metric */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-[var(--background)] text-[var(--muted)] font-display text-[10px] uppercase tracking-wider font-semibold border border-[var(--surface-border)]">
                  {t.industry}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[var(--success)]/10 text-[var(--success)] font-display text-[10px] font-bold border border-[var(--success)]/30">
                  {t.highlightMetric}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="relative z-10 text-xs sm:text-sm text-[var(--foreground)] leading-relaxed font-normal">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </div>

            {/* Bottom Row */}
            <div className="relative z-10 mt-6 pt-4 border-t border-[var(--surface-border)] flex items-center justify-between">
              <div>
                <strong className="text-xs sm:text-sm font-bold text-[var(--foreground)] block">
                  {t.author}
                </strong>
                <span className="text-[11px] font-display text-[var(--muted)] block mt-0.5">
                  {t.role}, <span className="text-[var(--accent)] font-semibold">{t.company}</span>
                </span>
              </div>
              <span className="text-[11px] font-display font-bold text-[var(--accent)] bg-[var(--background)] px-2 py-0.5 rounded-md border border-[var(--surface-border)] shrink-0">
                {t.rating.split(" ")[0]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
