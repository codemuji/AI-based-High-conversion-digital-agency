"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import type { Category } from "@/lib/intent-engine";
import { HeroIntake } from "@/components/hero/HeroIntake";
import { OnboardingModal, type LeadSubmissionPayload } from "@/components/modal/OnboardingModal";
import { Navbar } from "@/components/navigation/Navbar";
import { StickyIntakeBar } from "@/components/navigation/StickyIntakeBar";
import { RecognitionMarquee } from "@/components/sections/RecognitionMarquee";
import { GrowthRoadmapSection } from "@/components/sections/GrowthRoadmapSection";
import { BusinessUseCasesSection } from "@/components/sections/BusinessUseCasesSection";
import { CTASection } from "@/components/sections/CTASection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { submitLeadAction } from "@/app/actions";

export default function HomePage() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [initialQuery, setInitialQuery] = useState("");

  const handleStartOnboarding = (category?: Category, query = "") => {
    setActiveCategory(category || "Website");
    setInitialQuery(query || (category || "Website"));
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

  return (
    <main className="flex-1 bg-[var(--background)] relative">
      <Navbar onStartOnboarding={handleStartOnboarding} />

      {/* 1. Conversion-First Search/Chat Hero Intake */}
      <HeroIntake onStartOnboarding={handleStartOnboarding} />

      {/* 1.5. Official Accreditations & Partner Ecosystem Marquee */}
      <RecognitionMarquee />

      {/* 2. Real Business Growth Model (Micro / Medium / High Scale Switcher with 2-Box Layout) */}
      <ScrollReveal>
        <GrowthRoadmapSection onStartOnboarding={handleStartOnboarding} />
      </ScrollReveal>

      {/* 2.5. Classic Industry Use Cases with 2-Box Visual Architecture (`image` + `write up`) */}
      <ScrollReveal>
        <BusinessUseCasesSection />
      </ScrollReveal>

      {/* 3. High-Impact Conversion CTA Banner */}
      <ScrollReveal>
        <CTASection onStartOnboarding={handleStartOnboarding} />
      </ScrollReveal>

      {/* 4. Verified Client Testimonials */}
      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>

      {/* 5. Objection-Handling FAQ Accordion */}
      <ScrollReveal>
        <FAQSection />
      </ScrollReveal>

      {/* 6. Comprehensive Architectural Mega-Footer (with Direct Contact Channels) */}
      <Footer onStartOnboarding={handleStartOnboarding} />

      {/* 8. Native <dialog> 4-Question Onboarding Modal */}
      <OnboardingModal
        isOpen={isModalOpen}
        category={activeCategory}
        initialQuery={initialQuery}
        onClose={handleCloseModal}
        onSubmit={handleSubmitLead}
      />

      {/* 9. Sticky / Floating Intake Bar (IntersectionObserver on #hero) */}
      <StickyIntakeBar
        isModalOpen={isModalOpen}
        onOpenIntake={(cat) => handleStartOnboarding(cat, "")}
      />
    </main>
  );
}
