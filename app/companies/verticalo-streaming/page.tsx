import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { ArrowLeft, ExternalLink, BarChart3, Shield, Zap, Users, CheckCircle, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Verticalo Streaming',
  description:
    'Verticalo Streaming is a short-form vertical streaming platform from Quantum Wave Holdings, delivering premium drama series in HD with personalized recommendations.',
  alternates: { canonical: '/companies/verticalo-streaming' },
  openGraph: {
    title: 'Verticalo Streaming',
    description:
      'A vertical streaming platform from Quantum Wave Holdings for premium short-form drama series.',
    url: '/companies/verticalo-streaming',
    type: 'website',
  },
};

export default function VerticaloStreamingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-purple-100">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">QWH</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Quantum Wave Holdings
                </h1>
                <p className="text-xs text-gray-600">Corporate Excellence</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                Home
              </Link>
              <a href="https://vertical-streaming-platform.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">
                Visit Verticalo Streaming
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Portfolio
        </Link>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl overflow-hidden mb-12">
          <div className="px-8 py-16 md:px-12">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">VS</span>
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold">Verticalo Streaming</h1>
                    <p className="text-purple-100">Vertical Streaming Platform</p>
                  </div>
                </div>
                <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                  Verticalo Streaming delivers premium short-form drama series and more, 
                  featuring an immersive viewing experience with high-quality streaming and 
                  personalized content recommendations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://vertical-streaming-platform.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-medium rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    Visit Verticalo Streaming
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
                      <div className="text-2xl font-bold">25%</div>
                      <div className="text-purple-100 text-sm">Ownership</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">+150%</div>
                      <div className="text-purple-100 text-sm">Growth</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">HD</div>
                      <div className="text-purple-100 text-sm">Quality</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-purple-100 text-sm">Streaming</div>
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
              Verticalo Streaming provides premium streaming features for an exceptional viewing experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">High-Quality Streaming</h3>
              <p className="text-gray-600 text-sm">
                Crystal-clear HD streaming with adaptive bitrate for optimal viewing on any device.
              </p>
            </div>

            <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Content</h3>
              <p className="text-gray-600 text-sm">
                AI-powered recommendations based on your viewing preferences and history.
              </p>
            </div>

            <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Platform</h3>
              <p className="text-gray-600 text-sm">
                Secure streaming with content protection and user privacy features.
              </p>
            </div>

            <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Features</h3>
              <p className="text-gray-600 text-sm">
                Engage with other viewers through comments, likes, and social sharing.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white rounded-2xl">
          <div className="px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Verticalo Streaming Works</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our platform offers a seamless streaming experience from content discovery to viewing.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-purple-200 -translate-x-1/2"></div>
                
                <div className="space-y-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 md:text-right order-2 md:order-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Content Discovery</h3>
                      <p className="text-gray-600">
                        Browse our curated library of short-form drama series and discover new content tailored to your interests.
                      </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center order-1 md:order-2 relative">
                      <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">1</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 flex justify-center relative">
                      <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">2</div>
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized Viewing</h3>
                      <p className="text-gray-600">
                        Enjoy content with personalized recommendations and customizable viewing preferences.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 md:text-right order-2 md:order-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Engage & Share</h3>
                      <p className="text-gray-600">
                        Connect with the community through comments, likes, and share your favorite content.
                      </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center order-1 md:order-2 relative">
                      <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">3</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Viewers Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from viewers who have experienced the Verticalo Streaming difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">John Doe</h4>
                  <p className="text-gray-600 text-sm">Content Enthusiast</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Verticalo Streaming has the best short-form drama content. The quality is amazing and the recommendations are spot on."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">AS</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Alice Smith</h4>
                  <p className="text-gray-600 text-sm">Regular Viewer</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "I love the variety of content on Verticalo Streaming. There's always something new and interesting to watch."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">RJ</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Robert Johnson</h4>
                  <p className="text-gray-600 text-sm">Cinema Lover</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "The streaming quality on Verticalo is exceptional. No buffering, crystal clear picture, and great user experience."
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
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Streaming?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of viewers who are already enjoying premium short-form content on Verticalo Streaming.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://vertical-streaming-platform.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-medium rounded-xl hover:bg-gray-100 transition-colors"
            >
              Start Watching
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
