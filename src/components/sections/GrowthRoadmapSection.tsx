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
      scrollContainerRef.current.scrollBy({ left: -310, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 310, behavior: "smooth" });
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
      className="py-12 sm:py-16 border-t border-[var(--surface-border)] overflow-hidden relative w-full font-sans text-sm"
    >
      {/* Editorial Architectural Split Header inside standard site container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[var(--surface-border)] pb-6">
          <div className="max-w-xl">
            <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[var(--accent)] block mb-1.5">
              Scalable Engineering Architecture
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--foreground)] tracking-tight leading-snug">
              Engineered roadmaps <br className="hidden sm:inline" />
              built for your exact scale.
            </h2>
          </div>

          <div className="max-w-sm lg:text-right">
            <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
              Every roadmap card features native View Transitions. Click any card to expand directly inside its detailed breakdown.
            </p>
          </div>
        </div>

        {/* Interactive Scale Switcher Bar (Micro / Medium / High) */}
        <div className="mt-6">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 p-1.5 rounded-xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-md">
            {GROWTH_ROADMAP_SCALES.map((scale) => {
              const isActive = scale.id === activeScaleId;
              return (
                <button
                  key={scale.id}
                  type="button"
                  onClick={() => handleTabChange(scale.id)}
                  className={`flex-1 flex items-center justify-between sm:justify-center gap-2 py-2.5 px-4 rounded-lg font-display text-xs font-bold uppercase tracking-wider transition-all duration-300 relative cursor-pointer ${
                    isActive
                      ? "bg-[var(--background)] text-[var(--foreground)] shadow-sm border border-[var(--accent)]/40 text-[var(--accent)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--background)]/50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full transition-colors ${
                        isActive ? "bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" : "bg-[var(--muted)]/40"
                      }`}
                    />
                    <span>{scale.label}</span>
                  </div>
                  <span className="text-[10px] sm:hidden px-2 py-0.5 rounded bg-[var(--background)] border border-[var(--surface-border)]">
                    {scale.badge.replace("// ", "").trim()}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Scale Tier Overview Banner */}
          <div className="mt-4 p-4 sm:p-6 rounded-xl bg-[var(--surface)]/60 border border-[var(--surface-border)] flex flex-col md:flex-row md:items-center justify-between gap-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
            <div className="relative z-10 max-w-xl">
              <span className="px-2.5 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-display text-[11px] font-bold uppercase tracking-wider border border-[var(--accent)]/30 inline-block mb-2">
                {activeTab.badge.replace("// ", "").trim()}
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[var(--foreground)]">
                {activeTab.tagline}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                {activeTab.description}
              </p>
            </div>
            <div className="relative z-10 shrink-0 flex items-center gap-2">
              <button
                type="button"
                onClick={() => onStartOnboarding?.("Website", `${activeTab.label} Strategy`)}
                className="px-4 py-2.5 rounded-lg bg-[var(--accent)] text-white font-display text-xs font-bold uppercase tracking-wider hover:bg-[#166534] transition-colors shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <span>Scope {activeTab.label} Project ⚡</span>
              </button>
            </div>
          </div>
        </div>

        {/* Clear Visual Indication Bar: "↔ Drag / Swipe to Explore" + Left/Right Arrow Controls */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--surface-border)] text-[11px] font-display font-bold text-[var(--foreground)] shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
            <span>↔ SWIPE / DRAG OR USE ARROWS TO EXPLORE ALL {activeTab.cards.length} ROADMAPS</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={scrollLeft}
              aria-label="Scroll Left"
              className="w-9 h-9 rounded-full bg-white border border-[var(--surface-border)] hover:border-[var(--accent)] text-[var(--foreground)] hover:text-[var(--accent)] transition-all flex items-center justify-center shadow-xs hover:shadow-sm hover:scale-105 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={scrollRight}
              aria-label="Scroll Right"
              className="w-9 h-9 rounded-full bg-white border border-[var(--surface-border)] hover:border-[var(--accent)] text-[var(--foreground)] hover:text-[var(--accent)] transition-all flex items-center justify-center shadow-xs hover:shadow-sm hover:scale-105 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* FULL-WIDTH BREAKOUT HORIZONTAL CAROUSEL */}
      <div
        ref={scrollContainerRef}
        className="w-full flex flex-nowrap overflow-x-auto no-scrollbar gap-5 pb-6 pt-1 px-4 sm:px-6 lg:px-[max(2rem,calc((100vw-72rem)/2+2rem))] snap-x snap-mandatory scroll-smooth"
      >
        {activeTab.cards.map((card: GrowthRoadmapCard) => (
          <ViewTransition key={card.id} name={`use-case-card-${card.slug}`}>
            <div
              style={{ viewTransitionName: `use-case-card-${card.slug}` } as React.CSSProperties}
              className="w-[78vw] sm:w-[270px] lg:w-[280px] shrink-0 snap-start flex flex-col group relative rounded-2xl bg-white border border-[var(--surface-border)] hover:border-[var(--accent)]/60 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden justify-between"
            >
              <Link
                href={`/use-cases/${card.slug}`}
                onClick={(e) => handleCardClick(e, `/use-cases/${card.slug}`)}
                scroll={true}
                className="flex flex-col flex-1 cursor-pointer"
              >
                {/* TOP HALF: SEAMLESS EDGE-TO-EDGE PHOTOGRAPHY */}
                <ViewTransition name={`use-case-img-${card.slug}`}>
                  <div
                    style={{ viewTransitionName: `use-case-img-${card.slug}` } as React.CSSProperties}
                    className="w-full h-36 sm:h-40 relative overflow-hidden bg-[var(--surface-hover)] shrink-0"
                  >
                    <Image
                      src={card.imageUrl}
                      alt={card.industry}
                      fill
                      sizes="(max-width: 768px) 100vw, 280px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-95 pointer-events-none" />
                  </div>
                </ViewTransition>

                {/* BOTTOM HALF: COMPACT CONTENT AREA */}
                <div className="p-4 sm:p-4.5 flex flex-col justify-between flex-1 space-y-3.5 bg-white">
                  <div className="space-y-2.5">
                    {/* Badges Row */}
                    <div className="flex flex-wrap items-center justify-between gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-[var(--surface-hover)] text-[var(--foreground)] font-display text-[10px] uppercase tracking-wider font-bold border border-[var(--surface-border)] flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                        <span>{card.scaleBracket}</span>
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#f0fdf4] text-[var(--accent)] font-display text-[10px] font-bold border border-[var(--accent)]/30 shrink-0">
                        {card.highlightMetric}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-base sm:text-lg text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors leading-snug tracking-tight">
                      {card.industry}
                    </h3>

                    {/* Short Specs */}
                    <p className="text-xs text-[var(--muted)] leading-relaxed line-clamp-2">
                      {card.stages[0]?.title} • {card.timeline}
                    </p>
                  </div>

                  {/* Action Footer Divider Row */}
                  <div className="pt-3 border-t border-[var(--surface-border)] flex items-center justify-between gap-3 text-[11px] font-display">
                    <span className="font-bold uppercase tracking-wider text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-1">
                      <span>Detailed Guide</span>
                      <svg
                        className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>

                    <span className="font-semibold text-[var(--accent)] bg-[#f0fdf4] px-2 py-0.5 rounded-md border border-[var(--accent)]/20 shrink-0">
                      {card.stages.length} Stages
                    </span>
                  </div>
                </div>
              </Link>

              {/* SLEEK COMPACT SCOPING FOOTER BAR */}
              <div className="px-4 sm:px-4.5 pb-4 sm:pb-4.5 pt-0 bg-white">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onStartOnboarding?.(card.intentCategory, `${card.industry} (${card.scaleBracket})`);
                  }}
                  className="w-full py-2 px-3.5 rounded-lg bg-[var(--surface-hover)] hover:bg-[var(--accent)] border border-[var(--surface-border)] hover:border-[var(--accent)] text-[11px] font-display font-bold uppercase tracking-wider text-[var(--foreground)] hover:text-white transition-all flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
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
