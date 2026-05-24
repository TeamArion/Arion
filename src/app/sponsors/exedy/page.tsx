import { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import SponsorShowcasePage from "@/components/sponsors/SponsorShowcasePage";
import { sponsorShowcaseData } from "@/lib/data/sponsors/showcase";

async function getExedyShowcase() {
  try {
    const { data } = await supabase
      .from("sponsors")
      .select("*")
      .ilike("name", "EXEDY")
      .single();

    if (data) {
      return {
        sponsor: {
          name: data.name,
          slug: "exedy",
          logo: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/Sponsor_Logo/Exedy.svg",
          tier: "Platinum" as const,
          description: data.description || "EXEDY Corporation is a global leader in automotive drivetrain systems, operating across 25+ countries with a strong focus on quality, innovation, and engineering excellence. Alongside delivering high-performance mobility solutions, EXEDY also supports the development of future engineering talent through practical learning initiatives. As our Platinum Sponsor, EXEDY played a key role in our success at SAEINDIA SUPRA 2025 and Formula Bharat 2026, helping us improve vehicle reliability, on-track performance, and overall competitiveness.",
          website: data.website_url || "https://www.exedy.com",
          instagram: data.instagram_url || "https://www.instagram.com/exaborea",
          linkedin: "#",
        },
        logoImage: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/Sponsor_Logo/Exedy.svg",
        instagramPostUrl: data.instagram_url || "https://www.instagram.com/p/DJkGIpWy7Mq/",
        instagramPosts: [
          {
            type: 'post' as const,
            mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/Sponsor_Posts/ThankuExedy.png", // ADD MEDIA URL FOR POST 1 HERE
            caption: "EXEDY × Team Arion Racing - Part 1", // ADD CAPTION FOR POST 1 HERE
            likes: 154, // ADD LIKES FOR POST 1 HERE
            comments: 12, // ADD COMMENTS FOR POST 1 HERE
          },
          {
            type: 'reel' as const,
            mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/Sponsor_Posts/TA%20x%20EXEDY.mp4", // ADD MEDIA URL FOR POST 2 HERE
            caption: "EXEDY × Team Arion Racing - Part 2", // ADD CAPTION FOR POST 2 HERE
            likes: 200, // ADD LIKES FOR POST 2 HERE
            comments: 15, // ADD COMMENTS FOR POST 2 HERE
          },
          {
            type: 'post' as const,
            mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/Sponsor_Posts/TEAM%20ARION%20X%20EXEDY%20PLATINUM.png", // ADD MEDIA URL FOR POST 3 HERE
            caption: "EXEDY × Team Arion Racing - Factory Visit 2025", // ADD CAPTION FOR POST 3 HERE
            likes: 180, // ADD LIKES FOR POST 3 HERE
            comments: 10, // ADD COMMENTS FOR POST 3 HERE
          },
          {
            type: 'reel' as const,
            mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/AiA/AiA-9.mp4",
            caption: "Arion In Action Highlight",
            likes: 245,
            comments: 18,
          }
        ],
        recognitionMessage: data.recognition_message || "Team Arion Racing extends its deepest gratitude to EXEDY Corporation for their unwavering support as our Platinum Sponsor. Their commitment to engineering excellence and passion for nurturing future talent has been instrumental in shaping our journey through Formula Student competitions. Together, we push the boundaries of performance, innovation, and speed.",
        websiteUrl: data.website_url,
        hideCircularFrame: true,
        hideName: true,
        enlargeLogo: true,
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
