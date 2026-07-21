"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getServiceDetail, getServicePackages, type ServiceDetail, type ServicePackage } from "@/lib/services-detail-data";
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

const CORE_INCLUSIONS = [
  {
    num: "01",
    title: "Free Domain & Cloud Hosting",
    subtitle: "1st Year Included • High-Speed Edge Server",
    description: "Complete setup of your custom domain registration and ultra-fast cloud edge server architecture with zero technical friction or setup headaches.",
  },
  {
    num: "02",
    title: "On-Page SEO & Google Indexing",
    subtitle: "Clean Architecture • Search Console Ready",
    description: "Proper HTML semantic hierarchy, meta title tags, XML sitemap generation, structured schema, and direct verification with Google Search Console.",
  },
  {
    num: "03",
    title: "Intuitive Admin Control Panel",
    subtitle: "Zero Code Management • Full Content Access",
    description: "For dynamic web builds and e-commerce stores, you receive a tailored administrative dashboard to manage text, media, products, and leads instantly.",
  },
  {
    num: "04",
    title: "100% Source Code & IP Ownership",
    subtitle: "Permanent Handover • Zero Vendor Lock-in",
    description: "Complete intellectual property transfer and Git repository handover upon deployment. You own every line of code, asset, and database outright.",
  },
  {
    num: "05",
    title: "0% Recurring Platform Commission",
    subtitle: "No Monthly Taxes • Keep 100% Revenue",
    description: "Unlike SaaS builders that take a percentage of your sales or charge monthly platform taxes, our custom engineering guarantees zero ongoing transaction fees.",
  },
  {
    num: "06",
    title: "All-Screen Responsive Guarantee",
    subtitle: "Mobile-First Engineered • Tablet & Desktop",
    description: "Precision layouts optimized specifically for Indian mobile networks and smartphones, guaranteeing instant loading and flawless touch interactions.",
  },
];

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

      {/* 1. COMPACT EDITORIAL HERO SECTION */}
      <section id="hero" className="relative pt-12 sm:pt-16 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-[var(--surface-border)] w-full">
        {/* Subtle Grid Motif */}
        <div className="absolute inset-0 bg-grid-pattern -z-10 opacity-40 mask-radial" />

        <div className="max-w-3xl">
          {/* Top Category Label */}
          <div className="flex items-center gap-2 text-xs font-display font-semibold tracking-wider uppercase text-[var(--muted)] mb-3">
            <span>Digital Architecture</span>
            <span className="text-[var(--surface-border)]">•</span>
            <span className="text-[var(--foreground)]">{detail.groupName}</span>
            {detail.item.badge && (
              <>
                <span className="text-[var(--surface-border)]">•</span>
                <span className="text-[var(--accent)] font-bold">★ {detail.item.badge}</span>
              </>
            )}
          </div>

          {/* Compact Authoritative Headline */}
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.08] text-[var(--foreground)]">
            {detail.item.title}
          </h1>

          {/* Concise Overview */}
          <p className="mt-4 text-sm sm:text-base text-[var(--muted)] font-normal leading-relaxed max-w-2xl">
            {detail.overview}
          </p>

          {/* Key Value Propositions */}
          <div className="mt-5 pt-4 border-t border-[var(--surface-border)] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-display font-medium text-[var(--foreground)]">
            <div className="flex items-center gap-1.5">
              <span className="text-[var(--accent)] font-bold">✓</span>
              <span>Sub-Second (&lt;0.8s) Load Speed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[var(--accent)] font-bold">✓</span>
              <span>100% Source Code Ownership</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[var(--accent)] font-bold">✓</span>
              <span>0% Monthly Platform Commissions</span>
            </div>
          </div>

          {/* Compact Action Bar */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => handleStartOnboarding()}
              className="px-6 py-3 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-display font-bold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg transition-all flex items-center gap-2.5 group cursor-pointer"
            >
              <span>Scope This Project — Free 2Hr SLA</span>
              <span className="group-hover:translate-x-1 transition-transform font-display text-xs">&rarr;</span>
            </button>

            <a
              href="#plans"
              className="px-5 py-3 rounded-full bg-[var(--surface)] hover:bg-[var(--surface-hover)] text-[var(--foreground)] font-display font-bold text-sm sm:text-base border border-[var(--surface-border)] transition-all flex items-center gap-1.5"
            >
              <span>Investment &amp; Packages ↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. COMPACT OUT-OF-THE-BOX INCLUSIONS */}
      <section id="inclusions" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full border-b border-[var(--surface-border)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Narrative Block */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-2.5">
            <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[var(--accent)] block">
              Out-of-the-Box Deliverables
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[var(--foreground)] tracking-tight leading-tight">
              Everything included right out of the box.
            </h2>
            <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
              We never charge hidden retainer fees or hold your domain hostage. Every {detail.item.title} project comes standard with complete engineering, hosting, and commercial ownership right from day one.
            </p>
          </div>

          {/* Right Horizontal Spec Rows */}
          <div className="lg:col-span-8 divide-y divide-[var(--surface-border)] border-y border-[var(--surface-border)]">
            {CORE_INCLUSIONS.map((item) => (
              <div key={item.num} className="py-4 sm:py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-start group">
                <div className="sm:col-span-2 font-display text-xs font-bold text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors mt-0.5">
                  {item.num} /
                </div>
                <div className="sm:col-span-10 space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="font-display font-bold text-base sm:text-lg text-[var(--foreground)]">
                      {item.title}
                    </h3>
                    <span className="font-display text-[11px] text-[var(--accent)] font-semibold">
                      {item.subtitle}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COMPACT BENCHMARK LEDGER */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full border-b border-[var(--surface-border)] bg-[var(--surface)]/20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[var(--surface-border)]">
          <div className="pt-4 sm:pt-0 sm:pl-5 first:pt-0 first:pl-0 flex flex-col justify-between">
            <span className="text-[11px] font-display font-semibold text-[var(--muted)] uppercase tracking-wider block mb-2">
              Page Load Response
            </span>
            <div>
              <span className="font-display font-black text-2xl sm:text-4xl text-[var(--foreground)] tracking-tight">
                &lt; 0.8s
              </span>
              <p className="mt-1 text-[11px] text-[var(--muted)]">
                Average edge latency
              </p>
            </div>
          </div>

          <div className="pt-4 sm:pt-0 sm:pl-5 flex flex-col justify-between">
            <span className="text-[11px] font-display font-semibold text-[var(--muted)] uppercase tracking-wider block mb-2">
              Core Web Vitals
            </span>
            <div>
              <span className="font-display font-black text-2xl sm:text-4xl text-[var(--foreground)] tracking-tight">
                99/100
              </span>
              <p className="mt-1 text-[11px] text-[var(--muted)]">
                Mobile &amp; desktop benchmark
              </p>
            </div>
          </div>

          <div className="pt-4 sm:pt-0 sm:pl-5 flex flex-col justify-between">
            <span className="text-[11px] font-display font-semibold text-[var(--muted)] uppercase tracking-wider block mb-2">
              Platform Transaction Tax
            </span>
            <div>
              <span className="font-display font-black text-2xl sm:text-4xl text-[var(--accent)] tracking-tight">
                ₹0
              </span>
              <p className="mt-1 text-[11px] text-[var(--muted)]">
                Keep 100% of sales forever
              </p>
            </div>
          </div>

          <div className="pt-4 sm:pt-0 sm:pl-5 flex flex-col justify-between">
            <span className="text-[11px] font-display font-semibold text-[var(--muted)] uppercase tracking-wider block mb-2">
              Source Code Handover
            </span>
            <div>
              <span className="font-display font-black text-2xl sm:text-4xl text-[var(--foreground)] tracking-tight">
                100%
              </span>
              <p className="mt-1 text-[11px] text-[var(--muted)]">
                Complete Git repository transfer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACCREDITATIONS MARQUEE */}
      <RecognitionMarquee />

      {/* 5. COMPACT SERVICE PACKAGES */}
      <section id="plans" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full border-b border-[var(--surface-border)]">
        <div className="max-w-2xl mb-10">
          <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[var(--accent)] block mb-1.5">
            Investment &amp; Delivery Scope
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-[var(--foreground)] tracking-tight">
            Transparent, structured packages.
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

      {/* 6. WHY CUSTOM BEATS RETAINERS (Compact Split Table) */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full border-b border-[var(--surface-border)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Narrative */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[var(--accent)] block">
              The Engineering Difference
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[var(--foreground)] tracking-tight leading-tight">
              Why custom architecture outperforms standard retainers.
            </h2>
            <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
              When you hire traditional web agencies or use generic page builders, your project is often forced into slow templates loaded with bloated plugins. Worse, SaaS platforms charge recurring percentage fees while keeping your code locked inside proprietary clouds.
            </p>
            <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
              India Web Designs takes a permanent, engineering-first approach. We build clean, high-performance assets that load in sub-seconds and rank organically on Google. Once deployed, you receive full ownership of the source code—with zero monthly retainer traps or commission taxes.
            </p>

            <div className="pt-3 border-t border-[var(--surface-border)]">
              <span className="font-display text-[11px] font-bold uppercase text-[var(--foreground)] block mb-1">
                Our Standard Guarantee:
              </span>
              <p className="text-xs text-[var(--muted)]">
                Clean code, sub-second response times, direct communication, and 100% intellectual property ownership.
              </p>
            </div>
          </div>

          {/* Right Comparison Table */}
          <div className="lg:col-span-7 rounded-xl border border-[var(--surface-border)] bg-[var(--surface)]/50 overflow-hidden text-xs">
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
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS (Compact Accordion) */}
      <section id="faqs" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full border-b border-[var(--surface-border)]">
        <div className="mb-8">
          <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[var(--accent)] block mb-1">
            Common Questions
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-[var(--foreground)] tracking-tight">
            Everything you need to know about our process.
          </h2>
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

      {/* 8. VERIFIED TESTIMONIALS SECTION */}
      <TestimonialsSection />

      {/* 9. COMPACT RELATED SERVICES */}
      <section id="related" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full border-t border-[var(--surface-border)]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[var(--accent)] block mb-1">
              Explore Further
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[var(--foreground)] tracking-tight">
              Related digital solutions &amp; services.
            </h2>
          </div>
          <Link
            href="/#services"
            className="text-xs font-display font-bold text-[var(--foreground)] hover:text-[var(--accent)] flex items-center gap-1.5 shrink-0 transition-colors"
          >
            <span>View All 30+ Services</span>
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

                <h3 className="font-display font-black text-base sm:text-lg text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  {relItem.title}
                </h3>
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
      </section>

      {/* COMPACT BOTTOM ACTION BANNER */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="p-6 sm:p-10 rounded-2xl bg-[var(--surface)] border border-[var(--surface-border)] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-md">
            <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[var(--accent)] block mb-2">
              Direct Project Scoping
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[var(--foreground)] tracking-tight leading-snug">
              Ready to engineer your {detail.item.title}?
            </h2>
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
              <span>Request Free Scoping &rarr;</span>
            </button>
          </div>
        </div>
      </section>

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
