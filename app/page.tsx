'use client';

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
import { siteCompanies, siteOffices, siteStats } from '@/lib/content/site';

// Dynamically import Globe component with no SSR
const GlobeComponent = dynamic(() => import('@/components/ar/Globe'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex items-center justify-center">
      <div className="w-3/4 h-3/4 max-w-[320px] max-h-[320px] rounded-full border border-sky-400/25 bg-sky-500/10" />
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
  return (
    <PageTransition>
      <div className="relative min-h-screen">
        {/* Hero Section with 3D Globe */}
        <section id="home" className="relative overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32 ar-scan-line">
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
                    <span className="gradient-text-animated">
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
                      className="btn-premium inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white interactive-scale"
                    >
                      Explore Our Portfolio
                      <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
                    </Link>
                    <Link
                      href="#contact"
                      className="btn-outline-premium inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-blue-600 dark:text-blue-400 interactive-scale"
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
                  {siteStats.map((stat) => (
                    <div key={stat.label} className="stat-card text-center lg:text-left">
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                    </div>
                  ))}
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
                  locations={siteOffices.map((office) => ({
                    lat: office.lat,
                    lng: office.lng,
                    label: office.label,
                    color: office.color,
                  }))}
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
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Corporate Excellence Through Innovation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We believe in the power of innovation to drive sustainable growth and create meaningful impact across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <motion.div 
              className="feature-card stagger-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="icon-glow w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Strategic Growth</h4>
              <p className="text-gray-600 dark:text-gray-300">
                We identify and nurture high-potential companies, providing the resources and expertise needed for sustainable expansion.
              </p>
            </motion.div>

            <motion.div 
              className="feature-card stagger-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="icon-glow w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Operational Excellence</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Our experienced team brings decades of operational expertise to help portfolio companies achieve their full potential.
              </p>
            </motion.div>

            <motion.div 
              className="feature-card stagger-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="icon-glow w-14 h-14 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
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

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {siteCompanies.map((company, index) => (
              <motion.div
                key={company.slug}
                data-tilt
                className="feature-card group relative rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${company.gradient} opacity-10 rounded-bl-full`}></div>
                <div className="relative p-6">
                  <div className="flex items-center mb-4">
                    <div className={`icon-glow w-12 h-12 mr-3 flex-shrink-0 rounded-xl bg-gradient-to-r ${company.gradient} flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">{company.initials}</span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white sm:truncate">{company.name}</h3>
                      <p className={`text-xs font-medium ${company.accentText}`}>{company.sector}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-200 mb-4 text-sm leading-relaxed line-clamp-3">
                    {company.summary}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="stat-card p-3 rounded-lg text-center">
                      <div className={`text-base font-bold leading-tight ${company.accentText}`}>{company.ownership}</div>
                      <div className="text-xs text-gray-700 dark:text-gray-300">Ownership</div>
                    </div>
                    <div className="stat-card p-3 rounded-lg text-center">
                      <div className={`text-base font-bold leading-tight ${company.accentText}`}>{company.growth}</div>
                      <div className="text-xs text-gray-700 dark:text-gray-300">Growth</div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Link
                      href={company.href}
                      className={`inline-flex items-center justify-center font-medium text-sm ${company.accentText} group-hover:translate-x-1 transition-transform`}
                    >
                      Learn More
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Link>
                    {company.externalUrl && (
                      <a
                        href={company.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-premium inline-flex items-center justify-center px-4 py-2 text-white rounded-lg text-sm interactive-scale"
                      >
                        Visit Site
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
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
                Comprena Market • 5 days ago
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Comprena Market Expands to New Markets
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                E-commerce platform announces strategic expansion plans for international markets...
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
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Partner With Us?
          </motion.h2>
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

    </div>
    </PageTransition>
  );
}
