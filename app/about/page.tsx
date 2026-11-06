import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Transforming ideas into reality through strategic investments and innovative solutions. Building tomorrow's leaders through strategic investments and innovative partnerships across multiple industries worldwide.",
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us',
    description:
      "Transforming ideas into reality through strategic investments and innovative solutions.",
    url: '/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
