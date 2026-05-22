"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackToGallery() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-4">
      <Link
        href="/gallery"
        className="inline-flex items-center gap-2 text-zinc-500 hover:text-primary transition-colors duration-300 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="text-xs font-bold uppercase tracking-[0.15em]">Back to Gallery</span>
      </Link>
    </div>
  );
}
