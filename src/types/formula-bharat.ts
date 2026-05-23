/** Competition performance statistics */
export interface FormulaBharatStats {
  overallRank?: number;
  designScore?: number;
  costScore?: number;
  businessScore?: number;
  enduranceScore?: number;
  autocrossScore?: number;
  vehicleNumber?: string;
  totalTeams?: number;
  season?: string;
}

/** Single event on the competition timeline */
export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  status: "completed" | "active" | "upcoming";
  iconType?: "registration" | "inspection" | "design" | "cost" | "business" | "dynamic" | "endurance" | "results";
}

/** Competition news / update card */
export interface CompetitionUpdate {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  imageUrl?: string;
}
