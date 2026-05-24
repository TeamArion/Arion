import type { FormulaBharatStats, TimelineEvent, CompetitionUpdate } from "@/types/formula-bharat";
import type { MediaItem, VideoItem } from "@/types/media";

// ─── Mock data services for Formula Bharat page ──────────────────────
// These functions simulate database queries. Replace with Prisma calls later.
// NOTE: Local fallback assets (e.g. /images/...) should be manually converted to WebP or AVIF 
// for optimal performance, as Supabase transformations cannot process local repository files.

export function getCompetitionStats(): FormulaBharatStats {
  return {
    overallRank: 12,
    designScore: 118,
    costScore: 72,
    businessScore: 65,
    enduranceScore: 175,
    autocrossScore: 88,
    vehicleNumber: "AR-26",
    totalTeams: 80,
    season: "2025-26",
  };
}


export function getCompetitionUpdates(): CompetitionUpdate[] {
  return [
    {
      id: "cu-1",
      title: "Scrutineering Passed — First Attempt",
      description: "AR-26 clears all technical inspections on the first attempt — mechanical, electrical, rain test, and tilt test all passed.",
      date: "2026-01-15",
      category: "Milestone",
      imageUrl: "/images/Car_1.jpeg",
    },
    {
      id: "cu-2",
      title: "Design Event — Strong Performance",
      description: "Judges commended the innovative cooling system design and the lightweight composite bodywork approach.",
      date: "2026-01-16",
      category: "Event Result",
      imageUrl: "/images/Car_1.jpeg",
    },
    {
      id: "cu-3",
      title: "Autocross — Personal Best Lap",
      description: "Driver set a personal best lap time of 58.2s on the autocross circuit, placing in the top 15 overall.",
      date: "2026-01-18",
      category: "Event Result",
      imageUrl: "/images/Car_1.jpeg",
    },
  ];
}

export function getCompetitionMedia(): MediaItem[] {
  return [
    {
      id: "fb-m1",
      title: "Scrutineering Bay",
      description: "AR-26 during technical inspection",
      mediaType: "image",
      thumbnailUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/FB26/FB-1.png",
      mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/FB26/FB-1.png",
      category: "Static Events",
      season: "2025-26",
      createdAt: "2026-01-15",
    },
    {
      id: "fb-m2",
      title: "Design Presentation",
      description: "Team presenting to the design judges",
      mediaType: "image",
      thumbnailUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/FB26/FB-2.png",
      mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/FB26/FB-2.png",
      category: "Static Events",
      season: "2025-26",
      createdAt: "2026-01-16",
    },
    {
      id: "fb-m3",
      title: "Autocross Run",
      description: "Hot lap during the autocross event",
      mediaType: "image",
      thumbnailUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/FB26/FB-3.png",
      mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/FB26/FB-3.png",
      category: "Dynamic Events",
      season: "2025-26",
      createdAt: "2026-01-18",
    },
    {
      id: "fb-m4",
      title: "Pit Area Setup",
      description: "Team working in the paddock",
      mediaType: "image",
      thumbnailUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/FB26/FB-4.png",
      mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/FB26/FB-4.png",
      category: "Pit Area",
      season: "2025-26",
      createdAt: "2026-01-15",
    },
    {
      id: "fb-m5",
      title: "Team Photo",
      description: "Full team at the competition venue",
      mediaType: "image",
      thumbnailUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/FB26/FB-5.png",
      mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/FB26/FB-5.png",
      category: "Team",
      season: "2025-26",
      createdAt: "2026-01-20",
    },
    {
      id: "fb-m6",
      title: "Endurance Run",
      description: "AR-26 on the endurance circuit",
      mediaType: "image",
      thumbnailUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/FB26/FB-6.png",
      mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/FB26/FB-6.png",
      category: "Endurance",
      season: "2025-26",
      createdAt: "2026-01-19",
    },
  ];
}

export function getCompetitionVideos(): VideoItem[] {
  return [
    {
      id: "fb-v1",
      title: "Day-2: Full Recap",
      description: "Day-2 Highlights",
      thumbnailUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/FB26/day2.png",
      videoUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/FB26/Day2.mp4",
      duration: "5:12",
      category: "Recap",
      isFeatured: true,
    },
    {
      id: "fb-v2",
      title: "Day-3: Full Recap",
      description: "Day-3 Highlights",
      thumbnailUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/FB26/Day3.png",
      videoUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/FB26/Day3.mp4",
      duration: "1:02",
      category: "Dynamic Events",
    },
    {
      id: "fb-v3",
      title: "Day-4: Full Recap",
      description: "Day-4 Highlights",
      thumbnailUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/FB26/Day4.png",
      videoUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/FB26/Day4.mp4",
      duration: "3:28",
      category: "Endurance",
    },

    {
      id: "fb-v4",
      title: "Day-5: Full Recap",
      description: "Day-5 Highlights",
      thumbnailUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/FB26/Day5.png",
      videoUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/FB26/Day5.mp4",
      duration: "3:28",
      category: "Endurance",
    },
  ];
}

/** Returns dynamically-generated category list from media items */
export function getCompetitionCategories(): string[] {
  const media = getCompetitionMedia();
  return Array.from(new Set(media.map((item) => item.category)));
}

export function getCompetitionInstagramPosts() {
  return [
    {
      type: "reel" as const,
      mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/FB26/Day0.mp4",
      caption: "Day 0 at Formula Bharat! The AR25 has officially cleared the Noise Test and Tilt Test on the first try. Standard inspection passed with flying colors! 🏎️💨 #FormulaBharat #TeamArion #AR25 #Scrutineering",
      likes: 480,
      comments: 25,
    },
    {
      type: "reel" as const,
      mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/FB26/Day1.mp4",
      caption: "Day 1 Updates: Static Events! We are thrilled to announce that Team Arion has secured Bplan Rank 3 at Formula Bharat 2026. Proud of the business presentation team for an outstanding pitch! 🏆📊 #Bplan #FSAE #TeamArion #AR25",
      likes: 520,
      comments: 18,
    },
    {
      type: "reel" as const,
      mediaUrl: "https://kgvzyvkoafffsqwnqscl.supabase.co/storage/v1/object/public/Media/gallery/FB26/FB-vid-1.MOV",
      caption: "Day 3 & Final Results: Endurance: CLEARED! 🏁 The AR25 crossed the line after a grueling 22km run. With all events combined, Team Arion achieves Overall Rank 11. What an incredible journey! ⚡🏆 #Endurance #OverallStandings #FormulaBharat #Racing",
      likes: 1105,
      comments: 74,
    },
  ];
}

