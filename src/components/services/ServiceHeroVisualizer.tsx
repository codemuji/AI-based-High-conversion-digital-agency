"use client";

import React, { useState } from "react";
import { type ServiceDetail } from "@/lib/services-detail-data";

interface ServiceHeroVisualizerProps {
  detail: ServiceDetail;
}

export function ServiceHeroVisualizer({ detail }: ServiceHeroVisualizerProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "architecture">("preview");
  const category = detail.item.category || "Website";

  // Determine which visual theme to show based on category/id
  const isMarketing = category.toLowerCase().includes("marketing") || detail.id.includes("seo") || detail.id.includes("ads") || detail.id.includes("sms");
  const isApp = category.toLowerCase().includes("app") || detail.id.includes("mobile");
  const isSoftware = category.toLowerCase().includes("software") || detail.id.includes("management") || detail.id.includes("billing") || detail.id.includes("restaurant");
  const isGraphic = category.toLowerCase().includes("graphic") || detail.id.includes("logo") || detail.id.includes("flyer") || detail.id.includes("brochure") || detail.id.includes("poster") || detail.id.includes("catalogue");

  return (
    <div className="relative w-full rounded-3xl bg-gradient-to-br from-stone-900 via-stone-900/95 to-stone-950 border border-stone-700/80 shadow-[0_25px_80px_-15px_rgba(21,128,61,0.25)] overflow-hidden p-5 sm:p-7 text-stone-100 flex flex-col justify-between min-h-[420px] lg:min-h-[480px]">
      {/* Background Atmosphere & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[var(--accent)]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-emerald-600/10 blur-3xl pointer-events-none" />

      {/* Top Bar: Window Controls & View Mode Toggle */}
      <div className="relative z-10 flex items-center justify-between pb-4 mb-4 border-b border-stone-800/80">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-600" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-600" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-600" />
          <span className="ml-2.5 flex items-center gap-1.5 text-[11px] font-mono font-medium text-stone-400 tracking-wider truncate max-w-[180px] sm:max-w-[240px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-ping shrink-0" />
            <span>{`live-engine // ${detail.id}`}</span>
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center p-1 rounded-xl bg-stone-800/80 border border-stone-700/60 font-mono text-xs">
          <button
            type="button"
            onClick={() => setActiveTab("preview")}
            className={`px-3 py-1 rounded-lg transition-all duration-200 cursor-pointer ${
              activeTab === "preview"
                ? "bg-[var(--accent)] text-white font-bold shadow-sm"
                : "text-stone-400 hover:text-stone-200"
            }`}
          >
            ✦ Live Showcase
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("architecture")}
            className={`px-3 py-1 rounded-lg transition-all duration-200 cursor-pointer ${
              activeTab === "architecture"
                ? "bg-[var(--accent)] text-white font-bold shadow-sm"
                : "text-stone-400 hover:text-stone-200"
            }`}
          >
            {"</> Code Spec"}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col justify-center py-2">
        {activeTab === "preview" ? (
          <div className="space-y-5 animate-fadeIn">
            {/* Visualizer Banner / Dynamic Card based on category */}
            {isMarketing ? (
              /* Digital Marketing / SEO Dashboard Visualizer */
              <div className="space-y-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-stone-800/60 border border-stone-700/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#4ade80] block mb-1">
                      Google SERP &amp; Conversion Tracker
                    </span>
                    <h4 className="font-display font-bold text-lg text-white">
                      Target Rank: #1 Page Position
                    </h4>
                    <p className="text-xs text-stone-400 mt-0.5">
                      High-intent organic traffic capture for Indian market
                    </p>
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold shrink-0 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>+240% Growth</span>
                  </div>
                </div>

                {/* Simulated Chart Bars */}
                <div className="p-4 sm:p-5 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-stone-400">
                    <span>Organic Search Volume</span>
                    <span className="text-white font-bold">14,800/mo</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-stone-800 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-[#4ade80] w-[88%] rounded-full animate-pulse" />
                  </div>

                  <div className="flex items-center justify-between text-stone-400 pt-2">
                    <span>Lead Conversion Rate</span>
                    <span className="text-[#4ade80] font-bold">4.8% (Agency Avg: 1.2%)</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-stone-800 overflow-hidden">
                    <div className="h-full bg-[#4ade80] w-[76%] rounded-full" />
                  </div>
                </div>
              </div>
            ) : isApp ? (
              /* Mobile App Frame Visualizer */
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-stone-800/60 border border-stone-700/50 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#4ade80] px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800">
                      iOS / Android Native
                    </span>
                    <span className="text-xs font-mono text-stone-400">v2.4.0</span>
                  </div>
                  <div className="my-4">
                    <h4 className="font-display font-bold text-base sm:text-lg text-white">
                      {detail.item.title}
                    </h4>
                    <p className="text-xs text-stone-300 mt-1">
                      Sub-second screen transitions with instant push notification pipeline.
                    </p>
                  </div>
                  <div className="pt-3 border-t border-stone-700/50 flex items-center justify-between font-mono text-[11px]">
                    <span className="text-stone-400">Crash-Free Rate</span>
                    <span className="text-[#4ade80] font-bold">99.94%</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-stone-800/60 border border-stone-700/50 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase text-amber-400 px-2 py-0.5 rounded bg-amber-950/80 border border-amber-800/50">
                      Payment &amp; API Bridge
                    </span>
                    <span className="text-xs font-mono text-stone-400">Encrypted</span>
                  </div>
                  <div className="my-4 space-y-2 font-mono text-xs text-stone-300">
                    <div className="p-2 rounded bg-stone-900/80 border border-stone-800 flex items-center justify-between">
                      <span>UPI / Razorpay SDK</span>
                      <span className="text-[#4ade80]">Active ✓</span>
                    </div>
                    <div className="p-2 rounded bg-stone-900/80 border border-stone-800 flex items-center justify-between">
                      <span>Live Location / Track</span>
                      <span className="text-[#4ade80]">Active ✓</span>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-stone-700/50 flex items-center justify-between font-mono text-[11px]">
                    <span className="text-stone-400">Platform Fees</span>
                    <span className="text-white font-bold">0% Forever</span>
                  </div>
                </div>
              </div>
            ) : isSoftware ? (
              /* Custom Software / ERP Visualizer */
              <div className="space-y-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-stone-800/60 border border-stone-700/50 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/20 border border-[var(--accent)]/40 flex items-center justify-center text-lg text-[#4ade80]">
                      ⚙️
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-[#4ade80] font-bold block">
                        Enterprise Automation Dashboard
                      </span>
                      <h4 className="font-display font-bold text-base sm:text-lg text-white">
                        {detail.item.title}
                      </h4>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-stone-900 border border-stone-700 font-mono text-xs text-stone-300">
                    ⚡ Save 30+ Hrs/Week
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 font-mono text-xs">
                  <div className="p-3 sm:p-4 rounded-xl bg-stone-900/80 border border-stone-800 text-center">
                    <span className="text-[10px] text-stone-400 block mb-1">Database Speed</span>
                    <span className="text-sm sm:text-base font-bold text-[#4ade80]">&lt; 12ms</span>
                  </div>
                  <div className="p-3 sm:p-4 rounded-xl bg-stone-900/80 border border-stone-800 text-center">
                    <span className="text-[10px] text-stone-400 block mb-1">GST / Compliance</span>
                    <span className="text-sm sm:text-base font-bold text-white">100% Ready</span>
                  </div>
                  <div className="p-3 sm:p-4 rounded-xl bg-stone-900/80 border border-stone-800 text-center">
                    <span className="text-[10px] text-stone-400 block mb-1">Data Ownership</span>
                    <span className="text-sm sm:text-base font-bold text-[#4ade80]">Private IP</span>
                  </div>
                </div>
              </div>
            ) : isGraphic ? (
              /* Graphic Design & Branding Studio Visualizer */
              <div className="space-y-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-stone-800/60 border border-stone-700/50 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-lg text-purple-300">
                      🎨
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-purple-400 font-bold block">
                        Branding &amp; Creative Asset Matrix
                      </span>
                      <h4 className="font-display font-bold text-base sm:text-lg text-white">
                        {detail.item.title}
                      </h4>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-700 font-mono text-xs text-purple-300">
                    300 DPI Ultra High-Res
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3.5 rounded-xl bg-stone-900/80 border border-stone-800 flex flex-col justify-between">
                    <span className="text-[10px] text-stone-400">Source Vectors</span>
                    <span className="mt-2 text-sm font-bold text-white">AI / EPS / SVG Full Handover</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-900/80 border border-stone-800 flex flex-col justify-between">
                    <span className="text-[10px] text-stone-400">Brand License</span>
                    <span className="mt-2 text-sm font-bold text-[#4ade80]">100% Commercial Rights</span>
                  </div>
                </div>
              </div>
            ) : (
              /* High-Speed Website / Store Visualizer (Default & Web Design) */
              <div className="space-y-4">
                {/* Simulated Browser URL Bar */}
                <div className="p-3 sm:p-4 rounded-2xl bg-stone-800/70 border border-stone-700/60 flex items-center gap-3 font-mono text-xs text-stone-300">
                  <span className="text-[#4ade80] shrink-0">🔒 https://</span>
                  <span className="text-white font-bold truncate">yourcompany.in/{detail.id}</span>
                  <span className="ml-auto px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 text-[10px] font-bold border border-emerald-800/80 shrink-0">
                    Edge Cached
                  </span>
                </div>

                {/* Core Web Vitals Bento Score Card */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-4 rounded-2xl bg-stone-800/60 border border-stone-700/50 flex flex-col items-center justify-center text-center group hover:border-[#4ade80]/50 transition-all">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-950 border-2 border-[#4ade80] flex items-center justify-center font-mono font-black text-base sm:text-lg text-[#4ade80] mb-2 group-hover:scale-110 transition-transform">
                      99
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-stone-300 uppercase tracking-wider">
                      Performance
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-800/60 border border-stone-700/50 flex flex-col items-center justify-center text-center group hover:border-[#4ade80]/50 transition-all">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-950 border-2 border-[#4ade80] flex items-center justify-center font-mono font-black text-base sm:text-lg text-[#4ade80] mb-2 group-hover:scale-110 transition-transform">
                      0.7s
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-stone-300 uppercase tracking-wider">
                      Load Speed
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-800/60 border border-stone-700/50 flex flex-col items-center justify-center text-center group hover:border-[#4ade80]/50 transition-all">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-950 border-2 border-[#4ade80] flex items-center justify-center font-mono font-black text-base sm:text-lg text-[#4ade80] mb-2 group-hover:scale-110 transition-transform">
                      100
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-stone-300 uppercase tracking-wider">
                      SEO Score
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Live Interactive Scoping Spotlight Strip */}
            <div className="p-4 rounded-2xl bg-stone-900/90 border border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-ping" />
                <span className="text-stone-300">
                  Custom Blueprint for: <strong className="text-white">{detail.item.title}</strong>
                </span>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-2 sm:pt-0 border-stone-800">
                <span className="text-stone-400">Timeline: {detail.item.timeline}</span>
                <span className="text-[#4ade80] font-bold">★ {detail.item.metrics}</span>
              </div>
            </div>
          </div>
        ) : (
          /* Architecture / Code Specification Tab */
          <div className="space-y-4 font-mono text-xs animate-fadeIn">
            <div className="p-4 sm:p-5 rounded-2xl bg-stone-950 border border-stone-800 text-stone-300 space-y-2.5 overflow-x-auto">
              <div className="text-stone-500">{'// '}{detail.item.title} Architecture Blueprint</div>
              <div><span className="text-purple-400">const</span> <span className="text-blue-400">projectArchitecture</span> = &#123;</div>
              <div className="pl-4"><span className="text-stone-400">category:</span> <span className="text-emerald-400">&quot;{detail.groupName}&quot;</span>,</div>
              <div className="pl-4"><span className="text-stone-400">coreStack:</span> [</div>
              {detail.techStack.map((t, idx) => (
                <div key={idx} className="pl-8 text-amber-300">
                  &quot;{t.name}&quot;<span className="text-stone-500">{' // '}{t.category}</span>{idx < detail.techStack.length - 1 ? "," : ""}
                </div>
              ))}
              <div className="pl-4">],</div>
              <div className="pl-4"><span className="text-stone-400">guarantees:</span> &#123;</div>
              <div className="pl-8"><span className="text-stone-400">pageSpeed:</span> <span className="text-emerald-400">&quot;&lt; 0.8s Edge Response&quot;</span>,</div>
              <div className="pl-8"><span className="text-stone-400">ipOwnership:</span> <span className="text-blue-400">true</span>,</div>
              <div className="pl-8"><span className="text-stone-400">recurringCommissions:</span> <span className="text-rose-400">0</span>,</div>
              <div className="pl-4">&#125;,</div>
              <div>&#125;;</div>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-between text-stone-400 text-[11px]">
              <span>🔒 Compiled without third-party technical debt or bloated template scripts.</span>
              <span className="text-[#4ade80] font-bold shrink-0 ml-2">Clean Code ✓</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer Feature Badges */}
      <div className="relative z-10 pt-4 mt-4 border-t border-stone-800/80 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-stone-400">
        <span className="flex items-center gap-1.5 text-stone-300">
          <span className="text-[#4ade80]">⚡</span> 100% In-House Code
        </span>
        <span className="flex items-center gap-1.5 text-stone-300">
          <span className="text-[#4ade80]">🛡</span> Zero Vendor Lock-In
        </span>
        <span className="flex items-center gap-1.5 text-stone-300">
          <span className="text-[#4ade80]">🚀</span> 30-Day Free Optimization
        </span>
      </div>
    </div>
  );
}
