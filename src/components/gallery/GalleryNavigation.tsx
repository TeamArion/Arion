"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GalleryNavigation() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 md:px-12 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 perspective-1000">

        <Link href="/gallery/arion-in-action" className="lg:col-span-8 block outline-none group">
          <motion.div 
            whileHover={{ scale: 1.01, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative aspect-video min-h-[450px] bg-zinc-900/40 border border-white/5 overflow-hidden shadow-2xl hover:shadow-primary/5 hover:border-primary/40 transition-all duration-500 rounded-2xl group"
          >
            {/* Note: local assets like /images/Car_1.jpeg should be manually converted to WebP for optimal performance. */}
            <img 
              className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
              src="/images/Car_1.jpeg" 
              alt="Arion In Action"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-10 left-10 z-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase group-hover:text-primary transition-colors">Arion In Action</h2>
              <div className="h-1 w-0 group-hover:w-24 bg-primary mt-2 transition-all duration-500"></div>
            </div>
          </motion.div>
        </Link>

        <div className="lg:col-span-4 flex flex-col gap-8">
          <Link href="/gallery/formula-bharat" className="flex-1 block outline-none group">
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative h-full min-h-[200px] bg-zinc-900/40 border border-white/5 overflow-hidden shadow-xl hover:shadow-primary/5 hover:border-primary/40 transition-all duration-500 rounded-2xl group"
            >
              {/* Note: local assets like /images/Car_1.jpeg should be manually converted to WebP for optimal performance. */}
              <img 
                className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                src="/images/Car_1.jpeg" 
                alt="Formula Bharat"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-8 text-white font-bold text-2xl tracking-tighter z-20 uppercase group-hover:text-primary transition-colors">Formula Bharat</div>
            </motion.div>
          </Link>

          <Link href="/gallery/sponsor-x-arion" className="flex-1 block outline-none group">
            <motion.div 
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative h-full min-h-[200px] bg-zinc-900/40 border border-white/5 overflow-hidden shadow-xl hover:shadow-primary/5 hover:border-primary/40 transition-all duration-500 rounded-2xl group"
            >
              {/* Note: local assets like /images/Car_1.jpeg should be manually converted to WebP for optimal performance. */}
              <img 
                className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                src="/images/Car_1.jpeg" 
                alt="Sponsor X Arion"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-8 text-white font-bold text-2xl tracking-tighter z-20 uppercase group-hover:text-primary transition-colors">Sponsor X Arion</div>
            </motion.div>
          </Link>
        </div>

      </div>
    </section>
  );
}
