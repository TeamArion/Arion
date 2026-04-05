export interface SponsorSocials {
  website?: string;
  linkedin?: string;
  instagram?: string;
}

export interface SponsorBase {
  name: string;
  logo: string;
  description: string;
  socials: SponsorSocials;
}

// For Platinum & Gold
export interface PremiumSponsor extends SponsorBase {
  slug: string;
  tier: 'Platinum' | 'Gold';
  gallery?: string[]; // Only Platinum
}

// For Silver & Bronze
export interface RegularSponsor extends SponsorBase {
  id: string;
  tier: 'Silver' | 'Bronze';
}
