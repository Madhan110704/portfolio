'use client';

import { MessageCircle, Mail, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import { ASSETS } from '@/data/assets.config';

const FOOTER_LINKS = [
  { label: 'GitHub',   href: 'https://github.com/Madhan110704',            icon: GithubIcon,     id: 'footer-github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/madhan-raj-11072004s', icon: LinkedinIcon,   id: 'footer-linkedin' },
  { label: 'WhatsApp', href: 'https://wa.me/919176070805',                  icon: MessageCircle,  id: 'footer-whatsapp' },
  { label: 'Email',    href: 'mailto:madhanraj5002@gmail.com',              icon: Mail,           id: 'footer-email' },
];

const DOMAINS = ['PCB Design', 'Embedded Systems', 'RF & Wireless', 'VLSI'];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'var(--bg-surface-2)',
        borderTop: '1px solid rgba(30,58,95,0.5)',
      }}
      aria-label="Footer"
    >
      <div className="container-portfolio py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div
              className="inline-flex items-center gap-2 mb-4"
            >
              <div
                className="w-8 h-8 rounded border flex items-center justify-center text-xs font-bold"
                style={{
                  background: 'linear-gradient(135deg, #00d4ff22, #0077cc22)',
                  borderColor: 'rgba(0,212,255,0.35)',
                  color: '#00d4ff',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                MR
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: 'var(--text-primary)',
                }}
              >
                Madhan Raj M
              </span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
              Electronics & Communication Engineer
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {DOMAINS.map((d) => (
                <span
                  key={d}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    padding: '2px 6px',
                    borderRadius: 3,
                    background: 'rgba(0,212,255,0.06)',
                    border: '1px solid rgba(0,212,255,0.15)',
                    color: 'rgba(0,212,255,0.6)',
                  }}
                >
                  {d}
                </span>
              ))}
            </div>

            {/* Availability */}
            <div
              className="flex items-center gap-2 mt-4"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-green)' }}>
                Available for PCB & Electronics Development
              </span>
            </div>
          </div>

          {/* Quick nav */}
          <div>
            <p className="section-label mb-4">Navigation</p>
            <ul className="space-y-2">
              {['#about','#skills','#experience','#projects','#freelance','#achievements','#contact'].map((href) => {
                const label = href.replace('#','').charAt(0).toUpperCase() + href.replace('#','').slice(1);
                return (
                  <li key={href}>
                    <a
                      href={href}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.82rem',
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--accent-cyan)')}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-4">Contact</p>
            <div className="flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  id={link.id}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 transition-colors"
                  style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textDecoration: 'none' }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--accent-cyan)')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-muted)')}
                  aria-label={link.label}
                >
                  <link.icon size={14} />
                  {link.label}
                </a>
              ))}

              <a
                href={ASSETS.resumeDownload}
                download="Madhan_Raj_M_Resume.pdf"
                id="footer-resume"
                className="flex items-center gap-2 mt-2 btn-secondary !py-1.5 !px-4 !text-xs w-fit"
                aria-label="Download Resume"
              >
                <FileDown size={13} />
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: 'rgba(30,58,95,0.4)' }}
        >
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>
            © {year} Madhan Raj M. All rights reserved.
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', opacity: 0.6 }}>
            Built with Next.js · Designed for engineering excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
