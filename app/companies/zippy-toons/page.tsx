import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import { ArrowLeft, ExternalLink, BarChart3, Shield, Zap, Users, CheckCircle, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Zippy Toons',
  description:
    "Zippy Toons is the children's content studio of Quantum Wave Holdings, producing original animated series through automated script, image, audio, and video production.",
  alternates: { canonical: '/companies/zippy-toons' },
  openGraph: {
    title: 'Zippy Toons',
    description:
      "A children's animation studio from Quantum Wave Holdings producing original series for global audiences.",
    url: '/companies/zippy-toons',
    type: 'website',
  },
};

export default function ZippyToonsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-green-100">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">QWH</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Quantum Wave Holdings
                </h1>
                <p className="text-xs text-gray-600">Corporate Excellence</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                Home
              </Link>
              <a href="https://zippy-toons-fun.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                Visit Zippy Toons
              </a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-green-600 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Portfolio
        </Link>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl overflow-hidden mb-12">
          <div className="px-8 py-16 md:px-12">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">ZT</span>
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold">Zippy Toons</h1>
                    <p className="text-green-100">Children's YouTube Channel</p>
                  </div>
                </div>
                <p className="text-xl text-green-100 mb-8 leading-relaxed">
                  Zippy Toons delivers engaging children's content with advanced automation, 
                  featuring script generation, image creation, audio production, and video assembly 
                  for high-quality animated entertainment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://zippy-toons-fun.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-white text-green-600 font-medium rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    Visit Zippy Toons
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
                  <h3 className="text-xl font-bold mb-6 text-center">Channel Statistics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">100%</div>
                      <div className="text-green-100 text-sm">Ownership</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">+150%</div>
                      <div className="text-green-100 text-sm">Growth</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">Auto</div>
                      <div className="text-green-100 text-sm">Production</div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold">HD</div>
                      <div className="text-green-100 text-sm">Quality</div>
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
              Zippy Toons leverages advanced automation to create engaging children's content efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Automated Scripts</h3>
              <p className="text-gray-600 text-sm">
                AI-powered script generation for engaging storylines tailored for children.
              </p>
            </div>

            <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Image Generation</h3>
              <p className="text-gray-600 text-sm">
                High-quality character and scene images created through advanced AI tools.
              </p>
            </div>

            <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Audio Production</h3>
              <p className="text-gray-600 text-sm">
                Professional voiceovers and sound effects generated automatically for each video.
              </p>
            </div>

            <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Video Assembly</h3>
              <p className="text-gray-600 text-sm">
                Seamless integration of all elements into polished, engaging animated videos.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white rounded-2xl">
          <div className="px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Zippy Toons Works</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our automation pipeline creates complete animated videos from concept to publication.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-green-200 -translate-x-1/2"></div>
                
                <div className="space-y-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 md:text-right order-2 md:order-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Script Generation</h3>
                      <p className="text-gray-600">
                        Our AI generates engaging, age-appropriate scripts with compelling storylines and educational value.
                      </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center order-1 md:order-2 relative">
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">1</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 flex justify-center relative">
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">2</div>
                    </div>
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Visual & Audio Creation</h3>
                      <p className="text-gray-600">
                        Characters, scenes, voiceovers, and sound effects are automatically generated to match the script.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 md:text-right order-2 md:order-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Video Assembly & Publish</h3>
                      <p className="text-gray-600">
                        All elements are seamlessly combined into a polished video and automatically published to YouTube.
                      </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center order-1 md:order-2 relative">
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">3</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Parents Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from parents whose children love watching Zippy Toons content.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JD</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">John Doe</h4>
                  <p className="text-gray-600 text-sm">Parent</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "My kids absolutely love Zippy Toons! The content is educational, entertaining, and always appropriate. A parent's dream."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">AS</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Alice Smith</h4>
                  <p className="text-gray-600 text-sm">Mother of 3</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "The quality of animation and storytelling on Zippy Toons is impressive. My children learn something new in every video."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">RJ</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Robert Johnson</h4>
                  <p className="text-gray-600 text-sm">Father of 2</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "As a parent, I appreciate the safe and educational content. Zippy Toons has become a staple in our household."
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
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Zippy Toons?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of families who are already enjoying quality children's content on Zippy Toons.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://zippy-toons-fun.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-medium rounded-xl hover:bg-gray-100 transition-colors"
            >
              Watch Now
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
