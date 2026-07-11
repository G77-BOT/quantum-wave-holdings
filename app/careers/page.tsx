'use client';
export const dynamic = 'force-dynamic';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { ArrowLeft, MapPin, Clock, DollarSign, Users, Award, Coffee, Heart, Briefcase, ChevronRight } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
  salary?: string;
  postedDate: string;
}

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  useEffect(() => {
    // Fetch jobs from API
    const fetchJobs = async () => {
      try {
        const response = await fetch('/api/jobs');
        const data = await response.json();

        if (data.success && data.jobs) {
          setJobs(data.jobs);
        } else {
          console.error('Failed to fetch jobs:', data);
          setJobs([]);
        }
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setJobs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const departments = Array.from(new Set(jobs.map(job => job.department)));
  const filteredJobs = selectedDepartment === 'all'
    ? jobs
    : jobs.filter(job => job.department === selectedDepartment);

  const companyValues = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Innovation Excellence",
      description: "We push boundaries and embrace cutting-edge technologies to solve complex problems."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Culture",
      description: "We believe in the power of teamwork and diverse perspectives to drive success."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Work-Life Balance",
      description: "We support flexible work arrangements and prioritize employee well-being."
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Growth Mindset",
      description: "Continuous learning and professional development are core to our culture."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-blue-100 sticky top-0 z-50">
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
                <p className="text-xs text-gray-500">Corporate Excellence</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                About
              </Link>
              <Link href="/leadership" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Leadership
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl overflow-hidden mb-12">
          <div className="px-8 py-16 md:px-12">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
                Help us shape the future of finance and technology. Build innovative solutions,
                grow your career, and make a meaningful impact in a fast-growing company.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
                <div className="flex items-center justify-center">
                  <Briefcase className="w-4 h-4 mr-2" />
                  {jobs.length} Open Positions
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Remote-First Culture
                </div>
                <div className="flex items-center justify-center">
                  <Award className="w-4 h-4 mr-2" />
                  Competitive Benefits
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-16 bg-white rounded-2xl mb-12">
          <div className="px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're building the future of financial technology, and we need passionate individuals to join us on this journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Filter */}
        <section className="mb-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <h2 className="text-xl font-bold text-gray-900">Open Positions</h2>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Filter by department:</span>
                <select
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                >
                  <option value="all">All Departments</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section>
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        {job.salary && (
                          <div className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {job.salary}
                          </div>
                        )}
                      </div>
                    </div>
                    <Link
                      href={`/careers/${job.id}`}
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      View Details
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>

                  <p className="text-gray-700 mb-4">{job.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Requirements</h4>
                      <ul className="space-y-1">
                        {job.requirements.slice(0, 3).map((req, index) => (
                          <li key={index} className="text-gray-600 text-sm flex items-start">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                        {job.requirements.length > 3 && (
                          <li className="text-blue-600 text-sm">
                            +{job.requirements.length - 3} more requirements
                          </li>
                        )}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Benefits Highlights</h4>
                      <ul className="space-y-1">
                        {job.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="text-gray-600 text-sm flex items-start">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                        {job.benefits.length > 3 && (
                          <li className="text-green-600 text-sm">
                            +{job.benefits.length - 3} more benefits
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Call to Action */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See the Right Role?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team.
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-medium rounded-xl hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </Link>
            <a
              href="mailto:careers@quantumwaveholdings.com"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-medium rounded-xl hover:bg-white/10 transition-colors"
            >
              Send Resume
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
