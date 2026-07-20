import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Verified Case Studies & Work | India Web Designs",
  description: "Explore our verified production case studies showing how high-speed digital architecture helps Indian businesses double conversions and scale operations.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col font-sans selection:bg-[var(--accent)] selection:text-white animate-fadeIn">
      <Navbar />

      {/* High-Impact Architectural Telemetry Hero Section (Viewport-Aligned) */}
      <section className="relative min-h-[calc(100vh-4rem)] pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center border-b border-[var(--surface-border)] overflow-hidden">
        {/* Base Light Luminous Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[#fdfcf9] to-[#f4f7f5] -z-20" />
        <div className="absolute -top-44 right-1/4 w-[750px] h-[750px] bg-[var(--accent)]/10 rounded-full blur-[170px] pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none -z-10" />

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-8">
          {/* Left Column: Editorial Typography & Audited Impact Highlights */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-stone-200/90 shadow-sm text-xs font-mono font-bold text-[var(--foreground)] tracking-wider uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
              <span>PRODUCTION TELEMETRY // AUDITED METRICS</span>
            </div>

            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-[var(--foreground)] tracking-tight leading-[1.02]">
              Proven architectures. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--foreground)] via-stone-700 to-[var(--accent)]">
                Audited business lift.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[var(--muted)] max-w-2xl font-normal leading-relaxed">
              We replace sluggish, template-bloated websites with lightning-fast, custom Next.js engineering. Explore our verified production case studies across Indian e-commerce, EdTech, healthcare, and B2B logistics.
            </p>

            {/* Audited Impact Metric Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl pt-2">
              <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs">
                <span className="font-display font-black text-2xl sm:text-3xl text-[var(--accent)] block">+180%</span>
                <span className="font-mono text-[11px] font-bold text-[var(--foreground)] uppercase mt-1 block">Fee &amp; Order Lift</span>
                <span className="text-[11px] text-[var(--muted)]">Apex Fashion &amp; Academy</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs">
                <span className="font-display font-black text-2xl sm:text-3xl text-[var(--foreground)] block">0.74s</span>
                <span className="font-mono text-[11px] font-bold text-[var(--accent)] uppercase mt-1 block">Edge Load SLA</span>
                <span className="text-[11px] text-[var(--muted)]">Core Web Vitals 100/100</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs col-span-2 sm:col-span-1">
                <span className="font-display font-black text-2xl sm:text-3xl text-emerald-600 block">₹3.2L</span>
                <span className="font-mono text-[11px] font-bold text-[var(--foreground)] uppercase mt-1 block">Monthly Savings</span>
                <span className="text-[11px] text-[var(--muted)]">LogiTrack Express Fleet</span>
              </div>
            </div>

            {/* Pill CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#work"
                className="px-8 py-4 rounded-full bg-[var(--accent)] hover:bg-[#15803d] text-white font-display font-bold text-base tracking-wide transition-all shadow-lg hover:shadow-[0_0_25px_rgba(22,163,74,0.35)] hover:-translate-y-0.5"
              >
                Inspect Case Studies ↓
              </a>
              <Link
                href="/#contact"
                className="px-7 py-4 rounded-full bg-white hover:bg-stone-50 text-[var(--foreground)] border border-stone-200 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
              >
                Scope Similar Architecture &rarr;
              </Link>
            </div>
          </div>

          {/* Right Column: Dynamic SVG Telemetry & Conversion Engine Visualizer */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[460px] lg:min-h-[560px]">
            {/* Background Conversion Curve & Telemetry Grid SVG */}
            <svg className="absolute w-[560px] h-[560px] opacity-45 text-stone-400 pointer-events-none" viewBox="0 0 600 600" fill="none">
              {/* Telemetry Radar Rings */}
              <circle cx="300" cy="300" r="260" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="300" cy="300" r="180" stroke="currentColor" strokeWidth="1" />
              <circle cx="300" cy="300" r="100" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="300" y1="40" x2="300" y2="560" stroke="currentColor" strokeWidth="1" opacity="0.3" />
              <line x1="40" y1="300" x2="560" y2="300" stroke="currentColor" strokeWidth="1" opacity="0.3" />

              {/* High-Contrast Conversion Spike Curve */}
              <path d="M60,480 Q180,450 260,340 T460,120 L540,80" stroke="#16a34a" strokeWidth="4" strokeLinecap="round" />
              <path d="M60,480 Q180,450 260,340 T460,120 L540,80 L540,480 Z" fill="url(#telemetryGrad)" opacity="0.15" />
              <defs>
                <linearGradient id="telemetryGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#16a34a" />
                  <stop offset="100%" stopColor="#16a34a" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>

            {/* Glowing Edge Node Badges on SVG Curve */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute top-[16%] right-[16%] p-2.5 rounded-xl bg-emerald-600 text-white font-mono text-xs font-bold shadow-lg animate-pulse">
                +180% CONVERSION PEAK
              </div>
              <div className="absolute bottom-[28%] left-[24%] p-2 rounded-lg bg-stone-900 text-stone-300 font-mono text-[11px] shadow-md border border-stone-800">
                Legacy WordPress Baseline (4.8s)
              </div>
            </div>

            {/* Central Glass HUD Card Stack */}
            <div className="relative z-20 w-full max-w-sm space-y-4 pointer-events-auto">
              {/* HUD Card 1: Audited Speed Performance Score */}
              <div className="p-5 rounded-3xl bg-white/95 backdrop-blur-xl border border-stone-200/90 shadow-xl space-y-3 hover:border-[var(--accent)] transition-all">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-mono text-[10px] font-bold border border-emerald-200">
                    CORE WEB VITALS 100/100
                  </span>
                  <span className="font-mono text-xs font-black text-stone-900">0.74s LCP</span>
                </div>
                <div className="flex items-center justify-between gap-3 pt-1">
                  <div className="flex-1">
                    <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[98%] rounded-full" />
                    </div>
                  </div>
                  <span className="font-mono text-[11px] text-emerald-700 font-bold">GRADE A+</span>
                </div>
              </div>

              {/* HUD Card 2: Revenue & Scale Verification */}
              <div className="p-5 rounded-3xl bg-stone-900 text-white border border-stone-800 shadow-2xl space-y-3 hover:border-emerald-500/50 transition-all">
                <div className="flex items-center justify-between font-mono text-[11px] text-stone-400">
                  <span>AUDITED GMV MILESTONE</span>
                  <span className="text-[#4ade80] font-bold">VERIFIED BY STRIPE/RAZORPAY</span>
                </div>
                <div className="flex items-baseline justify-between pt-1">
                  <div>
                    <span className="font-display font-black text-3xl text-white">₹40,00,000+</span>
                    <span className="text-xs text-stone-400 block mt-0.5">Monthly store checkout volume post-launch</span>
                  </div>
                </div>
              </div>

              {/* HUD Card 3: Zero Crash Uptime SLA */}
              <div className="p-4 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 backdrop-blur-md flex items-center justify-between font-mono text-xs font-bold text-[var(--foreground)]">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-[var(--accent)] text-white flex items-center justify-center text-sm shrink-0">⚡</span>
                  <span>99.99% Production Edge Uptime</span>
                </div>
                <span className="text-[10px] text-[var(--accent)]">ZERO DOWNTIME</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CaseStudiesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
