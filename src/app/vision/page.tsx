import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Vision & Mission | India Web Designs",
  description: "Learn about the core vision, mission, and architectural principles driving India Web Designs.",
};

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col font-sans selection:bg-[var(--accent)] selection:text-white text-sm sm:text-base">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full py-16 sm:py-24 border-b border-[var(--surface-border)] overflow-hidden isolate">
        <div className="absolute inset-0 bg-textured-dot-grid opacity-75 mask-radial-vignette pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-stone-200/90 shadow-2xs text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)] mx-auto">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
            <span>OUR PURPOSE &amp; PHILOSOPHY</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl text-[var(--foreground)] tracking-tight leading-tight">
            Vision &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-900 via-[var(--accent)] to-[#15803d]">
              Mission.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-[var(--muted)] leading-relaxed font-normal max-w-2xl mx-auto">
            Empowering Indian businesses and global brands with enterprise-grade web architecture, sub-second load performance, and high-converting digital infrastructure.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 flex-1">
        {/* Vision Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-xl space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[#4ade80]/15 border border-[#4ade80]/30 text-[#15803d] font-mono text-xl font-bold flex items-center justify-center">
            🚀
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-[var(--foreground)]">
            Our Vision
          </h2>
          <p className="text-stone-600 leading-relaxed text-base sm:text-lg font-normal">
            To be India&apos;s most trusted engineering-first digital agency, recognized for eliminating outdated PHP themes, plugin bloat, and security vulnerabilities in favor of ultra-fast, custom Next.js platforms and intelligent AI automation workflows.
          </p>
        </div>

        {/* Mission Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-xl space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-600 font-mono text-xl font-bold flex items-center justify-center">
            🎯
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-[var(--foreground)]">
            Our Mission
          </h2>
          <p className="text-stone-600 leading-relaxed text-base sm:text-lg font-normal">
            To provide businesses of all sizes with transparent pricing, 100% in-house engineering expertise, sub-0.8s edge performance SLAs, and dedicated technical advisory so every digital investment generates measurable business revenue.
          </p>
        </div>

        {/* Core Values */}
        <div className="space-y-6">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-[var(--foreground)] text-center">
            Core Engineering Principles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-stone-900 text-white space-y-2 border border-stone-800">
              <h3 className="font-display font-bold text-lg text-emerald-400">1. Sub-Second Speed</h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                Page load speed directly governs conversions. We build with server components and edge CDN delivery.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-900 text-white space-y-2 border border-stone-800">
              <h3 className="font-display font-bold text-lg text-emerald-400">2. Zero Plugin Vulnerability</h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                Custom React architectures eliminate third-party PHP exploits and costly maintenance fees completely.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-900 text-white space-y-2 border border-stone-800">
              <h3 className="font-display font-bold text-lg text-emerald-400">3. Transparent Partnership</h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                Clear deliverables, structured milestones, and direct communication with senior full-stack architects.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-900 text-white space-y-2 border border-stone-800">
              <h3 className="font-display font-bold text-lg text-emerald-400">4. 24/7 Client SLA</h3>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                Dedicated WhatsApp, email, and hotline support to keep your operations running continuously.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-3xl bg-stone-900 text-white text-center space-y-4 shadow-xl border border-stone-800">
          <h3 className="font-display font-black text-2xl text-white">Ready to scope your custom project?</h3>
          <p className="text-stone-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Connect directly with senior full-stack architects at India Web Designs today.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 rounded-full bg-[var(--accent)] hover:bg-[#15803d] text-white font-display font-bold text-sm transition-all shadow-md"
            >
              Contact Technical Team &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
