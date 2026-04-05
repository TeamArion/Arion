export type SponsorTier = 'Platinum' | 'Gold' | 'Silver' | 'Bronze';

export interface SponsorSocials {
  website?: string;
  linkedin?: string;
  instagram?: string;
}

export interface PremiumSponsor {
  slug: string;
  tier: 'Platinum' | 'Gold';
  name: string;
  logo: string;
  description: string; // 250 words
  socials: SponsorSocials;
  gallery?: string[]; // Only Platinum
}

export const premiumSponsors: PremiumSponsor[] = [
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
  },
  {
    slug: 'quantum-motors',
    tier: 'Gold',
    name: 'Quantum Motors',
    logo: '/images/plat_logo.png', 
    description: `Quantum Motors has revolutionized our approach to the electric powertrain. As our primary propulsion partner, they have supplied us with next-generation axial-flux motor technology and high-density battery cell chemistry that completely redefines our acceleration profile. The shift to an electric architecture demanded a partner who understood both raw power and intricate thermal management. Quantum Motors stepped up, offering not only their off-the-shelf components but also custom-winding stators specifically matched to our gear ratios and track configurations. Their support extends deep into our electronics division, where their embedded systems engineers have helped us refine our custom Motor Controller Unit (MCU) firmware. This allows us to implement advanced torque vectoring algorithms, giving our drivers absolute confidence entering and exiting corners at the limit of grip. Quantum's commitment to sustainable, ultra-high-performance mobility aligns perfectly with Team Arion's mission. Their continuous feedback loops and rigorous dyno testing protocols have elevated our team's engineering standards to a professional level. The power delivered by Quantum Motors isn't just about straight-line speed; it’s about manageable, explosive, and reliable energy delivery lap after lap. They are a foundational pillar in our quest for podium finishes this season.`,
    socials: {
      website: 'https://example.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    slug: 'aero-tech',
    tier: 'Gold',
    name: 'AeroTech Systems',
    logo: '/images/plat_logo.png',
    description: `AeroTech Systems is the unseen force pressing our car into the tarmac. Their expertise in subsonic aerodynamics has physically reshaped the silhouette of Team Arion’s vehicle. By utilizing their advanced wind tunnel facilities and thousands of hours of supercomputer simulation time, we have been able to design a fully integrated aero package. The front wing, underbody diffuser, and multi-element rear wing work in perfect harmony to generate immense downforce with minimal drag penalty. AeroTech didn’t just hand us a design; they taught our engineering students how to visualize airflow, how to control boundary layers, and how to harness vortex generation to seal the floor. This year, their specialized carbon layup techniques have allowed us to create aero elements that are incredibly stiff yet unbelievably light, ensuring they don't flex under high-speed aerodynamic loads. This structural integrity is crucial for maintaining a consistent aerodynamic balance at 120 km/h. AeroTech Systems has empowered us to corner harder, brake later, and carry unprecedented speed through the technical sections of the track. Their sponsorship is a masterclass in fluid dynamics, directly translating invisible air pressure into measurable lap time reductions.`,
    socials: {
      website: 'https://example.com',
      instagram: 'https://instagram.com'
    }
  }
];
