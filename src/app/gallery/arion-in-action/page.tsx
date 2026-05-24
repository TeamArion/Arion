"use client";

import { useEffect, useState } from "react";
import GalleryHero from "@/components/gallery/GalleryHero";
import SectionHeader from "@/components/gallery/SectionHeader";
import FeaturedMomentCard from "@/components/gallery/FeaturedMomentCard";
import PhotoGrid from "@/components/gallery/PhotoGrid";
import BackToGallery from "@/components/gallery/BackToGallery";
import { supabase } from "@/lib/supabase";

import {
  getFeaturedMoments as fallbackFeatured,
  getMediaItems as fallbackMediaItems,
} from "@/lib/data/gallery/arion-in-action";
import { FeaturedMoment } from "@/types/media";

export default function ArionInActionPage() {
  const [featuredMoments, setFeaturedMoments] = useState<FeaturedMoment[]>([]);
  const [gridItems, setGridItems] = useState<any[]>([]);
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

          const mappedFeatured = [
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
            ...imageMedia.slice(0, 2).map((item: any) => ({
              id: item.id.toString(),
              title: item.title,
              description: item.description || `Milestone details for ${item.title}.`,
              imageUrl: item.media_url,
              date: item.created_at ? item.created_at.split("T")[0] : "2025-08-15",
              category: "Milestone",
            }))
          ];

          const mappedGrid = imageMedia.slice(2).map((item: any, idx: number) => ({
            id: idx + 1,
            type: "image" as const,
            title: item.title,
            desc: item.description || "",
            url: item.media_url,
            span: getGridSpan(idx),
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
        }
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            italicTitle="PROGRESS"
            tagline="Manufacturing // Assembly // Testing"
            className="mb-16"
          />
          <PhotoGrid mediaItems={gridItems} />
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
