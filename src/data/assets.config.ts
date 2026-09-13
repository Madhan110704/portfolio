/**
 * CENTRALIZED ASSET CONFIGURATION
 * Replace any value below with the actual file path to update project images.
 * All images should be placed in /public/images/
 */

export const ASSETS = {
  // ─── Profile ────────────────────────────────────────────────────────────────
  profile: {
    photo: '/images/profile/profile_hero.jpeg',
    hero:  '/images/profile/profile_hero.jpeg',
  },

  // ─── Resume ─────────────────────────────────────────────────────────────────
  resume: '/resume/Madhan_Raj_Resume.pdf',
  resumeDownload: '/api/resume/download',
  resumeFilename: 'Madhan_Raj_M_Resume.pdf',

  // ─── Projects ───────────────────────────────────────────────────────────────
  projects: {
    stm32wb: {
      schematic:    '/images/projects/stm32wb/schematic.png',
      pcbTop:       '/images/projects/stm32wb/pcb-layout.png',
      layers:       '/images/projects/stm32wb/layers.png',
      layer1:       '/images/projects/stm32wb/layer1.png',
      layer2:       '/images/projects/stm32wb/layer2.png',
      layer3:       '/images/projects/stm32wb/layer3.png',
      layer4:       '/images/projects/stm32wb/layer4.png',
      model3d:      '/images/projects/stm32wb/3d-model.png',
      architecture: '/images/projects/stm32wb/systemarchitecture.png',
    },
    stm32wb55: {
      schematic:    '/images/projects/stm32wb55/schematic.png',
      pcbTop:       '/images/projects/stm32wb55/pcb-layout.png',
      layers:       '/images/projects/stm32wb55/layers.png',
      layer1:       '/images/projects/stm32wb55/layer1.png',
      layer2:       '/images/projects/stm32wb55/layer2.png',
      layer3:       '/images/projects/stm32wb55/layer3.png',
      layer4:       '/images/projects/stm32wb55/layer4.png',
      model3d:      '/images/projects/stm32wb55/3d-model.png',
      architecture: '/images/projects/stm32wb55/systemarchitecture.png',
    },
    stm32f1: {
      schematic: '/images/projects/stm32f1/schematic.jpg',
      pcbLayout: '/images/projects/stm32f1/pcb-layout.jpg',
      model3d:   '/images/projects/stm32f1/3d-model.jpg',
    },
    uwbAntenna: {
      exploded:     '/images/projects/uwb-antenna/fig_3d_exploded.png',
      crossSection: '/images/projects/uwb-antenna/fig_cross_section.png',
      topMetasurface: '/images/projects/uwb-antenna/fig_top_metasurface.png',
      s11Graph:     '/images/projects/uwb-antenna/fig_s11_final.png',
      vswrGraph:    '/images/projects/uwb-antenna/fig_vswr_final.png',
      radiation:    '/images/projects/uwb-antenna/fig_eplane_60ghz.png',
      gain:         '/images/projects/uwb-antenna/fig_gain_vs_freq.png',
      efficiency:   '/images/projects/uwb-antenna/fig_efficiency.png',
    },
    adder: {
      vivadoSimulation: '/images/projects/approx-adder/adder_vivado_simulation.jpeg',
      matlabValidation: '/images/projects/approx-adder/adder_matlab_validation.jpeg',
    },
    powerConverter: {
      schematic: '/images/projects/power-converter/power_converter_schematic.png',
      pcbLayout: '/images/projects/power-converter/power_converter_pcb_layout.png',
      model3d:   '/images/projects/power-converter/power_converter_3d_pcb.png',
    },
    metasurfaceUwb: {
      layerDesign:    '/images/projects/metasurface-uwb/uwb_layer_design.png',
      configurations: '/images/projects/metasurface-uwb/uwb_configurations.png',
    },
    generalAntenna: {
      monopole:        '/images/projects/general-antenna/antenna_monopole.png',
      dipole:          '/images/projects/general-antenna/antenna_dipole.png',
      circularLoop:    '/images/projects/general-antenna/antenna_circular_loop.png',
      rectangularLoop: '/images/projects/general-antenna/antenna_rectangular_loop.png',
    },
    embedded: {
      corridorLighting: '/images/projects/corridor-lighting/corridor_lighting_setup.jpeg',
      cleaningRobot:    '/images/projects/cleaning-robot/cleaning_robot_assembly.jpeg',
      cuttingRobot:     '/images/projects/cutting-robot/cutting_robot_assembly.jpeg',
      mp3Player:        '/images/projects/mp3-player/mp3_player_setup.jpeg',
      smokeGas:         '/images/projects/smoke-gas-alert/smoke_gas_setup.jpeg',
      cardiacInterface: '/images/projects/cardiac-monitoring/cardiac_interface.jpeg',
      cardiacCloud:     '/images/projects/cardiac-monitoring/thingspeak_visualization.png',
    },
  },

  // ─── Certifications ─────────────────────────────────────────────────────────
  certifications: {
    nptelCmos:        '/images/certs/nptel-cmos-vlsi.jpg',
    nptelVlsiFlow:    '/images/certs/nptel-vlsi-flow.jpg',
    nptelMicro:       '/images/certs/nptel-microprocessor.jpg',
    amdVitis:         '/images/certs/amd-vitis.jpg',
    amdZynq:          '/images/certs/amd-zynq.jpg',
    matlabSignal:     '/images/certs/matlab-signal.jpg',
    matlabImage:      '/images/certs/matlab-image.jpg',
  },
} as const;
