import React from "react";
import Image from "next/image";

interface CaseStudy {
  category: string;
  client: string;
  image: string;
  title: string;
  metrics: string;
  description: string;
  deliverables: string[];
  liveUrl?: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    category: "Luxury E-Commerce",
    client: "Elegance of India",
    image: "/images/elegance_of_india.png",
    title: "Elegance of India — South Asian Luxury Fashion",
    metrics: "+210% Global Reach",
    description: "Engineered a high-conversion luxury e-commerce storefront for South Asian fashion with multi-currency dynamic pricing, sub-0.7s load speed, and instant WhatsApp ordering.",
    deliverables: ["Luxury Next.js Storefront", "Multi-Currency Converter", "Sub-0.7s Edge CDN", "WhatsApp Commerce Engine"],
    liveUrl: "https://eleganceofindia.com/",
  },
  {
    category: "Industrial & Utilities",
    client: "Hydro Energy Solution",
    image: "/images/hydro_energy_india.png",
    title: "Hydro Energy Solution — Water & Wastewater Engineering",
    metrics: "500+ B2B Projects",
    description: "Engineered an industrial enterprise web portal and product catalog for North-East India's leading WILO water and wastewater management solutions provider.",
    deliverables: ["Industrial B2B Portal", "Product Catalog Engine", "Service Lead Intake", "Edge Speed Optimization"],
    liveUrl: "https://hydroenergyindia.com/",
  },
  {
    category: "Media & News Portal",
    client: "Purbodix",
    image: "/images/purbodix.png",
    title: "Purbodix — Northeast India Digital Media Portal",
    metrics: "100k+ Readers / Mo",
    description: "Engineered a high-performance regional digital news & media web portal serving Northeast India with instant article publishing, multi-category archives, and sub-0.6s CDN response.",
    deliverables: ["High-Traffic Media Portal", "Bilingual Content Engine", "SEO & Ad Revenue System", "Sub-0.6s Edge Response"],
    liveUrl: "https://purbodix.com/",
  },
  {
    category: "Luxury Apparel",
    client: "Blaze On Me London",
    image: "/images/blaze_on_me.png",
    title: "Blaze On Me London — Contemporary Luxury Apparel",
    metrics: "+300% Global Sales",
    description: "Engineered a high-converting contemporary luxury fashion portal for Blaze On Me London featuring premium catalog showcases and sub-0.7s edge load performance.",
    deliverables: ["Luxury Fashion Portal", "Sub-0.7s Edge CDN", "International Checkout", "Responsive Mobile UX"],
    liveUrl: "https://blazeonme.com/",
  },
  {
    category: "Travel & Tourism",
    client: "Baruah Travels",
    image: "/images/baruah_travels.png",
    title: "Baruah Travels — Customised & Group Trips Portal",
    metrics: "1,500+ Curated Trips",
    description: "Engineered a high-conversion travel & tour booking platform for Northeast India featuring custom itinerary builders, group trip reservations, and instant WhatsApp booking intake.",
    deliverables: ["Custom Travel Portal", "Itinerary Booking Engine", "WhatsApp Lead Intake", "Sub-0.8s Edge Load"],
    liveUrl: "https://baruahtravels.com/",
  },
  {
    category: "Heavy Machinery",
    client: "G.K. Equipment",
    image: "/images/gk_equipment.png",
    title: "G.K. Equipment — Heavy Machinery & Industrial Catalog",
    metrics: "100/100 Core Web Vitals",
    description: "Engineered a high-performance industrial heavy machinery showcase portal & digital catalog for G.K. Equipment with sub-0.7s page speeds.",
    deliverables: ["Industrial Machinery Catalog", "High-Performance Showcase", "RFQ Lead System", "Sub-0.7s Edge CDN"],
    liveUrl: "https://indiawebdesigns.online/G.K.Equipment/",
  },
];

export function CaseStudiesSection() {
  return (
    <section id="work" className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden border-t border-[var(--surface-border)] bg-[var(--background)] font-sans text-sm">
      {/* Subtle Architectural Grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute -top-32 left-1/3 w-96 h-96 bg-[var(--accent)]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Centered Section Header */}
      <div className="relative z-10 max-w-2xl mx-auto text-center mb-12 border-b border-[var(--surface-border)] pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-stone-200 shadow-xs text-[11px] font-display font-bold text-[var(--foreground)] tracking-wider uppercase mx-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
          <span>PRODUCTION WORK &amp; SCREENSHOTS</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-black text-[var(--foreground)] tracking-tight leading-snug">
          Recent Projects &amp; Live Systems
        </h2>
        <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed max-w-lg mx-auto">
          Explore actual production screenshots and audited performance metrics from custom websites, apps, and software systems we built.
        </p>
      </div>

      {/* Screenshot Work Cards Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CASE_STUDIES.map((study, idx) => (
          <div
            key={idx}
            className="group rounded-3xl bg-white border border-stone-200 hover:border-[var(--accent)] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            <div>
              {/* Project Screenshot Showcase Header */}
              <div className="relative w-full h-52 sm:h-60 bg-stone-100 overflow-hidden border-b border-stone-200">
                <Image
                  src={study.image}
                  alt={`${study.title} Screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Metric Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-stone-900/90 backdrop-blur-md text-white font-mono text-[10px] font-bold border border-stone-700/80 shadow-md">
                  {study.metrics}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[var(--accent)] font-mono text-[10px] font-bold border border-stone-200 shadow-xs uppercase tracking-wider">
                  {study.category}
                </div>
              </div>

              {/* Text Heading & Description */}
              <div className="p-6 space-y-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--accent)] block">
                  Client: {study.client}
                </span>

                <h3 className="font-display font-extrabold text-lg sm:text-xl text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                  {study.title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                  {study.description}
                </p>

                {/* Tech Deliverables */}
                <div className="pt-3 flex flex-wrap gap-1.5">
                  {study.deliverables.map((item, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md bg-stone-100 border border-stone-200 text-[10px] font-mono font-medium text-stone-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="p-6 pt-0 flex items-center justify-between gap-3">
              {study.liveUrl ? (
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-display text-xs font-bold text-[var(--accent)] hover:text-[#15803d] transition-colors"
                >
                  <span>Visit Live Site ↗</span>
                </a>
              ) : null}
              <a
                href="/#contact"
                className="inline-flex items-center gap-1.5 font-display text-xs font-bold text-stone-600 hover:text-[var(--foreground)] transition-colors"
              >
                <span>Scope Similar &rarr;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
