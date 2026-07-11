#!/usr/bin/env tsx

import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import { portfolioCompanies, companyMetrics, news, jobs, teamMembers } from '../lib/db/schema';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is required');
}

const client = postgres(process.env.DATABASE_URL, { max: 1 });
const db = drizzle(client);

async function main() {
  console.log('🌱 Seeding database...');

  try {
    // 1. Clean existing data
    console.log('🧹 Cleaning old data...');
    await db.delete(companyMetrics);
    await db.delete(news);
    await db.delete(jobs);
    await db.delete(teamMembers);
    await db.delete(portfolioCompanies);

    // 2. Insert Portfolio Company
    console.log('🏢 Inserting portfolio companies...');
    const [bostream] = await db.insert(portfolioCompanies).values({
      name: 'Botstream',
      slug: 'bostream',
      description: 'Advanced cryptocurrency trading platform featuring real-time data streaming, professional analytics, and institutional-grade security for modern traders.',
      shortDescription: 'Crypto Trading Platform',
      industry: 'FinTech',
      website: 'https://botstream.ca',
      founded: '2022',
      headquarters: 'Toronto, Canada',
      employees: '10-50',
      status: 'active',
      funding: '$2.5M',
      valuation: '$15M',
      featured: true,
      tags: ['Crypto', 'Trading', 'Real-time', 'Analytics'],
    }).returning();

    // 3. Insert Metrics
    console.log('📈 Inserting metrics...');
    await db.insert(companyMetrics).values([
      {
        companyId: bostream.id,
        metricType: 'uptime',
        value: '99.9%',
        label: 'Uptime',
      },
      {
        companyId: bostream.id,
        metricType: 'latency',
        value: '<10ms',
        label: 'Latency',
      },
    ]);

    // 4. Insert News Articles
    console.log('📰 Inserting news articles...');
    await db.insert(news).values([
      {
        title: 'Quantum Wave Holdings Announces Strategic Partnership',
        slug: 'quantum-wave-holdings-strategic-partnership',
        content: 'Quantum Wave Holdings today announced a strategic partnership to accelerate growth across our portfolio companies. We will collaborate on scaling infrastructure and introducing new automated trading systems across our financial operations.',
        excerpt: 'New partnership aims to accelerate growth across our portfolio companies.',
        author: 'Quantum Wave Holdings Team',
        category: 'corporate',
        featured: true,
        publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      },
      {
        title: 'Botstream Launches Advanced Trading Features',
        slug: 'botstream-launches-advanced-trading-features',
        content: 'We\'ve released several new API endpoints to improve data access and integration capabilities for our enterprise clients. This includes custom websocket feeds and high-frequency execution pipelines.',
        excerpt: 'New suite of professional trading tools now available for institutional clients.',
        author: 'Development Team',
        category: 'portfolio',
        companyId: bostream.id,
        featured: true,
        publishedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
      },
      {
        title: 'Technology Innovation Awards 2024',
        slug: 'technology-innovation-awards-2024',
        content: 'Quantum Wave Holdings has been nominated for outstanding contribution to fintech innovation at the upcoming Technology Innovation Awards 2024. This recognition marks our continued push for high-performance trading solutions.',
        excerpt: 'Recognition for outstanding contribution to fintech innovation.',
        author: 'Business Development',
        category: 'industry',
        featured: false,
        publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 1 week ago
      },
    ]);

    // 5. Insert Job Listings
    console.log('💼 Inserting job listings...');
    await db.insert(jobs).values([
      {
        title: 'Senior Backend Developer',
        department: 'Engineering',
        location: 'Remote',
        type: 'full-time',
        description: 'Join our team to build scalable cryptocurrency data streaming infrastructure. You\'ll work on high-performance systems that process millions of transactions and data points from multiple exchanges in real-time.',
        requirements: [
          '5+ years experience with Node.js and TypeScript',
          'Experience with distributed systems and microservices',
          'Knowledge of cryptocurrency exchanges and trading systems',
          'Proficiency in SQL and NoSQL databases',
          'Experience with AWS or similar cloud platforms',
          'Strong understanding of API design and development'
        ],
        benefits: [
          'Competitive salary with equity options',
          'Comprehensive health, dental, and vision coverage',
          'Flexible remote work arrangements',
          'Professional development budget ($5,000/year)',
          'Latest MacBook Pro and equipment',
          'Unlimited PTO policy'
        ],
        salaryMin: 120000,
        salaryMax: 180000,
        salaryCurrency: 'USD',
        status: 'active',
        featured: true,
      },
      {
        title: 'DevOps Engineer',
        department: 'Infrastructure',
        location: 'Remote',
        type: 'full-time',
        description: 'Help us maintain and scale our high-availability cryptocurrency platform. You\'ll be responsible for infrastructure automation, monitoring, and ensuring 99.9% uptime across our global operations.',
        requirements: [
          '3+ years experience with AWS, Docker, and Kubernetes',
          'Proficiency in infrastructure-as-code tools (Terraform, CloudFormation)',
          'Experience with CI/CD pipelines and automation',
          'Knowledge of monitoring tools (Prometheus, Grafana, ELK stack)',
          'Understanding of security best practices',
          'Experience with high-traffic, mission-critical systems'
        ],
        benefits: [
          'Competitive salary with performance bonuses',
          'Stock options in a growing company',
          'Health and wellness stipend',
          'Remote-first culture with team retreats',
          'Top-tier hardware and software tools',
          'Professional conference attendance'
        ],
        salaryMin: 100000,
        salaryMax: 150000,
        salaryCurrency: 'USD',
        status: 'active',
        featured: false,
      },
      {
        title: 'Investment Analyst',
        department: 'Investments',
        location: 'New York, NY',
        type: 'full-time',
        description: 'Join our investment team to analyze potential opportunities and support portfolio companies.',
        requirements: [
          'Bachelor\'s degree in Finance, Economics, or related field',
          '2-4 years of experience in investment analysis or consulting',
          'Strong analytical and financial modeling skills',
          'Excellent communication and presentation abilities',
          'CFA designation preferred'
        ],
        benefits: [
          'Competitive compensation packages',
          'Health, savings plans, and insurance benefits',
          'Active mentoring and fast-tracked progression',
          'Access to professional networks'
        ],
        salaryMin: 90000,
        salaryMax: 120000,
        salaryCurrency: 'USD',
        status: 'active',
        featured: true,
      },
    ]);

    // 6. Insert Team Members
    console.log('👥 Inserting team members...');
    await db.insert(teamMembers).values([
      {
        firstName: 'Alexander',
        lastName: 'Vance',
        role: 'Chief Executive Officer',
        title: 'CEO & Founder',
        bio: 'Over 15 years of experience building and scaling technology startups. Former fintech executive and venture developer.',
        isLeadership: true,
        department: 'Executive',
        order: 1,
        isActive: true,
      },
      {
        firstName: 'Sarah',
        lastName: 'Chen',
        role: 'Chief Technology Officer',
        title: 'CTO',
        bio: 'Distinguished engineer with expertise in distributed systems and algorithmic trading. Former lead architect at a top-tier digital asset exchange.',
        isLeadership: true,
        department: 'Technology',
        order: 2,
        isActive: true,
      },
      {
        firstName: 'Marcus',
        lastName: 'Stone',
        role: 'Managing Partner',
        title: 'Managing Director, Investments',
        bio: 'Former venture capital director with a focus on web3 and financial technology. MBA from Wharton.',
        isLeadership: true,
        department: 'Investments',
        order: 3,
        isActive: true,
      },
    ]);

    console.log('✅ Database seeded successfully!');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  } finally {
    await client.end();
  }
}

main();
