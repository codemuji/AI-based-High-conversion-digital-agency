import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Our Architectural Process | India Web Designs",
  description: "Explore our predictable, 4-step architectural engineering workflow designed around rapid iteration, absolute transparency, and sub-second edge performance.",
};

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col font-sans selection:bg-[var(--accent)] selection:text-white animate-fadeIn">
      <Navbar />

      {/* High-Impact Architectural Drafting Hero Section (Viewport-Aligned) */}
      <section className="relative min-h-[calc(100vh-4rem)] pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center border-b border-[var(--surface-border)] overflow-hidden">
        {/* Base Light Luminous Architectural Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[#fdfcf9] to-[#f4f7f5] -z-20" />
        <div className="absolute -top-40 left-1/4 w-[700px] h-[700px] bg-[var(--accent)]/10 rounded-full blur-[160px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none -z-10" />

        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-8">
          {/* Left Column: Editorial Typography & Protocol Highlights */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-stone-200/90 shadow-sm text-xs font-mono font-bold text-[var(--foreground)] tracking-wider uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
              <span>ENGINEERING PROTOCOL // 4-MILESTONE SLA</span>
            </div>

            <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-[var(--foreground)] tracking-tight leading-[1.02]">
              Predictable delivery. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--foreground)] via-stone-700 to-[var(--accent)]">
                Zero technical debt.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[var(--muted)] max-w-2xl font-normal leading-relaxed">
              We don&apos;t do vague agency retainers or endless status meetings. Every custom digital product we build follows our rigorous, SLA-backed engineering roadmap from initial scoping to edge CDN deployment.
            </p>

            {/* Interactive Timeline Quick Stage Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl pt-2">
              <div className="p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-xs flex flex-col justify-between">
                <span className="font-mono text-[10px] font-bold text-[var(--accent)] uppercase tracking-wider">Stage 01</span>
                <span className="font-display font-bold text-sm text-[var(--foreground)] mt-1">2-Hr Roadmap</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-xs flex flex-col justify-between">
                <span className="font-mono text-[10px] font-bold text-[var(--accent)] uppercase tracking-wider">Stage 02</span>
                <span className="font-display font-bold text-sm text-[var(--foreground)] mt-1">Live Previews</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-xs flex flex-col justify-between">
                <span className="font-mono text-[10px] font-bold text-[var(--accent)] uppercase tracking-wider">Stage 03</span>
                <span className="font-display font-bold text-sm text-[var(--foreground)] mt-1">2-Wk Sprints</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-stone-200/80 shadow-xs flex flex-col justify-between">
                <span className="font-mono text-[10px] font-bold text-emerald-600 uppercase tracking-wider">Stage 04</span>
                <span className="font-display font-bold text-sm text-[var(--foreground)] mt-1">Sub-0.8s Edge</span>
              </div>
            </div>

            {/* Pill CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/#contact"
                className="px-8 py-4 rounded-full bg-[var(--accent)] hover:bg-[#15803d] text-white font-display font-bold text-base tracking-wide transition-all shadow-lg hover:shadow-[0_0_25px_rgba(22,163,74,0.35)] hover:-translate-y-0.5"
              >
                Request Architecture Roadmap &rarr;
              </Link>
              <a
                href="#process"
                className="px-7 py-4 rounded-full bg-white hover:bg-stone-50 text-[var(--foreground)] border border-stone-200 font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
              >
                Inspect Protocol Stages ↓
              </a>
            </div>
          </div>

          {/* Right Column: Bespoke 4-Stage Conveyor & Blueprint Visualizer */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[460px] lg:min-h-[560px]">
            {/* Background Geometric Matrix SVG */}
            <svg className="absolute w-[560px] h-[560px] opacity-45 text-stone-400 pointer-events-none" viewBox="0 0 600 600" fill="none">
              {/* Outer Golden Ratio Blueprint Rings */}
              <circle cx="300" cy="300" r="260" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
              <circle cx="300" cy="300" r="200" stroke="currentColor" strokeWidth="1" />
              <circle cx="300" cy="300" r="140" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
              <polygon points="300,40 560,300 300,560 40,300" stroke="currentColor" strokeWidth="1" opacity="0.3" />
              <path d="M40,300 L560,300 M300,40 L300,560" stroke="currentColor" strokeWidth="1" opacity="0.4" />
              
              {/* Isometric Pipeline Tracks */}
              <path d="M120,450 L480,150" stroke="#16a34a" strokeWidth="2.5" strokeDasharray="8 8" opacity="0.7" />
              <path d="M120,150 L480,450" stroke="#16a34a" strokeWidth="1.5" opacity="0.3" />
            </svg>

            {/* Stage Nodes on SVG Blueprint */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Node 01: Top Left */}
              <div className="absolute top-[14%] left-[18%] p-3 rounded-2xl bg-white border border-stone-200 shadow-md flex items-center gap-2.5 animate-bounce" style={{ animationDuration: "5s" }}>
                <span className="w-6 h-6 rounded-lg bg-stone-900 text-white font-mono text-xs font-bold flex items-center justify-center">01</span>
                <span className="font-mono text-[11px] font-bold text-stone-700 uppercase">2Hr Scoping</span>
              </div>

              {/* Node 02: Top Right */}
              <div className="absolute top-[22%] right-[12%] p-3 rounded-2xl bg-white border border-stone-200 shadow-md flex items-center gap-2.5 animate-bounce" style={{ animationDuration: "6s", animationDelay: "1s" }}>
                <span className="w-6 h-6 rounded-lg bg-[var(--accent)] text-white font-mono text-xs font-bold flex items-center justify-center">02</span>
                <span className="font-mono text-[11px] font-bold text-stone-700 uppercase">1:1.618 Figma</span>
              </div>

              {/* Node 03: Bottom Left */}
              <div className="absolute bottom-[26%] left-[12%] p-3 rounded-2xl bg-white border border-stone-200 shadow-md flex items-center gap-2.5 animate-bounce" style={{ animationDuration: "5.5s", animationDelay: "2s" }}>
                <span className="w-6 h-6 rounded-lg bg-stone-900 text-white font-mono text-xs font-bold flex items-center justify-center">03</span>
                <span className="font-mono text-[11px] font-bold text-stone-700 uppercase">2-Wk Sprint</span>
              </div>

              {/* Node 04: Bottom Right */}
              <div className="absolute bottom-[16%] right-[18%] p-3 rounded-2xl bg-emerald-600 text-white border border-emerald-500 shadow-lg flex items-center gap-2.5 animate-bounce" style={{ animationDuration: "4.5s", animationDelay: "0.5s" }}>
                <span className="w-6 h-6 rounded-lg bg-white text-emerald-700 font-mono text-xs font-bold flex items-center justify-center">04</span>
                <span className="font-mono text-[11px] font-bold uppercase">Sub-0.8s Edge</span>
              </div>
            </div>

            {/* Central Blueprint Glass HUD Card Stack */}
            <div className="relative z-20 w-full max-w-sm space-y-4 pointer-events-auto">
              {/* HUD Card 1: Scoping SLA Guarantee */}
              <div className="p-5 rounded-3xl bg-white/95 backdrop-blur-xl border border-stone-200/90 shadow-xl space-y-3 hover:border-[var(--accent)] transition-all">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-mono text-[10px] font-bold border border-emerald-200">
                    SLA PROTOCOL VERIFIED
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-stone-500">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>GUARANTEED</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-black text-lg text-[var(--foreground)]">
                    2-Hour Scoping Specification
                  </h3>
                  <p className="text-xs text-[var(--muted)] mt-1 leading-relaxed">
                    Within 120 minutes of discovery submission, senior architects deliver your fixed-scope technical blueprint.
                  </p>
                </div>
              </div>

              {/* HUD Card 2: Live Git Commit & Sprint Preview */}
              <div className="p-5 rounded-3xl bg-stone-900 text-white border border-stone-800 shadow-2xl space-y-3 hover:border-emerald-500/50 transition-all">
                <div className="flex items-center justify-between font-mono text-[11px] text-stone-400">
                  <span>BI-WEEKLY SPRINT DEMOS</span>
                  <span className="text-[#4ade80] font-bold">100% TRANSPARENCY</span>
                </div>
                <div className="p-3 rounded-xl bg-stone-950/80 border border-stone-800 font-mono text-[11px] space-y-1 text-stone-300">
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-400">commit 8f9a2c</span>
                    <span className="text-stone-500">14m ago</span>
                  </div>
                  <div className="text-xs font-semibold text-white">
                    feat(checkout): optimize UPI edge callback latency to 42ms
                  </div>
                </div>
              </div>

              {/* HUD Card 3: Complete IP Handover Badge */}
              <div className="p-4 rounded-2xl bg-[var(--accent)]/10 border border-[var(--accent)]/30 backdrop-blur-md flex items-center justify-between font-mono text-xs font-bold text-[var(--foreground)]">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-[var(--accent)] text-white flex items-center justify-center text-sm shrink-0">✓</span>
                  <span>100% Repository &amp; IP Handover</span>
                </div>
                <span className="text-[10px] text-[var(--accent)]">ZERO LOCK-IN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  );
}
