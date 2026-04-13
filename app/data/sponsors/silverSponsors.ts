import { RegularSponsor } from '@/app/data/sponsors/types';

export const silverSponsors: RegularSponsor[] = [
  ...Array.from({ length: 4 }).map((_, i) => ({
    id: `silver-${i + 1}`,
    tier: 'Silver' as const,
    name: `Silver Sponsor ${i + 1}`,
    logo: '/images/plat_logo.png',
    description: `An essential partner providing critical machining services and precision-engineered metal components. Their fast turnaround times and exact adherence to our CAD tolerances allow us to iterate significantly faster during the manufacturing phase. They ensure our mechanical structures are built to aerospace standards.`,
    socials: {
      website: 'https://example.com',
      linkedin: 'https://linkedin.com'
    }
  }))
];
