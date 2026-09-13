import { ASSETS } from './assets.config';

export type ProjectCategory = 'PCB' | 'EMBEDDED' | 'RF' | 'VLSI' | 'IOT';

export interface ProjectMedia {
  hero: string;
  schematic?: string;
  architecture?: string;
  pcbTop?: string;
  pcbBottom?: string;
  layer1?: string;
  layer2?: string;
  layer3?: string;
  layer4?: string;
  rfSection?: string;
  rfMatching?: string;
  renderFront?: string;
  renderRear?: string;
  gallery?: { src: string; alt: string; caption: string }[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  domain: string[];
  categories: ProjectCategory[];
  technologies: string[];
  specs: { label: string; value: string }[];
  description: string;
  highlights: string[];
  featured: boolean;
  media: ProjectMedia;
  caseStudy: {
    overview: string;
    objective: string;
    architecture?: string;
    designApproach?: string;
    schematicDesc?: string;
    pcbDesignDesc?: string;
    layerStructureDesc?: string;
    rfDesignDesc?: string;
    verificationDesc?: string;
    resultsDesc?: string;
    tools: string[];
    takeaways?: string[];
    githubUrl?: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'stm32wb55',
    number: '01',
    title: 'STM32WB55CEU6 Wireless & RF PCB',
    tagline: '4-Layer PCB • KiCad • RF / Wireless',
    domain: ['PCB Design', 'RF & Wireless'],
    categories: ['PCB'],
    technologies: ['KiCad', 'STM32WB55CEU6', '4-Layer PCB', 'RF / Wireless', 'PCB Design'],
    specs: [
      { label: 'MCU', value: 'STM32WB55CEU6' },
      { label: 'Layers', value: '4-Layer PCB Stack-up' },
      { label: 'Power', value: 'MIC5365 5V-to-3.3V LDO' },
      { label: 'RF Section', value: 'u.FL Connector + Matching Network' },
      { label: 'Interface', value: 'USB-C Power / Input' },
      { label: 'Debug', value: 'Tag-Connect SWD Interface' },
      { label: 'Clocks', value: '32 MHz HSE + 32.768 kHz LSE' },
      { label: 'Control', value: 'BOOT0 Switch + UART Header' },
    ],
    description:
      'Designed a custom 4-layer STM32WB55CEU6-based wireless and RF PCB in KiCad, covering schematic design, component selection, PCB layout, routing, and 3D visualization.',
    highlights: [
      'STM32WB55CEU6 wireless MCU integration',
      '4-layer PCB stack-up with dedicated ground and power planes',
      'USB-C power and input interface with ESD protection considerations',
      'MIC5365 5V-to-3.3V voltage regulation circuit',
      'u.FL RF connector with impedance-controlled RF matching network',
      'Tag-Connect SWD programming and debug interface',
      'UART communication header and BOOT0 selection switch',
      '32 MHz HSE crystal and 32.768 kHz LSE crystal oscillators',
      'Fiducial markers and M2.5 mounting holes for mechanical alignment',
      'Multi-layer PCB routing and full 3D clearance visualization in KiCad',
    ],
    featured: true,
    media: {
      hero: '/images/projects/stm32wb/3d-model.png',
      architecture: '/images/projects/stm32wb/systemarchitecture.png',
      pcbTop: '/images/projects/stm32wb/pcb-layout.png',
      schematic: '/images/projects/stm32wb/schematic.png',
      layer1: '/images/projects/stm32wb/layer1.png',
      layer2: '/images/projects/stm32wb/layer2.png',
      layer3: '/images/projects/stm32wb/layer3.png',
      layer4: '/images/projects/stm32wb/layer4.png',
      renderFront: '/images/projects/stm32wb/3d-model.png',
      gallery: [
        {
          src: '/images/projects/stm32wb/3d-model.png',
          alt: '3D PCB View of the STM32WB55CEU6 4-layer PCB',
          caption: '3D visualization of the STM32WB55CEU6 PCB design.',
        },
        {
          src: '/images/projects/stm32wb/pcb-layout.png',
          alt: 'Complete PCB Layout in KiCad',
          caption: 'Complete PCB layout showing component placement and multi-layer routing.',
        },
        {
          src: '/images/projects/stm32wb/systemarchitecture.png',
          alt: 'System architecture of the STM32WB55CEU6 wireless and RF development board',
          caption: 'System architecture showing MCU, power, RF, clock, and debug interfaces.',
        },
        {
          src: '/images/projects/stm32wb/schematic.png',
          alt: 'Complete Schematic in KiCad',
          caption: 'STM32WB55CEU6 schematic showing power, USB-C, clock, SWD and RF connectivity.',
        },
        {
          src: '/images/projects/stm32wb/layer1.png',
          alt: 'Layer 1 (Signal)',
          caption: '4-layer PCB stackup: L1 Signal (top routing & RF front-end).',
        },
        {
          src: '/images/projects/stm32wb/layer2.png',
          alt: 'Layer 2 (Ground)',
          caption: '4-layer PCB stackup: L2 Ground (unbroken reference plane).',
        },
        {
          src: '/images/projects/stm32wb/layer3.png',
          alt: 'Layer 3 (Ground)',
          caption: '4-layer PCB stackup: L3 Ground (internal reference shield).',
        },
        {
          src: '/images/projects/stm32wb/layer4.png',
          alt: 'Layer 4 (Signal)',
          caption: '4-layer PCB stackup: L4 Signal (bottom routing & copper fill).',
        },
      ],
    },
    caseStudy: {
      overview:
        'Designed a custom 4-layer wireless development board in KiCad based on the STM32WB55CEU6 dual-core MCU (Arm Cortex-M4 and Cortex-M0+ for dedicated 2.4 GHz BLE/RF). The design encompasses component selection, power regulation, RF matching, and high-density multi-layer routing.',
      objective:
        'Implement an ultra-compact RF development board featuring a 50 Ω matched RF front-end, stable 3.3V LDO regulation, USB-C power delivery, and low-profile Tag-Connect SWD debugging.',
      architecture:
        'System architecture showing the STM32WB55CEU6 MCU, power management, RF front-end, clock sources, programming/debug interfaces, UART, and user controls.',
      designApproach:
        'Hierarchical schematic organization in KiCad with isolated functional blocks. Component layout prioritized RF path symmetry and oscillator proximity before routing power delivery and general I/O traces.',
      schematicDesc:
        'Complete circuit schematic integrating MIC5365 3.3V LDO regulation, USB-C input, Tag-Connect SWD port, dual crystal oscillators, and RF filter circuitry.',
      pcbDesignDesc:
        'Multi-layer board routing in KiCad with controlled-impedance RF geometry, unbroken internal ground reference planes, and perimeter via shielding.',
      layerStructureDesc:
        '4-Layer Stack-up: L1 — Signal (Top routing & RF front-end), L2 — Ground (Continuous ground plane), L3 — Ground (Internal reference shield), L4 — Signal (Bottom routing & digital ground fill).',
      tools: [
        'KiCad',
        'STM32WB55CEU6',
        '4-Layer PCB',
        'RF / Wireless',
        'USB-C',
        'MIC5365',
        'u.FL',
        'Tag-Connect',
      ],
      takeaways: [
        'RF front-end layout',
        'Impedance control',
        'Power delivery design',
        '4-layer stackup planning',
        'Tag-Connect integration',
        '3D clearance review',
      ],
      githubUrl: 'https://github.com/Madhan110704/STM32WB55-PCB',
    },
  },

  {
    id: 'stm32f103',
    number: '02',
    title: 'STM32F103C8T6 Custom Development Board',
    tagline: '2-Layer Custom Dev Board with Full Debug & Peripheral Access',
    domain: ['PCB Design', 'Embedded Hardware'],
    categories: ['PCB', 'EMBEDDED'],
    technologies: ['KiCad', 'STM32F103C8T6', '2-Layer PCB', 'USB Micro-B', 'SWD'],
    specs: [
      { label: 'MCU', value: 'STM32F103C8T6' },
      { label: 'Layers', value: '2-Layer PCB' },
      { label: 'Power', value: 'AMS1117-3.3V LDO' },
      { label: 'Clock', value: '8 MHz Crystal' },
      { label: 'USB', value: 'USB Micro-B' },
      { label: 'Debug', value: 'SWD Header' },
      { label: 'Interfaces', value: 'UART, I²C, GPIO' },
    ],
    description:
      'Designed a custom STM32F103C8T6 development board in KiCad, covering schematic design, component selection, PCB placement, routing, and 3D visualization.',
    highlights: [
      'STM32F103C8T6 32-bit Arm Cortex-M3 MCU',
      'AMS1117-3.3V power regulation from USB input',
      '8 MHz external crystal oscillator circuit',
      'SWD debug header for programming and debugging',
      'BOOT and RESET control switches',
      'Dedicated UART and I²C breakout headers',
      'Onboard power and status indicator LEDs',
      '2-layer PCB layout with 3D visualization',
    ],
    featured: true,
    media: {
      hero: '/images/projects/stm32f1/3d.png',
      renderFront: '/images/projects/stm32f1/3d.png',
      pcbTop: '/images/projects/stm32f1/pcblayout.png',
      architecture: '/images/projects/stm32f1/systemarchitecture.png',
      schematic: '/images/projects/stm32f1/schematic.png',
      layer1: '/images/projects/stm32f1/layer1.png',
      layer2: '/images/projects/stm32f1/layer2.png',
      gallery: [
        {
          src: '/images/projects/stm32f1/3d.png',
          alt: '3D Visualization',
          caption: '3D visualization of the STM32F103C8T6 development board.',
        },
        {
          src: '/images/projects/stm32f1/pcblayout.png',
          alt: 'PCB Layout',
          caption: 'Complete PCB layout showing component placement and routing.',
        },
        {
          src: '/images/projects/stm32f1/systemarchitecture.png',
          alt: 'System Architecture',
          caption: 'System architecture of the STM32F103C8T6 development board.',
        },
        {
          src: '/images/projects/stm32f1/schematic.png',
          alt: 'Schematic',
          caption: 'STM32F103C8T6 schematic showing power, clock, programming, and peripheral interfaces.',
        },
        {
          src: '/images/projects/stm32f1/layer1.png',
          alt: 'Top Copper Layer (F.Cu)',
          caption: 'Top copper layer (F.Cu) routing and component connections.',
        },
        {
          src: '/images/projects/stm32f1/layer2.png',
          alt: 'Bottom Copper Layer (B.Cu)',
          caption: 'Bottom copper layer (B.Cu) routing and copper features.',
        },
      ],
    },
    caseStudy: {
      overview:
        'Designed a custom STM32F103C8T6 development board in KiCad, covering schematic design, component selection, PCB placement, routing, and 3D visualization.',
      objective:
        'Implement a reliable 2-layer STM32F103C8T6 development board with onboard 3.3V regulation, crystal clock source, SWD debug header, and labeled peripheral breakouts for development and prototyping.',
      architecture:
        'System architecture showing the STM32F103C8T6 MCU, power supply, clock source, programming interface, communication interfaces, and user controls.',
      designApproach:
        'Schematic design organized into functional domains: power regulation, microcontroller core, clock generation, programming header, and peripheral breakouts. Layout prioritizes decoupling capacitor placement adjacent to MCU supply pins, short crystal trace routing, and accessible header pinout along the board edges.',
      schematicDesc:
        'STM32F103C8T6 schematic showing power, clock, programming, and peripheral interfaces.',
      pcbDesignDesc:
        'Complete PCB layout showing component placement and routing across the 2-layer board.',
      layerStructureDesc:
        '2-layer PCB stackup showing the top and bottom copper layers.',
      tools: ['KiCad', 'STM32F103C8T6', '2-Layer PCB', 'AMS1117-3.3', 'USB Micro-B', 'SWD', 'UART', 'I²C'],
      takeaways: [
        'Schematic capture and design rule verification',
        'Component selection and footprint assignment',
        '2-layer PCB placement and trace routing',
        'SMD and through-hole component integration',
        'Board-edge connector placement and silkscreen labeling',
        '3D board clearance verification',
      ],
      githubUrl: 'https://github.com/Madhan110704/STM32F103-DevBoard',
    },
  },

  {
    id: 'uwb-antenna',
    number: '03',
    title: 'Wideband 60 GHz Metasurface Antenna',
    tagline: 'Stacked CSRR/RSRR Metasurface with Dumbbell DGS',
    domain: ['RF / Antenna Design', 'EM Simulation'],
    categories: ['RF'],
    technologies: [
      'CST Studio Suite',
      '60 GHz',
      'Metasurface',
      'CSRR',
      'RSRR',
      'DGS',
      'RF / Antenna',
    ],
    specs: [
      { label: 'Band', value: '51.3–61.6 GHz (−12 dB)' },
      { label: 'Fractional BW', value: '≈18.25%' },
      { label: 'Center Freq', value: '56.45 GHz' },
      { label: 'Realized Gain', value: '8.84 dBi (60 GHz) | 6.36 dBi (56 GHz)' },
      { label: 'Efficiency', value: '≈88% (Simulated Max)' },
      { label: 'VSWR', value: '< 2 (Operating Band)' },
      { label: 'Dimensions', value: '25 mm × 25 mm' },
      { label: 'Substrate', value: 'Rogers RT/Duroid 5880' },
      { label: 'Validation', value: 'Simulated Performance' },
      { label: 'Tool', value: 'CST Studio Suite' },
    ],
    description:
      'Wideband 60 GHz metasurface antenna using stacked CSRR/RSRR patches, patch-via-wall loading, and a dumbbell-shaped DGS.',
    highlights: [
      '4×4 metasurface array loaded with Circular Split-Ring Resonators (CSRRs)',
      'Stacked rectangular patch layer with RSRR loading positioned beneath the top metasurface',
      'Metallic via-wall field confinement and capacitive enhancement',
      'Dumbbell-shaped Defected Ground Structure (DGS) for secondary resonance',
      'Keyhole-shaped 50 Ω microstrip feedline on bottom copper layer',
      '51.3–61.6 GHz impedance bandwidth (|S11| < −12 dB, FBW ≈ 18.25%)',
      'Peak realized gain of 8.84 dBi at 60 GHz and 6.36 dBi at 56 GHz',
      'Maximum radiation efficiency of ≈88% with broadside radiation',
    ],
    featured: true,
    media: {
      hero: '/images/projects/uwb-antenna/fig_3d_exploded.png',
      renderFront: '/images/projects/uwb-antenna/fig_3d_exploded.png',
      architecture: '/images/projects/uwb-antenna/fig_cross_section.png',
      schematic: '/images/projects/uwb-antenna/fig_top_metasurface.png',
      pcbTop: '/images/projects/uwb-antenna/fig_s11_final.png',
      gallery: [
        {
          src: '/images/projects/uwb-antenna/fig_3d_exploded.png',
          alt: 'Antenna 3D Exploded View',
          caption: 'Exploded 3D view showing the 4×4 CSRR metasurface, stacked rectangular patch layer with RSRR loading, substrates, dumbbell DGS, and keyhole feed.',
        },
        {
          src: '/images/projects/uwb-antenna/fig_top_metasurface.png',
          alt: 'Top Metasurface Layout',
          caption: 'Top metasurface layer featuring 4×4 square patches loaded with circular split-ring resonators (CSRRs).',
        },
        {
          src: '/images/projects/uwb-antenna/fig_unit_cell_csrr.png',
          alt: 'CSRR Unit Cell Geometry',
          caption: 'Detailed geometry and dimensions of the single CSRR-loaded metasurface unit cell.',
        },
        {
          src: '/images/projects/uwb-antenna/fig_stacked_rsrr.png',
          alt: 'Stacked Rectangular Patches with RSRR Loading',
          caption: 'Stacked rectangular patch layer with RSRR loading positioned beneath the top metasurface array.',
        },
        {
          src: '/images/projects/uwb-antenna/fig_cross_section.png',
          alt: 'Multilayer Cross-Section',
          caption: 'Cross-sectional architecture showing the 3 Rogers RT/Duroid 5880 substrates and 7 functional layers.',
        },
        {
          src: '/images/projects/uwb-antenna/fig_dgs_groundplane.png',
          alt: 'Dumbbell DGS Ground Plane',
          caption: 'Dumbbell-shaped defected ground structure (DGS) etched into the intermediate ground plane.',
        },
        {
          src: '/images/projects/uwb-antenna/fig_keyhole_feed.png',
          alt: 'Keyhole Microstrip Feedline',
          caption: 'Keyhole-shaped 50 Ω microstrip feedline on the bottom substrate layer.',
        },
        {
          src: '/images/projects/uwb-antenna/fig_s11_comparison.png',
          alt: 'Six-Configuration S11 Evolution',
          caption: 'Simulated S11 comparison across all six evolutionary design configurations.',
        },
        {
          src: '/images/projects/uwb-antenna/fig_vswr_comparison.png',
          alt: 'Six-Configuration VSWR Evolution',
          caption: 'Simulated VSWR comparison across all six evolutionary design configurations.',
        },
        {
          src: '/images/projects/uwb-antenna/fig_s11_final.png',
          alt: 'Final S11 Return Loss',
          caption: 'Final simulated S11 return loss showing −12 dB impedance bandwidth from 51.3 to 61.6 GHz (FBW ≈ 18.25%).',
        },
        {
          src: '/images/projects/uwb-antenna/fig_vswr_final.png',
          alt: 'Final VSWR',
          caption: 'Final simulated VSWR maintaining < 2 across the 51.3–61.6 GHz operating band.',
        },
        {
          src: '/images/projects/uwb-antenna/fig_current_56ghz.png',
          alt: 'Surface Current at 56 GHz',
          caption: 'Simulated surface current distribution at 56 GHz showing concentration around CSRR rings and via walls.',
        },
        {
          src: '/images/projects/uwb-antenna/fig_current_60ghz.png',
          alt: 'Surface Current at 60 GHz',
          caption: 'Simulated surface current distribution at 60 GHz showing strong excitation across the metasurface array.',
        },
        {
          src: '/images/projects/uwb-antenna/fig_eplane_56ghz.png',
          alt: 'E-Plane Radiation Pattern at 56 GHz',
          caption: 'Simulated 2D polar E-plane radiation pattern at 56 GHz showing broadside directivity.',
        },
        {
          src: '/images/projects/uwb-antenna/fig_hplane_56ghz.png',
          alt: 'H-Plane Radiation Pattern at 56 GHz',
          caption: 'Simulated 2D polar H-plane radiation pattern at 56 GHz.',
        },
        {
          src: '/images/projects/uwb-antenna/fig_eplane_60ghz.png',
          alt: 'E-Plane Radiation Pattern at 60 GHz',
          caption: 'Simulated 2D polar E-plane radiation pattern at 60 GHz exhibiting peak directional gain.',
        },
        {
          src: '/images/projects/uwb-antenna/fig_hplane_60ghz.png',
          alt: 'H-Plane Radiation Pattern at 60 GHz',
          caption: 'Simulated 2D polar H-plane radiation pattern at 60 GHz.',
        },
        {
          src: '/images/projects/uwb-antenna/fig_gain_vs_freq.png',
          alt: 'Realized Gain vs Frequency',
          caption: 'Simulated realized gain vs. frequency (6.36 dBi at 56 GHz, 8.84 dBi at 60 GHz).',
        },
        {
          src: '/images/projects/uwb-antenna/fig_efficiency.png',
          alt: 'Radiation and Total Efficiency',
          caption: 'Simulated radiation efficiency (peaking at ≈88%) and total efficiency across the operating band.',
        },
      ],
    },
    caseStudy: {
      overview:
        'The antenna uses a 4×4 metasurface array, circular split-ring resonators (CSRRs) on the top patches, a stacked rectangular patch layer with RSRR loading, metallic via walls, three Rogers RT/Duroid 5880 dielectric substrates, a dumbbell-shaped defected ground structure, and a keyhole-shaped microstrip feed. The design is intended for the 60 GHz millimeter-wave region.',
      objective:
        'Investigate whether integrating CSRR/RSRR metamaterial unit cells, stacked rectangular patches with RSRR loading, metallic via walls, and a dumbbell DGS can broaden impedance bandwidth and enhance broadside gain across the 60 GHz millimeter-wave band while maintaining a compact 25 mm × 25 mm footprint.',
      architecture:
        'Seven functional layers comprising three Rogers RT/Duroid 5880 substrates, top 4×4 CSRR metasurface layer, stacked rectangular patch layer with RSRR loading, dumbbell DGS ground plane, and bottom keyhole microstrip feedline.',
      designApproach:
        'Final configuration: 4×4 CSRR-loaded metasurface patches + stacked rectangular patches with RSRR loading + patch-via-wall structure + dumbbell-shaped DGS + keyhole microstrip feed. The stacked patches and RSRRs contribute additional capacitive/resonant loading that helps control resonance and broaden the impedance bandwidth.',
      tools: [
        'CST Studio Suite',
        'Rogers RT/Duroid 5880',
        '60 GHz mmWave',
        'Metasurface',
        'CSRR / RSRR',
        'Dumbbell DGS',
      ],
      takeaways: [
        'Metasurface array design and split-ring resonator loading',
        'Defected Ground Structure (DGS) impedance matching',
        'Full 3D electromagnetic simulation in CST Studio Suite',
        'Multilayer dielectric stackup planning with Rogers RT/Duroid 5880',
        'Parametric resonance and equivalent LC model analysis',
        'Far-field radiation pattern, gain, and efficiency optimization',
      ],
    },
  },

  {
    id: 'approx-adder',
    number: '04',
    title: 'Energy-Efficient Approximate Full Adders',
    tagline: 'Low-Power Approximate Arithmetic for Error-Tolerant Workloads',
    domain: ['VLSI / Digital Design', 'Low-Power Computing'],
    categories: ['VLSI'],
    technologies: ['Verilog HDL', 'ModelSim', 'MATLAB', 'Cadence', 'Xilinx Vivado'],
    specs: [
      { label: 'Design Variants', value: 'RCPFA-IV/V, ERPFA-III/IV' },
      { label: 'Architecture', value: '8-Bit Hybrid Approximate Adder' },
      { label: 'Dynamic Energy', value: '18–26% reduction (reported)' },
      { label: 'Static Leakage', value: 'Up to 35% reduction (reported)' },
      { label: 'Image Benchmark', value: 'PSNR 49–53 dB (MATLAB)' },
      { label: 'Language', value: 'Verilog HDL' },
      { label: 'Verification', value: 'ModelSim & MATLAB' },
    ],
    description:
      'Low-power approximate arithmetic architectures for error-tolerant computing workloads.',
    highlights: [
      'Architected low-power approximate arithmetic designs (RCPFA-IV/V, ERPFA-III/IV variants)',
      '8-bit hybrid adder combining approximate stages for error-tolerant workloads with exact overflow detection',
      'Reported results: 18–26% dynamic energy reduction and up to 35% static leakage power reduction',
      'Application validation: MATLAB image filtering with PSNR 49–53 dB (imperceptible quality loss)',
      'Verilog HDL implementation with ModelSim functional verification',
    ],
    featured: true,
    media: {
      hero: '/images/projects/approx-adder/adder_vivado_simulation.jpeg',
      architecture: '/images/projects/approx-adder/adder_vivado_simulation.jpeg',
      schematic: '/images/projects/approx-adder/adder_matlab_validation.jpeg',
      renderFront: '/images/projects/approx-adder/adder_vivado_simulation.jpeg',
      gallery: [
        {
          src: '/images/projects/approx-adder/adder_vivado_simulation.jpeg',
          alt: 'Approximate Adder Vivado Behavioral Simulation',
          caption: 'Figure 15: Vivado behavioral simulation waveform verifying hybrid approximate adder outputs.',
        },
        {
          src: '/images/projects/approx-adder/adder_matlab_validation.jpeg',
          alt: 'MATLAB Gaussian Filtering & Error Analysis',
          caption: 'Figure 16: Gaussian image filtering validation and error metrics analysis in MATLAB (PSNR 49–53 dB).',
        },
      ],
    },
    caseStudy: {
      overview:
        'Low-power approximate arithmetic architectures developed for error-tolerant computing workloads. By trading strict numerical accuracy for hardware simplicity in non-critical bit positions, substantial dynamic energy and static leakage power savings are achieved.',
      objective:
        'Design, simulate, and compare approximate full adder variants (RCPFA-IV/V and ERPFA-III/IV), integrating them into an 8-bit hybrid adder that optimizes dynamic energy and static leakage while maintaining acceptable quality in error-resilient applications.',
      architecture:
        '8-bit hybrid adder architecture combining approximate arithmetic stages in lower and intermediate bit positions with exact logic stages for precise overflow detection.',
      designApproach:
        'Each approximate adder variant was modeled in Verilog HDL and simulated in ModelSim. The 8-bit hybrid adder was synthesized and validated using MATLAB image-filtering benchmarks to evaluate signal-to-noise performance (PSNR).',
      schematicDesc:
        'Transistor-level and gate-level hybrid topology of the approximate full adders alongside MATLAB error distribution analysis.',
      resultsDesc:
        'Reported results show 18–26% dynamic energy reduction and up to 35% static leakage power reduction compared to conventional exact adders. MATLAB image filtering achieved 49–53 dB PSNR, demonstrating imperceptible visual quality degradation.',
      tools: ['Verilog HDL', 'ModelSim', 'MATLAB', 'Cadence', 'Xilinx Vivado'],
      takeaways: [
        'Approximate computing concepts for low-power VLSI',
        'Verilog RTL design and functional simulation in ModelSim',
        'Dynamic energy and static leakage power reduction analysis',
        'Error tolerance validation using MATLAB image processing benchmarks',
      ],
      githubUrl: 'https://github.com/Madhan110704/Approximate-Full-Adder',
    },
  },

  {
    id: 'power-converter',
    number: '05',
    title: 'Power Converter PCB',
    tagline: 'Schematic Development, Multi-Layer PCB Layout & Thermal Optimization',
    domain: ['Power Electronics', 'PCB Design'],
    categories: ['PCB'],
    technologies: ['Altium Designer', 'Multi-Layer PCB', 'EMI Optimization', 'Thermal Management', 'Gerber'],
    specs: [
      { label: 'Topology', value: 'Power Converter' },
      { label: 'Tool', value: 'Altium Designer' },
      { label: 'Stackup', value: 'Multi-Layer PCB' },
      { label: 'Optimization', value: 'Thermal & EMI Mitigation' },
      { label: 'Documentation', value: '3D Board Visualization' },
      { label: 'Deliverable', value: 'Fabrication-Ready Gerber Files' },
    ],
    description:
      'Power converter PCB design covering schematic development, component optimization, PCB layout, and 3D documentation.',
    highlights: [
      'Complete schematic design from topology selection through component optimization',
      'Multi-layer PCB layout with routing optimization for minimal EMI and thermal management',
      'Strategic polygon copper pours and thermal vias for high-current dissipation',
      'Advanced design documentation: 3D board visualization and fabrication-ready Gerber files',
      'Designed and validated in Altium Designer / EDA suite',
    ],
    featured: true,
    media: {
      hero: '/images/projects/power-converter/power_converter_3d_pcb.png',
      pcbTop: '/images/projects/power-converter/power_converter_pcb_layout.png',
      schematic: '/images/projects/power-converter/power_converter_schematic.png',
      renderFront: '/images/projects/power-converter/power_converter_3d_pcb.png',
      gallery: [
        {
          src: '/images/projects/power-converter/power_converter_schematic.png',
          alt: 'Power Converter Schematic Design',
          caption: 'Circuit schematic of the power converter design in Altium Designer.',
        },
        {
          src: '/images/projects/power-converter/power_converter_pcb_layout.png',
          alt: 'Power Converter PCB Layout',
          caption: 'PCB layout of the power converter design.',
        },
        {
          src: '/images/projects/power-converter/power_converter_3d_pcb.png',
          alt: 'Power Converter 3D PCB Visualization',
          caption: '3D board visualization of the power converter PCB with optimized SMD routing.',
        },
      ],
    },
    caseStudy: {
      overview:
        'Power converter PCB design covering schematic development, component optimization, multi-layer layout, and 3D visualization. The layout focuses on minimizing electromagnetic interference (EMI) and managing thermal dissipation across high-current loops.',
      objective:
        'Develop a complete, fabrication-ready power converter PCB in Altium Designer from circuit topology selection and component sizing to thermal routing and manufacturing documentation.',
      designApproach:
        'Component layout isolates high-current switching loops from sensitive feedback traces. Dedicated ground planes and polygon copper fills provide low-impedance return paths and efficient heat spreading.',
      schematicDesc:
        'Complete power converter schematic covering input filtering, power stage switching, output regulation, and feedback circuitry in Altium Designer.',
      pcbDesignDesc:
        'Multi-layer PCB layout with optimized trace widths, polygon planes, and thermal dissipation paths for high-efficiency power delivery.',
      resultsDesc:
        'Comprehensive design documentation generated including 3D board visualization and fabrication-ready Gerber files.',
      tools: ['Altium Designer', 'Multi-Layer PCB', 'Gerber Generation', 'Thermal Management'],
      takeaways: [
        'Power electronics schematic capture and component selection',
        'Multi-layer routing for switching nodes and high-current loops',
        'EMI mitigation and thermal polygon placement',
        'Generating fabrication-ready Gerber and drill packages',
      ],
    },
  },
];

export interface EmbeddedArchiveProject {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  keyFeatures: string[];
  componentsOrTech: string[];
  tags: string[];
  image?: string;
  secondaryImage?: string;
  caption?: string;
}

export const EMBEDDED_PROJECTS: EmbeddedArchiveProject[] = [
  {
    id: 'corridor-lighting',
    number: '07',
    category: 'IoT & Smart Home',
    title: 'Corridor Lighting Control System',
    description:
      'Bluetooth-controlled dual LED corridor system with six operational modes.',
    keyFeatures: [
      'Individual ON/OFF control',
      'Blinking patterns',
      'Simultaneous control',
      'Bluetooth smartphone control',
    ],
    componentsOrTech: ['Color LEDs', 'Resistors', 'Bluetooth module', 'Microcontroller'],
    tags: ['Bluetooth', 'LED Control', 'Microcontroller', 'Prototyping'],
    image: '/images/projects/corridor-lighting/corridor_lighting_setup.jpeg',
    caption: 'Figure 1: Corridor Lighting Control Setup with Mobile Interface',
  },
  {
    id: 'cleaning-robot',
    number: '08',
    category: 'Robotics & Automation',
    title: 'Robotic Cleaning Vehicle',
    description:
      'Bluetooth-controlled cleaning robot with real-time directional control and autonomous obstacle avoidance.',
    keyFeatures: [
      'Bluetooth smartphone control',
      'Forward / reverse / left / right navigation',
      'Interrupt-driven firmware',
      'IR-based obstacle detection',
      'Autonomous path planning',
    ],
    componentsOrTech: ['Arduino', 'L298N motor driver', '4-wheel DC motors', 'IR sensors', 'Bluetooth module'],
    tags: ['Arduino', 'L298N', 'Bluetooth', 'IR Sensors', 'Motor Control'],
    image: '/images/projects/cleaning-robot/cleaning_robot_assembly.jpeg',
    caption: 'Figure 2: Robotic Cleaning Vehicle - Hardware Assembly & Motor Integration',
  },
  {
    id: 'cutting-robot',
    number: '09',
    category: 'Robotics & Automation',
    title: 'Autonomous Cutting Robot',
    description:
      'Robot platform based on the cleaning-robot architecture with a motorized cutter module for autonomous cutting applications.',
    keyFeatures: [
      'Motorized cutting module',
      'Shared mobile robot platform',
      'Real-time directional navigation',
      'Autonomous obstacle avoidance',
    ],
    componentsOrTech: ['Arduino', 'L298N motor driver', 'Motorized cutter module', 'IR sensors', 'Bluetooth module'],
    tags: ['Arduino', 'Robotics', 'Motor Control', 'Automation'],
    image: '/images/projects/cutting-robot/cutting_robot_assembly.jpeg',
    caption: 'Figure 3: Autonomous Cutting Robot with Motorized Cutter Module',
  },
  {
    id: 'mp3-player',
    number: '10',
    category: 'Embedded Systems',
    title: 'MP3 Player Controller',
    description:
      'Hardwired MP3 control interface with dedicated playback and volume controls.',
    keyFeatures: [
      'Next track navigation',
      'Previous track navigation',
      'Volume Up adjustment',
      'Volume Down adjustment',
    ],
    componentsOrTech: ['Arduino microcontroller', 'DFPlayer MP3 module', 'Tactile switches', 'Speaker system'],
    tags: ['Arduino', 'Audio Interface', 'Embedded C', 'Hardware UI'],
    image: '/images/projects/mp3-player/mp3_player_setup.jpeg',
    caption: 'Figure 4: Hardwired MP3 Player Controller with Arduino & Speaker Interface',
  },
  {
    id: 'smoke-gas-alert',
    number: '11',
    category: 'Safety & Monitoring',
    title: 'Smoke & Gas Alert System',
    description:
      'Real-time fire and gas monitoring system using dual sensing and local alerts.',
    keyFeatures: [
      'Smoke detection',
      'Combustible gas detection',
      'Audible buzzer alarm',
      '16×2 LCD sensor readout',
    ],
    componentsOrTech: ['ESP32', 'MQ-series gas sensor', 'Smoke sensor', '16×2 LCD', 'Buzzer'],
    tags: ['ESP32', 'MQ Sensors', '16×2 LCD', 'Safety Systems'],
    image: '/images/projects/smoke-gas-alert/smoke_gas_setup.jpeg',
    caption: 'Figure 5: Fire Detection System with Sensor Array & Local Display',
  },
  {
    id: 'cardiac-monitoring',
    number: '12',
    category: 'Biomedical IoT',
    title: 'Cardiac Monitoring System',
    description:
      'Biomedical IoT platform for real-time heart-rate monitoring with cloud-connected data visualization.',
    keyFeatures: [
      'Real-time heart-rate detection',
      'Arrhythmia-pattern recognition',
      'Wireless data transmission',
      'ThingSpeak cloud integration',
      'Local touchscreen / LCD feedback',
    ],
    componentsOrTech: ['ESP32', 'HR sensor', 'BMP180', 'Capacitive touch sensor', 'LCD', 'ThingSpeak API'],
    tags: ['ESP32', 'ThingSpeak API', 'HR Sensor', 'Biomedical IoT'],
    image: '/images/projects/cardiac-monitoring/cardiac_interface.jpeg',
    secondaryImage: '/images/projects/cardiac-monitoring/thingspeak_visualization.png',
    caption: 'Figure 6 & 7: Cardiac Monitoring System Setup & Real-time Cloud Visualization',
  },
];

export const RF_ANTENNA_EXPERIENCE = {
  title: 'Antenna Design & Optimization',
  subtitle: 'FEM / Method of Moments Simulation Portfolio',
  description:
    'Design, modeling, and electromagnetic performance characterization of fundamental and planar antenna geometries in HFSS and CST Studio Suite.',
  characterization: [
    'S11 Return Loss analysis',
    'Radiation gain characterization',
    'Directivity & 3D polar pattern analysis',
  ],
  antennas: [
    { name: 'Monopole Antenna', type: 'Omnidirectional Wire / Ground Plane', status: 'Designed & Simulated' },
    { name: 'Dipole Antenna', type: 'Resonant Balanced Radiator', status: 'Designed & Simulated' },
    { name: 'Rectangular Loop Antenna', type: 'Magnetic Dipole Resonator', status: 'Designed & Simulated' },
    { name: 'Circular Loop Antenna', type: 'Circular Polarization Element', status: 'Designed & Simulated' },
    { name: '2-Element Patch Array', type: 'Planar High-Directivity Array', status: 'Designed & Simulated' },
  ],
  tools: ['HFSS', 'CST Microwave Studio', 'MATLAB'],
  images: [
    {
      src: '/images/projects/general-antenna/antenna_monopole.png',
      alt: 'Monopole Antenna Simulation Model',
      caption: 'Monopole Antenna 3D EM model in CST Studio Suite over ground plane.',
    },
    {
      src: '/images/projects/general-antenna/antenna_dipole.png',
      alt: 'Dipole Antenna Simulation Model',
      caption: 'Resonant Dipole Antenna 3D EM model with discrete port excitation.',
    },
    {
      src: '/images/projects/general-antenna/antenna_circular_loop.png',
      alt: 'Circular Loop Antenna Simulation Model',
      caption: 'Circular Loop Antenna 3D EM model simulated for radiation directivity.',
    },
    {
      src: '/images/projects/general-antenna/antenna_rectangular_loop.png',
      alt: 'Rectangular Loop Antenna Simulation Model',
      caption: 'Rectangular Loop Antenna 3D EM model for magnetic dipole characterization.',
    },
  ],
};
