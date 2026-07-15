import React from "react";

const STEPS = [
  {
    number: "01",
    title: "Instant AI Scoping",
    description: "Type your goal right on our homepage. Our custom engine enriches your specs and delivers an accurate timeline and budget range within 2 hours.",
  },
  {
    number: "02",
    title: "Architecture & Wireframes",
    description: "Before coding a single line, you get interactive high-fidelity prototypes and a clean system architecture diagram mapped to your business metrics.",
  },
  {
    number: "03",
    title: "Agile Production Sprints",
    description: "We build your product in rapid 14-day sprints. You get live staging links, automated test reports, and zero surprises.",
  },
  {
    number: "04",
    title: "Launch & Conversion Tracking",
    description: "We deploy to production with automated CI/CD pipelines, set up full conversion attribution, and monitor Core Web Vitals 24/7.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-t border-[var(--surface-border)]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
          Execution Philosophy
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--foreground)] mt-3 leading-tight">
          How we build fast without cutting corners.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[var(--muted)]">
          A predictable, transparent process designed around rapid speed to market and measurable conversion ROI.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {STEPS.map((step, idx) => (
          <div
            key={step.number}
            className="p-6 sm:p-8 rounded-2xl bg-[var(--surface)] border border-[var(--surface-border)] hover:border-[var(--signature)] transition-all duration-200 relative flex flex-col justify-between"
          >
            <div>
              <span className="font-display font-black text-3xl text-[var(--accent-subtle)] text-[var(--signature)] block mb-4">
                {step.number}
              </span>
              <h3 className="font-display font-bold text-lg text-[var(--foreground)]">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--muted)] mt-2 leading-relaxed">
                {step.description}
              </p>
            </div>

            {idx < STEPS.length - 1 && (
              <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-[var(--muted-light)]">
                &rarr;
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
