'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ASSETS } from '@/data/assets.config';

const FOCUS_ITEMS = [
  {
    id: 'pcb',
    number: '01',
    title: 'PCB Design',
    desc: 'Schematic capture, component selection, multi-layer PCB layout, ERC/DRC verification, and Gerber output using KiCad and Altium Designer.',
    detail: 'Current primary focus — available for freelance PCB projects.',
    color: '#00d4ff',
  },
  {
    id: 'embedded',
    number: '02',
    title: 'Embedded Systems',
    desc: 'Firmware development for STM32 and ESP32 platforms. Peripheral drivers: GPIO, UART, SPI, I²C, ADC, timers and interrupts.',
    detail: 'Hands-on project and internship experience.',
    color: '#00e5a0',
  },
  {
    id: 'rf',
    number: '03',
    title: 'RF & Antenna',
    desc: 'UWB antenna design and simulation in CST Microwave Studio. Return loss analysis, radiation pattern characterisation, and parametric geometry optimisation.',
    detail: 'Academic project experience with CST Microwave Studio.',
    color: '#4fc3f7',
  },
  {
    id: 'vlsi',
    number: '04',
    title: 'VLSI / Digital Design',
    desc: 'RTL design in Verilog HDL, simulation in ModelSim, FPGA implementation with Xilinx Vivado. Exposure to Cadence Virtuoso, Genus, and Innovus flows.',
    detail: 'Academic and internship exposure — longer-term career direction.',
    color: '#b388ff',
  },
  {
    id: 'iot',
    number: '05',
    title: 'IoT Systems',
    desc: 'End-to-end IoT system development: ESP32 sensor nodes, interrupt-driven firmware, Wi-Fi / Bluetooth connectivity and cloud integration with ThingSpeak.',
    detail: 'Multiple completed project systems.',
    color: '#ffa500',
  },
];

export default function About() {
  const [activeId, setActiveId] = useState('pcb');
  const active = FOCUS_ITEMS.find((f) => f.id === activeId)!;

  return (
    <section id="about" className="section-padding" aria-label="About">
      <div className="container-portfolio">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px" style={{ background: 'var(--accent-cyan)' }} />
            <span className="section-label">About</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Building Electronics,{' '}
            <span className="gradient-text">One Layer at a Time</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            {/* Identity Panel */}
            <div className="glass-card p-6 flex flex-col h-full relative overflow-hidden">
              {/* Decorative top circuit trace */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/20 via-cyan-400/40 to-transparent" />
              
              <div className="flex flex-col sm:flex-row items-start gap-10 mb-8">
                <div
                  className="flex-shrink-0 relative overflow-hidden group border"
                  style={{
                    width: 112,
                    height: 112,
                    borderRadius: '12px',
                    borderColor: 'rgba(0, 212, 255, 0.3)',
                    background: 'var(--bg-surface-2)',
                    boxShadow: '0 0 15px rgba(0, 212, 255, 0.08)',
                  }}
                >
                  <img
                    src="/images/profile.jpg"
                    alt="Madhan Raj M"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center top',
                    }}
                  />
                  <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-transparent transition-colors pointer-events-none" />
                </div>
                
                <div className="flex-1">
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      marginBottom: '16px',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    Madhan Raj M
                  </h3>
                  <div className="flex flex-col gap-1.5" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                    <p className="flex items-center gap-2 text-slate-300">
                      B.E. Electronics & Communication Engineering
                    </p>
                    <p className="font-mono text-xs opacity-80">
                      Meenakshi Sundararajan Engineering College, Chennai
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 flex-1 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I&apos;m an Electronics &amp; Communication Engineering graduate from Meenakshi Sundararajan Engineering College (CGPA 8.49/10). My strongest practical expertise is in <span className="text-cyan-400 font-medium">PCB design and hardware</span> — capturing schematics, routing multi-layer boards, and managing the complete ERC/DRC-to-Gerber fabrication workflow in KiCad and Altium Designer.
                </p>
                <p>
                  Beyond board layout, I develop hands-on <span className="text-emerald-400 font-medium">embedded systems and IoT networks</span> using STM32 (Arm Cortex-M3/M4) and ESP32 architectures, writing interrupt-driven C firmware across UART, SPI, and I²C sensor buses.
                </p>
                <p>
                  With supporting breadth in <span className="text-sky-300 font-medium">RF/antenna electromagnetic simulation</span> (CST/HFSS) and <span className="text-purple-300 font-medium">VLSI digital design</span> (Verilog HDL), I am actively taking on freelance PCB development while pursuing engineering opportunities.
                </p>
              </div>

            {/* Status badge */}
            <div className="mt-8 pt-6 border-t border-slate-800/50 flex flex-wrap gap-3">
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-xs border border-emerald-500/25"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for PCB Freelance
              </div>
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded bg-cyan-500/10 text-cyan-400 font-mono text-xs border border-cyan-500/25"
              >
                CGPA 8.49 / 10
              </div>
            </div>
            </div>
          </motion.div>

          {/* Engineering Focus Selector (Secondary Visual) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:pl-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">Interactive Focus Exploration</span>
            </div>

            {/* Focus list */}
            <div className="space-y-1.5 mb-5">
              {FOCUS_ITEMS.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    id={`focus-${item.id}`}
                    onClick={() => setActiveId(item.id)}
                    className="w-full text-left flex items-center gap-3.5 px-3.5 py-2.5 rounded-lg transition-all duration-200 hover:bg-slate-800/40"
                    style={{
                      background: isActive ? `rgba(${hexToRgb(item.color)}, 0.08)` : 'rgba(13, 21, 38, 0.3)',
                      border: isActive ? `1px solid rgba(${hexToRgb(item.color)}, 0.35)` : '1px solid rgba(30, 58, 95, 0.3)',
                      cursor: 'pointer',
                    }}
                    aria-pressed={isActive}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: isActive ? item.color : 'var(--text-muted)',
                        width: 22,
                        flexShrink: 0,
                      }}
                    >
                      {item.number}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        color: isActive ? item.color : 'var(--text-secondary)',
                        flex: 1,
                      }}
                    >
                      {item.title}
                    </span>
                    {isActive && (
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Focus detail panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="glass-card p-4"
                style={{ borderColor: `rgba(${hexToRgb(active.color)}, 0.2)` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: active.color }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      color: active.color,
                    }}
                  >
                    {active.title}
                  </span>
                </div>
                <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {active.desc}
                </p>
                <p
                  className="mt-2 pt-2 border-t"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    borderColor: 'rgba(30,58,95,0.4)',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.03em',
                  }}
                >
                  {active.detail}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}
