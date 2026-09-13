'use client';

import { motion } from 'framer-motion';
import { TIMELINE_ITEMS } from '@/data/timeline';

export default function Experience() {
  const PARTICLES = [
    { x: '10%', y: '15%', duration: 24 },
    { x: '88%', y: '25%', duration: 28 },
    { x: '15%', y: '70%', duration: 22 },
    { x: '82%', y: '80%', duration: 26 },
    { x: '92%', y: '45%', duration: 20 },
    { x: '8%', y: '50%', duration: 32 },
  ];

  return (
    <section id="experience" className="section-padding" aria-label="Education and Experience">
      <div className="container-portfolio max-w-4xl mx-auto relative z-10">
        {/* Floating background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {PARTICLES.map((p, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400/30"
              style={{ left: p.x, top: p.y }}
              animate={{
                y: [0, -35, 0],
                opacity: [0.15, 0.7, 0.15],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-px" style={{ background: 'var(--accent-cyan)' }} />
            <span className="section-label">Background</span>
            <div className="w-6 h-px" style={{ background: 'var(--accent-cyan)' }} />
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Engineering <span className="gradient-text">Timeline</span>
          </h2>
          <p className="mt-2 text-xs font-mono text-cyan-400/60 uppercase tracking-widest">
            Chronological Signal Path // Education &amp; Industry Exposure
          </p>
        </motion.div>

        {/* Compact Engineering Signal Path Timeline */}
        <div className="relative mx-auto">
          {/* Main Continuous Vertical Signal Bus Trace */}
          <div className="absolute left-[88px] sm:left-[140px] top-6 bottom-8 w-[2px] -translate-x-1/2 pointer-events-none">
            {/* Passive copper track base */}
            <div className="w-full h-full bg-gradient-to-b from-cyan-500/20 via-cyan-400/35 to-emerald-400/25 rounded-full" />

            {/* Traveling Signal Pulse Packet */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-1.5 h-24 rounded-full"
              style={{
                background: 'linear-gradient(to bottom, transparent, #00d4ff 50%, #ffffff 80%, transparent)',
                boxShadow: '0 0 14px #00d4ff, 0 0 24px rgba(0, 212, 255, 0.8)',
              }}
              animate={{
                y: ['-10%', '420%'],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>

          {/* Chronological Milestone List */}
          <div className="space-y-6 sm:space-y-8 relative z-10">
            {TIMELINE_ITEMS.map((item, index) => {
              const color = item.type === 'education' ? '#00d4ff' : '#00e5a0';
              const isMajor = item.title.includes('B.E.') || item.title.includes('Intern');

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative flex items-start"
                >
                  {/* LEFT: Year / Date Callout */}
                  <div className="w-[76px] sm:w-[124px] flex-shrink-0 text-right pr-3 sm:pr-4 pt-1">
                    <span
                      className="font-mono text-[0.72rem] sm:text-xs font-semibold tracking-tight inline-block"
                      style={{ color }}
                    >
                      {item.year}
                    </span>
                    <div className="text-[0.62rem] font-mono text-slate-500 uppercase tracking-wider hidden sm:block">
                      {item.type}
                    </div>
                  </div>

                  {/* CENTER: Technical Node & Horizontal Connector */}
                  <div className="relative flex items-center justify-center flex-shrink-0 w-8 sm:w-10 pt-2">
                    {/* Concentric Node Rings */}
                    <div className="relative z-20 flex items-center justify-center">
                      <motion.div
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125"
                        style={{
                          backgroundColor: '#070e1a',
                          borderColor: color,
                          boxShadow: `0 0 8px ${color}80`,
                        }}
                        animate={{
                          boxShadow: isMajor
                            ? [`0 0 8px ${color}60`, `0 0 20px ${color}`, `0 0 8px ${color}60`]
                            : [`0 0 4px ${color}40`, `0 0 12px ${color}90`, `0 0 4px ${color}40`],
                        }}
                        transition={{
                          duration: isMajor ? 2.5 : 3.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: index * 0.4,
                        }}
                      >
                        {/* Core active center pin */}
                        <div
                          className="w-1.5 h-1.5 rounded-full m-auto mt-[2px] sm:mt-[2.5px]"
                          style={{ backgroundColor: color }}
                        />
                      </motion.div>
                    </div>

                    {/* Compact Horizontal Connector Trace (Bridge from Node into Content) */}
                    <div
                      className="absolute left-1/2 top-[15px] sm:top-[16px] h-[2px] w-6 sm:w-8 z-10 transition-all duration-300 group-hover:w-8 sm:group-hover:w-10"
                      style={{
                        background: `linear-gradient(90deg, ${color}, rgba(${hexToRgb(color)}, 0.4))`,
                        boxShadow: `0 0 8px ${color}60`,
                      }}
                    />
                  </div>

                  {/* RIGHT: Compact Milestone Information */}
                  <div className="flex-1 min-w-0 pl-4 sm:pl-5">
                    <div
                      className="rounded-xl p-3.5 sm:p-4 border transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-950/20"
                      style={{
                        background: 'rgba(8, 16, 30, 0.75)',
                        borderColor: `rgba(${hexToRgb(color)}, 0.18)`,
                        backdropFilter: 'blur(8px)',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
                      }}
                    >
                      {/* Title & Detail Badge Line */}
                      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 mb-1">
                        <h3
                          className="font-bold text-sm sm:text-base tracking-tight"
                          style={{
                            fontFamily: 'var(--font-display)',
                            color: 'var(--text-primary)',
                          }}
                        >
                          {item.title}
                        </h3>
                        <span
                          className="font-mono text-xs font-medium px-2 py-0.5 rounded border"
                          style={{
                            color,
                            backgroundColor: `rgba(${hexToRgb(color)}, 0.08)`,
                            borderColor: `rgba(${hexToRgb(color)}, 0.25)`,
                          }}
                        >
                          {item.detail}
                        </span>
                      </div>

                      {/* Institution & Location */}
                      <p className="text-xs sm:text-sm text-slate-300 mb-2">
                        {item.institution}
                        {item.location && (
                          <span className="text-slate-400 font-mono text-xs"> — {item.location}</span>
                        )}
                      </p>

                      {/* Technical Tags */}
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[0.68rem] px-2 py-0.5 rounded"
                              style={{
                                background: 'rgba(15, 23, 42, 0.8)',
                                border: '1px solid rgba(0, 212, 255, 0.15)',
                                color: 'rgba(148, 163, 184, 0.9)',
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Compact Highlights/Focus List */}
                      {item.highlights && item.highlights.length > 0 && (
                        <div className="mt-2.5 pt-2 border-t border-slate-800/80">
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                            {item.highlights.map((h) => (
                              <li
                                key={h}
                                className="flex items-center gap-1.5 text-xs text-slate-300 leading-normal"
                              >
                                <span
                                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                  style={{ backgroundColor: color }}
                                />
                                <span className="truncate">{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
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

