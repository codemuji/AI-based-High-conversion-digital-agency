"use client";

import React from "react";

interface RecognitionItem {
  name: string;
  badge: string;
  logoUrl: string;
}

const RECOGNITION_LOGOS: RecognitionItem[] = [
  {
    name: "DPIIT - Startup India",
    badge: "Govt. of India DPIIT Recognized",
    logoUrl: "https://www.startupindia.gov.in/content/dam/invest-india/newhomepage/DPIIT-header.png",
  },
  {
    name: "Startup Assam",
    badge: "Govt. of Assam Recognized",
    logoUrl: "https://startup.assam.gov.in/wp-content/themes/startupassam/images/logo.png",
  },
  {
    name: "Ministry of MSME",
    badge: "Ministry of MSME Govt. of India",
    logoUrl: "https://www.msme.gov.in/static/uploads/2025/06/3b95c999bc86195fb00f36a0ce88b19d.jpg",
  },
  {
    name: "MSME India",
    badge: "Registered MSME Enterprise",
    logoUrl: "https://www.msme.gov.in/static/uploads/2025/06/cb50214f70ce7fdc906077eb3e254119.png",
  },
  {
    name: "IIM CIP - NEEDP",
    badge: "IIM Calcutta Innovation Park",
    logoUrl: "https://iimcip.com/needp/public/assets/frontend/images/needp2022.jpg",
  },
];

export function RecognitionMarquee() {
  return (
    <section className="relative py-4 sm:py-5 border-t border-b border-[var(--surface-border)] bg-[var(--surface)]/40 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-2 sm:mb-3">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[var(--accent-subtle)] border border-[var(--accent)]/30 text-[10px] font-display font-bold tracking-wider uppercase text-[var(--accent)] mb-1">
          <span>Official Government Accreditations &amp; Institutional Recognition</span>
        </div>
        <h2 className="text-[11px] sm:text-xs font-display font-bold uppercase tracking-wider text-[var(--muted)]">
          Recognized by Government Initiatives &amp; Academic Innovation Parks
        </h2>
      </div>

      {/* Marquee Track Container with Gradient Edge Masking */}
      <div className="relative w-full overflow-hidden py-1">
        {/* Left & Right Shadow Fade Overlays */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />

        {/* Infinite Scrolling Track */}
        <div className="animate-marquee items-center gap-8 sm:gap-14 py-1">
          {[...RECOGNITION_LOGOS, ...RECOGNITION_LOGOS, ...RECOGNITION_LOGOS].map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              title={`${item.name} • ${item.badge}`}
              className="group flex items-center justify-center p-2 rounded-xl hover:bg-[var(--surface)]/80 hover:scale-105 transition-all duration-300 shrink-0 cursor-default opacity-90 hover:opacity-100 drop-shadow-xs"
            >
              <div className="h-8 sm:h-10 px-3 flex items-center justify-center bg-white/90 rounded-lg p-1.5 border border-stone-200/80 shadow-xs">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.logoUrl}
                  alt={item.name}
                  className="max-h-6 sm:max-h-8 w-auto object-contain filter hover:filter-none transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
