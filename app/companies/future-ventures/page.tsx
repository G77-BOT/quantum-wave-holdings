import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { ArrowLeft, ExternalLink, BarChart3, Shield, Zap, Users, CheckCircle, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Future Ventures',
  description:
    'Future Ventures is the applied AI venture of Quantum Wave Holdings, building automation and machine-learning tooling for portfolio and partner companies.',
  alternates: { canonical: '/companies/future-ventures' },
  openGraph: {
    title: 'Future Ventures',
    description:
      'The applied AI and machine-learning venture of Quantum Wave Holdings, focused on business automation.',
    url: '/companies/future-ventures',
    type: 'website',
  },
};

export default function FutureVenturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-orange-100">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">QWH</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Quantum Wave Holdings
                </h1>
                <p className="text-xs text-gray-600">Corporate Excellence</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">
                Home
              </Link>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">
                Visit Future Ventures
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-orange-600 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Portfolio
        </Link>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl overflow-hidden mb-12">
          <div className="px-8 py-16 md:px-12">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">FV</span>
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold">Future Ventures</h1>
                    <p className="text-orange-100">AI/ML Automation Startup</p>
                  </div>
                </div>
                <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                  Future Ventures is developing cutting-edge AI/ML automation solutions 
                  in stealth mode, focused on revolutionizing business processes through 
                  intelligent automation and machine learning.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-medium rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    Learn More
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </a>
                  <Link
                    href="#features"
                    className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-medium rounded-xl hover:bg-white/10 transition-colors"
                  >
                    Explore Features
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-6 text-center">Company Statistics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">15%</div>
                      <div className="text-orange-100 text-sm">Ownership</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">+75%</div>
                      <div className="text-orange-100 text-sm">Growth</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">AI/ML</div>
                      <div className="text-orange-100 text-sm">Focus</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">Stealth</div>
                      <div className="text-orange-100 text-sm">Mode</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Innovation Focus
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Future Ventures is pioneering next-generation AI/ML solutions for business automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Automation</h3>
              <p className="text-gray-600 text-sm">
                Intelligent automation systems that learn and adapt to business processes.
              </p>
            </div>

            <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Machine Learning</h3>
              <p className="text-gray-600 text-sm">
                Advanced ML algorithms for predictive analytics and decision support.
              </p>
            </div>

            <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Solutions</h3>
              <p className="text-gray-600 text-sm">
                Scalable solutions designed for enterprise-level deployment and integration.
              </p>
            </div>

            <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">
                World-class team of AI researchers and engineers driving innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Development Roadmap Section */}
        <section className="py-16 bg-white rounded-2xl">
          <div className="px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Development Roadmap</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our strategic approach to building next-generation AI/ML solutions.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-orange-200 -translate-x-1/2"></div>
                
                <div className="space-y-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 md:text-right order-2 md:order-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Research & Development</h3>
                      <p className="text-gray-600">
                        Conducting cutting-edge research in AI/ML to identify breakthrough opportunities and develop proprietary algorithms.
                      </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center order-1 md:order-2 relative">
                      <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">1</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 flex justify-center relative">
                      <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">2</div>
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Prototype Development</h3>
                      <p className="text-gray-600">
                        Building and testing minimum viable products to validate concepts and gather real-world feedback.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 md:text-right order-2 md:order-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Market Launch</h3>
                      <p className="text-gray-600">
                        Scaling successful solutions for enterprise deployment and market introduction.
                      </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center order-1 md:order-2 relative">
                      <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">3</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Future Ventures?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            We're currently in stealth mode building revolutionary AI/ML solutions. Contact us to learn more about partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-medium rounded-xl hover:bg-gray-100 transition-colors"
            >
              Contact Us
              <ExternalLink className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/investor-relations"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-medium rounded-xl hover:bg-white/10 transition-colors"
            >
              Investor Relations
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
