import { Sponsor } from "./types";

/**
 * Extended sponsor data for dedicated showcase pages.
 * Each entry drives the reusable SponsorShowcasePage template.
 * To add a new sponsor showcase, simply add a new entry to the
 * `sponsorShowcaseData` map keyed by the sponsor's slug.
 */
export interface SponsorShowcase {
  /** Base sponsor record (from the main sponsors list) */
  sponsor: Sponsor;
  /** URL to the sponsor's logo image for the hero section */
  logoImage: string;
  /** Instagram embed post URL (full post permalink) */
  instagramPostUrl?: string;
  /** Custom recognition / thank-you message */
  recognitionMessage: string;
  /** Sponsor's official website URL */
  websiteUrl?: string;
}

export const sponsorShowcaseData: Record<string, SponsorShowcase> = {
  exedy: {
    sponsor: {
      name: "EXEDY",
      slug: "exedy",
      logo: "/images/plat_logo.png",
      tier: "Platinum",
      description:
        "EXEDY Corporation is a global leader in automotive drivetrain systems, operating across 25+ countries with a strong focus on quality, innovation, and engineering excellence. Alongside delivering high-performance mobility solutions, EXEDY also supports the development of future engineering talent through practical learning initiatives. As our Platinum Sponsor, EXEDY played a key role in our success at SAEINDIA SUPRA 2025 and Formula Bharat 2026, helping us improve vehicle reliability, on-track performance, and overall competitiveness.",
      website: "https://www.exedy.com",
      instagram: "https://www.instagram.com/exaborea",
      linkedin: "#",
    },
    logoImage: "/images/plat_logo.png",
    instagramPostUrl: "https://www.instagram.com/p/DJkGIpWy7Mq/",
    recognitionMessage:
      "Team Arion Racing extends its deepest gratitude to EXEDY Corporation for their unwavering support as our Platinum Sponsor. Their commitment to engineering excellence and passion for nurturing future talent has been instrumental in shaping our journey through Formula Student competitions. Together, we push the boundaries of performance, innovation, and speed.",
    websiteUrl: "https://www.exedy.com",
  },
};
