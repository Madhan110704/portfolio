export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  icon: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'pcb',
    number: '01',
    title: 'PCB Design',
    icon: 'cpu',
    skills: [
      'KiCad', 'Altium Designer', 'Proteus',
      'Schematic Capture', 'PCB Layout',
      '2-Layer PCB', '4-Layer PCB', 'RF Layout',
      'Component Selection', 'Footprint Selection',
      'ERC', 'DRC', '3D Visualization',
      'SMD', 'THT', 'Thermal & EMI Mitigation', 'Gerber Documentation',
    ],
  },
  {
    id: 'mcu',
    number: '02',
    title: 'MCU & Hardware Domains',
    icon: 'microchip',
    skills: [
      'STM32WB55CEU6', 'STM32F103C8T6',
      'ESP32', 'Arduino',
      'Battery Systems', 'Solar Integration',
      'Sensors (Biomedical, Gas, Motion)',
      'Multimeter', 'Oscilloscope',
    ],
  },
  {
    id: 'embedded',
    number: '03',
    title: 'Embedded & IoT Systems',
    icon: 'radio',
    skills: [
      'Embedded C', 'Interrupt-driven Firmware',
      'UART', 'SPI', 'I²C', 'SWD',
      'Bluetooth', 'Wi-Fi', 'GSM/GPS',
      'ThingSpeak IoT', 'Arduino IDE',
    ],
  },
  {
    id: 'vlsi',
    number: '04',
    title: 'VLSI & Digital Design',
    icon: 'layers',
    skills: [
      'Verilog HDL', 'VHDL',
      'ModelSim', 'Cadence Virtuoso',
      'Xilinx Vivado', 'RTL Design',
      'Approximate Arithmetic', 'Synthesis',
    ],
  },
  {
    id: 'rf',
    number: '05',
    title: 'RF & Antenna Simulation',
    icon: 'activity',
    skills: [
      'CST Microwave Studio', 'HFSS',
      'Metasurface Antennas', 'UWB (3.1–10.6 GHz)',
      '60 GHz mmWave', 'S11 Return Loss',
      'Radiation Gain & Directivity', 'MATLAB',
    ],
  },
  {
    id: 'programming',
    number: '06',
    title: 'Languages & Compute',
    icon: 'code',
    skills: ['C', 'Embedded C', 'C++', 'Python', 'Verilog HDL', 'VHDL', 'MATLAB'],
  },
];
