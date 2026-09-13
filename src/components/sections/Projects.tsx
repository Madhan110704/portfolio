'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Box } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PROJECTS, EMBEDDED_PROJECTS, RF_ANTENNA_EXPERIENCE, type ProjectCategory } from '@/data/projects';

const FILTERS: { label: string; value: ProjectCategory | 'ALL' }[] = [
  { label: 'All',       value: 'ALL' },
  { label: 'PCB',       value: 'PCB' },
  { label: 'Embedded',  value: 'EMBEDDED' },
  { label: 'RF / Antenna', value: 'RF' },
  { label: 'VLSI',      value: 'VLSI' },
  { label: 'IoT',       value: 'IOT' },
];

const CATEGORY_COLORS: Record<string, string> = {
  PCB:      '#00d4ff',
  EMBEDDED: '#00e5a0',
  RF:       '#ffa500',
  VLSI:     '#b388ff',
  IOT:      '#4fc3f7',
};

export default function Projects() {
  const router = useRouter();
  const [filter, setFilter] = useState<ProjectCategory | 'ALL'>('ALL');

  const flagshipProject = PROJECTS.find(p => p.id === 'stm32wb55')!;
  const gridProjects = PROJECTS.filter((p) => p.featured && p.id !== 'stm32wb55');
  const visibleProjects  = filter === 'ALL'
    ? gridProjects
    : gridProjects.filter((p) => p.categories.includes(filter));

  return (
    <>
      <section id="projects" className="section-padding" style={{ background: 'var(--bg-surface-1)' }} aria-label="Projects">
        <div className="container-portfolio">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px" style={{ background: 'var(--accent-cyan)' }} />
              <span className="section-label">Engineering Work</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Featured{' '}
              <span className="gradient-text">Projects</span>
            </h2>
          </motion.div>

          {/* FLAGSHIP PROJECT */}
          {(filter === 'ALL' || filter === 'PCB') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="section-label" style={{ color: 'var(--accent-cyan)' }}>FEATURED ENGINEERING WORK</span>
              </div>
              <div className="glass-card p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-14 xl:gap-16 overflow-hidden group">
                {/* Media Area */}
                <div 
                  className="w-full lg:w-[45%] flex-shrink-0 relative cursor-pointer overflow-hidden rounded-xl bg-slate-950/90 border border-slate-800/80 group-hover:border-cyan-500/30 transition-colors"
                  style={{ minHeight: 320 }}
                  onClick={() => router.push(`/projects/${flagshipProject.id}`)}
                >
                  {flagshipProject.media?.hero ? (
                    <div className="w-full h-full flex items-center justify-center p-6 sm:p-8">
                      <img 
                        src={flagshipProject.media.hero} 
                        alt="3D visualization of the STM32WB55CEU6 4-layer PCB"
                        className="w-full h-auto max-h-[320px] object-contain object-center rounded-lg group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 h-full min-h-[320px]">
                      <Box size={48} className="mb-4 text-cyan-500/50" />
                      <span className="font-mono text-cyan-400 text-sm tracking-widest bg-cyan-900/30 px-4 py-2 rounded border border-cyan-500/30">
                        [STM32WB55 3D MODEL / RENDER TO BE ADDED]
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-cyan-950/10 group-hover:bg-transparent transition-colors pointer-events-none" />
                </div>

                {/* Content Area */}
                <div className="w-full lg:flex-1 min-w-0 flex flex-col justify-center py-2 lg:py-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-xs text-cyan-500 opacity-70">01</span>
                    <span className="tech-tag" style={{ fontSize: '0.6rem' }}>PCB DESIGN</span>
                    <span className="tech-tag" style={{ fontSize: '0.6rem' }}>RF / WIRELESS</span>
                  </div>
                  
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-slate-100 mb-4 tracking-tight leading-tight">
                    {flagshipProject.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {flagshipProject.description}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                    {flagshipProject.specs.slice(0, 6).map(spec => (
                      <div key={spec.label} className="flex flex-col">
                        <span className="font-mono text-[0.6rem] text-slate-500 uppercase tracking-wider mb-1">{spec.label}</span>
                        <span className="font-mono text-xs text-cyan-400 truncate" title={spec.value}>{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${flagshipProject.id}`}
                    className="flex items-center gap-2 text-cyan-400 font-display text-sm font-bold tracking-wide hover:text-cyan-300 transition-colors mt-auto w-max group/btn"
                  >
                    EXPLORE CASE STUDY
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-t border-slate-800 pt-12" role="group" aria-label="Project filter">
            {FILTERS.map((f) => {
              const isActive = filter === f.value;
              const color    = f.value === 'ALL' ? '#00d4ff' : CATEGORY_COLORS[f.value];
              return (
                <button
                  key={f.value}
                  id={`filter-${f.value}`}
                  onClick={() => setFilter(f.value)}
                  className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200"
                  style={{
                    fontFamily: 'var(--font-display)',
                    background: isActive ? `rgba(${hexToRgb(color)},0.12)` : 'rgba(13,21,38,0.6)',
                    border: isActive ? `1px solid rgba(${hexToRgb(color)},0.5)` : '1px solid rgba(30,58,95,0.4)',
                    color: isActive ? color : 'var(--text-muted)',
                    cursor: 'pointer',
                  }}
                  aria-pressed={isActive}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          {/* Project grid */}
          <motion.div layout className="grid md:grid-cols-2 gap-5">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <ProjectCard
                    project={project}
                    onClick={() => router.push(`/projects/${project.id}`)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {visibleProjects.length === 0 && filter !== 'PCB' && (
            <div className="text-center py-12" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
              No projects in this category yet.
            </div>
          )}

          {/* Embedded & IoT Projects Gallery — Always Expanded */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <div
              className="p-5 rounded-xl mb-6"
              style={{
                background: 'rgba(13,21,38,0.6)',
                border: '1px solid rgba(30,58,95,0.5)',
              }}
            >
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent-cyan)', marginBottom: 2 }}>
                EMBEDDED & IOT SYSTEMS ARCHIVE
              </p>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                Embedded & IoT Projects Gallery
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 4 }}>
                {EMBEDDED_PROJECTS.length} hands-on embedded, biomedical, sensor, and robotics projects
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {EMBEDDED_PROJECTS.map((ep, i) => (
                <motion.div
                  key={ep.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card flex flex-col overflow-hidden border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  {/* Image if available */}
                  {ep.image && (
                    <div className="w-full aspect-[16/10] bg-slate-950/80 border-b border-slate-800/60 p-2 flex items-center justify-center overflow-hidden relative">
                      <img
                        src={ep.image}
                        alt={ep.title}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                      {ep.caption && (
                        <div className="absolute bottom-1 right-2 text-[0.6rem] font-mono text-slate-400/80 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800/50">
                          {ep.caption.split(':')[0]}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="p-4 flex flex-col flex-1">
                    {/* Number & Category */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-xs text-cyan-400 font-semibold">{ep.number}</span>
                      <span className="font-mono text-[0.6rem] text-slate-400 uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                        {ep.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem', marginBottom: 6, color: 'var(--text-primary)' }}>
                      {ep.title}
                    </h4>

                    {/* Description */}
                    <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: 10 }}>
                      {ep.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4 space-y-1">
                      {ep.keyFeatures.slice(0, 3).map((feat) => (
                        <div key={feat} className="flex items-start gap-1.5 text-[0.72rem] text-slate-400">
                          <span className="text-cyan-400 text-xs leading-none mt-0.5">▸</span>
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-slate-800/50">
                      {ep.tags.map((tag) => (
                        <span key={tag} className="tech-tag" style={{ fontSize: '0.6rem', padding: '2px 6px' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* GENERAL RF & ANTENNA SIMULATION SECTION */}
          {(filter === 'ALL' || filter === 'RF') && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-20 border-t border-slate-800/80 pt-16"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-px" style={{ background: 'var(--accent-orange, #ffa500)' }} />
                <span className="section-label" style={{ color: '#ffa500' }}>GENERAL RF PORTFOLIO</span>
              </div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-slate-100 mb-3 tracking-tight">
                {RF_ANTENNA_EXPERIENCE.title}
              </h3>
              <p className="text-slate-400 text-sm max-w-3xl leading-relaxed mb-8">
                {RF_ANTENNA_EXPERIENCE.description} Characterized via S11 return loss, radiation gain, and directivity using HFSS and CST Studio Suite.
              </p>

              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Left: Topologies & Tools */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="glass-card p-5 border border-slate-800">
                    <h4 className="font-display text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">
                      Simulated Antenna Topologies
                    </h4>
                    <div className="space-y-2.5">
                      {RF_ANTENNA_EXPERIENCE.antennas.map((ant) => (
                        <div
                          key={ant.name}
                          className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/60"
                        >
                          <div>
                            <span className="text-sm font-medium text-slate-200 block">{ant.name}</span>
                            <span className="text-[0.7rem] text-slate-500 font-mono">{ant.type}</span>
                          </div>
                          <span className="font-mono text-[0.65rem] px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/20">
                            {ant.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass-card p-5 border border-slate-800">
                    <h4 className="font-display text-xs font-bold text-slate-300 uppercase tracking-widest mb-3">
                      Characterization & Verification Metrics
                    </h4>
                    <ul className="space-y-2 mb-4">
                      {RF_ANTENNA_EXPERIENCE.characterization.map((c) => (
                        <li key={c} className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                          <span className="text-orange-400">✓</span> {c}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-800/60">
                      {RF_ANTENNA_EXPERIENCE.tools.map((tool) => (
                        <span key={tool} className="tech-tag" style={{ fontSize: '0.65rem', padding: '3px 8px', color: '#ffa500', borderColor: 'rgba(255,165,0,0.3)' }}>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Authentic Simulation Figures */}
                <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
                  {RF_ANTENNA_EXPERIENCE.images.map((img) => (
                    <div key={img.src} className="glass-card overflow-hidden border border-slate-800 flex flex-col">
                      <div className="w-full aspect-[4/3] bg-slate-950 p-2 flex items-center justify-center">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-3 bg-slate-900/60 border-t border-slate-800/60">
                        <p className="font-mono text-[0.68rem] text-slate-400 leading-snug">
                          {img.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

    </>
  );
}

function ProjectCard({
  project,
  onClick,
}: {
  project: (typeof PROJECTS)[0];
  onClick: () => void;
}) {
  const primaryCategory = project.categories[0];
  const accentColor     = CATEGORY_COLORS[primaryCategory] ?? '#00d4ff';
  const mainImage       = project.media?.hero || project.media?.renderFront;

  return (
    <div
      className="glass-card p-4 sm:p-5 flex flex-col cursor-pointer group transition-all duration-300 gap-4"
      style={{ height: '100%' }}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      tabIndex={0}
      role="button"
      aria-label={`Explore ${project.title}`}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = `${accentColor}40`;
        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 30px ${accentColor}12`;
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(30,58,95,0.5)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
        (e.currentTarget as HTMLElement).style.transform = 'none';
      }}
    >
      {/* Image area */}
      <div
        className="w-full relative overflow-hidden rounded-xl bg-slate-950/85 border border-slate-800/80 group-hover:border-cyan-500/30 transition-colors"
        style={{ aspectRatio: '16/9' }}
        title={mainImage ? `${project.title} Hero` : 'No image'}
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
        {mainImage ? (
          <div className="w-full h-full flex items-center justify-center p-3 sm:p-4">
            <img 
              src={mainImage} 
              alt={project.title} 
              className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
        ) : (
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <span className="font-mono text-xs tracking-widest opacity-80 bg-slate-900/80 px-3 py-1 rounded">
              [EMBEDDED SYSTEMS]
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-1 pt-1 pb-1 flex flex-col flex-1">
        {/* Number + category */}
        <div className="flex items-center gap-2 mb-2">
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: accentColor,
              opacity: 0.7,
            }}
          >
            {project.number}
          </span>
          {project.categories.map((cat) => (
            <span
              key={cat}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                padding: '1px 5px',
                borderRadius: 3,
                background: `rgba(${hexToRgb(accentColor)},0.08)`,
                border: `1px solid rgba(${hexToRgb(accentColor)},0.25)`,
                color: accentColor,
              }}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: '0.95rem',
            marginBottom: 4,
            color: 'var(--text-primary)',
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            flex: 1,
            marginBottom: 12,
          }}
        >
          {project.description.substring(0, 110)}…
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-tag" style={{ fontSize: '0.6rem', padding: '2px 5px' }}>
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', padding: '2px 0', fontFamily: 'var(--font-mono)' }}>
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* CTA */}
        <div
          className="flex items-center gap-1 text-xs font-semibold transition-all duration-200 group-hover:gap-2"
          style={{ color: accentColor, fontFamily: 'var(--font-display)' }}
        >
          Explore Project
          <ArrowRight size={13} />
        </div>
      </div>
    </div>
  );
}

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}
