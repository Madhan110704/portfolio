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
    <div className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 shadow-xl shadow-slate-950/20">
      <div className="container-portfolio">
        <nav className="flex items-center gap-1 overflow-x-auto py-3 no-scrollbar mask-edges">
          {navItems.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full font-mono text-[0.65rem] sm:text-xs tracking-widest transition-all ${
                  isActive
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                    : 'text-slate-500 hover:text-slate-300 border border-transparent'
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
