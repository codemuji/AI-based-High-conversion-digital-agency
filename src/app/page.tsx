"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import type { Category } from "@/lib/intent-engine";
import { HeroIntake } from "@/components/hero/HeroIntake";
import { OnboardingModal, type LeadSubmissionPayload } from "@/components/modal/OnboardingModal";
import { Navbar } from "@/components/navigation/Navbar";
import { StickyIntakeBar } from "@/components/navigation/StickyIntakeBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { RecognitionMarquee } from "@/components/sections/RecognitionMarquee";
import { BusinessUseCasesSection } from "@/components/sections/BusinessUseCasesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { AboutSection } from "@/components/sections/AboutSection";
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
      <Navbar />

      {/* 1. Conversion-First Search/Chat Hero Intake */}
      <HeroIntake onStartOnboarding={handleStartOnboarding} />

      {/* 1.5. Official Accreditations & Partner Ecosystem Marquee */}
      <RecognitionMarquee />

      {/* 2. Business Use Cases Bento Grid */}
      <ScrollReveal>
        <BusinessUseCasesSection />
      </ScrollReveal>

      {/* 2.5. Services Grid with interactive scoping triggers */}
      <ScrollReveal>
        <ServicesGrid onSelectService={(cat) => handleStartOnboarding(cat, cat)} />
      </ScrollReveal>

      {/* 3. 4-Step Execution Process */}
      <ScrollReveal>
        <ProcessSection />
      </ScrollReveal>

      {/* 4. Verified Case Studies & Proof */}
      <ScrollReveal>
        <CaseStudiesSection />
      </ScrollReveal>

      {/* 5. About IWD Conversion Engineering */}
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>

      {/* 6. Footer */}
      <Footer />

      {/* 7. Native <dialog> 4-Question Onboarding Modal */}
      <OnboardingModal
        isOpen={isModalOpen}
        category={activeCategory}
        initialQuery={initialQuery}
        onClose={handleCloseModal}
        onSubmit={handleSubmitLead}
      />

      {/* 8. Sticky / Floating Intake Bar (IntersectionObserver on #hero) */}
      <StickyIntakeBar
        isModalOpen={isModalOpen}
        onOpenIntake={(cat) => handleStartOnboarding(cat, "")}
      />
    </main>
  );
}
