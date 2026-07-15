"use client";

import React from "react";
import type { Category } from "@/lib/intent-engine";

export interface ServicesGridProps {
  onSelectService: (category: Category) => void;
}

const SERVICES: Array<{
  category: Category;
  title: string;
  tagline: string;
  deliverables: string[];
  metrics: string;
}> = [
  {
    category: "Website",
    title: "Conversion-First Websites & E-Commerce",
    tagline: "Turn your traffic into paying customers with sub-second load times and tailored checkout flows.",
    deliverables: ["Headless & Next.js stores", "Custom UI/UX & Brand identity", "Shopify Plus optimization", "Conversion rate engineering"],
    metrics: "Avg +180% Lead Conversion",
  },
  {
    category: "App",
    title: "High-Performance Mobile & Web Apps",
    tagline: "Cross-platform iOS and Android applications engineered to scale from 1,000 to 1,000,000 daily users.",
    deliverables: ["React Native & iOS/Android", "Offline-first sync architectures", "Custom Biometric & Payment APIs", "Real-time chat & GPS portals"],
    metrics: "99.99% Crash-Free Rate",
  },
  {
    category: "Custom Software",
    title: "Enterprise ERP & Operations Software",
    tagline: "Replace fragmented spreadsheets with unified internal tools, CRM dashboards, and automated logistics systems.",
    deliverables: ["Custom ERP & Inventory engines", "Role-based B2B vendor portals", "Legacy database modernization", "Automated invoicing & logistics"],
    metrics: "Save 40+ hrs/week per team",
  },
  {
    category: "AI Automation",
    title: "Custom AI Agents & Triage Pipelines",
    tagline: "Deploy specialized 24/7 AI agents that resolve customer queries, qualify leads, and extract data autonomously.",
    deliverables: ["WhatsApp & Web support bots", "Automated lead triage & CRM sync", "LLM Document extraction", "Multi-agent autonomous workflows"],
    metrics: "85% Auto-Resolution Rate",
  },
  {
    category: "Digital Marketing",
    title: "Full-Funnel Growth & Performance SEO",
    tagline: "Data-driven Google Ads and organic SEO campaigns optimized directly for verified, high-intent revenue.",
    deliverables: ["High-intent B2B lead campaigns", "Technical SEO & Core Web Vitals", "Multi-touch attribution setup", "Conversion funnel testing"],
    metrics: "3.4x Average ROAS",
  },
];

export function ServicesGrid({ onSelectService }: ServicesGridProps) {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[var(--surface-border)]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
          What You Get
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--foreground)] mt-3 leading-tight">
          Engineered for unfair market advantage.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[var(--muted)]">
          We don&apos;t just write code or design layouts. We build digital assets that directly grow your revenue and cut operational waste.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((srv) => (
          <div
            key={srv.category}
            className="group p-6 sm:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--surface-border)] hover:border-[var(--accent)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] text-xs font-semibold">
                  {srv.metrics}
                </span>
              </div>

              <h3 className="font-display font-bold text-xl text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                {srv.title}
              </h3>

              <p className="text-sm text-[var(--muted)] mt-2 leading-relaxed">
                {srv.tagline}
              </p>

              <ul className="mt-6 space-y-2.5 pt-6 border-t border-[var(--surface-border)]/60">
                {srv.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs font-medium text-[var(--foreground)]">
                    <svg className="w-4 h-4 text-[var(--accent)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[var(--surface-border)]/40">
              <button
                type="button"
                onClick={() => onSelectService(srv.category)}
                className="w-full py-2.5 px-4 rounded-xl bg-[var(--surface-hover)] group-hover:bg-[var(--accent)] text-[var(--foreground)] group-hover:text-white font-display font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Scope this service</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
