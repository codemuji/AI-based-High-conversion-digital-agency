"use client";

import React, { useState, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import type { Category } from "@/lib/intent-engine";
import {
  SERVICES_DROPDOWN_GROUPS,
  type ServiceDropdownItem,
} from "@/lib/services-dropdown-data";

export interface ServicesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (category: Category, initialQuery: string) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function ServicesDropdown({
  isOpen,
  onClose,
  onSelectService,
  onMouseEnter,
  onMouseLeave,
}: ServicesDropdownProps) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [hoveredItem, setHoveredItem] = useState<ServiceDropdownItem>(
    SERVICES_DROPDOWN_GROUPS[0].items[2] // Default to Ecommerce Website Design
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setIsClosing(false);
      setShouldRender(true);
    } else if (shouldRender) {
      setIsClosing(true);
    }
  }

  // Trigger GSAP exit animation when isClosing transitions to true
  React.useEffect(() => {
    if (isClosing && panelRef.current) {
      gsap.to(panelRef.current, {
        autoAlpha: 0,
        y: -12,
        scale: 0.98,
        duration: 0.22,
        ease: "power2.in",
        onComplete: () => {
          setIsClosing(false);
          setShouldRender(false);
        },
      });
    } else if (isClosing && !panelRef.current) {
      setIsClosing(false);
      setShouldRender(false);
    }
  }, [isClosing]);

  // GSAP Entrance Choreography
  useLayoutEffect(() => {
    if (!shouldRender || !panelRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          panelRef.current,
          { autoAlpha: 0, y: -16, scale: 0.98 },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.35,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
          }
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(panelRef.current, { autoAlpha: 1, y: 0, scale: 1 });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [shouldRender]);

  // Tactile spotlight update transition when hovering new items
  const handleItemHover = (item: ServiceDropdownItem) => {
    if (item.id === hoveredItem.id) return;
    setHoveredItem(item);

    if (spotlightRef.current && window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      gsap.fromTo(
        spotlightRef.current,
        { opacity: 0.6, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.25, ease: "power2.out" }
      );
    }
  };

  if (!shouldRender) return null;

  return (
    <div
      ref={containerRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="fixed left-0 right-0 top-[64px] z-50 px-4 sm:px-6 lg:px-8 pointer-events-auto hidden md:block"
      role="region"
      aria-label="Services exploration menu"
    >
      {/* Invisible safe corridor bridge from navbar to dropdown to eliminate diagonal mouse clipping */}
      <div className="pt-3 pb-2 -mt-3">
        <div
          ref={panelRef}
          className="max-w-7xl mx-auto rounded-3xl bg-[var(--surface)]/95 backdrop-blur-2xl border border-[var(--surface-border)] shadow-[0_24px_65px_rgba(0,0,0,0.18),0_0_35px_rgba(22,163,74,0.08)] overflow-hidden transition-all duration-200"
        >
          <div className="grid grid-cols-12 gap-0">
            {/* Left/Center Panel: The 6 Categorized Columns Bento Grid (8 Columns span) */}
            <div className="col-span-12 lg:col-span-8 p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-8 max-h-[80vh] overflow-y-auto no-scrollbar">
              {SERVICES_DROPDOWN_GROUPS.map((group) => (
                <div key={group.id} className="flex flex-col">
                  {/* Monospace Column Header */}
                  <div className="flex items-center justify-between border-b border-[var(--surface-border)] pb-2.5 mb-3.5">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                      <span className="font-mono text-xs uppercase font-bold tracking-wider text-[var(--foreground)]">
                        {`${group.columnNumber} // ${group.name}`}
                      </span>
                    </span>
                    <span className="text-[10px] font-mono font-semibold text-[var(--muted)]">
                      {group.items.length} Items
                    </span>
                  </div>

                  {/* Sub-items list */}
                  <ul className="space-y-1.5">
                    {group.items.map((item) => {
                      const isHovered = hoveredItem.id === item.id;
                      return (
                        <li key={item.id}>
                          <Link
                            href={`/${item.id}`}
                            onMouseEnter={() => handleItemHover(item)}
                            onClick={onClose}
                            className={`w-full text-left py-2 px-3 rounded-xl transition-all duration-150 flex items-center justify-between group cursor-pointer ${
                              isHovered
                                ? "bg-[var(--accent-subtle)] text-[var(--accent)] font-bold pl-3.5 shadow-xs"
                                : "text-[var(--foreground)] hover:bg-[var(--surface-hover)] hover:text-[var(--accent)]"
                            }`}
                          >
                            <span className="text-xs sm:text-sm font-medium leading-snug group-hover:font-semibold transition-all">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span
                                className={`text-[9px] font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ml-2 shrink-0 ${
                                  isHovered
                                    ? "bg-[var(--accent)] text-white"
                                    : "bg-stone-200/80 text-stone-700 dark:bg-stone-800 dark:text-stone-300"
                                }`}
                              >
                                {item.badge}
                              </span>
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            {/* Right Panel: Live Scoping Spotlight Box (4 Columns span) */}
            <div
              ref={spotlightRef}
              className="col-span-12 lg:col-span-4 bg-stone-900 text-stone-100 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-stone-800 relative overflow-hidden"
            >
              {/* Subtle radial emerald spotlight overlay */}
              <div
                className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-br from-[#16a34a]/15 to-transparent blur-3xl"
                aria-hidden="true"
              />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800/90 border border-stone-700 text-[11px] font-mono uppercase tracking-wider text-[#4ade80] font-bold">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span>Live Scoping Spotlight</span>
                  </span>
                  <span className="text-xs font-mono text-stone-400">
                    Category: <strong className="text-white">{hoveredItem.category}</strong>
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight leading-snug">
                  <Link href={`/${hoveredItem.id}`} onClick={onClose} className="hover:text-[#4ade80] transition-colors">
                    {hoveredItem.title}
                  </Link>
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-3 leading-relaxed">
                  {hoveredItem.description}
                </p>

                {/* Scope & Delivery Metrics Bento Mini-Grid */}
                <div className="mt-6 pt-6 border-t border-stone-800/80 grid grid-cols-2 gap-3 font-mono">
                  <div className="p-3 rounded-xl bg-stone-800/60 border border-stone-700/50">
                    <span className="text-[10px] uppercase text-stone-400 block mb-1">
                      Estimated Timeline
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-stone-200">
                      ⚡ {hoveredItem.timeline}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-800/60 border border-stone-700/50">
                    <span className="text-[10px] uppercase text-stone-400 block mb-1">
                      Expected Impact
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#4ade80]">
                      ★ {hoveredItem.metrics}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => {
                    onSelectService(hoveredItem.category, hoveredItem.title);
                    onClose();
                  }}
                  className="w-full py-3.5 px-6 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-display font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Scope This Project Now ⚡</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                <div className="flex items-center justify-between text-[11px] font-mono text-stone-400 px-1">
                  <span>Guaranteed 2-Hour Response</span>
                  <Link
                    href={`/${hoveredItem.id}`}
                    onClick={onClose}
                    className="text-[#4ade80] hover:underline font-bold transition-colors"
                  >
                    View Full Page &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
