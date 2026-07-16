import React from "react";
import type { Metadata } from "next";
import { USE_CASES_DATA } from "@/lib/use-cases-data";
import { UseCaseDetailView } from "@/components/use-cases/UseCaseDetailView";

export async function generateStaticParams() {
  return USE_CASES_DATA.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const useCase = USE_CASES_DATA.find((item) => item.slug === slug);

  if (!useCase) {
    return {
      title: "Use Case Guide | India Web Designs",
    };
  }

  return {
    title: `${useCase.vertical} Growth Guide | India Web Designs`,
    description: useCase.tagline,
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
