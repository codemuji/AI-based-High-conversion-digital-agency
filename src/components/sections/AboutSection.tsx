import React from "react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden border-t border-[var(--surface-border)] bg-[var(--background)] font-sans"
    >
      {/* Subtle Drafting Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Architectural Studio Overview */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-xs text-xs font-mono font-bold text-[var(--foreground)] tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
            <span>ABOUT THE ARCHITECTURAL STUDIO // INDIA WEB DESIGNS</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[var(--foreground)] tracking-tight leading-[1.04]">
            Technology that simplifies <br className="hidden sm:inline" />
            your work &amp; scales revenue.
          </h2>

          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Too many Indian business owners struggle with bloated agencies, confusing technical jargon, hidden monthly plugin fees, and websites that crash or take 5+ seconds to load. At <strong className="text-[var(--foreground)] font-semibold">India Web Designs</strong>, our mission is different: we act as your dedicated, high-speed engineering partners.
          </p>

          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Whether you are launching a new online brand, expanding a multi-store retail operation, or automating daily paperwork and WhatsApp inquiries, we custom-engineer clean, zero-bloat digital platforms that load in under 0.8 seconds and belong 100% to you.
          </p>

          {/* Core Architectural Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-[var(--surface-border)]">
            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <span className="font-display font-black text-3xl sm:text-4xl text-[var(--foreground)] block">
                100%
              </span>
              <span className="font-mono text-[11px] font-bold text-[var(--accent)] uppercase tracking-wider block mt-1">
                In-House Code
              </span>
              <span className="text-xs text-[var(--muted)] font-normal mt-1 block">
                Zero outsourced bloat or generic page builders
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <span className="font-display font-black text-3xl sm:text-4xl text-[var(--accent)] block">
                2 Hours
              </span>
              <span className="font-mono text-[11px] font-bold text-[var(--foreground)] uppercase tracking-wider block mt-1">
                Scoping SLA
              </span>
              <span className="text-xs text-[var(--muted)] font-normal mt-1 block">
                Guaranteed window for clear architecture roadmaps
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs col-span-2 sm:col-span-1">
              <span className="font-display font-black text-3xl sm:text-4xl text-[var(--foreground)] block">
                0%
              </span>
              <span className="font-mono text-[11px] font-bold text-[var(--accent)] uppercase tracking-wider block mt-1">
                Commission
              </span>
              <span className="text-xs text-[var(--muted)] font-normal mt-1 block">
                Zero recurring platform cuts on your sales
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: The IWD Architectural Guarantee Card */}
        <div className="lg:col-span-5 p-8 sm:p-12 rounded-3xl bg-white border border-stone-200 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between mb-6 relative z-10">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[var(--foreground)]">
              The IWD Guarantee
            </h3>
            <span className="px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-mono text-[10px] font-bold uppercase tracking-wider border border-[var(--accent)]/25">
              100% VERIFIED
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[var(--muted)] mb-8 relative z-10">
            Every platform we deliver is backed by four non-negotiable architectural guarantees:
          </p>

          <ul className="space-y-5 text-sm text-[var(--foreground)] relative z-10">
            <li className="flex items-start gap-3.5 p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
              <div className="w-6 h-6 rounded-xl bg-[var(--accent)] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="font-display font-bold text-base block text-[var(--foreground)]">Sub-0.8s Global Edge Speeds</strong>
                <span className="text-xs text-[var(--muted)] block mt-0.5">Your site loads instantly across India and worldwide on any network, keeping visitors engaged and maximizing SEO.</span>
              </div>
            </li>

            <li className="flex items-start gap-3.5 p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
              <div className="w-6 h-6 rounded-xl bg-[var(--accent)] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="font-display font-bold text-base block text-[var(--foreground)]">100% Source Code &amp; IP Handover</strong>
                <span className="text-xs text-[var(--muted)] block mt-0.5">You own the complete code repository, design tokens, and database. Never get locked into proprietary platform traps.</span>
              </div>
            </li>

            <li className="flex items-start gap-3.5 p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
              <div className="w-6 h-6 rounded-xl bg-[var(--accent)] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="font-display font-bold text-base block text-[var(--foreground)]">Indian Data Localization &amp; Compliance</strong>
                <span className="text-xs text-[var(--muted)] block mt-0.5">Built with rock-solid security and native support for Indian payment gateways (Razorpay/Cashfree), GST invoicing, and data norms.</span>
              </div>
            </li>

            <li className="flex items-start gap-3.5 p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
              <div className="w-6 h-6 rounded-xl bg-[var(--accent)] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="font-display font-bold text-base block text-[var(--foreground)]">Zero-Downtime Scaling Support</strong>
                <span className="text-xs text-[var(--muted)] block mt-0.5">We remain by your side post-launch with proactive uptime monitoring and continuous engineering support.</span>
              </div>
            </li>
          </ul>

          <div className="mt-8 pt-6 border-t border-stone-200 flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-[var(--foreground)]">Ready to experience clean architecture?</span>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-stone-900 hover:bg-[var(--accent)] text-white font-mono text-xs font-bold uppercase transition-all shadow-md"
            >
              Scope Project &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
