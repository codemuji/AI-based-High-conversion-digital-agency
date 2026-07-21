"use client";

import React, { useRef, ViewTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { USE_CASES_DATA } from "@/lib/use-cases-data";

export function BusinessUseCasesSection() {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
    <section id="use-cases" className="py-12 sm:py-16 border-t border-[var(--surface-border)] overflow-hidden relative w-full font-sans text-sm">
      {/* Editorial Architectural Split Header inside standard site container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--surface-border)] pb-6">
          <div className="max-w-xl">
            <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[var(--accent)] block mb-1.5">
              Real Business Growth Models
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--foreground)] tracking-tight leading-snug">
              How we help your <br className="hidden sm:inline" />
              business grow &amp; succeed.
            </h2>
          </div>

          <div className="max-w-sm md:text-right">
            <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
              Every card below features native shared-element View Transitions. Click any card to enter directly inside its roadmap guide.
            </p>
          </div>
        </div>

        {/* Clear Visual Indication Bar: "↔ Drag / Swipe to Explore" + Left/Right Arrow Controls */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--surface-border)] text-[11px] font-display font-bold text-[var(--foreground)] shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
            <span>↔ SWIPE / DRAG OR USE ARROWS TO EXPLORE ALL {USE_CASES_DATA.length} MODELS</span>
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
        {USE_CASES_DATA.map((item) => (
          <ViewTransition key={item.slug} name={`use-case-card-${item.slug}`}>
            <div
              style={{ viewTransitionName: `use-case-card-${item.slug}` } as React.CSSProperties}
              className="w-[78vw] sm:w-[270px] lg:w-[280px] shrink-0 snap-start flex flex-col"
            >
              <Link
                href={`/use-cases/${item.slug}`}
                onClick={(e) => handleCardClick(e, `/use-cases/${item.slug}`)}
                scroll={true}
                className="group relative rounded-2xl bg-white border border-[var(--surface-border)] hover:border-[var(--accent)]/60 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between flex-1 cursor-pointer"
              >
                {/* TOP HALF: SEAMLESS EDGE-TO-EDGE PHOTOGRAPHY */}
                <ViewTransition name={`use-case-img-${item.slug}`}>
                  <div
                    style={{ viewTransitionName: `use-case-img-${item.slug}` } as React.CSSProperties}
                    className="w-full h-36 sm:h-40 relative overflow-hidden bg-[var(--surface-hover)] shrink-0"
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
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
                      <span className="px-2.5 py-0.5 rounded-full bg-[var(--surface-hover)] text-[var(--foreground)] font-display text-[10px] uppercase tracking-wider font-bold border border-[var(--surface-border)]">
                        {item.vertical}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#f0fdf4] text-[var(--accent)] font-display text-[10px] font-bold border border-[var(--accent)]/30 shrink-0">
                        {item.metrics.highlight}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="font-display font-bold text-base sm:text-lg text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors leading-snug tracking-tight">
                      {item.title}
                    </h3>

                    {/* Description Write-Up */}
                    <p className="text-xs text-[var(--muted)] leading-relaxed line-clamp-3">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Action Footer Divider Row */}
                  <div className="pt-3 border-t border-[var(--surface-border)] flex items-center justify-between gap-3 text-[11px] font-display">
                    <span className="font-bold uppercase tracking-wider text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-1">
                      <span>Detailed Roadmap</span>
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
                      {item.steps.length} Proven Steps
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </ViewTransition>
        ))}
      </div>
    </section>
  );
}
