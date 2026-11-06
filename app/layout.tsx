import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { ARViewProvider } from '@/components/ar/ARViewManager';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GlobalErrorBoundary from './GlobalErrorBoundary';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import WaveField from '@/components/three/WaveField';
import TiltController from '@/components/ui/TiltController';
import { site } from '@/lib/content/site';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    'holding company',
    'investment holding',
    'portfolio companies',
    'e-commerce',
    'streaming',
    'artificial intelligence',
  ],
  authors: [{ name: site.name, url: site.url }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  category: 'finance',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
  description: site.description,
  email: site.email,
  telephone: site.phone,
  foundingDate: String(site.founded),
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.addressLines[0],
    addressLocality: site.addressLines[1],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300 font-sans antialiased`}>
        <WaveField />
        <ThemeProvider>
          <ARViewProvider>
            <GlobalErrorBoundary>
              <GoogleAnalytics />
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
              <TiltController />
            </GlobalErrorBoundary>
          </ARViewProvider>
        </ThemeProvider>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SpeedInsights />
      </body>
    </html>
  );
}
