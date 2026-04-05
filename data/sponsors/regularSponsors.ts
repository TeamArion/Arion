import { SponsorSocials } from './premiumSponsors';

export interface RegularSponsor {
  id: string; // Using ID for regular instead of slug since they don't have separate pages
  tier: 'Silver' | 'Bronze';
  name: string;
  logo: string;
  description: string; // ~100 words
  socials: SponsorSocials;
}

export const regularSponsors: RegularSponsor[] = [
  // Silver Sponsors
  ...Array.from({ length: 4 }).map((_, i) => ({
    id: `silver-${i + 1}`,
    tier: 'Silver' as const,
    name: `Silver Sponsor ${i + 1}`,
    logo: '/images/plat_logo.png', // Reusing placeholder
    description: `An essential partner providing critical machining services and precision-engineered metal components. Their fast turnaround times and exact adherence to our CAD tolerances allow us to iterate significantly faster during the manufacturing phase. They ensure our mechanical structures are built to aerospace standards, delivering reliability when we need it most on the track.`,
    socials: {
      website: 'https://example.com',
      linkedin: 'https://linkedin.com'
    }
  })),
  // Bronze Sponsors
  ...Array.from({ length: 11 }).map((_, i) => ({
    id: `bronze-${i + 1}`,
    tier: 'Bronze' as const,
    name: `Bronze Sponsor ${i + 1}`,
    logo: '/images/plat_logo.png', // Reusing placeholder
    description: `Providing essential logistical and hardware support for Team Arion's operations. Their contribution allows us to stream-line our pit-crew operations and manage vast arrays of tools efficiently during intense competition weekends. This robust, behind-the-scenes backbone is vital for maintaining our high performance under pressure.`,
    socials: {
      website: 'https://example.com',
    }
  })),
];
