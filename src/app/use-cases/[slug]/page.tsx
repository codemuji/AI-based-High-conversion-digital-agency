import React from "react";
import type { Metadata } from "next";
import { USE_CASES_DATA } from "@/lib/use-cases-data";
import { GROWTH_ROADMAP_SCALES } from "@/lib/growth-roadmap-data";
import { UseCaseDetailView } from "@/components/use-cases/UseCaseDetailView";

export async function generateStaticParams() {
  const useCaseSlugs = USE_CASES_DATA.map((item) => ({
    slug: item.slug,
  }));
  const roadmapSlugs = GROWTH_ROADMAP_SCALES.flatMap((tab) => tab.cards).map((card) => ({
    slug: card.slug,
  }));

  // Deduplicate by slug
  const allSlugsMap = new Map();
  [...useCaseSlugs, ...roadmapSlugs].forEach((item) => {
    allSlugsMap.set(item.slug, item);
  });

  return Array.from(allSlugsMap.values());
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const useCase = USE_CASES_DATA.find((item) => item.slug === slug);
  const roadmapCard = GROWTH_ROADMAP_SCALES.flatMap((tab) => tab.cards).find(
    (card) => card.slug === slug || card.id === slug
  );

  if (!useCase && !roadmapCard) {
    return {
      title: "Use Case Guide | India Web Designs",
    };
  }

  const vertical = useCase?.vertical || roadmapCard?.industry;
  const tagline = useCase?.tagline || `Engineered architectural roadmap and step-by-step technical execution for ${roadmapCard?.industry} (${roadmapCard?.scaleBracket}).`;

  return {
    title: `${vertical} Growth Guide | India Web Designs`,
    description: tagline,
  };
}

export default async function UseCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <UseCaseDetailView slug={slug} />;
}
