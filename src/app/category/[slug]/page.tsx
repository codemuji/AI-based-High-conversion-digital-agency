import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES_DROPDOWN_GROUPS } from "@/lib/services-dropdown-data";
import { CategoryDetailView } from "@/components/category/CategoryDetailView";

export async function generateStaticParams() {
  return SERVICES_DROPDOWN_GROUPS.map((group) => ({
    slug: group.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const group = SERVICES_DROPDOWN_GROUPS.find((g) => g.id === slug);

  if (!group) {
    return {
      title: "Category Not Found | India Web Designs",
    };
  }

  return {
    title: `${group.name} Services & Solutions | India Web Designs`,
    description: `Explore our specialized ${group.name} services built for high-growth Indian businesses. ${group.tagline}.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const group = SERVICES_DROPDOWN_GROUPS.find((g) => g.id === slug);

  if (!group) {
    notFound();
  }

  return <CategoryDetailView slug={slug} />;
}
