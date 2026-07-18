import React from "react";
import type { Metadata } from "next";
import { SERVICES_DROPDOWN_GROUPS } from "@/lib/services-dropdown-data";
import { getServiceDetail } from "@/lib/services-detail-data";
import { ServiceDetailView } from "@/components/services/ServiceDetailView";

export async function generateStaticParams() {
  return SERVICES_DROPDOWN_GROUPS.flatMap((group) =>
    group.items.map((item) => ({
      id: item.id,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const detail = getServiceDetail(id);

  return {
    title: `${detail.item.title} | India Web Designs`,
    description: detail.overview,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ServiceDetailView id={id} />;
}
