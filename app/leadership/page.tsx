import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leadership | Quantum Wave Holdings',
  description: 'Meet the leadership team at Quantum Wave Holdings',
};

export default function LeadershipPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Leadership</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Meet our leadership team.
      </p>
    </div>
  );
}
