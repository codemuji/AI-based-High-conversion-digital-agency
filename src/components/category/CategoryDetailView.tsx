"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SERVICES_DROPDOWN_GROUPS, type ServiceDropdownGroup } from "@/lib/services-dropdown-data";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";
import { RecognitionMarquee } from "@/components/sections/RecognitionMarquee";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { OnboardingModal, type LeadSubmissionPayload } from "@/components/modal/OnboardingModal";
import { submitLeadAction } from "@/app/actions";

interface CategoryDetailViewProps {
  slug: string;
}

export function CategoryDetailView({ slug }: CategoryDetailViewProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialQuery, setInitialQuery] = useState("");

  const group: ServiceDropdownGroup | undefined = SERVICES_DROPDOWN_GROUPS.find(
    (g) => g.id === slug
  );

  if (!group) {
    return (
      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col justify-center items-center p-8 font-sans">
        <Navbar />
        <div className="text-center py-20">
          <h1 className="font-display font-black text-3xl sm:text-4xl">Category Not Found</h1>
          <p className="mt-2 text-stone-500 text-sm">The category you are looking for does not exist.</p>
          <Link
            href="/"
            className="mt-6 inline-block px-6 py-3 rounded-full bg-[var(--accent)] text-white font-bold text-xs uppercase"
          >
            Back to Home
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const handleStartOnboarding = (query = "") => {
    setInitialQuery(query || group.name);
    setIsModalOpen(true);
  };

  const handleModalSubmit = async (payload: LeadSubmissionPayload) => {
    await submitLeadAction(payload);
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col font-sans selection:bg-[var(--accent)] selection:text-white">
      <Navbar onStartOnboarding={() => handleStartOnboarding()} />

      {/* 1. HERO SECTION (FULL-BLEED LUMINOUS GRADIENT HERO) */}
      <section className="relative w-full py-16 sm:py-24 overflow-hidden border-b border-[var(--surface-border)] isolate">
        {/* Base Light Rich Luminous Gradient Background & Ambient Glowing Color Orbs */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4fbf6] via-[#e6f7ec] to-[#d8f3e2] -z-20 pointer-events-none" />
        <div className="absolute -top-32 left-1/4 w-[650px] h-[650px] bg-gradient-to-br from-[#16a34a]/35 via-[#22c55e]/30 to-[#4ade80]/25 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />
        <div className="absolute -bottom-20 right-10 w-[550px] h-[550px] bg-gradient-to-tl from-[#15803d]/30 via-[#22c55e]/25 to-[#86efac]/25 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-textured-dot-grid opacity-75 mask-radial-vignette pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Top Monospace Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-stone-200/90 shadow-2xs text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)] mx-auto">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
              <span className="text-[var(--foreground)]">{group.columnNumber} // {group.name.toUpperCase()} CATEGORY HUB</span>
              <span className="text-stone-300">•</span>
              <span className="text-[var(--accent)] font-bold">{group.items.length} Production Services</span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[var(--foreground)] tracking-tight leading-[1.05]">
              {group.name}{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-stone-900 via-[var(--accent)] to-[#15803d]">
                Solutions &amp; Architecture.
              </span>
            </h1>

            {/* Tagline / Subhead */}
            <p className="text-base sm:text-xl text-[var(--muted)] leading-relaxed font-normal max-w-2xl mx-auto">
              {group.tagline}. Explore our full lineup of {group.items.length} specialized engineering services below, built specifically for high-growth Indian businesses.
            </p>

            {/* Quick Stat Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto">
              <div className="p-3.5 rounded-2xl bg-white/90 border border-stone-200/80 shadow-xs">
                <span className="font-display font-black text-xl sm:text-2xl text-[var(--foreground)] block">
                  {group.items.length} Services
                </span>
                <span className="font-mono text-[10px] font-bold text-[var(--accent)] uppercase mt-0.5 block">
                  100% In-House
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/90 border border-stone-200/80 shadow-xs">
                <span className="font-display font-black text-xl sm:text-2xl text-[var(--accent)] block">
                  Sub-0.8s
                </span>
                <span className="font-mono text-[10px] font-bold text-[var(--foreground)] uppercase mt-0.5 block">
                  Edge Load SLA
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/90 border border-stone-200/80 shadow-xs col-span-2 sm:col-span-1">
                <span className="font-display font-black text-xl sm:text-2xl text-[var(--foreground)] block">
                  100%
                </span>
                <span className="font-mono text-[10px] font-bold text-emerald-600 uppercase mt-0.5 block">
                  Code Ownership
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => handleStartOnboarding(`Scope ${group.name} Project`)}
                className="px-6 py-3.5 rounded-xl bg-[var(--accent)] hover:bg-[#15803d] text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105 cursor-pointer"
              >
                Scope {group.name} Project ⚡
              </button>
              <a
                href="#services-list"
                className="px-6 py-3.5 rounded-xl bg-white/90 hover:bg-stone-50 border border-stone-200 text-[var(--foreground)] font-display font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
              >
                Browse Services Below ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RECOGNITION MARQUEE */}
      <RecognitionMarquee />

      {/* 3. CATEGORY SERVICES GRID */}
      <section id="services-list" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[var(--surface-border)] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--surface-border)] shadow-2xs text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--muted)] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span>CATEGORY CATALOG // {group.name.toUpperCase()}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--foreground)] tracking-tight">
              All {group.name} Services ({group.items.length})
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[var(--muted)] max-w-md">
            Click on any service card below to view detailed specifications, scope breakdown, delivery timelines, and pricing packages.
          </p>
        </div>

        {/* 5-Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {group.items.map((item, index) => (
            <div
              key={item.id}
              className="group relative p-6 sm:p-7 rounded-2xl bg-[var(--surface)] border border-[var(--surface-border)] hover:border-[var(--accent)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Background Texture */}
              <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity" />

              <div>
                {/* Header Row: Index & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-xs font-bold text-[var(--muted)]">
                    0{index + 1} // {item.category}
                  </span>
                  {item.badge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[var(--accent)] text-white font-mono text-[9px] uppercase font-bold tracking-wider shadow-xs">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-[var(--muted)] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Card Footer Details */}
              <div className="mt-6 pt-5 border-t border-[var(--surface-border)] space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="text-[10px] text-stone-500 block uppercase font-bold">
                      {item.startingPrice ? "Starts From" : "Timeline"}
                    </span>
                    <span className="font-bold text-[var(--foreground)]">
                      {item.startingPrice || item.timeline}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-stone-500 block uppercase font-bold">Performance SLA</span>
                    <span className="font-bold text-[var(--accent)]">{item.metrics}</span>
                  </div>
                </div>

                <Link
                  href={`/${item.id}`}
                  className="w-full py-3 px-4 rounded-xl bg-[var(--background)] hover:bg-[var(--accent)] text-[var(--foreground)] hover:text-white border border-[var(--surface-border)] font-display text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-between group/btn cursor-pointer"
                >
                  <span>Explore Service Details</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. OTHER CATEGORIES SWITCHER BAR */}
      <section className="py-12 bg-stone-900 text-stone-100 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#4ade80] block mb-1">
              Explore More Categories
            </span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              Navigate Other Service Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {SERVICES_DROPDOWN_GROUPS.map((g) => {
              const isActive = g.id === group.id;
              return (
                <Link
                  key={g.id}
                  href={`/category/${g.id}`}
                  className={`p-3.5 rounded-xl border text-center transition-all ${
                    isActive
                      ? "bg-[var(--accent)] text-white border-[var(--accent)] shadow-md"
                      : "bg-stone-950/60 border-stone-800 text-stone-300 hover:border-stone-600 hover:text-white"
                  }`}
                >
                  <span className="font-mono text-[10px] block opacity-70 mb-0.5">{g.columnNumber}</span>
                  <strong className="font-display text-xs font-bold block truncate">{g.name}</strong>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS & FAQ */}
      <TestimonialsSection />
      <FAQSection />

      {/* 6. CONVERSION CTA */}
      <CTASection onStartOnboarding={() => handleStartOnboarding()} />

      <Footer />

      {/* Onboarding Intake Modal */}
      <OnboardingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        category="Website"
        initialQuery={initialQuery}
        onSubmit={handleModalSubmit}
      />
    </main>
  );
}
