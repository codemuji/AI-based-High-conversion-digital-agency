"use client";

import React, { useState, useEffect, useRef } from "react";
import type { Category } from "@/lib/intent-engine";

export interface ServicesGridProps {
  onSelectService: (category: Category) => void;
}

// Pillar 2: Live Customer Impact Counter (Smooth Scroll-Triggered Growth Metrics)
function LighthouseWidget() {
  const [speed, setSpeed] = useState(3.4);
  const [satisfaction, setSatisfaction] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = widgetRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const duration = 1200; // 1.2s smooth animation

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 4); // easeOutQuart

            const currentSpeed = 3.4 - (3.4 - 0.7) * ease;
            const currentSat = Math.round(99.8 * ease);

            setSpeed(Number(currentSpeed.toFixed(1)));
            setSatisfaction(currentSat);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setIsDone(true);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={widgetRef} className="mt-6 p-4 rounded-xl bg-stone-900 text-stone-200 border border-stone-800 shadow-inner">
      <div className="flex items-center justify-between border-b border-stone-800 pb-2.5 mb-3 text-[11px] font-mono">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 animate-pulse" />
          <span className="ml-1 font-bold text-stone-300">Live Customer Experience Monitor</span>
        </div>
        <span
          className={`px-2.5 py-0.5 rounded font-bold transition-all duration-300 ${
            isDone
              ? "bg-green-500/20 text-green-400 shadow-sm"
              : "bg-yellow-500/20 text-yellow-300 animate-pulse"
          }`}
        >
          {isDone ? "⚡ Instant Load Ready" : "Optimizing Speed..."}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 text-center pt-1">
        <div className="p-2 rounded-lg bg-stone-800/60 border border-stone-700/50">
          <span className="text-[10px] font-mono text-stone-400 block">Page Speed</span>
          <span className="text-sm font-bold text-green-400 font-mono">{speed}s (Instant)</span>
        </div>
        <div className="p-2 rounded-lg bg-stone-800/60 border border-stone-700/50">
          <span className="text-[10px] font-mono text-stone-400 block">Happy Shoppers</span>
          <span className="text-sm font-bold text-stone-200 font-mono">{satisfaction}%</span>
        </div>
        <div className="p-2 rounded-lg bg-stone-800/60 border border-stone-700/50">
          <span className="text-[10px] font-mono text-stone-400 block">Sales Growth</span>
          <span className="text-sm font-bold text-[var(--accent)] font-mono">+180% Avg</span>
        </div>
      </div>
    </div>
  );
}

// Pillar 2: Live Support Assistant Demo (Friendly Chat Simulation)
function TerminalWidget() {
  const [step, setStep] = useState(0);
  const widgetRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = widgetRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          setTimeout(() => setStep(1), 300);
          setTimeout(() => setStep(2), 950);
          setTimeout(() => setStep(3), 1600);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={widgetRef} className="mt-6 p-4 rounded-xl bg-stone-950 text-stone-200 border border-stone-800 shadow-inner font-mono text-xs">
      <div className="flex items-center justify-between border-b border-stone-800 pb-2 mb-3 text-[11px] text-stone-400">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-bold text-stone-300">Live 24/7 Support Assistant</span>
        </span>
        <span className="text-[var(--accent)] font-bold">Instant Response</span>
      </div>
      <div className="space-y-2.5 text-[11px] leading-relaxed min-h-[68px]">
        {step >= 1 && (
          <div className="flex items-start gap-2 animate-fadeIn">
            <span className="text-stone-400 shrink-0 font-bold">Customer:</span>
            <span className="text-stone-200">&ldquo;Hello! Can I track my order delivery on WhatsApp?&rdquo;</span>
          </div>
        )}
        {step >= 2 && (
          <div className="flex items-start gap-2 animate-fadeIn">
            <span className="text-[var(--accent)] shrink-0 font-bold">Assistant:</span>
            <span className="text-stone-300">
              &ldquo;Yes! Here is your live tracking status link: <span className="text-green-400 underline font-semibold">track.store/order#402</span>&rdquo;
            </span>
          </div>
        )}
        {step >= 3 && (
          <div className="flex items-start gap-2 animate-fadeIn pt-0.5 border-t border-stone-800/60">
            <span className="text-green-400 font-bold shrink-0">✔ Outcome:</span>
            <span className="text-stone-400">
              Customer satisfied instantly &bull; Saved support team 15 mins
            </span>
          </div>
        )}
        {step < 3 && (
          <div className="flex items-center gap-1.5 text-stone-500 pt-1">
            <span>&gt; Assistant typing reply</span>
            <span className="inline-block w-1.5 h-3 bg-[var(--accent)] animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}

const SERVICES: Array<{
  category: Category;
  title: string;
  tagline: string;
  deliverables: string[];
  metrics: string;
}> = [
  {
    category: "Website",
    title: "Websites & Stores That Attract & Convert",
    tagline: "Turn online visitors into loyal paying customers with lightning-fast load speeds and effortless checkout flows.",
    deliverables: ["Custom design tailored to your brand", "Lightning-fast checkout for happy shoppers", "Mobile-friendly across all phones & tablets", "Built to grow as your business expands"],
    metrics: "Avg +180% More Customer Sales",
  },
  {
    category: "App",
    title: "Custom Mobile & Web Apps for Your Customers",
    tagline: "Reliable, easy-to-use apps for iPhone and Android that give your customers an unforgettable, frictionless experience.",
    deliverables: ["Smooth experience on Android & iPhone", "Easy-to-use customer booking & ordering", "Secure payment & instant order tracking", "Rock-solid reliability around the clock"],
    metrics: "99.9% Happy Customer Rating",
  },
  {
    category: "Custom Software",
    title: "Smart Software to Simplify Your Operations",
    tagline: "Replace scattered spreadsheets and manual work with clean internal tools, customer dashboards, and automated management systems.",
    deliverables: ["Replace messy spreadsheets with clean tools", "Custom inventory & order management", "Easy portals for your team & vendors", "Save 40+ hours every week"],
    metrics: "Save 40+ Hours Every Week",
  },
  {
    category: "AI Automation",
    title: "Smart 24/7 Assistants to Support Customers",
    tagline: "Deploy friendly around-the-clock assistants that answer customer questions instantly, organize inquiries, and help your team scale.",
    deliverables: ["Friendly WhatsApp & website chat assistants", "Instant answers to common customer questions", "Automatic lead organization for your team", "Works tirelessly around the clock"],
    metrics: "Instant 24/7 Customer Support",
  },
  {
    category: "Digital Marketing",
    title: "Growth Marketing & SEO That Brings Buyers",
    tagline: "Targeted campaigns and search engine optimization designed so verified, high-value customers find your business first.",
    deliverables: ["Targeted campaigns to attract ideal buyers", "Search engine optimization so customers find you", "Clear tracking of what drives revenue", "Honest reports in plain English"],
    metrics: "3.4x Return on Investment",
  },
];

export function ServicesGrid({ onSelectService }: ServicesGridProps) {
  return (
    <section id="services" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[var(--surface-border)]">
      {/* Editorial Architectural Split Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[var(--surface-border)] pb-8">
        <div className="max-w-2xl">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[var(--accent)] block mb-2">
            // How We Help You Grow
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[var(--foreground)] tracking-tight leading-none">
            Tailored digital tools <br className="hidden sm:inline" />
            built for your success.
          </h2>
        </div>
        <p className="text-base sm:text-lg text-[var(--muted)] max-w-md md:text-right leading-relaxed">
          We don&apos;t believe in generic templates or complicated tech jargon. We build beautiful, fast, and reliable digital experiences that make life easier for your team and delightful for your customers.
        </p>
      </div>

      {/* Asymmetrical Bento Grid (12 Columns) */}
      <div className="grid grid-cols-12 gap-6">
        {SERVICES.map((srv, idx) => {
          // Dynamic Bento Spans: Wide hero cards for Web & AI, clean technical cards for Apps & ERP, full bar for Marketing
          const spanClass =
            idx === 0 || idx === 3
              ? "col-span-12 lg:col-span-8 bg-[var(--surface)] border border-[var(--surface-border)] hover:border-stone-400"
              : idx === 1 || idx === 2
              ? "col-span-12 md:col-span-6 lg:col-span-4 bg-[var(--surface)] border border-[var(--surface-border)] hover:border-stone-400"
              : "col-span-12 bg-stone-900 text-stone-100 border border-stone-800 hover:border-stone-600";

          const isDark = idx === 4;

          const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
            e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
          };

          return (
            <div
              key={srv.category}
              onMouseMove={handleMouseMove}
              className={`group rounded-2xl p-6 sm:p-8 transition-all duration-300 ease-out flex flex-col justify-between shadow-xs hover:shadow-2xl hover:-translate-y-1.5 relative overflow-hidden z-0 ${spanClass}`}
            >
              {/* Pillar 3: Dynamic Mouse-Tracking Glass Hardware Spotlight Overlay */}
              <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                style={{
                  background: isDark
                    ? "radial-gradient(450px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(22, 163, 74, 0.18), transparent 80%)"
                    : "radial-gradient(450px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(22, 163, 74, 0.09), transparent 80%)",
                }}
              />

              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span
                    className={`font-mono text-xs uppercase font-bold tracking-wider px-3 py-1 rounded-full ${
                      isDark
                        ? "bg-stone-800 text-stone-300 border border-stone-700"
                        : "bg-stone-100 text-[var(--foreground)] border border-stone-200"
                    }`}
                  >
                    0{idx + 1} / {srv.category}
                  </span>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      isDark ? "bg-[var(--accent)] text-white" : "bg-[var(--accent-subtle)] text-[var(--accent)]"
                    }`}
                  >
                    {srv.metrics}
                  </span>
                </div>

                <div className={idx === 0 || idx === 3 ? "grid grid-cols-1 md:grid-cols-12 gap-6 items-start" : ""}>
                  <div className={idx === 0 || idx === 3 ? "md:col-span-7" : ""}>
                    <h3
                      className={`font-display font-black text-2xl sm:text-3xl tracking-tight ${
                        isDark ? "text-white" : "text-[var(--foreground)]"
                      } group-hover:text-[var(--accent)] transition-colors`}
                    >
                      {srv.title}
                    </h3>
                    <p className={`text-sm mt-3 leading-relaxed ${isDark ? "text-stone-300" : "text-[var(--muted)]"}`}>
                      {srv.tagline}
                    </p>

                    {/* Live Visual Engineering Widget: Lighthouse Storefront Mockup (Website Card) */}
                    {idx === 0 && <LighthouseWidget />}

                    {/* Live Visual Engineering Widget: Autonomous Triage Terminal (AI Card) */}
                    {idx === 3 && <TerminalWidget />}
                  </div>

                  <div className={idx === 0 || idx === 3 ? "md:col-span-5 md:border-l md:pl-6 border-[var(--surface-border)]/60" : "mt-6 pt-6 border-t border-[var(--surface-border)]/60"}>
                    <span className={`text-[11px] font-mono uppercase tracking-wider block mb-3 ${isDark ? "text-stone-400" : "text-stone-500"}`}>
                      How We Help Your Business:
                    </span>
                    <ul className="space-y-2.5">
                      {srv.deliverables.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2.5 text-xs font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                          <span className={isDark ? "text-stone-200" : "text-[var(--foreground)]"}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-[var(--surface-border)]/40 flex items-center justify-end">
                <button
                  type="button"
                  onClick={() => onSelectService(srv.category)}
                  className={`py-2 px-5 rounded-xl font-display font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isDark
                      ? "bg-stone-800 group-hover:bg-[var(--accent)] text-white"
                      : "bg-stone-100 group-hover:bg-[var(--foreground)] text-[var(--foreground)] group-hover:text-white"
                  }`}
                >
                  <span>See How We Help</span>
                  <span className="transform group-hover:translate-x-1.5 transition-transform duration-200 ease-out">&rarr;</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
