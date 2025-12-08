import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Quantum Wave Holdings',
  description: 'Learn about Quantum Wave Holdings and our mission',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Welcome to Quantum Wave Holdings.
      </p>
    </div>
  );
}
