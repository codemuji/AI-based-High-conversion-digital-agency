"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getServiceDetail } from "@/lib/services-detail-data";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";
import { OnboardingModal, type LeadSubmissionPayload } from "@/components/modal/OnboardingModal";
import { StickyIntakeBar } from "@/components/navigation/StickyIntakeBar";
import { submitLeadAction } from "@/app/actions";

interface ServiceDetailViewProps {
  id: string;
}

export function ServiceDetailView({ id }: ServiceDetailViewProps) {
  const router = useRouter();
  const detail = getServiceDetail(id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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

  const sampleQuery = `We want to scope a project for ${detail.item.title} (${detail.groupName}) with timeline ${detail.item.timeline} to achieve ${detail.item.metrics}.`;

  return (
    <main key={detail.item.id} className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col font-sans selection:bg-[var(--accent)] selection:text-white animate-fadeIn">
      <Navbar onStartOnboarding={() => handleStartOnboarding()} />

      {/* HERO SECTION */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full overflow-hidden">
        {/* Subtle dot pattern matching home page */}
        <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex flex-wrap items-center gap-2 text-xs font-mono text-[var(--muted)] mb-6 animate-slideDown delay-100">
            <Link href="/" className="hover:text-[var(--accent)] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-[var(--accent)] transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-[var(--muted)]">{detail.groupName}</span>
            <span>/</span>
            <span className="text-[var(--foreground)] font-bold">{detail.item.title}</span>
          </nav>

          {/* Category & Badge Pills */}
          <div className="flex flex-wrap items-center gap-3 mb-6 animate-slideDown delay-150">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--surface-border)] text-xs font-mono font-bold text-[var(--accent)] tracking-wider uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span>{`${detail.groupName} Architecture`}</span>
            </span>
            {detail.item.badge && (
              <span className="px-3 py-1 rounded-full bg-[var(--accent-subtle)] border border-[var(--accent)]/30 text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider">
                ★ {detail.item.badge}
              </span>
            )}
          </div>

          {/* Main Title */}
          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[var(--foreground)] tracking-tight leading-[1.08] max-w-4xl animate-slideUp delay-200">
            {detail.item.title}
          </h1>

          {/* Core Overview Description */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-[var(--muted)] leading-relaxed max-w-4xl font-normal animate-slideUp delay-300">
            {detail.overview}
          </p>

          {/* Target Audience Callout */}
          <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-md max-w-4xl flex items-start gap-4 animate-slideUp delay-400">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-subtle)] border border-[var(--accent)]/30 flex items-center justify-center text-lg text-[var(--accent)] shrink-0 font-mono font-bold mt-0.5">
              🎯
            </div>
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)]">
                Ideal Target Profile
              </h3>
              <p className="mt-1 text-sm sm:text-base text-[var(--foreground)] leading-relaxed">
                {detail.targetAudience}
              </p>
            </div>
          </div>

          {/* Engineering Bento Stat Bar */}
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl font-mono animate-slideUp delay-500">
            <div className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--surface-border)] flex flex-col justify-between shadow-xs hover:border-[var(--accent)]/40 transition-all">
              <span className="text-[10px] uppercase tracking-wider text-[var(--muted)] font-bold">
                Estimated Timeline
              </span>
              <span className="mt-2 text-sm sm:text-base font-bold text-[var(--foreground)] flex items-center gap-1.5">
                <span className="text-[var(--accent)]">⚡</span> {detail.item.timeline}
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--surface-border)] flex flex-col justify-between shadow-xs hover:border-[var(--accent)]/40 transition-all">
              <span className="text-[10px] uppercase tracking-wider text-[var(--muted)] font-bold">
                Expected Impact
              </span>
              <span className="mt-2 text-sm sm:text-base font-bold text-[var(--accent)] flex items-center gap-1.5">
                <span>★</span> {detail.item.metrics}
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--surface-border)] flex flex-col justify-between shadow-xs hover:border-[var(--accent)]/40 transition-all">
              <span className="text-[10px] uppercase tracking-wider text-[var(--muted)] font-bold">
                Engineering Standard
              </span>
              <span className="mt-2 text-xs sm:text-sm font-bold text-[var(--foreground)]">
                100% In-House Custom Code
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--surface)] border border-[var(--surface-border)] flex flex-col justify-between shadow-xs hover:border-[var(--accent)]/40 transition-all">
              <span className="text-[10px] uppercase tracking-wider text-[var(--muted)] font-bold">
                Platform Commissions
              </span>
              <span className="mt-2 text-xs sm:text-sm font-bold text-[var(--accent)]">
                0% Forever (You Own 100%)
              </span>
            </div>
          </div>

          {/* Hero Action Button */}
          <div className="mt-10 flex flex-wrap items-center gap-4 animate-scaleFadeIn delay-600">
            <button
              type="button"
              onClick={handleStartOnboarding}
              className="px-8 py-4 rounded-2xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-display font-extrabold text-base sm:text-lg shadow-xl hover:scale-105 active:scale-[0.98] transition-all flex items-center gap-3 group cursor-pointer"
            >
              <span>Scope This Service Now ⚡</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <span className="text-xs font-mono text-[var(--muted)] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              Guaranteed 2-Hour Architectural Response
            </span>
          </div>
        </div>
      </section>

      {/* CORE PILLARS / ARCHITECTURAL BLUEPRINT */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-[var(--surface-border)] animate-fadeIn delay-400">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[var(--accent)] block mb-2">
            {'// Core Architecture & Capabilities'}
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[var(--foreground)] tracking-tight">
            Engineered specifically for {detail.item.title}.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
            Every layer of our implementation is engineered to eliminate technical bloat, guarantee high speed, and maximize your business ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {detail.corePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group p-6 sm:p-8 rounded-3xl bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--surface-border)] shadow-md hover:shadow-xl hover:border-[var(--accent)]/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/5 rounded-bl-full pointer-events-none group-hover:bg-[var(--accent)]/15 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xl sm:text-2xl font-black text-[var(--muted-light)] group-hover:text-[var(--accent)] transition-colors">
                    {`0${idx + 1}`}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[var(--accent-subtle)] border border-[var(--accent)]/30 font-mono text-[11px] font-bold text-[var(--accent)] transition-all">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--surface-border)] flex items-center justify-between font-mono text-xs text-[var(--muted)] transition-colors">
                <span>Architectural Standard</span>
                <span className="text-[var(--accent)] font-bold">Verified ✓</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DELIVERABLES & TECH STACK BENTO MATRIX */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-[var(--surface-border)] animate-fadeIn delay-500">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Panel: Deliverables Checklist (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--accent)]">
                  Tangible Deliverables
                </span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[var(--foreground)]">
                What you receive upon delivery.
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] mb-8">
                Clear, transparent deliverables with 100% intellectual property ownership.
              </p>

              <ul className="space-y-4">
                {detail.deliverables.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[var(--background)] border border-[var(--surface-border)] hover:border-[var(--accent)]/40 transition-colors"
                  >
                    <span className="w-6 h-6 rounded-lg bg-[var(--accent-subtle)] border border-[var(--accent)]/30 text-[var(--accent)] flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-sm sm:text-base text-[var(--foreground)] font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--surface-border)] flex items-center justify-between text-xs font-mono text-[var(--muted)]">
              <span>Source Code Handover: 100% Guaranteed</span>
              <span className="text-[var(--accent)] font-semibold">No Recurring Licensing</span>
            </div>
          </div>

          {/* Right Panel: Tech Stack Matrix (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-10 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--accent)]">
                  Engineering Stack
                </span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[var(--foreground)]">
                Core Technologies
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] mb-8">
                Modern, enterprise-grade tooling chosen specifically for high performance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {detail.techStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[var(--background)] border border-[var(--surface-border)] hover:border-[var(--accent)]/40 transition-all flex flex-col justify-center"
                  >
                    <span className="text-[10px] font-mono font-bold uppercase text-[var(--muted)] tracking-wider">
                      {tech.category}
                    </span>
                    <span className="mt-1 text-sm sm:text-base font-bold text-[var(--foreground)] tracking-tight">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--surface-border)]">
              <div className="p-4 rounded-2xl bg-[var(--background)] border border-[var(--surface-border)] text-xs font-mono text-[var(--muted)] leading-relaxed">
                <span className="text-[var(--accent)] font-bold block mb-1">💡 Architecture Note:</span>
                We write clean, documented TypeScript and clean code adhering to strict security standards with zero bloat.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEP-BY-STEP ROADMAP */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-[var(--surface-border)] animate-fadeIn delay-500">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[var(--accent)] block mb-2">
            {'// Execution Roadmap'}
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[var(--foreground)] tracking-tight">
            Technical execution stages.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
            Our systematic process guarantees clear communication, rapid prototyping, and zero surprises on launch day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {detail.phases.map((phase, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-md hover:border-[var(--accent)]/40 transition-all flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-5 font-mono">
                  <span className="text-xs font-bold text-[var(--accent)] px-2.5 py-1 rounded bg-[var(--accent-subtle)] border border-[var(--accent)]/30">
                    {phase.number}
                  </span>
                  <span className="text-xs font-semibold text-[var(--muted)]">
                    ⏱ {phase.duration}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-[var(--foreground)] leading-snug">
                  {phase.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                  {phase.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--surface-border)] font-mono text-[11px] text-[var(--muted)]">
                Stage Checkpoint {idx + 1} / {detail.phases.length}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HEAD-TO-HEAD ARCHITECTURAL COMPARISON */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-[var(--surface-border)] animate-fadeIn delay-600">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[var(--accent)] block mb-2">
            {'// Why Custom Engineering Wins'}
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[var(--foreground)] tracking-tight">
            The architectural difference.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
            See how our in-house engineering compares against typical agencies and off-the-shelf SaaS templates.
          </p>
        </div>

        <div className="rounded-3xl border border-[var(--surface-border)] bg-[var(--surface)] shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 bg-[var(--background)] p-4 sm:p-6 border-b border-[var(--surface-border)] font-mono text-xs sm:text-sm font-bold">
            <div className="md:col-span-4 text-[var(--muted)]">Evaluation Criteria</div>
            <div className="md:col-span-4 text-[var(--accent)] mt-2 md:mt-0 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              India Web Designs Standard
            </div>
            <div className="md:col-span-4 text-[var(--muted)] mt-2 md:mt-0">Typical Agencies / SaaS Templates</div>
          </div>

          <div className="divide-y divide-[var(--surface-border)] font-sans">
            {detail.comparison.map((comp, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 gap-4 hover:bg-[var(--surface-hover)] transition-colors">
                <div className="md:col-span-4 font-bold text-sm sm:text-base text-[var(--foreground)] flex items-center">
                  {comp.feature}
                </div>
                <div className="md:col-span-4 text-sm sm:text-base text-[var(--foreground)] font-medium bg-[var(--accent-subtle)] p-3.5 rounded-xl border border-[var(--accent)]/30 flex items-center gap-2">
                  <span className="text-[var(--accent)] font-bold">✓</span>
                  <span>{comp.ourStandard}</span>
                </div>
                <div className="md:col-span-4 text-sm sm:text-base text-[var(--muted)] p-3.5 rounded-xl bg-[var(--background)] border border-[var(--surface-border)] flex items-center gap-2">
                  <span className="text-red-500 font-bold">×</span>
                  <span>{comp.typicalAgency}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full border-t border-[var(--surface-border)] animate-fadeIn delay-600">
        <div className="mb-12 text-center sm:text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[var(--accent)] block mb-2">
            {'// Knowledge Base'}
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[var(--foreground)] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[var(--muted)]">
            Everything you need to know about our {detail.item.title} execution.
          </p>
        </div>

        <div className="space-y-4">
          {detail.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] shadow-md overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left font-display font-bold text-base sm:text-lg text-[var(--foreground)] flex items-center justify-between gap-4 cursor-pointer hover:text-[var(--accent)] transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className={`font-mono text-xl text-[var(--accent)] transform transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-[var(--muted)] leading-relaxed border-t border-[var(--surface-border)] pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM ACTION BANNER */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full animate-scaleFadeIn delay-700">
        <div className="p-8 sm:p-14 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-[var(--accent)]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--background)] border border-[var(--surface-border)] text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--accent)] mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span>Direct Engineering Scoping</span>
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[var(--foreground)] tracking-tight leading-snug">
              Ready to scope your {detail.item.title}?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
              Answer 4 simple questions and our senior architects will prepare your exact delivery timeline, cost model, and technical roadmap in under 2 hours.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              type="button"
              onClick={handleStartOnboarding}
              className="px-8 py-5 rounded-2xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-display font-extrabold text-base sm:text-lg tracking-wide shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer flex items-center gap-3"
            >
              <span>Launch Scoping Modal &rarr;</span>
            </button>
          </div>
        </div>
      </section>

      <Footer onStartOnboarding={handleStartOnboarding} />

      {/* Interactive Onboarding Modal */}
      <OnboardingModal
        isOpen={isModalOpen}
        category={detail.item.category}
        initialQuery={sampleQuery}
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
