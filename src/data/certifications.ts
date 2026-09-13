export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: string;
  imageKey?: string;
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'nptel-cmos',
    title: 'CMOS Digital VLSI Design',
    issuer: 'NPTEL',
    category: 'VLSI',
  },
  {
    id: 'nptel-vlsi-flow',
    title: 'VLSI Design Flow (RTL to GDS)',
    issuer: 'NPTEL',
    category: 'VLSI',
  },
  {
    id: 'nptel-micro',
    title: 'Microprocessor & Microcontroller',
    issuer: 'NPTEL',
    category: 'Embedded',
  },
  {
    id: 'amd-vitis',
    title: 'Vitis Platform Webinar',
    issuer: 'AMD–Xilinx',
    category: 'FPGA',
  },
  {
    id: 'amd-zynq',
    title: 'Zynq MPSoC Architecture',
    issuer: 'AMD–Xilinx',
    category: 'FPGA',
  },
  {
    id: 'matlab-signal',
    title: 'Signal Processing OnRamp',
    issuer: 'MATLAB',
    category: 'Simulation',
  },
  {
    id: 'matlab-image',
    title: 'Image Processing OnRamp',
    issuer: 'MATLAB',
    category: 'Simulation',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'hackz2024',
    title: 'Top 20 / 3,500 Teams',
    subtitle: 'Hackz2024 — CEG Anna University',
    description: 'Ranked in the top 20 out of 3,500 competing teams at the Anna University national-level hackathon.',
    icon: 'trophy',
  },
  {
    id: 'placement-coord',
    title: 'Placement Coordinator',
    subtitle: 'MSEC Placement Cell',
    description: 'Served as Placement Coordinator, facilitating campus recruitment drives and student–industry engagement.',
    icon: 'users',
  },
  {
    id: 'symposium-coord',
    title: 'Symposium Coordinator',
    subtitle: 'Technical Symposium',
    description: 'Coordinated technical symposium events, managing scheduling, participant engagement and logistics.',
    icon: 'star',
  },
];
