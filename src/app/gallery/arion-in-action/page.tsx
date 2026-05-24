"use client";

import { useEffect, useState } from "react";
import GalleryHero from "@/components/gallery/GalleryHero";
import SectionHeader from "@/components/gallery/SectionHeader";
import FeaturedMomentCard from "@/components/gallery/FeaturedMomentCard";
import PhotoGrid from "@/components/gallery/PhotoGrid";
import VideoGallery from "@/components/gallery/VideoGallery";
import AlbumCard from "@/components/gallery/AlbumCard";
import BackToGallery from "@/components/gallery/BackToGallery";
import { supabase } from "@/lib/supabase";

import {
  getFeaturedMoments as fallbackFeatured,
  getMediaItems as fallbackMediaItems,
  getVideoHighlights as fallbackVideos,
  getAlbums as fallbackAlbums,
} from "@/lib/data/gallery/arion-in-action";
import { FeaturedMoment, VideoItem, Album } from "@/types/media";

export default function ArionInActionPage() {
  const [featuredMoments, setFeaturedMoments] = useState<FeaturedMoment[]>([]);
  const [gridItems, setGridItems] = useState<any[]>([]);
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const { data, error } = await supabase
          .from("gallery_media")
          .select("*")
          .order("display_order", { ascending: true });

        const aiaMedia = data ? data.filter((item: any) => item.tag && item.tag.startsWith("AiA")) : [];

        if (aiaMedia.length > 0) {
          const imageMedia = aiaMedia.filter((item: any) => item.type === "IMAGE");
          const videoMedia = aiaMedia.filter((item: any) => item.type === "VIDEO");

          const mappedFeatured = imageMedia.slice(0, 4).map((item: any) => ({
            id: item.id.toString(),
            title: item.title,
            description: item.description || `Milestone details for ${item.title}.`,
            imageUrl: item.media_url,
            date: item.created_at ? item.created_at.split("T")[0] : "2025-08-15",
            category: "Milestone",
          }));

          const mappedGrid = imageMedia.slice(4).map((item: any, idx: number) => ({
            id: idx + 1,
            type: "image" as const,
            title: item.title,
            desc: item.description || "",
            url: item.media_url,
            span: getGridSpan(idx),
          }));

          const mappedVideos = videoMedia.map((item: any) => ({
            id: item.id.toString(),
            title: item.title,
            description: item.description || "Video highlight of the build and testing.",
            thumbnailUrl: "/images/Car_1.jpeg",
            videoUrl: item.media_url,
            duration: "2:00",
            category: "Highlight",
          }));

          setFeaturedMoments(mappedFeatured.length > 0 ? mappedFeatured : fallbackFeatured());
          setGridItems(
            mappedGrid.length > 0
              ? mappedGrid
              : fallbackMediaItems().map((item, i) => ({
                  id: i + 1,
                  type: item.mediaType === "video" ? ("video" as const) : ("image" as const),
                  title: item.title,
                  desc: item.description || "",
                  url: item.mediaUrl,
                  span: getGridSpan(i),
                }))
          );
          setVideos(mappedVideos.length > 0 ? mappedVideos : fallbackVideos());
        } else {
          setFeaturedMoments(fallbackFeatured());
          setGridItems(
            fallbackMediaItems().map((item, i) => ({
              id: i + 1,
              type: item.mediaType === "video" ? ("video" as const) : ("image" as const),
              title: item.title,
              desc: item.description || "",
              url: item.mediaUrl,
              span: getGridSpan(i),
            }))
          );
          setVideos(fallbackVideos());
        }
        setAlbums(fallbackAlbums());
      } catch (err) {
        console.error("Error loading Arion in Action gallery:", err);
        setFeaturedMoments(fallbackFeatured());
        setGridItems(
          fallbackMediaItems().map((item, i) => ({
            id: i + 1,
            type: item.mediaType === "video" ? ("video" as const) : ("image" as const),
            title: item.title,
            desc: item.description || "",
            url: item.mediaUrl,
            span: getGridSpan(i),
          }))
        );
        setVideos(fallbackVideos());
        setAlbums(fallbackAlbums());
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

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
