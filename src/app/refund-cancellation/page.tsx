import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Refund & Cancellation Policy | India Web Designs",
  description: "Official refund and cancellation policy governing orders and services placed with India Web Designs.",
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
            Refund &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-900 via-[var(--accent)] to-[#15803d]">
              Cancellation.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-[var(--muted)] leading-relaxed font-normal max-w-2xl mx-auto">
            At India Web Designs, we are committed to providing exceptional services and ensuring customer satisfaction.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        <div className="p-8 sm:p-12 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-xl space-y-8 text-stone-700 leading-relaxed text-sm sm:text-base font-normal">
          <div className="border-b border-stone-200 pb-4">
            <h2 className="font-display font-black text-2xl text-[var(--foreground)] text-center">
              Refund Policy
            </h2>
          </div>

          <p>
            At India Web Designs, we are committed to providing exceptional services and ensuring customer satisfaction. Our refund policy is designed to clarify the terms and conditions under which refunds will be provided for orders placed with our company. Please read the following refund policy carefully before placing an order.
          </p>

          <div className="space-y-6">
            {/* Rule 1 */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3">
              <h3 className="font-display font-bold text-lg text-stone-900">
                1. Cancellation Before Work Commencement or Within First 24 Hours:
              </h3>
              <p className="text-stone-600">
                If a customer decides to cancel their order before we commence work or within the first 24 hours of placing the order, a refund will be issued. However, please note that certain fees are non-refundable:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-stone-600 text-xs sm:text-sm">
                <li>
                  <strong>Processing Fee:</strong> Covers administrative costs associated with processing orders and initiating projects.
                </li>
                <li>
                  <strong>Domain Purchase Fee:</strong> If we have already purchased a domain name on behalf of the customer, the fee for the domain will not be refunded.
                </li>
                <li>
                  <strong>Server Purchase Fee:</strong> Similarly, if we have acquired server space for the project, the fee for server purchase will not be refunded.
                </li>
              </ul>
              <p className="text-stone-600 text-xs sm:text-sm font-semibold pt-1">
                The refund amount will exclude the non-refundable fees mentioned above.
              </p>
            </div>

            {/* Rule 2 */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3">
              <h3 className="font-display font-bold text-lg text-stone-900">
                2. Cancellation After Work Commencement or Beyond First 24 Hours:
              </h3>
              <p className="text-stone-600">
                If a customer chooses to cancel their order after we have commenced work or after the initial 24-hour period has elapsed, no refund will be provided. This policy applies regardless of the extent of work completed during this time.
              </p>
            </div>

            {/* Rule 3 */}
            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-3">
              <h3 className="font-display font-bold text-lg text-stone-900">
                3. More Than 50% Work Completion:
              </h3>
              <p className="text-stone-600">
                In the event that the customer cancels the order after more than 50% of the work has been completed, the full amount agreed upon for the project will be due and payable. No refund will be issued in this circumstance.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-200 space-y-4">
            <h3 className="font-display font-bold text-lg text-stone-900">Terms and Conditions:</h3>
            <ul className="list-disc pl-6 space-y-2 text-stone-600">
              <li>All refund requests must be submitted in writing to our customer service department.</li>
              <li>Refunds will be processed using the same method of payment used for the original transaction.</li>
              <li>The decision regarding refund eligibility and the amount of refund issued is at the sole discretion of India Web Designs.</li>
              <li>India Web Designs reserves the right to revise or update this refund policy at any time without prior notice. Customers are encouraged to review this policy periodically for any changes.</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-stone-900 text-white space-y-3 text-center border border-stone-800">
            <p className="text-xs sm:text-sm text-stone-300">
              By placing an order with India Web Designs, customers acknowledge that they have read, understood, and agreed to abide by the terms and conditions outlined in this refund policy.
            </p>
            <p className="text-xs sm:text-sm text-emerald-400 font-bold">
              If you have any questions or concerns regarding our refund policy, please contact our customer service department for assistance.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
