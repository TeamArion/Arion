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
  Platinum: "hover:shadow-[0_0_40px_rgba(11,234,224,0.6)] border-primary/20",
  Gold: "hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] border-yellow-500/20",
  Silver: "hover:shadow-[0_0_20px_rgba(11,234,224,0.4)] border-primary/10",
  Bronze: "hover:shadow-[0_0_15px_rgba(11,234,224,0.2)] border-primary/5",
};

const underlineStyles: Record<Sponsor["tier"], string> = {
  Platinum: "bg-primary",
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
      className={`group bg-surface-container border ${glowStyles[sponsor.tier]} relative overflow-hidden transition-all duration-500 h-full flex flex-col p-8 cursor-pointer`}
      onClick={() => !isLink && onClick?.(sponsor)}
    >
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        {/* Logo Container */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-surface border border-outline-variant/20 flex items-center justify-center mb-6 overflow-hidden relative shrink-0">
          {isImageLogo ? (
            <div className="relative w-full h-full p-6">
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

        <p className={`font-body tracking-widest uppercase text-[10px] mb-2 font-semibold ${sponsor.tier === 'Platinum' ? 'text-primary' : sponsor.tier === 'Gold' ? 'text-yellow-500' : 'text-on-surface-variant'}`}>
          {sponsor.tier} SPONSOR
        </p>
        <h4 className="font-display font-bold text-2xl text-white uppercase tracking-tight">
          {sponsor.name}
        </h4>
        
        <p className="font-body text-sm text-on-surface-variant/70 leading-relaxed mt-4 line-clamp-3">
          {sponsor.description || "Driving the future of electric mobility with Team Arion Racing."}
        </p>
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

