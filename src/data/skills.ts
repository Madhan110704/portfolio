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
      'KiCad', 'Altium Designer', 'Multi-Layer PCB Layout', 'Schematic Capture', 'ERC & DRC Verification',
      'Proteus', '2-Layer PCB', '4-Layer PCB', 'RF Layout', 'Component & Footprint Selection',
      '3D Clearance Visualization', 'SMD & THT Routing', 'Thermal & EMI Mitigation', 'Gerber Documentation',
    ],
  },
  {
    id: 'mcu',
    number: '02',
    title: 'MCU / Hardware',
    icon: 'microchip',
    skills: [
      'STM32WB55 (BLE/RF)', 'STM32F103 (Arm Cortex-M3)', 'ESP32 (Wi-Fi/BLE)', 'Hardware Debugging',
      'Arduino', 'Battery Systems', 'Solar Integration', 'Biomedical & Environmental Sensors',
      'Oscilloscope & Multimeter',
    ],
  },
  {
    id: 'embedded',
    number: '03',
    title: 'Communication / Embedded',
    icon: 'radio',
    skills: [
      'Embedded C', 'Interrupt-Driven Firmware', 'UART / SPI / I²C', 'Tag-Connect & SWD',
      'Bluetooth LE', 'Wi-Fi Protocols', 'GSM/GPS Interfacing', 'ThingSpeak Cloud IoT', 'Arduino IDE',
    ],
  },
  {
    id: 'vlsi',
    number: '04',
    title: 'VLSI / EDA',
    icon: 'layers',
    skills: [
      'Verilog HDL', 'Xilinx Vivado', 'ModelSim', 'RTL Design & Synthesis',
      'Cadence Virtuoso', 'Approximate Arithmetic', 'VHDL', 'FPGA Prototyping',
    ],
  },
  {
    id: 'rf',
    number: '05',
    title: 'RF / Simulation',
    icon: 'activity',
    skills: [
      'CST Microwave Studio', 'HFSS', 'Metasurface Antennas', '60 GHz mmWave & UWB',
      'S11 Return Loss Optimization', 'Far-Field Radiation & Gain', 'Equivalent LC Modeling', 'MATLAB',
    ],
  },
  {
    id: 'programming',
    number: '06',
    title: 'Programming',
    icon: 'code',
    skills: [
      'Embedded C', 'C', 'Verilog HDL', 'Python',
      'C++', 'VHDL', 'MATLAB',
    ],
  },
];
