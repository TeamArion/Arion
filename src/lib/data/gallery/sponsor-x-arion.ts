import type { SponsorHighlight } from "@/types/sponsor";
import type { MediaItem, VideoItem } from "@/types/media";

// ─── Mock data services for Sponsor X Arion page ─────────────────────
// These functions simulate database queries. Replace with Prisma calls later.

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
      description: "High-performance motor controllers and battery management systems for the electric drivetrain.",
      imageUrl: "/images/Car_1.jpeg",
      createdAt: "2025-10-05",
    },
  ];
}

export function getInstagramPosts() {
  return [
    {
      type: "post" as const,
      mediaUrl: "/images/Car_1.jpeg",
      caption: "AR-26 in action at the test track. Every lap brings us closer to competition day. 🏁 #TeamArion #FormulaBharat",
      likes: 342,
      comments: 28,
    },
    {
      type: "reel" as const,
      mediaUrl: "/videos/car_video.mp4",
      caption: "Behind the scenes — 48 hours of build condensed into 60 seconds. The grind never stops. ⚡ #Engineering #FSAE",
      likes: 1205,
      comments: 96,
    },
    {
      type: "post" as const,
      mediaUrl: "/images/Car_1.jpeg",
      caption: "Sponsor visit day! Grateful for the incredible support from our partners. Together we build faster. 🤝 #Sponsorship",
      likes: 518,
      comments: 45,
    },
    {
      type: "post" as const,
      mediaUrl: "/images/Car_1.jpeg",
      caption: "Late nights in the lab. Aerodynamics team finalizing the rear wing assembly. Detail is everything. ✈️📐 #Aerodynamics #CFD #FSAE",
      likes: 421,
      comments: 18,
    },
    {
      type: "post" as const,
      mediaUrl: "/images/Car_1.jpeg",
      caption: "Suspension testing is underway! Validating our kinematics and dampers on the rig. 🏎️⚙️ #Suspension #VehicleDynamics #TeamArion",
      likes: 689,
      comments: 34,
    },
  ];
}

export function getSponsorMedia(): MediaItem[] {
  return [
    {
      id: "sp-m1",
      title: "Factory Tour — CNC Workshop",
      description: "Team visit to the precision machining facility",
      mediaType: "image",
      thumbnailUrl: "/images/Car_1.jpeg",
      mediaUrl: "/images/Car_1.jpeg",
      category: "Factory Tours",
      season: "2025-26",
      createdAt: "2025-07-20",
    },
    {
      id: "sp-m2",
      title: "Technical Session — Composites",
      description: "Hands-on workshop on carbon fibre layup techniques",
      mediaType: "image",
      thumbnailUrl: "/images/Car_1.jpeg",
      mediaUrl: "/images/Car_1.jpeg",
      category: "Technical Sessions",
      season: "2025-26",
      createdAt: "2025-08-25",
    },
    {
      id: "sp-m3",
      title: "Sponsor Visit Day",
      description: "Partners tour the workshop and see AR-26 in person",
      mediaType: "image",
      thumbnailUrl: "/images/Car_1.jpeg",
      mediaUrl: "/images/Car_1.jpeg",
      category: "Sponsor Visits",
      season: "2025-26",
      createdAt: "2025-09-15",
    },
    {
      id: "sp-m4",
      title: "Product Delivery — Motors",
      description: "Unboxing the new high-performance electric motors",
      mediaType: "image",
      thumbnailUrl: "/images/Car_1.jpeg",
      mediaUrl: "/images/Car_1.jpeg",
      category: "Product Deliveries",
      season: "2025-26",
      createdAt: "2025-10-10",
    },
    {
      id: "sp-m5",
      title: "Partnership Signing",
      description: "MOU signing ceremony with key industry partner",
      mediaType: "image",
      thumbnailUrl: "/images/Car_1.jpeg",
      mediaUrl: "/images/Car_1.jpeg",
      category: "Partnership Meetings",
      season: "2025-26",
      createdAt: "2025-11-05",
    },
    {
      id: "sp-m6",
      title: "Sponsor Event Recap",
      description: "Highlights from the annual sponsor appreciation event",
      mediaType: "video",
      thumbnailUrl: "/images/Car_1.jpeg",
      mediaUrl: "/videos/car_video.mp4",
      category: "Sponsor Events",
      season: "2025-26",
      createdAt: "2025-12-15",
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
      title: "CNC Workshop & Manufacturing Showcase",
      description: "A deep dive into our precision manufacturing partnership with factory walkthroughs and machining demonstrations.",
      thumbnailUrl: "/images/Car_1.jpeg",
      videoUrl: "/videos/car_video.mp4",
      duration: "4:15",
      category: "Factory Tour",
      isFeatured: true,
    },
    {
      id: "sp-v2",
      title: "Carbon Fibre Layup Session",
      description: "Highlights from our hands-on workshop learning advanced composite techniques from industry experts.",
      thumbnailUrl: "/images/Car_1.jpeg",
      videoUrl: "/videos/car_video.mp4",
      duration: "2:40",
      category: "Technical Session",
    },
    {
      id: "sp-v3",
      title: "Sponsor Appreciation Event Recap",
      description: "Highlights from our annual event thanking our sponsors for fueling the AR-26 build.",
      thumbnailUrl: "/images/Car_1.jpeg",
      videoUrl: "/videos/car_video.mp4",
      duration: "3:10",
      category: "Event",
    },
  ];
}
