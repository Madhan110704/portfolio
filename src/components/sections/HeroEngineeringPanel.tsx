'use client';

import { motion } from 'framer-motion';
import { ASSETS } from '@/data/assets.config';

export default function HeroEngineeringPanel() {
  return (
    <div className="relative w-full">
      {/* Outer Glow & Ambient Depth */}
      <div 
        className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-cyan-500/20 opacity-70 blur-xl pointer-events-none"
        aria-hidden="true" 
      />

      {/* Main CAD Engineering Container */}
      <div 
        className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-[#070e1a]/95 shadow-2xl backdrop-blur-md"
        style={{
          boxShadow: '0 0 40px rgba(0, 212, 255, 0.12), inset 0 0 30px rgba(0, 22, 44, 0.8)',
        }}
      >
        <svg
          className="w-full h-auto block select-none"
          viewBox="0 0 760 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Madhan Raj M and STM32WB55 Engineering PCB Visualization"
        >
          <defs>
            {/* Grid Pattern */}
            <pattern id="eng-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0, 212, 255, 0.05)" strokeWidth="0.75" />
              <circle cx="20" cy="20" r="0.8" fill="rgba(0, 212, 255, 0.15)" />
            </pattern>

            {/* Copper Pour Hatch */}
            <pattern id="eng-copper" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 0 8 L 8 0 M -2 2 L 2 -2 M 6 10 L 10 6" stroke="rgba(0, 212, 255, 0.04)" strokeWidth="0.6" />
            </pattern>

            {/* Portrait Rounded Clip */}
            <clipPath id="portrait-clip">
              <rect x="36" y="60" width="168" height="195" rx="10" />
            </clipPath>

            {/* Glow Filter */}
            <filter id="cyan-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Trace Linear Gradients */}
            <linearGradient id="trace-pwr" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00e5a0" stopOpacity="0.8" />
            </linearGradient>

            <linearGradient id="rf-glow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="100%" stopColor="#7928ca" />
            </linearGradient>
          </defs>

          {/* Background CAD Grids */}
          <rect width="760" height="500" fill="#070e1a" />
          <rect width="760" height="500" fill="url(#eng-grid)" />
          <rect x="230" y="50" width="505" height="400" fill="url(#eng-copper)" />

          {/* CAD Board Outline & Corner Marks */}
          <rect
            x="16"
            y="16"
            width="728"
            height="468"
            rx="8"
            fill="none"
            stroke="rgba(0, 212, 255, 0.25)"
            strokeWidth="1"
            strokeDasharray="4 2"
          />

          {/* Precision Alignment Crosshairs */}
          {[
            [26, 26], [734, 26], [26, 474], [734, 474],
            [225, 26], [225, 474], [734, 250],
          ].map(([cx, cy], i) => (
            <g key={`cross-${i}`}>
              <line x1={cx - 5} y1={cy} x2={cx + 5} y2={cy} stroke="rgba(0, 212, 255, 0.4)" strokeWidth="0.8" />
              <line x1={cx} y1={cy - 5} x2={cx} y2={cy + 5} stroke="rgba(0, 212, 255, 0.4)" strokeWidth="0.8" />
              <circle cx={cx} cy={cy} r="2" fill="none" stroke="rgba(0, 212, 255, 0.3)" strokeWidth="0.6" />
            </g>
          ))}

          {/* Dimension Rules */}
          <line x1="230" y1="26" x2="720" y2="26" stroke="rgba(0, 212, 255, 0.2)" strokeWidth="0.75" />
          <text x="475" y="22" textAnchor="middle" fill="rgba(0, 212, 255, 0.65)" fontSize="8.5" fontFamily="monospace" letterSpacing="0.1em">
            CAD_WORKSPACE // BOARD_DIM: 72.00mm × 48.00mm // SCALE 1:1
          </text>

          {/* ══════════════════════════════════════════════════════════
              TOP CAD STATUS STRIP
              ══════════════════════════════════════════════════════════ */}
          <g transform="translate(30, 36)">
            {/* Status Indicator */}
            <circle cx="6" cy="6" r="4" fill="#00e5a0" filter="url(#cyan-glow)" />
            <motion.circle 
              cx="6" cy="6" r="7" 
              fill="none" stroke="#00e5a0" strokeWidth="0.9"
              animate={{ r: [4, 8, 4], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <text x="18" y="10" fill="#00e5a0" fontSize="10.5" fontFamily="monospace" fontWeight="700" letterSpacing="0.06em">
              4-LAYER PCB
            </text>
            <text x="106" y="10" fill="rgba(0, 212, 255, 0.4)" fontSize="10" fontFamily="monospace">|</text>
            <text x="118" y="10" fill="#00d4ff" fontSize="10.5" fontFamily="monospace" fontWeight="600">
              KiCad 8.0
            </text>
            <text x="188" y="10" fill="rgba(0, 212, 255, 0.4)" fontSize="10" fontFamily="monospace">|</text>
            <text x="200" y="10" fill="#38bdf8" fontSize="10.5" fontFamily="monospace" fontWeight="600">
              ERC/DRC: PASS [0 ERRORS]
            </text>
          </g>

          {/* Right Header Metadata */}
          <g transform="translate(450, 32)">
            <rect x="0" y="0" width="270" height="20" rx="3" fill="rgba(0, 212, 255, 0.1)" stroke="rgba(0, 212, 255, 0.3)" strokeWidth="0.8" />
            <text x="135" y="14" textAnchor="middle" fill="#00d4ff" fontSize="10" fontFamily="monospace" fontWeight="700" letterSpacing="0.08em">
              STM32WB55CEU6 WIRELESS SUBSYSTEM
            </text>
          </g>

          {/* Divider between Portrait Hub and PCB Layout */}
          <line x1="225" y1="40" x2="225" y2="465" stroke="rgba(0, 212, 255, 0.2)" strokeWidth="1" strokeDasharray="3 3" />

          {/* ══════════════════════════════════════════════════════════
              ZONE 1: ENGINEER IDENTITY & PROFILE PORTRAIT
              ══════════════════════════════════════════════════════════ */}
          {/* Portrait Container Frame */}
          <g>
            {/* Ambient Backing Card */}
            <rect
              x="32"
              y="56"
              width="176"
              height="203"
              rx="12"
              fill="#061120"
              stroke="rgba(0, 212, 255, 0.4)"
              strokeWidth="1.2"
            />
            <rect
              x="34"
              y="58"
              width="172"
              height="199"
              rx="11"
              fill="none"
              stroke="rgba(0, 212, 255, 0.2)"
              strokeWidth="0.75"
            />

            {/* Profile Photo: actual asset from public/images/profile/profile_hero.jpeg */}
            <image
              href={ASSETS.profile.hero}
              x="36"
              y="60"
              width="168"
              height="195"
              preserveAspectRatio="xMidYMin slice"
              clipPath="url(#portrait-clip)"
            />

            {/* Subtle Technical Grid & Glass Overlay on Photo */}
            <rect
              x="36"
              y="60"
              width="168"
              height="195"
              rx="10"
              fill="rgba(0, 30, 60, 0.08)"
              style={{ mixBlendMode: 'overlay' }}
            />

            {/* Technical Corner Brackets on Portrait */}
            {/* Top-Left */}
            <path d="M 38 72 L 38 62 L 48 62" fill="none" stroke="#00d4ff" strokeWidth="2" />
            {/* Top-Right */}
            <path d="M 202 72 L 202 62 L 192 62" fill="none" stroke="#00d4ff" strokeWidth="2" />
            {/* Bottom-Left */}
            <path d="M 38 243 L 38 253 L 48 253" fill="none" stroke="#00d4ff" strokeWidth="2" />
            {/* Bottom-Right */}
            <path d="M 202 243 L 202 253 L 192 253" fill="none" stroke="#00d4ff" strokeWidth="2" />

            {/* Portrait Header Ribbon */}
            <rect x="40" y="64" width="118" height="18" rx="3" fill="rgba(6, 17, 32, 0.92)" stroke="rgba(0, 212, 255, 0.45)" strokeWidth="0.8" />
            <text x="47" y="77" fill="#00d4ff" fontSize="9" fontFamily="monospace" fontWeight="700" letterSpacing="0.08em">
              ARCHITECT // REF-01
            </text>
            <circle cx="147" cy="73" r="2.5" fill="#00e5a0" />
          </g>

          {/* Engineer Personal Identity Block (Under Photo) */}
          <g transform="translate(32, 272)">
            {/* Technical Title Block Frame */}
            <rect
              x="0"
              y="0"
              width="176"
              height="188"
              rx="6"
              fill="rgba(8, 18, 34, 0.92)"
              stroke="rgba(0, 212, 255, 0.35)"
              strokeWidth="1"
            />
            <line x1="0" y1="38" x2="176" y2="38" stroke="rgba(0, 212, 255, 0.2)" strokeWidth="0.8" />
            <line x1="0" y1="94" x2="176" y2="94" stroke="rgba(0, 212, 255, 0.2)" strokeWidth="0.8" />
            <line x1="0" y1="142" x2="176" y2="142" stroke="rgba(0, 212, 255, 0.2)" strokeWidth="0.8" />

            {/* Section 1: Name */}
            <text x="10" y="14" fill="rgba(0, 212, 255, 0.75)" fontSize="7.5" fontFamily="monospace" fontWeight="600" letterSpacing="0.08em">
              DESIGN ENGINEER
            </text>
            <text x="10" y="31" fill="#ffffff" fontSize="15" fontFamily="var(--font-display), sans-serif" fontWeight="800" letterSpacing="-0.01em">
              Madhan Raj M
            </text>

            {/* Section 2: Degree & Discipline */}
            <text x="10" y="49" fill="rgba(0, 212, 255, 0.75)" fontSize="7.5" fontFamily="monospace" fontWeight="600" letterSpacing="0.08em">
              DISCIPLINE
            </text>
            <text x="10" y="63" fill="#38bdf8" fontSize="9.5" fontFamily="monospace" fontWeight="700" letterSpacing="0.02em">
              ELECTRONICS &amp;
            </text>
            <text x="10" y="76" fill="#38bdf8" fontSize="9.5" fontFamily="monospace" fontWeight="700" letterSpacing="0.02em">
              COMMUNICATION ENG.
            </text>
            <text x="10" y="88" fill="#94a3b8" fontSize="8" fontFamily="monospace" fontWeight="500">
              B.E. Graduate • Hardware Focus
            </text>

            {/* Section 3: College & Location */}
            <text x="10" y="106" fill="rgba(0, 212, 255, 0.75)" fontSize="7.5" fontFamily="monospace" fontWeight="600" letterSpacing="0.08em">
              INSTITUTION
            </text>
            <text x="10" y="120" fill="#f1f5f9" fontSize="9.5" fontFamily="sans-serif" fontWeight="600">
              Meenakshi Sundararajan
            </text>
            <text x="10" y="133" fill="#cbd5e1" fontSize="8.5" fontFamily="sans-serif">
              Engineering College, Chennai
            </text>

            {/* Section 4: Focus Badges */}
            <text x="10" y="153" fill="rgba(0, 212, 255, 0.75)" fontSize="7.5" fontFamily="monospace" fontWeight="600" letterSpacing="0.08em">
              CORE SPECIALIZATION
            </text>
            <g transform="translate(8, 158)">
              <rect x="0" y="0" width="76" height="18" rx="3" fill="rgba(0, 212, 255, 0.15)" stroke="rgba(0, 212, 255, 0.45)" strokeWidth="0.8" />
              <text x="38" y="12.5" textAnchor="middle" fill="#00d4ff" fontSize="8.5" fontFamily="monospace" fontWeight="700">
                PCB • KiCad
              </text>
              <rect x="82" y="0" width="78" height="18" rx="3" fill="rgba(0, 229, 160, 0.15)" stroke="rgba(0, 229, 160, 0.45)" strokeWidth="0.8" />
              <text x="121" y="12.5" textAnchor="middle" fill="#00e5a0" fontSize="8.5" fontFamily="monospace" fontWeight="700">
                STM32 • RF
              </text>
            </g>
          </g>

          {/* Traces routing from Identity Panel into the PCB layout */}
          <g>
            {/* Bus Line 1: CLK */}
            <path d="M 208 300 L 225 300 L 245 280 L 285 280" fill="none" stroke="rgba(0, 212, 255, 0.3)" strokeWidth="1" />
            <circle cx="208" cy="300" r="2" fill="#00d4ff" />

            {/* Bus Line 2: DATA */}
            <path d="M 208 335 L 235 335 L 260 360 L 310 360" fill="none" stroke="rgba(0, 212, 255, 0.3)" strokeWidth="1" />
            <circle cx="208" cy="335" r="2" fill="#00d4ff" />

            {/* Bus Line 3: RF_CTRL */}
            <path d="M 208 385 L 240 385 L 265 410 L 370 410" fill="none" stroke="rgba(0, 212, 255, 0.3)" strokeWidth="1" />
            <circle cx="208" cy="385" r="2" fill="#00e5a0" />

            {/* Animated signal packet from Identity to Circuit */}
            <motion.circle
              r="2.5"
              fill="#00d4ff"
              filter="url(#cyan-glow)"
              animate={{
                cx: [208, 225, 245, 285],
                cy: [300, 300, 280, 280],
                opacity: [0, 1, 1, 0],
              }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.circle
              r="2.5"
              fill="#00e5a0"
              filter="url(#cyan-glow)"
              animate={{
                cx: [208, 240, 265, 370],
                cy: [385, 385, 410, 410],
                opacity: [0, 1, 1, 0],
              }}
              transition={{ duration: 3.2, delay: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </g>

          {/* ══════════════════════════════════════════════════════════
              ZONE 2: STM32WB55 HARDWARE PCB SCHEMATIC & ROUTING
              ══════════════════════════════════════════════════════════ */}

          {/* 1. USB-C Power Input Receptacle (Left side of PCB zone) */}
          <g transform="translate(242, 76)">
            <rect
              x="0"
              y="0"
              width="66"
              height="62"
              rx="5"
              fill="rgba(10, 26, 48, 0.9)"
              stroke="rgba(0, 212, 255, 0.45)"
              strokeWidth="1.2"
            />
            <rect x="6" y="8" width="54" height="22" rx="3" fill="rgba(0, 212, 255, 0.12)" stroke="rgba(0, 212, 255, 0.35)" strokeWidth="0.8" />
            <text x="33" y="23" textAnchor="middle" fill="#00d4ff" fontSize="11" fontFamily="monospace" fontWeight="800">
              USB-C
            </text>
            <text x="33" y="42" textAnchor="middle" fill="#f1f5f9" fontSize="8" fontFamily="monospace" fontWeight="600">
              VBUS 5.0V
            </text>
            <text x="33" y="53" textAnchor="middle" fill="#38bdf8" fontSize="7.5" fontFamily="monospace">
              CC1/CC2 5.1k
            </text>

            {/* USB-C Pins */}
            {[-12, -4, 4, 12].map((off, idx) => (
              <rect key={`usb-pin-${idx}`} x={33 + off - 1.5} y="61" width="3" height="5" fill="rgba(0, 212, 255, 0.6)" rx="0.5" />
            ))}
          </g>

          {/* 2. Power Section: MIC5365 3.3V LDO Regulator */}
          <g transform="translate(242, 172)">
            <rect
              x="0"
              y="0"
              width="66"
              height="68"
              rx="5"
              fill="rgba(10, 26, 48, 0.9)"
              stroke="rgba(0, 229, 160, 0.45)"
              strokeWidth="1.2"
            />
            <text x="33" y="16" textAnchor="middle" fill="#00e5a0" fontSize="10" fontFamily="monospace" fontWeight="800">
              MIC5365
            </text>
            <text x="33" y="29" textAnchor="middle" fill="#38bdf8" fontSize="9.5" fontFamily="monospace" fontWeight="700">
              3.3V LDO
            </text>
            <line x1="8" y1="35" x2="58" y2="35" stroke="rgba(0, 229, 160, 0.25)" strokeWidth="0.8" />
            <text x="33" y="48" textAnchor="middle" fill="#cbd5e1" fontSize="8" fontFamily="monospace" fontWeight="500">
              CIN 4.7µF
            </text>
            <text x="33" y="59" textAnchor="middle" fill="#cbd5e1" fontSize="8" fontFamily="monospace" fontWeight="500">
              COUT 2.2µF
            </text>

            {/* PWR Indicator LED */}
            <circle cx="56" cy="14" r="2.5" fill="#00e5a0" filter="url(#cyan-glow)" />
            <motion.circle
              cx="56" cy="14" r="4.5"
              fill="none" stroke="#00e5a0" strokeWidth="0.6"
              animate={{ opacity: [0.3, 1, 0.3], r: [2.5, 5.5, 2.5] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </g>

          {/* 3. 32 MHz HSE High-Speed Crystal Oscillator */}
          <g transform="translate(420, 72)">
            <rect
              x="0"
              y="0"
              width="74"
              height="40"
              rx="4"
              fill="rgba(10, 26, 48, 0.9)"
              stroke="rgba(0, 212, 255, 0.45)"
              strokeWidth="1.2"
            />
            <text x="37" y="18" textAnchor="middle" fill="#00d4ff" fontSize="10.5" fontFamily="monospace" fontWeight="800">
              32 MHz HSE
            </text>
            <text x="37" y="31" textAnchor="middle" fill="#cbd5e1" fontSize="8" fontFamily="monospace" fontWeight="600">
              ±10 ppm • 10pF
            </text>

            {/* Crystal Pins */}
            <rect x="10" y="39" width="5" height="6" fill="rgba(0, 212, 255, 0.6)" />
            <rect x="59" y="39" width="5" height="6" fill="rgba(0, 212, 255, 0.6)" />
          </g>

          {/* 4. MAIN MCU: STM32WB55CEU6 (UFQFPN-48 Package) */}
          <g transform="translate(390, 155)">
            {/* Outer Package Shadow & Glow */}
            <rect
              x="-4"
              y="-4"
              width="142"
              height="142"
              rx="10"
              fill="rgba(0, 40, 80, 0.3)"
              stroke="rgba(0, 212, 255, 0.25)"
              strokeWidth="0.8"
            />

            {/* Silicon IC Body */}
            <rect
              x="0"
              y="0"
              width="134"
              height="134"
              rx="6"
              fill="#061224"
              stroke="#00d4ff"
              strokeWidth="1.4"
            />

            {/* Pin 1 Index Notch */}
            <circle cx="12" cy="12" r="3" fill="rgba(0, 212, 255, 0.4)" stroke="#00d4ff" strokeWidth="0.8" />

            {/* Center Exposed Ground / Thermal Pad */}
            <rect
              x="30"
              y="30"
              width="74"
              height="74"
              rx="3"
              fill="rgba(0, 212, 255, 0.08)"
              stroke="rgba(0, 212, 255, 0.3)"
              strokeWidth="0.8"
              strokeDasharray="2 2"
            />

            {/* Thermal Vias (3x3 Grid) */}
            {[42, 67, 92].map((vx) =>
              [42, 67, 92].map((vy) => (
                <circle key={`via-${vx}-${vy}`} cx={vx} cy={vy} r="2.2" fill="#061224" stroke="rgba(0, 212, 255, 0.5)" strokeWidth="0.75" />
              ))
            )}

            {/* Laser Engraved Markings */}
            <text x="67" y="55" textAnchor="middle" fill="#ffffff" fontSize="14" fontFamily="monospace" fontWeight="800" letterSpacing="0.04em">
              STM32WB55
            </text>
            <text x="67" y="69" textAnchor="middle" fill="#00d4ff" fontSize="11" fontFamily="monospace" fontWeight="700" letterSpacing="0.06em">
              CEU6
            </text>
            <text x="67" y="81" textAnchor="middle" fill="#cbd5e1" fontSize="7.5" fontFamily="monospace" fontWeight="600">
              ARM Cortex-M4 / M0+
            </text>
            <text x="67" y="93" textAnchor="middle" fill="#00e5a0" fontSize="7.5" fontFamily="monospace" fontWeight="700">
              BLE 5.4 • IEEE 802.15.4
            </text>

            {/* 48 Pins (12 on each of 4 sides) */}
            {/* Top Pins */}
            {Array.from({ length: 11 }, (_, i) => (
              <rect key={`pin-top-${i}`} x={14 + i * 9.8} y="-6" width="4" height="7" fill="rgba(0, 212, 255, 0.6)" rx="0.5" />
            ))}
            {/* Bottom Pins */}
            {Array.from({ length: 11 }, (_, i) => (
              <rect key={`pin-bot-${i}`} x={14 + i * 9.8} y="133" width="4" height="7" fill="rgba(0, 212, 255, 0.6)" rx="0.5" />
            ))}
            {/* Left Pins */}
            {Array.from({ length: 11 }, (_, i) => (
              <rect key={`pin-left-${i}`} x="-6" y={14 + i * 9.8} width="7" height="4" fill="rgba(0, 212, 255, 0.6)" rx="0.5" />
            ))}
            {/* Right Pins */}
            {Array.from({ length: 11 }, (_, i) => (
              <rect key={`pin-right-${i}`} x="133" y={14 + i * 9.8} width="7" height="4" fill="rgba(0, 212, 255, 0.6)" rx="0.5" />
            ))}

            {/* Subtle MCU Activity Pulse on Core */}
            <motion.circle
              cx="67"
              cy="67"
              r="34"
              fill="none"
              stroke="#00d4ff"
              strokeWidth="0.8"
              animate={{ opacity: [0.1, 0.45, 0.1], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </g>

          {/* 5. RF & Wireless Subsystem: Matching Network & u.FL Connector */}
          <g transform="translate(605, 155)">
            {/* RF Shield Zone Boundary */}
            <rect
              x="-5"
              y="-5"
              width="122"
              height="150"
              rx="6"
              fill="rgba(10, 26, 50, 0.45)"
              stroke="rgba(0, 212, 255, 0.35)"
              strokeWidth="0.9"
              strokeDasharray="3 2"
            />
            <text x="56" y="12" textAnchor="middle" fill="#00d4ff" fontSize="9.5" fontFamily="monospace" fontWeight="700" letterSpacing="0.06em">
              RF 2.4GHz SECTION
            </text>

            {/* Discrete LC Balun / Filter Components */}
            <rect x="10" y="24" width="22" height="14" rx="2" fill="rgba(0, 212, 255, 0.18)" stroke="rgba(0, 212, 255, 0.6)" strokeWidth="0.8" />
            <text x="21" y="34" textAnchor="middle" fill="#38bdf8" fontSize="7.5" fontFamily="monospace" fontWeight="700">L1</text>

            <rect x="10" y="44" width="22" height="14" rx="2" fill="rgba(0, 212, 255, 0.18)" stroke="rgba(0, 212, 255, 0.6)" strokeWidth="0.8" />
            <text x="21" y="54" textAnchor="middle" fill="#38bdf8" fontSize="7.5" fontFamily="monospace" fontWeight="700">C1</text>

            <text x="44" y="42" fill="#f1f5f9" fontSize="7.5" fontFamily="monospace" fontWeight="600">
              50Ω CPW-G
            </text>

            {/* u.FL Coaxial RF Connector Footprint */}
            <circle cx="78" cy="80" r="24" fill="rgba(10, 26, 48, 0.95)" stroke="#00d4ff" strokeWidth="1.4" />
            <circle cx="78" cy="80" r="14" fill="none" stroke="rgba(0, 212, 255, 0.5)" strokeWidth="0.8" />
            <circle cx="78" cy="80" r="4.5" fill="#00d4ff" filter="url(#cyan-glow)" />

            <text x="78" y="118" textAnchor="middle" fill="#ffffff" fontSize="12" fontFamily="monospace" fontWeight="800">
              u.FL / RF
            </text>
            <text x="78" y="132" textAnchor="middle" fill="#00e5a0" fontSize="9" fontFamily="monospace" fontWeight="700">
              2.4 GHz ANT
            </text>

            {/* Radiating RF Electromagnetic Waves */}
            {[28, 38, 48].map((rad, rIdx) => (
              <motion.circle
                key={`rf-wave-${rIdx}`}
                cx="78"
                cy="80"
                r={rad}
                fill="none"
                stroke="#00d4ff"
                strokeWidth="1"
                animate={{
                  opacity: [0, 0.7, 0],
                  r: [rad - 8, rad + 10],
                }}
                transition={{
                  duration: 2.2,
                  delay: rIdx * 0.45,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
            ))}
          </g>

          {/* 6. Tag-Connect SWD Debug & Programming Header */}
          <g transform="translate(390, 356)">
            <rect
              x="0"
              y="0"
              width="134"
              height="48"
              rx="4"
              fill="rgba(10, 26, 48, 0.9)"
              stroke="rgba(0, 212, 255, 0.45)"
              strokeWidth="1.2"
            />
            <text x="67" y="15" textAnchor="middle" fill="#00d4ff" fontSize="11" fontFamily="monospace" fontWeight="800">
              Tag-Connect / SWD
            </text>
            <text x="67" y="27" textAnchor="middle" fill="#cbd5e1" fontSize="8" fontFamily="monospace" fontWeight="600">
              SWDIO • SWCLK • SWO • NRST
            </text>

            {/* 6-Pin Tag-Connect Pads */}
            {[26, 46, 66, 86, 106].map((px, pIdx) => (
              <circle key={`swd-pad-${pIdx}`} cx={px} cy="37" r="3" fill="#061224" stroke="#00d4ff" strokeWidth="1" />
            ))}
          </g>

          {/* ══════════════════════════════════════════════════════════
              PCB COPPER TRACES & DYNAMIC SIGNAL PULSES
              ══════════════════════════════════════════════════════════ */}
          <g>
            {/* Power Trace: USB-C to 3.3V LDO */}
            <path d="M 275 138 L 275 172" fill="none" stroke="rgba(0, 229, 160, 0.4)" strokeWidth="2.5" />
            <motion.path
              d="M 275 138 L 275 172"
              fill="none"
              stroke="#00e5a0"
              strokeWidth="3"
              filter="url(#cyan-glow)"
              strokeDasharray="8 20"
              animate={{ strokeDashoffset: [-28, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
            />

            {/* 3.3V VDD Rail: LDO to STM32WB55 VDD Pins */}
            <path d="M 308 206 L 350 206 L 370 206 L 384 206" fill="none" stroke="rgba(0, 212, 255, 0.4)" strokeWidth="2.5" />
            <motion.path
              d="M 308 206 L 350 206 L 370 206 L 384 206"
              fill="none"
              stroke="#00d4ff"
              strokeWidth="3"
              filter="url(#cyan-glow)"
              strokeDasharray="12 24"
              animate={{ strokeDashoffset: [-36, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
            />

            {/* 32MHz HSE Clock Traces: Crystal to MCU OSC_IN / OSC_OUT */}
            <path d="M 433 112 L 433 135 L 442 145 L 442 149" fill="none" stroke="rgba(0, 212, 255, 0.35)" strokeWidth="1.2" />
            <path d="M 477 112 L 477 135 L 468 145 L 468 149" fill="none" stroke="rgba(0, 212, 255, 0.35)" strokeWidth="1.2" />
            {/* Clock Signal Pulse */}
            <motion.circle
              r="2.2"
              fill="#00d4ff"
              filter="url(#cyan-glow)"
              animate={{
                cx: [433, 433, 442, 442],
                cy: [112, 135, 145, 149],
                opacity: [0, 1, 1, 0],
              }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* RF Output Trace: MCU Pin 21 to RF Balun & u.FL */}
            <path
              d="M 524 220 L 565 220 L 590 200 L 617 200 L 683 235"
              fill="none"
              stroke="rgba(0, 212, 255, 0.5)"
              strokeWidth="2.5"
            />
            {/* Traveling RF Signal Packet */}
            <motion.path
              d="M 524 220 L 565 220 L 590 200 L 617 200 L 683 235"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="3"
              filter="url(#cyan-glow)"
              strokeDasharray="14 35"
              animate={{ strokeDashoffset: [-49, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
            />

            {/* SWD Debug Traces: MCU Bottom Pins to Tag-Connect */}
            <path d="M 435 289 L 435 356" fill="none" stroke="rgba(0, 212, 255, 0.3)" strokeWidth="1.2" />
            <path d="M 455 289 L 455 356" fill="none" stroke="rgba(0, 212, 255, 0.3)" strokeWidth="1.2" />
            <path d="M 475 289 L 475 356" fill="none" stroke="rgba(0, 212, 255, 0.3)" strokeWidth="1.2" />
            {/* SWD Packet */}
            <motion.circle
              r="2"
              fill="#00e5a0"
              animate={{
                cx: [455, 455],
                cy: [289, 356],
                opacity: [0, 1, 0],
              }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </g>

          {/* Test Points & Ground Stitch Vias */}
          <g>
            {[
              [340, 130, 'TP_VBUS'],
              [350, 160, 'TP_3V3'],
              [560, 136, 'TP_HSE'],
              [570, 260, 'TP_RF'],
            ].map(([x, y, label]) => (
              <g key={`tp-${label}`}>
                <circle cx={Number(x)} cy={Number(y)} r="3.5" fill="rgba(0, 212, 255, 0.2)" stroke="#00d4ff" strokeWidth="1" />
                <circle cx={Number(x)} cy={Number(y)} r="1.5" fill="#00d4ff" />
                <text x={Number(x) + 6} y={Number(y) + 3} fill="#38bdf8" fontSize="7.5" fontFamily="monospace" fontWeight="600">
                  {label}
                </text>
              </g>
            ))}

            {/* RF Shield Ground Vias along boundary */}
            {[170, 195, 220, 245, 270, 295].map((vy) => (
              <circle key={`rf-via-${vy}`} cx="600" cy={vy} r="2" fill="#061224" stroke="rgba(0, 212, 255, 0.4)" strokeWidth="0.6" />
            ))}
          </g>

          {/* ══════════════════════════════════════════════════════════
              BOTTOM CAD STATUS BAR & LAYER STACK INDICATOR
              ══════════════════════════════════════════════════════════ */}
          <g transform="translate(235, 420)">
            <rect
              x="0"
              y="0"
              width="495"
              height="40"
              rx="5"
              fill="rgba(8, 18, 34, 0.92)"
              stroke="rgba(0, 212, 255, 0.3)"
              strokeWidth="0.9"
            />

            {/* Layer Stack Badges */}
            <g transform="translate(10, 9)">
              <rect x="0" y="0" width="76" height="22" rx="3" fill="rgba(0, 212, 255, 0.15)" stroke="rgba(0, 212, 255, 0.45)" strokeWidth="0.8" />
              <text x="38" y="15" textAnchor="middle" fill="#00d4ff" fontSize="8.5" fontFamily="monospace" fontWeight="700">
                L1: TOP RF
              </text>

              <rect x="82" y="0" width="54" height="22" rx="3" fill="rgba(10, 26, 48, 0.85)" stroke="rgba(0, 212, 255, 0.25)" strokeWidth="0.8" />
              <text x="109" y="15" textAnchor="middle" fill="#f1f5f9" fontSize="8.5" fontFamily="monospace" fontWeight="600">
                L2: GND
              </text>

              <rect x="142" y="0" width="56" height="22" rx="3" fill="rgba(10, 26, 48, 0.85)" stroke="rgba(0, 212, 255, 0.25)" strokeWidth="0.8" />
              <text x="170" y="15" textAnchor="middle" fill="#f1f5f9" fontSize="8.5" fontFamily="monospace" fontWeight="600">
                L3: 3V3 PWR
              </text>

              <rect x="204" y="0" width="60" height="22" rx="3" fill="rgba(10, 26, 48, 0.85)" stroke="rgba(0, 212, 255, 0.25)" strokeWidth="0.8" />
              <text x="234" y="15" textAnchor="middle" fill="#f1f5f9" fontSize="8.5" fontFamily="monospace" fontWeight="600">
                L4: BOTTOM
              </text>
            </g>

            {/* Verification Status */}
            <g transform="translate(485, 24)">
              <text x="0" y="0" textAnchor="end" fill="#00e5a0" fontSize="9" fontFamily="monospace" fontWeight="700" letterSpacing="0.05em">
                HARDWARE DESIGN READY // ERC PASS ✓
              </text>
            </g>
          </g>
        </svg>
      </div>

      {/* Floating CAD Tag Badges for Depth */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        className="absolute -top-3 right-6 px-3 py-1 rounded-md border border-cyan-400/40 bg-[#071322]/90 shadow-lg text-[0.65rem] font-mono text-cyan-300 backdrop-blur-md hidden sm:flex items-center gap-1.5"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span>STM32WB55 • USB-C • RF • SWD</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -bottom-3 left-6 px-3 py-1 rounded-md border border-emerald-400/40 bg-[#071322]/90 shadow-lg text-[0.65rem] font-mono text-emerald-300 backdrop-blur-md hidden sm:flex items-center gap-1.5"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <span>KiCad 8.0 • 4-Layer • DRC Verified</span>
      </motion.div>

      {/* Responsive mobile spacer to cleanly separate panel from scroll indicator */}
      <div style={{ height: '140px' }} className="w-full lg:hidden pointer-events-none" aria-hidden="true" />
    </div>
  );
}
