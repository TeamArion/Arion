export interface Sponsor {
  name: string;
  slug: string;
  logo: string;
  tier: "Platinum" | "Gold" | "Silver" | "Bronze";
  description?: string;
  website?: string;
  instagram?: string;
  linkedin?: string;
}