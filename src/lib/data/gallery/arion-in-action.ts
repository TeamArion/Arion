import type { FeaturedMoment, VideoItem, Album, MediaItem } from "@/types/media";

// ─── Mock data services for Arion in Action page ─────────────────────
// These functions simulate database queries. Replace with Prisma calls later.

export function getFeaturedMoments(): FeaturedMoment[] {
  return [
    {
      id: "fm-1",
      title: "First Chassis Weld Complete",
      description: "The backbone of AR-26 takes shape as the team completes the full spaceframe chassis weld — 127 joints, zero defects.",
      imageUrl: "/images/Car_1.jpeg",
      date: "2025-08-15",
      category: "Manufacturing",
    },
    {
      id: "fm-2",
      title: "Aero Package Wind Tunnel Validated",
      description: "CFD simulations confirmed by physical testing — the undertray produces 40% more downforce than last season.",
      imageUrl: "/images/Car_1.jpeg",
      date: "2025-10-02",
      category: "Design Review",
    },
    {
      id: "fm-3",
      title: "First Shakedown Run",
      description: "AR-26 hits the tarmac for the first time. All systems nominal — powertrain, suspension, and electronics performing as designed.",
      imageUrl: "/images/Car_1.jpeg",
      date: "2025-12-20",
      category: "Testing",
    },
    {
      id: "fm-4",
      title: "Driver Training Programme",
      description: "Intensive driver development sessions at the test track — refining lap times and building race-day confidence.",
      imageUrl: "/images/Car_1.jpeg",
      date: "2026-01-10",
      category: "Driver Practice",
    },
  ];
}

export function getMediaItems(): MediaItem[] {
  return [
    {
      id: "aia-m1",
      title: "CAD Assembly Review",
      description: "Full vehicle assembly in SolidWorks",
      mediaType: "image",
      thumbnailUrl: "/images/Car_1.jpeg",
      mediaUrl: "/images/Car_1.jpeg",
      category: "CAD Design",
      season: "2025-26",
      createdAt: "2025-07-10",
    },
    {
      id: "aia-m2",
      title: "TIG Welding Session",
      description: "Chassis fabrication in the workshop",
      mediaType: "image",
      thumbnailUrl: "/images/Car_1.jpeg",
      mediaUrl: "/images/Car_1.jpeg",
      category: "Manufacturing",
      season: "2025-26",
      createdAt: "2025-08-12",
    },
    {
      id: "aia-m3",
      title: "Suspension Assembly",
      description: "Double wishbone front suspension fitting",
      mediaType: "image",
      thumbnailUrl: "/images/Car_1.jpeg",
      mediaUrl: "/images/Car_1.jpeg",
      category: "Assembly",
      season: "2025-26",
      createdAt: "2025-09-05",
    },
    {
      id: "aia-m4",
      title: "Workshop Timelapse",
      description: "48 hours of build compressed into 60 seconds",
      mediaType: "video",
      thumbnailUrl: "/images/Car_1.jpeg",
      mediaUrl: "/videos/car_video.mp4",
      category: "Behind The Scenes",
      season: "2025-26",
      createdAt: "2025-09-20",
    },
    {
      id: "aia-m5",
      title: "Brake System Testing",
      description: "Hydraulic brake circuit pressure testing",
      mediaType: "image",
      thumbnailUrl: "/images/Car_1.jpeg",
      mediaUrl: "/images/Car_1.jpeg",
      category: "Testing",
      season: "2025-26",
      createdAt: "2025-10-15",
    },
    {
      id: "aia-m6",
      title: "Team Workshop Day",
      description: "Cross-functional build session",
      mediaType: "image",
      thumbnailUrl: "/images/Car_1.jpeg",
      mediaUrl: "/images/Car_1.jpeg",
      category: "Team Activities",
      season: "2025-26",
      createdAt: "2025-11-01",
    },
  ];
}

export function getVideoHighlights(): VideoItem[] {
  return [
    {
      id: "aia-v1",
      title: "AR-26 Build Documentary",
      description: "The complete journey from concept to competition — an inside look at 14 months of engineering.",
      thumbnailUrl: "/images/Car_1.jpeg",
      videoUrl: "/videos/car_video.mp4",
      duration: "4:32",
      category: "Documentary",
      isFeatured: true,
    },
    {
      id: "aia-v2",
      title: "Shakedown Day Highlights",
      description: "First drive of the AR-26 at the test circuit.",
      thumbnailUrl: "/images/Car_1.jpeg",
      videoUrl: "/videos/car_video.mp4",
      duration: "2:15",
      category: "Testing",
    },
    {
      id: "aia-v3",
      title: "Manufacturing Montage",
      description: "CNC machining, welding, and fabrication highlights.",
      thumbnailUrl: "/images/Car_1.jpeg",
      videoUrl: "/videos/car_video.mp4",
      duration: "1:48",
      category: "Manufacturing",
    },
  ];
}

export function getAlbums(): Album[] {
  return [
    {
      id: "alb-1",
      name: "Season 2025–26",
      season: "2025-26",
      coverImageUrl: "/images/Car_1.jpeg",
      mediaCount: 48,
      description: "The complete AR-26 journey",
      createdAt: "2025-06-01",
    },
    {
      id: "alb-2",
      name: "Season 2024–25",
      season: "2024-25",
      coverImageUrl: "/images/Car_1.jpeg",
      mediaCount: 35,
      description: "AR-25 development and competition",
      createdAt: "2024-06-01",
    },
    {
      id: "alb-3",
      name: "Season 2023–24",
      season: "2023-24",
      coverImageUrl: "/images/Car_1.jpeg",
      mediaCount: 22,
      description: "Where it all began",
      createdAt: "2023-06-01",
    },
  ];
}
