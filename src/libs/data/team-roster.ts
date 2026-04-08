export type TeamCategory = "executive" | "heads" | "engineers" | "business" | "marketing";

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

export interface Department {
  id: string;
  name: string;
  code: string;
  description: string;
  hos: TeamMember[]; // Head of Subsystem(s)
  members: TeamMember[];
}

const placeholderImage = "/images/silhouette.png"; // Replace with your actual silhouette image

export const teamData: Department[] = [
  {
    id: "chassis",
    name: "Chassis",
    code: "DIV_01",
    description: "Primary structural architecture of the AR-04, ensuring maximum torsional rigidity while adhering to stringent weight reduction targets.",
    hos: [
      {
        id: "hos-chassis-1",
        name: "Julian Vickers",
        role: "Head of Chassis",
        focus: "Structural Integrity & Composite Optimization",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGaAUZFib8e68JQX6OgQ30dx4D6upjc2FwVomgsbnj9hbkyINhgzZo-MJ8poqldxbTfr6sDYkAoHDau4VD7xV_WkR9JfQFjh90C6EvDu3Ym25p2IxIsc4Ge7L2tFklq4Sixn3silpApG6d9z9HocRV5kYZ86erecjCE7-faltvWYlBJwsjEtWyG-RMc_xA0FIx4voiVENB5i9fWRJp5zr77B8gWxAyVUVdP3ZeZaaUeWMwN4IJleT_W4Pp3yZ1NGAcNSld2mVnvrPA",
        experience: "4 Seasons",
      }
    ],
    members: Array.from({ length: 9 }).map((_, i) => ({
      id: `mem-chassis-${i + 1}`,
      name: `Chassis Member ${i + 1}`,
      role: `Engineer`,
      focus: `Chassis Core Task ${i + 1}`,
      image: placeholderImage,
    })),
  },
  {
    id: "electricals",
    name: "Electricals",
    code: "DIV_02",
    description: "High-voltage distribution, telemetry architectures, and powertrain logic controllers ensuring seamless digital-mechanical sync.",
    hos: [
      {
        id: "hos-electricals-1",
        name: "Electricals Head",
        role: "Head of Electricals",
        focus: "Systems Integration & DAQ",
        image: placeholderImage,
        experience: "3 Seasons",
      }
    ],
    members: Array.from({ length: 4 }).map((_, i) => ({
      id: `mem-electricals-${i + 1}`,
      name: `Electricals Member ${i + 1}`,
      role: `Engineer`,
      focus: `Circuitry & DAQ Task ${i + 1}`,
      image: placeholderImage,
    })),
  },
  {
    id: "aerodynamics",
    name: "Aerodynamics",
    code: "DIV_03",
    description: "Flow separation analysis, high-downforce aero packages, and drag coefficient minimization through precise CFD logic.",
    hos: [
      {
        id: "hos-aero-1",
        name: "Aerodynamics Head",
        role: "Head of Aerodynamics",
        focus: "CFD & Wind Tunnel Data",
        image: placeholderImage,
        experience: "3 Seasons",
      }
    ],
    members: Array.from({ length: 6 }).map((_, i) => ({
      id: `mem-aero-${i + 1}`,
      name: `Aero Member ${i + 1}`,
      role: `Engineer`,
      focus: `Aerodynamic Surface ${i + 1}`,
      image: placeholderImage,
    })),
  },
  {
    id: "powertrain",
    name: "Powertrain",
    code: "DIV_04",
    description: "Maximum torque deployment, accumulator cooling architectures, and tractive system management.",
    hos: [
      {
        id: "hos-powertrain-1",
        name: "Powertrain Head",
        role: "Head of Powertrain",
        focus: "Electric Thrust & Accumulator",
        image: placeholderImage,
        experience: "4 Seasons",
      }
    ],
    members: Array.from({ length: 8 }).map((_, i) => ({
      id: `mem-powertrain-${i + 1}`,
      name: `Powertrain Member ${i + 1}`,
      role: `Engineer`,
      focus: `Drive Module Task ${i + 1}`,
      image: placeholderImage,
    })),
  },
  {
    id: "vehicle-dynamics",
    name: "Vehicle Dynamics",
    code: "DIV_05",
    description: "Roll centers, anti-dive geometries, and tire slip-angle analysis for absolute track superiority.",
    hos: [
      {
        id: "hos-vd-1",
        name: "Vehicle Dynamics Head",
        role: "Head of Vehicle Dynamics",
        focus: "Kinematics & Suspension",
        image: placeholderImage,
        experience: "4 Seasons",
      }
    ],
    members: Array.from({ length: 6 }).map((_, i) => ({
      id: `mem-vd-${i + 1}`,
      name: `VD Member ${i + 1}`,
      role: `Engineer`,
      focus: `Kinematics Task ${i + 1}`,
      image: placeholderImage,
    })),
  },
  {
    id: "business",
    name: "Business & Management",
    code: "DIV_06",
    description: "Strategic partnerships, resource allocation, logic-driven scaling, and driving the enterprise of the lab.",
    hos: [
      {
        id: "hos-bm-1",
        name: "Business and Management Head",
        role: "Business & Management Head",
        focus: "Strategic Directives",
        image: placeholderImage,
        experience: "4 Seasons",
      },
      {
        id: "hos-bm-2",
        name: "Sponsorship Head",
        role: "Sponsorship Head",
        focus: "Corporate Partnerships",
        image: placeholderImage,
        experience: "3 Seasons",
      },
      {
        id: "hos-bm-3",
        name: "Operations Head",
        role: "Operations Head",
        focus: "Logistics",
        image: placeholderImage,
        experience: "3 Seasons",
      },
      {
        id: "hos-bm-4",
        name: "Finance Head",
        role: "Finance Head",
        focus: "Capital Efficiency",
        image: placeholderImage,
        experience: "3 Seasons",
      }
    ],
    members: Array.from({ length: 6 }).map((_, i) => ({
      id: `mem-bm-${i + 1}`,
      name: `Business Member ${i + 1}`,
      role: `Analyst`,
      focus: `Enterprise Task ${i + 1}`,
      image: placeholderImage,
    })),
  },
  {
    id: "media",
    name: "Media & Marketing",
    code: "DIV_07",
    description: "Brand identity, creative telemetry, media pipelines, and global distribution of the Arion Engineering aesthetic.",
    hos: [
      {
        id: "hos-media-1",
        name: "Media Head",
        role: "Head of Media",
        focus: "Visual Architecture",
        image: placeholderImage,
        experience: "3 Seasons",
      }
    ],
    members: Array.from({ length: 11 }).map((_, i) => ({
      id: `mem-media-${i + 1}`,
      name: `Media Member ${i + 1}`,
      role: `Creative`,
      focus: `Digital Asset Generation ${i + 1}`,
      image: placeholderImage,
    })),
  }
];

export const teamRoster: TeamMember[] = [
  {
    id: "exec-1",
    name: "Marcus Thorne",
    role: "Team Captain",
    focus: "Overall Leadership",
    image: placeholderImage,
    category: "executive",
    department: "Executive Committee",
    domain: "Strategic Direction"
  },
  {
    id: "exec-2",
    name: "Elena Vance",
    role: "Chief Engineer",
    focus: "Technical Direction",
    image: placeholderImage,
    category: "executive",
    department: "Executive Committee",
    domain: "Performance Orchestration"
  },
  ...teamData.flatMap(dept => dept.hos.map(h => ({
    ...h,
    category: "heads" as TeamCategory,
    department: dept.name,
    domain: "Subsystem Directives",
  }))),
  ...teamData.flatMap(dept => dept.members.map(m => ({
    ...m,
    category: (dept.id === 'business' ? 'business' : dept.id === 'media' ? 'marketing' : 'engineers') as TeamCategory,
    department: dept.name,
    domain: dept.name + " Operations",
    funLine: "🔥 Fueling the beast",
    image: undefined,
  })))
];
