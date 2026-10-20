'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Linkedin, Twitter, Mail, Award, Users, Target, Globe } from 'lucide-react';
import PageTransition from '@/components/ui/PageTransition';
import GlassCard from '@/components/ui/GlassCard';

export default function LeadershipPage() {
  const leaders = [
    {
      id: 1,
      name: "Mohamud Abdiaziz Mohamed",
      position: "Founder, CEO & Creator",
      company: "Quantum Wave Holdings & BotStream",
      bio: "Mohamud Abdiaziz Mohamed is the visionary founder and CEO of Quantum Wave Holdings, as well as the creator of BotStream, the company's flagship AI trading platform. With his innovative approach to technology and business, he has established QWH as a diversified investment company focused on cutting-edge businesses across multiple sectors.",
      expertise: [
        "Strategic Leadership & Vision",
        "AI & Machine Learning",
        "Cryptocurrency Trading Systems",
        "Investment Strategy",
        "Technology Innovation",
        "Business Development"
      ],
      achievements: [
        "Founded Quantum Wave Holdings in 2024",
        "Created BotStream AI trading platform with access to 14+ exchanges",
        "Pioneered advanced arbitrage trading algorithms",
        "Built diverse portfolio across technology, e-commerce, and AI sectors",
        "Established strategic partnerships across multiple industries"
      ],
      image: "/api/placeholder/400/400",
      initials: "MAM",
      gradient: "from-blue-600 to-indigo-600",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mohamud@quantumwaveholdings.com"
      }
    },
    {
      id: 2,
      name: "Joseph Jackson",
      position: "Co-Founder & Vice President",
      company: "Quantum Wave Holdings",
      bio: "Joseph Jackson serves as Vice President of Quantum Wave Holdings. As a key member of the global holding company, he brings strategic insight and operational excellence to the organization's diverse portfolio of investments.",
      expertise: [
        "Corporate Strategy",
        "Brand Development",
        "Operational Excellence",
        "Partnership Development",
        "Market Analysis",
        "Portfolio Management"
      ],
      achievements: [
        "Co-founded Quantum Wave Holdings branding and identity",
        "Developed strategic partnerships across portfolio companies",
        "Led operational improvements resulting in enhanced efficiency",
        "Established corporate governance frameworks",
        "Drove expansion into new market segments"
      ],
      image: "/api/placeholder/400/400",
      initials: "JJ",
      gradient: "from-purple-600 to-pink-600",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "joseph@quantumwaveholdings.com"
      }
    },
    {
      id: 3,
      name: "Margaret Ajibola",
      position: "Head of Frontend Development",
      company: "BotStream",
      bio: "Margaret Ajibola's role as Head of the Frontend Department is well-suited to her skills and aspirations. Her unwavering ambition and dedication have been evident in her contributions to the project, benefiting both herself and the organization. Her exemplary work and contributions to BotStream have not gone unnoticed and will continue to be recognized and appreciated.",
      expertise: [
        "Node.js Development",
        "Next.js Framework",
        "React Native",
        "JavaScript & TypeScript",
        "Frontend Architecture",
        "Web App Development"
      ],
      achievements: [
        "Joined the BotStream project and has been improving continuously",
        "Specializes in frontend development with robust infrastructure improvements",
        "Graduated from web app development boot camp in 2024",
        "Pioneer in her field and one of the best frontend developers",
        "Over 3.5 years of experience with continuous growth and learning",
        "Contributed to making BotStream's frontend more advanced and robust"
      ],
      image: "/api/placeholder/400/400",
      initials: "MA",
      gradient: "from-green-600 to-emerald-600",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "margaret@bostream.ca"
      }
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 aurora-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          {/* Hero Section */}
          <motion.section 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl overflow-hidden mb-12 aurora-bg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="px-8 py-16 md:px-12">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Leadership Team</h1>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                  Meet the visionary leaders driving innovation and excellence at Quantum Wave Holdings, 
                  shaping the future of business across multiple industries.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Leadership Profiles */}
          <section className="py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {leaders.map((leader, index) => (
                <motion.div
                  key={leader.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlassCard className="overflow-hidden">
                    {/* Header with gradient */}
                    <div className={`bg-gradient-to-r ${leader.gradient} p-8 text-white`}>
                      <div className="flex items-center space-x-6">
                        {/* Profile Image/Avatar */}
                        <div className="relative">
                          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <span className="text-2xl font-bold text-white">{leader.initials}</span>
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <Award className="w-4 h-4 text-blue-600" />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold mb-2">{leader.name}</h2>
                          <p className="text-lg text-white/90 mb-1">{leader.position}</p>
                          <p className="text-white/80 text-sm">{leader.company}</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      {/* Bio */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Biography</h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{leader.bio}</p>
                      </div>

                      {/* Expertise */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Areas of Expertise</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {leader.expertise.map((skill, skillIndex) => (
                            <div key={skillIndex} className="flex items-center">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                              <span className="text-gray-700 dark:text-gray-300 text-sm">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Achievements</h3>
                        <div className="space-y-3">
                          {leader.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start">
                              <div className="w-5 h-5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                                <div className="w-2 h-2 bg-green-600 dark:text-green-400 rounded-full"></div>
                              </div>
                              <span className="text-gray-700 dark:text-gray-300 text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Contact & Social */}
                      <div className="border-t border-gray-100 dark:border-gray-700 pt-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
                        <div className="flex items-center space-x-4">
                          <a 
                            href={`mailto:${leader.social.email}`}
                            className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            title="Send Email"
                          >
                            <Mail className="w-4 h-4" />
                          </a>
                          {leader.social.linkedin && leader.social.linkedin !== '#' && (
                            <a 
                              href={leader.social.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center w-10 h-10 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
                              title="LinkedIn Profile"
                            >
                              <Linkedin className="w-4 h-4" />
                            </a>
                          )}
                          {leader.social.twitter && leader.social.twitter !== '#' && (
                            <a 
                              href={leader.social.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center w-10 h-10 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                              title="Twitter Profile"
                            >
                              <Twitter className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Company Values driven by Leadership */}
          <motion.section 
            className="py-16 glass-card rounded-2xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Leadership-Driven Excellence</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Our leaders embody the values and vision that drive Quantum Wave Holdings' success across all portfolio companies
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Visionary Leadership</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Forward-thinking strategies that anticipate market trends and opportunities</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Collaborative Excellence</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Building strong teams and partnerships that drive collective success</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Innovation Focus</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Constantly pushing boundaries to create breakthrough solutions</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Global Perspective</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Understanding international markets and cross-cultural dynamics</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Leadership Quote/Vision */}
          <motion.section 
            className="py-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 text-center aurora-bg">
              <div className="max-w-4xl mx-auto">
                <blockquote className="text-xl md:text-2xl font-medium mb-6 italic">
                  "At Quantum Wave Holdings, we believe in the power of strategic leadership to transform industries 
                  and create lasting value. Our commitment to innovation, integrity, and excellence drives everything we do."
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">QWH</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Leadership Team</div>
                    <div className="text-blue-100 text-sm">Quantum Wave Holdings</div>
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
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to Work With Our Team?</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Whether you're seeking investment opportunities or looking to partner with us, 
                our leadership team is ready to explore how we can create value together.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Our Team
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  View Our Portfolio
                </Link>
              </div>
            </GlassCard>
          </motion.section>
        </div>
      </div>
    </PageTransition>
  );
}
