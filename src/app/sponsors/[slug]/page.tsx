import { sponsors } from "@/lib/data/sponsors";
import { notFound } from "next/navigation";
import SponsorDetailClient from "@/app/sponsors/[slug]/SponsorDetailClient";
import { Metadata } from "next";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const sponsor = sponsors.find((s) => s.slug === params.slug);
  
  if (!sponsor) {
    return {
      title: "Sponsor Not Found",
    };
  }

  return {
    title: `${sponsor.name} | Sponsors | Team Arion Racing`,
    description: sponsor.description.substring(0, 160),
  };
}

export default function SponsorDetailPage({ params }: { params: { slug: string } }) {
  const sponsor = sponsors.find((s) => s.slug === params.slug);

  if (!sponsor) {
    notFound();
  }

  // Double check the tier so people don't manually type silver/bronze slugs
  if (sponsor.tier !== "Platinum" && sponsor.tier !== "Gold") {
    // Silver and bronze don't get dedicated pages per requirements, they get modals.
    // Redirect to sponsors? Let's just 404.
    notFound(); 
  }

  return <SponsorDetailClient sponsor={sponsor} />;
}
