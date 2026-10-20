'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Award, Users, Globe, ExternalLink, Calendar, DollarSign } from 'lucide-react';
import PageTransition from '@/components/ui/PageTransition';
import GlassCard from '@/components/ui/GlassCard';

export default function SuccessStoriesPage() {
  const successStories = [
    {
      id: 1,
      company: "TechFlow Solutions",
      logo: "/images/companies/techflow.png",
      industry: "Enterprise Software",
      investmentDate: "2019",
      exitDate: "2023",
      exitType: "Acquisition",
      acquirer: "Anonymous",
      initialInvestment: "N/A",
      exitValue: "N/A",
      returns: "18x",
      irr: "87%",
      description: "AI-powered workflow automation platform that revolutionized enterprise operations",
      highlights: [
        
      ],
      impact: "Enabled over 1,000 enterprises to automate critical business processes, saving millions in operational costs",
      featured: true
    },
    {
      id: 2,
      company: "FinanceFirst",
      logo: "/images/companies/financefirst.png",
      industry: "FinTech",
      investmentDate: "2020",
      exitDate: "2024",
      exitType: "IPO",
      acquirer: "Anonymous",
      initialInvestment: "N/A",
      exitValue: "N/A",
      returns: "24x",
      irr: "95%",
      description: "Digital banking platform serving underbanked communities across emerging markets",
      highlights: [
       
      ],
      impact: "Provided financial services to previously underserved communities, promoting financial inclusion"
    },
    {
      id: 3,
      company: "HealthTech Innovations",
      logo: "/images/companies/healthtech.png", 
      industry: "Healthcare Technology",
      investmentDate: "2018",
      exitDate: "2022",
      exitType: "Acquisition",
      acquirer: "Anonymous",
      initialInvestment: "N/A",
      exitValue: "N/A",
      returns: "18.5x",
      irr: "78%",
      description: "AI-powered diagnostic platform for early disease detection",
      highlights: [
        
      ],
      impact: "Enhanced early disease detection capabilities, potentially saving thousands of lives"
    },
    {
      id: 4,
      company: "EcoLogistics",
      logo: "/images/companies/ecologistics.png",
      industry: "Supply Chain",
      investmentDate: "2019",
      exitDate: "2023", 
      exitType: "Strategic Sale",
      acquirer: "Anonymous",
      initialInvestment: "N/A",
      exitValue: "N/A",
      returns: "14.5x",
      irr: "72%",
      description: "Sustainable logistics platform optimizing last-mile delivery with green technology",
      highlights: [
        
      ],
      impact: "Significantly reduced carbon footprint of last-mile deliveries in urban areas"
    },
    {
      id: 5,
      company: "DataVault Security",
      logo: "/images/companies/datavault.png",
      industry: "Cybersecurity",
      investmentDate: "2020",
      exitDate: "2024",
      exitType: "Acquisition",
      acquirer: "Anonymouss",
      initialInvestment: "N/A",
      exitValue: "N/A",
      returns: "14x",
      irr: "69%",
      description: "Next-generation data encryption and security platform for enterprise clients",
      highlights: [
       
      ],
      impact: "Secured sensitive data for major corporations, preventing potential cyber attacks"
    },
    {
      id: 6,
      company: "AgriTech Solutions",
      logo: "/images/companies/agritech.png",
      industry: "Anonymous",
      investmentDate: "2019",
      exitDate: "2023",
      exitType: "Management Buyout",
      acquirer: "Anonymous",
      initialInvestment: "N/A",
      exitValue: "N/A",
      returns: "12x",
      irr: "65%",
      description: "Precision agriculture platform using IoT and AI for crop optimization",
      highlights: [
        
      ],
      impact: "Helped farmers increase productivity while reducing environmental impact"
    }
  ];

  const keyMetrics = [
    {
      metric: "Average Return Multiple",
      value: "16.8x",
      description: "Across all successful exits"
    },
    {
      metric: "Average IRR",
      value: "76%",
      description: "Internal rate of return"
    },
    {
      metric: "Total Exit Value",
      value: "$Undisclosed",
      description: "Combined exit value"
    },
    {
      metric: "Success Rate",
      value: "85%",
      description: "Of portfolio companies"
    }
  ];

  const exitTypes = [
    {
      type: "Strategic Acquisitions",
      count: 8,
      percentage: 67,
      color: "from-blue-500 to-blue-600"
    },
    {
      type: "IPOs",
      count: 2,
      percentage: 17,
      color: "from-green-500 to-green-600"
    },
    {
      type: "Management Buyouts",
      count: 2,
      percentage: 16,
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 aurora-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <Link href="/portfolio" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Portfolio
          </Link>

          {/* Hero Section */}
          <motion.section 
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl overflow-hidden mb-12 aurora-bg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="px-8 py-16 md:px-12">
              <div className="text-center">
                <Award className="w-16 h-16 mx-auto mb-6 text-green-100" />
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
                <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                  Celebrating our portfolio companies' remarkable journeys from innovative startups 
                  to industry-leading success stories that have created significant value.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Key Metrics */}
          <section className="mb-16">
            <GlassCard className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Portfolio Performance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {keyMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{metric.value}</div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{metric.metric}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{metric.description}</div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </section>

          {/* Exit Types Distribution */}
          <section className="mb-16">
            <GlassCard className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Exit Distribution</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {exitTypes.map((exit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className={`w-24 h-24 mx-auto mb-4 bg-gradient-to-r ${exit.color} rounded-full flex items-center justify-center`}>
                      <span className="text-2xl font-bold text-white">{exit.count}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{exit.type}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{exit.percentage}% of exits</p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </section>

          {/* Success Stories */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Success Stories</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Discover how our strategic investments and partnerships have helped exceptional companies 
                achieve remarkable growth and successful exits.
              </p>
            </div>

            <div className="space-y-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard 
                    className={`overflow-hidden ${story.featured ? 'ring-2 ring-green-200 dark:ring-green-800' : ''}`}
                  >
                    {story.featured && (
                      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 text-sm font-medium text-center">
                        Featured Success Story
                      </div>
                    )}
                    
                    <div className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                        {/* Company Info */}
                        <div className="lg:w-1/3 mb-6 lg:mb-0">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                              <span className="text-white font-bold text-xl">{story.company.charAt(0)}</span>
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{story.company}</h3>
                              <p className="text-blue-600 dark:text-blue-400 font-medium">{story.industry}</p>
                            </div>
                          </div>

                          {/* Financial Metrics */}
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl">
                              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{story.returns}</div>
                              <div className="text-sm text-gray-600 dark:text-gray-300">Return Multiple</div>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl">
                              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{story.irr}</div>
                              <div className="text-sm text-gray-600 dark:text-gray-300">IRR</div>
                            </div>
                          </div>

                          {/* Investment Details */}
                          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                            <div className="flex justify-between">
                              <span>Investment:</span>
                              <span className="font-medium">{story.initialInvestment}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Exit Value:</span>
                              <span className="font-medium text-green-600 dark:text-green-400">{story.exitValue}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Exit Type:</span>
                              <span className="font-medium">{story.exitType}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Timeline:</span>
                              <span className="font-medium">{story.investmentDate} - {story.exitDate}</span>
                            </div>
                          </div>
                        </div>

                        {/* Story Details */}
                        <div className="lg:w-2/3">
                          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{story.description}</p>

                          <div className="mb-6">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Highlights</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {story.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start">
                                  <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700 dark:text-gray-300 text-sm">{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                              <Globe className="w-5 h-5 mr-2" />
                              Impact
                            </h4>
                            <p className="text-gray-700 dark:text-gray-300">{story.impact}</p>
                          </div>

                          {story.acquirer && (
                            <div className="mt-6 flex items-center justify-between">
                              <div>
                                <span className="text-sm text-gray-600 dark:text-gray-400">Acquired by</span>
                                <p className="font-semibold text-gray-900 dark:text-white">{story.acquirer}</p>
                              </div>
                              <div className="flex items-center text-blue-600 dark:text-blue-400">
                                <Calendar className="w-4 h-4 mr-1" />
                                <span className="text-sm">{story.exitDate}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Investment Philosophy */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-2xl p-8 aurora-bg">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Our Success Formula</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div>
                    <Users className="w-12 h-12 mx-auto mb-4 text-blue-300" />
                    <h3 className="text-xl font-semibold mb-3">Strategic Partnership</h3>
                    <p className="text-gray-300">We work closely with founders to provide strategic guidance and operational support.</p>
                  </div>
                  <div>
                    <TrendingUp className="w-12 h-12 mx-auto mb-4 text-green-300" />
                    <h3 className="text-xl font-semibold mb-3">Growth Acceleration</h3>
                    <p className="text-gray-300">Our network and resources help companies scale rapidly and efficiently.</p>
                  </div>
                  <div>
                    <Award className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
                    <h3 className="text-xl font-semibold mb-3">Value Creation</h3>
                    <p className="text-gray-300">We focus on sustainable value creation for all stakeholders.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.section 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Ready to Write Your Success Story?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Join our portfolio of successful companies and let us help you achieve exceptional growth and create lasting value.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact?type=investment"
                  className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-colors"
                >
                  Start Your Journey
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  View Portfolio
                </Link>
              </div>
            </GlassCard>
          </motion.section>
        </div>
      </div>
    </PageTransition>
  );
}
