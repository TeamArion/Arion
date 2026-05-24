import { executiveHeads } from "./team/executive-heads";
import { engineers as designEngineers } from "./team/design";
import { mediaTeam } from "./team/media";
import { businessTeam } from "./team/business";
import { electricalsTeam as electricalEngineers } from "./team/engineer";
import { facultyAdvisors } from "./team/faculty";
import { TeamMember, TeamCategory } from "./team/types";

// Re-exporting types for backward compatibility with components
export type { TeamMember, TeamCategory };

/**
 * teamRoster is the primary data source for the Team Section.
 * It combines all separate static files into one master list.
 */
export const teamRoster: TeamMember[] = [
  ...facultyAdvisors,
  ...executiveHeads,
  ...designEngineers,
  ...mediaTeam,
  ...businessTeam,
  ...electricalEngineers
];
