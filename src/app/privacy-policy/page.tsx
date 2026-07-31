import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Privacy Policy | India Web Designs",
  description: "Privacy policy detailing data protection, client confidentiality, and security standards at India Web Designs.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col font-sans selection:bg-[var(--accent)] selection:text-white text-sm sm:text-base">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full py-16 sm:py-24 border-b border-[var(--surface-border)] overflow-hidden isolate">
        <div className="absolute inset-0 bg-textured-dot-grid opacity-75 mask-radial-vignette pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-stone-200/90 shadow-2xs text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)] mx-auto">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
            <span>DATA PROTECTION &amp; SECURITY</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl text-[var(--foreground)] tracking-tight leading-tight">
            Privacy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-900 via-[var(--accent)] to-[#15803d]">
              Policy.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-[var(--muted)] leading-relaxed font-normal max-w-2xl mx-auto">
            We prioritize confidentiality, client data sovereignty, and strict compliance with Indian Information Technology regulations.
          </p>
        </div>
      </section>

      {/* Main Privacy Policy Content */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        <div className="p-8 sm:p-12 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-xl space-y-8 text-stone-700 leading-relaxed text-sm sm:text-base font-normal">
          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[var(--foreground)]">1. Collection of Information</h2>
            <p>
              We collect information provided directly by clients during project scoping, onboarding forms, contact inquiries, and contract execution (e.g. name, company name, contact email, phone number, and project specifications).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[var(--foreground)]">2. Non-Disclosure &amp; Confidentiality</h2>
            <p>
              All proprietary project data, database contents, client business logic, credentials, and code repositories shared with India Web Designs are kept strictly confidential under Non-Disclosure Agreements (NDA). We never sell or share client data with third parties.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[var(--foreground)]">3. Security Standards</h2>
            <p>
              We employ SSL encryption, multi-factor access authentication, and secure database protocols to guard against unauthorized access, data alteration, or disclosure.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[var(--foreground)]">4. Cookies &amp; Analytics</h2>
            <p>
              Our website uses basic performance cookies to analyze user navigation traffic and optimize page performance. You may disable cookies in your browser settings at any time.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-[var(--foreground)]">5. Contact Privacy Officer</h2>
            <p>
              If you have any questions regarding our data privacy practices, please contact our team directly at <strong>hello@codemuji.com</strong>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
