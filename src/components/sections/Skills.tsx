'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILL_CATEGORIES } from '@/data/skills';
import { Cpu, Radio, Layers, Activity, Code2, Microchip, ChevronDown } from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  cpu:      Cpu,
  microchip: Microchip,
  radio:    Radio,
  layers:   Layers,
  activity: Activity,
  code:     Code2,
};

const CATEGORY_COLORS: Record<string, string> = {
  pcb:         '#00d4ff',
  mcu:         '#00e5a0',
  embedded:    '#4fc3f7',
  vlsi:        '#b388ff',
  rf:          '#ffa500',
  programming: '#ff7eb6',
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding" style={{ background: 'var(--bg-surface-1)' }} aria-label="Skills">
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
            <span className="section-label">Technical Skills</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Engineering{' '}
            <span className="gradient-text">Toolkit</span>
          </h2>
        </motion.div>

        {/* Skill Panels Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <SkillPanel key={cat.id} category={cat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillPanel({ category, index }: { category: typeof SKILL_CATEGORIES[0], index: number }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = ICON_MAP[category.icon] ?? Cpu;
  const color = CATEGORY_COLORS[category.id];
  
  // Split skills into primary (top 4) and secondary (rest)
  const primarySkills = category.skills.slice(0, 4);
  const secondarySkills = category.skills.slice(4);
  const hasMore = secondarySkills.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card flex flex-col p-6 transition-all duration-300"
      style={{
        borderColor: `rgba(${hexToRgb(color)},0.2)`,
        background: `linear-gradient(145deg, rgba(13,21,38,0.7) 0%, rgba(10,15,28,0.9) 100%)`
      }}
    >
      {/* Panel Header */}
      <div className="flex items-center justify-between mb-6 border-b border-slate-800/50 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg" style={{ background: `rgba(${hexToRgb(color)},0.1)` }}>
            <Icon size={18} style={{ color }} />
          </div>
          <div>
            <div className="text-xs font-mono opacity-60 mb-0.5" style={{ color }}>{category.number}</div>
            <h3 className="font-display font-bold tracking-wide text-slate-100">{category.title.toUpperCase()}</h3>
          </div>
        </div>
      </div>

      {/* Primary Skills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {primarySkills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded-md text-sm font-medium border"
            style={{
              background: `rgba(${hexToRgb(color)},0.08)`,
              borderColor: `rgba(${hexToRgb(color)},0.2)`,
              color: 'var(--text-primary)',
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Expand/Reveal Secondary Skills */}
      {hasMore && (
        <div className="mt-auto pt-2">
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: 'auto', marginBottom: 16 },
                  collapsed: { opacity: 0, height: 0, marginBottom: 0 }
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-2 pt-2">
                  {secondarySkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-md text-xs font-mono border border-slate-800 bg-slate-900/50 text-slate-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-xs font-mono hover:text-white transition-colors w-full group"
            style={{ color: 'var(--text-muted)' }}
          >
            <div className="h-px flex-1 bg-slate-800 group-hover:bg-slate-700 transition-colors" />
            <span className="flex items-center gap-1">
              {expanded ? 'HIDE' : `+${secondarySkills.length} MORE`}
              <ChevronDown size={14} className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
            </span>
            <div className="h-px flex-1 bg-slate-800 group-hover:bg-slate-700 transition-colors" />
          </button>
        </div>
      )}
    </motion.div>
  );
}

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}
