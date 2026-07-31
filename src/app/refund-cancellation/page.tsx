import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Refund & Cancellation Policy | India Web Designs",
  description: "Official refund and cancellation policy governing service agreements with India Web Designs.",
};

export default function RefundCancellationPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col font-sans selection:bg-[var(--accent)] selection:text-white text-sm sm:text-base">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full py-16 sm:py-24 border-b border-[var(--surface-border)] overflow-hidden isolate">
        <div className="absolute inset-0 bg-textured-dot-grid opacity-75 mask-radial-vignette pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-stone-200/90 shadow-2xs text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)] mx-auto">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
            <span>TRANSPARENT REFUND &amp; CANCELLATION</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl text-[var(--foreground)] tracking-tight leading-tight">
            Refund{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-900 via-[var(--accent)] to-[#15803d]">
              Policy.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-[var(--muted)] leading-relaxed font-normal max-w-2xl mx-auto">
            Clear guidelines on milestone billing, project cancellations, and refund eligibility for custom engineering services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        <div className="p-8 sm:p-12 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-xl space-y-8 text-stone-700 leading-relaxed text-sm sm:text-base font-normal">
          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[var(--foreground)]">1. Project Cancellation Prior to Commencement</h2>
            <p>
              If a client requests project cancellation before engineering work or asset design has commenced, a 100% full refund of the deposit will be issued within 7 working days.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[var(--foreground)]">2. Milestone Work In-Progress</h2>
            <p>
              Because our team dedicates engineering hours and custom code assets to each milestone, refunds for milestones already completed and approved by the client are not eligible for reimbursement.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[var(--foreground)]">3. Domain &amp; Third-Party Hosting Fees</h2>
            <p>
              Third-party costs such as domain name registrations, SSL certificates, cloud server instances, and API license keys purchased on behalf of the client are non-refundable once registered.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[var(--foreground)]">4. Dispute Resolution Process</h2>
            <p>
              We prioritize client satisfaction. If any deliverable does not match the approved project specification, our engineering team will revise and optimize the implementation during the 30-day warranty window until full compliance is achieved.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
