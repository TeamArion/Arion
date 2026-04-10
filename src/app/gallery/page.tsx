"use client";

import InteractiveBentoGallery from "@/components/PhotoGrid";
import GalleryHero from "@/components/gallery/GalleryHero";
import SectionHeader from "@/components/gallery/SectionHeader";
import GalleryNavigation from "@/components/gallery/GalleryNavigation";

export default function GalleryPage() {
  const mediaItems = [
    {
      id: 1,
      type: "video",
      title: "Endurance Reel",
      desc: "Sponsor visibility during endurance",
      url: "/videos/car_video.mp4",
      span: "md:col-span-3 md:row-span-3 col-span-2",
    },
    {
      id: 2,
      type: "image",
      title: "Grid Lineup",
      desc: "Race lineup moment",
      url: "/images/Car_1.jpeg",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      id: 3,
      type: "video",
      title: "Pit Action",
      desc: "Team in action",
      url: "/videos/car_video.mp4",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      id: 4,
      type: "image",
      title: "Aero Detail",
      desc: "Engineering focus",
      url: "/images/Car_1.jpeg",
      span: "md:col-span-1 md:row-span-3",
    },
    {
      id: 5,
      type: "image",
      title: "Team Moment",
      desc: "Crew performance",
      url: "/images/Car_1.jpeg",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      id: 6,
      type: "video",
      title: "Track Run",
      desc: "High speed testing",
      url: "/videos/car_video.mp4",
      span: "md:col-span-2 md:row-span-2",
    },
  ];

  return (
    <div className="font-sans min-h-screen bg-black text-white">
      {/* HERO */}
      <GalleryHero 
        variant="main"
        title="ARION"
        subtitle="ARCHIVE"
        archiveLabel="Official Media Vault v5.0"
        description="A visual odyssey through the engineering of a racing legacy. Forced induction of passion and raw speed."
        bgImage="/images/Car_1.jpeg"
      />

      {/* FEATURE CARDS */}
      <GalleryNavigation />

      {/* MEDIA VAULT SECTION */}
      <section className="bg-[#050505] py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader 
             title="MEDIA"
             italicTitle="VAULT"
             tagline="Unified data stream // Total access"
             className="mb-20"
          />
          <InteractiveBentoGallery mediaItems={mediaItems} />
        </div>
      </section>
    </div>
  );
}