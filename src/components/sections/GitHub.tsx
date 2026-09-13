'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';

// Manual repository list — no API keys needed, update freely
const REPOS = [
  {
    id: 'stm32wb55-pcb',
    name: 'STM32WB55-PCB',
    description: 'Custom 4-layer STM32WB55CEU6 wireless PCB with RF matching, USB-C, and Tag-Connect SWD. Designed in KiCad.',
    topics: ['KiCad', 'PCB', 'STM32WB55', 'RF', 'USB-C'],
    url: 'https://github.com/Madhan110704',
  },
  {
    id: 'stm32f1-devboard',
    name: 'STM32F103-DevBoard',
    description: '2-layer STM32F103C8T6 custom development board with SWD, AMS1117-3.3V, USB Micro-B, UART, I²C.',
    topics: ['KiCad', 'PCB', 'STM32F1', 'Embedded'],
    url: 'https://github.com/Madhan110704',
  },
  {
    id: 'approx-adder',
    name: 'Approximate-Full-Adder',
    description: 'Verilog RTL implementation of RCPFA and ERPFA approximate full adder variants. MATLAB image filtering validation.',
    topics: ['Verilog', 'VLSI', 'RTL', 'MATLAB'],
    url: 'https://github.com/Madhan110704',
  },
  {
    id: 'cardiac-monitor',
    name: 'Cardiac-Health-Monitor',
    description: 'ESP32-based cardiac health monitoring system with ThingSpeak IoT cloud integration.',
    topics: ['ESP32', 'IoT', 'ThingSpeak', 'Embedded-C'],
    url: 'https://github.com/Madhan110704',
  },
];

export default function GitHubSection() {
  return (
    <section id="github" className="section-padding" style={{ background: 'var(--bg-surface-1)' }} aria-label="GitHub Repositories">
      <div className="container-portfolio">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px" style={{ background: 'var(--accent-cyan)' }} />
              <span className="section-label">Open Source</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              GitHub{' '}
              <span className="gradient-text">Repositories</span>
            </h2>
          </div>
          <a
            href="https://github.com/Madhan110704"
            target="_blank"
            rel="noopener noreferrer"
            id="github-profile-link"
            className="btn-secondary flex items-center gap-2 w-fit"
          >
            <GithubIcon size={18} style={{ color: 'var(--accent-cyan)' }} />
            View Profile
            <ExternalLink size={12} />
          </a>
        </motion.div>

        {/* Repo cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {REPOS.map((repo, i) => (
            <motion.a
              key={repo.id}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              id={`repo-${repo.id}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-5 flex flex-col gap-3 group transition-all duration-300"
              style={{ textDecoration: 'none' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,255,0.3)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(0,212,255,0.08)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(30,58,95,0.5)';
                (e.currentTarget as HTMLElement).style.transform = 'none';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <GithubIcon size={15} style={{ color: 'var(--text-muted)' }} />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      color: 'var(--accent-cyan)',
                    }}
                  >
                    {repo.name}
                  </span>
                </div>
                <ExternalLink size={13} style={{ color: 'var(--text-muted)', opacity: 0, transition: 'opacity 0.2s' }} className="group-hover:opacity-100" />
              </div>

              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6, flex: 1 }}>
                {repo.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {repo.topics.map((t) => (
                  <span key={t} className="tech-tag" style={{ fontSize: '0.6rem', padding: '2px 5px' }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <p
          className="mt-6 text-center"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}
        >
          Repository links updated as projects are published —{' '}
          <a
            href="https://github.com/Madhan110704"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--accent-cyan)', textDecoration: 'none' }}
          >
            github.com/Madhan110704
          </a>
        </p>
      </div>
    </section>
  );
}
