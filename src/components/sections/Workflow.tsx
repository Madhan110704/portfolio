'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const STEPS = [
  { id: 'requirements',   label: 'Requirements',        desc: 'Define electrical specs, form factor, I/O, power budget and component constraints.' },
  { id: 'schematic',      label: 'Schematic Capture',   desc: 'Place components, draw nets, define power domains and hierarchy in KiCad / Altium.' },
  { id: 'components',     label: 'Component Selection', desc: 'Verify datasheets, footprints, tolerances, supply chain availability and cost.' },
  { id: 'footprints',     label: 'Footprint Assignment', desc: 'Assign PCB footprints, verify land patterns against IPC-7351 standards.' },
  { id: 'placement',      label: 'PCB Placement',       desc: 'Place components logically — RF first, power second, digital third.' },
  { id: 'routing',        label: 'Routing',             desc: 'Route critical signals (RF, high-speed, power) with controlled impedance.' },
  { id: 'planes',         label: 'Ground / Power Planes', desc: 'Pour ground and power planes. Verify via stitching and plane isolation.' },
  { id: 'erc-drc',        label: 'ERC / DRC',           desc: 'Run electrical and design rule checks. Resolve all violations.' },
  { id: '3d-review',      label: '3D Visualization',    desc: 'Review mechanical fit, connector clearance and component height in 3D.' },
  { id: 'fabrication',    label: 'Fabrication Output',  desc: 'Generate Gerber files, drill files, BOM and assembly drawings.' },
  { id: 'testing',        label: 'Testing & Validation', desc: 'Verify power rails, signal integrity and functionality with bench instruments.' },
];

export default function Workflow() {
  return (
    <section id="workflow" className="section-padding" aria-label="PCB Design Workflow">
      <div className="container-portfolio">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px" style={{ background: 'var(--accent-cyan)' }} />
            <span className="section-label">Engineering Process</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            PCB Design{' '}
            <span className="gradient-text">Workflow</span>
          </h2>
          <p className="mt-3 max-w-lg text-sm" style={{ color: 'var(--text-muted)' }}>
            A structured engineering process from requirements through fabrication and testing.
          </p>
        </motion.div>

        {/* Workflow steps */}
        <div className="flex flex-col items-center max-w-2xl mx-auto">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="w-full flex flex-col items-center"
            >
              {/* Step card */}
              <div
                className="w-full max-w-md glass-card p-4 hover:scale-[1.02] transition-all duration-300 group"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,255,0.35)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,212,255,0.08)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(30,58,95,0.5)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <div className="flex items-center gap-3">
                  {/* Step number node */}
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold transition-all duration-300 group-hover:shadow-lg"
                    style={{
                      background: 'rgba(0,212,255,0.1)',
                      border: '1px solid rgba(0,212,255,0.35)',
                      color: 'var(--accent-cyan)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {step.label}
                    </h3>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.5, marginTop: 2 }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Connector arrow (not after last step) */}
              {i < STEPS.length - 1 && (
                <div className="flex flex-col items-center my-1">
                  <div className="w-px h-4" style={{ background: 'rgba(0,212,255,0.25)' }} />
                  <ArrowDown size={12} style={{ color: 'rgba(0,212,255,0.35)' }} />
                  <div className="w-px h-1" style={{ background: 'rgba(0,212,255,0.15)' }} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
