"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getServiceDetail, getServicePackages } from "@/lib/services-detail-data";
import { SERVICES_DROPDOWN_GROUPS } from "@/lib/services-dropdown-data";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";
import { RecognitionMarquee } from "@/components/sections/RecognitionMarquee";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { OnboardingModal, type LeadSubmissionPayload } from "@/components/modal/OnboardingModal";
import { StickyIntakeBar } from "@/components/navigation/StickyIntakeBar";
import { submitLeadAction } from "@/app/actions";

interface ServiceDetailViewProps {
  id: string;
}

export function ServiceDetailView({ id }: ServiceDetailViewProps) {
  const router = useRouter();
  const detail = getServiceDetail(id);
  const packages = getServicePackages(detail);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeQuery, setActiveQuery] = useState("");

  const sampleQuery = `We want to scope a project for ${detail.item.title} (${detail.groupName}) with timeline ${detail.item.timeline}.`;

  const handleStartOnboarding = (customQuery?: string) => {
    setActiveQuery(customQuery || sampleQuery);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitLead = async (payload: LeadSubmissionPayload) => {
    const res = await submitLeadAction(payload);
    if (res.success) {
      setIsModalOpen(false);
      router.push(`/thank-you?category=${encodeURIComponent(payload.category)}&leadId=${res.leadId || "NEW"}`);
    } else {
      alert(res.error || "Something went wrong saving your lead. Please try again.");
    }
  };

  const relatedServices = SERVICES_DROPDOWN_GROUPS
    .flatMap((group) => group.items)
    .filter((item) => item.id !== detail.id)
    .slice(0, 3);

  return (
    <main key={detail.item.id} className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col font-sans selection:bg-[var(--accent)] selection:text-white text-sm sm:text-base">
      <Navbar onStartOnboarding={() => handleStartOnboarding()} />

      {/* 1. HERO SECTION (HOMEPAGE STYLE WITH RICH SPACING & VALUE PILLS) */}
      <section id="hero" className="relative py-14 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center overflow-hidden w-full border-b border-[var(--surface-border)]">
        {/* Background signature motif & ambient glow */}
        <div className="absolute inset-0 bg-grid-pattern -z-10 opacity-60 mask-radial" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[18rem] bg-[var(--accent)]/10 blur-[100px] -z-10 rounded-full pointer-events-none" />

        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--surface-border)] shadow-xs mb-6 text-xs sm:text-sm font-mono uppercase tracking-wider text-[var(--muted)]">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-bold text-[var(--foreground)]">{detail.groupName}</span>
          <span className="text-[var(--surface-border)]">•</span>
          <span>{detail.item.title}</span>
          {detail.item.badge && (
            <>
              <span className="text-[var(--surface-border)]">•</span>
              <span className="text-[var(--accent)] font-bold">★ {detail.item.badge}</span>
            </>
          )}
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[var(--foreground)] max-w-4xl mx-auto leading-[1.08]">
          How can we help your business grow with{" "}
          <span className="relative inline-block text-[var(--accent)] font-black">
            {detail.item.title}?
            <span className="absolute left-0 -bottom-1.5 w-full h-1.5 bg-[var(--accent)] rounded-full opacity-80" />
          </span>
        </h1>

        {/* Subtitle / Overview */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-[var(--muted)] max-w-xl mx-auto leading-relaxed font-normal">
          {detail.overview.split(". ")[0]}.
        </p>

        {/* Key Value Proposition Badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-display font-semibold">
          <span className="px-3.5 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--surface-border)] text-[var(--foreground)] flex items-center gap-1.5 shadow-2xs">
            <span className="text-[var(--accent)] font-bold">⚡</span> Sub-Second (&lt;0.8s) Speed
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--surface-border)] text-[var(--foreground)] flex items-center gap-1.5 shadow-2xs">
            <span className="text-[var(--accent)] font-bold">🛡️</span> 100% IP Ownership
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--surface-border)] text-[var(--foreground)] flex items-center gap-1.5 shadow-2xs">
            <span className="text-[var(--accent)] font-bold">💎</span> 0% Monthly Commission
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => handleStartOnboarding()}
            className="px-7 py-3.5 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-display font-bold text-sm sm:text-base shadow-md hover:shadow-lg active:scale-[0.98] transition-all duration-150 flex items-center gap-2.5 cursor-pointer group"
          >
            <span>Talk to our expert</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          <a
            href="#plans"
            className="px-7 py-3.5 rounded-full bg-[var(--surface)] hover:bg-[var(--surface-hover)] text-[var(--foreground)] font-display font-bold text-sm sm:text-base border border-[var(--surface-border)] transition-all flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <span>Pricing ↓</span>
          </a>
        </div>

        {/* Checkmarks below buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-semibold text-[var(--muted)]">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[var(--foreground)]">Free expert advice</span>
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[var(--foreground)]">Customized growth plan</span>
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[var(--foreground)]">No obligation</span>
          </span>
        </div>
      </section>

      {/* ACCREDITATIONS MARQUEE */}
      <RecognitionMarquee />

      {/* 2. PRICING SECTION */}
      <section id="plans" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full border-b border-[var(--surface-border)]">
        <div className="max-w-2xl mb-10">
          <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[var(--accent)] block mb-1.5">
            Investment &amp; Delivery Scope
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[var(--foreground)] tracking-tight">
            Transparent, structured packages &amp; pricing.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
            Choose the exact architectural scope for your {detail.item.title}. Every tier includes high-speed edge hosting, basic SEO, and complete source code ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                pkg.isPopular
                  ? "bg-[var(--surface)] border-2 border-[var(--foreground)] shadow-lg relative"
                  : "bg-[var(--background)] border border-[var(--surface-border)] hover:border-[var(--foreground)]/40 shadow-xs"
              }`}
            >
              <div>
                <div className="flex items-baseline justify-between gap-2 border-b border-[var(--surface-border)] pb-4 mb-4">
                  <div>
                    <h3 className="font-display font-black text-lg sm:text-xl text-[var(--foreground)]">
                      {pkg.name}
                    </h3>
                    <span className="text-[11px] font-display font-semibold text-[var(--muted)] block mt-0.5">
                      {pkg.tagline}
                    </span>
                  </div>
                  {pkg.badge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[var(--foreground)] text-[var(--background)] font-display text-[10px] font-bold uppercase tracking-wider shrink-0">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                <div className="mb-4 font-display text-[11px] text-[var(--foreground)] font-bold flex items-center justify-between bg-[var(--surface-hover)] px-3 py-1.5 rounded-lg">
                  <span>Estimated Delivery:</span>
                  <span className="text-[var(--accent)]">{pkg.timeline}</span>
                </div>

                <p className="text-xs text-[var(--muted)] mb-6 leading-relaxed">
                  {pkg.targetScope}
                </p>

                <div className="space-y-2.5 mb-6">
                  <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[var(--muted)] block mb-2">
                    Inclusions &amp; Deliverables:
                  </span>
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[var(--foreground)]">
                      <span className="text-[var(--accent)] font-bold shrink-0 mt-0.5">✓</span>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--surface-border)]">
                <button
                  type="button"
                  onClick={() =>
                    handleStartOnboarding(
                      `We want to scope the ${pkg.name} (${pkg.tagline}) for ${detail.item.title}. Timeline requirement: ${pkg.timeline}.`
                    )
                  }
                  className={`w-full py-3 rounded-lg font-display font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer ${
                    pkg.isPopular
                      ? "bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white shadow-sm hover:scale-[1.01]"
                      : "bg-[var(--foreground)] hover:opacity-90 text-[var(--background)] shadow-xs hover:scale-[1.01]"
                  }`}
                >
                  <span>Select {pkg.name} &rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section id="faqs" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full border-b border-[var(--surface-border)]">
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[var(--accent)] block mb-1">
            Common Questions
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[var(--foreground)] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[var(--muted)]">
            Everything you need to know about our process, delivery, and guarantees for {detail.item.title}.
          </p>
        </div>

        <div className="divide-y divide-[var(--surface-border)] border-y border-[var(--surface-border)]">
          {detail.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div key={idx} className="py-4 sm:py-5">
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left font-display font-bold text-sm sm:text-base text-[var(--foreground)] flex items-center justify-between gap-4 cursor-pointer hover:text-[var(--accent)] transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="font-display text-lg text-[var(--muted)] shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-3 text-xs sm:text-sm text-[var(--muted)] leading-relaxed pr-6">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. VERIFIED TESTIMONIALS SECTION */}
      <TestimonialsSection />

      {/* 5. LONG DESCRIPTION SECTION */}
      <section id="long-description" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full border-t border-[var(--surface-border)] space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[var(--accent)] block mb-2">
            Detailed Overview &amp; Specifications
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[var(--foreground)] tracking-tight leading-tight">
            Comprehensive guide to {detail.item.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
            {detail.overview}
          </p>
          {detail.targetAudience && (
            <div className="mt-4 p-4 rounded-xl bg-[var(--surface)] border border-[var(--surface-border)] text-xs sm:text-sm text-[var(--foreground)]">
              <span className="font-bold text-[var(--accent)]">Who is this for? </span>
              <span className="text-[var(--muted)]">{detail.targetAudience}</span>
            </div>
          )}
        </div>

        {/* Core Pillars / Architectural Features Grid (if present) */}
        {detail.corePillars && detail.corePillars.length > 0 && (
          <div className="space-y-6">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[var(--foreground)]">
              Core Technical Capabilities &amp; Pillars
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {detail.corePillars.map((pillar, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[var(--surface)]/60 border border-[var(--surface-border)] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[10px] font-bold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-2.5 py-1 rounded-full">
                      {pillar.tag}
                    </span>
                    <span className="font-mono text-xs text-[var(--muted)]">0{idx + 1}</span>
                  </div>
                  <h4 className="font-display font-bold text-base sm:text-lg text-[var(--foreground)] pt-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Specs (if present) */}
        {detail.techStack && detail.techStack.length > 0 && (
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[var(--foreground)]">
              Engineered Tech Stack
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {detail.techStack.map((tech, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[var(--surface)] border border-[var(--surface-border)] text-center space-y-1">
                  <span className="text-[10px] font-display font-semibold uppercase tracking-wider text-[var(--muted)] block">
                    {tech.category}
                  </span>
                  <span className="font-display font-bold text-sm sm:text-base text-[var(--foreground)] block">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Comparison Table: Why Custom Architecture Outperforms Standard Retainers */}
        <div className="space-y-6 pt-4">
          <div className="max-w-2xl space-y-2">
            <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[var(--accent)] block">
              The Engineering Advantage
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[var(--foreground)] tracking-tight">
              Why our custom build outperforms traditional retainers
            </h3>
            <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
              India Web Designs takes a permanent, engineering-first approach. We build clean, high-performance assets that load in sub-seconds and rank organically on Google without monthly retainer traps or commission taxes.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--surface-border)] bg-[var(--surface)]/50 overflow-hidden text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-12 bg-[var(--surface)] p-3.5 sm:p-4 border-b border-[var(--surface-border)] font-display font-bold uppercase tracking-wider">
              <div className="sm:col-span-4 text-[var(--muted)]">Feature Specification</div>
              <div className="sm:col-span-4 text-[var(--accent)] mt-1 sm:mt-0">Our Guaranteed Build</div>
              <div className="sm:col-span-4 text-[var(--muted)] mt-1 sm:mt-0">Typical Agencies / SaaS</div>
            </div>

            <div className="divide-y divide-[var(--surface-border)] font-sans">
              {detail.comparison.map((comp, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 p-3.5 sm:p-4 gap-2 sm:gap-3 hover:bg-[var(--surface-hover)] transition-colors">
                  <div className="sm:col-span-4 font-bold text-[var(--foreground)] flex items-center">
                    {comp.feature}
                  </div>
                  <div className="sm:col-span-4 text-[var(--foreground)] font-semibold flex items-center gap-1.5">
                    <span className="text-[var(--accent)] font-bold shrink-0">✓</span>
                    <span>{comp.ourStandard}</span>
                  </div>
                  <div className="sm:col-span-4 text-[var(--muted)] flex items-center gap-1.5">
                    <span className="text-rose-500 font-bold shrink-0">×</span>
                    <span>{comp.typicalAgency}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Services */}
        <div className="pt-8 border-t border-[var(--surface-border)] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[var(--accent)] block mb-1">
                Explore Further
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[var(--foreground)] tracking-tight">
                Related digital solutions &amp; services
              </h3>
            </div>
            <Link
              href="/#services"
              className="text-xs font-display font-bold text-[var(--foreground)] hover:text-[var(--accent)] flex items-center gap-1.5 shrink-0 transition-colors"
            >
              <span>View All Services</span>
              <span>&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((relItem) => (
              <Link
                key={relItem.id}
                href={`/services/${relItem.id}`}
                className="group p-6 rounded-2xl bg-[var(--surface)]/50 border border-[var(--surface-border)] hover:border-[var(--foreground)]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 font-display text-[11px]">
                    <span className="text-[var(--accent)] font-bold">{relItem.category}</span>
                    <span className="text-[var(--muted)]">⏱ {relItem.timeline}</span>
                  </div>

                  <h4 className="font-display font-black text-base sm:text-lg text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                    {relItem.title}
                  </h4>
                  <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed line-clamp-3">
                    {relItem.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[var(--surface-border)] font-display text-[11px] font-bold text-[var(--foreground)] flex items-center justify-between">
                  <span>Inspect Specifications</span>
                  <span className="group-hover:translate-x-1 transition-transform text-[var(--accent)]">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Action Banner */}
        <div className="p-6 sm:p-10 rounded-2xl bg-[var(--surface)] border border-[var(--surface-border)] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-md">
            <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[var(--accent)] block mb-2">
              Direct Project Scoping
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[var(--foreground)] tracking-tight leading-snug">
              Ready to engineer your {detail.item.title}?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
              Answer 4 quick questions and our senior engineering team will prepare your exact architectural blueprint, transparent budget range, and timeline in under 2 hours.
            </p>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={() => handleStartOnboarding()}
              className="px-6 py-3.5 rounded-full bg-[var(--foreground)] hover:opacity-90 text-[var(--background)] font-display font-bold text-sm sm:text-base tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-sm"
            >
              <span>Talk to our expert &rarr;</span>
            </button>
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <Footer onStartOnboarding={() => handleStartOnboarding()} />

      <OnboardingModal
        isOpen={isModalOpen}
        category={detail.item.category}
        initialQuery={activeQuery}
        onClose={handleCloseModal}
        onSubmit={handleSubmitLead}
      />

      <StickyIntakeBar
        isModalOpen={isModalOpen}
        onOpenIntake={() => handleStartOnboarding()}
      />
    </main>
  );
}
