import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import SponsorDetailClient from "@/app/sponsors/[slug]/SponsorDetailClient";
import { Metadata } from "next";
import { sponsors as fallbackSponsors } from "@/lib/data/sponsors";

const getSlug = (name: string) => name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  try {
    const { data: sponsors } = await supabase
      .from("sponsors")
      .select("*")
      .order("display_order", { ascending: true });

    let sponsor;
    if (sponsors && sponsors.length > 0) {
      const dbSponsor = sponsors.find((s: any) => getSlug(s.name) === slug);
      if (dbSponsor) {
        sponsor = {
          name: dbSponsor.name,
          slug: getSlug(dbSponsor.name),
          logo: dbSponsor.logo_url,
          tier: dbSponsor.tier === "TITLE" ? "Platinum" : "Gold",
          description: dbSponsor.description || "",
        };
      }
    }

    if (!sponsor) {
      sponsor = fallbackSponsors.find((s) => s.slug === slug);
    }

    if (!sponsor || sponsor.tier !== "Platinum") {
      return {
        title: "Sponsor Not Found",
      };
    }

    return {
      title: `${sponsor.name} | Sponsors | Team Arion Racing`,
      description: sponsor.description?.substring(0, 160) ?? "",
    };
  } catch (err) {
    const sponsor = fallbackSponsors.find((s) => s.slug === slug);
    if (!sponsor || sponsor.tier !== "Platinum") {
      return { title: "Sponsor Not Found" };
    }
    return {
      title: `${sponsor.name} | Sponsors | Team Arion Racing`,
      description: sponsor.description?.substring(0, 160) ?? "",
    };
  }
}

export default async function SponsorDetailPage({ params }: { params: any }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  let sponsor;

  try {
    const { data: sponsors } = await supabase
      .from("sponsors")
      .select("*")
      .order("display_order", { ascending: true });

    if (sponsors && sponsors.length > 0) {
      const dbSponsor = sponsors.find((s: any) => getSlug(s.name) === slug);
      if (dbSponsor) {
        sponsor = {
          name: dbSponsor.name,
          slug: getSlug(dbSponsor.name),
          logo: dbSponsor.logo_url,
          tier: (dbSponsor.tier === "TITLE" ? "Platinum" : (dbSponsor.tier.charAt(0) + dbSponsor.tier.slice(1).toLowerCase())) as any,
          description: dbSponsor.description || "Driving the future of motorsport with Team Arion Racing.",
          website: dbSponsor.website_url || "#",
          instagram: dbSponsor.instagram_url || "#",
          linkedin: dbSponsor.linkedin_url || "#",
        };
      }
    }
  } catch (err) {
    console.error("Error in SponsorDetailPage fetch:", err);
  }

  if (!sponsor) {
    sponsor = fallbackSponsors.find((s) => s.slug === slug);
  }

  if (!sponsor) {
    notFound();
  }

  if (sponsor.tier !== "Platinum") {
    notFound();
  }

  return <SponsorDetailClient sponsor={sponsor} />;
}
