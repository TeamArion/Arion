"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Sponsor } from "@/lib/data/sponsors";

interface SponsorCardProps {
  sponsor: Sponsor;
  onClick?: (sponsor: Sponsor) => void;
}

interface TierStyles {
  border: string;
  hoverBorder: string;
  shadow: string;
  bgGlow: string;
  text: string;
  underline: string;
  badgeGlow: string;
}

const tierStyles: Record<Sponsor["tier"], TierStyles> = {
  Platinum: {
    border: "border-violet-500/20",
    hoverBorder: "group-hover:border-violet-500/50",
    shadow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]",
    bgGlow: "bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12)_0%,transparent_70%)]",
    text: "text-violet-400",
    underline: "bg-violet-500",
    badgeGlow: "shadow-[0_0_15px_rgba(168,85,247,0.3)]",
  },
  Gold: {
    border: "border-yellow-500/20",
    hoverBorder: "group-hover:border-yellow-500/50",
    shadow: "hover:shadow-[0_0_40px_rgba(234,179,8,0.3)]",
    bgGlow: "bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.12)_0%,transparent_70%)]",
    text: "text-yellow-500",
    underline: "bg-yellow-500",
    badgeGlow: "shadow-[0_0_15px_rgba(234,179,8,0.3)]",
  },
  Silver: {
    border: "border-slate-300/20",
    hoverBorder: "group-hover:border-slate-300/50",
    shadow: "hover:shadow-[0_0_40px_rgba(226,232,240,0.3)]",
    bgGlow: "bg-[radial-gradient(circle_at_center,rgba(226,232,240,0.08)_0%,transparent_70%)]",
    text: "text-slate-300",
    underline: "bg-slate-300",
    badgeGlow: "shadow-[0_0_15px_rgba(226,232,240,0.2)]",
  },
  Bronze: {
    border: "border-primary/20",
    hoverBorder: "group-hover:border-primary/50",
    shadow: "hover:shadow-[0_0_40px_rgba(11,234,224,0.3)]",
    bgGlow: "bg-[radial-gradient(circle_at_center,rgba(11,234,224,0.12)_0%,transparent_70%)]",
    text: "text-primary",
    underline: "bg-primary",
    badgeGlow: "shadow-[0_0_15px_rgba(11,234,224,0.3)]",
  },
};

export default function SponsorCard({ sponsor, onClick }: SponsorCardProps) {
  const isLink = sponsor.tier === "Platinum";
  const isImageLogo = sponsor.logo.includes(".") || sponsor.logo.startsWith("/");
  const styles = tierStyles[sponsor.tier];

  const CardContent = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`group bg-surface-container border ${styles.border} ${styles.hoverBorder} ${styles.shadow} rounded-2xl relative overflow-hidden transition-all duration-500 h-full flex flex-col p-6 md:p-8 cursor-pointer ${sponsor.tier === 'Platinum' ? 'py-8 md:py-10' : ''}`}
      onClick={() => !isLink && onClick?.(sponsor)}
    >
      {/* Background lit glow effect */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${styles.bgGlow}`} />

      <div className="flex-1 flex flex-col items-center w-full relative z-10">
        {/* Fixed Logo Area Container */}
        <div className={`w-full flex items-center justify-center mb-6 shrink-0 ${sponsor.tier === 'Platinum' ? 'h-48 md:h-56' : 'h-32 md:h-40'}`}>
          {/* Logo Circle */}
          <div className={`rounded-full bg-surface border ${styles.border} ${styles.hoverBorder} flex items-center justify-center overflow-hidden relative shrink-0 transition-all duration-500 ${sponsor.tier === 'Platinum' ? 'w-48 h-48 md:w-56 md:h-56' : 'w-32 h-32 md:w-40 md:h-40'}`}>
            {isImageLogo ? (
              <div className="relative w-full h-full p-6 md:p-8">
                <Image 
                  src={sponsor.logo} 
                  alt={`${sponsor.name} logo`}
                  fill
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500 scale-95 group-hover:scale-105"
                />
              </div>
            ) : (
              <span className="font-display font-black text-4xl text-outline-variant group-hover:text-white transition-colors duration-500 grayscale group-hover:grayscale-0 scale-95 group-hover:scale-105">
                {sponsor.logo}
              </span>
            )}
          </div>
        </div>

        {/* Sponsor Tier */}
        <p className={`font-body tracking-widest uppercase text-[10px] mb-2 font-semibold shrink-0 text-center ${styles.text} transition-colors duration-500`}>
          {sponsor.tier} SPONSOR
        </p>
        
        {/* Fixed Height Sponsor Name Area */}
        <div className="min-h-[48px] md:min-h-[64px] flex items-center justify-center w-full shrink-0">
          <h4 className={`font-display font-bold text-white uppercase tracking-tight text-center ${sponsor.tier === 'Platinum' ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
            {sponsor.name}
          </h4>
        </div>
        
        {/* Fixed Height Description Area */}
        {sponsor.tier !== "Platinum" && sponsor.tier !== "Gold" && sponsor.tier !== "Silver" && (
          <div className="min-h-[80px] w-full mt-2 md:mt-4 flex justify-center">
            <p className="font-body text-sm leading-relaxed line-clamp-3 text-center text-on-surface-variant/70">
              {sponsor.description || "Driving the future of electric mobility with Team Arion Racing."}
            </p>
          </div>
        )}
      </div>

      <div className={`absolute bottom-0 left-0 w-0 h-1 ${styles.underline} group-hover:w-full transition-all duration-500`}></div>
    </motion.div>
  );

  if (isLink) {
    return (
      <Link href={`/sponsors/${sponsor.slug}`} className="block h-full w-full">
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}
