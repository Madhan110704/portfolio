'use client';

import { motion } from 'framer-motion';
import { Cpu, Terminal, Hammer, MessageSquare } from 'lucide-react';

const SERVICES = [
  {
    category: 'PRIMARY: PCB DESIGN',
    icon: Cpu,
    color: '#00d4ff',
    items: [
      'Schematic Capture (KiCad / Altium)',
      '2-Layer & Multi-Layer PCB Layout',
      'Component & Footprint Selection',
      'Design Rules Check (ERC / DRC)',
      'Thermal & EMI Routing Optimization',
      'Fabrication-Ready Gerber Generation',
      'BOM & PCB Documentation',
    ],
  },
  {
    category: 'HARDWARE & PROTOTYPING',
    icon: Hammer,
    color: '#ffa500',
    items: [
      '3D Board Visualization & Review',
      'Electronics Circuit Prototyping',
      'Bench Testing & Debugging',
      'Assembly & Hardware Documentation',
    ],
  },
  {
    category: 'SUPPORTING CAPABILITIES',
    icon: Terminal,
    color: '#00e5a0',
    items: [
      'Embedded Firmware (C / Arduino)',
      'Sensor-to-Cloud IoT Integration',
      'Antenna Simulation (CST / HFSS)',
      'Custom RTL / Verilog Modeling',
    ],
  },
];

export default function Freelance() {
  return (
    <section id="freelance" className="section-padding" aria-label="Freelance Services">
      <div className="container-portfolio max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-12 text-center"
          style={{
            background: 'linear-gradient(145deg, rgba(13,21,38,0.8) 0%, rgba(10,15,28,0.95) 100%)',
            borderColor: 'rgba(0,212,255,0.25)',
          }}
        >
          {/* Availability Badge */}
          <div className="flex justify-center mb-6">
            <div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono"
              style={{
                background: 'rgba(0,229,160,0.1)',
                border: '1px solid rgba(0,229,160,0.3)',
                color: 'var(--accent-green)',
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              AVAILABLE FOR PCB PROJECTS
            </div>
          </div>

          <h2
            className="mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}
          >
            PCB Design &{' '}
            <span className="gradient-text">Electronics Development</span>
          </h2>

          <p className="max-w-2xl mx-auto mb-12 text-slate-400">
            Available for selected PCB and electronics development work.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left mb-12">
            {SERVICES.map((group, idx) => {
              const Icon = group.icon;
              return (
                <div key={group.category} className="flex flex-col">
                  <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-800">
                    <div className="p-2 rounded-lg" style={{ background: `rgba(${hexToRgb(group.color)},0.1)` }}>
                      <Icon size={18} style={{ color: group.color }} />
                    </div>
                    <h3 className="font-display font-bold text-slate-200 tracking-wide">
                      {group.category}
                    </h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                        <span style={{ color: group.color, fontSize: '0.8rem' }}>▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <a
              href="https://wa.me/919176070805"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageSquare size={16} />
              Discuss a Project
            </a>
          </div>
        </motion.div>
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
