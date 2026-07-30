import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Contact Us | India Web Designs Headquarters & Direct Hotline",
  description: "Connect directly with senior full-stack architects at India Web Designs in Guwahati, Assam. Phone: +91 70021 60093, Email: hello@codemuji.com.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col font-sans selection:bg-[var(--accent)] selection:text-white text-sm sm:text-base">
      <Navbar />

      {/* 1. Viewport-Aligned Hero Section */}
      <section className="relative w-full py-16 sm:py-24 border-b border-[var(--surface-border)] overflow-hidden isolate">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4fbf6] via-[#e6f7ec] to-[#d8f3e2] -z-20 pointer-events-none" />
        <div className="absolute -top-32 left-1/4 w-[650px] h-[650px] bg-gradient-to-br from-[#16a34a]/30 via-[#22c55e]/25 to-[#4ade80]/20 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />
        <div className="absolute inset-0 bg-textured-dot-grid opacity-75 mask-radial-vignette pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-stone-200/90 shadow-2xs text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)] mx-auto">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
              <span>HEADQUARTERS &amp; PRIORITY HOTLINE // GUWAHATI, ASSAM</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-6xl text-[var(--foreground)] tracking-tight leading-[1.05]">
              Let&apos;s discuss your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-900 via-[var(--accent)] to-[#15803d]">
                project parameters today.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[var(--muted)] leading-relaxed font-normal max-w-2xl mx-auto">
              Talk directly with senior technology architects. Fast response SLA under 5 minutes on WhatsApp, zero middleman bloat.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2 font-mono text-xs">
              <a
                href="https://wa.me/917002160093?text=Hi%2C%20I%20want%20to%20scope%20a%20project%20with%20India%20Web%20Designs."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold transition-all shadow-md flex items-center gap-2.5"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>WhatsApp Hotline: +91 70021 60093</span>
              </a>
              <a
                href="tel:+917002160093"
                className="px-6 py-3 rounded-full bg-white hover:bg-stone-50 border border-stone-300 text-[var(--foreground)] font-bold transition-all shadow-xs flex items-center gap-2.5"
              >
                <svg className="w-4 h-4 text-stone-700 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Phone Line: +91 70021 60093</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Direct Intake Form & Contact Channels Section */}
      <ContactSection />

      {/* 3. Office Location & Corporate Details */}
      <section className="py-16 sm:py-20 bg-[var(--surface-hover)] border-t border-b border-[var(--surface-border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--accent)] font-bold">
              OFFICIAL HEADQUARTERS
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[var(--foreground)] tracking-tight">
              Visit Our Head Office in Guwahati, Assam
            </h2>
            <p className="text-xs sm:text-sm text-[var(--muted)]">
              India Web Designs is a brand managed by WeBotApp Pvt. Ltd. Serving clients across 29+ countries globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[var(--accent)] flex items-center justify-center border border-emerald-200/60 shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--foreground)]">Headquarters Address</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed font-mono">
                India Web Designs (WeBotApp Pvt. Ltd.)<br />
                Guwahati, Assam — 781001, India
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[var(--accent)] flex items-center justify-center border border-emerald-200/60 shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--foreground)]">Email Support</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed font-mono">
                Official RFP &amp; Specs:<br />
                <a href="mailto:hello@codemuji.com" className="text-[var(--accent)] font-bold hover:underline">
                  hello@codemuji.com
                </a>
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[var(--accent)] flex items-center justify-center border border-emerald-200/60 shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--foreground)]">Working Hours</h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed font-mono">
                Monday – Saturday: 9:00 AM – 8:00 PM IST<br />
                WhatsApp Intake: 24/7 Automated
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ Accordion */}
      <FAQSection />

      {/* 5. Footer */}
      <Footer />
    </main>
  );
}
