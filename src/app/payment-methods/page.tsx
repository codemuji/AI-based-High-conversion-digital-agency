import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Payment Methods | India Web Designs",
  description: "Official payment channels, banking details, UPI, and payment gateway information for India Web Designs.",
};

export default function PaymentMethodsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col font-sans selection:bg-[var(--accent)] selection:text-white text-sm sm:text-base">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full py-16 sm:py-24 border-b border-[var(--surface-border)] overflow-hidden isolate">
        <div className="absolute inset-0 bg-textured-dot-grid opacity-75 mask-radial-vignette pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-stone-200/90 shadow-2xs text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)] mx-auto">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
            <span>SECURE BILLING &amp; TRANSACTIONS</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl text-[var(--foreground)] tracking-tight leading-tight">
            Payment{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-900 via-[var(--accent)] to-[#15803d]">
              Methods.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-[var(--muted)] leading-relaxed font-normal max-w-2xl mx-auto">
            Transparent, secure, and instant payment methods for all web design, software development, and digital marketing services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Method 1: Bank Transfer */}
          <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-white flex items-center justify-center font-bold text-lg">
              🏦
            </div>
            <h2 className="font-display font-bold text-xl text-[var(--foreground)]">Direct Bank Transfer (NEFT/RTGS/IMPS)</h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Pay directly via electronic bank transfer to our official corporate current bank account.
            </p>
            <div className="p-4 rounded-2xl bg-stone-100 text-stone-800 font-mono text-xs space-y-1.5 border border-stone-200">
              <p><strong>Account Name:</strong> WeBotApp Pvt. Ltd. (India Web Designs)</p>
              <p><strong>Account Type:</strong> Current Account</p>
              <p><strong>Bank:</strong> HDFC Bank</p>
              <p><strong>IFSC Code:</strong> HDFC0000289</p>
            </div>
          </div>

          {/* Method 2: UPI & QR */}
          <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-white flex items-center justify-center font-bold text-lg">
              📱
            </div>
            <h2 className="font-display font-bold text-xl text-[var(--foreground)]">Instant UPI &amp; Mobile Apps</h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Scan or transfer using Google Pay, PhonePe, Paytm, or BHIM UPI apps instantly.
            </p>
            <div className="p-4 rounded-2xl bg-stone-100 text-stone-800 font-mono text-xs space-y-1.5 border border-stone-200">
              <p><strong>UPI ID:</strong> 7002160093@paytm</p>
              <p><strong>Direct Number:</strong> +91 70021 60093</p>
              <p><strong>Verification Name:</strong> India Web Designs / WeBotApp</p>
            </div>
          </div>

          {/* Method 3: Cards & Gateway */}
          <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-white flex items-center justify-center font-bold text-lg">
              💳
            </div>
            <h2 className="font-display font-bold text-xl text-[var(--foreground)]">Credit &amp; Debit Cards (Payment Link)</h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              We send secure Razorpay / HDFC payment links for Instant Card payments (Visa, MasterCard, RuPay, Corporate Cards).
            </p>
          </div>

          {/* Method 4: International PayPal */}
          <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-xl space-y-4">
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-white flex items-center justify-center font-bold text-lg">
              🌐
            </div>
            <h2 className="font-display font-bold text-xl text-[var(--foreground)]">International Clients (PayPal / Wire)</h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              International clients can process payments via PayPal in USD, EUR, GBP, or direct SWIFT Wire Transfer.
            </p>
          </div>
        </div>

        {/* GST Notice */}
        <div className="p-6 rounded-2xl bg-stone-900 text-white space-y-2 border border-stone-800 text-xs sm:text-sm leading-relaxed">
          <h3 className="font-display font-bold text-base text-emerald-400">Important Invoicing Note</h3>
          <p className="text-stone-300">
            All official invoices issued by India Web Designs include GST tax compliance breakdown. Please share your corporate GSTIN during project scoping for GST tax credit eligibility.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
