import type { Metadata } from 'next';
import LeadershipContent from './LeadershipContent';

export const metadata: Metadata = {
  title: 'Leadership',
  description:
    'Meet the visionary leaders driving innovation and excellence at Quantum Wave Holdings, shaping the future of business across multiple industries.',
  alternates: { canonical: '/leadership' },
  openGraph: {
    title: 'Leadership',
    description:
      'Meet the visionary leaders driving innovation and excellence at Quantum Wave Holdings.',
    url: '/leadership',
    type: 'website',
  },
};

export default function LeadershipPage() {
  return <LeadershipContent />;
}
