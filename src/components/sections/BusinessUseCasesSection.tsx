"use client";

import React from "react";
import Link from "next/link";
import { USE_CASES_DATA } from "@/lib/use-cases-data";

export function BusinessUseCasesSection() {
  return (
    <section id="use-cases" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[var(--surface-border)]">
      {/* Editorial Architectural Split Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-16 border-b border-[var(--surface-border)] pb-8">
        <div className="max-w-2xl">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[var(--accent)] block mb-2">
            // Real Business Growth Models
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[var(--foreground)] tracking-tight leading-none">
            How we help your <br className="hidden sm:inline" />
            business grow &amp; succeed.
          </h2>
        </div>
        <div className="max-w-md md:text-right">
          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Click on any industry below to explore our step-by-step guides showing exactly how we solve common bottlenecks, automate daily work, and increase sales.
          </p>
        </div>
      </div>

      {/* Bento Grid Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {USE_CASES_DATA.map((item) => (
          <Link
            key={item.slug}
            href={`/use-cases/${item.slug}`}
            className={`group relative p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] hover:border-[var(--accent)] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${item.bentoSpan}`}
          >
            {/* Subtle background grid texture */}
            <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity" />

            {/* Top Row: Vertical Badge & Highlight Metric */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-[var(--background)] text-[var(--accent)] font-mono text-xs uppercase tracking-wider font-bold border border-[var(--surface-border)]">
                {item.vertical}
              </span>
              <span className="px-3 py-1 rounded-full bg-[var(--success)]/10 text-[var(--success)] font-mono text-xs font-bold border border-[var(--success)]/30">
                {item.metrics.highlight}
              </span>
            </div>

            {/* Middle Row: Title & Tagline */}
            <div className="relative z-10 my-2 flex-1">
              <h3 className="font-display font-black text-xl sm:text-2xl md:text-3xl text-[var(--foreground)] leading-tight group-hover:text-[var(--accent)] transition-colors">
                {item.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-[var(--muted)] leading-relaxed line-clamp-3 group-hover:text-[var(--foreground)]/90 transition-colors">
                {item.tagline}
              </p>
            </div>

            {/* Bottom Row: Interactive Action Footer */}
            <div className="relative z-10 mt-6 pt-4 border-t border-[var(--surface-border)] flex items-center justify-between">
              <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-2">
                <span>Read Step-by-Step Growth Guide</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="text-[11px] font-mono font-semibold text-[var(--muted)] bg-[var(--background)] px-2.5 py-1 rounded-lg border border-[var(--surface-border)]">
                {item.steps.length} Proven Steps
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
