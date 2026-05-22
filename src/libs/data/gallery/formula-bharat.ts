import type { FormulaBharatStats, TimelineEvent, CompetitionUpdate } from "@/types/formula-bharat";
import type { MediaItem, VideoItem } from "@/types/media";

// ─── Mock data services for Formula Bharat page ──────────────────────
// These functions simulate database queries. Replace with Prisma calls later.

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

export function getTimeline(): TimelineEvent[] {
  return [
    {
      id: "tl-1",
      title: "Registration & Documentation",
      description: "Team registration, SES submission, and initial documentation for Formula Bharat 2026.",
      date: "2025-09-01",
      status: "completed",
      iconType: "registration",
    },
    {
      id: "tl-2",
      title: "Technical Inspection",
      description: "Vehicle scrutineering — mechanical, electrical, and safety systems compliance check.",
      date: "2026-01-15",
      status: "completed",
      iconType: "inspection",
    },
    {
      id: "tl-3",
      title: "Design Event",
      description: "Detailed design presentation to the judges panel covering vehicle architecture and engineering rationale.",
      date: "2026-01-16",
      status: "completed",
      iconType: "design",
    },
    {
      id: "tl-4",
      title: "Cost & Manufacturing Event",
      description: "Full BOM presentation, cost analysis, and manufacturing process review.",
      date: "2026-01-17",
      status: "completed",
      iconType: "cost",
    },
    {
      id: "tl-5",
      title: "Business Presentation",
      description: "Business plan and market strategy presentation to the judging panel.",
      date: "2026-01-17",
      status: "completed",
      iconType: "business",
    },
    {
      id: "tl-6",
      title: "Autocross & Skidpad",
      description: "Dynamic handling events — timed autocross laps and skidpad cornering evaluation.",
      date: "2026-01-18",
      status: "completed",
      iconType: "dynamic",
    },
    {
      id: "tl-7",
      title: "Endurance & Efficiency",
      description: "22 km endurance run testing vehicle reliability, driver performance, and energy efficiency.",
      date: "2026-01-19",
      status: "active",
      iconType: "endurance",
    },
    {
      id: "tl-8",
      title: "Final Results & Awards",
      description: "Overall standings announcement and award ceremony.",
      date: "2026-01-20",
      status: "upcoming",
      iconType: "results",
    },
  ];
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
      thumbnailUrl: "/images/Car_1.jpeg",
      mediaUrl: "/images/Car_1.jpeg",
      category: "Static Events",
      season: "2025-26",
      createdAt: "2026-01-15",
    },
    {
      id: "fb-m2",
      title: "Design Presentation",
      description: "Team presenting to the design judges",
      mediaType: "image",
      thumbnailUrl: "/images/Car_1.jpeg",
      mediaUrl: "/images/Car_1.jpeg",
      category: "Static Events",
      season: "2025-26",
      createdAt: "2026-01-16",
    },
    {
      id: "fb-m3",
      title: "Autocross Run",
      description: "Hot lap during the autocross event",
      mediaType: "video",
      thumbnailUrl: "/images/Car_1.jpeg",
      mediaUrl: "/videos/car_video.mp4",
      category: "Dynamic Events",
      season: "2025-26",
      createdAt: "2026-01-18",
    },
    {
      id: "fb-m4",
      title: "Pit Area Setup",
      description: "Team working in the paddock",
      mediaType: "image",
      thumbnailUrl: "/images/Car_1.jpeg",
      mediaUrl: "/images/Car_1.jpeg",
      category: "Pit Area",
      season: "2025-26",
      createdAt: "2026-01-15",
    },
    {
      id: "fb-m5",
      title: "Team Photo",
      description: "Full team at the competition venue",
      mediaType: "image",
      thumbnailUrl: "/images/Car_1.jpeg",
      mediaUrl: "/images/Car_1.jpeg",
      category: "Team",
      season: "2025-26",
      createdAt: "2026-01-20",
    },
    {
      id: "fb-m6",
      title: "Endurance Run",
      description: "AR-26 on the endurance circuit",
      mediaType: "video",
      thumbnailUrl: "/images/Car_1.jpeg",
      mediaUrl: "/videos/car_video.mp4",
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
      title: "Formula Bharat 2026 — Full Recap",
      description: "Competition highlights from registration to the final results ceremony.",
      thumbnailUrl: "/images/Car_1.jpeg",
      videoUrl: "/videos/car_video.mp4",
      duration: "5:12",
      category: "Recap",
      isFeatured: true,
    },
    {
      id: "fb-v2",
      title: "Autocross Onboard",
      description: "Driver POV during the autocross hot lap.",
      thumbnailUrl: "/images/Car_1.jpeg",
      videoUrl: "/videos/car_video.mp4",
      duration: "1:02",
      category: "Dynamic Events",
    },
    {
      id: "fb-v3",
      title: "Endurance Highlights",
      description: "Key moments from the 22km endurance run.",
      thumbnailUrl: "/images/Car_1.jpeg",
      videoUrl: "/videos/car_video.mp4",
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
      type: "post" as const,
      mediaUrl: "/images/Car_1.jpeg",
      caption: "Day 1 at Formula Bharat! The AR25 has officially cleared the Noise Test and Tilt Test on the first try. Standard inspection passed with flying colors! 🏎️💨 #FormulaBharat #TeamArion #AR25 #Scrutineering",
      likes: 480,
      comments: 25,
    },
    {
      type: "post" as const,
      mediaUrl: "/images/Car_1.jpeg",
      caption: "Day 2 Updates: Static Events! We are thrilled to announce that Team Arion has secured Bplan Rank 3 at Formula Bharat 2026. Proud of the business presentation team for an outstanding pitch! 🏆📊 #Bplan #FSAE #TeamArion #AR25",
      likes: 520,
      comments: 18,
    },
    {
      type: "reel" as const,
      mediaUrl: "/videos/car_video.mp4",
      caption: "Day 3 & Final Results: Endurance: CLEARED! 🏁 The AR25 crossed the line after a grueling 22km run. With all events combined, Team Arion achieves Overall Rank 11. What an incredible journey! ⚡🏆 #Endurance #OverallStandings #FormulaBharat #Racing",
      likes: 1105,
      comments: 74,
    },
  ];
}

