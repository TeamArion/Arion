export interface TeamMember {
  id: string;
  name: string;
  role: string;
  focus: string;
  image: string;
  category: string;
  department: string;
  domain: string;
  funLine?: string;
  experience?: string;
  imageRotation?: number;
}

export type TeamCategory = "advisor" | "executive" | "heads" | "design" | "engineers" | "business" | "media";

export interface Mentor {
  name: string;
  role: string;
  description: string;
  image: string;
}

export const placeholderImage = "/images/Car_1.jpeg";

