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
import { ServiceHeroVisualizer } from "@/components/services/ServiceHeroVisualizer";
import { ExpertConsultationModal } from "@/components/modal/ExpertConsultationModal";

const SERVICE_HERO_IMAGES: Record<string, string> = {
  "school-management-online-software-in-india": "/images/school-management-software.jpg",
};

const SERVICE_HERO_TITLES: Record<string, { prefix: string }> = {
  "school-management-online-software-in-india": {
    prefix: "Streamline school operations\n& fee collection with",
  },
  "college-management-online-software-in-india": {
    prefix: "Digitize campus administration & student ERP with",
  },
  "vocational-school-management-online-software-in-india": {
    prefix: "Automate institute batches & placement tracking with",
  },
  "static-website-design-services-in-india": {
    prefix: "Build a sub-second, high-converting web presence with",
  },
  "dynamic-website-design-services-in-india": {
    prefix: "Power content management & admin workflows with",
  },
  "ecommerce-website-design-services-in-india": {
    prefix: "Scale online sales & zero-commission store growth with",
  },
  "mobile-website-design-services-in-india": {
    prefix: "Capture mobile shoppers with 100% responsive",
  },
  "red": {
    prefix: "Transform legacy web assets into conversion engines with",
  },
  "search-engine-optimization-seo-outsourcing-to-india": {
    prefix: "Rank #1 on Google & capture high-intent buyers with",
  },
  "social-media-marketing-services": {
    prefix: "Engage target audiences & drive ad ROI with",
  },
  "bulk-sms-marketing-services-in-india": {
    prefix: "Broadcast direct promotional alerts with instant",
  },
  "whatsapp-marketing-services-in-inida": {
    prefix: "Deploy 24/7 automated customer assistants with",
  },
  "ads": {
    prefix: "Capture immediate high-value customer inquiries with",
  },
  "ecommerce-mobile-app-development-services-in-india": {
    prefix: "Build native iOS & Android shopping applications with",
  },
  "ecommerce-multivendor-mobile-app-development-services-in-india": {
    prefix: "Scale a multi-seller digital marketplace with",
  },
  "video-streaming-ott-app-development-services-in-india": {
    prefix: "Deliver buffer-free 4K video streaming with",
  },
  "online-food-delivery-mobile-app-development-service-in-india": {
    prefix: "Zero-commission restaurant ordering & dispatch with",
  },
  "online-consultation-mobile-app": {
    prefix: "Schedule appointments & conduct video calls with",
  },
  "online-learning-portal-development-service-in-india": {
    prefix: "Deliver course LMS & automated certifications with",
  },
  "online-matrimony-website-development-service-in-india": {
    prefix: "Build secure matchmaking & private portal filters with",
  },
  "online-news-portal-development-service-in-india": {
    prefix: "Publish breaking news alerts with ultra-fast",
  },
};

interface ServiceDetailViewProps {
  id: string;
}

export function ServiceDetailView({ id }: ServiceDetailViewProps) {
  const router = useRouter();
  const detail = getServiceDetail(id);
  const heroImage = SERVICE_HERO_IMAGES[detail.id] || SERVICE_HERO_IMAGES[detail.item.id];
  const heroTitleInfo = SERVICE_HERO_TITLES[detail.id] || SERVICE_HERO_TITLES[detail.item.id];
  const heroPrefix = heroTitleInfo?.prefix || "Grow your business with";
  const packages = getServicePackages(detail);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpertModalOpen, setIsExpertModalOpen] = useState(false);
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

      {/* 1. HERO SECTION (2-COLUMN LAYOUT WITH SPECIFIC SERVICE VISUALIZER) */}
      <section id="hero" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden w-full border-b border-[var(--surface-border)]">
        {/* Background signature motif & ambient glow */}
        <div className="absolute inset-0 bg-grid-pattern -z-10 opacity-60 mask-radial" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[22rem] bg-[var(--accent)]/10 blur-[120px] -z-10 rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT COLUMN: Title, Description, Checkmark Grid & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 text-left space-y-6">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--surface-border)] shadow-2xs text-xs sm:text-sm font-display uppercase tracking-wider text-[var(--muted)]">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-bold text-[var(--foreground)]">India's Trusted {detail.groupName} Experts</span>
              {detail.item.badge && (
                <>
                  <span className="text-[var(--surface-border)]">•</span>
                  <span className="text-[var(--accent)] font-bold">★ {detail.item.badge}</span>
                </>
              )}
            </div>

            {/* Main Headline */}
            <h1 className="font-display max-w-xl text-left leading-tight">
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--foreground)] leading-snug mb-2">
                {heroPrefix.split("\n").map((line, idx) => (
                  <span key={idx} className="block">
                    {line}
                  </span>
                ))}
              </span>
              <span className="relative inline-block max-w-full text-[var(--accent)] font-black whitespace-nowrap text-[clamp(1rem,2.3vw,2.25rem)] tracking-tight py-1">
                {detail.item.title}
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 sm:h-4 text-[var(--accent)] opacity-90 overflow-visible pointer-events-none"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2 10 Q 50 20 98 10"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle / Overview */}
            <p className="text-sm sm:text-base md:text-lg text-[var(--muted)] leading-relaxed font-normal max-w-xl">
              {detail.overview.split(". ")[0]}.
            </p>

            {/* Key Features Checkmark Grid */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm font-medium text-[var(--foreground)] pt-1">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                <span>Sub-Second (&lt;0.8s) Speed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                <span>100% IP Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                <span>0% Monthly Commission</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                <span>AI &amp; Search Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">✓</span>
                <span>Delivered in {detail.item.timeline}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setIsExpertModalOpen(true)}
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

            {/* Social Proof Rating */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-semibold text-[var(--muted)]">
              <div className="flex text-amber-400 gap-0.5">
                ★ ★ ★ ★ ★
              </div>
              <span className="text-[var(--foreground)] font-bold">4.9/5 from 500+ businesses</span>
              <span className="text-[var(--surface-border)]">•</span>
              <span className="flex items-center gap-1">
                <span className="font-bold text-blue-600">G</span>oogle Reviews
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Service-Specific Visualizer & Floating Badges */}
          <div className="lg:col-span-6 xl:col-span-6 w-full relative max-w-lg mx-auto">
            {/* Floating Metric Card 1 - Top Left */}
            <div className="hidden sm:flex absolute -top-3 -left-3 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-md backdrop-blur-md">
              <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">⚡</span>
              <div>
                <div className="text-[10px] font-bold text-[var(--foreground)]">99 PageSpeed</div>
                <div className="text-[9px] text-[var(--muted)]">Sub-Second Load</div>
              </div>
            </div>

            {/* Floating Metric Card 2 - Top Right */}
            <div className="hidden sm:flex absolute -top-3 -right-3 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-md backdrop-blur-md">
              <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">🎯</span>
              <div>
                <div className="text-[10px] font-bold text-[var(--foreground)]">100 SEO Score</div>
                <div className="text-[9px] text-[var(--muted)]">Google Rank #1</div>
              </div>
            </div>

            {/* Floating Metric Card 3 - Bottom Right */}
            <div className="hidden sm:flex absolute -bottom-3 -right-3 z-20 items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-md backdrop-blur-md">
              <span className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">📱</span>
              <div>
                <div className="text-[10px] font-bold text-[var(--foreground)]">100% Responsive</div>
                <div className="text-[9px] text-[var(--muted)]">Mobile Ready</div>
              </div>
            </div>

            {/* Main Hero Visual / Custom Service Image */}
            {heroImage ? (
              <div className="relative max-w-md sm:max-w-lg mx-auto rounded-2xl overflow-hidden border border-[var(--surface-border)] shadow-xl bg-[var(--surface)] p-1.5 sm:p-2 transition-transform duration-300 hover:scale-[1.01]">
                <img
                  src={heroImage}
                  alt={`${detail.item.title} Dashboard Showcase`}
                  className="w-full h-auto max-h-[350px] sm:max-h-[380px] object-contain rounded-xl"
                />
              </div>
            ) : (
              <ServiceHeroVisualizer detail={detail} />
            )}
          </div>
        </div>
      </section>

      {/* ACCREDITATIONS MARQUEE */}
      <RecognitionMarquee />

      {/* 2. PRICING SECTION */}
      <section id="plans" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full border-b border-[var(--surface-border)]">
        <div className="max-w-2xl mx-auto mb-10 text-center">
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
      <section id="long-description" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full border-t border-[var(--surface-border)] space-y-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[var(--accent)] block">
            Detailed Overview &amp; Specifications
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[var(--foreground)] tracking-tight leading-tight">
            Comprehensive guide to {detail.item.title}
          </h2>
        </div>

        {/* Detailed Service Long Paragraph */}
        <div className="max-w-3xl mx-auto text-sm sm:text-base text-[var(--muted)] leading-relaxed space-y-4 font-sans text-left bg-[var(--surface)]/60 p-6 sm:p-8 rounded-2xl border border-[var(--surface-border)] shadow-xs">
          <p>
            {detail.overview} {detail.targetAudience ? `This solution is specifically engineered for ${detail.targetAudience.toLowerCase()}, providing a secure, ultra-fast, and scalable architectural framework that eliminates legacy inefficiencies.` : ""}
          </p>
          {detail.deliverables && detail.deliverables.length > 0 && (
            <p>
              Our production build for {detail.item.title} incorporates complete end-to-end technical deliverables including {detail.deliverables.join(", ")}, engineered with sub-second page performance, 100% intellectual property ownership, zero ongoing commission taxes, and full enterprise data security compliance.
            </p>
          )}
        </div>

        {/* Related Services */}
        <div className="pt-8 border-t border-[var(--surface-border)] space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[var(--accent)] block mb-1">
              Explore Further
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[var(--foreground)] tracking-tight">
              Related digital solutions &amp; services
            </h3>
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
              onClick={() => setIsExpertModalOpen(true)}
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

      <ExpertConsultationModal
        isOpen={isExpertModalOpen}
        serviceTitle={detail.item.title}
        onClose={() => setIsExpertModalOpen(false)}
      />

      <StickyIntakeBar
        isModalOpen={isModalOpen}
        onOpenIntake={() => handleStartOnboarding()}
      />
    </main>
  );
}
