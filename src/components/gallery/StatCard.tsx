"use client";

import React from "react";

interface StatCardProps {
  label: string;
  value: string;
  largeValue?: boolean;
}

export default function StatCard({ label, value, largeValue = false }: StatCardProps) {
  return (
    <div className="flex flex-col gap-4 p-8 bg-black border border-white/5 hover:border-primary/40 rounded-2xl transition-all duration-300 group">
      <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
        {label}
      </span>
      <span 
        className={`font-bold text-white tracking-tighter uppercase ${
          largeValue 
            ? "text-6xl group-hover:scale-105 transition-transform origin-left" 
            : "text-3xl group-hover:text-primary transition-colors"
        }`}
      >
        {value}
      </span>
      <div className="h-0.5 w-12 bg-primary/30 group-hover:w-full transition-all"></div>
    </div>
  );
}
