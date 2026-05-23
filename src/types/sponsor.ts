/** Sponsor partnership highlight card */
export interface SponsorHighlight {
  id: string;
  sponsorName: string;
  title: string;
  description: string;
  imageUrl: string;
  createdAt: string;
}

/** Sponsorship call-to-action data */
export interface PartnerCTA {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}
