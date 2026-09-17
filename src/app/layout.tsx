import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-WCXVHQJKYK';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#00d4ff',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://madhanraj.dev'),
  title: 'Madhan Raj M | PCB Design & Embedded Systems Engineer',
  description:
    'Electronics & Communication Engineer specialising in PCB design, embedded systems, RF & antenna design, IoT and VLSI. Available for PCB design and electronics development work.',
  keywords: [
    'PCB design engineer',
    'embedded systems engineer',
    'RF antenna design',
    'VLSI engineer',
    'KiCad',
    'Altium Designer',
    'STM32',
    'ESP32',
    'electronics engineer Chennai',
    'Madhan Raj',
  ],
  authors: [{ name: 'Madhan Raj M' }],
  creator: 'Madhan Raj M',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://madhanraj.dev',
    siteName: 'Madhan Raj M — Engineering Portfolio',
    title: 'Madhan Raj M | PCB Design & Embedded Systems Engineer',
    description:
      'Electronics & Communication Engineer — PCB Design, Embedded Systems, RF & Wireless, VLSI.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Madhan Raj M — Engineering Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Madhan Raj M | PCB Design & Embedded Systems Engineer',
    description:
      'Electronics & Communication Engineer — PCB Design, Embedded Systems, RF & Wireless, VLSI.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'p6nTvJdL-9j0ZrGtCokJr056KPIxcr6t9sCsCLTqIV0',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#00d4ff" />
      </head>
      <body className="antialiased">{children}</body>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </html>
  );
}
