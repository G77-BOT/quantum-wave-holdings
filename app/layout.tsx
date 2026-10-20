import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { ARViewProvider } from '@/components/ar/ARViewManager';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GlobalErrorBoundary from './GlobalErrorBoundary';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Quantum Wave Holdings',
  description: 'Transforming ideas into reality',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300 font-sans antialiased`}>
        <ThemeProvider>
          <ARViewProvider>
            <GlobalErrorBoundary>
              <GoogleAnalytics />
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </GlobalErrorBoundary>
          </ARViewProvider>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
