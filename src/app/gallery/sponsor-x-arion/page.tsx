"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import GalleryHero from "@/components/gallery/GalleryHero";
import SectionHeader from "@/components/gallery/SectionHeader";
import InstagramPost from "@/components/gallery/Instagram";
import LinkedInCTA from "@/components/gallery/LinkedInCTA";
import PhotoGrid from "@/components/gallery/PhotoGrid";
import VideoGallery from "@/components/gallery/VideoGallery";
import BackToGallery from "@/components/gallery/BackToGallery";
import { supabase } from "@/lib/supabase";

import {
  getInstagramPosts,
  getSponsorMedia as fallbackSponsorMedia,
  getSponsorVideos as fallbackVideos,
} from "@/lib/data/gallery/sponsor-x-arion";

export default function SponsorXArionPage() {
  const [gridItems, setGridItems] = useState<any[]>([]);
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const instagramPosts = getInstagramPosts();
  const fallbackMedia = fallbackSponsorMedia();
  const fallbackVids = fallbackVideos();

  useEffect(() => {
    async function loadData() {
      try {
        const { data, error } = await supabase
          .from("gallery_media")
          .select("*")
          .order("display_order", { ascending: true });

        const sponsorMedia = data ? data.filter((item: any) => item.tag === "Sponsor_Posts") : [];

        if (sponsorMedia.length > 0) {
          const images = sponsorMedia.filter((item: any) => item.type === "IMAGE");
          const videoList = sponsorMedia.filter((item: any) => item.type === "VIDEO");

          const mappedGrid = images.map((item: any, idx: number) => ({
            id: idx + 1,
            type: "image" as const,
            title: item.title,
            desc: item.description || "",
            url: item.media_url,
            span: getGridSpan(idx),
          }));

          const mappedVideos = videoList.map((item: any) => ({
            id: item.id.toString(),
            title: item.title,
            description: item.description || "Sponsor collaboration showcase.",
            thumbnailUrl: "/images/Car_1.jpeg",
            videoUrl: item.media_url,
            duration: "1:30",
            category: "Collaboration",
          }));

          setGridItems(mappedGrid.length > 0 ? mappedGrid : fallbackMedia.map((item, i) => ({
            id: i + 1,
            type: item.mediaType === "video" ? "video" : "image",
            title: item.title,
            desc: item.description || "",
            url: item.mediaUrl,
            span: getGridSpan(i),
          })));
          setVideos(mappedVideos.length > 0 ? mappedVideos : fallbackVids);
        } else {
          setGridItems(
            fallbackMedia.map((item, i) => ({
              id: i + 1,
              type: item.mediaType === "video" ? "video" : "image",
              title: item.title,
              desc: item.description || "",
              url: item.mediaUrl,
              span: getGridSpan(i),
            }))
          );
          setVideos(fallbackVids);
        }
      } catch (err) {
        console.error("Error loading Sponsor x Arion gallery:", err);
        setGridItems(
          fallbackMedia.map((item, i) => ({
            id: i + 1,
            type: item.mediaType === "video" ? "video" : "image",
            title: item.title,
            desc: item.description || "",
            url: item.mediaUrl,
            span: getGridSpan(i),
          }))
        );
        setVideos(fallbackVids);
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
        title="SPONSOR X"
        subtitle="ARION"
        archiveLabel="Partnerships // Collaborations"
        description="Driving innovation through meaningful partnerships."
        bgImage="/images/Car_1.jpeg"
      />

      {/* INSTAGRAM SHOWCASE */}
      <section className="bg-[#050505] py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader
            title="INSTAGRAM"
            italicTitle="SHOWCASE"
            tagline="Follow @_team.arion_ for the latest updates"
            className="mb-16"
          />

          <div className="flex flex-wrap justify-center gap-6">
            {instagramPosts.map((post, i) => (
              <a
                key={i}
                href="https://www.instagram.com/_team.arion_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm block"
              >
                <InstagramPost
                  type={post.type}
                  mediaUrl={post.mediaUrl}
                  caption={post.caption}
                  likes={post.likes}
                  comments={post.comments}
                  username="_team.arion_"
                />
              </a>
            ))}
          </div>

          {/* Instagram CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <a
              href="https://www.instagram.com/_team.arion_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:text-white border border-primary/30 hover:border-primary px-6 py-3 rounded-full transition-all duration-300 group"
            >
              Follow on Instagram
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* LINKEDIN CTA */}
      <section className="bg-black py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader
            title="STAY"
            italicTitle="CONNECTED"
            tagline="Professional updates // Industry news"
            className="mb-12"
          />
          <LinkedInCTA />
        </div>
      </section>

      {/* VIDEO GALLERY */}
      <section className="bg-[#050505] py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader
            title="VIDEO"
            italicTitle="GALLERY"
            tagline="Partnership highlights // Technical demonstrations"
            className="mb-16"
          />
          <VideoGallery videos={videos} />
        </div>
      </section>

      {/* SPONSOR GALLERY */}
      <section className="bg-black py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader
            title="SPONSOR"
            italicTitle="GALLERY"
            tagline="Factory tours // Technical sessions // Events"
            className="mb-16"
          />
          <PhotoGrid mediaItems={gridItems} />
        </div>
      </section>
    </div>
  );
}

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
