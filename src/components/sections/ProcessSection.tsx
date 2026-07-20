"use client";

import React, { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";

const STEPS = [
  {
    number: "01",
    code: "DISCOVERY_SLA // 2HR",
    title: "Discovery & Architectural Scoping",
    badge: "100% Free & No-Obligation",
    description:
      "Tell us your exact goals or bottlenecks. Within 2 hours, our senior engineering team delivers a plain-English technical roadmap, precise architectural blueprint, realistic timeline, and transparent budget range.",
    deliverable: "Deliverable: Custom Technical Architecture Blueprint & Fixed-Scope Proposal",
    highlights: ["2-Hour Scoping SLA", "Zero Jargon / Plain English", "Fixed Price & Timeline Guarantee"],
  },
  {
    number: "02",
    code: "UI_UX_ENGINE // 1:1.618 GOLDEN",
    title: "Interactive Prototyping & Design",
    badge: "Clickable Live Previews",
    description:
      "Before a single line of production code is written, you interact with live, high-fidelity clickable prototypes of your complete application. We refine every micro-interaction and visual token until you are 100% delighted.",
    deliverable: "Deliverable: Complete Interactive Figma Prototype & Design System Tokens",
    highlights: ["Interactive Live Previews", "Tailored Brand Aesthetics", "Unlimited Pre-Code Revisions"],
  },
  {
    number: "03",
    code: "BUILD_PROTOCOL // NEXT.JS + EDGE",
    title: "Transparent & Agile Engineering",
    badge: "2-Week Sprint Milestones",
    description:
      "We build your platform using high-speed Next.js, React, and Tailwind CSS. You receive a private, live staging link that updates continuously with every commit so you can track progress real-time.",
    deliverable: "Deliverable: Private Live Staging URL & Continuous GitHub Commit Access",
    highlights: ["Zero Bloat / Clean Code", "Live Staging Environment", "Bi-Weekly Sprint Demo Call"],
  },
  {
    number: "04",
    code: "LAUNCH_DEPLOY // SUB-0.8S EDGE",
    title: "Zero-Downtime Launch & Scale",
    badge: "100% IP Handover",
    description:
      "We orchestrate a seamless, zero-downtime deployment to global edge CDN networks. Your platform loads in under 0.8 seconds worldwide, and you receive complete source code, IP ownership, and ongoing scaling support.",
    deliverable: "Deliverable: Full Repository Handover, Complete IP Transfer & Core Web Vitals 99+ Score",
    highlights: ["Sub-0.8s Global Edge Load", "100% Source Code Ownership", "Lifetime Zero Recurring Commission"],
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<number>(0);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const el = sectionRef.current;
        if (!el || !headerRef.current || !gridRef.current) return;

        const observer = new IntersectionObserver(
          (entries, obs) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
              gsap.set(headerRef.current, { autoAlpha: 0, y: 28 });
              const cards = gridRef.current?.querySelectorAll(".process-step-card") || [];
              gsap.set(cards, { autoAlpha: 0, y: 35 });

              const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
              tl.to(headerRef.current, { autoAlpha: 1, y: 0, duration: 0.75 })
                .to(cards, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.14 }, "-=0.45");

              obs.disconnect();
            }
          },
          { threshold: 0.2 }
        );

        observer.observe(el);
        return () => observer.disconnect();
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([headerRef.current, gridRef.current?.querySelectorAll(".process-step-card") || []], {
          autoAlpha: 1,
          y: 0,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden border-t border-[var(--surface-border)] bg-[var(--background)] font-sans"
    >
      {/* Subtle Architectural Drafting Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-12 right-12 w-[500px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Architectural Split Header */}
      <div ref={headerRef} className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[var(--surface-border)] pb-8">
        <div>
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-xs mb-3 text-xs font-mono font-bold text-[var(--foreground)] tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
            <span>PROCESS ARCHITECTURE // 4-STEP PROTOCOL</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[var(--foreground)] tracking-tight leading-[1.04]">
            How we engineer <br className="hidden sm:inline" />
            your digital growth.
          </h2>
        </div>
        <div className="max-w-md md:text-right space-y-2">
          <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed">
            A predictable, stress-free architectural protocol designed around rapid iteration, absolute transparency, and sub-second edge performance.
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[var(--accent)]">
            <span>⚡ GUARANTEED 2-HOUR SCOPING &amp; SPECIFICATION SLA</span>
          </div>
        </div>
      </div>

      {/* Interactive Step Switcher Tabs (For Rapid Blueprint Exploration) */}
      <div className="relative z-10 mb-12 flex flex-wrap items-center gap-2 sm:gap-3 p-1.5 bg-stone-100/80 rounded-2xl border border-stone-200/80 max-w-fit">
        {STEPS.map((step, idx) => (
          <button
            key={step.number}
            type="button"
            onClick={() => setActiveTab(idx)}
            className={`px-4 sm:px-6 py-2.5 rounded-xl font-mono text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
              activeTab === idx
                ? "bg-white text-[var(--foreground)] shadow-sm border border-stone-200/80 scale-[1.02]"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${activeTab === idx ? "bg-[var(--accent)] animate-pulse" : "bg-stone-300"}`} />
            <span>STEP {step.number}</span>
            <span className="hidden sm:inline font-sans font-semibold opacity-85">// {step.title.split("&")[0]}</span>
          </button>
        ))}
      </div>

      {/* Featured Active Blueprint Stage Showcase Card */}
      <div className="relative z-10 mb-16 p-8 sm:p-12 rounded-3xl bg-white border border-stone-200 shadow-lg overflow-hidden transition-all duration-500">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/25 font-mono text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                STAGE {STEPS[activeTab].number} PROTOCOL
              </span>
              <span className="px-3 py-1 rounded-full bg-stone-100 border border-stone-200 font-mono text-[11px] text-stone-600 font-bold uppercase tracking-wider">
                {STEPS[activeTab].code}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono text-[11px] font-bold">
                ★ {STEPS[activeTab].badge}
              </span>
            </div>

            <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[var(--foreground)] tracking-tight leading-tight">
              {STEPS[activeTab].title}
            </h3>

            <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-2xl">
              {STEPS[activeTab].description}
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200/80 font-mono text-xs sm:text-sm text-[var(--foreground)] font-semibold flex items-center gap-3">
              <span className="w-6 h-6 rounded-lg bg-[var(--accent)] text-white flex items-center justify-center shrink-0">✓</span>
              <span>{STEPS[activeTab].deliverable}</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center space-y-4 p-6 sm:p-8 rounded-2xl bg-stone-900 text-white border border-stone-800 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#16a34a] text-white font-mono text-[10px] font-bold rounded-bl-xl uppercase tracking-wider">
              ENGINEERING STANDARDS
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-stone-400 block pt-2">
              {"// STAGE KEY HIGHLIGHTS"}
            </span>
            <ul className="space-y-3 pt-2">
              {STEPS[activeTab].highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-mono text-xs sm:text-sm text-stone-200">
                  <span className="w-2 h-2 rounded-full bg-[#4ade80] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-stone-800 flex items-center justify-between text-stone-400 font-mono text-xs">
              <span>SLA GUARANTEE:</span>
              <span className="text-[#4ade80] font-bold">100% TIMELINE COMPLIANCE</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4-Column Full Architectural Grid below featured tab */}
      <div ref={gridRef} className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {STEPS.map((step, idx) => (
          <div
            key={step.number}
            onClick={() => setActiveTab(idx)}
            onMouseMove={handleMouseMove}
            className={`process-step-card group relative overflow-hidden rounded-3xl p-6 sm:p-8 bg-white border ${
              activeTab === idx ? "border-[var(--accent)] ring-2 ring-[var(--accent)]/20 shadow-xl" : "border-stone-200 hover:border-[var(--accent)]/60 shadow-sm hover:shadow-xl"
            } transition-all duration-300 ease-out flex flex-col justify-between z-0 cursor-pointer`}
          >
            {/* Dynamic Mouse-Tracking Glass Hardware Spotlight Overlay */}
            <div
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
              style={{
                background:
                  "radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(22, 163, 74, 0.08), transparent 80%)",
              }}
            />

            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="font-display font-black text-4xl sm:text-5xl text-stone-300 group-hover:text-[var(--accent)] transition-colors duration-200 select-none">
                  {step.number}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-stone-100 border border-stone-200 font-mono text-[10px] font-bold text-stone-600">
                  {step.code.split(" // ")[1] || "SLA"}
                </span>
              </div>
              
              <span className="font-mono text-[11px] font-bold text-[var(--accent)] uppercase tracking-wider block mb-1">
                {step.badge}
              </span>

              <h3 className="font-display font-black text-xl text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-[var(--muted)] mt-3 leading-relaxed line-clamp-4">
                {step.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between font-mono text-xs font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
              <span>Inspect Specifications</span>
              <span>&rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
