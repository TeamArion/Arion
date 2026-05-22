"use client";

import GalleryHero from "@/components/gallery/GalleryHero";
import SectionHeader from "@/components/gallery/SectionHeader";
import FeaturedMomentCard from "@/components/gallery/FeaturedMomentCard";
import PhotoGrid from "@/components/gallery/PhotoGrid";
import VideoGallery from "@/components/gallery/VideoGallery";
import AlbumCard from "@/components/gallery/AlbumCard";
import BackToGallery from "@/components/gallery/BackToGallery";

import {
  getFeaturedMoments,
  getMediaItems,
  getVideoHighlights,
  getAlbums,
} from "@/libs/data/gallery/arion-in-action";

export default function ArionInActionPage() {
  const featuredMoments = getFeaturedMoments();
  const mediaItems = getMediaItems();
  const videos = getVideoHighlights();
  const albums = getAlbums();

  // Transform MediaItem[] to the shape PhotoGrid expects
  const gridItems = mediaItems.map((item, i) => ({
    id: i + 1,
    type: item.mediaType === "video" ? "video" : "image",
    title: item.title,
    desc: item.description || "",
    url: item.mediaUrl,
    span: getGridSpan(i),
  }));

  return (
    <div className="font-sans min-h-screen bg-black text-white">
      {/* BACK NAVIGATION */}
      <BackToGallery />

      {/* HERO */}
      <GalleryHero
        variant="sub"
        title="ARION IN"
        subtitle="ACTION"
        archiveLabel="Behind The Build // The Journey"
        description="From concept to competition — every design, every test, every breakthrough."
        bgImage="/images/Car_1.jpeg"
      />

      {/* FEATURED MOMENTS */}
      <section className="bg-[#050505] py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader
            title="FEATURED"
            italicTitle="MOMENTS"
            tagline="Milestones that defined the season"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredMoments.map((moment, i) => (
              <FeaturedMomentCard key={moment.id} moment={moment} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* MASONRY GALLERY */}
      <section className="bg-black py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader
            title="THE"
            italicTitle="BUILD"
            tagline="Manufacturing // Assembly // Testing"
            className="mb-16"
          />
          <PhotoGrid mediaItems={gridItems} />
        </div>
      </section>

      {/* VIDEO HIGHLIGHTS */}
      <section className="bg-[#050505] py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader
            title="VIDEO"
            italicTitle="HIGHLIGHTS"
            tagline="Motion captured // Stories told"
            className="mb-16"
          />
          <VideoGallery videos={videos} />
        </div>
      </section>

      {/* SEASON ALBUMS */}
      <section className="bg-black py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader
            title="SEASON"
            italicTitle="ALBUMS"
            tagline="Archives by year // The complete record"
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album, i) => (
              <AlbumCard key={album.id} album={album} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/** Assigns grid span classes based on index for a dynamic masonry feel */
function getGridSpan(index: number): string {
  const spans = [
    "md:col-span-3 md:row-span-3 col-span-2",
    "md:col-span-2 md:row-span-2",
    "md:col-span-1 md:row-span-2",
    "md:col-span-2 md:row-span-2",
    "md:col-span-2 md:row-span-2",
    "md:col-span-1 md:row-span-3",
  ];
  return spans[index % spans.length];
}
