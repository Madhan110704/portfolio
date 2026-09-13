'use client';

import { motion } from 'framer-motion';
import { Trophy, Users, Star, Award } from 'lucide-react';
import { CERTIFICATIONS, ACHIEVEMENTS } from '@/data/certifications';

const ICON_MAP: Record<string, React.ElementType> = {
  trophy: Trophy,
  users:  Users,
  star:   Star,
};

const CERT_CATEGORY_COLORS: Record<string, string> = {
  VLSI:       '#b388ff',
  Embedded:   '#00e5a0',
  FPGA:       '#4fc3f7',
  Simulation: '#ffa500',
};

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding" aria-label="Achievements and Certifications">
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
            <span className="section-label">Recognition & Learning</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Achievements &{' '}
            <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <div>
            <p className="section-label mb-6">Achievements</p>
            <div className="space-y-4">
              {ACHIEVEMENTS.map((ach, i) => {
                const Icon = ICON_MAP[ach.icon] ?? Trophy;
                const isTop = ach.id === 'hackz2024';
                
                return (
                  <motion.div
                    key={ach.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`glass-card flex gap-4 transition-transform duration-300 ${
                      isTop 
                        ? 'p-6 hover:scale-[1.02] border-cyan-500/40 bg-cyan-950/10' 
                        : 'p-4 hover:scale-[1.01]'
                    }`}
                    style={isTop ? { boxShadow: '0 8px 32px rgba(0,212,255,0.05)' } : {}}
                  >
                    <div
                      className={`rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isTop ? 'w-12 h-12' : 'w-10 h-10'
                      }`}
                      style={{
                        background: isTop ? 'rgba(0,212,255,0.15)' : 'rgba(0,212,255,0.05)',
                        border: isTop ? '1px solid rgba(0,212,255,0.4)' : '1px solid rgba(0,212,255,0.15)',
                      }}
                    >
                      <Icon size={isTop ? 22 : 18} style={{ color: 'var(--accent-cyan)' }} />
                    </div>
                    <div>
                      {isTop && (
                        <div className="text-[0.6rem] font-mono text-cyan-400 tracking-widest mb-1.5 opacity-80">
                          HIGHLIGHT
                        </div>
                      )}
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 600,
                          fontSize: isTop ? '1.1rem' : '0.92rem',
                          color: isTop ? '#fff' : 'var(--text-primary)',
                          marginBottom: 2,
                        }}
                      >
                        {ach.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: isTop ? '0.75rem' : '0.7rem',
                          color: 'var(--accent-cyan)',
                          opacity: 0.9,
                          marginBottom: isTop ? 6 : 4,
                        }}
                      >
                        {ach.subtitle}
                      </p>
                      <p style={{ fontSize: isTop ? '0.85rem' : '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                        {ach.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <p className="section-label mb-6">Certifications</p>
            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, i) => {
                const color = CERT_CATEGORY_COLORS[cert.category] ?? '#00d4ff';
                return (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-4 p-3 rounded-lg transition-all duration-200 group"
                    style={{
                      background: 'rgba(13,21,38,0.5)',
                      border: '1px solid rgba(30,58,95,0.4)',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = `rgba(${hexToRgb(color)},0.3)`;
                      (e.currentTarget as HTMLElement).style.background = `rgba(${hexToRgb(color)},0.04)`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(30,58,95,0.4)';
                      (e.currentTarget as HTMLElement).style.background = 'rgba(13,21,38,0.5)';
                    }}
                  >
                    {/* Cert icon */}
                    <div
                      className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0"
                      style={{ background: `rgba(${hexToRgb(color)},0.1)`, border: `1px solid rgba(${hexToRgb(color)},0.25)` }}
                    >
                      <Award size={14} style={{ color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 500,
                          fontSize: '0.83rem',
                          color: 'var(--text-primary)',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {cert.title}
                      </p>
                      <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        {cert.issuer}
                      </p>
                    </div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.62rem',
                        padding: '2px 6px',
                        borderRadius: 3,
                        background: `rgba(${hexToRgb(color)},0.08)`,
                        border: `1px solid rgba(${hexToRgb(color)},0.2)`,
                        color,
                        flexShrink: 0,
                      }}
                    >
                      {cert.category}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
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
