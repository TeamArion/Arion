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
  /** Array of Instagram posts to display */
  instagramPosts?: {
    type: 'post' | 'reel';
    mediaUrl: string;
    caption: string;
    likes: number;
    comments: number;
  }[];
  /** Custom recognition / thank-you message */
  recognitionMessage: string;
  /** Sponsor's official website URL */
  websiteUrl?: string;
  /** Hide the circular background frame for the logo */
  hideCircularFrame?: boolean;
  /** Hide the sponsor name text below the logo */
  hideName?: boolean;
  /** Enlarge the logo container significantly */
  enlargeLogo?: boolean;
}

export const sponsorShowcaseData: Record<string, SponsorShowcase> = {
  exedy: {
    sponsor: {
      name: "EXEDY",
      slug: "exedy",
      logo: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/Sponsor_Logo/Exedy.svg",
      tier: "Platinum",
      description:
        "EXEDY Corporation is a global leader in automotive drivetrain systems, operating across 25+ countries with a strong focus on quality, innovation, and engineering excellence. Alongside delivering high-performance mobility solutions, EXEDY also supports the development of future engineering talent through practical learning initiatives. As our Platinum Sponsor, EXEDY played a key role in our success at SAEINDIA SUPRA 2025 and Formula Bharat 2026, helping us improve vehicle reliability, on-track performance, and overall competitiveness.",
      website: "https://www.exedy.com",
      instagram: "https://www.instagram.com/exaborea",
      linkedin: "#",
    },
    logoImage: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/Sponsor_Logo/Exedy.svg",
    instagramPostUrl: "https://www.instagram.com/p/DJkGIpWy7Mq/",
    instagramPosts: [
      {
        type: 'post',
        mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/Sponsor_Posts/ThankuExedy.png",
        caption: "EXEDY × Team Arion Racing - Part 1",
        likes: 154,
        comments: 12,
      },
      {
        type: 'reel',
        mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/Sponsor_Posts/TA%20x%20EXEDY.mp4",
        caption: "EXEDY × Team Arion Racing - Part 2",
        likes: 200,
        comments: 15,
      },
      {
        type: 'post',
        mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/Sponsor_Posts/TEAM%20ARION%20X%20EXEDY%20PLATINUM.png",
        caption: "EXEDY × Team Arion Racing - Factory Visit 2025",
        likes: 180,
        comments: 10,
      },
      {
        type: 'reel',
        mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/AiA/AiA-9.mp4",
        caption: "Arion In Action Highlight",
        likes: 245,
        comments: 18,
      }
    ],
    recognitionMessage:
      "Team Arion Racing extends its deepest gratitude to EXEDY Corporation for their unwavering support as our Platinum Sponsor. Their commitment to engineering excellence and passion for nurturing future talent has been instrumental in shaping our journey through Formula Student competitions. Together, we push the boundaries of performance, innovation, and speed.",
    websiteUrl: "https://www.exedy.com",
    hideCircularFrame: true,
    hideName: true,
    enlargeLogo: true,
  },
};
