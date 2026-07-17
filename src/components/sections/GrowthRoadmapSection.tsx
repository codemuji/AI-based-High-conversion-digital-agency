"use client";

import React, { useState, useRef, ViewTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { Category } from "@/lib/intent-engine";
import {
  GROWTH_ROADMAP_SCALES,
  type GrowthScaleTab,
  type GrowthRoadmapCard,
} from "@/lib/growth-roadmap-data";

interface GrowthRoadmapSectionProps {
  onStartOnboarding?: (category?: Category, query?: string) => void;
}

export function GrowthRoadmapSection({ onStartOnboarding }: GrowthRoadmapSectionProps) {
  const router = useRouter();
  const [activeScaleId, setActiveScaleId] = useState<"micro" | "medium" | "high">("micro");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const activeTab: GrowthScaleTab =
    GROWTH_ROADMAP_SCALES.find((tab) => tab.id === activeScaleId) || GROWTH_ROADMAP_SCALES[0];

  const handleTabChange = (scaleId: "micro" | "medium" | "high") => {
    if (scaleId === activeScaleId) return;
    setActiveScaleId(scaleId);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  const handleCardClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      document.startViewTransition(() => {
        router.push(href, { scroll: true });
        window.scrollTo(0, 0);
      });
    } else {
      router.push(href, { scroll: true });
      window.scrollTo(0, 0);
    }
  };

  return (
    <section
      id="growth-roadmap"
      className="py-24 sm:py-32 border-t border-[var(--surface-border)] overflow-hidden relative w-full"
    >
      {/* Editorial Architectural Split Header inside standard site container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[var(--surface-border)] pb-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[var(--accent)] block mb-2.5">
              {"// SCALABLE ENGINEERING ARCHITECTURE"}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[var(--foreground)] tracking-tight leading-none">
              Engineered roadmaps <br className="hidden sm:inline" />
              built for your exact scale.
            </h2>
          </div>

          <div className="max-w-md lg:text-right">
            <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
              Every roadmap card features native View Transitions. Click any card to expand directly inside its detailed breakdown.
            </p>
          </div>
        </div>

        {/* Interactive Scale Switcher Bar (Micro / Medium / High) */}
        <div className="mt-8">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-2 rounded-2xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-xl">
            {GROWTH_ROADMAP_SCALES.map((scale) => {
              const isActive = scale.id === activeScaleId;
              return (
                <button
                  key={scale.id}
                  type="button"
                  onClick={() => handleTabChange(scale.id)}
                  className={`flex-1 flex items-center justify-between sm:justify-center gap-3 py-4 px-6 rounded-xl font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 relative cursor-pointer ${
                    isActive
                      ? "bg-[var(--background)] text-[var(--foreground)] shadow-lg border border-[var(--accent)]/40 text-[var(--accent)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--background)]/50"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${
                        isActive ? "bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" : "bg-[var(--muted)]/40"
                      }`}
                    />
                    <span>{scale.label}</span>
                  </div>
                  <span className="text-[10px] sm:hidden px-2 py-0.5 rounded bg-[var(--background)] border border-[var(--surface-border)]">
                    {scale.badge.split(" // ")[1]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Scale Tier Overview Banner */}
          <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-[var(--surface)]/60 border border-[var(--surface-border)] flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
            <div className="relative z-10 max-w-2xl">
              <span className="px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-mono text-xs font-bold uppercase tracking-wider border border-[var(--accent)]/30 inline-block mb-3">
                {activeTab.badge}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[var(--foreground)]">
                {activeTab.tagline}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                {activeTab.description}
              </p>
            </div>
            <div className="relative z-10 shrink-0 flex items-center gap-3">
              <button
                type="button"
                onClick={() => onStartOnboarding?.("Website", `${activeTab.label} Strategy`)}
                className="px-5 py-3 rounded-xl bg-[var(--accent)] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#166534] transition-colors shadow-lg shadow-[var(--accent)]/20 flex items-center gap-2 cursor-pointer"
              >
                <span>Scope {activeTab.label} Project ⚡</span>
              </button>
            </div>
          </div>
        </div>

        {/* Clear Visual Indication Bar: "↔ Drag / Swipe to Explore" + Left/Right Arrow Controls */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--surface-border)] text-xs font-mono font-bold text-[var(--foreground)] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
            <span>↔ SWIPE / DRAG OR USE ARROWS TO EXPLORE ALL {activeTab.cards.length} ROADMAPS</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={scrollLeft}
              aria-label="Scroll Left"
              className="w-11 h-11 rounded-full bg-white border border-[var(--surface-border)] hover:border-[var(--accent)] text-[var(--foreground)] hover:text-[var(--accent)] transition-all flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={scrollRight}
              aria-label="Scroll Right"
              className="w-11 h-11 rounded-full bg-white border border-[var(--surface-border)] hover:border-[var(--accent)] text-[var(--foreground)] hover:text-[var(--accent)] transition-all flex items-center justify-center shadow-md hover:shadow-lg hover:scale-105 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* FULL-WIDTH BREAKOUT HORIZONTAL CAROUSEL (`w-full overflow-x-auto no-scrollbar`) */}
      <div
        ref={scrollContainerRef}
        className="w-full flex flex-nowrap overflow-x-auto no-scrollbar gap-8 pb-8 pt-2 px-4 sm:px-6 lg:px-[max(2rem,calc((100vw-72rem)/2+2rem))] snap-x snap-mandatory scroll-smooth"
      >
        {activeTab.cards.map((card: GrowthRoadmapCard) => (
          <ViewTransition key={card.id} name={`use-case-card-${card.slug}`}>
            <div
              style={{ viewTransitionName: `use-case-card-${card.slug}` } as React.CSSProperties}
              className="w-[82vw] sm:w-[340px] lg:w-[350px] shrink-0 snap-start flex flex-col group relative rounded-3xl bg-white border border-[var(--surface-border)] hover:border-[var(--accent)]/60 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden justify-between"
            >
              <Link
                href={`/use-cases/${card.slug}`}
                onClick={(e) => handleCardClick(e, `/use-cases/${card.slug}`)}
                scroll={true}
                className="flex flex-col flex-1 cursor-pointer"
              >
                {/* TOP HALF: SEAMLESS EDGE-TO-EDGE PHOTOGRAPHY WITH VIEW TRANSITION */}
                <ViewTransition name={`use-case-img-${card.slug}`}>
                  <div
                    style={{ viewTransitionName: `use-case-img-${card.slug}` } as React.CSSProperties}
                    className="w-full h-48 sm:h-52 relative overflow-hidden bg-[var(--surface-hover)] shrink-0"
                  >
                    <Image
                      src={card.imageUrl}
                      alt={card.industry}
                      fill
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Subtle bottom white gradient blend so image merges cleanly into bright card body */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-95 pointer-events-none" />
                  </div>
                </ViewTransition>

                {/* BOTTOM HALF: BREATHABLE, CRISP WHITE/GREEN/BLACK CONTENT AREA */}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 space-y-5 bg-white">
                  <div className="space-y-3.5">
                    {/* Badges Row */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full bg-[var(--surface-hover)] text-[var(--foreground)] font-mono text-xs uppercase tracking-wider font-bold border border-[var(--surface-border)] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                        <span>{card.scaleBracket}</span>
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#f0fdf4] text-[var(--accent)] font-mono text-xs font-bold border border-[var(--accent)]/30 shrink-0">
                        {card.highlightMetric}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-black text-lg sm:text-xl text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors leading-snug tracking-tight">
                      {card.industry}
                    </h3>

                    {/* Short Specs */}
                    <p className="text-sm text-[var(--muted)] leading-relaxed line-clamp-2">
                      {card.stages[0]?.title} • {card.timeline}
                    </p>
                  </div>

                  {/* Action Footer Divider Row */}
                  <div className="pt-4 border-t border-[var(--surface-border)] flex items-center justify-between gap-4 text-xs font-mono">
                    <span className="font-bold uppercase tracking-wider text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-1.5">
                      <span>Detailed Guide</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>

                    <span className="font-semibold text-[var(--accent)] bg-[#f0fdf4] px-2.5 py-1 rounded-lg border border-[var(--accent)]/20 shrink-0">
                      {card.stages.length} Stages
                    </span>
                  </div>
                </div>
              </Link>

              {/* SLEEK SCOPING FOOTER BAR */}
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 bg-white">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onStartOnboarding?.(card.intentCategory, `${card.industry} (${card.scaleBracket})`);
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-[var(--surface-hover)] hover:bg-[var(--accent)] border border-[var(--surface-border)] hover:border-[var(--accent)] text-xs font-mono font-bold uppercase tracking-wider text-[var(--foreground)] hover:text-white transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>Scope {card.scaleBracket} Project ⚡</span>
                </button>
              </div>
            </div>
          </ViewTransition>
        ))}
      </div>
    </section>
  );
}
