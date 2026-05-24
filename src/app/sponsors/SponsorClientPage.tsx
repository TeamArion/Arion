"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { sponsors as fallbackSponsors, Sponsor } from "@/lib/data/sponsors";
import SponsorCard from "@/components/sponsors/SponsorCard";
import SponsorModal from "@/components/sponsors/SponsorModal";
import { supabase } from "@/lib/supabase";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function SponsorClientPage() {
  const [selectedSponsor, setSelectedSponsor] = useState<Sponsor | null>(null);
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSponsors() {
      try {
        const { data } = await supabase
          .from("sponsors")
          .select("*")
          .order("display_order", { ascending: true });

        if (data && data.length > 0) {
          const getSlug = (name: string) => name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
          const mapped = data.map((s: any) => ({
            name: s.name,
            slug: getSlug(s.name),
            logo: s.logo_url,
            tier: s.tier === "TITLE" ? "Platinum" : (s.tier.charAt(0) + s.tier.slice(1).toLowerCase()),
            description: s.description || "Driving the future of motorsport with Team Arion Racing.",
            website: s.website_url || "#",
            instagram: s.instagram_url || "#",
            linkedin: s.linkedin_url || "#",
          }));
          setSponsors(mapped);
        } else {
          setSponsors(fallbackSponsors);
        }
      } catch (err) {
        console.error("Error loading sponsors:", err);
        setSponsors(fallbackSponsors);
      } finally {
        setLoading(false);
      }
    }
    loadSponsors();
  }, []);

  const platinumSponsor = sponsors.find(s => s.tier === "Platinum");
  const goldSponsors = sponsors.filter(s => s.tier === "Gold");
  const silverSponsors = sponsors.filter(s => s.tier === "Silver");
  const bronzeSponsors = sponsors.filter(s => s.tier === "Bronze");

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-surface-container-lowest border-b border-primary/20">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-t from-[#08100f] via-transparent to-transparent z-10"></div>
          <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_2px_2px,rgba(11,234,224,0.05)_1px,transparent_0)] bg-[length:40px_40px]"></div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 filter grayscale brightness-50 contrast-125"
          >
            <source src="/videos/LandingPageVideo.mp4" type="video/mp4" />
          </video>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-12">
          <motion.div 
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            variants={fadeIn}
            className="mb-8 border border-primary/30 p-4 bg-[#08100f]/80 backdrop-blur-sm"
          >
            <Image 
              src="/Logo.svg" 
              alt="Team Arion Racing Logo" 
              width={96} 
              height={96} 
              className="h-16 md:h-24 w-auto object-contain" 
            />
          </motion.div>
          
          <motion.h1 
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeIn}
            className="font-display font-black text-5xl md:text-8xl uppercase tracking-tighter leading-none text-white mb-4 [text-shadow:0_0_15px_rgba(11,234,224,0.4)]"
          >
            FUELING THE <span className="text-primary block mt-2">FUTURE <span className="text-white">OF SPEED</span></span>
          </motion.h1>
          
          <motion.p 
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={fadeIn}
            className="font-body text-white/50 max-w-2xl text-lg md:text-xl font-light uppercase tracking-widest"
          >
            Precision, Performance, and the Partners who make it possible.
          </motion.p>
        </div>
      </section>

      {/* Sponsor Grid Section */}
      <section className="py-24 container mx-auto px-6 max-w-[1920px]">
        {/* Platinum Category */}
        <div className="mb-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
            className="flex items-center gap-4 mb-8 justify-center md:justify-start"
          >
            <span className="h-[2px] w-[70px] md:w-[90px] bg-gradient-to-r from-primary/90 to-transparent shadow-[0_0_10px_rgba(11,234,224,0.6)]"></span>
            <h2 className="font-display font-bold text-sm md:text-base tracking-[0.4em] text-primary/90 uppercase drop-shadow-[0_0_8px_rgba(11,234,224,0.3)]">Platinum Sponsor</h2>
          </motion.div>
          
          {platinumSponsor && (
             <div className="h-full">
               <SponsorCard sponsor={platinumSponsor} />
             </div>
          )}
        </div>

        {/* Gold Category */}
        <div className="mb-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
            className="flex items-center gap-4 mb-8 justify-center md:justify-start"
          >
            <span className="h-[1px] w-12 bg-yellow-500"></span>
            <h2 className="font-display font-bold text-xs tracking-[0.3em] text-yellow-500 uppercase">Gold Sponsors</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {goldSponsors.map(sponsor => (
               <div key={sponsor.slug} className="h-full">
                  <SponsorCard sponsor={sponsor} onClick={setSelectedSponsor} />
               </div>
            ))}
          </div>
        </div>

        {/* Silver Category */}
        <div className="mb-24">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
            className="flex items-center gap-4 mb-8 justify-center md:justify-start"
          >
            <span className="h-[1px] w-12 bg-primary"></span>
            <h2 className="font-display font-bold text-xs tracking-[0.3em] text-primary uppercase">Silver Sponsors</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {silverSponsors.map(sponsor => (
               <div key={sponsor.slug} className="h-full">
                  <SponsorCard sponsor={sponsor} onClick={setSelectedSponsor} />
               </div>
            ))}
          </div>
        </div>

        {/* Bronze Category */}
        <div>
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             variants={fadeIn}
             className="flex items-center gap-4 mb-8 justify-center md:justify-start"
          >
            <span className="h-[1px] w-12 bg-primary/50"></span>
            <h2 className="font-display font-bold text-xs tracking-[0.3em] text-primary/50 uppercase">Bronze Sponsors</h2>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {bronzeSponsors.map(sponsor => (
               <div key={sponsor.slug} className="h-full">
                  <SponsorCard sponsor={sponsor} onClick={setSelectedSponsor} />
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA Section */}
      <section className="py-32 bg-[#08100f] relative overflow-hidden border-t border-primary/20">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-30"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={fadeIn}
          >
            <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter mb-6 text-white">JOIN THE FRONT ROW</h2>
            <p className="font-body text-white/50 max-w-xl mx-auto mb-12 text-sm md:text-base leading-relaxed tracking-wide">
              Partner with India's premier engineering lab and reach a global audience of innovators and racing enthusiasts.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link href="/brochure">
                <button className="bg-primary text-[#006560] hover:bg-white hover:text-black font-display font-bold py-5 px-10 uppercase tracking-[0.1em] text-sm transition-all shadow-[0_0_20px_rgba(11,234,224,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] w-full">
                  DOWNLOAD SPONSOR BROCHURE
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Silver & Bronze Modal */}
      <SponsorModal 
        sponsor={selectedSponsor} 
        isOpen={selectedSponsor !== null} 
        onClose={() => setSelectedSponsor(null)} 
      />
    </div>
  );
}
