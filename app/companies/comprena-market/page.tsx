import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { ArrowLeft, ExternalLink, BarChart3, Shield, Zap, Users, CheckCircle, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Comprena Market',
  description:
    'Comprena Market is a B2B/B2C e-commerce platform from Quantum Wave Holdings, pairing seamless buying and selling with advanced analytics and secure payment processing.',
  alternates: { canonical: '/companies/comprena-market' },
  openGraph: {
    title: 'Comprena Market',
    description:
      'A B2B/B2C e-commerce platform from Quantum Wave Holdings, built for secure transactions and sales analytics.',
    url: '/companies/comprena-market',
    type: 'website',
  },
};

export default function ComprenaMarketPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-blue-100">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">QWH</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Quantum Wave Holdings
                </h1>
                <p className="text-xs text-gray-600">Corporate Excellence</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
              <a href="https://comprena-market.xyz" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Visit Comprena Market
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Portfolio
        </Link>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl overflow-hidden mb-12">
          <div className="px-8 py-16 md:px-12">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">CM</span>
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold">Comprena Market</h1>
                    <p className="text-blue-100">B2B/B2C E-Commerce Platform</p>
                  </div>
                </div>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Comprena Market delivers a comprehensive e-commerce solution for businesses and consumers, 
                  featuring seamless buying and selling experiences, advanced analytics, and secure payment processing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://comprena-market.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    Visit Comprena Market
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </a>
                  <Link
                    href="#features"
                    className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-medium rounded-xl hover:bg-white/10 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-6 text-center">Platform Statistics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-blue-100 text-sm">Ownership</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">+150%</div>
                      <div className="text-blue-100 text-sm">Growth</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-blue-100 text-sm">Availability</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">Global</div>
                      <div className="text-blue-100 text-sm">Reach</div>
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
              Platform Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprena Market provides enterprise-grade tools and capabilities for modern e-commerce operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Seamless Transactions</h3>
              <p className="text-gray-600 text-sm">
                Fast and secure payment processing with multiple payment methods and instant confirmation.
              </p>
            </div>

            <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive sales analytics with real-time dashboards and performance tracking.
              </p>
            </div>

            <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600 text-sm">
                Bank-level security with encrypted transactions and secure data storage.
              </p>
            </div>

            <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                Round-the-clock technical support and customer service for all users.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white rounded-2xl">
          <div className="px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Comprena Market Works</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our platform offers an end-to-end solution for e-commerce, from product listing to order fulfillment.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 -translate-x-1/2"></div>
                
                <div className="space-y-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 md:text-right order-2 md:order-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Product Listing</h3>
                      <p className="text-gray-600">
                        Sellers can easily list products with detailed descriptions, images, and pricing in our intuitive platform.
                      </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center order-1 md:order-2 relative">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">1</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 flex justify-center relative">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">2</div>
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Secure Transactions</h3>
                      <p className="text-gray-600">
                        Buyers can browse and purchase products with confidence, thanks to our secure payment processing and buyer protection.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 md:text-right order-2 md:order-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Order Fulfillment</h3>
                      <p className="text-gray-600">
                        Our streamlined logistics and tracking system ensures orders are delivered efficiently and on time.
                      </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center order-1 md:order-2 relative">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">3</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from businesses and consumers who have experienced the Comprena Market difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">John Doe</h4>
                  <p className="text-gray-600 text-sm">Business Owner</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Comprena Market has transformed how I sell online. The platform is intuitive and the analytics help me make better business decisions."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">AS</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Alice Smith</h4>
                  <p className="text-gray-600 text-sm">Consumer</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Shopping on Comprena Market is seamless. The variety of products and secure payment options give me confidence every time I buy."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">RJ</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Robert Johnson</h4>
                  <p className="text-gray-600 text-sm">Retail Manager</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "The seller tools and analytics on Comprena Market are top-notch. It's helped me scale my business significantly."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your E-Commerce Experience?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses and consumers who are already using Comprena Market for their buying and selling needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://comprena-market.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-medium rounded-xl hover:bg-gray-100 transition-colors"
            >
              Start Buying & Selling
              <ExternalLink className="ml-2 w-5 h-5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-medium rounded-xl hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}