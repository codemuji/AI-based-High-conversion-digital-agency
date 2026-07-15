import React from "react";
import Link from "next/link";

export default function ThankYouPage({
  searchParams,
}: {
  searchParams?: { category?: string; leadId?: string };
}) {
  const category = searchParams?.category || "Digital Product";
  const leadId = searchParams?.leadId || "NEW";

  const whatsappMessage = encodeURIComponent(
    `Hi India Web Designs! I just submitted scoping inquiry #${leadId} for ${category}. I'd like to chat directly about our requirements.`
  );
  const whatsappUrl = `https://wa.me/919876543210?text=${whatsappMessage}`;

  return (
    <main className="flex-1 bg-[var(--background)] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Success Icon */}
        <div className="w-16 h-16 rounded-full bg-[var(--success)]/10 text-[var(--success)] border-2 border-[var(--success)]/20 mx-auto flex items-center justify-center mb-6 shadow-sm">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <span className="px-3.5 py-1.5 rounded-full bg-[var(--accent-subtle)] text-[var(--accent)] text-xs font-semibold uppercase tracking-wider">
          Scoping Profile #{leadId} Created
        </span>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--foreground)] mt-6 leading-tight">
          Your {category} scoping profile <br className="hidden sm:inline" />
          is being analyzed by our AI triage.
        </h1>

        <p className="mt-4 text-base sm:text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
          Our senior product architect has received your technical requirements and preliminary AI triage notes. You will receive our formal proposal and timeline assessment within <strong className="text-[var(--foreground)] font-semibold">2 hours</strong>.
        </p>

        {/* High-converting WhatsApp CTA & Back link */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-display font-bold text-base shadow-lg hover:shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M11.996 0C5.372 0 0 5.373 0 11.997c0 2.12.556 4.194 1.614 6.012L.055 24l6.155-1.614a11.96 11.96 0 005.786 1.488h.005c6.623 0 11.996-5.373 11.996-11.997 0-3.206-1.248-6.22-3.76-8.73A11.916 11.916 0 0011.996 0zM12 21.84c-1.784 0-3.532-.48-5.06-1.388l-.363-.216-3.762.986 1.004-3.664-.236-.375A9.851 9.851 0 012.046 12C2.046 6.513 6.51 2.05 12 2.05c2.66 0 5.16 1.035 7.04 2.918C20.92 6.85 21.954 9.35 21.954 12c0 5.487-4.463 9.84-9.954 9.84zm5.437-7.428c-.297-.148-1.76-.868-2.033-.967-.272-.1-.47-.148-.668.148-.198.297-.768.967-.942 1.165-.173.198-.347.223-.644.074-.297-.148-1.254-.462-2.39-1.474-.884-.788-1.48-1.76-1.653-2.058-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.148-.173.198-.297.297-.495.1-.198.05-.371-.025-.52-.074-.148-.668-1.611-.916-2.207-.242-.58-.487-.5-.668-.51l-.57-.01c-.198 0-.52.074-.792.371-.272.297-1.04 1.016-1.04 2.478 0 1.462 1.065 2.875 1.213 3.074.148.198 2.096 3.2 5.077 4.487.71.306 1.264.489 1.696.626.713.226 1.362.194 1.873.118.572-.085 1.76-.718 2.008-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347z" />
            </svg>
            <span>Message Us Directly on WhatsApp</span>
          </a>

          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-4 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] text-[var(--foreground)] font-semibold text-base transition-colors"
          >
            Back to Homepage
          </Link>
        </div>

        {/* Case Studies / Proof Teaser Grid while waiting */}
        <div className="mt-20 pt-12 border-t border-[var(--surface-border)] text-left">
          <h2 className="font-display text-xl font-bold text-[var(--foreground)] text-center mb-8">
            While you wait, explore how we scale engineering craft
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                E-Commerce
              </span>
              <h3 className="font-display font-bold text-lg text-[var(--foreground)] mt-2">
                Apex Retail — 420% Lead Conversion Boost
              </h3>
              <p className="text-xs text-[var(--muted)] mt-2 leading-relaxed">
                Rebuilt a legacy catalog site into a lightning-fast custom headless store with 0.8s load times.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--signature)]">
                AI Automation
              </span>
              <h3 className="font-display font-bold text-lg text-[var(--foreground)] mt-2">
                CareConnect — 24/7 Medical Triage AI Agent
              </h3>
              <p className="text-xs text-[var(--muted)] mt-2 leading-relaxed">
                Automated 85% of incoming patient queries and booking workflows across WhatsApp and Web.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                Enterprise App
              </span>
              <h3 className="font-display font-bold text-lg text-[var(--foreground)] mt-2">
                LogiTrack — Fleet Operations Portal
              </h3>
              <p className="text-xs text-[var(--muted)] mt-2 leading-relaxed">
                Custom real-time GPS tracking dashboard and driver app managing 500+ commercial vehicles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
