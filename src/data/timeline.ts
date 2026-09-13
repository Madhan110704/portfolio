export interface TimelineItem {
  id: string;
  type: 'education' | 'experience';
  year: string;
  title: string;
  institution: string;
  location?: string;
  detail: string;
  tags?: string[];
  highlights?: string[];
}

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 'school-x',
    type: 'education',
    year: '2020',
    title: 'Class X',
    institution: 'Jaihind Matriculation School',
    detail: '98.8%',
    tags: ['Secondary Education'],
  },
  {
    id: 'school-xii',
    type: 'education',
    year: '2022',
    title: 'Class XII',
    institution: 'Jaihind Matriculation School',
    detail: '86.5%',
    tags: ['Higher Secondary Education'],
  },
  {
    id: 'be-ece',
    type: 'education',
    year: '2022 – 2026',
    title: 'B.E. Electronics & Communication Engineering',
    institution: 'Meenakshi Sundararajan Engineering College',
    location: 'Chennai',
    detail: 'CGPA: 8.49 / 10',
    tags: ['ECE', 'Anna University'],
    highlights: [
      'Specialized in multi-layer PCB design, RF/antenna systems, and embedded hardware',
      'Strong academic foundation across circuit theory, digital VLSI, and communication',
    ],
  },
  {
    id: 'nsic-vlsi',
    type: 'experience',
    year: '2025',
    title: 'VLSI Engineering Intern',
    institution: 'NSIC',
    detail: 'Internship',
    tags: ['VLSI', 'Verilog', 'FPGA'],
    highlights: [
      'Designed and simulated 8+ digital RTL modules in Verilog HDL (adders, MUX, counters)',
      'Performed functional testbench verification with ModelSim',
      'Implemented synthesis and FPGA bitstream flows in Xilinx Vivado',
    ],
  },
  {
    id: 'qmos-intern',
    type: 'experience',
    year: 'Dec 2025 – Feb 2026',
    title: 'Embedded Systems & Hardware Intern',
    institution: 'QMOS Technology',
    location: 'Chennai',
    detail: 'Internship',
    tags: ['Embedded', 'PCB', 'Hardware'],
    highlights: [
      'Developed interrupt-driven firmware for ESP32 and Arduino across UART, SPI, and I²C',
      'Simulated PCB designs in Proteus & Altium; debugged with oscilloscope and multimeter',
      'Conducted RTL design & MATLAB validation for approximate arithmetic architectures',
    ],
  },
];
