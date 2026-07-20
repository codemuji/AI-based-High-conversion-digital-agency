import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES_DROPDOWN_GROUPS } from "@/lib/services-dropdown-data";
import { getServiceDetail } from "@/lib/services-detail-data";
import { ServiceDetailView } from "@/components/services/ServiceDetailView";

export async function generateStaticParams() {
  return SERVICES_DROPDOWN_GROUPS.flatMap((group) =>
    group.items.map((item) => ({
      slug: item.id,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  // Verify if it is a valid service slug
  const isValidSlug = SERVICES_DROPDOWN_GROUPS.some((g) =>
    g.items.some((i) => i.id === slug)
  );

  if (!isValidSlug) {
    return {
      title: "Page Not Found | India Web Designs",
    };
  }

  const detail = getServiceDetail(slug);

  return {
    title: `${detail.item.title} | India Web Designs`,
    description: detail.overview,
  };
}

export default async function TopLevelServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const isValidSlug = SERVICES_DROPDOWN_GROUPS.some((g) =>
    g.items.some((i) => i.id === slug)
  );

  if (!isValidSlug) {
    notFound();
  }

  return <ServiceDetailView id={slug} />;
}
