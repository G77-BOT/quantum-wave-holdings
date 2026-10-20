'use client';

import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Globe, Users, Target, Award } from 'lucide-react';
import PageTransition from '@/components/ui/PageTransition';
import GlassCard from '@/components/ui/GlassCard';
import Timeline from '@/components/ui/Timeline';
import { useEffect } from 'react';

const timelineItems = [
  {
    year: '2024',
    title: 'Company Founded',
    description: 'Quantum Wave Holdings was established with a vision to build and invest in innovative companies across multiple industries.',
    icon: <Rocket className="w-6 h-6 text-blue-600" />
  },
  {
    year: '2024 Q2',
    title: 'First Investment - BotStream',
    description: 'Made our first strategic investment in BotStream, an advanced cryptocurrency trading platform.',
    icon: <TrendingUp className="w-6 h-6 text-blue-600" />
  },
  {
    year: '2024 Q3',
    title: 'Global Expansion',
    description: 'Expanded operations to key markets including New York, London, Tokyo, and Sydney.',
    icon: <Globe className="w-6 h-6 text-blue-600" />
  },
  {
    year: '2024 Q4',
    title: 'Team Growth',
    description: 'Built a team of experienced professionals with expertise in finance, technology, and operations.',
    icon: <Users className="w-6 h-6 text-blue-600" />
  },
  {
    year: '2025',
    title: 'Strategic Partnerships',
    description: 'Established partnerships with leading financial institutions and technology companies.',
    icon: <Target className="w-6 h-6 text-blue-600" />
  },
  {
    year: '2026',
    title: 'Industry Recognition',
    description: 'Received recognition for outstanding contribution to fintech innovation and corporate excellence.',
    icon: <Award className="w-6 h-6 text-blue-600" />
  }
];

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us | Quantum Wave Holdings';
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 aurora-bg">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                About{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Quantum Wave Holdings
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Transforming ideas into reality through strategic investments and innovative solutions.
                Building tomorrow's leaders through strategic investments and innovative partnerships across
                multiple industries worldwide.
              </p>
            </motion.div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <GlassCard className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    To identify, invest in, and nurture innovative companies that have the potential to transform
                    industries and create lasting value. We believe in the power of innovation to drive sustainable
                    growth and create meaningful impact across the globe.
                  </p>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <GlassCard className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    To be the leading investment platform that bridges visionary entrepreneurs with the resources
                    and expertise they need to build world-class companies. We envision a future where innovation
                    thrives and strategic partnerships create transformative change.
                  </p>
                </GlassCard>
              </motion.div>
            </div>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <GlassCard className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    We embrace cutting-edge technology and creative solutions to drive progress.
                  </p>
                </GlassCard>

                <GlassCard className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Partnership</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    We believe in building long-term relationships based on trust and mutual success.
                  </p>
                </GlassCard>

                <GlassCard className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Excellence</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    We strive for the highest standards in everything we do, from investments to operations.
                  </p>
                </GlassCard>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Journey</h2>
              <Timeline items={timelineItems} className="max-w-4xl mx-auto" />
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
