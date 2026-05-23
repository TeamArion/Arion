"use client";

import { motion } from "framer-motion";
import type { TimelineEvent } from "@/types/formula-bharat";
import {
  ClipboardCheck,
  Search,
  Paintbrush,
  DollarSign,
  Briefcase,
  Zap,
  Timer,
  Trophy,
} from "lucide-react";

interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

const ICON_MAP: Record<string, React.ElementType> = {
  registration: ClipboardCheck,
  inspection: Search,
  design: Paintbrush,
  cost: DollarSign,
  business: Briefcase,
  dynamic: Zap,
  endurance: Timer,
  results: Trophy,
};

function getStatusStyles(status: TimelineEvent["status"]) {
  switch (status) {
    case "completed":
      return {
        dot: "bg-primary border-primary/50 shadow-[0_0_12px_rgba(0,211,176,0.4)]",
        line: "bg-primary/50",
        badge: "text-primary border-primary/30 bg-primary/10",
        badgeText: "COMPLETED",
      };
    case "active":
      return {
        dot: "bg-yellow-400 border-yellow-400/50 shadow-[0_0_12px_rgba(250,204,21,0.4)] animate-pulse",
        line: "bg-yellow-400/50",
        badge: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
        badgeText: "IN PROGRESS",
      };
    case "upcoming":
      return {
        dot: "bg-zinc-700 border-zinc-600",
        line: "bg-zinc-800",
        badge: "text-zinc-500 border-zinc-700 bg-zinc-800/50",
        badgeText: "UPCOMING",
      };
  }
}

export default function Timeline({ events, className = "" }: TimelineProps) {
  if (!events.length) {
    return (
      <div className={`text-center py-16 ${className}`}>
        <p className="text-zinc-500 text-sm uppercase tracking-widest">No timeline events</p>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Central vertical line — desktop only */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-zinc-800 to-transparent -translate-x-1/2" />

      {/* Mobile vertical line — left aligned */}
      <div className="md:hidden absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-zinc-800 to-transparent" />

      <div className="space-y-8 md:space-y-12">
        {events.map((event, index) => {
          const isLeft = index % 2 === 0;
          const styles = getStatusStyles(event.status);
          const Icon = ICON_MAP[event.iconType || "registration"];

          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`relative flex items-start gap-6 md:gap-0 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content card */}
              <div className={`flex-1 md:w-[45%] ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"} pl-12 md:pl-0`}>
                <div className="group p-5 md:p-6 rounded-xl border border-white/5 hover:border-primary/30 bg-zinc-900/30 hover:bg-zinc-900/60 transition-all duration-300">
                  {/* Date */}
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600 font-mono mb-2">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>

                  {/* Title + Icon */}
                  <div className={`flex items-center gap-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                    {Icon && (
                      <div className="shrink-0 w-8 h-8 rounded-lg bg-zinc-800 border border-white/5 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                    )}
                    <h3 className="text-sm md:text-base font-bold text-white tracking-tight uppercase group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-2 text-xs text-zinc-500 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Status badge */}
                  <div className={`inline-flex mt-3 ${isLeft ? "md:float-right" : ""}`}>
                    <span className={`text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border ${styles.badge}`}>
                      {styles.badgeText}
                    </span>
                  </div>
                </div>
              </div>

              {/* Center dot — desktop */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 items-center justify-center z-10 mt-6">
                <div className={`w-4 h-4 rounded-full border-2 ${styles.dot}`} />
              </div>

              {/* Left dot — mobile */}
              <div className="md:hidden absolute left-3.5 w-3.5 h-3.5 rounded-full border-2 z-10 mt-1.5">
                <div className={`w-3.5 h-3.5 rounded-full border-2 ${styles.dot}`} />
              </div>

              {/* Spacer for opposite side — desktop */}
              <div className="hidden md:block flex-1 md:w-[45%]" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
