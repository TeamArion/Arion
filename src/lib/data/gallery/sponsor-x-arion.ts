import type { SponsorHighlight } from "@/types/sponsor";
import type { MediaItem, VideoItem } from "@/types/media";

// ─── Mock data services for Sponsor X Arion page ─────────────────────
// These functions simulate database queries. Replace with Prisma calls later.
// NOTE: Local fallback assets (e.g. /images/...) should be manually converted to WebP or AVIF 
// for optimal performance, as Supabase transformations cannot process local repository files.

export function getSponsorHighlights(): SponsorHighlight[] {
  return [
    {
      id: "sh-1",
      sponsorName: "Precision Engineering Co.",
      title: "CNC Machining Partnership",
      description: "Custom machined uprights, hubs, and suspension components — delivered to competition-grade tolerances.",
      imageUrl: "/images/Car_1.jpeg",
      createdAt: "2025-07-15",
    },
    {
      id: "sh-2",
      sponsorName: "Advanced Composites Ltd.",
      title: "Carbon Fibre Bodywork Supply",
      description: "Lightweight composite panels and aerodynamic components enabling significant weight reduction across the vehicle.",
      imageUrl: "/images/Car_1.jpeg",
      createdAt: "2025-08-20",
    },
    {
      id: "sh-3",
      sponsorName: "Digital Solutions Inc.",
      title: "Simulation & Analysis Software",
      description: "Industry-grade FEA and CFD tools powering the design validation pipeline for every critical component.",
      imageUrl: "/images/Car_1.jpeg",
      createdAt: "2025-09-10",
    },
    {
      id: "sh-4",
      sponsorName: "ElectroDrive Systems",
      title: "Powertrain Components",
      description: "High-performance engine control units and data acquisition systems for the combustion drivetrain.",
      imageUrl: "/images/Car_1.jpeg",
      createdAt: "2025-10-05",
    },
  ];
}

export function getInstagramPosts() {
  return [
    {
      type: "post" as const,
      mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/Sponsor_Posts/TEAM%20ARION%20X%20EXEDY%20PLATINUM.png",
      caption: "AR-26 in action at the test track. Every lap brings us closer to competition day. 🏁 #TeamArion #FormulaBharat",
      likes: 53,
      comments: 0,
    },
    {
      type: "post" as const,
      mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/Sponsor_Posts/TEAM%20ARION%20X%20ce.png",
      caption: "Behind the scenes — 48 hours of build condensed into 60 seconds. The grind never stops. ⚡ #Engineering #FSAE",
      likes: 73,
      comments: 0,
    },
    {
      type: "post" as const,
      mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/Sponsor_Posts/TEAM%20ARION%20X%20delhi.png",
      caption: "Sponsor visit day! Grateful for the incredible support from our partners. Together we build faster. 🤝 #Sponsorship",
      likes: 340,
      comments: 0,
    },
    {
      type: "post" as const,
      mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/Sponsor_Posts/TEAM%20ARION%20X%20MOTUL.png",
      caption: "Late nights in the lab. Aerodynamics team finalizing the rear wing assembly. Detail is everything. ✈️📐 #Aerodynamics #CFD #FSAE",
      likes: 105,
      comments: 0,
    },
    {
      type: "post" as const,
      mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/Sponsor_Posts/TEAM%20ARION%20X%20FLAUTA%20CUSTOMS.png",
      caption: "Suspension testing is underway! Validating our kinematics and dampers on the rig. 🏎️⚙️ #Suspension #VehicleDynamics #TeamArion",
      likes: 42,
      comments: 34,
    },
  ];
}

export function getSponsorMedia(): MediaItem[] {
  return [
    {
      id: "sp-m1",
      title: "Delhivery",
      description: "Formula Bharat 2026 Logistics Partner",
      mediaType: "image",
      thumbnailUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/Sponsor_Posts/delhi-1.png",
      mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/Sponsor_Posts/delhi-1.png",
      category: "Factory Tours",
      season: "2025-26",
      createdAt: "2025-07-20",
    },
    {
      id: "sp-m2",
      title: "KTM Safe Riding Event",
      description: "Hands-on workshop on safe riding experiences organised by KTM",
      mediaType: "image",
      thumbnailUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/Sponsor_Posts/KTM-1.png",
      mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/Sponsor_Posts/KTM-1.png",
      category: "Technical Sessions",
      season: "2025-26",
      createdAt: "2025-08-25",
    },
    {
      id: "sp-m4",
      title: "Gratitude to EXEDY",
      description: "Awards ceremony recognizing EXEDY's critical support in our journey to build the AR-25.",
      mediaType: "image",
      thumbnailUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/Sponsor_Posts/ThankuExedy_2.png",
      mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/Sponsor_Posts/ThankuExedy_2.png",
      category: "Product Deliveries",
      season: "2025-26",
      createdAt: "2025-10-10",
    },
    {
      id: "sp-m5",
      title: "Thank you, EXEDY!",
      description: "AT SUPRA 2025",
      mediaType: "image",
      thumbnailUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/Sponsor_Posts/ThankuExedy.png",
      mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/Sponsor_Posts/ThankuExedy.png",
      category: "Partnership Meetings",
      season: "2025-26",
      createdAt: "2025-11-05",
    },
  ];
}

/** Returns dynamically-generated category list from sponsor media */
export function getSponsorCategories(): string[] {
  const media = getSponsorMedia();
  return Array.from(new Set(media.map((item) => item.category)));
}

export function getSponsorVideos(): VideoItem[] {
  return [
    {
      id: "sp-v1",
      title: "Thank you, EXEDY!",
      description: "A deep dive into our partnerships with EXEDY Clutches, showcasing the critical role they have played in our journey to build the AR-26. From precision machined components to unwavering support, this video celebrates the collaboration that fuels our pursuit of excellence on the track.",
      thumbnailUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/Sponsor_Posts/ThankuExedy_2.png",
      videoUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/Sponsor_Posts/TA%20x%20EXEDY.mp4",
      duration: "4:15",
      category: "Factory Tour",
      isFeatured: true,
    },
    {
      id: "sp-v3",
      title: "AR-25 Showcase Reel",
      description: "Highlights the aesthetics and the final build of the AR-25, our 2025 season car.",
      thumbnailUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/AiA/Car_1.png",
      videoUrl: "/videos/car_video.mp4",
      duration: "3:10",
      category: "Event",
    },
  ];
}
