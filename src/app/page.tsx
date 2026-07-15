"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import type { Category } from "@/lib/intent-engine";
import { HeroIntake } from "@/components/hero/HeroIntake";
import { OnboardingModal, type LeadSubmissionPayload } from "@/components/modal/OnboardingModal";
import { StickyIntakeBar } from "@/components/navigation/StickyIntakeBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { Footer } from "@/components/sections/Footer";
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
    <main className="flex-1 bg-[var(--background)] relative selection:bg-[var(--accent)] selection:text-white">
      {/* 1. Conversion-First Search/Chat Hero Intake */}
      <HeroIntake onStartOnboarding={handleStartOnboarding} />

      {/* 2. Services Grid with interactive scoping triggers */}
      <ServicesGrid onSelectService={(cat) => handleStartOnboarding(cat, cat)} />

      {/* 3. 4-Step Execution Process */}
      <ProcessSection />

      {/* 4. Verified Case Studies & Proof */}
      <CaseStudiesSection />

      {/* 5. About IWD Conversion Engineering */}
      <AboutSection />

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
