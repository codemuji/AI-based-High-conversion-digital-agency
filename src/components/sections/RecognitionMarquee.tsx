"use client";

import React from "react";
import {
  SiGooglecloud,
  SiMeta,
  SiShopify,
  SiRazorpay,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

interface RecognitionItem {
  name: string;
  badge: string;
  icon: React.ReactNode;
}

const RECOGNITION_LOGOS: RecognitionItem[] = [
  {
    name: "Startup India",
    badge: "Govt. of India Recognized",
    icon: (
      <svg className="w-11 h-11 sm:w-14 sm:h-14 text-[#16a34a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Google Cloud",
    badge: "Verified Partner Agency",
    icon: <SiGooglecloud className="w-11 h-11 sm:w-14 sm:h-14 text-[#4285F4]" />,
  },
  {
    name: "MSME Udyam",
    badge: "Registered Govt. Enterprise",
    icon: (
      <svg className="w-11 h-11 sm:w-14 sm:h-14 text-[#d97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    ),
  },
  {
    name: "Meta Business",
    badge: "Official WhatsApp & Ads Partner",
    icon: <SiMeta className="w-11 h-11 sm:w-14 sm:h-14 text-[#0064E0]" />,
  },
  {
    name: "Shopify Partner",
    badge: "Verified E-Commerce Experts",
    icon: <SiShopify className="w-11 h-11 sm:w-14 sm:h-14 text-[#95BF47]" />,
  },
  {
    name: "AWS Activate",
    badge: "Cloud Architecture Partner",
    icon: <FaAws className="w-11 h-11 sm:w-14 sm:h-14 text-[#FF9900]" />,
  },
  {
    name: "Razorpay",
    badge: "Payment Growth Partner",
    icon: <SiRazorpay className="w-11 h-11 sm:w-14 sm:h-14 text-[#0284c7]" />,
  },
  {
    name: "Make in India",
    badge: "National Digital Initiative",
    icon: (
      <svg className="w-11 h-11 sm:w-14 sm:h-14 text-[#dc2626]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export function RecognitionMarquee() {
  return (
    <section className="relative py-12 border-t border-b border-[var(--surface-border)] bg-[var(--surface)]/40 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-subtle)] border border-[var(--accent)]/30 text-[11px] font-display font-bold tracking-wider uppercase text-[var(--accent)] mb-2">
          <span>Official Accreditations &amp; Partner Ecosystem</span>
        </div>
        <h2 className="text-xs font-display font-bold uppercase tracking-wider text-[var(--muted)]">
          Recognized by Government Initiatives &amp; Trusted by Leading Digital Platforms Across India
        </h2>
      </div>

      {/* Marquee Track Container with Gradient Edge Masking */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right Shadow Fade Overlays */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />

        {/* Infinite Scrolling Track (Pure Logo Marks Only) */}
        <div className="animate-marquee items-center gap-14 sm:gap-24 py-2">
          {[...RECOGNITION_LOGOS, ...RECOGNITION_LOGOS].map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              title={`${item.name} • ${item.badge}`}
              className="group flex items-center justify-center p-3 sm:p-4 rounded-2xl hover:bg-[var(--surface)]/80 hover:scale-110 transition-all duration-300 shrink-0 cursor-default opacity-85 hover:opacity-100 drop-shadow-sm hover:drop-shadow-md"
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
