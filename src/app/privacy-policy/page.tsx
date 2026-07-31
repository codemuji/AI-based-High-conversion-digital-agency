import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata = {
  title: "Privacy Policy | India Web Designs",
  description: "Privacy Policy for INDIA WEB DESIGNS describing data collection, cookies, and visitor rights.",
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
            Privacy Policy for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-900 via-[var(--accent)] to-[#15803d]">
              INDIA WEB DESIGNS.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-[var(--muted)] leading-relaxed font-normal max-w-2xl mx-auto">
            One of our main priorities is the privacy of our visitors.
          </p>
        </div>
      </section>

      {/* Main Privacy Policy Content */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex-1">
        <div className="p-8 sm:p-12 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-xl space-y-8 text-stone-700 leading-relaxed text-sm sm:text-base font-normal">
          <p>
            At INDIA WEB DESIGNS, accessible from WWW.INDIAWEBDESIGNS.IN, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by INDIA WEB DESIGNS and how we use it.
          </p>

          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
          </p>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-stone-900">Log Files</h2>
            <p>
              INDIA WEB DESIGNS follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-stone-900">Cookies and Web Beacons</h2>
            <p>
              Like any other website, INDIA WEB DESIGNS uses &lsquo;cookies&rsquo;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-stone-900">Third Party Privacy Policies</h2>
            <p>
              INDIA WEB DESIGNS&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            </p>
            <p>
              You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-stone-900">Children&apos;s Information</h2>
            <p>
              Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
            </p>
            <p>
              INDIA WEB DESIGNS does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-display font-bold text-xl text-stone-900">Online Privacy Policy Only</h2>
            <p>
              This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in INDIA WEB DESIGNS. This policy is not applicable to any information collected offline or via channels other than this website.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-stone-200">
            <h2 className="font-display font-bold text-xl text-stone-900">Consent</h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
