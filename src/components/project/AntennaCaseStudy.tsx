'use client';

import { Project } from '@/data/projects';
import ProjectGallery from '@/components/project/ProjectGallery';
import { ChevronRight, Radio, Layers, Activity, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

interface AntennaCaseStudyProps {
  project: Project;
}

export default function AntennaCaseStudy({ project }: AntennaCaseStudyProps) {
  return (
    <div className="container-portfolio max-w-5xl py-12">
      {/* 01. OVERVIEW */}
      <section id="overview" className="scroll-mt-32 mb-20">
        <SectionHeader number="01" title="PROJECT OVERVIEW" />
        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          <div className="md:col-span-2 space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>
              The antenna uses a 4×4 metasurface array, circular split-ring resonators (CSRRs) on the top patches, a stacked rectangular patch layer with RSRR loading, metallic via walls, three Rogers RT/Duroid 5880 dielectric substrates, a dumbbell-shaped defected ground structure, and a keyhole-shaped microstrip feed.
            </p>
            <p className="text-slate-400 text-sm sm:text-base">
              The design is intended for the 60 GHz millimeter-wave region, investigating metamaterial resonance mechanisms to significantly broaden impedance bandwidth and enhance broadside directivity in a compact form factor.
            </p>
          </div>
          <div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <Radio size={16} className="text-orange-400" />
                <h4 className="font-display font-semibold text-white tracking-wide text-sm">Key Attributes</h4>
              </div>
              <div className="space-y-3">
                <div className="flex flex-col border-b border-slate-800/60 pb-2">
                  <span className="font-mono text-[0.65rem] text-slate-500 uppercase tracking-wider">Frequency Band</span>
                  <span className="text-sm text-slate-200 font-medium">60 GHz Millimeter-Wave</span>
                </div>
                <div className="flex flex-col border-b border-slate-800/60 pb-2">
                  <span className="font-mono text-[0.65rem] text-slate-500 uppercase tracking-wider">Architecture</span>
                  <span className="text-sm text-slate-200 font-medium">7-Layer Multilayer Metasurface</span>
                </div>
                <div className="flex flex-col border-b border-slate-800/60 pb-2">
                  <span className="font-mono text-[0.65rem] text-slate-500 uppercase tracking-wider">Substrate</span>
                  <span className="text-sm text-slate-200 font-medium">Rogers RT/Duroid 5880</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[0.65rem] text-slate-500 uppercase tracking-wider">Validation Type</span>
                  <span className="text-xs font-mono text-cyan-400">Simulated Performance (CST)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. KEY SPECIFICATIONS & SIMULATED PERFORMANCE SUMMARY */}
      <section id="specs" className="scroll-mt-32 mb-20">
        <SectionHeader number="02" title="KEY SPECIFICATIONS" />
        
        {/* Performance Header Badge */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl">
            Simulated electromagnetic performance and physical parameters extracted from 3D full-wave CST Studio Suite models.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-wider">
            <Activity size={14} className="animate-pulse" />
            SIMULATED PERFORMANCE
          </div>
        </div>

        {/* 6 Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/30 transition-colors">
            <span className="font-mono text-[0.65rem] text-slate-500 uppercase tracking-widest block mb-1">
              Impedance Bandwidth
            </span>
            <span className="font-display text-2xl sm:text-3xl font-bold text-cyan-400 block mb-1">
              51.3–61.6 GHz
            </span>
            <span className="font-mono text-xs text-slate-400">
              at −12 dB criterion (FBW ≈ 18.25%)
            </span>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/30 transition-colors">
            <span className="font-mono text-[0.65rem] text-slate-500 uppercase tracking-widest block mb-1">
              Peak Realized Gain
            </span>
            <span className="font-display text-2xl sm:text-3xl font-bold text-cyan-400 block mb-1">
              8.84 dBi
            </span>
            <span className="font-mono text-xs text-slate-400">
              at 60 GHz (6.36 dBi at 56 GHz)
            </span>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/30 transition-colors">
            <span className="font-mono text-[0.65rem] text-slate-500 uppercase tracking-widest block mb-1">
              Radiation Efficiency
            </span>
            <span className="font-display text-2xl sm:text-3xl font-bold text-cyan-400 block mb-1">
              ≈ 88%
            </span>
            <span className="font-mono text-xs text-slate-400">
              simulated maximum efficiency
            </span>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/30 transition-colors">
            <span className="font-mono text-[0.65rem] text-slate-500 uppercase tracking-widest block mb-1">
              VSWR Performance
            </span>
            <span className="font-display text-2xl sm:text-3xl font-bold text-cyan-400 block mb-1">
              &lt; 2.0
            </span>
            <span className="font-mono text-xs text-slate-400">
              across the entire operating band
            </span>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/30 transition-colors">
            <span className="font-mono text-[0.65rem] text-slate-500 uppercase tracking-widest block mb-1">
              Physical Dimensions
            </span>
            <span className="font-display text-2xl sm:text-3xl font-bold text-cyan-400 block mb-1">
              25 × 25 mm
            </span>
            <span className="font-mono text-xs text-slate-400">
              substrate board footprint
            </span>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 hover:border-cyan-500/30 transition-colors">
            <span className="font-mono text-[0.65rem] text-slate-500 uppercase tracking-widest block mb-1">
              Electrical Size
            </span>
            <span className="font-display text-2xl sm:text-3xl font-bold text-cyan-400 block mb-1">
              2.9 × 2.9 λ₀
            </span>
            <span className="font-mono text-xs text-slate-400">
              height: 0.77 λ₀ at center frequency
            </span>
          </div>
        </div>

        {/* Key Features */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-5 sm:p-6">
          <h4 className="font-display font-semibold text-white text-base mb-3">Key Features &amp; Architecture Highlights</h4>
          <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
            <div className="flex items-start gap-2">
              <ChevronRight size={14} className="text-cyan-400 mt-1 flex-shrink-0" />
              <span>4×4 metasurface array loaded with Circular Split-Ring Resonators (CSRRs)</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={14} className="text-cyan-400 mt-1 flex-shrink-0" />
              <span><strong>Stacked rectangular patch layer with RSRR loading</strong> positioned beneath top metasurface</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={14} className="text-cyan-400 mt-1 flex-shrink-0" />
              <span>Patch-via-wall metallic vias connecting upper and stacked layers for field confinement</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={14} className="text-cyan-400 mt-1 flex-shrink-0" />
              <span>Dumbbell-shaped Defected Ground Structure (DGS) for secondary resonance</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={14} className="text-cyan-400 mt-1 flex-shrink-0" />
              <span>Keyhole-shaped 50 Ω microstrip feedline on bottom copper layer</span>
            </div>
            <div className="flex items-start gap-2">
              <ChevronRight size={14} className="text-cyan-400 mt-1 flex-shrink-0" />
              <span>3-layer Rogers RT/Duroid 5880 low-loss dielectric substrate stackup</span>
            </div>
          </div>
        </div>
      </section>

      {/* 03. ANTENNA ARCHITECTURE (7 FUNCTIONAL LAYERS) */}
      <section id="architecture" className="scroll-mt-32 mb-20">
        <SectionHeader number="03" title="ANTENNA ARCHITECTURE" />
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6 max-w-3xl">
          The antenna is structured across three stacked Rogers RT/Duroid 5880 substrates (εr = 2.2, tanδ = 0.0009), comprising seven functional metallic and dielectric layers.
        </p>

        {/* 7-Layer Visual Breakdown */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-5 sm:p-6 mb-8">
          <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wider uppercase flex items-center gap-2">
            <Layers size={16} className="text-cyan-400" />
            Layer-by-Layer Functional Stackup
          </h4>
          <div className="space-y-3">
            {[
              { num: 'Layer 1', title: 'Top Metasurface Radiating Layer', desc: '4×4 array of square copper patches loaded with Circular Split-Ring Resonators (CSRRs) and via walls.' },
              { num: 'Layer 2', title: 'Upper Dielectric Substrate', desc: 'Rogers RT/Duroid 5880 substrate (thickness h₁ = 0.813 mm).' },
              { num: 'Layer 3', title: 'Stacked rectangular patch layer with RSRR loading', desc: 'Rectangular stacked patches positioned beneath the top metasurface, each loaded with an RSRR.' },
              { num: 'Layer 4', title: 'Middle Dielectric Substrate', desc: 'Rogers RT/Duroid 5880 substrate (thickness h₂ = 1.524 mm).' },
              { num: 'Layer 5', title: 'Ground Plane & DGS', desc: 'Continuous copper ground plane etched with a dumbbell-shaped Defected Ground Structure.' },
              { num: 'Layer 6', title: 'Lower Dielectric Substrate', desc: 'Rogers RT/Duroid 5880 substrate (thickness h₃ = 1.524 mm).' },
              { num: 'Layer 7', title: 'Keyhole Microstrip Feedline', desc: 'Bottom copper layer featuring a 50 Ω keyhole-shaped microstrip transmission line.' },
            ].map((layer) => (
              <div key={layer.num} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 pb-2.5 border-b border-slate-800/50 last:border-0 last:pb-0">
                <span className="font-mono text-xs text-cyan-400 font-semibold min-w-[70px]">{layer.num}</span>
                <span className="font-display text-sm text-slate-200 font-medium min-w-[240px]">{layer.title}</span>
                <span className="text-xs text-slate-400">{layer.desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dedicated Architecture Callout: Stacked Rectangular Patch Layer with RSRR Loading */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 sm:p-6 mb-8">
          <div className="mb-3">
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block mb-1">
              Core Architectural Component
            </span>
            <h4 className="font-display font-semibold text-white text-base sm:text-lg flex items-center gap-2">
              <Layers size={18} className="text-cyan-400" />
              Stacked rectangular patch layer loaded with Rectangular Split-Ring Resonators (RSRRs)
            </h4>
            <span className="font-mono text-xs text-slate-400 block mt-0.5">
              (Stacked rectangular patch layer with RSRR loading)
            </span>
          </div>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex items-start gap-2.5">
              <ChevronRight size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>Rectangular stacked patches positioned beneath the top metasurface layer.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <ChevronRight size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>Each stacked patch is loaded with a Rectangular Split-Ring Resonator (RSRR).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <ChevronRight size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>The stacked patch layer works together with the top CSRR-loaded metasurface.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <ChevronRight size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>Metallic vias form the patch-via-wall connection between the upper and stacked layers.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <ChevronRight size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>The stacked patches and RSRRs contribute additional capacitive/resonant loading that helps control resonance and broaden the impedance bandwidth.</span>
            </li>
          </ul>
        </div>

        {/* Multilayer Cross-Section Image */}
        <div className="w-full aspect-[16/9] sm:aspect-[1.85/1] bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center overflow-hidden mb-3 p-3 sm:p-6 shadow-xl">
          <img 
            src="/images/projects/uwb-antenna/fig_cross_section.png" 
            alt="Multilayer Cross-Section" 
            className="w-full h-full object-contain rounded-lg" 
          />
        </div>
        <p className="font-mono text-xs text-slate-500 text-center tracking-wide mt-2">
          Multilayer cross-sectional architecture showing the 3 Rogers RT/Duroid 5880 substrates and 7 functional layers.
        </p>
      </section>

      {/* 04. MULTILAYER STACK / KEY GEOMETRY */}
      <section id="geometry" className="scroll-mt-32 mb-20">
        <SectionHeader number="04" title="KEY GEOMETRY & DESIGN PARAMETERS" />
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6 max-w-3xl">
          Key structural dimensions optimized in CST Studio Suite to align resonances across the 51.3–61.6 GHz millimeter-wave operating band.
        </p>

        {/* Compact Parameters Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
            <span className="font-mono text-[0.65rem] text-slate-500 uppercase block mb-1">Board Dimensions</span>
            <span className="font-mono text-sm text-slate-200 font-semibold">25 × 25 mm</span>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
            <span className="font-mono text-[0.65rem] text-slate-500 uppercase block mb-1">Substrate Heights</span>
            <span className="font-mono text-sm text-slate-200 font-semibold">0.813 / 1.524 / 1.524 mm</span>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
            <span className="font-mono text-[0.65rem] text-slate-500 uppercase block mb-1">Copper Thickness</span>
            <span className="font-mono text-sm text-slate-200 font-semibold">0.035 mm (1 oz)</span>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
            <span className="font-mono text-[0.65rem] text-slate-500 uppercase block mb-1">Metasurface Cell</span>
            <span className="font-mono text-sm text-slate-200 font-semibold">4.0 × 4.0 mm (gap 1 mm)</span>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
            <span className="font-mono text-[0.65rem] text-slate-500 uppercase block mb-1">Stacked Patches (RSRR)</span>
            <span className="font-mono text-sm text-slate-200 font-semibold">4.0 × 1.5 mm (gap 1 mm)</span>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
            <span className="font-mono text-[0.65rem] text-slate-500 uppercase block mb-1">Feedline Length / Width</span>
            <span className="font-mono text-sm text-slate-200 font-semibold">15 mm / 2.524 mm</span>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
            <span className="font-mono text-[0.65rem] text-slate-500 uppercase block mb-1">Feedhead Radius</span>
            <span className="font-mono text-sm text-slate-200 font-semibold">R = 5.0 mm</span>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4">
            <span className="font-mono text-[0.65rem] text-slate-500 uppercase block mb-1">DGS Slot Length / Radius</span>
            <span className="font-mono text-sm text-slate-200 font-semibold">15 mm / R = 3.0 mm</span>
          </div>
        </div>

        {/* Geometry Images Grid */}
        <div className="grid sm:grid-cols-3 gap-4 mb-3">
          <div className="aspect-[4/3] bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center p-3 overflow-hidden shadow-lg">
            <img 
              src="/images/projects/uwb-antenna/fig_top_metasurface.png" 
              alt="Top Metasurface Layout" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="aspect-[4/3] bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center p-3 overflow-hidden shadow-lg">
            <img 
              src="/images/projects/uwb-antenna/fig_unit_cell_csrr.png" 
              alt="CSRR Unit Cell Geometry" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="aspect-[4/3] bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center p-3 overflow-hidden shadow-lg">
            <img 
              src="/images/projects/uwb-antenna/fig_stacked_rsrr.png" 
              alt="Stacked Rectangular Patch Layer with RSRR Loading" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className="font-mono text-xs text-slate-500 text-center tracking-wide mt-2">
          Top 4×4 metasurface array layout (left), CSRR unit cell (center), and stacked rectangular patch layer with RSRR loading (right).
        </p>
      </section>

      {/* 05. DESIGN EVOLUTION (SIX CONFIGURATIONS) */}
      <section id="evolution" className="scroll-mt-32 mb-20">
        <SectionHeader number="05" title="DESIGN EVOLUTION" />
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6 max-w-3xl">
          The antenna progression was evaluated across six simulated configurations to systematically investigate how increasing cell count and introducing CSRR/RSRR loading affect impedance matching and bandwidth.
        </p>

        {/* 6 Configurations Thumbnails Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          {[
            { id: '1', title: 'Config 1', desc: '1 Cell, no SRR', img: '/images/projects/uwb-antenna/fig_config1.png' },
            { id: '2', title: 'Config 2', desc: '2×2 Array, no SRR', img: '/images/projects/uwb-antenna/fig_config2.png' },
            { id: '3', title: 'Config 3', desc: '4×4 Array, no SRR', img: '/images/projects/uwb-antenna/fig_config3.png' },
            { id: '4', title: 'Config 4', desc: '1 Cell + CSRR/RSRR', img: '/images/projects/uwb-antenna/fig_config4.png' },
            { id: '5', title: 'Config 5', desc: '2×2 + CSRR/RSRR', img: '/images/projects/uwb-antenna/fig_config5.png' },
            { id: '6', title: 'Config 6', desc: '4×4 Final Design', img: '/images/projects/uwb-antenna/fig_config6.png', active: true },
          ].map((cfg) => (
            <div 
              key={cfg.id} 
              className={`bg-slate-900/60 border rounded-xl p-3 flex flex-col items-center text-center transition-all ${
                cfg.active ? 'border-cyan-500/60 ring-1 ring-cyan-500/20 shadow-lg shadow-cyan-500/5' : 'border-slate-800'
              }`}
            >
              <div className="w-full aspect-square bg-slate-950 rounded-lg mb-2 flex items-center justify-center overflow-hidden p-1.5">
                <img src={cfg.img} alt={cfg.title} className="w-full h-full object-contain" />
              </div>
              <span className={`font-mono text-xs font-bold ${cfg.active ? 'text-cyan-400' : 'text-slate-300'}`}>
                {cfg.title}
              </span>
              <span className="text-[0.65rem] text-slate-400 mt-0.5 leading-tight">{cfg.desc}</span>
            </div>
          ))}
        </div>

        {/* Explicit Final Configuration Statement */}
        <div className="bg-slate-900/70 border-l-2 border-cyan-500 rounded-r-xl p-4 sm:p-5 mb-8">
          <span className="font-mono text-[0.65rem] text-cyan-400 font-bold uppercase tracking-widest block mb-1">
            FINAL CONFIGURATION (CONFIG 6)
          </span>
          <p className="font-display text-sm sm:text-base text-slate-200 font-medium">
            4×4 CSRR-loaded metasurface patches + stacked rectangular patches with RSRR loading + patch-via-wall structure + dumbbell-shaped DGS + keyhole microstrip feed.
          </p>
        </div>

        {/* Evolution Comparison Plots */}
        <div className="grid md:grid-cols-2 gap-6 mb-3">
          <div className="aspect-[16/10] bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center p-3 sm:p-5 overflow-hidden shadow-lg">
            <img 
              src="/images/projects/uwb-antenna/fig_s11_comparison.png" 
              alt="S11 Evolution Comparison" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="aspect-[16/10] bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center p-3 sm:p-5 overflow-hidden shadow-lg">
            <img 
              src="/images/projects/uwb-antenna/fig_vswr_comparison.png" 
              alt="VSWR Evolution Comparison" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className="font-mono text-xs text-slate-500 text-center tracking-wide mt-2">
          Comparison of simulated S11 return loss (left) and VSWR (right) across all six design configurations.
        </p>
      </section>

      {/* 06. EQUIVALENT LC MODEL */}
      <section id="lc-model" className="scroll-mt-32 mb-20">
        <SectionHeader number="06" title="RESONANCE & EQUIVALENT LC MODEL" />
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6 max-w-3xl">
          The unit cell is interpreted using an equivalent parallel LC model to explain miniaturization and bandwidth enhancement.
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-center mb-4">
          <div className="space-y-3 bg-slate-900/40 border border-slate-800 rounded-xl p-5 sm:p-6 text-sm text-slate-300">
            <h4 className="font-display font-semibold text-white text-base mb-2">Constituent Reactive Contributions</h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <ChevronRight size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                <span><strong className="text-white">Grounded Substrates:</strong> Contributes distributed inductance (L) through cavity current paths.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ChevronRight size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                <span><strong className="text-white">Inter-Patch Coupling:</strong> Establishes edge capacitance between adjacent metasurface cells.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ChevronRight size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                <span><strong className="text-white">Metallic Via Walls:</strong> Confines EM field and significantly increases effective capacitance.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ChevronRight size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                <span><strong className="text-white">Stacked Rectangular Patch Layer with RSRR Loading:</strong> Positioned beneath the upper metasurface and interconnected via metallic vias, adding extra capacitive and resonant loading that helps control resonance and broaden impedance bandwidth.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <ChevronRight size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                <span><strong className="text-white">CSRR / RSRR Slits:</strong> Introduce dual-resonant capacitive and inductive loading to widen bandwidth.</span>
              </li>
            </ul>
          </div>

          <div className="aspect-[16/10] bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center p-4 overflow-hidden shadow-lg">
            <img 
              src="/images/projects/uwb-antenna/impedance_mag.png" 
              alt="Input Impedance Magnitude" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className="font-mono text-xs text-slate-500 text-center tracking-wide mt-2">
          Simulated input impedance magnitude illustrating dual-resonant wideband matching behavior.
        </p>
      </section>

      {/* 07. FEED & DEFECTED GROUND STRUCTURE */}
      <section id="feed-dgs" className="scroll-mt-32 mb-20">
        <SectionHeader number="07" title="FEED & DEFECTED GROUND STRUCTURE" />
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6 max-w-3xl">
          A 50 Ω keyhole-shaped microstrip feedline excites the structure through a dumbbell-shaped Defected Ground Structure (DGS). The DGS modifies ground current distribution, contributing an additional resonant mechanism to widen impedance bandwidth.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-3">
          <div className="aspect-[4/3] bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center p-5 overflow-hidden shadow-lg">
            <img 
              src="/images/projects/uwb-antenna/fig_keyhole_feed.png" 
              alt="Keyhole Microstrip Feedline" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="aspect-[4/3] bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center p-5 overflow-hidden shadow-lg">
            <img 
              src="/images/projects/uwb-antenna/fig_dgs_groundplane.png" 
              alt="Dumbbell DGS Ground Plane" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className="font-mono text-xs text-slate-500 text-center tracking-wide mt-2">
          Keyhole-shaped 50 Ω microstrip feedline on bottom substrate (left) and dumbbell-shaped DGS ground plane (right).
        </p>
      </section>

      {/* 08. CST SIMULATION SETUP */}
      <section id="simulation" className="scroll-mt-32 mb-20">
        <SectionHeader number="08" title="CST SIMULATION SETUP" />
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6 max-w-3xl">
          Full 3D electromagnetic simulations were conducted in CST Studio Suite using a transient solver with waveguide port excitation.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
            <span className="font-mono text-[0.65rem] text-cyan-400 uppercase tracking-widest block mb-1">Frequency Sweep</span>
            <h5 className="font-display font-semibold text-white text-base mb-1">50–65 GHz</h5>
            <p className="text-xs text-slate-400">Broadband frequency domain evaluation centered around 56.45 GHz.</p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
            <span className="font-mono text-[0.65rem] text-cyan-400 uppercase tracking-widest block mb-1">Port Excitation</span>
            <h5 className="font-display font-semibold text-white text-base mb-1">50 Ω Waveguide Port</h5>
            <p className="text-xs text-slate-400">Standard quasi-TEM waveguide port mapped to the keyhole feedline.</p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
            <span className="font-mono text-[0.65rem] text-cyan-400 uppercase tracking-widest block mb-1">Boundary Conditions</span>
            <h5 className="font-display font-semibold text-white text-base mb-1">Open (Add Space)</h5>
            <p className="text-xs text-slate-400">Radiation boundary conditions mimicking free-space radiation.</p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
            <span className="font-mono text-[0.65rem] text-cyan-400 uppercase tracking-widest block mb-1">Mesh Refinement</span>
            <h5 className="font-display font-semibold text-white text-base mb-1">Adaptive Volumetric Mesh</h5>
            <p className="text-xs text-slate-400">Local refinement applied around CSRRs, RSRRs, vias, DGS, and keyhole feed.</p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 sm:col-span-2">
            <span className="font-mono text-[0.65rem] text-cyan-400 uppercase tracking-widest block mb-1">Field Monitors</span>
            <h5 className="font-display font-semibold text-white text-base mb-1">56 GHz & 60 GHz</h5>
            <p className="text-xs text-slate-400">Far-field radiation patterns, realized gain, total efficiency, and surface current distributions evaluated at center and millimeter-wave band frequencies.</p>
          </div>
        </div>
      </section>

      {/* 09. SIMULATED PERFORMANCE */}
      <section id="performance" className="scroll-mt-32 mb-20">
        <SectionHeader number="09" title="SIMULATED PERFORMANCE" />
        
        {/* Performance Badge Callout */}
        <div className="bg-slate-900/40 border-l-2 border-cyan-500 pl-4 py-3 mb-8">
          <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider block mb-1">
            FULL-WAVE SIMULATION RESULTS ONLY
          </span>
          <p className="text-sm text-slate-300">
            All results below represent 3D numerical simulations conducted in CST Studio Suite. No physical prototype testing or measured VNA results are claimed.
          </p>
        </div>

        {/* Subsection: S11 & VSWR */}
        <div className="mb-14">
          <h4 className="font-display text-xl font-semibold text-white mb-2">S11 Return Loss & VSWR</h4>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
            Simulated S11 confirms a continuous matched bandwidth from 51.3 to 61.6 GHz under the −12 dB criterion (FBW ≈ 18.25%), while maintaining VSWR &lt; 2 across the entire band.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-2">
            <div className="aspect-[16/10] bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center p-3 sm:p-5 overflow-hidden shadow-lg">
              <img 
                src="/images/projects/uwb-antenna/fig_s11_final.png" 
                alt="Final Simulated S11" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="aspect-[16/10] bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center p-3 sm:p-5 overflow-hidden shadow-lg">
              <img 
                src="/images/projects/uwb-antenna/fig_vswr_final.png" 
                alt="Final Simulated VSWR" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <p className="font-mono text-xs text-slate-500 text-center tracking-wide">
            Final simulated S11 return loss (51.3–61.6 GHz at −12 dB) and VSWR (&lt; 2 across band).
          </p>
        </div>

        {/* Subsection: Surface Current Distributions */}
        <div className="mb-14">
          <h4 className="font-display text-xl font-semibold text-white mb-2">Surface Current Distributions</h4>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
            Current density plots illustrate strong field concentration around the CSRR rings, stacked RSRR elements, metallic via walls, and the DGS ground slot at 56 GHz and 60 GHz.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-2">
            <div className="aspect-[4/3] bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center p-3 sm:p-5 overflow-hidden shadow-lg">
              <img 
                src="/images/projects/uwb-antenna/fig_current_56ghz.png" 
                alt="Surface Current at 56 GHz" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="aspect-[4/3] bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center p-3 sm:p-5 overflow-hidden shadow-lg">
              <img 
                src="/images/projects/uwb-antenna/fig_current_60ghz.png" 
                alt="Surface Current at 60 GHz" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <p className="font-mono text-xs text-slate-500 text-center tracking-wide">
            Surface current distribution at 56 GHz (left) and 60 GHz (right) showing high current concentration in the split-ring and via regions.
          </p>
        </div>

        {/* Subsection: Radiation Patterns */}
        <div className="mb-14">
          <h4 className="font-display text-xl font-semibold text-white mb-2">2D Far-Field Radiation Patterns</h4>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
            Simulated 2D polar radiation patterns demonstrate clean broadside directional radiation with low back-lobe levels at 56 GHz and 60 GHz.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2">
            <div className="aspect-square bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center p-2 sm:p-3 overflow-hidden shadow-md">
              <img src="/images/projects/uwb-antenna/fig_eplane_56ghz.png" alt="E-Plane 56 GHz" className="w-full h-full object-contain" />
            </div>
            <div className="aspect-square bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center p-2 sm:p-3 overflow-hidden shadow-md">
              <img src="/images/projects/uwb-antenna/fig_hplane_56ghz.png" alt="H-Plane 56 GHz" className="w-full h-full object-contain" />
            </div>
            <div className="aspect-square bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center p-2 sm:p-3 overflow-hidden shadow-md">
              <img src="/images/projects/uwb-antenna/fig_eplane_60ghz.png" alt="E-Plane 60 GHz" className="w-full h-full object-contain" />
            </div>
            <div className="aspect-square bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center p-2 sm:p-3 overflow-hidden shadow-md">
              <img src="/images/projects/uwb-antenna/fig_hplane_60ghz.png" alt="H-Plane 60 GHz" className="w-full h-full object-contain" />
            </div>
          </div>
          <p className="font-mono text-xs text-slate-500 text-center tracking-wide">
            Simulated polar radiation patterns: E-Plane &amp; H-Plane at 56 GHz (left two) and 60 GHz (right two).
          </p>
        </div>

        {/* Subsection: Realized Gain & Efficiency */}
        <div>
          <h4 className="font-display text-xl font-semibold text-white mb-2">Realized Gain &amp; Radiation Efficiency</h4>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
            Realized gain reaches 6.36 dBi at 56 GHz and peaks at 8.84 dBi at 60 GHz. Maximum radiation efficiency reaches approximately 88% in the matched band.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-2">
            <div className="aspect-[16/10] bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center p-3 sm:p-5 overflow-hidden shadow-lg">
              <img 
                src="/images/projects/uwb-antenna/fig_gain_vs_freq.png" 
                alt="Realized Gain vs Frequency" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="aspect-[16/10] bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center p-3 sm:p-5 overflow-hidden shadow-lg">
              <img 
                src="/images/projects/uwb-antenna/fig_efficiency.png" 
                alt="Radiation Efficiency vs Frequency" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <p className="font-mono text-xs text-slate-500 text-center tracking-wide">
            Simulated realized gain (6.36 dBi at 56 GHz, 8.84 dBi at 60 GHz) and radiation efficiency vs. frequency.
          </p>
        </div>
      </section>

      {/* 10. PERFORMANCE SUMMARY */}
      <section id="summary" className="scroll-mt-32 mb-20">
        <SectionHeader number="10" title="PERFORMANCE SUMMARY" />
        <div className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
          <div className="border-b border-slate-800 bg-slate-950/70 p-4 sm:p-6 flex items-center justify-between">
            <div>
              <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider block">
                CST Studio Suite Simulation Summary
              </span>
              <h4 className="font-display font-semibold text-white text-lg sm:text-xl">
                Wideband 60 GHz Metasurface Antenna
              </h4>
            </div>
            <span className="font-mono text-[0.65rem] px-3 py-1 bg-slate-900 border border-slate-700 text-slate-300 rounded-full">
              Simulated Data
            </span>
          </div>

          <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/60 p-4 sm:p-6 text-sm">
            <div className="space-y-3 pb-3 sm:pb-0 sm:pr-6">
              <div className="flex justify-between items-center py-1.5 border-b border-slate-800/40">
                <span className="text-slate-400">Impedance Bandwidth (|S11| &lt; −12 dB)</span>
                <span className="font-mono text-cyan-400 font-medium">51.3–61.6 GHz</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-slate-800/40">
                <span className="text-slate-400">Fractional Bandwidth</span>
                <span className="font-mono text-cyan-400 font-medium">≈ 18.25%</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-slate-800/40">
                <span className="text-slate-400">Center Frequency</span>
                <span className="font-mono text-cyan-400 font-medium">56.45 GHz</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-slate-400">VSWR (Operating Band)</span>
                <span className="font-mono text-cyan-400 font-medium">&lt; 2.0</span>
              </div>
            </div>

            <div className="space-y-3 pt-3 sm:pt-0 sm:pl-6">
              <div className="flex justify-between items-center py-1.5 border-b border-slate-800/40">
                <span className="text-slate-400">Realized Gain at 56 GHz</span>
                <span className="font-mono text-cyan-400 font-medium">6.36 dBi</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-slate-800/40">
                <span className="text-slate-400">Realized Gain at 60 GHz</span>
                <span className="font-mono text-cyan-400 font-medium">8.84 dBi</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-slate-800/40">
                <span className="text-slate-400">Max Radiation Efficiency</span>
                <span className="font-mono text-cyan-400 font-medium">≈ 88%</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-slate-400">Electrical Dimensions</span>
                <span className="font-mono text-cyan-400 font-medium">2.9λ₀ × 2.9λ₀ × 0.77λ₀</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. POTENTIAL APPLICATIONS */}
      <section id="applications" className="scroll-mt-32 mb-20">
        <SectionHeader number="11" title="POTENTIAL APPLICATIONS" />
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6 max-w-3xl">
          Potential applications identified for this simulated 60 GHz millimeter-wave metasurface design:
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: 'WiGig (IEEE 802.11ad/ay)', desc: 'Multi-gigabit wireless local area networking, ultra-fast file transfer, and wireless docking systems in the unlicensed 60 GHz band.' },
            { title: 'Terragraph & mmWave Backhaul', desc: 'High-capacity urban wireless backhaul networks delivering gigabit internet access where fiber deployment is cost-prohibitive.' },
            { title: '5G / 6G Millimeter-Wave', desc: 'Short-range microcell and picocell base-station transceivers requiring high-directivity compact antenna arrays.' },
            { title: 'Short-Range High-Speed Links', desc: 'High-throughput device-to-device communications, data center inter-rack wireless interconnects, and low-latency streaming.' },
            { title: 'Millimeter-Wave Sensing & Radar', desc: 'High-resolution industrial radar, non-destructive surface testing, and millimeter-wave imaging systems.' },
          ].map((app) => (
            <div key={app.title} className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-2 mb-2 text-cyan-400">
                <CheckCircle2 size={16} />
                <h5 className="font-display font-semibold text-white text-sm">{app.title}</h5>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{app.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 12. LIMITATIONS */}
      <section id="limitations" className="scroll-mt-32 mb-20">
        <SectionHeader number="12" title="LIMITATIONS" />
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6 max-w-3xl">
          Engineering constraints and practical boundary conditions identified during simulation analysis:
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: 'Simulation-Only Validation', desc: 'No physical antenna was fabricated or measured with a Vector Network Analyzer (VNA) or in an anechoic chamber.' },
            { title: 'Single-Port Fixed-Beam', desc: 'Fixed broadside beam without dynamic electronic beam-steering or phased-array feed network.' },
            { title: 'Linear Polarization', desc: 'Operates solely in linear polarization; does not provide dual or circular polarization for orientation tolerance.' },
            { title: 'Gain Variation Across Band', desc: 'Realized gain varies from 6.36 dBi at 56 GHz to 8.84 dBi at 60 GHz across the matched bandwidth.' },
            { title: 'Multilayer Fabrication Complexity', desc: 'Requires precise registration and bonding of 3 distinct Rogers RT/Duroid 5880 substrates and via walls.' },
            { title: 'No Mutual Coupling Analysis', desc: 'Design was evaluated as an isolated radiator without mutual-coupling modeling in dense multi-antenna arrays.' },
          ].map((item) => (
            <div key={item.title} className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-5 flex items-start gap-3">
              <ShieldAlert size={18} className="text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-display font-semibold text-slate-200 text-sm mb-1">{item.title}</h5>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 13. FUTURE SCOPE */}
      <section id="future-scope" className="scroll-mt-32 mb-24">
        <SectionHeader number="13" title="FUTURE SCOPE" />
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6 max-w-3xl">
          Promising research and engineering directions for prospective experimental follow-up:
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: 'Prototyping & Lab Validation', desc: 'Fabricate physical prototypes and perform calibrated VNA measurements up to 67 GHz to measure actual S11 and VSWR.' },
            { title: 'Anechoic Chamber Radiation Testing', desc: 'Measure far-field 2D/3D radiation patterns, cross-polarization discrimination, and absolute realized gain.' },
            { title: 'Circular Polarization Development', desc: 'Perturb unit cell symmetry or introduce dual-orthogonal feeding to produce circularly polarized radiation for robust links.' },
            { title: 'Phased-Array & MIMO Integration', desc: 'Scale unit cell architecture into a multi-port phased array with mmWave beamforming transceivers.' },
            { title: 'Reconfigurable Metasurface', desc: 'Incorporate varactor diodes or RF MEMS to enable dynamic frequency agility and beam reconfigurability.' },
            { title: 'Front-End Module Co-Integration', desc: 'Co-design antenna structure directly with 60 GHz power amplifiers (PA) and low-noise amplifiers (LNA).' },
          ].map((scope) => (
            <div key={scope.title} className="bg-slate-900/40 border border-slate-800 rounded-xl p-5 flex items-start gap-3">
              <Sparkles size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
              <div>
                <h5 className="font-display font-semibold text-slate-200 text-sm mb-1">{scope.title}</h5>
                <p className="text-xs text-slate-400 leading-relaxed">{scope.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 14. PROJECT GALLERY */}
      <section id="gallery" className="scroll-mt-32 mb-24">
        <SectionHeader number="14" title="PROJECT GALLERY" />
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl">
          High-resolution CST Studio Suite simulation visuals, geometry schematics, and electromagnetic performance graphs. Click any image to inspect in full view.
        </p>
        <ProjectGallery media={project.media} />
      </section>

      {/* 15. TOOLS & TAKEAWAYS */}
      <section id="tools" className="scroll-mt-32 mb-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <SectionHeader number="15" title="TOOLS & TECHNOLOGIES" />
            <div className="flex flex-wrap gap-2">
              {project.caseStudy.tools.map((tool) => (
                <span key={tool} className="tech-tag border-slate-700 bg-slate-800/50 text-slate-300 px-3 py-1.5 text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          
          {project.caseStudy.takeaways && (
            <div>
              <SectionHeader number="16" title="ENGINEERING TAKEAWAYS" />
              <ul className="space-y-3">
                {project.caseStudy.takeaways.map((takeaway) => (
                  <li key={takeaway} className="flex items-start gap-3 text-slate-300">
                    <ChevronRight size={18} className="text-cyan-500 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed text-sm sm:text-base">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function SectionHeader({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="font-mono text-cyan-500 opacity-80">{number}</span>
      <h3 className="font-display text-2xl font-bold text-white tracking-wide">{title}</h3>
      <div className="h-px bg-slate-800 flex-1 ml-4" />
    </div>
  );
}
