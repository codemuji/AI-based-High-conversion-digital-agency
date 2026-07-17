import React from "react";

const CASE_STUDIES = [
  {
    category: "Online Store & Sales",
    client: "Apex Fashion Retailers",
    title: "Growing monthly sales to ₹40 Lakhs with instant checkout speeds.",
    metrics: "+180% More Customer Orders",
    description: "Replaced a slow, clunky online store with a lightning-fast shopping experience. Page load times dropped instantly, giving shoppers a delightful checkout and almost doubling daily sales.",
  },
  {
    category: "24/7 WhatsApp Support",
    client: "CareConnect Medical Group",
    title: "Handling patient inquiries instantly and booking 2,400+ daily consults.",
    metrics: "2,400+ Daily Consults Booked",
    description: "Launched a friendly 24/7 WhatsApp assistant to answer common patient questions and book appointments automatically, saving staff hours of phone time every single day.",
  },
  {
    category: "Operations & Management",
    client: "LogiTrack Express Supply",
    title: "Simplifying daily dispatch tracking for 500+ delivery vehicles.",
    metrics: "Save ₹3.2 Lakhs / mo in Fuel Waste",
    description: "Created an easy-to-use custom dashboard and mobile app for drivers that eliminated manual paperwork and optimized daily delivery routes for maximum efficiency.",
  },
];

export function CaseStudiesSection() {
  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="bg-[#141210] text-[#fefcf9] border border-stone-800 rounded-3xl p-8 sm:p-14 lg:p-16 shadow-2xl relative overflow-hidden">
        {/* Subtle dark grid texture inside showcase */}
        <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

        {/* Architectural Split Header */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-stone-800 pb-8">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#4ade80] block mb-2">
              {"// Real Customer Growth"}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none">
              Real business results <br className="hidden sm:inline" />
              that help you grow.
            </h2>
          </div>
          <p className="text-base sm:text-lg text-stone-400 max-w-md md:text-right leading-relaxed">
            See how our fast, reliable digital tools directly help Indian businesses increase sales, save time, and delight their customers every day.
          </p>
        </div>

        {/* High-Contrast Case Studies Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <div
              key={idx}
              className="group p-6 sm:p-8 rounded-2xl bg-[#1c1917] border border-stone-800 hover:border-[#4ade80]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3 py-1 rounded-full bg-stone-800/80 text-[#4ade80] font-mono text-[11px] uppercase tracking-wider font-semibold border border-stone-700/60">
                    {study.category}
                  </span>
                </div>

                <span className="font-mono text-xs font-bold uppercase tracking-widest text-stone-400 block mb-1">
                  {study.client}
                </span>
                <h3 className="font-display font-black text-xl text-white group-hover:text-[#4ade80] transition-colors leading-snug">
                  {study.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-3 leading-relaxed">
                  {study.description}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-stone-800 flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase text-stone-400 tracking-wider">
                  Customer Impact:
                </span>
                <span className="font-display font-black text-sm sm:text-base text-[#4ade80]">
                  {study.metrics}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
