"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import GalleryHero from "@/components/gallery/GalleryHero";
import SectionHeader from "@/components/gallery/SectionHeader";
import StatCard from "@/components/gallery/StatCard";
import PhotoGrid from "@/components/gallery/PhotoGrid";
import InstagramPost from "@/components/gallery/Instagram";
import BackToGallery from "@/components/gallery/BackToGallery";

import {
  getCompetitionMedia,
  getCompetitionInstagramPosts,
} from "@/libs/data/gallery/formula-bharat";

/** Animated counter hook — counts from 0 to target when element is in view */
function useAnimatedCounter(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return { count, ref };
}

function AnimatedStatCard({ label, value, isNumeric }: { label: string; value: string; isNumeric: boolean }) {
  const numericValue = parseInt(value, 10);
  const { count, ref } = useAnimatedCounter(isNumeric && !isNaN(numericValue) ? numericValue : 0);
  const displayValue = isNumeric && !isNaN(numericValue) ? String(count) : value;

  return (
    <div ref={ref}>
      <StatCard label={label} value={displayValue} />
    </div>
  );
}

export default function FormulaBharatPage() {
  const media = getCompetitionMedia();
  const instagramPosts = getCompetitionInstagramPosts();

  // Transform for PhotoGrid
  const gridItems = media.map((item, i) => ({
    id: i + 1,
    type: item.mediaType === "video" ? "video" : "image",
    title: item.title,
    desc: item.description || "",
    url: item.mediaUrl,
    span: getGridSpan(i),
  }));

  const statEntries = [
    { label: "Vehicle Name", value: "AR25", isNumeric: false },
    { label: "Overall Rank", value: "11", isNumeric: true },
    { label: "Bplan Rank", value: "3", isNumeric: true },
    { label: "Endurance", value: "Cleared", isNumeric: false },
    { label: "Noise Test", value: "Cleared", isNumeric: false },
    { label: "Tilt Test", value: "Cleared", isNumeric: false },
  ];

  return (
    <div className="font-sans min-h-screen bg-black text-white">
      {/* BACK NAVIGATION */}
      <BackToGallery />

      {/* HERO */}
      <GalleryHero
        variant="sub"
        title="FORMULA"
        subtitle="BHARAT"
        archiveLabel="Competition Dashboard // Season 2025-26"
        description="Competing among India's top Formula Student teams."
        bgImage="/images/Car_1.jpeg"
      />

      {/* PERFORMANCE DASHBOARD */}
      <section className="bg-[#050505] py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader
            title="PERFORMANCE"
            italicTitle="DASHBOARD"
            tagline="Scores // Rankings // Results"
            className="mb-16"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {statEntries.map((stat) => (
              <AnimatedStatCard
                key={stat.label}
                label={stat.label}
                value={stat.value}
                isNumeric={stat.isNumeric}
              />
            ))}
          </div>
        </div>
      </section>

      {/* COMPETITION UPDATES */}
      <section className="bg-black py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader
            title="COMPETITION"
            italicTitle="UPDATES"
            tagline="Live from the paddock"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            {instagramPosts.map((post, i) => (
              <a
                key={i}
                href="https://www.instagram.com/_team.arion_/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full max-w-sm"
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
        </div>
      </section>

      {/* COMPETITION GALLERY */}
      <section className="bg-[#050505] py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader
            title="COMPETITION"
            italicTitle="GALLERY"
            tagline="Moments from the track // Pit lane action"
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
