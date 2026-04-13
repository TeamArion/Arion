import { PremiumSponsor } from '@data/sponsors/types';

export const goldSponsors: PremiumSponsor[] = [
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
