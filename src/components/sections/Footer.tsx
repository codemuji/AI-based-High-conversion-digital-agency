"use client";

import React from "react";
import Link from "next/link";
import type { Category } from "@/lib/intent-engine";
import { SERVICES_DROPDOWN_GROUPS } from "@/lib/services-dropdown-data";
import { USE_CASES_DATA } from "@/lib/use-cases-data";

interface FooterProps {
  onStartOnboarding?: (category?: Category, query?: string) => void;
}

export function Footer({ onStartOnboarding }: FooterProps) {
  return (
    <footer id="contact" className="bg-[#0f0d0c] text-stone-300 border-t border-stone-800/80 pt-12 sm:pt-16 pb-12 px-4 sm:px-6 lg:px-8 mt-auto relative overflow-hidden selection:bg-[#4ade80] selection:text-black font-sans text-sm">
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5 pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-[#22c55e]/10 rounded-full blur-3xl pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* TOP LEVEL: ARCHITECTURAL MEGA GRID (5 COLUMNS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 border-b border-stone-800/80">
          
          {/* COLUMN 1: BRAND ARCHITECTURE & DIRECT HOTLINE (Span 4 on Large) */}
          <div className="lg:col-span-4 space-y-6 md:pr-6">
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 rounded-full bg-[#4ade80] shadow-[0_0_12px_#4ade80]" />
              <span className="font-display font-black text-2xl text-white tracking-tight">
                India Web Designs
              </span>
            </div>

            <p className="text-sm text-stone-400 leading-relaxed">
              Helping high-growth Indian businesses engineer, automate, and dominate their online presence without technical debt, slow load times, or bloated agency fees.
            </p>

            {/* Direct Channel Pills */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-3 text-xs font-display text-stone-300">
                <span className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-base shrink-0">
                  📞
                </span>
                <div>
                  <span className="text-stone-500 block text-[10px] uppercase font-bold">Direct Hotline</span>
                  <a href="tel:+919876543210" className="hover:text-[#4ade80] font-semibold transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs font-display text-stone-300">
                <span className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-base shrink-0">
                  💬
                </span>
                <div>
                  <span className="text-stone-500 block text-[10px] uppercase font-bold">WhatsApp Support</span>
                  <a
                    href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20scope%20a%20project%20with%20India%20Web%20Designs."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#4ade80] font-semibold transition-colors"
                  >
                    Chat Instantly (Under 5 mins)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs font-display text-stone-300">
                <span className="w-8 h-8 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-base shrink-0">
                  ✉️
                </span>
                <div>
                  <span className="text-stone-500 block text-[10px] uppercase font-bold">RFP &amp; Specifications</span>
                  <a href="mailto:hello@codemuji.com" className="hover:text-[#4ade80] font-semibold transition-colors">
                    hello@codemuji.com
                  </a>
                </div>
              </div>
            </div>

            {/* Scoping CTA Pill */}
            <div className="pt-3">
              <button
                type="button"
                onClick={() => onStartOnboarding?.("Website", "General Project Inquiry")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-900 hover:bg-[#4ade80] border border-stone-800 hover:border-[#4ade80] text-xs font-display font-bold uppercase tracking-wider text-stone-200 hover:text-black transition-all shadow-md group cursor-pointer"
              >
                <span>Launch 4-Question Scoping Modal</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* COLUMN 2: 01 // WEB DESIGN & STORES (Span 2 on Large) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[#4ade80] block pb-2 border-b border-stone-800/60">
              Web Design
            </span>
            <ul className="space-y-3 font-display text-xs">
              {SERVICES_DROPDOWN_GROUPS[0].items.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/${service.id}`}
                    className="group flex items-center justify-between py-0.5 text-stone-400 hover:text-white transition-all"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{service.title}</span>
                    {service.badge && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#4ade80]/15 text-[#4ade80] font-bold border border-[#4ade80]/30 shrink-0 ml-2">
                        {service.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: 02 // DIGITAL MARKETING (Span 2 on Large) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[#4ade80] block pb-2 border-b border-stone-800/60">
              Marketing
            </span>
            <ul className="space-y-3 font-display text-xs">
              {SERVICES_DROPDOWN_GROUPS[1].items.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/${service.id}`}
                    className="group flex items-center justify-between py-0.5 text-stone-400 hover:text-white transition-all"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{service.title}</span>
                    {service.badge && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#4ade80]/15 text-[#4ade80] font-bold border border-[#4ade80]/30 shrink-0 ml-2">
                        {service.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: 03 // CUSTOM SOLUTIONS & APPS (Span 2 on Large) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[#4ade80] block pb-2 border-b border-stone-800/60">
              Software &amp; Apps
            </span>
            <ul className="space-y-3 font-display text-xs">
              {SERVICES_DROPDOWN_GROUPS[2].items.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/${service.id}`}
                    className="group flex items-center justify-between py-0.5 text-stone-400 hover:text-white transition-all"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{service.title}</span>
                    {service.badge && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-stone-800 text-stone-300 font-bold border border-stone-700 shrink-0 ml-2">
                        {service.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 5: 04 // ENGINEERED ROADMAPS & MODELS (Span 2 on Large) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-display text-xs font-bold uppercase tracking-[0.15em] text-[#4ade80] block pb-2 border-b border-stone-800/60">
              Growth Roadmaps
            </span>
            <ul className="space-y-3 font-display text-xs">
              {USE_CASES_DATA.slice(0, 5).map((model) => (
                <li key={model.slug}>
                  <Link
                    href={`/use-cases/${model.slug}`}
                    className="group flex items-center justify-between py-0.5 text-stone-400 hover:text-white transition-all"
                  >
                    <span className="group-hover:translate-x-1 transition-transform truncate">{model.vertical}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#growth-roadmap"
                  className="group flex items-center justify-between py-0.5 text-[#4ade80] font-bold hover:underline"
                >
                  <span>View All Scale Tiers →</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* MIDDLE BAR: QUICK NAVIGATION & ASSURANCE STRIP */}
        <div className="py-8 border-b border-stone-800/80 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-display text-stone-400">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <a href="/#services" className="hover:text-white transition-colors">
              All Services
            </a>
            <a href="/#growth-roadmap" className="hover:text-white transition-colors">
              Scale Roadmaps
            </a>
            <a href="/#use-cases" className="hover:text-white transition-colors">
              Industry Models
            </a>
            <Link href="/process" className="hover:text-white transition-colors">
              Our Process
            </Link>
            <Link href="/work" className="hover:text-white transition-colors">
              Case Studies &amp; Work
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About The Studio
            </Link>
            <a href="/#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
            <a href="/#contact" className="hover:text-[#4ade80] font-bold transition-colors">
              Direct Contact
            </a>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900 border border-stone-800 text-[11px] text-stone-300">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span>100% In-House Architectural Engineering</span>
          </div>
        </div>

        {/* BOTTOM ARCHITECTURAL STRIP */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-display text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} India Web Designs. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>System Status:</span>
            <span className="text-[#4ade80] font-semibold">Operational (99.99% Uptime)</span>
          </div>

          <div className="text-center sm:text-right text-stone-400">
            Engineered in India &bull; <span className="text-stone-300 font-semibold">Powered by India Web Designs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
