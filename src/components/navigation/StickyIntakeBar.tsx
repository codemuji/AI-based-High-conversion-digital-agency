"use client";

import React, { useState, useEffect } from "react";
import type { Category } from "@/lib/intent-engine";

export interface StickyIntakeBarProps {
  isModalOpen: boolean;
  onOpenIntake: (category?: Category) => void;
}

export function StickyIntakeBar({ isModalOpen, onOpenIntake }: StickyIntakeBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroEl = document.getElementById("hero");
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show bar when hero leaves viewport
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  // Hide if modal is currently open or hero is in view
  const show = isVisible && !isModalOpen;

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ease-out pointer-events-auto ${
        show
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-16 scale-90 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-[var(--surface)]/95 backdrop-blur-md border border-[var(--surface-border)] hover:border-[var(--accent)]/60 shadow-[0_12px_45px_rgba(0,0,0,0.18),0_0_25px_rgba(255,153,51,0.12)] transition-all duration-300">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          <span className="text-xs sm:text-sm font-semibold text-[var(--foreground)]">
            Want exact pricing & timeline for your project?
          </span>
        </div>

        <button
          type="button"
          onClick={() => onOpenIntake("Website")}
          className="px-5 py-2 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-xs font-display font-semibold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          Scope My Project &rarr;
        </button>
      </div>
    </div>
  );
}
