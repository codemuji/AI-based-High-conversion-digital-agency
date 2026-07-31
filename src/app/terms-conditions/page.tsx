import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Terms and Conditions | India Web Designs",
  description: "Terms and Conditions outlining rules and regulations for the use of India Web Designs.",
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
            Terms and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-900 via-[var(--accent)] to-[#15803d]">
              Conditions.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-[var(--muted)] leading-relaxed font-normal max-w-2xl mx-auto">
            Welcome to INDIA WEB DESIGNS!
          </p>
        </div>
      </section>

      {/* Main Legal Content */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        <div className="p-8 sm:p-12 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-xl space-y-8 text-stone-700 leading-relaxed text-sm sm:text-base font-normal">
          <p>
            These terms and conditions outline the rules and regulations for the use of INDIA WEB DESIGNS&apos;s Website, located at WWW.INDIAWEBDESIGNS.IN.
          </p>

          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use INDIA WEB DESIGNS if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <p>
            The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: &ldquo;Client&rdquo;, &ldquo;You&rdquo; and &ldquo;Your&rdquo; refers to you, the person log on this website and compliant to the Company&apos;s terms and conditions. &ldquo;The Company&rdquo;, &ldquo;Ourselves&rdquo;, &ldquo;We&rdquo;, &ldquo;Our&rdquo; and &ldquo;Us&rdquo;, refers to our Company. &ldquo;Party&rdquo;, &ldquo;Parties&rdquo;, or &ldquo;Us&rdquo;, refers to both the Client and ourselves.
          </p>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-stone-900">Cookies</h2>
            <p>
              We employ the use of cookies. By accessing INDIA WEB DESIGNS, you agreed to use cookies in agreement with INDIA WEB DESIGNS&apos;s Privacy Policy.
            </p>
            <p>
              Most interactive websites use cookies to let us retrieve the user&apos;s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-stone-900">License</h2>
            <p>
              Unless otherwise stated, INDIA WEB DESIGNS and/or its licensors own the intellectual property rights for all material on INDIA WEB DESIGNS. All intellectual property rights are reserved. You may access this from INDIA WEB DESIGNS for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
            <p className="font-bold text-stone-900">You must not:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-stone-600">
              <li>Republish material from INDIA WEB DESIGNS</li>
              <li>Sell, rent or sub-license material from INDIA WEB DESIGNS</li>
              <li>Reproduce, duplicate or copy material from INDIA WEB DESIGNS</li>
              <li>Redistribute content from INDIA WEB DESIGNS</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-stone-900">User Comments &amp; Content</h2>
            <p>
              Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. INDIA WEB DESIGNS does not filter, edit, publish or review Comments prior to their presence on the website. Comments reflect the views and opinions of the person who post their views. To the extent permitted by applicable laws, INDIA WEB DESIGNS shall not be liable for Comments.
            </p>
            <p>
              INDIA WEB DESIGNS reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-stone-900">Hyperlinking to our Content</h2>
            <p>
              The following organizations may link to our Website without prior written approval: Government agencies, Search engines, News organizations, and Online directory distributors.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-stone-900">Reservation of Rights</h2>
            <p>
              We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and its linking policy at any time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
