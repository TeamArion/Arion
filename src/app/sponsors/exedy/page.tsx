import { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import SponsorShowcasePage from "@/components/sponsors/SponsorShowcasePage";
import { sponsorShowcaseData } from "@/lib/data/sponsors/showcase";

async function getExedyShowcase() {
  try {
    const { data, error } = await supabase
      .from("sponsors")
      .select("*")
      .ilike("name", "EXEDY")
      .single();

    if (data) {
      return {
        sponsor: {
          name: data.name,
          slug: "exedy",
          logo: data.logo_url,
          tier: "Platinum" as const,
          description: data.description || "EXEDY Corporation is a global leader in automotive drivetrain systems, operating across 25+ countries with a strong focus on quality, innovation, and engineering excellence. Alongside delivering high-performance mobility solutions, EXEDY also supports the development of future engineering talent through practical learning initiatives. As our Platinum Sponsor, EXEDY played a key role in our success at SAEINDIA SUPRA 2025 and Formula Bharat 2026, helping us improve vehicle reliability, on-track performance, and overall competitiveness.",
          website: data.website_url || "https://www.exedy.com",
          instagram: data.instagram_url || "https://www.instagram.com/exaborea",
          linkedin: "#",
        },
        logoImage: data.logo_url,
        instagramPostUrl: data.instagram_url || "https://www.instagram.com/p/DJkGIpWy7Mq/",
        recognitionMessage: data.recognition_message || "Team Arion Racing extends its deepest gratitude to EXEDY Corporation for their unwavering support as our Platinum Sponsor. Their commitment to engineering excellence and passion for nurturing future talent has been instrumental in shaping our journey through Formula Student competitions. Together, we push the boundaries of performance, innovation, and speed.",
        websiteUrl: data.website_url,
      };
    }
  } catch (err) {
    console.error("Error loading EXEDY showcase:", err);
  }
  return sponsorShowcaseData["exedy"];
}

export async function generateMetadata(): Promise<Metadata> {
  const showcaseData = await getExedyShowcase();
  return {
    title: `${showcaseData?.sponsor.name ?? "EXEDY"} | Platinum Sponsor | Team Arion Racing`,
    description:
      showcaseData?.sponsor.description?.substring(0, 160) ??
      "Platinum sponsor showcase for Team Arion Racing.",
  };
}

export default async function ExedyPage() {
  const showcaseData = await getExedyShowcase();

  if (!showcaseData) {
    notFound();
  }

  return <SponsorShowcasePage data={showcaseData} />;
}
