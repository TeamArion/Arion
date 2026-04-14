export type TeamCategory = "executive" | "heads" | "engineers" | "business" | "marketing" | "design" | "media";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  focus?: string;
  image?: string;
  experience?: string;
  category?: TeamCategory;
  department?: string;
  domain?: string;
  funLine?: string;
}

export interface Mentor {
  name: string;
  role: string;
  description: string;
  image: string;
}

export const placeholderImage = "/images/silhouette.png";

