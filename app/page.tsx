'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  BarChart2, 
  Briefcase, 
  ChevronRight, 
  ExternalLink,
  Globe,
  Shield,
  TrendingUp,
  Users 
} from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import PageTransition from '@/components/ui/PageTransition';
import ParticleBackground from '@/components/ui/ParticleBackground';

// Dynamically import Globe component with no SSR
const GlobeComponent = dynamic(() => import('@/components/ar/Globe'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  )
});

const PortfolioCompany = ({ 
  icon: Icon, 
  title, 
  description, 
  link, 
  gradientFrom, 
  gradientTo 
}: { 
  icon: any, 
  title: string, 
  description: string, 
  link: string, 
  gradientFrom: string, 
  gradientTo: string 
}) => (
  <div className="group relative overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300">
    <div className="p-6">
      <div className={`w-14 h-14 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
      >
        Visit Website <ArrowRight className="ml-2 w-4 h-4" />
      </a>
    </div>
  </div>
);

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 aurora-bg">
        {/* Hero Section with 3D Globe */}
        <section id="home" className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32 ar-scan-line">
          <ParticleBackground particleCount={50} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                    Building Tomorrow's{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Leaders
                    </span>
                  </h1>
                  <p className="max-w-2xl mx-auto lg:mx-0 text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                    Quantum Wave Holdings is a holding company that builds, acquires, and grows innovative companies 
                    across multiple industries. We partner with visionary entrepreneurs to create lasting value.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                    <Link
                      href="#portfolio"
                      className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      Explore Our Portfolio
                      <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
                    </Link>
                    <Link
                      href="#contact"
                      className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-base font-medium rounded-xl text-blue-600 dark:text-blue-400 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-12 grid grid-cols-3 gap-6"
                >
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">99.9%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">&lt;10ms</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Latency</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
                  </div>
                </motion.div>
              </div>

              {/* Right - 3D Globe */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-96 lg:h-[500px]"
              >
                <GlobeComponent
                  locations={[
                    { lat: 40.7128, lng: -74.0060, label: 'New York HQ', color: '#3b82f6' },
                    { lat: 51.5074, lng: -0.1278, label: 'London Office', color: '#ef4444' },
                    { lat: 35.6762, lng: 139.6503, label: 'Tokyo Office', color: '#10b981' },
                    { lat: -33.8688, lng: 151.2093, label: 'Sydney Office', color: '#f59e0b' },
                  ]}
                  autoRotate={true}
                  className="w-full h-full rounded-2xl"
                />
              </motion.div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="w-96 h-96 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-10 blur-3xl"></div>
          </div>
        </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Corporate Excellence Through Innovation
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We believe in the power of innovation to drive sustainable growth and create meaningful impact across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <motion.div 
              className="glass-card p-8 rounded-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Strategic Growth</h4>
              <p className="text-gray-600 dark:text-gray-300">
                We identify and nurture high-potential companies, providing the resources and expertise needed for sustainable expansion.
              </p>
            </motion.div>

            <motion.div 
              className="glass-card p-8 rounded-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Operational Excellence</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Our experienced team brings decades of operational expertise to help portfolio companies achieve their full potential.
              </p>
            </motion.div>

            <motion.div 
              className="glass-card p-8 rounded-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Global Vision</h4>
              <p className="text-gray-600 dark:text-gray-300">
                We think globally while acting locally, building companies that can compete and thrive in international markets.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 aurora-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Portfolio Companies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're proud to support innovative companies that are shaping the future across multiple industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bostream - Featured Company */}
            <motion.div 
              className="glass-card group relative rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-bl-full opacity-50"></div>
              <div className="relative p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg">BS</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      Botstream
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">Crypto Trading Platform</p>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
                  Advanced cryptocurrency trading platform featuring real-time data streaming, 
                  professional analytics, and institutional-grade security for modern traders.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">99.9%</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">Uptime</div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">&lt;10ms</div>
                    <div className="text-sm text-gray-700 dark:text-gray-300">Latency</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <Link
                    href="/companies/bostream"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Learn More
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                  <a
                    href="https://botstream.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Visit Site
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Future Company Placeholder */}
            <motion.div 
              className="glass-card border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl flex items-center justify-center mb-6">
                <span className="text-4xl text-blue-600 dark:text-blue-400">+</span>
              </div>
              <h4 className="text-xl font-bold text-gray-500 dark:text-gray-400 mb-4">Next Innovation</h4>
              <p className="text-gray-400 mb-6">
                We're always looking for the next breakthrough company to join our portfolio. 
                Could it be yours?
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
              >
                Contact Us
                <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Latest News & Updates</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest developments across our portfolio and the industries we operate in.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Sample News Cards */}
            <motion.div 
              className="glass-card rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-full h-40 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-sm">News Image</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Corporate News • 2 days ago
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Quantum Wave Holdings Announces Strategic Partnership
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                New partnership aims to accelerate growth across our portfolio companies...
              </p>
            </motion.div>

            <motion.div 
              className="glass-card rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-full h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-sm">News Image</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Bostream • 5 days ago
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Bostream Launches Advanced Trading Features
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                New suite of professional trading tools now available for institutional clients...
              </p>
            </motion.div>

            <motion.div 
              className="glass-card rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-full h-40 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-sm">News Image</span>
              </div>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Industry • 1 week ago
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Technology Innovation Awards 2024
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Recognition for outstanding contribution to fintech innovation...
              </p>
            </motion.div>
          </div>

          <div className="text-center">
            <Link
              href="/news"
              className="inline-flex items-center px-6 py-3 border border-blue-600 text-base font-medium rounded-lg text-blue-600 dark:text-white bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
            >
              View All News
              <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white aurora-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h3 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Partner With Us?
          </motion.h3>
          <motion.p 
            className="text-xl mb-8 opacity-90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Whether you're an entrepreneur with a vision or an investor looking for opportunities, 
            we'd love to explore how we can work together.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-medium rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get In Touch
            </Link>
            <Link
              href="/investor-relations"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-xl hover:bg-white/10 transition-colors"
            >
              Investor Relations
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/90 backdrop-blur-sm text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">QWH</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Quantum Wave Holdings</h3>
                  <p className="text-sm text-gray-400">Corporate Excellence</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Building tomorrow's leaders through strategic investments and innovative partnerships.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Portfolio</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://botstream.ca" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Bostream</a></li>
                <li><Link href="/news" className="hover:text-white transition-colors">News</Link></li>
                <li><Link href="/investor-relations" className="hover:text-white transition-colors">Investors</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Quantum Wave Holdings. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    </PageTransition>
  );
}
