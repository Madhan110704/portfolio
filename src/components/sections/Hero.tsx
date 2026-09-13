'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Mail, FileDown, ChevronRight, MessageCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from '@/components/ui/BrandIcons';
import { ASSETS } from '@/data/assets.config';
import HeroBackground from './HeroBackground';
import HeroEngineeringPanel from './HeroEngineeringPanel';

const CONTACT_LINKS = [
  {
    id: 'whatsapp',
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    href: 'https://wa.me/919176070805',
    color: '#25d366',
  },
  {
    id: 'email',
    icon: Mail,
    label: 'Email',
    href: 'mailto:madhanraj5002@gmail.com',
    color: '#00d4ff',
  },
  {
    id: 'linkedin',
    icon: LinkedinIcon,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/madhan-raj-11072004s',
    color: '#0a66c2',
  },
  {
    id: 'github',
    icon: GithubIcon,
    label: 'GitHub',
    href: 'https://github.com/Madhan110704',
    color: '#e8edf5',
  },
];

const DOMAINS = ['PCB Design', 'Embedded Systems', 'RF & Wireless', 'VLSI'];

export default function Hero() {

  return (
    <section
      id="hero"
      className="relative block lg:flex lg:items-center min-h-screen overflow-hidden"
      aria-label="Hero section"
    >
      {/* Animated PCB Background Environment */}
      <HeroBackground />

      <div className="container-portfolio hero-content-wrapper relative z-10 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT — Text content */}
          <div>
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-8 h-px" style={{ background: 'var(--accent-cyan)' }} />
              <span className="section-label">Electronics &amp; Communication Engineer</span>
            </motion.div>

            {/* 1. Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-4"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.3rem, 5.5vw, 4.5rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
              }}
            >
              <span style={{ color: 'var(--text-primary)' }} className="whitespace-nowrap">MADHAN</span>{' '}
              <span className="gradient-text whitespace-nowrap">RAJ M</span>
            </motion.h1>

            {/* 2. One-line positioning statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 font-display font-medium text-slate-200"
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                lineHeight: 1.4,
                maxWidth: 540,
              }}
            >
              PCB Design &amp; Hardware Specialist <span className="text-cyan-400/80 font-normal">with Embedded &amp; RF Engineering</span>
            </motion.p>

            {/* 3. Short description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 max-w-lg text-sm sm:text-base leading-relaxed text-slate-400"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Engineering custom schematics, multi-layer high-density PCB layouts, and robust firmware — taking complex hardware from circuit concept to fabrication-ready production.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <motion.a 
                whileHover={{ y: -3, boxShadow: '0 8px 25px rgba(0,212,255,0.4)' }}
                href="#projects" 
                className="btn-primary" 
                id="hero-view-work"
              >
                View Engineering Work
                <ChevronRight size={16} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -3, boxShadow: '0 8px 25px rgba(10,15,28,0.6)' }}
                href={ASSETS.resumeDownload} 
                download="Madhan_Raj_M_Resume.pdf"
                className="btn-secondary" 
                id="hero-resume"
                aria-label="Download Resume"
              >
                <FileDown size={16} />
                Download Resume
              </motion.a>
              <motion.a 
                whileHover={{ y: -3, boxShadow: '0 8px 25px rgba(10,15,28,0.6)' }}
                href="#contact" 
                className="btn-secondary" 
                id="hero-contact"
              >
                Let&apos;s Work Together
              </motion.a>
            </motion.div>

            {/* Contact icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-4"
              aria-label="Contact links"
            >
              {CONTACT_LINKS.map((c) => (
                <motion.a
                  whileHover={{ y: -3, scale: 1.05 }}
                  key={c.id}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  id={`hero-${c.id}`}
                  aria-label={c.label}
                  className="p-2 rounded-lg border transition-all duration-300 group"
                  style={{
                    borderColor: 'rgba(30,58,95,0.6)',
                    background: 'rgba(10,15,28,0.6)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = c.color;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 14px ${c.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(30,58,95,0.6)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  <c.icon
                    size={18}
                    className="transition-colors duration-300"
                    style={{ color: 'var(--text-muted)' }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Custom Engineering Visual Panel */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [-4, 4, -4] }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.3 }, 
              y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } 
            }}
            className="relative w-full max-w-2xl mx-auto lg:max-w-none"
          >
            <HeroEngineeringPanel />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="section-label" style={{ fontSize: '0.6rem' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={14} style={{ color: 'var(--text-muted)' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
