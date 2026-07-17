"use client";

import React, { useState, ViewTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { USE_CASES_DATA, type UseCaseItem } from "@/lib/use-cases-data";
import { GROWTH_ROADMAP_SCALES, type GrowthRoadmapCard } from "@/lib/growth-roadmap-data";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";
import { OnboardingModal, type LeadSubmissionPayload } from "@/components/modal/OnboardingModal";
import { StickyIntakeBar } from "@/components/navigation/StickyIntakeBar";
import { submitLeadAction } from "@/app/actions";

interface UseCaseDetailViewProps {
  slug: string;
}

export function UseCaseDetailView({ slug }: UseCaseDetailViewProps) {
  const router = useRouter();

  // Check USE_CASES_DATA first, then check GROWTH_ROADMAP_SCALES
  let useCase: UseCaseItem | undefined = USE_CASES_DATA.find((item) => item.slug === slug);

  if (!useCase) {
    const roadmapCard: GrowthRoadmapCard | undefined = GROWTH_ROADMAP_SCALES.flatMap((tab) => tab.cards).find(
      (card) => card.slug === slug || card.id === slug
    );

    if (roadmapCard) {
      useCase = {
        slug: roadmapCard.slug,
        category: roadmapCard.intentCategory,
        vertical: roadmapCard.industry,
        bentoSpan: "col-span-1",
        imageUrl: roadmapCard.imageUrl,
        title: `${roadmapCard.industry} (${roadmapCard.scaleBracket}) Roadmap`,
        tagline: `Engineered architectural roadmap and step-by-step technical execution for businesses scaling in the ${roadmapCard.scaleBracket} tier. Delivery timeline: ${roadmapCard.timeline} | Investment Model: ${roadmapCard.investmentLevel}.`,
        metrics: {
          highlight: roadmapCard.highlightMetric,
          description: `Key operational impact and performance benchmark achieved by transitioning to our custom cloud architecture at the ${roadmapCard.scaleBracket} level.`,
        },
        challenge: {
          title: `Why Scaling in the ${roadmapCard.scaleBracket} Bracket Breaks Down with Templates`,
          points: [
            "Heavy Template Bloat & Slowdowns: Off-the-shelf templates and bloated WordPress/Shopify plugins freeze up under high concurrent user load.",
            "Manual Admin Exhaustion: Managing daily operations, fee collections, and customer inquiries manually without bespoke automation drains dozens of staff hours every week.",
            "Disconnected Data Silos: Using scattered third-party tools that do not sync reliably causes customer drop-off, transcription errors, and lost revenue.",
          ],
        },
        steps: roadmapCard.stages.map((stage) => ({
          stepNumber: stage.stageNumber,
          title: stage.title,
          description: stage.description,
          deliverable: `Custom built, tested, and deployed ${stage.title} module`,
        })),
        marketAdvantage: [
          "Sub-second page loading speeds (< 0.8s) across all mobile devices in India.",
          "Keep 100% of your revenue—zero third-party marketplace or aggregator commissions.",
          "Complete ownership of customer data, user accounts, and proprietary system code.",
          "Automated WhatsApp alerts, SMS notifications, and real-time executive operations control rooms.",
        ],
        sampleQuery: `We want to scope our ${roadmapCard.industry} project for the ${roadmapCard.scaleBracket} tier to achieve ${roadmapCard.highlightMetric}.`,
      };
    }
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      document.startViewTransition(() => {
        router.push(href, { scroll: true });
        if (href === "/") window.scrollTo(0, 0);
      });
    } else {
      router.push(href, { scroll: true });
      if (href === "/") window.scrollTo(0, 0);
    }
  };

  const handleStartOnboarding = () => {
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

  if (!useCase) {
    return (
      <main className="flex-1 bg-[var(--background)] relative min-h-screen flex flex-col justify-between pt-16">
        <Navbar />
        <div className="max-w-2xl mx-auto px-4 py-32 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[var(--accent)] block mb-2">
            {"// Use Case Not Found"}
          </span>
          <h1 className="font-display text-4xl font-black text-[var(--foreground)]">
            We couldn&apos;t find this business growth guide.
          </h1>
          <p className="mt-4 text-[var(--muted)]">
            The guide you are looking for may have been updated or moved.
          </p>
          <div className="mt-8">
            <Link
              href="/#use-cases"
              onClick={(e) => handleNavigate(e, "/#use-cases")}
              scroll={true}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-white font-bold text-sm shadow-md hover:scale-105 transition-all"
            >
              ← Back to All Use Cases
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="flex-1 bg-[var(--background)] relative min-h-screen flex flex-col justify-between pt-16 selection:bg-[var(--accent)] selection:text-white">
      <Navbar />

      {/* Breadcrumb Header */}
      <div className="border-b border-[var(--surface-border)] bg-[var(--surface)]/50 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-xs font-mono text-[var(--muted)]">
          <div className="flex items-center gap-2">
            <Link href="/" onClick={(e) => handleNavigate(e, "/")} scroll={true} className="hover:text-[var(--accent)] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/#use-cases" onClick={(e) => handleNavigate(e, "/#use-cases")} scroll={true} className="hover:text-[var(--accent)] transition-colors">
              Use Cases &amp; Roadmaps
            </Link>
            <span>/</span>
            <span className="text-[var(--foreground)] font-semibold truncate max-w-[200px] sm:max-w-md">
              {useCase.vertical}
            </span>
          </div>
          <Link
            href="/#use-cases"
            onClick={(e) => handleNavigate(e, "/#use-cases")}
            scroll={true}
            className="text-[var(--accent)] font-bold hover:underline flex items-center gap-1 shrink-0 cursor-pointer"
          >
            ← Back to Cards
          </Link>
        </div>
      </div>

      {/* Hero Header Banner with Native ViewTransition matching the homepage card */}
      <ViewTransition name={`use-case-card-${useCase.slug}`}>
        <section
          style={{ viewTransitionName: `use-case-card-${useCase.slug}` } as React.CSSProperties}
          className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[var(--surface-border)] w-full"
        >
          {/* HERO IMAGE BANNER MORPHING SEAMLESSLY FROM CARD IMAGE */}
          <ViewTransition name={`use-case-img-${useCase.slug}`}>
            <div
              style={{ viewTransitionName: `use-case-img-${useCase.slug}` } as React.CSSProperties}
              className="w-full h-64 sm:h-96 rounded-3xl overflow-hidden relative mb-10 border border-[var(--surface-border)] shadow-2xl bg-[var(--surface-hover)]"
            >
              <Image
                src={useCase.imageUrl}
                alt={useCase.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white font-mono text-xs">
                <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 font-bold">
                  ✓ {useCase.vertical} {"// ARCHITECTURAL ROADMAP"}
                </span>
                <span className="px-3 py-1.5 rounded-full bg-[#4ade80] text-stone-950 font-black shadow-lg">
                  {useCase.metrics.highlight}
                </span>
              </div>
            </div>
          </ViewTransition>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3.5 py-1 rounded-full bg-[var(--accent-subtle)] border border-[var(--accent)]/30 text-xs font-mono font-bold tracking-wider uppercase text-[var(--accent)]">
              {useCase.vertical} Growth Guide
            </span>
            <span className="px-3 py-1 rounded-full bg-[#f0fdf4] text-[var(--accent)] font-mono text-xs font-bold border border-[var(--accent)]/30">
              {useCase.metrics.highlight}
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-[var(--foreground)] tracking-tight leading-tight">
            {useCase.title}
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[var(--muted)] leading-relaxed max-w-3xl">
            {useCase.tagline}
          </p>

          {/* Highlight Metric Card */}
          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--muted)] block">
                Proven Business Impact
              </span>
              <span className="font-display font-black text-3xl sm:text-4xl text-[var(--accent)] mt-1 block">
                {useCase.metrics.highlight}
              </span>
            </div>
            <p className="text-sm sm:text-base text-[var(--foreground)] max-w-md">
              {useCase.metrics.description}
            </p>
            <button
              onClick={handleStartOnboarding}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[var(--accent)] text-white font-bold text-sm tracking-wide shadow-lg hover:scale-105 transition-all shrink-0 cursor-pointer"
            >
              Start This Growth Plan →
            </button>
          </div>
        </section>
      </ViewTransition>

      {/* Section 1: The Common Business Challenge */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[var(--surface-border)] w-full">
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#ef4444] block mb-2">
            {"// The Bottleneck"}
          </span>
          <h2 className="font-display text-2xl sm:text-4xl font-black text-[var(--foreground)]">
            {useCase.challenge.title}
          </h2>
          <p className="mt-3 text-base text-[var(--muted)]">
            Most business owners work tirelessly only to be held back by these exact hidden obstacles:
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCase.challenge.points.map((point, idx) => {
            const [boldPart, ...rest] = point.split(":");
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[var(--surface-border)] flex items-start gap-4 hover:border-[#ef4444]/40 transition-colors shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-[#ef4444]/10 text-[#ef4444] font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 border border-[#ef4444]/20">
                  ✕
                </div>
                <div>
                  <strong className="text-base font-bold text-[var(--foreground)] block">
                    {boldPart}
                  </strong>
                  <p className="mt-1.5 text-sm text-[var(--muted)] leading-relaxed">
                    {rest.join(":") || point}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 2: Our Step-by-Step Growth Solution */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-[var(--surface-border)] w-full">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[var(--accent)] block mb-2">
            {"// How We Build & Implement"}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-[var(--foreground)]">
            Our step-by-step digital growth solution.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[var(--muted)]">
            We don&apos;t use confusing jargon or bloated plugins. Here is exactly how we engineer your unfair market advantage:
          </p>
        </div>

        <div className="space-y-8">
          {useCase.steps.map((step) => (
            <div
              key={step.stepNumber}
              className="p-6 sm:p-8 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] hover:border-[var(--accent)]/60 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md"
            >
              <div className="flex items-start gap-6 max-w-2xl">
                <span className="font-mono text-3xl sm:text-4xl font-black text-[var(--accent)]/30 select-none shrink-0">
                  {step.stepNumber}
                </span>
                <div>
                  <h3 className="font-display font-black text-xl sm:text-2xl text-[var(--foreground)]">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="w-full md:w-auto p-4 rounded-2xl bg-[var(--background)] border border-[var(--surface-border)] shrink-0 max-w-xs">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--muted)] block mb-1">
                  Key Deliverable
                </span>
                <span className="text-xs font-bold text-[var(--accent)] block">
                  ✓ {step.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Your Unfair Market Advantage */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="p-8 sm:p-12 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[var(--accent)] block mb-2">
              {"// Your Winning Edge"}
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-black text-[var(--foreground)]">
              Your permanent market advantage.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[var(--muted)]">
              Once deployed, this custom system gives your business immediate advantages that your competitors simply cannot match:
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {useCase.marketAdvantage.map((adv, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[var(--background)] border border-[var(--surface-border)]">
                <div className="w-5 h-5 rounded-full bg-[#f0fdf4] text-[var(--accent)] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base font-medium text-[var(--foreground)]">
                  {adv}
                </span>
              </div>
            ))}
          </div>

          {/* Big Action CTA Banner */}
          <div className="relative z-10 mt-12 pt-8 border-t border-[var(--surface-border)] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-[var(--foreground)]">
                Ready to implement this exact growth plan?
              </h3>
              <p className="text-xs sm:text-sm text-[var(--muted)] mt-1">
                Tell us your goals and we&apos;ll prepare your free custom roadmap in minutes.
              </p>
            </div>
            <button
              onClick={handleStartOnboarding}
              className="px-8 py-4 rounded-2xl bg-[var(--accent)] text-white font-extrabold text-base tracking-wide shadow-xl hover:scale-105 transition-all shrink-0 cursor-pointer"
            >
              Start This Growth Plan Now →
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Interactive Onboarding Modal */}
      <OnboardingModal
        isOpen={isModalOpen}
        category={useCase.category}
        initialQuery={useCase.sampleQuery}
        onClose={handleCloseModal}
        onSubmit={handleSubmitLead}
      />

      {/* Sticky Bottom Intake Trigger */}
      <StickyIntakeBar
        isModalOpen={isModalOpen}
        onOpenIntake={handleStartOnboarding}
      />
    </main>
  );
}
