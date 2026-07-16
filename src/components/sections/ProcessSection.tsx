"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const STEPS = [
  {
    number: "01",
    title: "Friendly Discovery & Roadmap",
    description: "Tell us your goals. Within 2 hours, we'll share a clear, plain-English roadmap, realistic timeline, and honest budget range tailored to your exact needs.",
  },
  {
    number: "02",
    title: "Interactive Previews & Design",
    description: "Before we write any code, you'll get to click through real interactive previews of your website or app. We refine everything together until you love it.",
  },
  {
    number: "03",
    title: "Smooth & Transparent Building",
    description: "We build your digital product in steady 2-week milestones. You get private live test links so you can watch your vision come to life step by step.",
  },
  {
    number: "04",
    title: "Launch & Ongoing Growth Support",
    description: "We handle the complete launch smoothly with zero downtime, ensure everything runs lightning fast, and stay right by your side to help your business scale.",
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
    <section ref={sectionRef} id="process" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[var(--surface-border)]">
      {/* Architectural Split Header */}
      <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b border-[var(--surface-border)] pb-8">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[var(--accent)] block mb-2">
            // Our Simple 4-Step Journey
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[var(--foreground)] tracking-tight leading-none">
            How we work together <br className="hidden sm:inline" />
            to grow your business.
          </h2>
        </div>
        <p className="text-base sm:text-lg text-[var(--muted)] max-w-md md:text-right leading-relaxed">
          A predictable, stress-free process designed around clear communication, fast results, and measurable growth for your business.
        </p>
      </div>

      {/* Open Architectural Timeline Grid */}
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STEPS.map((step) => (
          <div
            key={step.number}
            onMouseMove={handleMouseMove}
            className="process-step-card group relative overflow-hidden rounded-2xl p-6 sm:p-8 bg-[var(--surface)] border border-[var(--surface-border)] hover:border-[var(--accent)] shadow-xs hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between z-0 cursor-pointer"
          >
            {/* Dynamic Mouse-Tracking Glass Hardware Spotlight Overlay */}
            <div
              className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
              style={{
                background:
                  "radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(22, 163, 74, 0.14), transparent 80%)",
              }}
            />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-display font-black text-5xl sm:text-6xl text-stone-300 group-hover:text-[var(--accent)] transition-colors duration-200 select-none">
                  {step.number}
                </span>
                <span className="w-2 h-2 rounded-full bg-[var(--surface-border)] group-hover:bg-[var(--accent)] group-hover:scale-150 transition-all duration-300" />
              </div>
              <h3 className="font-display font-black text-xl text-[var(--foreground)] mt-2 group-hover:text-[var(--accent)] transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-[var(--muted)] mt-3 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
