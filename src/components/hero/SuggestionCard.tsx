"use client";

import React from "react";
import type { Category } from "@/lib/intent-engine";

export interface SuggestionCardProps {
  category: Category;
  title: string;
  description: string;
  sampleQuery: string;
  icon: React.ReactNode;
  onSelect: (category: Category, sampleQuery: string) => void;
}

export function SuggestionCard({
  category,
  title,
  description,
  sampleQuery,
  icon,
  onSelect,
}: SuggestionCardProps) {
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <button
      type="button"
      onMouseMove={handleMouseMove}
      onClick={() => onSelect(category, sampleQuery)}
      className="group text-left p-4 rounded-xl bg-[var(--surface)] border border-[var(--surface-border)] hover:border-[var(--accent)] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between h-full focus-visible:ring-2 focus-visible:ring-[var(--accent)] relative overflow-hidden z-0 cursor-pointer"
    >
      {/* Pillar 3: Dynamic Mouse-Tracking Glass Hardware Spotlight Overlay */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        style={{
          background:
            "radial-gradient(300px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255, 153, 51, 0.12), transparent 80%)",
        }}
      />

      <div>
        <div className="w-10 h-10 rounded-lg bg-[var(--accent-subtle)] text-[var(--accent)] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 ease-out">
          {icon}
        </div>
        <h3 className="font-display font-semibold text-base text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
          {title}
        </h3>
        <p className="text-xs text-[var(--muted)] mt-1 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>
      <div className="mt-4 pt-3 border-t border-[var(--surface-border)]/60 flex items-center justify-between text-xs font-medium text-[var(--accent)]">
        <span>&ldquo;{sampleQuery}&rdquo;</span>
        <span className="opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-1 transition-all duration-200 ease-out">
          &rarr;
        </span>
      </div>
    </button>
  );
}
