'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform, useReducedMotion } from 'framer-motion';

export default function HeroBackground() {
  const prefersReducedMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1100);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [prefersReducedMotion, isMobile]);

  // Spring physics for butter-smooth mouse parallax
  const springConfig = { stiffness: 25, damping: 25 };
  const springX = useSpring(0, springConfig);
  const springY = useSpring(0, springConfig);

  useEffect(() => {
    springX.set(mousePos.x);
    springY.set(mousePos.y);
  }, [mousePos, springX, springY]);

  // Multi-tier parallax depth
  const cadX = useTransform(springX, [-1, 1], [6, -6]);
  const cadY = useTransform(springY, [-1, 1], [6, -6]);

  const traceX = useTransform(springX, [-1, 1], [14, -14]);
  const traceY = useTransform(springY, [-1, 1], [14, -14]);

  const waveX = useTransform(springX, [-1, 1], [22, -22]);
  const waveY = useTransform(springY, [-1, 1], [22, -22]);

  const particleX = useTransform(springX, [-1, 1], [34, -34]);
  const particleY = useTransform(springY, [-1, 1], [34, -34]);

  if (!isMounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {/* ─── BASE AMBIENT RADIAL LIGHTING ─────────────────────────────────── */}
      {/* Soft radial glow behind the engineering panel (Right side) */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 650px 550px at 75% 48%, rgba(0, 212, 255, 0.08) 0%, rgba(0, 119, 204, 0.03) 50%, transparent 80%),
            radial-gradient(ellipse 450px 400px at 20% 80%, rgba(0, 229, 160, 0.04) 0%, transparent 70%),
            radial-gradient(circle 350px at 50% 15%, rgba(0, 212, 255, 0.03) 0%, transparent 70%)
          `,
        }}
      />

      {/* ─── TIER 1: CAD GRID & PRECISION MARKERS (Deepest) ─────────────── */}
      <motion.div
        className="absolute inset-0"
        style={{ x: cadX, y: cadY }}
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Fine CAD Dot Grid */}
            <pattern id="cadGridMajor" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="1" fill="rgba(0, 212, 255, 0.15)" />
              <path d="M 100 0 L 100 8 M 0 100 L 8 100" stroke="rgba(0, 212, 255, 0.05)" strokeWidth="0.5" />
            </pattern>
            <pattern id="cadGridMinor" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="0.6" fill="rgba(0, 212, 255, 0.06)" />
            </pattern>

            {/* Signal Pulse Glow Filter */}
            <filter id="pulseGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Grid Fills */}
          <rect width="100%" height="100%" fill="url(#cadGridMinor)" opacity={isMobile ? 0.3 : 0.6} />
          <rect width="100%" height="100%" fill="url(#cadGridMajor)" opacity={isMobile ? 0.4 : 0.8} />

          {/* Outer CAD Corner Alignment Brackets & Crosshairs */}
          {!isMobile && (
            <g opacity="0.35" stroke="rgba(0, 212, 255, 0.4)" strokeWidth="1">
              {/* Top-Left Fiducial */}
              <path d="M 40 60 L 40 40 L 60 40" fill="none" />
              <circle cx="40" cy="40" r="2" fill="#00d4ff" />
              <text x="48" y="55" fill="rgba(0, 212, 255, 0.6)" fontSize="7" fontFamily="monospace" letterSpacing="0.1em">
                [000.0, 000.0] // ORIGIN
              </text>

              {/* Top-Right Fiducial */}
              <path d="M 1880 60 L 1880 40 L 1860 40" fill="none" />
              <circle cx="1880" cy="40" r="2" fill="#00d4ff" />
              <text x="1810" y="55" fill="rgba(0, 212, 255, 0.5)" fontSize="7" fontFamily="monospace" letterSpacing="0.1em">
                CAD_ENV // VER 8.0
              </text>

              {/* Bottom-Left Fiducial */}
              <path d="M 40 1020 L 40 1040 L 60 1040" fill="none" />
              <circle cx="40" cy="1040" r="2" fill="#00d4ff" />
              <text x="48" y="1035" fill="rgba(0, 212, 255, 0.5)" fontSize="7" fontFamily="monospace" letterSpacing="0.1em">
                GRID_SNAP: 1.27mm
              </text>

              {/* Bottom-Right Fiducial */}
              <path d="M 1880 1020 L 1880 1040 L 1860 1040" fill="none" />
              <circle cx="1880" cy="1040" r="2" fill="#00d4ff" />

              {/* Viewport Margin Ruler Ticks (Top & Bottom) */}
              {[200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800].map((x) => (
                <g key={`tick-top-${x}`}>
                  <line x1={x} y1="36" x2={x} y2="44" stroke="rgba(0, 212, 255, 0.25)" strokeWidth="0.75" />
                  <text x={x} y="32" textAnchor="middle" fill="rgba(0, 212, 255, 0.25)" fontSize="6" fontFamily="monospace">
                    {x}
                  </text>
                </g>
              ))}

              {/* Center Margin Axis Crosshairs */}
              <g opacity="0.4">
                <line x1="960" y1="30" x2="960" y2="50" stroke="#00d4ff" strokeWidth="0.75" />
                <line x1="950" y1="40" x2="970" y2="40" stroke="#00d4ff" strokeWidth="0.75" />
                <line x1="960" y1="1030" x2="960" y2="1050" stroke="#00d4ff" strokeWidth="0.75" />
                <line x1="950" y1="1040" x2="970" y2="1040" stroke="#00d4ff" strokeWidth="0.75" />
              </g>
            </g>
          )}
        </svg>
      </motion.div>

      {/* ─── TIER 2: PERIPHERAL PCB TRACES & SIGNAL PULSES ───────────────── */}
      <motion.div
        className="absolute inset-0"
        style={{ x: traceX, y: traceY }}
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* PCB Copper Traces (Faint Cyan & Emerald) */}
          <g fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            {/* TRACE 1: Top-Right Breakout (From Engineering Panel outward to Top-Right margin) */}
            <path
              id="pcbTrace1"
              d="M 1440 200 L 1620 200 L 1720 100 L 1880 100"
              stroke="rgba(0, 212, 255, 0.16)"
            />
            {/* TRACE 2: Mid-Right Bus (From Panel edge to Right edge) */}
            <path
              id="pcbTrace2"
              d="M 1480 340 L 1660 340 L 1740 420 L 1920 420"
              stroke="rgba(0, 212, 255, 0.14)"
            />
            {/* Parallel Differential Pair Traces */}
            <path
              d="M 1480 350 L 1656 350 L 1736 430 L 1920 430"
              stroke="rgba(0, 212, 255, 0.1)"
              strokeDasharray="4 2"
            />

            {/* TRACE 3: Bottom-Right Power Rail */}
            <path
              id="pcbTrace3"
              d="M 1450 780 L 1590 780 L 1680 870 L 1880 870"
              stroke="rgba(0, 229, 160, 0.15)"
            />

            {/* TRACE 4: Under-Panel Interconnect (Runs across bottom toward left) */}
            <path
              id="pcbTrace4"
              d="M 1120 860 L 1020 960 L 520 960 L 440 1040 L 220 1040"
              stroke="rgba(0, 212, 255, 0.13)"
            />

            {/* TRACE 5: Top-Center Interconnect (Runs across top header space) */}
            <path
              id="pcbTrace5"
              d="M 1080 150 L 980 60 L 580 60 L 520 110"
              stroke="rgba(0, 212, 255, 0.14)"
            />

            {/* TRACE 6: Far-Left Vertical Peripheral Bus */}
            <path
              id="pcbTrace6"
              d="M 70 200 L 70 480 L 120 530 L 120 680"
              stroke="rgba(0, 212, 255, 0.12)"
            />

            {/* TRACE 7: Far-Left Bottom Corner Routing */}
            <path
              id="pcbTrace7"
              d="M 120 720 L 70 770 L 70 940 L 150 1020"
              stroke="rgba(0, 229, 160, 0.12)"
            />
          </g>

          {/* Connection Nodes (Vias & Pads) */}
          <g>
            {/* Via Rings at trace intersections */}
            {[
              [1440, 200, '#00d4ff'],
              [1720, 100, '#00d4ff'],
              [1880, 100, '#00d4ff'],
              [1480, 340, '#00d4ff'],
              [1740, 420, '#00d4ff'],
              [1450, 780, '#00e5a0'],
              [1680, 870, '#00e5a0'],
              [1880, 870, '#00e5a0'],
              [1120, 860, '#00d4ff'],
              [1020, 960, '#00d4ff'],
              [520, 960, '#00d4ff'],
              [220, 1040, '#00d4ff'],
              [1080, 150, '#00d4ff'],
              [980, 60, '#00d4ff'],
              [580, 60, '#00d4ff'],
              [70, 200, '#00d4ff'],
              [120, 530, '#00d4ff'],
              [120, 680, '#00e5a0'],
              [70, 940, '#00e5a0'],
            ].map(([x, y, col], idx) => (
              <g key={`via-${idx}`} transform={`translate(${x}, ${y})`}>
                <circle cx="0" cy="0" r="4.5" fill="none" stroke={col as string} strokeWidth="0.75" opacity="0.3" />
                <circle cx="0" cy="0" r="2" fill={col as string} opacity="0.5" />
              </g>
            ))}
          </g>

          {/* ─── ANIMATED SIGNAL PULSES (Traveling asynchronously) ────────── */}
          {!prefersReducedMotion && (
            <g>
              {/* Pulse 1 along Trace 1 (Fast: 5s) */}
              <circle r="3" fill="#00d4ff" filter="url(#pulseGlow)">
                <animateMotion
                  path="M 1440 200 L 1620 200 L 1720 100 L 1880 100"
                  dur="5s"
                  repeatCount="indefinite"
                  begin="0s"
                  keyPoints="0;1"
                  keyTimes="0;1"
                />
              </circle>

              {/* Pulse 2 along Trace 2 (Medium: 7s, starts from margin into panel) */}
              <circle r="2.5" fill="#38bdf8" filter="url(#pulseGlow)">
                <animateMotion
                  path="M 1920 420 L 1740 420 L 1660 340 L 1480 340"
                  dur="7s"
                  repeatCount="indefinite"
                  begin="2.5s"
                />
              </circle>

              {/* Pulse 3 along Trace 3 Power Rail (Slow: 8.5s) */}
              <circle r="3" fill="#00e5a0" filter="url(#pulseGlow)">
                <animateMotion
                  path="M 1450 780 L 1590 780 L 1680 870 L 1880 870"
                  dur="8.5s"
                  repeatCount="indefinite"
                  begin="1.2s"
                />
              </circle>

              {/* Pulse 4 along Trace 4 Bottom Cross-bus (Slow: 9.5s) */}
              <circle r="3" fill="#00d4ff" filter="url(#pulseGlow)">
                <animateMotion
                  path="M 1120 860 L 1020 960 L 520 960 L 440 1040 L 220 1040"
                  dur="9.5s"
                  repeatCount="indefinite"
                  begin="4s"
                />
              </circle>

              {/* Pulse 5 along Trace 5 Top Cross-bus (Medium: 6s) */}
              <circle r="2.5" fill="#00d4ff" filter="url(#pulseGlow)">
                <animateMotion
                  path="M 1080 150 L 980 60 L 580 60 L 520 110"
                  dur="6s"
                  repeatCount="indefinite"
                  begin="3.2s"
                />
              </circle>

              {/* Pulse 6 along Trace 6 Left Vertical Bus (8s) */}
              <circle r="2.5" fill="#38bdf8" filter="url(#pulseGlow)">
                <animateMotion
                  path="M 70 200 L 70 480 L 120 530 L 120 680"
                  dur="8s"
                  repeatCount="indefinite"
                  begin="5s"
                />
              </circle>
            </g>
          )}

          {/* ─── TECHNICAL ANNOTATION LABELS (Subtle, Monospace, Peripheral) ── */}
          <g fill="rgba(0, 212, 255, 0.22)" fontFamily="monospace" fontSize="8" letterSpacing="0.12em">
            {/* Top-Right Periphery */}
            <text x="1630" y="85">BUS // USB-C PD 3.0 // 5V/3A</text>
            <text x="1670" y="325">DIFF_PAIR_Z0: 90Ω ±5%</text>

            {/* Mid-Right / Below Panel */}
            <text x="1690" y="855" fill="rgba(0, 229, 160, 0.22)">SYS_PWR: +3.3V VDD</text>
            <text x="1450" y="820" fill="rgba(0, 212, 255, 0.18)">RF_Z0: 50Ω MATCHED</text>

            {/* Bottom-Center & Bottom-Left */}
            <text x="540" y="980">SWD // SWDIO • SWCLK [REF-01]</text>
            <text x="230" y="1025">TCXO // 32.000 MHz CLK</text>

            {/* Top-Center Header */}
            <text x="600" y="48">STACKUP: 4-LAYER FR4 εr=4.4</text>

            {/* Far Left Periphery */}
            <text x="130" y="525">UART_TX // 115200</text>
            <text x="130" y="675" fill="rgba(0, 229, 160, 0.2)">STATUS_LED // GPIO</text>
          </g>

          {/* Dimension Lines (Far-right margin) */}
          {!isMobile && (
            <g opacity="0.25">
              <line x1="1890" y1="120" x2="1890" y2="400" stroke="#00d4ff" strokeWidth="0.75" strokeDasharray="3 3" />
              <line x1="1885" y1="120" x2="1895" y2="120" stroke="#00d4ff" strokeWidth="0.75" />
              <line x1="1885" y1="400" x2="1895" y2="400" stroke="#00d4ff" strokeWidth="0.75" />
              <text x="1880" y="265" fill="#00d4ff" fontSize="7" fontFamily="monospace" textAnchor="middle" transform="rotate(-90 1880 265)">
                DIM: 28.00mm
              </text>
            </g>
          )}
        </svg>
      </motion.div>

      {/* ─── TIER 3: OSCILLOSCOPE SIGNAL WAVEFORMS (Bottom-Left & Right) ── */}
      <motion.div
        className="absolute inset-0"
        style={{ x: waveX, y: waveY }}
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Waveform 1: Bottom-Left Oscilloscope Pod (Tucked cleanly under left column) */}
          {!isMobile && (
            <g transform="translate(60, 780)" opacity="0.45">
              {/* Graticule Background Box */}
              <rect
                x="0"
                y="0"
                width="280"
                height="130"
                rx="8"
                fill="rgba(4, 11, 22, 0.45)"
                stroke="rgba(0, 212, 255, 0.25)"
                strokeWidth="0.8"
              />
              {/* Graticule Crosshair Ticks */}
              <line x1="20" y1="65" x2="260" y2="65" stroke="rgba(0, 212, 255, 0.12)" strokeWidth="0.5" strokeDasharray="4 4" />
              <line x1="140" y1="15" x2="140" y2="115" stroke="rgba(0, 212, 255, 0.12)" strokeWidth="0.5" strokeDasharray="4 4" />
              
              {/* Channel Label */}
              <text x="12" y="16" fill="#00d4ff" fontSize="7" fontFamily="monospace" letterSpacing="0.08em">
                CH1: 2.402 GHz // RF_CARRIER
              </text>
              <text x="180" y="16" fill="#00e5a0" fontSize="7" fontFamily="monospace" letterSpacing="0.08em">
                CH2: 32 MHz
              </text>

              {/* Animated Continuous RF Sine Wave (CH1 Cyan) */}
              <motion.path
                d="M 10 65 Q 25 35 40 65 T 70 65 T 100 65 T 130 65 T 160 65 T 190 65 T 220 65 T 250 65 T 270 65"
                fill="none"
                stroke="#00d4ff"
                strokeWidth="1.2"
                animate={prefersReducedMotion ? {} : {
                  d: [
                    "M 10 65 Q 25 35 40 65 T 70 65 T 100 65 T 130 65 T 160 65 T 190 65 T 220 65 T 250 65 T 270 65",
                    "M 10 65 Q 25 95 40 65 T 70 65 T 100 65 T 130 65 T 160 65 T 190 65 T 220 65 T 250 65 T 270 65",
                    "M 10 65 Q 25 35 40 65 T 70 65 T 100 65 T 130 65 T 160 65 T 190 65 T 220 65 T 250 65 T 270 65",
                  ],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Digital Clock Pulses (CH2 Emerald) */}
              <motion.path
                d="M 10 95 L 30 95 L 30 75 L 50 75 L 50 95 L 80 95 L 80 75 L 100 75 L 100 95 L 130 95 L 130 75 L 150 75 L 150 95 L 180 95 L 180 75 L 200 75 L 200 95 L 230 95 L 230 75 L 250 75 L 250 95 L 270 95"
                fill="none"
                stroke="rgba(0, 229, 160, 0.4)"
                strokeWidth="1"
                animate={prefersReducedMotion ? {} : {
                  x: [0, -20, 0],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />

              {/* Status Ticks */}
              <text x="12" y="122" fill="rgba(148, 163, 184, 0.4)" fontSize="6" fontFamily="monospace">
                500mV/DIV // 10.0ns // TRIG: AUTO
              </text>
            </g>
          )}

          {/* Waveform 2: Ambient Background Signal Flow (Spans behind panel on right) */}
          <motion.path
            d="M 1200 480 Q 1350 430 1500 480 T 1800 480 T 2050 480"
            fill="none"
            stroke="rgba(0, 212, 255, 0.12)"
            strokeWidth="1.5"
            animate={prefersReducedMotion ? {} : {
              d: [
                "M 1200 480 Q 1350 430 1500 480 T 1800 480 T 2050 480",
                "M 1200 480 Q 1350 530 1500 480 T 1800 480 T 2050 480",
                "M 1200 480 Q 1350 430 1500 480 T 1800 480 T 2050 480",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </motion.div>

      {/* ─── TIER 4: PULSING NODES & SPARSE ATMOSPHERIC PARTICLES ─────────── */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-0"
          style={{ x: particleX, y: particleY }}
        >
          {/* Glowing Asynchronous Signal Nodes */}
          {[
            { x: '18%', y: '12%', color: '#00d4ff', dur: 4.2, delay: 0 },
            { x: '35%', y: '6%',  color: '#00e5a0', dur: 5.6, delay: 1.2 },
            { x: '88%', y: '10%', color: '#00d4ff', dur: 3.8, delay: 0.5 },
            { x: '92%', y: '42%', color: '#00d4ff', dur: 6.2, delay: 2.1 },
            { x: '85%', y: '82%', color: '#00e5a0', dur: 4.9, delay: 1.5 },
            { x: '28%', y: '92%', color: '#00d4ff', dur: 5.1, delay: 0.8 },
            { x: '8%',  y: '65%', color: '#00d4ff', dur: 4.5, delay: 2.7 },
          ].map((node, i) => (
            <motion.div
              key={`node-${i}`}
              className="absolute rounded-full"
              style={{
                left: node.x,
                top: node.y,
                width: 5,
                height: 5,
                background: node.color,
                boxShadow: `0 0 10px ${node.color}`,
              }}
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.3, 0.9, 0.3],
              }}
              transition={{
                duration: node.dur,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: node.delay,
              }}
            />
          ))}

          {/* Sparse Drifting Digital Dust Motes */}
          {[...Array(isMobile ? 6 : isTablet ? 10 : 16)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                left: `${8 + (i * 19) % 84}%`,
                top: `${6 + (i * 23) % 86}%`,
                width: i % 4 === 0 ? 2.5 : 1.5,
                height: i % 4 === 0 ? 2.5 : 1.5,
                background: i % 3 === 0 ? 'rgba(0, 229, 160, 0.35)' : 'rgba(0, 212, 255, 0.35)',
                boxShadow: `0 0 ${i % 4 === 0 ? 4 : 2}px rgba(0, 212, 255, 0.25)`,
              }}
              animate={{
                y: [0, -35, 0],
                x: [0, 18, 0],
                opacity: [0.1, 0.45, 0.1],
              }}
              transition={{
                duration: 7 + (i % 5),
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.4,
              }}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}
