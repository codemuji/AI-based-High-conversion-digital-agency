"use client";

import React from "react";
import type { Category } from "@/lib/intent-engine";

interface CTASectionProps {
  onStartOnboarding?: (category?: Category, query?: string) => void;
}

export function CTASection({ onStartOnboarding }: CTASectionProps) {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="relative rounded-[2.5rem] bg-[#141210] border border-stone-800 p-8 sm:p-14 lg:p-20 text-[#fefcf9] shadow-[0_0_80px_rgba(74,222,128,0.12)] overflow-hidden">
        {/* Background Decorative Mesh & Grid Texture */}
        <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#4ade80]/10 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#ef4444]/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Tag */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#4ade80]/10 text-[#4ade80] font-mono text-xs font-bold uppercase tracking-[0.2em] border border-[#4ade80]/25 mb-6">
            {"// IMMEDIATE COMPETITIVE ADVANTAGE"}
          </span>

          {/* Headline */}
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none text-white">
            Stop losing customers to slow websites &amp; outdated tech.
          </h2>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-stone-300 leading-relaxed max-w-2xl mx-auto">
            We build custom digital platforms, high-speed mobile apps, and workflow portals that automate your daily workload and scale your revenue—without confusing tech jargon.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onStartOnboarding?.("Website", "Custom High-Conversion Architecture")}
              className="px-8 py-4 rounded-2xl bg-[#4ade80] text-[#141210] font-mono text-sm font-bold uppercase tracking-wider hover:bg-[#22c55e] transition-all duration-300 shadow-xl shadow-[#4ade80]/20 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>Launch Project Scoping Modal ⚡</span>
            </button>

            <a
              href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20looking%20to%20engineer%20a%20custom%20website%20or%20software%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-stone-900/90 hover:bg-stone-800 border border-stone-700 text-white font-mono text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>WhatsApp Senior Engineer 💬</span>
            </a>
          </div>

          {/* Micro-Trust Badges */}
          <div className="mt-14 pt-8 border-t border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono font-semibold text-stone-400">
            <div className="flex items-center justify-center gap-2">
              <span className="text-[#4ade80]">✓</span>
              <span>Sub-0.8s Load Speed</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-[#4ade80]">✓</span>
              <span>100% Custom Code</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-[#4ade80]">✓</span>
              <span>Fixed Delivery Timelines</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-[#4ade80]">✓</span>
              <span>Zero Bloated Plugins</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
