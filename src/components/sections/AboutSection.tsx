import React from "react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden border-t border-[var(--surface-border)] bg-[var(--background)] font-sans text-sm"
    >
      {/* Subtle Drafting Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Studio Overview */}
        <div className="lg:col-span-7 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 shadow-xs text-[11px] font-display font-bold text-[var(--foreground)] tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
            <span>About The Studio</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--foreground)] tracking-tight leading-snug">
            Technology that simplifies <br className="hidden sm:inline" />
            your work &amp; scales revenue.
          </h2>

          <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
            Established in 2012 from our head office in Guwahati, Assam, <strong className="text-[var(--foreground)] font-semibold">India Web Designs</strong> (a brand managed by WeBotApp Pvt. Ltd.) is a pioneer digital agency in North-East India. We pursue relationships built on transparency, integrity, and strong after-sales support.
          </p>

          <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
            With 3,100+ completed projects and footprints across 29 countries (including USA, UK, UAE, Australia, and Malaysia), we offer 360-degree digital solutions: website design, web portals, digital marketing, mobile app development, software ERP systems, graphic design, content writing, and business consulting.
          </p>

          {/* Core Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[var(--surface-border)]">
            <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-xs">
              <span className="font-display font-black text-2xl sm:text-3xl text-[var(--foreground)] block">
                3,100+
              </span>
              <span className="font-display text-[10px] font-bold text-[var(--accent)] uppercase tracking-wider block mt-1">
                Projects Completed
              </span>
              <span className="text-[10px] text-[var(--muted)] font-normal mt-0.5 block leading-tight">
                Global delivery SLA
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-xs">
              <span className="font-display font-black text-2xl sm:text-3xl text-[var(--accent)] block">
                10+ Years
              </span>
              <span className="font-display text-[10px] font-bold text-[var(--foreground)] uppercase tracking-wider block mt-1">
                Industry Excellence
              </span>
              <span className="text-[10px] text-[var(--muted)] font-normal mt-0.5 block leading-tight">
                Pioneering since 2012
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-xs">
              <span className="font-display font-black text-2xl sm:text-3xl text-[var(--foreground)] block">
                29
              </span>
              <span className="font-display text-[10px] font-bold text-emerald-600 uppercase tracking-wider block mt-1">
                Countries Served
              </span>
              <span className="text-[10px] text-[var(--muted)] font-normal mt-0.5 block leading-tight">
                Worldwide footprint
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-stone-200 shadow-xs">
              <span className="font-display font-black text-2xl sm:text-3xl text-[var(--accent)] block">
                1,150+
              </span>
              <span className="font-display text-[10px] font-bold text-[var(--foreground)] uppercase tracking-wider block mt-1">
                Positive Reviews
              </span>
              <span className="text-[10px] text-[var(--muted)] font-normal mt-0.5 block leading-tight">
                90%+ retention rate
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: The IWD Guarantee Card */}
        <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white border border-stone-200 shadow-md relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between mb-4 relative z-10">
            <h3 className="font-display font-bold text-lg sm:text-xl text-[var(--foreground)]">
              The IWD Guarantee
            </h3>
            <span className="px-2.5 py-0.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-display text-[10px] font-bold uppercase tracking-wider border border-[var(--accent)]/25">
              100% Verified
            </span>
          </div>

          <p className="text-xs text-[var(--muted)] mb-6 relative z-10">
            Every platform we deliver is backed by four non-negotiable guarantees:
          </p>

          <ul className="space-y-3.5 text-xs text-[var(--foreground)] relative z-10">
            <li className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/80">
              <div className="w-5 h-5 rounded-lg bg-[var(--accent)] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="font-display font-bold text-sm block text-[var(--foreground)]">Sub-0.8s Global Edge Speeds</strong>
                <span className="text-[11px] text-[var(--muted)] block mt-0.5 leading-relaxed">Your site loads instantly across India and worldwide on any network.</span>
              </div>
            </li>

            <li className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/80">
              <div className="w-5 h-5 rounded-lg bg-[var(--accent)] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="font-display font-bold text-sm block text-[var(--foreground)]">100% Source Code &amp; IP Handover</strong>
                <span className="text-[11px] text-[var(--muted)] block mt-0.5 leading-relaxed">You own the complete code repository, design tokens, and database.</span>
              </div>
            </li>

            <li className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/80">
              <div className="w-5 h-5 rounded-lg bg-[var(--accent)] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="font-display font-bold text-sm block text-[var(--foreground)]">Indian Data Localization &amp; Compliance</strong>
                <span className="text-[11px] text-[var(--muted)] block mt-0.5 leading-relaxed">Built with native support for Indian payment gateways and GST norms.</span>
              </div>
            </li>

            <li className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/80">
              <div className="w-5 h-5 rounded-lg bg-[var(--accent)] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="font-display font-bold text-sm block text-[var(--foreground)]">Zero-Downtime Scaling Support</strong>
                <span className="text-[11px] text-[var(--muted)] block mt-0.5 leading-relaxed">We remain by your side post-launch with proactive uptime monitoring.</span>
              </div>
            </li>
          </ul>

          <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between">
            <span className="font-display text-[11px] font-bold text-[var(--foreground)]">Ready for clean architecture?</span>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-stone-900 hover:bg-[var(--accent)] text-white font-display text-[11px] font-bold uppercase transition-all shadow-sm"
            >
              Scope Project &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
