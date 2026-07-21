"use client";

import React, { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Why shouldn't I just use cheap templates or generic page builders?",
    answer:
      "Generic page builders are loaded with dozens of heavy, third-party plugins that slow down your load times (often 4–7 seconds), hurt your Google search ranking (Core Web Vitals), and create severe security vulnerabilities. At India Web Designs, we custom-engineer your digital platforms from scratch using modern high-speed code. Your site loads in under 0.8 seconds, never crashes under heavy traffic, and gives you complete ownership with zero recurring plugin fees.",
    category: "Architecture",
  },
  {
    id: "faq-2",
    question: "How do you size the roadmap between Micro, Medium, and High scale?",
    answer:
      "We size your roadmap purely based on your active customer volume and operational bottlenecks. If you are launching or processing under 50 daily inquiries, our Micro Scale gets you live in 1–2 weeks with instant WhatsApp lead capture and sub-second landing pages. As your volume scales past 100+ daily orders, we layer on our Medium/High Scale custom portals and native iOS/Android apps without disrupting active operations.",
    category: "Roadmap Sizing",
  },
  {
    id: "faq-3",
    question: "What is the typical delivery timeline for custom websites or portals?",
    answer:
      "Because we use modular, proven code engines and fixed sprint milestones, we deliver significantly faster than traditional agencies. Micro Scale authority landing pages take just 1–2 weeks. Medium Scale custom LMS portals and e-commerce stores ship in 3–5 weeks. Dedicated High Scale native iOS and Android apps ship in 6–10 weeks.",
    category: "Timelines",
  },
  {
    id: "faq-4",
    question: "Do you handle cloud hosting, SSL security, and ongoing maintenance?",
    answer:
      "Yes, 100%. We act as your long-term dedicated technology partners. We deploy your application on enterprise-grade cloud servers equipped with automated backups, enterprise SSL certificates, 99.99% uptime monitoring, and DDoS protection. You never have to deal with server configurations or technical maintenance alone.",
    category: "Hosting & Support",
  },
  {
    id: "faq-5",
    question: "Can we start at the Micro scale and upgrade without rebuilding?",
    answer:
      "Absolutely. Our entire technical architecture is built on scalable, clean modular standards. You can start with a lean high-conversion landing page and automated WhatsApp booking today (Micro Scale), and when your business expands next quarter, we plug your custom student portal or mobile apps directly into the exact same foundation.",
    category: "Scalability",
  },
];

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-[var(--surface-border)] font-sans text-sm">
      {/* Editorial Split Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-[var(--surface-border)] pb-6">
        <div>
          <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[var(--accent)] block mb-1.5">
            Frequently Asked Questions
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--foreground)] tracking-tight leading-snug">
            Every technical detail <br className="hidden sm:inline" />
            answered clearly without jargon.
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[var(--muted)] max-w-md md:text-right leading-relaxed">
          Have questions about our custom engineering, timelines, hosting, or how we size your growth roadmap? Here is everything you need to know before scoping your project.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {FAQ_DATA.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={item.id}
              className={`rounded-xl transition-all duration-300 border ${
                isOpen
                  ? "bg-[var(--surface)] border-[var(--accent)]/80 shadow-md"
                  : "bg-[var(--surface)]/60 border-[var(--surface-border)] hover:border-stone-700"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(idx)}
                className="w-full px-5 py-4 sm:px-6 sm:py-4 flex items-center justify-between gap-4 text-left focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <span className="font-display text-[10px] font-bold uppercase tracking-wider text-[var(--accent)] px-2 py-0.5 rounded bg-[var(--background)] border border-[var(--surface-border)] shrink-0">
                    {item.category}
                  </span>
                  <span className="font-display font-bold text-base sm:text-lg text-[var(--foreground)]">
                    {item.question}
                  </span>
                </div>
                <span className="font-display text-xs font-bold text-[var(--accent)] bg-[var(--background)] px-2.5 py-1 rounded-lg border border-[var(--surface-border)] shrink-0 select-none">
                  {isOpen ? "–" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 sm:px-6 sm:pb-5 pt-2 border-t border-[var(--surface-border)]/50">
                  <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed font-normal">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
