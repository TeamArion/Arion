"use client";

import { motion } from "framer-motion";
import { TeamCategory } from "@/lib/data/team-roster";

interface TabOption {
  id: TeamCategory;
  label: string;
}

interface TabsProps {
  activeTab: TeamCategory;
  setActiveTab: (tab: TeamCategory) => void;
}

const tabs: TabOption[] = [
  { id: "advisor", label: "Faculty Advisor" },
  { id: "executive", label: "Exec Committee" },
  { id: "heads", label: "Subsystem Heads" },
  { id: "design", label: "Design Team" },
  { id: "engineers", label: "Engineers" },
  { id: "business", label: "Business Team" },
  { id: "media", label: "Media Team" },
];

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  return (
    <div className="flex space-x-2 overflow-x-auto no-scrollbar pb-4 mb-12 w-full">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`relative px-4 py-2 text-sm font-label uppercase tracking-widest transition-colors whitespace-nowrap outline-none ${
            activeTab === tab.id
              ? "text-[#0beae0]"
              : "text-[#849492] hover:text-[#c6c6c7]"
          }`}
        >
          {tab.label}
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTabUnderline"
              className="absolute left-0 bottom-0 w-full h-[2px] bg-[#0beae0]"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
