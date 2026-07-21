"use client";

import React, { useState } from "react";
import { type ServiceDetail } from "@/lib/services-detail-data";

interface ServiceHeroVisualizerProps {
  detail: ServiceDetail;
}

export function ServiceHeroVisualizer({ detail }: ServiceHeroVisualizerProps) {
  const [activeTab, setActiveTab] = useState<"showcase" | "guarantees">("showcase");
  const category = detail.item.category || "Website";

  // Determine which visual theme to show based on category/id
  const isMarketing = category.toLowerCase().includes("marketing") || detail.id.includes("seo") || detail.id.includes("ads") || detail.id.includes("sms");
  const isApp = category.toLowerCase().includes("app") || detail.id.includes("mobile");
  const isSoftware = category.toLowerCase().includes("software") || detail.id.includes("management") || detail.id.includes("billing") || detail.id.includes("restaurant");
  const isGraphic = category.toLowerCase().includes("graphic") || detail.id.includes("logo") || detail.id.includes("flyer") || detail.id.includes("brochure") || detail.id.includes("poster") || detail.id.includes("catalogue");

  return (
    <div className="relative w-full rounded-3xl bg-gradient-to-br from-stone-900 via-stone-900/95 to-stone-950 border border-stone-700/80 shadow-[0_25px_80px_-15px_rgba(21,128,61,0.25)] overflow-hidden p-5 sm:p-7 text-stone-100 flex flex-col justify-between min-h-[420px] lg:min-h-[480px]">
      {/* Background Atmosphere & Subtle Gradient Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[var(--accent)]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-emerald-600/10 blur-3xl pointer-events-none" />

      {/* Top Bar: Window Controls & Customer View Switcher */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-stone-800/80">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600" />
          <span className="ml-2.5 flex items-center gap-2 text-xs font-medium text-stone-300 truncate max-w-[200px] sm:max-w-[280px]">
            <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-ping shrink-0" />
            <span>Interactive Preview • {detail.item.title}</span>
          </span>
        </div>

        {/* Customer-Centric Tab Switcher */}
        <div className="flex items-center p-1 rounded-xl bg-stone-800/80 border border-stone-700/60 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setActiveTab("showcase")}
            className={`px-3.5 py-1.5 rounded-lg transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              activeTab === "showcase"
                ? "bg-[var(--accent)] text-white font-bold shadow-sm"
                : "text-stone-400 hover:text-stone-200"
            }`}
          >
            <span>✦ Live Business Impact</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("guarantees")}
            className={`px-3.5 py-1.5 rounded-lg transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              activeTab === "guarantees"
                ? "bg-[var(--accent)] text-white font-bold shadow-sm"
                : "text-stone-400 hover:text-stone-200"
            }`}
          >
            <span>🛡 What You Receive</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col justify-center py-2">
        {activeTab === "showcase" ? (
          <div className="space-y-5 animate-fadeIn">
            {/* Dynamic Customer Impact Cards based on Category */}
            {isMarketing ? (
              /* Digital Marketing & Growth Dashboard Visualizer */
              <div className="space-y-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-stone-800/60 border border-stone-700/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4ade80] block mb-1">
                      Customer Acquisition &amp; SEO Engine
                    </span>
                    <h4 className="font-display font-bold text-lg sm:text-xl text-white">
                      Dominating Google #1 Rank &amp; High-Intent Traffic
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-300 mt-1">
                      Targeted specifically for customers actively searching for your services across India.
                    </p>
                  </div>
                  <div className="px-3.5 py-2 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-bold shrink-0 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>+240% Lead Velocity</span>
                  </div>
                </div>

                {/* Visual Impact Metrics */}
                <div className="p-4 sm:p-5 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-3.5 text-xs sm:text-sm">
                  <div className="flex items-center justify-between text-stone-300">
                    <span>Monthly Qualified Inquiries Generated</span>
                    <span className="text-white font-bold">14,800+ Potential Customers/Mo</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-stone-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-[#4ade80] w-[88%] rounded-full animate-pulse" />
                  </div>

                  <div className="flex items-center justify-between text-stone-300 pt-1">
                    <span>Visitor-to-Lead Conversion Rate</span>
                    <span className="text-[#4ade80] font-bold">4.8% (Industry Avg: 1.2%)</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-stone-800 overflow-hidden">
                    <div className="h-full bg-[#4ade80] w-[76%] rounded-full" />
                  </div>
                </div>
              </div>
            ) : isApp ? (
              /* Mobile App Customer Experience Visualizer */
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-stone-800/60 border border-stone-700/50 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-[#4ade80] px-2.5 py-1 rounded bg-emerald-950 border border-emerald-800">
                      iOS &amp; Android Experience
                    </span>
                    <span className="text-xs text-stone-400 font-semibold">Native Performance</span>
                  </div>
                  <div className="my-4">
                    <h4 className="font-display font-bold text-base sm:text-lg text-white">
                      {detail.item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-300 mt-1.5 leading-relaxed">
                      Silky-smooth transitions, instant alerts, and effortless checkout designed to delight your users every time they open your app.
                    </p>
                  </div>
                  <div className="pt-3.5 border-t border-stone-700/50 flex items-center justify-between text-xs">
                    <span className="text-stone-400">User Satisfaction Reliability</span>
                    <span className="text-[#4ade80] font-bold">99.94% Uptime</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-stone-800/60 border border-stone-700/50 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase text-amber-400 px-2.5 py-1 rounded bg-amber-950/80 border border-amber-800/50">
                      Seamless Indian Payments
                    </span>
                    <span className="text-xs text-stone-400 font-semibold">Zero Commission</span>
                  </div>
                  <div className="my-4 space-y-2.5 text-xs text-stone-300 font-medium">
                    <div className="p-2.5 rounded-xl bg-stone-900/80 border border-stone-800 flex items-center justify-between">
                      <span>UPI, GPay, PhonePe &amp; Cards Ready</span>
                      <span className="text-[#4ade80] font-bold">Included ✓</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-stone-900/80 border border-stone-800 flex items-center justify-between">
                      <span>Real-Time Customer Notifications</span>
                      <span className="text-[#4ade80] font-bold">Included ✓</span>
                    </div>
                  </div>
                  <div className="pt-3.5 border-t border-stone-700/50 flex items-center justify-between text-xs">
                    <span className="text-stone-400">Platform Cut on Your Sales</span>
                    <span className="text-white font-bold">0% Forever</span>
                  </div>
                </div>
              </div>
            ) : isSoftware ? (
              /* Custom Software / Business Automation Visualizer */
              <div className="space-y-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-stone-800/60 border border-stone-700/50 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-[var(--accent)]/20 border border-[var(--accent)]/40 flex items-center justify-center text-xl text-[#4ade80]">
                      ⚙️
                    </div>
                    <div>
                      <span className="text-xs uppercase text-[#4ade80] font-bold block">
                        Custom Business Automation Suite
                      </span>
                      <h4 className="font-display font-bold text-base sm:text-lg text-white">
                        {detail.item.title}
                    </h4>
                    </div>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-stone-900 border border-stone-700 font-semibold text-xs text-stone-200">
                    ⚡ Save 30+ Hours Every Week
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs sm:text-sm font-medium">
                  <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 text-center flex flex-col justify-center">
                    <span className="text-stone-400 block mb-1">Workflow Speed</span>
                    <span className="text-sm sm:text-base font-bold text-[#4ade80]">Instant Processing</span>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 text-center flex flex-col justify-center">
                    <span className="text-stone-400 block mb-1">Indian GST &amp; Billing</span>
                    <span className="text-sm sm:text-base font-bold text-white">100% Compliant</span>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 text-center flex flex-col justify-center">
                    <span className="text-stone-400 block mb-1">Company Data Security</span>
                    <span className="text-sm sm:text-base font-bold text-[#4ade80]">Private &amp; Protected</span>
                  </div>
                </div>
              </div>
            ) : isGraphic ? (
              /* Graphic Design & Brand Identity Showcase */
              <div className="space-y-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-stone-800/60 border border-stone-700/50 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-xl text-purple-300">
                      🎨
                    </div>
                    <div>
                      <span className="text-xs uppercase text-purple-400 font-bold block">
                        Premium Brand Identity &amp; Creative Assets
                      </span>
                      <h4 className="font-display font-bold text-base sm:text-lg text-white">
                        {detail.item.title}
                      </h4>
                    </div>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-700 text-xs font-semibold text-purple-300">
                    High-Impact Visuals
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 flex flex-col justify-between">
                    <span className="text-stone-400 font-medium">Delivered Formats</span>
                    <span className="mt-2 text-sm font-bold text-white">Print &amp; Digital Ready (AI, SVG, PDF, PNG)</span>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-900/80 border border-stone-800 flex flex-col justify-between">
                    <span className="text-stone-400 font-medium">Commercial Usage Rights</span>
                    <span className="mt-2 text-sm font-bold text-[#4ade80]">100% Full Ownership Guaranteed</span>
                  </div>
                </div>
              </div>
            ) : (
              /* Customer Website & E-Commerce Visualizer (Default & Web Design) */
              <div className="space-y-4">
                {/* Simulated Customer Experience Bar */}
                <div className="p-3 sm:p-4 rounded-2xl bg-stone-800/70 border border-stone-700/60 flex items-center gap-3 text-xs sm:text-sm text-stone-200">
                  <span className="text-[#4ade80] shrink-0 font-bold">✨ Instant Load</span>
                  <span className="text-white font-semibold truncate">yourbrand.in — Open 24/7 with zero lag</span>
                  <span className="ml-auto px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-400 text-xs font-bold border border-emerald-800/80 shrink-0">
                    High Conversion Mode
                  </span>
                </div>

                {/* Customer Value Metrics Bento Card */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div className="p-4.5 rounded-2xl bg-stone-800/60 border border-stone-700/50 flex flex-col items-center justify-center text-center group hover:border-[#4ade80]/50 transition-all">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-950 border-2 border-[#4ade80] flex items-center justify-center font-black text-base sm:text-lg text-[#4ade80] mb-2 group-hover:scale-110 transition-transform">
                      &lt;1s
                    </div>
                    <span className="text-xs font-bold text-white tracking-wide">
                      Instant Page Load
                    </span>
                    <span className="text-[11px] text-stone-400 mt-0.5">
                      No waiting, more visitors stay
                    </span>
                  </div>

                  <div className="p-4.5 rounded-2xl bg-stone-800/60 border border-stone-700/50 flex flex-col items-center justify-center text-center group hover:border-[#4ade80]/50 transition-all">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-950 border-2 border-[#4ade80] flex items-center justify-center font-black text-base sm:text-lg text-[#4ade80] mb-2 group-hover:scale-110 transition-transform">
                      #1
                    </div>
                    <span className="text-xs font-bold text-white tracking-wide">
                      Google Friendly
                    </span>
                    <span className="text-[11px] text-stone-400 mt-0.5">
                      Optimized to rank organically
                    </span>
                  </div>

                  <div className="p-4.5 rounded-2xl bg-stone-800/60 border border-stone-700/50 flex flex-col items-center justify-center text-center group hover:border-[#4ade80]/50 transition-all">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-950 border-2 border-[#4ade80] flex items-center justify-center font-black text-base sm:text-lg text-[#4ade80] mb-2 group-hover:scale-110 transition-transform">
                      100%
                    </div>
                    <span className="text-xs font-bold text-white tracking-wide">
                      Your IP &amp; Code
                    </span>
                    <span className="text-[11px] text-stone-400 mt-0.5">
                      Never held hostage by plugins
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Live Customer Summary Strip */}
            <div className="p-4 rounded-2xl bg-stone-900/90 border border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80] animate-ping" />
                <span className="text-stone-300">
                  Custom Build: <strong className="text-white">{detail.item.title}</strong>
                </span>
              </div>
              <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-2.5 sm:pt-0 border-stone-800 text-xs">
                <span className="text-stone-300 font-medium">Estimated Delivery: {detail.item.timeline}</span>
                <span className="text-[#4ade80] font-bold bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-800/60">
                  ★ {detail.item.metrics}
                </span>
              </div>
            </div>
          </div>
        ) : (
          /* Business Guarantees & What You Receive Tab (Replaces Code Spec) */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fadeIn text-xs sm:text-sm">
            <div className="p-5 rounded-2xl bg-stone-900/90 border border-stone-800 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                    Guaranteed Ownership
                  </span>
                </div>
                <h4 className="font-display font-bold text-base sm:text-lg text-white">
                  100% Intellectual Property &amp; Source Code Handover
                </h4>
                <p className="text-stone-300 text-xs sm:text-sm mt-1.5 leading-relaxed">
                  Unlike typical agencies that lock you into monthly maintenance fees or proprietary builders, you receive full administrative access and complete ownership of every asset created.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-xs font-semibold text-[#4ade80]">
                <span>No Hidden Licensing Fees</span>
                <span>Complete Independence ✓</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-stone-900/90 border border-stone-800 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Commercial Advantage
                  </span>
                </div>
                <h4 className="font-display font-bold text-base sm:text-lg text-white">
                  0% Commission &amp; Zero Platform Taxes
                </h4>
                <p className="text-stone-300 text-xs sm:text-sm mt-1.5 leading-relaxed">
                  Whether you process ₹1 Lakh or ₹10 Crores in sales or leads, we never take a percentage cut. Your revenue stays 100% in your business bank account.
                </p>
              </div>
              <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-xs font-semibold text-emerald-400">
                <span>Indian Payment Gateways Included</span>
                <span>$0 Monthly Cut ✓</span>
              </div>
            </div>

            <div className="md:col-span-2 p-4 rounded-xl bg-stone-950 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-300">
              <div className="flex items-center gap-2.5">
                <span className="text-lg">🤝</span>
                <span>
                  <strong className="text-white">Our Promise:</strong> Every project comes with a dedicated project coordinator and 30 days of complimentary post-launch support.
                </span>
              </div>
              <span className="text-[#4ade80] font-bold shrink-0">SLA Guaranteed ✓</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer Customer Badges */}
      <div className="relative z-10 pt-4 mt-4 border-t border-stone-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-medium text-stone-300">
        <span className="flex items-center gap-1.5">
          <span className="text-[#4ade80]">⚡</span> Custom High-Speed Build
        </span>
        <span className="flex items-center gap-1.5">
          <span className="text-[#4ade80]">🛡</span> Zero Monthly Hostage Fees
        </span>
        <span className="flex items-center gap-1.5">
          <span className="text-[#4ade80]">🚀</span> 30-Day Free Optimization &amp; Support
        </span>
      </div>
    </div>
  );
}

