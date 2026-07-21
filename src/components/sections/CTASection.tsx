"use client";

import React from "react";
import type { Category } from "@/lib/intent-engine";

interface CTASectionProps {
  onStartOnboarding?: (category?: Category, query?: string) => void;
}

export function CTASection({ onStartOnboarding }: CTASectionProps) {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto font-sans text-sm">
      <div className="relative rounded-2xl bg-[#141210] border border-stone-800 p-6 sm:p-8 lg:p-10 text-[#fefcf9] shadow-xl overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#4ade80]/10 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#ef4444]/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          {/* Tag */}
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#4ade80]/10 text-[#4ade80] font-display text-[11px] font-bold uppercase tracking-wider border border-[#4ade80]/25 mb-4">
            Immediate Competitive Advantage
          </span>

          {/* Headline */}
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-snug text-white">
            Stop losing customers to slow websites &amp; outdated tech.
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-xs sm:text-sm text-stone-300 leading-relaxed max-w-xl mx-auto">
            We build custom digital platforms, high-speed mobile apps, and workflow portals that automate your daily workload and scale your revenue—without confusing tech jargon.
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => onStartOnboarding?.("Website", "Custom High-Conversion Architecture")}
              className="px-6 py-3 rounded-xl bg-[#4ade80] text-[#141210] font-display text-xs font-bold uppercase tracking-wider hover:bg-[#22c55e] transition-all shadow-md shadow-[#4ade80]/20 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Launch Project Scoping Modal ⚡</span>
            </button>

            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20looking%20to%20engineer%20a%20custom%20website%20or%20software%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-stone-900/90 hover:bg-stone-800 border border-stone-700 text-white font-display text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
            >
              <span>WhatsApp Senior Engineer 💬</span>
            </a>
          </div>

          {/* Micro-Trust Badges */}
          <div className="mt-8 pt-5 border-t border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-3 text-[11px] font-display font-semibold text-stone-400">
            <div className="flex items-center justify-center gap-1.5">
              <span className="text-[#4ade80]">✓</span>
              <span>Sub-0.8s Load Speed</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <span className="text-[#4ade80]">✓</span>
              <span>100% Custom Code</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <span className="text-[#4ade80]">✓</span>
              <span>Fixed Timelines</span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <span className="text-[#4ade80]">✓</span>
              <span>Zero Bloated Plugins</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
