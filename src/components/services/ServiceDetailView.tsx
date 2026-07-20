"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getServiceDetail } from "@/lib/services-detail-data";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/Footer";
import { OnboardingModal, type LeadSubmissionPayload } from "@/components/modal/OnboardingModal";
import { StickyIntakeBar } from "@/components/navigation/StickyIntakeBar";
import { ServiceHeroVisualizer } from "@/components/services/ServiceHeroVisualizer";
import { submitLeadAction } from "@/app/actions";

interface ServiceDetailViewProps {
  id: string;
}

function GeometricHeroIllustrations({ id, category, title }: { id: string; category: string; title: string }) {
  const lowerId = id.toLowerCase();
  const lowerCat = category.toLowerCase();
  const lowerTitle = title.toLowerCase();

  let type: "ecommerce" | "design" | "marketing" | "web" = "web";
  if (lowerId.includes("ecommerce") || lowerId.includes("shop") || lowerId.includes("store") || lowerTitle.includes("e-commerce")) {
    type = "ecommerce";
  } else if (lowerCat.includes("graphic") || lowerId.includes("logo") || lowerId.includes("branding") || lowerId.includes("brochure") || lowerId.includes("flyer")) {
    type = "design";
  } else if (lowerCat.includes("marketing") || lowerId.includes("seo") || lowerId.includes("growth") || lowerId.includes("lead")) {
    type = "marketing";
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Base Light Luminous Architectural Drafting Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[#fdfcf9] to-[#f4f7f5]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(21,128,61,0.12),rgba(255,255,255,0))]" />
      <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[var(--accent)]/10 rounded-full blur-[170px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />

      {/* Grid & Dot Patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />

      {/* 1. E-COMMERCE & RETAIL PORTAL GEOMETRY: Transaction Matrix & Isometric Conveyor Nodes */}
      {type === "ecommerce" && (
        <>
          {/* Center/Back Transaction Matrix & Conveyor Grid */}
          <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[950px] opacity-45 text-stone-400" viewBox="0 0 900 900" fill="none">
            {/* Isometric Conveyor Rings & Diamond Network */}
            <polygon points="450,150 750,300 450,450 150,300" stroke="currentColor" strokeWidth="1.2" strokeDasharray="8 8" />
            <polygon points="450,250 680,365 450,480 220,365" stroke="#16a34a" strokeWidth="1.2" opacity="0.85" />
            <polygon points="450,350 610,430 450,510 290,430" stroke="currentColor" strokeWidth="1.5" />
            
            {/* Cascading Supply & Checkout Ledger Lines */}
            <line x1="150" y1="300" x2="150" y2="600" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
            <line x1="750" y1="300" x2="750" y2="600" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
            <line x1="450" y1="450" x2="450" y2="750" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="10 6" />
            <polygon points="450,450 750,600 450,750 150,600" stroke="currentColor" strokeWidth="1" />
            
            {/* Active Payment / Cart Nodes */}
            <circle cx="450" cy="150" r="5" fill="#16a34a" />
            <circle cx="750" cy="300" r="4" fill="#16a34a" />
            <circle cx="150" cy="300" r="4" fill="#16a34a" />
            <circle cx="450" cy="750" r="6" fill="#16a34a" />
          </svg>

          {/* Left Floating Cart / Checkout Cube Wireframe */}
          <svg className="absolute top-[16%] left-[6%] w-72 h-72 opacity-50 text-[var(--accent)] animate-float hidden md:block" viewBox="0 0 200 200" fill="none">
            <rect x="40" y="50" width="120" height="100" rx="8" stroke="currentColor" strokeWidth="1.5" />
            <path d="M40 80 H160 M70 50 V35 C70 20 130 20 130 35 V50" stroke="#16a34a" strokeWidth="1.5" />
            <circle cx="80" cy="115" r="8" stroke="currentColor" strokeWidth="1" />
            <circle cx="80" cy="115" r="3" fill="#16a34a" />
            <line x1="105" y1="110" x2="135" y2="110" stroke="#16a34a" strokeWidth="1.5" strokeDasharray="4 2" />
            <line x1="105" y1="120" x2="125" y2="120" stroke="currentColor" strokeWidth="1" />
          </svg>

          {/* Right Floating Conversion Arc Wheel */}
          <svg className="absolute top-[26%] right-[7%] w-80 h-80 opacity-50 text-emerald-600 animate-float-delayed hidden lg:block" viewBox="0 0 240 240" fill="none">
            <circle cx="120" cy="120" r="70" stroke="currentColor" strokeWidth="1.2" strokeDasharray="15 10" />
            <circle cx="120" cy="120" r="50" stroke="#16a34a" strokeWidth="2" strokeDasharray="40 20" />
            <circle cx="120" cy="120" r="6" fill="#16a34a" />
            <text x="135" y="60" fill="#16a34a" fontSize="9" fontFamily="monospace" letterSpacing="1.5">CHECKOUT_LATENCY: &lt;120MS</text>
            <line x1="120" y1="120" x2="150" y2="65" stroke="#16a34a" strokeWidth="1" />
          </svg>

          {/* Decorative Labels */}
          <div className="absolute top-[22%] left-[18%] hidden xl:flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-white/85 border border-stone-200 backdrop-blur-sm text-[10px] font-mono text-stone-600 shadow-sm opacity-90">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" />
            <span>TRANSACTION_PROTOCOL // E-COMMERCE</span>
          </div>
          <div className="absolute top-[38%] right-[19%] hidden xl:flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-white/85 border border-stone-200 backdrop-blur-sm text-[10px] font-mono text-stone-600 shadow-sm opacity-90">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>CONVERSION_ENGINE: 99.99% UP</span>
          </div>
        </>
      )}

      {/* 2. GRAPHIC DESIGN & BRANDING GEOMETRY: Bauhaus Golden Ratio & Bézier Vector Nodes */}
      {type === "design" && (
        <>
          {/* Center/Back Golden Ratio & Fibonacci Spiral Grid */}
          <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-45 text-stone-400" viewBox="0 0 900 900" fill="none">
            {/* Golden Ratio Rectangles */}
            <rect x="150" y="200" width="600" height="371" stroke="currentColor" strokeWidth="1.2" />
            <line x1="521" y1="200" x2="521" y2="571" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
            <line x1="521" y1="429" x2="750" y2="429" stroke="#16a34a" strokeWidth="1" />
            <line x1="609" y1="429" x2="609" y2="571" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            
            {/* Fibonacci Spiral Path */}
            <path d="M150,571 A371,371 0 0,1 521,200 A229,229 0 0,1 750,429 A142,142 0 0,1 609,571 A88,88 0 0,1 521,483" stroke="#eab308" strokeWidth="2" opacity="0.85" />
            
            {/* Precision Anchor Points */}
            <circle cx="150" cy="571" r="5" fill="#eab308" />
            <circle cx="521" cy="200" r="5" fill="#16a34a" />
            <circle cx="750" cy="429" r="4" fill="#16a34a" />
            <circle cx="609" cy="571" r="4" fill="#eab308" />
          </svg>

          {/* Left Floating Bézier Tangent Curves & Control Handles */}
          <svg className="absolute top-[18%] left-[6%] w-72 h-72 opacity-50 text-[var(--accent)] animate-float hidden md:block" viewBox="0 0 200 200" fill="none">
            <path d="M30,150 C70,30 130,170 170,50" stroke="#eab308" strokeWidth="2" />
            <line x1="30" y1="150" x2="70" y2="30" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="130" y1="170" x2="170" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="30" cy="150" r="4" fill="currentColor" />
            <circle cx="70" cy="30" r="3" fill="#16a34a" />
            <circle cx="130" cy="170" r="3" fill="#16a34a" />
            <circle cx="170" cy="50" r="4" fill="currentColor" />
          </svg>

          {/* Right Floating Bauhaus Geometric Prisms */}
          <svg className="absolute top-[26%] right-[7%] w-80 h-80 opacity-50 text-emerald-600 animate-float-delayed hidden lg:block" viewBox="0 0 240 240" fill="none">
            <circle cx="120" cy="120" r="60" stroke="currentColor" strokeWidth="1.5" />
            <polygon points="120,50 185,160 55,160" stroke="#eab308" strokeWidth="1.5" />
            <rect x="95" y="95" width="50" height="50" stroke="#16a34a" strokeWidth="1.5" transform="rotate(45 120 120)" />
            <circle cx="120" cy="120" r="4" fill="#16a34a" />
            <text x="140" y="60" fill="#eab308" fontSize="9" fontFamily="monospace" letterSpacing="1.5">VECTOR_GOLDEN // 1:1.618</text>
          </svg>

          {/* Decorative Labels */}
          <div className="absolute top-[22%] left-[18%] hidden xl:flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-white/85 border border-stone-200 backdrop-blur-sm text-[10px] font-mono text-stone-600 shadow-sm opacity-90">
            <span className="w-1.5 h-1.5 rounded-full bg-[#eab308]" />
            <span>VECTOR_PRECISION // 1:1.618 RATIO</span>
          </div>
          <div className="absolute top-[38%] right-[19%] hidden xl:flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-white/85 border border-stone-200 backdrop-blur-sm text-[10px] font-mono text-stone-600 shadow-sm opacity-90">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>BRAND_SYSTEM: HIGH-DEFINITION</span>
          </div>
        </>
      )}

      {/* 3. DIGITAL MARKETING & GROWTH GEOMETRY: Exponential Velocity Curve & Target Radar */}
      {type === "marketing" && (
        <>
          {/* Center/Back Exponential Trajectory Curve & Data Axis Grid */}
          <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-45 text-stone-400" viewBox="0 0 900 900" fill="none">
            {/* Axis & Shaded Velocity Area */}
            <line x1="150" y1="750" x2="800" y2="750" stroke="currentColor" strokeWidth="1.5" />
            <line x1="150" y1="750" x2="150" y2="150" stroke="currentColor" strokeWidth="1.5" />
            <path d="M150,750 Q450,720 750,250 L750,750 Z" fill="url(#growthGrad)" opacity="0.15" />
            <path d="M150,750 Q450,720 750,250" stroke="#16a34a" strokeWidth="3" />
            
            {/* Gradient definition */}
            <defs>
              <linearGradient id="growthGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#16a34a" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#16a34a" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Target Checkpoints along trajectory */}
            <circle cx="350" cy="670" r="5" fill="currentColor" />
            <circle cx="550" cy="520" r="5" fill="#16a34a" />
            <circle cx="750" cy="250" r="7" fill="#16a34a" />
            <line x1="750" y1="250" x2="750" y2="750" stroke="#16a34a" strokeWidth="1" strokeDasharray="6 6" />
            <line x1="150" y1="250" x2="750" y2="250" stroke="#16a34a" strokeWidth="1" strokeDasharray="6 6" />
          </svg>

          {/* Left Floating SERP & Target Conversion Radar */}
          <svg className="absolute top-[18%] left-[6%] w-72 h-72 opacity-50 text-[var(--accent)] animate-float hidden md:block" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
            <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="1" />
            <circle cx="100" cy="100" r="30" stroke="#16a34a" strokeWidth="1.5" />
            <path d="M100,100 L160,40 A80,80 0 0,0 100,20 Z" fill="#16a34a" opacity="0.25" />
            <circle cx="100" cy="100" r="3" fill="#16a34a" />
            <circle cx="145" cy="55" r="4" fill="#16a34a" />
          </svg>

          {/* Right Floating Isometric Conversion Funnel Wireframe */}
          <svg className="absolute top-[26%] right-[7%] w-80 h-80 opacity-50 text-emerald-600 animate-float-delayed hidden lg:block" viewBox="0 0 240 240" fill="none">
            <polygon points="50,60 190,60 160,110 80,110" stroke="currentColor" strokeWidth="1.5" />
            <polygon points="80,120 160,120 140,165 100,165" stroke="#16a34a" strokeWidth="1.5" />
            <polygon points="100,175 140,175 130,210 110,210" stroke="currentColor" strokeWidth="1.5" fill="#16a34a" fillOpacity="0.3" />
            <text x="135" y="65" fill="#16a34a" fontSize="9" fontFamily="monospace" letterSpacing="1.5">SERP_VELOCITY // +340%</text>
          </svg>

          {/* Decorative Labels */}
          <div className="absolute top-[22%] left-[18%] hidden xl:flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-white/85 border border-stone-200 backdrop-blur-sm text-[10px] font-mono text-stone-600 shadow-sm opacity-90">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" />
            <span>GROWTH_VECTOR // SEO_ALGORITHM</span>
          </div>
          <div className="absolute top-[38%] right-[19%] hidden xl:flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-white/85 border border-stone-200 backdrop-blur-sm text-[10px] font-mono text-stone-600 shadow-sm opacity-90">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>LEAD_ENGINE: HIGH-CONVERSION SLA</span>
          </div>
        </>
      )}

      {/* 4. WEB DESIGN & CUSTOM APP GEOMETRY (DEFAULT): Architectural Compass & Isometric Prisms */}
      {type === "web" && (
        <>
          {/* Center Architectural Compass & Concentric Blueprint Grid */}
          <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-45 text-stone-400" viewBox="0 0 900 900" fill="none">
            {/* Outer Concentric Rings */}
            <circle cx="450" cy="450" r="420" stroke="currentColor" strokeWidth="1" strokeDasharray="6 12" />
            <circle cx="450" cy="450" r="340" stroke="currentColor" strokeWidth="1" strokeDasharray="16 16" />
            <circle cx="450" cy="450" r="260" stroke="#16a34a" strokeWidth="1" strokeDasharray="4 8" opacity="0.75" />
            <circle cx="450" cy="450" r="180" stroke="currentColor" strokeWidth="1.5" />
            
            {/* Crosshair & Measuring Axis Lines */}
            <line x1="0" y1="450" x2="900" y2="450" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" />
            <line x1="450" y1="0" x2="450" y2="900" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" />
            <line x1="130" y1="130" x2="770" y2="770" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 12" opacity="0.5" />
            <line x1="770" y1="130" x2="130" y2="770" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 12" opacity="0.5" />

            {/* Blueprint Node Indicators on Rings */}
            <circle cx="450" cy="30" r="4" fill="#16a34a" />
            <circle cx="870" cy="450" r="4" fill="#16a34a" />
            <circle cx="450" cy="870" r="4" fill="#16a34a" />
            <circle cx="30" cy="450" r="4" fill="#16a34a" />
            
            {/* Radial Coordinate Tick Marks */}
            <path d="M445 110 H455 M445 790 H455 M110 445 V455 M790 445 V455" stroke="currentColor" strokeWidth="2" />
          </svg>

          {/* Left Floating Isometric Architectural Prism Wireframe */}
          <svg className="absolute top-[18%] left-[6%] w-72 h-72 opacity-50 text-[var(--accent)] animate-float hidden md:block" viewBox="0 0 200 200" fill="none">
            <polygon points="100,20 170,60 170,140 100,180 30,140 30,60" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" />
            <polygon points="100,40 150,70 150,130 100,160 50,130 50,70" stroke="#16a34a" strokeWidth="1" opacity="0.85" />
            <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="1" />
            <line x1="30" y1="60" x2="170" y2="140" stroke="currentColor" strokeWidth="1" />
            <line x1="170" y1="60" x2="30" y2="140" stroke="currentColor" strokeWidth="1" />
            <circle cx="100" cy="100" r="5" fill="#16a34a" />
            <circle cx="100" cy="20" r="3" fill="currentColor" />
            <circle cx="170" cy="60" r="3" fill="currentColor" />
            <circle cx="30" cy="140" r="3" fill="currentColor" />
          </svg>

          {/* Right Floating Wireframe Dodecahedron & Data Nodes */}
          <svg className="absolute top-[28%] right-[7%] w-80 h-80 opacity-50 text-emerald-600 animate-float-delayed hidden lg:block" viewBox="0 0 240 240" fill="none">
            <rect x="40" y="40" width="160" height="160" rx="16" stroke="currentColor" strokeWidth="1.2" strokeDasharray="8 6" transform="rotate(15 120 120)" />
            <rect x="60" y="60" width="120" height="120" rx="12" stroke="#16a34a" strokeWidth="1.5" transform="rotate(-30 120 120)" />
            <circle cx="120" cy="120" r="50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="120" cy="120" r="4" fill="#16a34a" />
            
            {/* Node Labels */}
            <text x="145" y="65" fill="#16a34a" fontSize="9" fontFamily="monospace" letterSpacing="2">SYS_NODE // 01</text>
            <line x1="120" y1="120" x2="140" y2="68" stroke="#16a34a" strokeWidth="1" />
          </svg>

          {/* Decorative Labels */}
          <div className="absolute top-[22%] left-[18%] hidden xl:flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-white/85 border border-stone-200 backdrop-blur-sm text-[10px] font-mono text-stone-600 shadow-sm opacity-90">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a]" />
            <span>ARCH_PROTOCOL // {category.toUpperCase()}</span>
          </div>
          <div className="absolute top-[38%] right-[19%] hidden xl:flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-white/85 border border-stone-200 backdrop-blur-sm text-[10px] font-mono text-stone-600 shadow-sm opacity-90">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>BLUEPRINT_ENGINE: SUB-0.8S SLA</span>
          </div>
        </>
      )}

      {/* Bottom Geometric Isometric Plane (Universal Base Boundary) */}
      <svg className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[1200px] h-64 opacity-35 text-stone-300" viewBox="0 0 1200 200" fill="none">
        <path d="M0 100 L600 20 L1200 100 L600 180 Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M150 80 L600 40 L1050 80 L600 120 Z" stroke="#16a34a" strokeWidth="1" opacity="0.6" />
        <line x1="600" y1="20" x2="600" y2="180" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
        <line x1="0" y1="100" x2="1200" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
      </svg>
    </div>
  );
}

export function ServiceDetailView({ id }: ServiceDetailViewProps) {
  const router = useRouter();
  const detail = getServiceDetail(id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleStartOnboarding = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitLead = async (payload: LeadSubmissionPayload) => {
    const res = await submitLeadAction(payload);
    if (res.success) {
      setIsModalOpen(false);
      router.push(`/thank-you?category=${encodeURIComponent(payload.category)}&leadId=${res.leadId || "NEW"}`);
    } else {
      alert(res.error || "Something went wrong saving your lead. Please try again.");
    }
  };

  const sampleQuery = `We want to scope a project for ${detail.item.title} (${detail.groupName}) with timeline ${detail.item.timeline} to achieve ${detail.item.metrics}.`;

  return (
    <main key={detail.item.id} className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col font-sans selection:bg-[var(--accent)] selection:text-white animate-fadeIn">
      <Navbar onStartOnboarding={() => handleStartOnboarding()} />

      {/* COMPACT FIRST-LANDED VIEWPORT CINEMATIC HERO SECTION (LIGHT LUXURY BLUEPRINT STYLE) */}
      <section className="relative h-[calc(100vh-4rem)] min-h-[600px] max-h-[920px] w-full flex flex-col justify-between items-center text-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-0 overflow-hidden bg-[var(--background)] text-[var(--foreground)] border-b border-[var(--surface-border)]">
        {/* Geometric Architectural Illustrations & Blueprint Grid System */}
        <GeometricHeroIllustrations id={detail.id} category={detail.groupName} title={detail.item.title} />

        {/* Centered Editorial Hero Content (Decluttered & Gallery-Grade UI/UX) */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center my-auto py-4 sm:py-6">
          {/* Minimalist Protocol Status Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 animate-slideDown delay-100 mb-6 sm:mb-8">
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white hover:bg-stone-50 border border-stone-200 text-xs font-mono font-bold text-[var(--foreground)] transition-colors tracking-wider uppercase shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shrink-0" />
              <span>{detail.groupName} PROTOCOL // ACTIVE</span>
            </Link>
            {detail.item.badge && (
              <span className="px-3.5 py-1.5 rounded-full bg-[var(--accent-subtle)] border border-[var(--accent)]/30 text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider shadow-sm">
                ★ {detail.item.badge}
              </span>
            )}
          </div>

          {/* Massive Editorial Headline with Generous Negative Space */}
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[var(--foreground)] tracking-tight leading-[1.06] max-w-5xl mx-auto animate-slideUp delay-200">
            <span className="relative inline-block pb-2">
              <span>{detail.item.title}</span>
              {/* Glowing Hand-Drawn Underline Accent */}
              <span className="absolute left-0 bottom-0 w-full h-1.5 sm:h-2 bg-gradient-to-r from-[var(--accent)] via-emerald-500 to-transparent rounded-full opacity-80 animate-pulse" />
            </span>
          </h1>

          {/* Clean, Legible Core Hook Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[var(--muted)] font-light leading-relaxed max-w-2xl mx-auto mt-6 animate-slideUp delay-300 line-clamp-2">
            {detail.overview}
          </p>

          {/* High-Impact Dual Pill CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4 animate-scaleFadeIn delay-400">
            <button
              type="button"
              onClick={handleStartOnboarding}
              className="px-8 py-4.5 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-display font-extrabold text-base sm:text-lg tracking-wide shadow-[0_4px_25px_rgba(21,128,61,0.25)] hover:shadow-[0_6px_35px_rgba(21,128,61,0.4)] hover:scale-105 active:scale-[0.98] transition-all flex items-center gap-3.5 group cursor-pointer"
            >
              <span>Scope This Project Now</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform font-mono text-sm">
                &rarr;
              </span>
            </button>
            
            <a
              href="#interactive-showcase"
              className="px-7 py-4.5 rounded-full bg-white hover:bg-stone-50 text-[var(--foreground)] font-display font-bold text-base border border-stone-200 shadow-sm transition-all flex items-center gap-2 hover:border-[var(--accent)]/50"
            >
              <span>Explore Live Architecture ↓</span>
            </a>
          </div>
        </div>

        {/* Edge-to-Edge Horizontal Trust Marquee Strip right at the bottom edge of first landed viewport */}
        <div className="w-full border-t border-[var(--surface-border)] bg-white/95 backdrop-blur-md py-3 sm:py-3.5 shrink-0 overflow-hidden shadow-sm">
          <div className="animate-marquee font-mono text-xs font-bold text-stone-500 flex items-center gap-12 tracking-wider">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              <span>⚡ SUB-0.8S EDGE RESPONSE SPEED</span>
            </span>
            <span className="flex items-center gap-2 text-[var(--foreground)]">
              <span>🛡 0% RECURRING PLATFORM COMMISSION FOREVER</span>
            </span>
            <span className="flex items-center gap-2">
              <span>✓ 100% SOURCE CODE &amp; IP HANDOVER</span>
            </span>
            <span className="flex items-center gap-2 text-[var(--accent)]">
              <span>🇮🇳 INDIAN DATA LOCALIZATION READY</span>
            </span>
            <span className="flex items-center gap-2 text-[var(--foreground)]">
              <span>🚀 GUARANTEED 2-HOUR ARCHITECTURAL SCOPING SLA</span>
            </span>
            <span className="flex items-center gap-2">
              <span>🔒 ZERO-BLOAT CLEAN CODE ARCHITECTURE</span>
            </span>
            {/* Duplicate set for seamless infinite marquee loop */}
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              <span>⚡ SUB-0.8S EDGE RESPONSE SPEED</span>
            </span>
            <span className="flex items-center gap-2 text-[var(--foreground)]">
              <span>🛡 0% RECURRING PLATFORM COMMISSION FOREVER</span>
            </span>
            <span className="flex items-center gap-2">
              <span>✓ 100% SOURCE CODE &amp; IP HANDOVER</span>
            </span>
            <span className="flex items-center gap-2 text-[var(--accent)]">
              <span>🇮🇳 INDIAN DATA LOCALIZATION READY</span>
            </span>
            <span className="flex items-center gap-2 text-[var(--foreground)]">
              <span>🚀 GUARANTEED 2-HOUR ARCHITECTURAL SCOPING SLA</span>
            </span>
            <span className="flex items-center gap-2">
              <span>🔒 ZERO-BLOAT CLEAN CODE ARCHITECTURE</span>
            </span>
          </div>
        </div>
      </section>

      {/* INTERACTIVE ARCHITECTURAL SHOWCASE (First Scroll Stop below Hero Viewport) */}
      <section id="interactive-showcase" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full animate-fadeIn delay-300 border-b border-[var(--surface-border)]">
        <div className="text-center mb-8 sm:mb-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--accent-subtle)] border border-[var(--accent)]/30 text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            <span>Live Architectural Diagnostic &amp; Scope Engine</span>
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[var(--foreground)] tracking-tight">
            Interactive System Blueprint &amp; Scope Visualizer
          </h2>
          <p className="text-sm sm:text-base text-[var(--muted)] max-w-2xl mx-auto mt-2">
            Test, inspect, and customize the exact delivery parameters for {detail.item.title} right inside our interactive protocol engine before scoping your project.
          </p>
        </div>
        <ServiceHeroVisualizer detail={detail} />
      </section>

      {/* CUSTOMER HOOK SECTION: WHY THIS SOLVES YOUR EXACT GROWTH BOTTLENECK */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-[var(--surface-border)] animate-fadeIn delay-300">
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[var(--surface)] via-[var(--surface)] to-[var(--accent-subtle)]/30 border border-[var(--surface-border)] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)]/10 rounded-bl-full blur-2xl pointer-events-none" />

          <div className="max-w-3xl relative z-10 mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[var(--accent)] block mb-2">
              {'// The Customer Hook'}
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[var(--foreground)] tracking-tight">
              Why most {detail.item.title} implementations fail within 6 months.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
              Standard agencies rely on heavy third-party plugins, recurring subscription traps, and slow bloated templates. Here is what we do differently to hook and convert your audience:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* Card 1 */}
            <div className="group p-6 sm:p-7 rounded-3xl bg-[var(--background)] border border-[var(--surface-border)] flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[var(--accent)]/50 transition-all duration-300 relative overflow-hidden">
              <div className="flex flex-col items-start">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-500 font-mono text-[11px] font-bold tracking-wider uppercase mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                  <span>✕ Legacy Trap · Old Way</span>
                </span>
                <h4 className="font-display font-black text-base sm:text-lg text-[var(--foreground)] tracking-tight group-hover:text-[var(--accent)] transition-colors">
                  Slow 6-Second Page Loads
                </h4>
                <p className="mt-2.5 text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                  Off-the-shelf page builders execute 40+ JavaScript files, killing your mobile conversions and Google rankings.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[var(--surface-border)] flex items-center gap-2.5 font-mono text-xs font-bold text-[var(--accent)]">
                <span className="flex items-center justify-center w-5 h-5 rounded-md bg-[var(--accent-subtle)] border border-[var(--accent)]/30 text-[11px] shrink-0">
                  ⚡
                </span>
                <span>Our Fix: Sub-0.8s Edge Code</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group p-6 sm:p-7 rounded-3xl bg-[var(--background)] border border-[var(--surface-border)] flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[var(--accent)]/50 transition-all duration-300 relative overflow-hidden">
              <div className="flex flex-col items-start">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-500 font-mono text-[11px] font-bold tracking-wider uppercase mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                  <span>✕ Legacy Trap · Old Way</span>
                </span>
                <h4 className="font-display font-black text-base sm:text-lg text-[var(--foreground)] tracking-tight group-hover:text-[var(--accent)] transition-colors">
                  2% to 5% Revenue Taxes
                </h4>
                <p className="mt-2.5 text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                  Platforms like Shopify and standard SaaS vendors charge recurring transaction fees that scale with your success.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[var(--surface-border)] flex items-center gap-2.5 font-mono text-xs font-bold text-[var(--accent)]">
                <span className="flex items-center justify-center w-5 h-5 rounded-md bg-[var(--accent-subtle)] border border-[var(--accent)]/30 text-[11px] shrink-0">
                  🛡
                </span>
                <span>Our Fix: 0% Commission Forever</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group p-6 sm:p-7 rounded-3xl bg-[var(--background)] border border-[var(--surface-border)] flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[var(--accent)]/50 transition-all duration-300 relative overflow-hidden">
              <div className="flex flex-col items-start">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-500 font-mono text-[11px] font-bold tracking-wider uppercase mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                  <span>✕ Legacy Trap · Old Way</span>
                </span>
                <h4 className="font-display font-black text-base sm:text-lg text-[var(--foreground)] tracking-tight group-hover:text-[var(--accent)] transition-colors">
                  Hostage IP &amp; Locked Code
                </h4>
                <p className="mt-2.5 text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                  When you leave typical agencies or proprietary builders, you lose your entire repository and design systems.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[var(--surface-border)] flex items-center gap-2.5 font-mono text-xs font-bold text-[var(--accent)]">
                <span className="flex items-center justify-center w-5 h-5 rounded-md bg-[var(--accent-subtle)] border border-[var(--accent)]/30 text-[11px] shrink-0">
                  ✓
                </span>
                <span>Our Fix: 100% IP Handover</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PILLARS / ARCHITECTURAL BLUEPRINT */}
      <section id="blueprint" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-[var(--surface-border)] animate-fadeIn delay-400">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[var(--accent)] block mb-2">
            {'// Core Architecture & Capabilities'}
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[var(--foreground)] tracking-tight">
            Engineered specifically for {detail.item.title}.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
            Every layer of our implementation is engineered to eliminate technical bloat, guarantee high speed, and maximize your business ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {detail.corePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group p-6 sm:p-8 rounded-3xl bg-[var(--surface)] hover:bg-[var(--surface-hover)] border border-[var(--surface-border)] shadow-md hover:shadow-xl hover:border-[var(--accent)]/50 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/5 rounded-bl-full pointer-events-none group-hover:bg-[var(--accent)]/15 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xl sm:text-2xl font-black text-[var(--muted-light)] group-hover:text-[var(--accent)] transition-colors">
                    {`0${idx + 1}`}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-[var(--accent-subtle)] border border-[var(--accent)]/30 font-mono text-[11px] font-bold text-[var(--accent)] transition-all">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--surface-border)] flex items-center justify-between font-mono text-xs text-[var(--muted)] transition-colors">
                <span>Architectural Standard</span>
                <span className="text-[var(--accent)] font-bold">Verified ✓</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DELIVERABLES & TECH STACK BENTO MATRIX */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-[var(--surface-border)] animate-fadeIn delay-500">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Panel: Deliverables Checklist (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--accent)]">
                  Tangible Deliverables
                </span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[var(--foreground)]">
                What you receive upon delivery.
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] mb-8">
                Clear, transparent deliverables with 100% intellectual property ownership.
              </p>

              <ul className="space-y-4">
                {detail.deliverables.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[var(--background)] border border-[var(--surface-border)] hover:border-[var(--accent)]/40 transition-colors"
                  >
                    <span className="w-6 h-6 rounded-lg bg-[var(--accent-subtle)] border border-[var(--accent)]/30 text-[var(--accent)] flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-sm sm:text-base text-[var(--foreground)] font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--surface-border)] flex items-center justify-between text-xs font-mono text-[var(--muted)]">
              <span>Source Code Handover: 100% Guaranteed</span>
              <span className="text-[var(--accent)] font-semibold">No Recurring Licensing</span>
            </div>
          </div>

          {/* Right Panel: Tech Stack Matrix (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-10 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[var(--accent)]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--accent)]">
                  Engineering Stack
                </span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-[var(--foreground)]">
                Core Technologies
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] mb-8">
                Modern, enterprise-grade tooling chosen specifically for high performance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {detail.techStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[var(--background)] border border-[var(--surface-border)] hover:border-[var(--accent)]/40 transition-all flex flex-col justify-center"
                  >
                    <span className="text-[10px] font-mono font-bold uppercase text-[var(--muted)] tracking-wider">
                      {tech.category}
                    </span>
                    <span className="mt-1 text-sm sm:text-base font-bold text-[var(--foreground)] tracking-tight">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--surface-border)]">
              <div className="p-4 rounded-2xl bg-[var(--background)] border border-[var(--surface-border)] text-xs font-mono text-[var(--muted)] leading-relaxed">
                <span className="text-[var(--accent)] font-bold block mb-1">💡 Architecture Note:</span>
                We write clean, documented TypeScript and clean code adhering to strict security standards with zero bloat.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEP-BY-STEP ROADMAP */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-[var(--surface-border)] animate-fadeIn delay-500">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[var(--accent)] block mb-2">
            {'// Execution Roadmap'}
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[var(--foreground)] tracking-tight">
            Technical execution stages.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
            Our systematic process guarantees clear communication, rapid prototyping, and zero surprises on launch day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {detail.phases.map((phase, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-md hover:border-[var(--accent)]/40 transition-all flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-5 font-mono">
                  <span className="text-xs font-bold text-[var(--accent)] px-2.5 py-1 rounded bg-[var(--accent-subtle)] border border-[var(--accent)]/30">
                    {phase.number}
                  </span>
                  <span className="text-xs font-semibold text-[var(--muted)]">
                    ⏱ {phase.duration}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-[var(--foreground)] leading-snug">
                  {phase.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                  {phase.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--surface-border)] font-mono text-[11px] text-[var(--muted)]">
                Stage Checkpoint {idx + 1} / {detail.phases.length}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HEAD-TO-HEAD ARCHITECTURAL COMPARISON */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-[var(--surface-border)] animate-fadeIn delay-600">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[var(--accent)] block mb-2">
            {'// Why Custom Engineering Wins'}
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[var(--foreground)] tracking-tight">
            The architectural difference.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
            See how our in-house engineering compares against typical agencies and off-the-shelf SaaS templates.
          </p>
        </div>

        <div className="rounded-3xl border border-[var(--surface-border)] bg-[var(--surface)] shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 bg-[var(--background)] p-4 sm:p-6 border-b border-[var(--surface-border)] font-mono text-xs sm:text-sm font-bold">
            <div className="md:col-span-4 text-[var(--muted)]">Evaluation Criteria</div>
            <div className="md:col-span-4 text-[var(--accent)] mt-2 md:mt-0 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              India Web Designs Standard
            </div>
            <div className="md:col-span-4 text-[var(--muted)] mt-2 md:mt-0">Typical Agencies / SaaS Templates</div>
          </div>

          <div className="divide-y divide-[var(--surface-border)] font-sans">
            {detail.comparison.map((comp, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 gap-3 sm:gap-4 hover:bg-[var(--surface-hover)] transition-colors">
                <div className="md:col-span-4 font-bold text-xs sm:text-sm text-[var(--foreground)] flex items-center">
                  {comp.feature}
                </div>
                <div className="md:col-span-4 text-xs sm:text-sm text-[var(--foreground)] font-medium bg-[var(--accent-subtle)] p-3 rounded-xl border border-[var(--accent)]/30 flex items-center gap-2">
                  <span className="text-[var(--accent)] font-bold">✓</span>
                  <span>{comp.ourStandard}</span>
                </div>
                <div className="md:col-span-4 text-xs sm:text-sm text-[var(--muted)] p-3 rounded-xl bg-[var(--background)] border border-[var(--surface-border)] flex items-center gap-2">
                  <span className="text-red-500 font-bold">×</span>
                  <span>{comp.typicalAgency}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full border-t border-[var(--surface-border)] animate-fadeIn delay-600">
        <div className="mb-12 text-center sm:text-left">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[var(--accent)] block mb-2">
            {'// Knowledge Base'}
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[var(--foreground)] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[var(--muted)]">
            Everything you need to know about our {detail.item.title} execution.
          </p>
        </div>

        <div className="space-y-3.5">
          {detail.faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] shadow-md overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-display font-bold text-sm sm:text-base text-[var(--foreground)] flex items-center justify-between gap-4 cursor-pointer hover:text-[var(--accent)] transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className={`font-mono text-lg text-[var(--accent)] transform transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[var(--muted)] leading-relaxed border-t border-[var(--surface-border)] pt-3.5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM ACTION BANNER */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full animate-scaleFadeIn delay-700">
        <div className="p-8 sm:p-14 rounded-3xl bg-[var(--surface)] border border-[var(--surface-border)] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-[var(--accent)]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--background)] border border-[var(--surface-border)] text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--accent)] mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span>Direct Engineering Scoping</span>
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[var(--foreground)] tracking-tight leading-snug">
              Ready to scope your {detail.item.title}?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
              Answer 4 simple questions and our senior architects will prepare your exact delivery timeline, cost model, and technical roadmap in under 2 hours.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <button
              type="button"
              onClick={handleStartOnboarding}
              className="px-8 py-5 rounded-2xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-display font-extrabold text-base sm:text-lg tracking-wide shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer flex items-center gap-3"
            >
              <span>Launch Scoping Modal &rarr;</span>
            </button>
          </div>
        </div>
      </section>

      <Footer onStartOnboarding={handleStartOnboarding} />

      {/* Interactive Onboarding Modal */}
      <OnboardingModal
        isOpen={isModalOpen}
        category={detail.item.category}
        initialQuery={sampleQuery}
        onClose={handleCloseModal}
        onSubmit={handleSubmitLead}
      />

      {/* Sticky Bottom Intake Trigger */}
      <StickyIntakeBar
        isModalOpen={isModalOpen}
        onOpenIntake={handleStartOnboarding}
      />
    </main>
  );
}
