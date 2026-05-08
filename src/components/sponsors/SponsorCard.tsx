"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Sponsor } from "@/lib/data/sponsors";

interface SponsorCardProps {
  sponsor: Sponsor;
  onClick?: (sponsor: Sponsor) => void;
}

const glowStyles: Record<Sponsor["tier"], string> = {
  Platinum: "hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] border-white/20",
  Gold: "hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] border-yellow-500/20",
  Silver: "hover:shadow-[0_0_20px_rgba(11,234,224,0.4)] border-primary/10",
  Bronze: "hover:shadow-[0_0_15px_rgba(11,234,224,0.2)] border-primary/5",
};

const underlineStyles: Record<Sponsor["tier"], string> = {
  Platinum: "bg-white",
  Gold: "bg-yellow-500",
  Silver: "bg-primary/80",
  Bronze: "bg-primary/40",
};

export default function SponsorCard({ sponsor, onClick }: SponsorCardProps) {
  const isLink = sponsor.tier === "Platinum" || sponsor.tier === "Gold";
  const isImageLogo = sponsor.logo.includes(".") || sponsor.logo.startsWith("/");

  const CardContent = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`group bg-surface-container border ${glowStyles[sponsor.tier]} relative overflow-hidden transition-all duration-500 h-full flex flex-col p-6 md:p-8 cursor-pointer ${sponsor.tier === 'Platinum' ? 'py-8 md:py-10' : ''}`}
      onClick={() => !isLink && onClick?.(sponsor)}
    >
      <div className="flex-1 flex flex-col items-center w-full">
        {/* Fixed Logo Area Container */}
        <div className={`w-full flex items-center justify-center mb-6 shrink-0 ${sponsor.tier === 'Platinum' ? 'h-48 md:h-56' : 'h-32 md:h-40'}`}>
          {/* Logo Circle */}
          <div className={`rounded-full bg-surface border border-outline-variant/20 flex items-center justify-center overflow-hidden relative shrink-0 ${sponsor.tier === 'Platinum' ? 'w-48 h-48 md:w-56 md:h-56' : 'w-32 h-32 md:w-40 md:h-40'}`}>
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
        <p className={`font-body tracking-widest uppercase text-[10px] mb-2 font-semibold shrink-0 text-center ${sponsor.tier === 'Platinum' ? 'text-white/80' : sponsor.tier === 'Gold' ? 'text-yellow-500' : 'text-on-surface-variant'}`}>
          {sponsor.tier} SPONSOR
        </p>
        
        {/* Fixed Height Sponsor Name Area */}
        <div className="min-h-[48px] md:min-h-[64px] flex items-center justify-center w-full shrink-0">
          <h4 className={`font-display font-bold text-white uppercase tracking-tight text-center ${sponsor.tier === 'Platinum' ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
            {sponsor.name}
          </h4>
        </div>
        
        {/* Fixed Height Description Area */}
        <div className="min-h-[80px] w-full mt-2 md:mt-4 flex justify-center">
          <p className={`font-body text-sm leading-relaxed line-clamp-3 text-center ${sponsor.tier === 'Platinum' ? 'text-white/70' : 'text-on-surface-variant/70'}`}>
            {sponsor.description || "Driving the future of electric mobility with Team Arion Racing."}
          </p>
        </div>
      </div>

      <div className={`absolute bottom-0 left-0 w-0 h-1 ${underlineStyles[sponsor.tier]} group-hover:w-full transition-all duration-500`}></div>
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

