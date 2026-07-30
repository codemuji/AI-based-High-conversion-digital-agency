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
      "I opted for services from many companies, but found they never delivered 10% of their commitment or answered calls after payment. Then I got in touch with India Web Designs—they delivered more than their commitment at a very low price. Highly recommended for Web Design & SEO!",
    author: "Dhruba Jyoti Das",
    role: "Business Owner",
    company: "Dhruba Enterprises",
    industry: "Website Design & SEO",
    highlightMetric: "90%+ Retention",
    rating: "★★★★★ 5.0",
  },
  {
    id: "t2",
    quote:
      "Awesome team! The best thing I liked about India Web Designs is that they provide free technical guidance to help customers progress in their business. I am a regular user and have recommended multiple friends to get their websites developed here.",
    author: "Assam House Shifting Team",
    role: "Operations Head",
    company: "Assam House Shifting",
    industry: "Logistics & Services",
    highlightMetric: "Superb Guidance",
    rating: "★★★★★ 5.0",
  },
  {
    id: "t3",
    quote:
      "Highly impressed with the service received from India Web Designs. Expecting to get much more work done. The whole engineering team is exceptionally good—it is a complete, reliable platform for all your digital solutions.",
    author: "Propulsion Education Team",
    role: "Founder",
    company: "Propulsion Education",
    industry: "EdTech & Learning",
    highlightMetric: "Full Digital Platform",
    rating: "★★★★★ 5.0",
  },
  {
    id: "t4",
    quote:
      "I converted my offline retail store into an online ecommerce platform by getting a website designed by India Web Designs. We get a great volume of sales through their online promotion and social media management.",
    author: "Rohit Bhadra",
    role: "Store Owner",
    company: "Bhadra Retailers",
    industry: "E-Commerce & Retail",
    highlightMetric: "+180% Online Sales",
    rating: "★★★★★ 5.0",
  },
  {
    id: "t5",
    quote:
      "Approached them for my ecommerce website. Got great guidance on advanced design & custom features tailored to my business. Their service and support after completion of the website is extremely helpful. Worth every rupee!",
    author: "Nabanitya Kalita",
    role: "Founder",
    company: "Kalita E-Store",
    industry: "Ecommerce Development",
    highlightMetric: "Strong After-Sales",
    rating: "★★★★★ 5.0",
  },
  {
    id: "t6",
    quote:
      "They designed my website which came out looking very good. The team is very prompt and responded to all my technical issues and requests in no time.",
    author: "Simran Kaur",
    role: "Business Lead",
    company: "Kaur Studio",
    industry: "Web Design & Support",
    highlightMetric: "Instant Technical Support",
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
