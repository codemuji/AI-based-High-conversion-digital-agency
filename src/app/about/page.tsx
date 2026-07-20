import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "About The Studio | India Web Designs",
  description: "Learn about India Web Designs, our in-house engineering philosophy, and our 4 non-negotiable guarantees for sub-0.8s edge performance and 100% IP ownership.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col font-sans selection:bg-[var(--accent)] selection:text-white animate-fadeIn">
      <Navbar />

      {/* High-Impact Studio Philosophy Hero Section (Viewport-Aligned) */}
      <section className="relative min-h-[calc(100vh-4rem)] pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center border-b border-[var(--surface-border)] overflow-hidden">
        {/* Base Light Luminous Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[#fdfcf9] to-[#f4f7f5] -z-20" />
        <div className="absolute -top-40 left-1/3 w-[700px] h-[700px] bg-[var(--accent)]/10 rounded-full blur-[165px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[145px] pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none -z-10" />

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-8">
          {/* Left Column: Studio Typography & Non-Negotiable Guarantees */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-stone-200/90 shadow-sm text-xs font-mono font-bold text-[var(--foreground)] tracking-wider uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
              <span>STUDIO PHILOSOPHY // 100% IN-HOUSE ARCHITECTS</span>
            </div>

            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-[var(--foreground)] tracking-tight leading-[1.02]">
              Senior architects. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--foreground)] via-stone-700 to-[var(--accent)]">
                Zero middleman bloat.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[var(--muted)] max-w-2xl font-normal leading-relaxed">
              We engineered India Web Designs to solve the two most infuriating bottlenecks in digital agencies: slow communication and fragile, insecure website code. You work directly with senior full-stack engineers who own your outcome.
            </p>

            {/* Studio Principle Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl pt-2">
              <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs">
                <span className="font-display font-black text-2xl sm:text-3xl text-[var(--foreground)] block">100%</span>
                <span className="font-mono text-[11px] font-bold text-[var(--accent)] uppercase mt-1 block">In-House Code</span>
                <span className="text-[11px] text-[var(--muted)]">Zero outsourced bloat</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs">
                <span className="font-display font-black text-2xl sm:text-3xl text-[var(--accent)] block">Direct</span>
                <span className="font-mono text-[11px] font-bold text-[var(--foreground)] uppercase mt-1 block">Engineer Access</span>
                <span className="text-[11px] text-[var(--muted)]">No account manager telephone</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs col-span-2 sm:col-span-1">
                <span className="font-display font-black text-2xl sm:text-3xl text-[var(--foreground)] block">0%</span>
                <span className="font-mono text-[11px] font-bold text-emerald-600 uppercase mt-1 block">Commission Cut</span>
                <span className="text-[11px] text-[var(--muted)]">Lifetime zero revenue share</span>
              </div>
            </div>

            {/* Pill CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#about"
                className="px-8 py-4 rounded-full bg-[var(--accent)] hover:bg-[#15803d] text-white font-display font-bold text-base tracking-wide transition-all shadow-lg hover:shadow-[0_0_25px_rgba(22,163,74,0.35)] hover:-translate-y-0.5"
              >
                Explore Studio Guarantees ↓
              </a>
              <Link
                href="/#contact"
                className="px-7 py-4 rounded-full bg-white hover:bg-stone-50 text-[var(--foreground)] border border-stone-200 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
              >
                Schedule Scoping Call &rarr;
              </Link>
            </div>
          </div>

          {/* Right Column: Dynamic SVG Tech Stack & Architecture Blueprint */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[460px] lg:min-h-[560px]">
            {/* Background Tech Stack Matrix SVG */}
            <svg className="absolute w-[560px] h-[560px] opacity-45 text-stone-400 pointer-events-none" viewBox="0 0 600 600" fill="none">
              {/* Studio Golden Ratio Rings & Grid */}
              <circle cx="300" cy="300" r="260" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
              <circle cx="300" cy="300" r="190" stroke="currentColor" strokeWidth="1" />
              <circle cx="300" cy="300" r="120" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
              <rect x="150" y="150" width="300" height="300" stroke="currentColor" strokeWidth="1" opacity="0.3" rx="20" />
              <path d="M150,300 L450,300 M300,150 L300,450" stroke="#16a34a" strokeWidth="2" opacity="0.4" />
            </svg>

            {/* Tech Stack Nodes floating on SVG */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute top-[18%] left-[20%] px-3.5 py-1.5 rounded-xl bg-stone-900 text-white font-mono text-xs font-bold shadow-md border border-stone-800 animate-pulse">
                Next.js 15 App Router
              </div>
              <div className="absolute top-[26%] right-[16%] px-3 py-1.5 rounded-xl bg-[var(--accent)] text-white font-mono text-xs font-bold shadow-md">
                React 19 Server Components
              </div>
              <div className="absolute bottom-[24%] left-[16%] px-3 py-1.5 rounded-xl bg-white border border-stone-300 text-stone-800 font-mono text-xs font-bold shadow-md">
                Tailwind CSS Tokens
              </div>
              <div className="absolute bottom-[18%] right-[20%] px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white font-mono text-xs font-bold shadow-lg">
                Cloudflare / Vercel Edge
              </div>
            </div>

            {/* Central Glass HUD Card Stack */}
            <div className="relative z-20 w-full max-w-sm space-y-4 pointer-events-auto">
              {/* HUD Card 1: Senior Engineers Only */}
              <div className="p-5 rounded-3xl bg-white/95 backdrop-blur-xl border border-stone-200/90 shadow-xl space-y-3 hover:border-[var(--accent)] transition-all">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-mono text-[10px] font-bold border border-emerald-200">
                    TEAM ARCHITECTURE VERIFIED
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-stone-500">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>ELITE TIER</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-black text-lg text-[var(--foreground)]">
                    Senior Full-Stack Engineers Only
                  </h3>
                  <p className="text-xs text-[var(--muted)] mt-1 leading-relaxed">
                    No junior account managers, no telephone tag. Your scoping call, system architecture, and production code are led 100% by senior developers.
                  </p>
                </div>
              </div>

              {/* HUD Card 2: Native Indian Payment & Compliance Ledger */}
              <div className="p-5 rounded-3xl bg-stone-900 text-white border border-stone-800 shadow-2xl space-y-3 hover:border-emerald-500/50 transition-all">
                <div className="flex items-center justify-between font-mono text-[11px] text-stone-400">
                  <span>INDIAN COMMERCE ENGINE</span>
                  <span className="text-[#4ade80] font-bold">100% COMPLIANT</span>
                </div>
                <div className="p-3 rounded-xl bg-stone-950/80 border border-stone-800 font-mono text-[11px] space-y-1.5 text-stone-300">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white font-semibold">Razorpay / Cashfree UPI Engine</span>
                    <span className="text-emerald-400">0ms Latency</span>
                  </div>
                  <div className="text-stone-400 text-[11px]">
                    Automated GST invoicing, local SMS/WhatsApp triggers, and RBI data norms baked directly into your core.
                  </div>
                </div>
              </div>

              {/* HUD Card 3: Complete IP Ownership Guarantee */}
              <div className="p-4 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 backdrop-blur-md flex items-center justify-between font-mono text-xs font-bold text-[var(--foreground)]">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-[var(--accent)] text-white flex items-center justify-center text-sm shrink-0">✓</span>
                  <span>Complete Source Code &amp; IP Handover</span>
                </div>
                <span className="text-[10px] text-[var(--accent)]">100% YOURS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  );
}
