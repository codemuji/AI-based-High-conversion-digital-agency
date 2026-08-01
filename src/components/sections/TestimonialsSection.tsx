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
      "India Web Designs replaced our legacy storefront with a lightning-fast Next.js luxury portal. The multi-currency dynamic pricing and sub-0.7s load times expanded our global customer reach across Europe, North America, and India. Exceptional craft!",
    author: "Elegance of India Management",
    role: "Creative Director",
    company: "Elegance of India",
    industry: "South Asian Luxury Fashion",
    highlightMetric: "+210% Global Reach",
    rating: "★★★★★ 5.0",
  },
  {
    id: "t2",
    quote:
      "As authorized WILO partners across Northeast India, we needed a robust, high-performance industrial B2B portal. India Web Designs engineered a seamless product catalog and service intake system that handles high-volume client inquiries effortlessly.",
    author: "Hydro Energy Leadership",
    role: "Managing Director",
    company: "Hydro Energy Solution",
    industry: "Industrial Water Systems",
    highlightMetric: "500+ B2B Projects",
    rating: "★★★★★ 5.0",
  },
  {
    id: "t3",
    quote:
      "Publishing breaking news and rich cultural stories across Northeast India requires top-tier speed and instant Google indexing. India Web Designs built us a high-traffic news platform that loads in sub-0.6s and handles over 100k monthly readers seamlessly.",
    author: "Purbodix Editorial Team",
    role: "Editor-in-Chief",
    company: "Purbodix Media",
    industry: "Digital News & Publishing",
    highlightMetric: "100k+ Readers / Mo",
    rating: "★★★★★ 5.0",
  },
  {
    id: "t4",
    quote:
      "We wanted a contemporary luxury e-commerce experience with refined typography and smooth micro-interactions. The team delivered a mobile-first portal with instant checkout that boosted our international conversion rate significantly.",
    author: "Blaze On Me London Team",
    role: "Brand Director",
    company: "Blaze On Me London",
    industry: "Contemporary Luxury Apparel",
    highlightMetric: "+300% Global Sales",
    rating: "★★★★★ 5.0",
  },
  {
    id: "t5",
    quote:
      "Our clients love how fast and intuitive it is to browse our customized tour packages and group trips. The WhatsApp direct booking integration doubled our daily booking inquiries. India Web Designs is our trusted technology partner!",
    author: "Baruah Travels Management",
    role: "Head of Operations",
    company: "Baruah Travels",
    industry: "Travel & Experience Booking",
    highlightMetric: "1,500+ Curated Trips",
    rating: "★★★★★ 5.0",
  },
  {
    id: "t6",
    quote:
      "Showcasing heavy industrial machinery online requires clear specifications and fast catalog performance. India Web Designs engineered a sub-0.7s showcase portal with direct RFQ inquiry tools that elevated our digital presence.",
    author: "G.K. Equipment Management",
    role: "Director of Operations",
    company: "G.K. Equipment",
    industry: "Heavy Machinery & Industrial",
    highlightMetric: "100/100 Core Web Vitals",
    rating: "★★★★★ 5.0",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[var(--surface-border)] font-sans text-sm">
      {/* Centered Section Header */}
      <div className="max-w-2xl mx-auto mb-10 text-center border-b border-[var(--surface-border)] pb-6">
        <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[var(--accent)] block mb-1.5">
          Verified Client Telemetry
        </span>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-[var(--foreground)] tracking-tight leading-snug">
          1,150+ Happy Business Clients
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[var(--muted)] leading-relaxed max-w-lg mx-auto">
          Here is what business owners, founders, and directors across 29 countries experience working with India Web Designs.
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

              {/* Quote with Big Double Quotes */}
              <div className="relative z-10">
                <span className="font-serif text-5xl sm:text-6xl text-[var(--accent)]/40 font-extrabold leading-none select-none block -mb-3">
                  &ldquo;
                </span>
                <blockquote className="relative z-10 text-xs sm:text-sm text-[var(--foreground)] leading-relaxed font-medium">
                  {t.quote}
                </blockquote>
              </div>
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
