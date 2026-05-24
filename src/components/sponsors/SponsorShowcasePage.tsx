"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { SponsorShowcase } from "@/lib/data/sponsors/showcase";
import InstagramPost from "@/components/sponsors/InstagramPost";

interface SponsorShowcasePageProps {
  data: SponsorShowcase;
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/**
 * Reusable Sponsor Showcase Page Template.
 *
 * All sponsor showcase pages share this same structure —
 * only the `SponsorShowcase` data object changes per sponsor.
 *
 * Sections:
 * 1. Hero — Large logo, badge, name
 * 2. About — Full-width description
 * 3. Featured Collaboration — Instagram post embed
 * 4. Recognition Banner — Thank-you message
 * 5. Footer Actions — Navigation buttons
 */
export default function SponsorShowcasePage({ data }: SponsorShowcasePageProps) {
  const { sponsor, logoImage, instagramPostUrl, recognitionMessage, websiteUrl } = data;

  const tierAccentColor = "primary"; // Platinum gets the primary teal
  const tierBadgeText = `${sponsor.tier} Sponsor`;

  return (
    <div className="bg-[#08100f] text-white font-body min-h-screen selection:bg-primary/30 selection:text-white">
      
      {/* ═══════════════════════════════════════════ */}
      {/* SECTION 1: HERO                            */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Premium subtle background */}
        <div className="absolute inset-0">
          {/* Radial gradient glow behind logo */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(11,234,224,0.06),transparent_70%)]" />
          {/* Dot grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,rgba(11,234,224,0.03)_1px,transparent_0)] bg-[length:48px_48px]" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#08100f] to-transparent" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-20 md:pt-40 md:pb-28"
        >
          {/* Logo */}
          <motion.div
            variants={fadeUp}
            className="relative w-36 h-36 md:w-52 md:h-52 lg:w-60 lg:h-60 mb-10"
          >
            {/* Glow ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-b from-primary/10 to-transparent blur-2xl" />
            <div className="relative w-full h-full rounded-full border border-white/[0.08] bg-[#0d1716]/80 backdrop-blur-sm overflow-hidden shadow-[0_0_80px_rgba(11,234,224,0.12)]">
              <Image
                src={logoImage}
                alt={`${sponsor.name} logo`}
                fill
                className="object-contain p-6 md:p-8"
                priority
              />
            </div>
          </motion.div>

          {/* Platinum Sponsor Badge */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent to-primary/60" />
            <span className={`inline-flex items-center gap-2 px-5 py-1.5 border border-${tierAccentColor}/20 bg-${tierAccentColor}/[0.04] rounded-full`}>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-display font-bold text-[10px] md:text-xs tracking-[0.3em] text-primary uppercase">
                {tierBadgeText}
              </span>
            </span>
            <span className="h-[1px] w-8 md:w-12 bg-gradient-to-l from-transparent to-primary/60" />
          </motion.div>

          {/* Company Name */}
          <motion.h1
            variants={fadeUp}
            className="font-display font-black text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[0.85] text-white"
          >
            {sponsor.name}
          </motion.h1>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION 2: ABOUT                           */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative py-20 md:py-32">
        {/* Top separator */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            {/* Section label */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-10 md:mb-14">
              <span className="h-[1px] w-10 bg-white/20" />
              <h2 className="font-display font-bold text-[10px] md:text-xs tracking-[0.4em] text-white/40 uppercase">
                About {sponsor.name}
              </h2>
              <span className="h-[1px] w-10 bg-white/20" />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl lg:text-2xl text-white/60 leading-relaxed md:leading-[1.8] font-light text-center max-w-3xl"
            >
              {sponsor.description}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION 3: FEATURED COLLABORATION          */}
      {/* ═══════════════════════════════════════════ */}
      {instagramPostUrl && (
        <section className="relative py-20 md:py-32">
          {/* Top separator */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          <div className="container mx-auto px-6 max-w-3xl">
            {/* Section heading */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-14 justify-center"
            >
              <span className="h-[1px] w-10 bg-white/20" />
              <h2 className="font-display font-bold text-[10px] md:text-xs tracking-[0.4em] text-white/40 uppercase">
                Featured Instagram Post
              </h2>
              <span className="h-[1px] w-10 bg-white/20" />
            </motion.div>

            {/* Instagram Embed */}
            <InstagramPost
              type="post"
              mediaUrl={logoImage || "/images/Car_1.jpeg"}
              caption={`${sponsor.name} × Team Arion Racing`}
              likes={154}
              comments={12}
            />
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION 4: RECOGNITION BANNER              */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28">
        {/* Top separator */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Banner card */}
            <div className="relative px-8 py-12 md:px-16 md:py-16 bg-[#0d1716]/60 border border-primary/[0.08] rounded-2xl overflow-hidden">
              {/* Subtle glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,234,224,0.03),transparent_70%)]" />
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-primary/15 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-primary/15 rounded-br-2xl" />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Small decorative diamond */}
                <div className="w-2 h-2 rotate-45 bg-primary/30 mb-8" />
                
                <h3 className="font-display font-bold text-[10px] md:text-xs tracking-[0.4em] text-primary/60 uppercase mb-6 md:mb-8">
                  With Gratitude
                </h3>

                <p className="text-base md:text-lg text-white/50 leading-relaxed md:leading-[1.9] font-light max-w-2xl italic">
                  &ldquo;{recognitionMessage}&rdquo;
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <span className="h-[1px] w-6 bg-primary/20" />
                  <span className="font-display font-bold text-[10px] tracking-[0.3em] text-white/25 uppercase">
                    Team Arion Racing
                  </span>
                  <span className="h-[1px] w-6 bg-primary/20" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ */}
      {/* SECTION 5: FOOTER ACTIONS                  */}
      {/* ═══════════════════════════════════════════ */}
      <section className="relative py-16 md:py-24">
        {/* Top separator */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
          >
            {/* Back to Sponsors */}
            <Link
              href="/sponsors"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-white/[0.08] hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] text-white/60 hover:text-white rounded-full transition-all duration-300 font-display font-bold text-xs tracking-[0.15em] uppercase"
            >
              <FiArrowLeft
                size={14}
                className="group-hover:-translate-x-1 transition-transform duration-300"
              />
              Back to Sponsors
            </Link>

            {/* Visit Website */}
            {websiteUrl && (
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 text-primary rounded-full transition-all duration-300 font-display font-bold text-xs tracking-[0.15em] uppercase"
              >
                Visit {sponsor.name} Website
                <FiExternalLink
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </a>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
