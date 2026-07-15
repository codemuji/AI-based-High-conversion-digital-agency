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
  return (
    <button
      type="button"
      onClick={() => onSelect(category, sampleQuery)}
      className="group text-left p-4 rounded-xl bg-[var(--surface)] border border-[var(--surface-border)] hover:border-[var(--accent)] hover:bg-[var(--surface-hover)] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between h-full focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
    >
      <div>
        <div className="w-10 h-10 rounded-lg bg-[var(--accent-subtle)] text-[var(--accent)] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200">
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
        <span className="opacity-0 group-hover:opacity-100 transform translate-x-[-4px] group-hover:translate-x-0 transition-all">
          &rarr;
        </span>
      </div>
    </button>
  );
}
