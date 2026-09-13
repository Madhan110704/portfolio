'use client';

import { useEffect, useState } from 'react';
import { Project } from '@/data/projects';

interface NavItem {
  id: string;
  label: string;
}

export default function StickyNav({ project }: { project: Project }) {
  const [activeSection, setActiveSection] = useState('overview');

  const antennaNavItems: NavItem[] = [
    { id: 'overview', label: 'OVERVIEW' },
    { id: 'specs', label: 'SPECS' },
    { id: 'architecture', label: 'ARCHITECTURE' },
    { id: 'geometry', label: 'GEOMETRY' },
    { id: 'evolution', label: 'EVOLUTION' },
    { id: 'lc-model', label: 'LC MODEL' },
    { id: 'feed-dgs', label: 'FEED & DGS' },
    { id: 'simulation', label: 'SIMULATION' },
    { id: 'performance', label: 'PERFORMANCE' },
    { id: 'applications', label: 'APPLICATIONS' },
    { id: 'limitations', label: 'LIMITATIONS' },
    { id: 'future-scope', label: 'FUTURE SCOPE' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'tools', label: 'TOOLS' },
  ];

  const standardNavItems: NavItem[] = [
    { id: 'overview', label: 'OVERVIEW' },
    { id: 'objective', label: 'OBJECTIVE' },
  ];

  if (project.caseStudy.architecture) standardNavItems.push({ id: 'architecture', label: 'ARCHITECTURE' });
  if (project.caseStudy.designApproach) standardNavItems.push({ id: 'design-approach', label: 'APPROACH' });
  if (project.caseStudy.schematicDesc) standardNavItems.push({ id: 'schematic', label: 'SCHEMATIC' });
  if (project.caseStudy.pcbDesignDesc) standardNavItems.push({ id: 'pcb-design', label: 'PCB DESIGN' });
  if (project.caseStudy.rfDesignDesc) standardNavItems.push({ id: 'rf-design', label: 'RF' });
  if (project.caseStudy.verificationDesc || project.caseStudy.resultsDesc) standardNavItems.push({ id: 'verification', label: 'RESULTS' });
  if (project.media?.renderFront) standardNavItems.push({ id: '3d-visualization', label: '3D' });
  standardNavItems.push({ id: 'gallery', label: 'GALLERY' });
  standardNavItems.push({ id: 'tools', label: 'TOOLS' });

  const navItems = project.id === 'uwb-antenna' ? antennaNavItems : standardNavItems;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the visible section that is closest to the top
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by top coordinate
          visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navItems]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 shadow-xl shadow-slate-950/30">
      <div className="container-portfolio">
        {/* MOBILE NAVIGATION: Option A - Compact Case Study Dropdown */}
        <div className="sm:hidden py-2.5">
          <div className="relative flex items-center justify-between px-3 py-2 rounded-lg bg-slate-900/90 border border-cyan-500/30 text-cyan-400">
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider">
              <span className="text-slate-500 text-[0.65rem] uppercase">Section:</span>
              <span className="font-bold text-slate-100">
                {navItems.find((n) => n.id === activeSection)?.label || 'OVERVIEW'}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-mono">
              <span className="text-[0.68rem] tracking-widest text-cyan-400/80 uppercase">NAVIGATE</span>
              <svg className="w-3.5 h-3.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {/* Native Select Overlay for Perfect Mobile UX */}
            <select
              value={activeSection}
              onChange={(e) => scrollTo(e.target.value)}
              aria-label="Case Study Section Navigation"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer bg-slate-900 text-white text-base"
            >
              {navItems.map(({ id, label }) => (
                <option key={id} value={id} className="bg-slate-900 text-slate-200">
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* DESKTOP NAVIGATION: Smooth Horizontal Tab Bar */}
        <nav className="hidden sm:flex items-center gap-1 overflow-x-auto py-3 no-scrollbar mask-edges">
          {navItems.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full font-mono text-xs tracking-widest transition-all ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/40 shadow-[0_0_12px_rgba(0,212,255,0.2)]'
                    : 'text-slate-400 hover:text-slate-200 border border-transparent hover:bg-slate-900/60'
                }`}
              >
                {label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
