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
    tags: ['BE', 'ECE', 'Anna University'],
    highlights: [
      'PCB Design & Hardware Development',
      'RF & Antenna Design',
      'Embedded Systems',
      'VLSI & Digital Design',
      'IoT Systems',
    ],
  },
  {
    id: 'nsic-vlsi',
    type: 'experience',
    year: '2025',
    title: 'VLSI Intern',
    institution: 'NSIC',
    detail: 'Internship',
    tags: ['VLSI', 'Verilog', 'FPGA'],
    highlights: [
      'Designed and verified 8+ digital modules',
      'MUX, adders, counters in Verilog HDL',
      'RTL simulation with ModelSim',
      'FPGA implementation on Xilinx Vivado',
      'RTL synthesis and timing verification',
    ],
  },
  {
    id: 'qmos-intern',
    type: 'experience',
    year: 'Dec 2025 – Feb 2026',
    title: 'Embedded Systems & VLSI Intern',
    institution: 'QMOS Technology',
    location: 'Chennai',
    detail: 'Internship',
    tags: ['Embedded', 'PCB', 'VLSI', 'IoT'],
    highlights: [
      'ESP32 & Arduino sensor integration (5+ sensors)',
      'GPIO, ADC, timers & interrupt-driven firmware',
      'UART, SPI, I²C communication protocols',
      'PCB simulation with Proteus & Altium Designer',
      'Hardware debugging with multimeter & oscilloscope',
      'RTL design & approximate full-adder research',
      'MATLAB image processing validation',
    ],
  },
];
