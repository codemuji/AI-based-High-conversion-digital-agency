"use client";

import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { classifyIntent, type Category } from "@/lib/intent-engine";
import { SuggestionCard } from "./SuggestionCard";

export interface HeroIntakeProps {
  onStartOnboarding: (category: Category, initialQuery: string) => void;
}

const PLACEHOLDERS = [
  " I want to attract more customers and increase daily sales...",
  " I need a professional website so clients trust my business...",
  " I want an easy mobile app for my regular customers to order...",
  " I want our WhatsApp to automatically answer inquiries 24/7...",
  " I need custom software to stop billing and inventory headaches...",
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
      title: "Get More Customers Online",
      description: "A fast, professional website that builds trust and turns daily visitors into genuine customer inquiries.",
      sampleQuery: "I need a professional website to attract new customers and increase daily sales",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      category: "App",
      title: "Mobile App for Regulars",
      description: "An easy mobile app so your loyal customers can order, book, and connect right from their phone.",
      sampleQuery: "I want an easy mobile app so our regular clients can order anytime from their phone",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      category: "Custom Software",
      title: "Stop Billing & Stock Headaches",
      description: "Simple software to replace manual registers and messy Excel sheets so your business runs smoothly.",
      sampleQuery: "We need simple software to track our billing, stock, and daily operations without headaches",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      category: "Digital Marketing",
      title: "Get Consistent Local Leads",
      description: "Targeted marketing that helps ideal customers in your city find your business on Google and call you.",
      sampleQuery: "I want local customers to easily find our business on Google and send inquiries",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      category: "AI Automation",
      title: "Answer Customers 24/7",
      description: "A friendly WhatsApp assistant that instantly answers pricing and availability questions when you're busy or asleep.",
      sampleQuery: "I want our WhatsApp to automatically answer customer questions and capture leads 24/7",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
  ];

export function HeroIntake({ onStartOnboarding }: HeroIntakeProps) {
  const [query, setQuery] = useState("");
  const [placeholderIdx, setPlaceholderIdx] = useState(0);
  const [currentPlaceholder, setCurrentPlaceholder] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTypingEffect, setIsTypingEffect] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // GSAP Animation Refs for Pillar 1
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLFormElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Set initial invisible state before browser paint to prevent flash
        gsap.set(
          [headlineRef.current, subheadRef.current, badgesRef.current, searchRef.current, suggestionsRef.current],
          { autoAlpha: 0, y: 22 }
        );

        // Orchestrate cinematic staggered reveal
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.75 } });
        tl.to(headlineRef.current, { autoAlpha: 1, y: 0, duration: 0.85 })
          .to(subheadRef.current, { autoAlpha: 1, y: 0 }, "-=0.6")
          .to(badgesRef.current, { autoAlpha: 1, y: 0 }, "-=0.6")
          .to(searchRef.current, { autoAlpha: 1, y: 0 }, "-=0.6")
          .to(suggestionsRef.current, { autoAlpha: 1, y: 0 }, "-=0.6");
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          [headlineRef.current, subheadRef.current, badgesRef.current, searchRef.current, suggestionsRef.current],
          { autoAlpha: 1, y: 0 }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Typewriter effect for search bar placeholders when idle
  useEffect(() => {
    if (isTypingEffect || query.length > 0) {
      return;
    }

    const fullText = PLACEHOLDERS[placeholderIdx];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentPlaceholder === fullText) {
      // Pause at the end before starting to erase
      timeout = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && currentPlaceholder === "") {
      // Finished erasing, move to next placeholder and start typing
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setPlaceholderIdx((prev) => (prev + 1) % PLACEHOLDERS.length);
      }, 10);
    } else {
      // Typing or erasing character by character
      const speed = isDeleting ? 22 : 42;
      timeout = setTimeout(() => {
        setCurrentPlaceholder(
          isDeleting
            ? fullText.slice(0, currentPlaceholder.length - 1)
            : fullText.slice(0, currentPlaceholder.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [currentPlaceholder, isDeleting, placeholderIdx, isTypingEffect, query]);

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
    <section ref={containerRef} id="hero" className="relative py-14 md:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center overflow-hidden">
      {/* Background signature motif */}
      <div className="absolute inset-0 bg-grid-pattern -z-10 opacity-60 mask-radial" />

      {/* Top Pill Badge (mirrors image top pill) */}
      <div ref={badgesRef} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--surface-border)] shadow-xs mb-6 text-xs sm:text-sm font-mono uppercase tracking-wider text-[var(--muted)]">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="font-bold text-[var(--foreground)]">Digital Solutions &amp; Website Design for Indian Businesses</span>
      </div>

      {/* Main Headline */}
      <h1 ref={headlineRef} className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[var(--foreground)] max-w-4xl mx-auto leading-[1.08]">
        How can we help your business grow{" "}
        <span className="relative inline-block text-[var(--accent)] font-black">
          today?
          <span className="absolute left-0 -bottom-1.5 w-full h-1.5 bg-[var(--accent)] rounded-full opacity-80" />
        </span>
      </h1>

      {/* Subtitle */}
      <p ref={subheadRef} className="mt-5 text-base sm:text-xl text-[var(--muted)] max-w-2xl mx-auto leading-relaxed font-medium">
        Tell us what you want to improve or achieve or choose a goal below and we&apos;ll create a tailored plan to{" "}
        <span className="text-[var(--foreground)] font-bold">help you grow and succeed</span>.
      </p>

      {/* Main Search/Chat Intake Bar */}
      <form ref={searchRef} onSubmit={handleSubmit} className="mt-8 max-w-3xl mx-auto">
        <div className="relative flex items-center p-2 rounded-full bg-[var(--surface)] border border-[var(--surface-border)] hover:border-stone-400 focus-within:border-[var(--foreground)] focus-within:ring-2 focus-within:ring-[var(--foreground)]/10 shadow-lg hover:shadow-xl transition-all duration-200">
          <div className="pl-5 pr-1 text-[var(--accent)] hidden sm:flex items-center">
            <svg className="w-6 h-6 animate-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 2L15.6 8.4L22 10L15.6 11.6L14 18L12.4 11.6L6 10L12.4 8.4L14 2Z"
                fill="url(#ai-star-gradient)"
              />
              <path
                d="M6 3L6.8 6.2L10 7L6.8 7.8L6 11L5.2 7.8L2 7L5.2 6.2L6 3Z"
                fill="url(#ai-star-gradient)"
              />
              <path
                d="M7 15L7.6 17.4L10 18L7.6 18.6L7 21L6.4 18.6L4 18L6.4 17.4L7 15Z"
                fill="url(#ai-star-gradient)"
              />
              <defs>
                <linearGradient id="ai-star-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#4ade80" />
                  <stop offset="1" stopColor="#15803d" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={currentPlaceholder + (query.length > 0 ? "" : "|")}
            disabled={isTypingEffect}
            className="w-full py-3.5 px-4 sm:px-5 text-base sm:text-lg bg-transparent text-[var(--foreground)] placeholder-[var(--muted-light)] focus:outline-none focus-visible:outline-none disabled:opacity-80 font-medium"
          />

          <button
            type="submit"
            className="shrink-0 px-6 sm:px-8 py-3.5 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-display font-semibold text-base shadow-md hover:shadow-lg active:scale-[0.98] transition-all duration-150 flex items-center gap-2 cursor-pointer"
          >
            <span>Start Your Plan</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </form>

      {/* Suggestion Cards Grid */}
      <div ref={suggestionsRef} className="mt-12 text-left">
        <div className="relative flex items-center justify-center mb-6">
          <span className="w-16 h-[1px] bg-stone-800 hidden sm:inline-block mr-3" />
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--muted)] text-center">
            Or Choose A Goal
          </p>
          <span className="w-16 h-[1px] bg-stone-800 hidden sm:inline-block ml-3" />
        </div>
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

        {/* Checkmarks below cards (mirrors exact image checkmarks) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-semibold text-[var(--muted)]">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[var(--foreground)]">Free expert advice</span>
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[var(--foreground)]">Customized growth plan</span>
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[var(--foreground)]">No obligation</span>
          </span>
        </div>
      </div>
    </section>
  );
}
