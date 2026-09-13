'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from '@/components/ui/BrandIcons';

const CONTACT_ACTIONS = [
  {
    id: 'whatsapp',
    icon: WhatsAppIcon,
    label: 'WhatsApp Me',
    sublabel: '+91 91760 70805',
    href: 'https://wa.me/919176070805',
    color: '#25d366',
  },
  {
    id: 'email',
    icon: Mail,
    label: 'Email Me',
    sublabel: 'madhanraj5002@gmail.com',
    href: 'mailto:madhanraj5002@gmail.com',
    color: '#00d4ff',
  },
  {
    id: 'linkedin',
    icon: LinkedinIcon,
    label: 'Connect on LinkedIn',
    sublabel: 'linkedin.com/in/madhan-raj-11072004s',
    href: 'https://linkedin.com/in/madhan-raj-11072004s',
    color: '#0a66c2',
  },
  {
    id: 'github',
    icon: GithubIcon,
    label: 'GitHub',
    sublabel: 'github.com/Madhan110704',
    href: 'https://github.com/Madhan110704',
    color: '#e8edf5',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding" aria-label="Contact">
      <div className="container-portfolio">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-px" style={{ background: 'var(--accent-cyan)' }} />
            <span className="section-label">Get in Touch</span>
            <div className="w-6 h-px" style={{ background: 'var(--accent-cyan)' }} />
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: 12,
            }}
          >
            Let&apos;s Build{' '}
            <span className="gradient-text">Something</span>
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              maxWidth: 480,
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Have a PCB, embedded, or electronics project in mind?
            Reach out — let&apos;s discuss the requirements.
          </p>
          <div
            className="flex items-center justify-center gap-2 mt-4"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}
          >
            <MapPin size={12} />
            Chennai, Tamil Nadu, India
          </div>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          {CONTACT_ACTIONS.map((action, i) => (
            <motion.a
              key={action.id}
              href={action.href}
              target={action.href.startsWith('http') ? '_blank' : undefined}
              rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              id={`contact-${action.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card p-5 flex flex-col items-center text-center gap-3 group transition-all duration-300"
              style={{ textDecoration: 'none' }}
              aria-label={action.label}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${action.color}50`;
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-5px)';
                (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px ${action.color}15`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(30,58,95,0.5)';
                (e.currentTarget as HTMLElement).style.transform = 'none';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `rgba(${hexToRgb(action.color)},0.1)`,
                  border: `1px solid rgba(${hexToRgb(action.color)},0.3)`,
                }}
              >
                <action.icon size={22} style={{ color: action.color }} />
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: 3 }}>
                  {action.label}
                </p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.67rem', color: 'var(--text-muted)', wordBreak: 'break-all' }}>
                  {action.sublabel}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* LinkedIn featured CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-center"
        >
          <a
            href="https://linkedin.com/in/madhan-raj-11072004s"
            target="_blank"
            rel="noopener noreferrer"
            id="contact-linkedin-featured"
            className="btn-primary inline-flex"
          >
            <LinkedinIcon size={16} />
            Let's Build Something
          </a>
        </motion.div>
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
