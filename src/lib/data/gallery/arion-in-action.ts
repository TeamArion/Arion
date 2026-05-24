import type { FeaturedMoment, VideoItem, Album, MediaItem } from "@/types/media";

// ─── Mock data services for Arion in Action page ─────────────────────
// These functions simulate database queries. Replace with Prisma calls later.
// NOTE: Local fallback assets (e.g. /images/...) should be manually converted to WebP or AVIF 
// for optimal performance, as Supabase transformations cannot process local repository files.

export function getFeaturedMoments(): FeaturedMoment[] {
  return [
    {
      id: "fm-video-1",
      title: "Arion In Action Video Highlight",
      description: "",
      imageUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/AiA/AiA-9.mp4",
      date: "2025-10-15",
      category: "Highlight",
    },
    {
      id: "fm-img-1",
      title: "FB26 Highlight",
      description: "",
      imageUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/FB26/FB-6.png",
      date: "2025-11-20",
      category: "Highlight",
    },
    {
      id: "fm-1",
      title: "First Chassis Weld Complete",
      description: "The backbone of AR-26 takes shape as the team completes the full spaceframe chassis weld — 127 joints, zero defects.",
      imageUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/AiA/AiA-8.png",
      date: "2025-08-15",
      category: "Manufacturing",
    },
    {
      id: "fm-2",
      title: "Aero Package Wind Tunnel Validated",
      description: "CFD simulations confirmed by physical testing — the undertray produces 40% more downforce than last season.",
      imageUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/AiA/AiA-3.png",
      date: "2025-10-02",
      category: "Design Review",
    },
  ];
}

export function getMediaItems(): MediaItem[] {
  return [
    {
      id: "aia-m1",
      title: "CAD Assembly Review",
      description: "Full vehicle assembly",
      mediaType: "image",
      thumbnailUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/AiA/AiA-1.png",
      mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/AiA/AiA-1.png",
      category: "CAD Design",
      season: "2025-26",
      createdAt: "2025-07-10",
    },
    {
      id: "aia-m2",
      title: "TIG Welding Session",
      description: "Chassis fabrication in the workshop",
      mediaType: "image",
      thumbnailUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/AiA/AiA-2.png",
      mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/AiA/AiA-2.png",
      category: "Manufacturing",
      season: "2025-26",
      createdAt: "2025-08-12",
    },
    {
      id: "aia-m3",
      title: "Suspension Assembly",
      description: "Double wishbone front suspension fitting",
      mediaType: "image",
      thumbnailUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/AiA/AiA-4.png",
      mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/AiA/AiA-4.png",
      category: "Assembly",
      season: "2025-26",
      createdAt: "2025-09-05",
    },
    {
      id: "aia-m4",
      title: "Workshop Timelapse",
      description: "48 hours of build compressed into 60 seconds",
      mediaType: "image",
      thumbnailUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/AiA/AiA-5.png",
      mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/AiA/AiA-5.png",
      category: "Behind The Scenes",
      season: "2025-26",
      createdAt: "2025-09-20",
    },
    {
      id: "aia-m5",
      title: "Brake System Testing",
      description: "Hydraulic brake circuit pressure testing",
      mediaType: "image",
      thumbnailUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/AiA/AiA-6.png",
      mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/AiA/AiA-6.png",
      category: "Testing",
      season: "2025-26",
      createdAt: "2025-10-15",
    },
  ];
}

