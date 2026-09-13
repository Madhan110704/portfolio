'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import { ASSETS } from '@/data/assets.config';

const NAV_LINKS = [
  { label: 'Home',         href: '#hero' },
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Freelance',    href: '#freelance' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActive]  = useState('hero');
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [mobileOpen]);

  // Disable automatic scroll restoration on reload
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  // Intersection observer for active section
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-xl border-b'
            : 'bg-[#06090f]/90 backdrop-blur-md border-b border-slate-800/40 lg:bg-transparent lg:backdrop-blur-none lg:border-transparent'
        }`}
        style={{
          background: scrolled ? 'rgba(6,9,15,0.92)' : undefined,
          borderColor: scrolled ? 'rgba(30,58,95,0.5)' : undefined,
        }}
      >
        <div className="container-portfolio">
          <nav
            className="flex items-center justify-between h-16"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
              className="flex items-center gap-2 group"
              aria-label="Madhan Raj M – Home"
            >
              <div
                className="w-8 h-8 rounded border flex items-center justify-center text-xs font-bold transition-all duration-300 group-hover:shadow-lg flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #00d4ff22, #0077cc22)',
                  borderColor: 'rgba(0,212,255,0.4)',
                  color: '#00d4ff',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                MR
              </div>
              <span
                className="text-sm font-semibold tracking-wide"
                style={{ fontFamily: 'var(--font-display)', color: '#e8edf5' }}
              >
                Madhan Raj M
              </span>
            </a>

            {/* Desktop Links */}
            <ul className="hidden lg:flex items-center gap-1" role="list">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive  = activeSection === sectionId;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className={`px-3 py-1.5 text-sm rounded-md transition-all duration-200 font-medium ${
                        isActive
                          ? 'text-cyan-300'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                      style={{
                        fontFamily: 'var(--font-display)',
                        background: isActive ? 'rgba(0,212,255,0.08)' : 'transparent',
                      }}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="https://github.com/Madhan110704"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md text-slate-400 hover:text-cyan-300 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://linkedin.com/in/madhan-raj-11072004s"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md text-slate-400 hover:text-cyan-300 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={ASSETS.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !py-1.5 !px-4 !text-xs"
                aria-label="Resume (opens in new tab)"
              >
                <FileDown size={14} />
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-btn"
              className="lg:hidden p-2 rounded-md text-slate-400 hover:text-cyan-300 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 lg:hidden glass border-b"
            style={{ borderColor: 'rgba(30,58,95,0.5)' }}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="container-portfolio py-4">
              <ul className="flex flex-col gap-1" role="list">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className="flex items-center px-3 py-2.5 text-sm rounded-md text-slate-300 hover:text-cyan-300 hover:bg-cyan-900/20 transition-all"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t" style={{ borderColor: 'rgba(30,58,95,0.5)' }}>
                <a
                  href="https://github.com/Madhan110704"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-300"
                >
                  <GithubIcon size={16} /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/madhan-raj-11072004s"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-300"
                >
                  <LinkedinIcon size={16} /> LinkedIn
                </a>
                <a
                  href={ASSETS.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300"
                  aria-label="Resume (opens in new tab)"
                >
                  <FileDown size={16} /> Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
