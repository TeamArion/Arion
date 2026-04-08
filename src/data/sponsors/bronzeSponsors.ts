import { RegularSponsor } from '@/data/sponsors/types';

export const bronzeSponsors: RegularSponsor[] = [
  ...Array.from({ length: 11 }).map((_, i) => ({
    id: `bronze-${i + 1}`,
    tier: 'Bronze' as const,
    name: `Bronze Sponsor ${i + 1}`,
    logo: '/images/plat_logo.png',
    description: `Providing essential logistical and hardware support for Team Arion's operations. Their contribution allows us to stream-line our pit-crew operations and manage vast arrays of tools efficiently during intense competition weekends. This robust, behind-the-scenes backbone is vital for maintaining our high performance under pressure.`,
    socials: {
      website: 'https://example.com',
    }
  }))
];
