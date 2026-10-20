'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import PageTransition from '@/components/ui/PageTransition';
import GlassCard from '@/components/ui/GlassCard';

interface NewsArticle {
  id: number;
  title: string;
  content: string;
  date: string;
  author: string;
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch('/api/news');
        const data = await response.json();
        
        if (response.ok && data.success && data.news) {
          setNews(data.news);
        } else {
          setError('News is temporarily unavailable.');
          setNews([]);
        }
      } catch (e: any) {
        console.error('Error fetching news:', e);
        setError('News is temporarily unavailable.');
        setNews([]);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 aurora-bg py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-12 text-center">
            Latest News
          </h1>

          {error && (
            <GlassCard className="p-8 text-center mb-8">
              <p className="text-gray-600 dark:text-gray-300">{error}</p>
            </GlassCard>
          )}

          <div className="space-y-10">
            {news.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="overflow-hidden hover:scale-[1.01] transition-transform">
                  <div className="p-8">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
                      {article.content}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {article.date}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-md"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
