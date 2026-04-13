import { PremiumSponsor } from '@/app/data/sponsors/types';

export const platinumSponsors: PremiumSponsor[] = [
  {
    slug: 'apex-dynamics',
    tier: 'Platinum',
    name: 'Apex Dynamics',
    logo: '/images/plat_logo.png',
    description: `Apex Dynamics stands as our pinnacle partner, bridging the gap between collegiate innovation and professional motorsport engineering. Since their integration into our development cycle, Apex has provided unprecedented access to aerospace-grade composites, advanced computational fluid dynamics (CFD) computing clusters, and proprietary telemetry analysis software. This collaboration is not merely a transaction; it is a symbiotic engineering endeavor. Their engineers work side-by-side with our structural and aerodynamics leads, sharing methodologies that have been proven on the world's most demanding circuits. By leveraging their deep expertise in structural rigidity and weight optimization, we have successfully managed to shave critical kilograms off our chassis while increasing overall torsional stiffness by an astonishing 34%. This year's challenger is a direct manifestation of Apex Dynamics' relentless pursuit of perfection. From the carbon-fiber monocoque to the intricacies of the suspension geometry, their DNA is inextricably linked to our performance. They challenged us to discard conventional collegiate approaches and adopt a true Formula One mindset. Thanks to their unwavering belief in our vision, robust financial backing, and hands-on technical mentorship, Team Arion is equipped to dominate the track. Apex Dynamics doesn't just sponsor us; they engineer the future of speed alongside us.`,
    socials: {
      website: 'https://example.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com'
    },
    gallery: [
      '/images/gallery_race.png'
    ]
  }
];
