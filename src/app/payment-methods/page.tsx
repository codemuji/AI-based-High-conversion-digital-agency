import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Payment Methods | India Web Designs",
  description: "Official payment channels, banking details, Axis Bank account info, Razorpay link, and PayPal options for India Web Designs.",
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
            <span>SECURE TRANSACTIONS &amp; BANKING</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl text-[var(--foreground)] tracking-tight leading-tight">
            Payment{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-900 via-[var(--accent)] to-[#15803d]">
              Methods.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-[var(--muted)] leading-relaxed font-normal max-w-2xl mx-auto">
            Official banking details and secure payment options for India Web Designs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 flex-1">
        <div className="p-8 sm:p-12 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-xl space-y-8 text-stone-700 leading-relaxed">
          {/* Method 1 */}
          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-stone-900 flex items-center gap-2">
              <span>🏦</span> 1. Direct Bank Deposit (NEFT/IMPS)
            </h2>
            <div className="p-6 rounded-2xl bg-stone-900 text-white font-mono text-xs sm:text-sm space-y-2 border border-stone-800 shadow-md">
              <p><strong className="text-emerald-400">A/C NAME:</strong> WEBOTAPP PRIVATE LIMITED</p>
              <p><strong className="text-emerald-400">A/C NO:</strong> 921020029373912</p>
              <p><strong className="text-emerald-400">BANK NAME:</strong> AXIS BANK</p>
              <p><strong className="text-emerald-400">BRANCH NAME:</strong> HENGRABARI GUWAHATI</p>
              <p><strong className="text-emerald-400">IFSC CODE:</strong> UTIB0003490</p>
            </div>
          </div>

          {/* Method 2 */}
          <div className="space-y-3 pt-4 border-t border-stone-200">
            <h2 className="font-display font-bold text-xl text-stone-900 flex items-center gap-2">
              <span>💳</span> 2. Online Payment Gateway
            </h2>
            <p>You can pay online through your credit card / debit card / Net banking:</p>
            <ul className="list-disc pl-6 space-y-2 text-stone-700 text-xs sm:text-sm">
              <li>
                <strong>India (INR Payments):</strong>{" "}
                <a
                  href="https://razorpay.me/@indiawebdesigns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 font-bold hover:underline"
                >
                  Click here to pay via Razorpay Online &rarr;
                </a>
              </li>
              <li>
                <strong>Australia (AUD Payments):</strong> Pay online via PayPal link.
              </li>
              <li>
                <strong>USA (USD Payments):</strong> Pay online via PayPal link.
              </li>
            </ul>
          </div>

          {/* Method 3 */}
          <div className="space-y-3 pt-4 border-t border-stone-200">
            <h2 className="font-display font-bold text-xl text-stone-900 flex items-center gap-2">
              <span>🌐</span> 3. PayPal
            </h2>
            <p>
              <strong>PayPal Email ID:</strong>{" "}
              <span className="font-mono bg-stone-100 px-3 py-1 rounded-lg text-stone-900 font-bold border border-stone-200">
                zzubizubi@gmail.com
              </span>
            </p>
          </div>

          {/* Method 4 */}
          <div className="space-y-3 pt-4 border-t border-stone-200">
            <h2 className="font-display font-bold text-xl text-stone-900 flex items-center gap-2">
              <span>📝</span> 4. Cheque / Check
            </h2>
            <p>
              Cheque / check should be issued in favor of &ldquo;<strong className="text-stone-900">India Web Designs</strong>&rdquo;.
            </p>
          </div>

          {/* Method 5 */}
          <div className="space-y-3 pt-4 border-t border-stone-200">
            <h2 className="font-display font-bold text-xl text-stone-900 flex items-center gap-2">
              <span>💵</span> 5. Cash at local branches
            </h2>
            <p>
              You can visit any of our branches nearest to your location and pay cash directly.
            </p>
          </div>

          {/* Method 6 */}
          <div className="space-y-3 pt-4 border-t border-stone-200">
            <h2 className="font-display font-bold text-xl text-stone-900 flex items-center gap-2">
              <span>⏳</span> 6. Pay in EMI
            </h2>
            <p>
              EMI payment is available if you have received an invoice from us (applicable for Indian customers).
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
