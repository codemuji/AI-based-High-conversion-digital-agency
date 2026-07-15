import React from "react";

export function AboutSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[var(--surface-border)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
            About India Web Designs
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--foreground)] mt-3 leading-tight">
            We build digital products that refuse to be ignored.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Most agencies sell static templates wrapped in agency jargon. At India Web Designs (Codemuji Digital Services), we operate as a dedicated product engineering team obsessed with speed, conversion rate optimization, and clean software architecture.
          </p>
          <p className="mt-4 text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Whether you are launching a brand new AI startup, scaling an e-commerce brand to 7 figures, or automating legacy enterprise workflows, every line of code we write is accountable to one metric: measurable revenue growth.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6 pt-6 border-t border-[var(--surface-border)]">
            <div>
              <span className="font-display font-extrabold text-2xl sm:text-3xl text-[var(--foreground)] block">
                100%
              </span>
              <span className="text-xs text-[var(--muted)] font-medium">
                Custom Code — Zero bloated templates or slow plugins
              </span>
            </div>

            <div>
              <span className="font-display font-extrabold text-2xl sm:text-3xl text-[var(--accent)] block">
                2 Hours
              </span>
              <span className="text-xs text-[var(--muted)] font-medium">
                Guaranteed response window for AI-scoped inquiries
              </span>
            </div>
          </div>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[var(--accent)]/10 to-[var(--signature)]/10 rounded-full blur-2xl -z-10" />
          
          <h3 className="font-display font-bold text-xl text-[var(--foreground)] mb-6">
            The IWD Engineering Standard
          </h3>

          <ul className="space-y-4 text-sm text-[var(--foreground)]">
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[var(--success)]/10 text-[var(--success)] flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="font-semibold block">Sub-Second Core Web Vitals</strong>
                <span className="text-xs text-[var(--muted)]">Every page loads in under 1 second to maximize SEO and ad quality score.</span>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[var(--success)]/10 text-[var(--success)] flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="font-semibold block">Clean Relational Data Architecture</strong>
                <span className="text-xs text-[var(--muted)]">Postgres schemas built for security, high throughput, and effortless scaling.</span>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[var(--success)]/10 text-[var(--success)] flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="font-semibold block">Accessible & Keyboard-Navigable</strong>
                <span className="text-xs text-[var(--muted)]">Strict WCAG compliance with proper focus trapping and screen reader labels.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
