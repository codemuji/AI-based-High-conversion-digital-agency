"use client";

import React, { useState, useEffect, useRef } from "react";
import { classifyIntent, type Category } from "@/lib/intent-engine";
import { SuggestionCard } from "./SuggestionCard";

export interface HeroIntakeProps {
  onStartOnboarding: (category: Category, initialQuery: string) => void;
}

const PLACEHOLDERS = [
  "I need a high-converting e-commerce store for our fashion brand...",
  "Build a custom iOS & Android app for on-demand home services...",
  "Automate our customer support triage with an AI chatbot...",
  "Redesign our corporate landing page to double qualified leads...",
  "Develop an internal dashboard to track logistics & inventory...",
];

const SUGGESTIONS: Array<{
  category: Category;
  title: string;
  description: string;
  sampleQuery: string;
  icon: React.ReactNode;
}> = [
  {
    category: "Website",
    title: "Websites & Stores",
    description: "Custom conversion-first websites, landing pages & Shopify/e-commerce stores.",
    sampleQuery: "Redesign our company website",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    category: "App",
    title: "Web & Mobile Apps",
    description: "High-performance iOS, Android & React web applications designed to scale.",
    sampleQuery: "Build a cross-platform mobile app",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    category: "Custom Software",
    title: "Custom Software & ERP",
    description: "Internal tools, CRM systems, dashboards, and complex enterprise backends.",
    sampleQuery: "Create an internal operations portal",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    category: "Digital Marketing",
    title: "Growth & Marketing",
    description: "SEO, Google/Meta Ads funnels, and data-driven performance marketing campaigns.",
    sampleQuery: "Scale our lead generation funnel",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    category: "AI Automation",
    title: "AI & Automations",
    description: "Custom AI agents, support bots, and automated multi-step workflow pipelines.",
    sampleQuery: "Automate triage with an AI bot",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export function HeroIntake({ onStartOnboarding }: HeroIntakeProps) {
  const [query, setQuery] = useState("");
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const [isTypingEffect, setIsTypingEffect] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Rotating placeholders when idle
  useEffect(() => {
    if (isTypingEffect || query.length > 0) return;
    const interval = setInterval(() => {
      setPlaceholderIdx((prev) => (prev + 1) % PLACEHOLDERS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isTypingEffect, query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const match = classifyIntent(query);
    onStartOnboarding(match.category, query || match.category);
  };

  const handleCardClick = (category: Category, sampleQuery: string) => {
    setIsTypingEffect(true);
    setQuery("");
    if (inputRef.current) inputRef.current.focus();

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setQuery(sampleQuery.slice(0, i));
      if (i >= sampleQuery.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIsTypingEffect(false);
          onStartOnboarding(category, sampleQuery);
        }, 300);
      }
    }, 25);
  };

  return (
    <section id="hero" className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center overflow-hidden">
      {/* Background signature motif */}
      <div className="absolute inset-0 bg-grid-pattern -z-10 opacity-60 mask-radial" />

      {/* Hero Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent)]/20 text-xs font-semibold uppercase tracking-wider mb-8 shadow-2xs">
        <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
        Conversion-First Digital Studio
      </div>

      {/* Main Headline */}
      <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--foreground)] max-w-4xl mx-auto leading-tight">
        Tell us what you want to build. <br className="hidden sm:inline" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[var(--signature)]">
          We&apos;ll scope it instantly.
        </span>
      </h1>

      <p className="mt-6 text-base sm:text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
        Skip generic forms. Type your project goal or select a category below to launch an interactive 4-question scoping flow with instant AI triage.
      </p>

      {/* Main Search/Chat Intake Bar */}
      <form onSubmit={handleSubmit} className="mt-10 max-w-3xl mx-auto">
        <div className="relative flex items-center p-2 rounded-2xl bg-[var(--surface)] border-2 border-[var(--surface-border)] focus-within:border-[var(--accent)] shadow-lg hover:shadow-xl transition-all duration-200">
          <div className="pl-4 text-[var(--muted)]">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={PLACEHOLDERS[placeholderIdx]}
            disabled={isTypingEffect}
            className="w-full py-3.5 px-4 text-base sm:text-lg bg-transparent text-[var(--foreground)] placeholder-[var(--muted-light)] focus:outline-none disabled:opacity-80 font-medium"
          />

          <button
            type="submit"
            className="shrink-0 px-6 sm:px-8 py-3.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-display font-semibold text-base shadow-md hover:shadow-lg active:scale-[0.98] transition-all duration-150 flex items-center gap-2 cursor-pointer"
          >
            <span>Start</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </form>

      {/* Suggestion Cards Grid */}
      <div className="mt-12 text-left">
        <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)] text-center mb-6">
          Or explore our core services
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SUGGESTIONS.map((sug) => (
            <SuggestionCard
              key={sug.category}
              category={sug.category}
              title={sug.title}
              description={sug.description}
              sampleQuery={sug.sampleQuery}
              icon={sug.icon}
              onSelect={handleCardClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
