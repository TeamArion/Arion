"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">
      <main className="flex flex-1 w-full flex-col items-center justify-center relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='0.5'/%3E%3C/g%3E%3C/svg%3E")` }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

        <section className="relative z-10 flex flex-col items-center max-w-4xl px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Image
              className="invert drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={36}
              priority
            />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8 uppercase"
          >
            Team Arion <br/> 
            <span className="text-primary italic">Racing</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-12 font-medium leading-relaxed"
          >
            Engineering the future of speed. Explore our official media vault and technical documentation.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 mb-16"
          >
            <Link
              href="/gallery"
              className="flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-10 text-black font-bold text-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all transform hover:scale-105"
            >
              Explore Gallery
            </Link>
            <a
              className="flex h-14 items-center justify-center rounded-full border border-white/10 px-10 text-white font-bold text-lg hover:bg-white/5 hover:border-primary/50 transition-all backdrop-blur-sm"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </motion.div>

          {/* Technical Info Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 py-8 border-t border-white/10 w-full"
          >
            <div className="flex flex-col gap-1">
              <span className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">Status</span>
              <span className="text-primary font-bold tracking-tight">NOMINAL</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">Location</span>
              <span className="text-white font-bold tracking-tight">PUNE, IN</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-zinc-500 text-[10px] uppercase tracking-widest font-bold">Version</span>
              <span className="text-white font-bold tracking-tight">4.0.1</span>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
