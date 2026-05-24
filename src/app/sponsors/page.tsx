import { Metadata } from "next";
import SponsorClientPage from "@/app/sponsors/SponsorClientPage";

export const metadata: Metadata = {
  title: "Sponsors | Team Arion Racing",
  description: "Meet the visionary partners and sponsors who power Formula Student India's premier CV racing team.",
};

export default function SponsorsPage() {
  return <SponsorClientPage />;
}
