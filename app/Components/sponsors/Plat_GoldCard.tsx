import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PremiumSponsor } from '@/data/sponsors/premiumSponsors';

interface Props {
  sponsor: PremiumSponsor;
}

export default function Plat_GoldCard({ sponsor }: Props) {
  // Plat: larger card, Gold: standard. We can let the parent grid handle sizing.
  // The card respects the kinetic monolith "0px" border radius and strict borders.

  return (
    <Link href={`/sponsors/${sponsor.slug}`} className="block h-full cursor-pointer group">
      <motion.div
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
        className="relative h-full flex flex-col items-center justify-center p-12 bg-[#131313] border border-[#2a2a2a] group-hover:border-[#E8001A] transition-colors duration-300 min-h-[300px]"
        style={{ borderRadius: '0px' }} // Explicit 0px as per 'Kinetic Monolith'
      >
        {/* Ghost Grid Pattern inside card for tech feel */}
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:24px_24px]"></div>
        
        {/* Tier indicator stripe */}
        <div 
          className={`absolute top-0 left-0 w-full h-[2px] ${sponsor.tier === 'Platinum' ? 'bg-[#E8001A]' : 'bg-[#E8001A]/60'}`}
        />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="relative w-40 h-40">
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              fill
              className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <h3 className="font-display font-bold text-2xl md:text-3xl tracking-wide uppercase text-white group-hover:text-[#E8001A] transition-colors">
            {sponsor.name}
          </h3>
          <span className="font-body text-xs tracking-[0.2em] uppercase text-[#5e3f3b]">
            View Partnership Data
          </span>
        </div>
        
        {/* Decoration Corners */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#5e3f3b] opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#5e3f3b] opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#5e3f3b] opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#5e3f3b] opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>
    </Link>
  );
}
