import { Metadata } from "next";
import { sponsorShowcaseData } from "@/lib/data/sponsors/showcase";
import { notFound } from "next/navigation";
import SponsorShowcasePage from "@/components/sponsors/SponsorShowcasePage";

const showcaseData = sponsorShowcaseData["exedy"];

export const metadata: Metadata = {
  title: `${showcaseData?.sponsor.name ?? "Sponsor"} | Platinum Sponsor | Team Arion Racing`,
  description:
    showcaseData?.sponsor.description?.substring(0, 160) ??
    "Platinum sponsor showcase for Team Arion Racing.",
};

export default function ExedyPage() {
  if (!showcaseData) {
    notFound();
  }

  return <SponsorShowcasePage data={showcaseData} />;
}
