import React from "react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[var(--surface-border)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[var(--accent)] block mb-2">
            // About India Web Designs
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[var(--foreground)] tracking-tight leading-none">
            We believe technology should simplify your work and grow your business.
          </h2>
          <p className="mt-7 text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Too many business owners struggle with complicated agencies, confusing tech jargon, and websites that don&apos;t generate results. At India Web Designs (Codemuji Digital Services), our mission is different: we act as your friendly, dedicated technology partners.
          </p>
          <p className="mt-4 text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            Whether you are launching a new online venture, expanding your retail store, or looking to automate daily paperwork and customer inquiries, our goal is simple: helping you save time, delight your customers, and grow your revenue.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-8 pt-8 border-t border-[var(--surface-border)]">
            <div>
              <span className="font-display font-black text-3xl sm:text-4xl text-[var(--foreground)] block">
                100%
              </span>
              <span className="text-xs text-[var(--muted)] font-medium mt-1 block">
                Tailored for You — Zero cookie-cutter templates or slow plugins
              </span>
            </div>

            <div>
              <span className="font-display font-black text-3xl sm:text-4xl text-[var(--accent)] block">
                2 Hours
              </span>
              <span className="text-xs text-[var(--muted)] font-medium mt-1 block">
                Guaranteed response window for clear answers and advice
              </span>
            </div>
          </div>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
          
          <h3 className="font-display font-black text-2xl text-[var(--foreground)] mb-8 relative z-10">
            The IWD Customer Guarantee
          </h3>

          <ul className="space-y-4 text-sm text-[var(--foreground)]">
            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[var(--success)]/10 text-[var(--success)] flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="font-semibold block">Lightning-Fast for Every Visitor</strong>
                <span className="text-xs text-[var(--muted)]">Nobody likes waiting for slow pages. Your site will load instantly, keeping visitors happy and engaged.</span>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[var(--success)]/10 text-[var(--success)] flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="font-semibold block">Secure &amp; Reliable Foundation</strong>
                <span className="text-xs text-[var(--muted)]">Built with rock-solid security and reliability so your customer data and daily operations are always safe.</span>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[var(--success)]/10 text-[var(--success)] flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <strong className="font-semibold block">Designed for Everyone</strong>
                <span className="text-xs text-[var(--muted)]">Clean, beautiful, and effortless to use for all your customers on any mobile phone, tablet, or computer.</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
