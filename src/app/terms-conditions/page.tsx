import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Terms & Conditions | India Web Designs",
  description: "Terms & Conditions governing project engagements, deliverables, and service agreements with India Web Designs.",
};

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col font-sans selection:bg-[var(--accent)] selection:text-white text-sm sm:text-base">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full py-16 sm:py-24 border-b border-[var(--surface-border)] overflow-hidden isolate">
        <div className="absolute inset-0 bg-textured-dot-grid opacity-75 mask-radial-vignette pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-stone-200/90 shadow-2xs text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)] mx-auto">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
            <span>LEGAL AGREEMENT &amp; GOVERNANCE</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl text-[var(--foreground)] tracking-tight leading-tight">
            Terms &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-900 via-[var(--accent)] to-[#15803d]">
              Conditions.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-[var(--muted)] leading-relaxed font-normal max-w-2xl mx-auto">
            Standard operating terms governing web design, application development, software engineering, and digital marketing services provided by India Web Designs.
          </p>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        <div className="p-8 sm:p-12 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-xl space-y-8 text-stone-700 leading-relaxed text-sm sm:text-base font-normal">
          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[var(--foreground)]">1. Acceptance of Terms</h2>
            <p>
              By commissioning a project or subscribing to any web design, software development, mobile application, or digital marketing service provided by India Web Designs (a brand managed by WeBotApp Pvt. Ltd.), you agree to be bound by these Terms &amp; Conditions.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[var(--foreground)]">2. Scope of Work &amp; Deliverables</h2>
            <p>
              All service deliverables, milestones, tech stacks, and timelines are outlined in the project Proposal or Statement of Work (SOW). Any additional feature requests beyond the approved SOW will be treated as Change Requests and billed separately.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[var(--foreground)]">3. Payments &amp; Milestones</h2>
            <p>
              Projects are executed on a milestone basis. Work commences upon receipt of the initial advance deposit. Final source code transfer, database migration, and live deployment take place upon settlement of the final milestone balance.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[var(--foreground)]">4. Intellectual Property</h2>
            <p>
              Upon 100% full payment settlement, the client retains full ownership of the final codebase, assets, and design files created specifically for the project, excluding proprietary third-party libraries or underlying open-source frameworks.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[var(--foreground)]">5. Post-Launch Warranty</h2>
            <p>
              All custom web applications include 30 days of post-launch technical warranty to fix any bugs or defects originating from the original SOW deliverables at zero additional cost.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
