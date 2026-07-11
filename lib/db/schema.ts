import { pgTable, text, varchar, timestamp, uuid, integer, boolean, decimal, pgEnum } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';
import { relations } from 'drizzle-orm';

// Enums
export const companyStatusEnum = pgEnum('company_status', ['active', 'inactive', 'acquired', 'sold', 'development']);
export const jobStatusEnum = pgEnum('job_status', ['active', 'paused', 'closed', 'draft']);
export const jobTypeEnum = pgEnum('job_type', ['full-time', 'part-time', 'contract', 'internship']);
export const applicationStatusEnum = pgEnum('application_status', ['pending', 'reviewing', 'interviewing', 'rejected', 'hired']);
export const contactStatusEnum = pgEnum('contact_status', ['new', 'in_progress', 'resolved', 'closed']);
export const contactPriorityEnum = pgEnum('contact_priority', ['low', 'normal', 'high', 'urgent']);
export const contactInquiryTypeEnum = pgEnum('contact_inquiry_type', ['general', 'investment', 'partnership', 'careers', 'media', 'support']);
export const newsCategoryEnum = pgEnum('news_category', ['corporate', 'portfolio', 'industry', 'events', 'press']);

// Portfolio Companies table (replacing subsidiaries)
export const portfolioCompanies = pgTable('portfolio_companies', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  description: text('description').notNull(),
  shortDescription: varchar('short_description', { length: 500 }),
  industry: varchar('industry', { length: 100 }).notNull(),
  website: varchar('website', { length: 500 }),
  logoUrl: varchar('logo_url', { length: 500 }),
  founded: varchar('founded', { length: 10 }),
  headquarters: varchar('headquarters', { length: 255 }),
  employees: varchar('employees', { length: 100 }),
  status: companyStatusEnum('status').default('development').notNull(),
  funding: varchar('funding', { length: 100 }),
  valuation: varchar('valuation', { length: 100 }),
  featured: boolean('featured').default(false),
  tags: text('tags').array(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Company Metrics table
export const companyMetrics = pgTable('company_metrics', {
  id: uuid('id').defaultRandom().primaryKey(),
  companyId: uuid('company_id').references(() => portfolioCompanies.id, { onDelete: 'cascade' }).notNull(),
  metricType: varchar('metric_type', { length: 50 }).notNull(),
  value: varchar('value', { length: 255 }).notNull(),
  label: varchar('label', { length: 100 }),
  date: timestamp('date').defaultNow().notNull(),
});

// News table
export const news = pgTable('news', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  content: text('content').notNull(),
  excerpt: varchar('excerpt', { length: 500 }),
  author: varchar('author', { length: 255 }).notNull(),
  category: newsCategoryEnum('category').default('corporate').notNull(),
  featured: boolean('featured').default(false),
  imageUrl: varchar('image_url', { length: 500 }),
  companyId: uuid('company_id').references(() => portfolioCompanies.id, { onDelete: 'set null' }),
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Jobs table
export const jobs = pgTable('jobs', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  department: varchar('department', { length: 100 }).notNull(),
  location: varchar('location', { length: 255 }).notNull(),
  type: jobTypeEnum('type').default('full-time').notNull(),
  description: text('description').notNull(),
  requirements: text('requirements').array().notNull(),
  benefits: text('benefits').array(),
  salaryMin: integer('salary_min'),
  salaryMax: integer('salary_max'),
  salaryCurrency: varchar('salary_currency', { length: 3 }).default('USD'),
  status: jobStatusEnum('status').default('draft').notNull(),
  featured: boolean('featured').default(false),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  expiresAt: timestamp('expires_at'),
});

// Job Applications table
export const jobApplications = pgTable('job_applications', {
  id: uuid('id').defaultRandom().primaryKey(),
  jobId: uuid('job_id').references(() => jobs.id, { onDelete: 'cascade' }).notNull(),
  firstName: varchar('first_name', { length: 255 }).notNull(),
  lastName: varchar('last_name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }),
  resumeUrl: varchar('resume_url', { length: 500 }),
  coverLetter: text('cover_letter'),
  portfolioUrl: varchar('portfolio_url', { length: 500 }),
  linkedinUrl: varchar('linkedin_url', { length: 500 }),
  githubUrl: varchar('github_url', { length: 500 }),
  experience: text('experience'),
  location: varchar('location', { length: 255 }),
  salaryExpectation: integer('salary_expectation'),
  availableFrom: timestamp('available_from'),
  status: applicationStatusEnum('status').default('pending').notNull(),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Team Members table
export const teamMembers = pgTable('team_members', {
  id: uuid('id').defaultRandom().primaryKey(),
  firstName: varchar('first_name', { length: 255 }).notNull(),
  lastName: varchar('last_name', { length: 255 }).notNull(),
  role: varchar('role', { length: 255 }).notNull(),
  title: varchar('title', { length: 255 }),
  bio: text('bio'),
  photoUrl: varchar('photo_url', { length: 500 }),
  email: varchar('email', { length: 255 }),
  linkedinUrl: varchar('linkedin_url', { length: 500 }),
  twitterUrl: varchar('twitter_url', { length: 500 }),
  isLeadership: boolean('is_leadership').default(false),
  department: varchar('department', { length: 100 }),
  order: integer('order').default(0),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Contact Submissions table
export const contactSubmissions = pgTable('contact_submissions', {
  id: uuid('id').defaultRandom().primaryKey(),
  firstName: varchar('first_name', { length: 255 }).notNull(),
  lastName: varchar('last_name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }),
  company: varchar('company', { length: 255 }),
  subject: varchar('subject', { length: 255 }).notNull(),
  message: text('message').notNull(),
  inquiryType: contactInquiryTypeEnum('inquiry_type').default('general').notNull(),
  status: contactStatusEnum('status').default('new').notNull(),
  priority: contactPriorityEnum('priority').default('normal').notNull(),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Newsletter Subscribers table
export const newsletterSubscribers = pgTable('newsletter_subscribers', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  firstName: varchar('first_name', { length: 255 }),
  lastName: varchar('last_name', { length: 255 }),
  interests: text('interests').array(),
  isActive: boolean('is_active').default(true),
  subscribedAt: timestamp('subscribed_at').defaultNow().notNull(),
  unsubscribedAt: timestamp('unsubscribed_at'),
});

// Relations
export const portfolioCompaniesRelations = relations(portfolioCompanies, ({ many }) => ({
  metrics: many(companyMetrics),
  news: many(news),
}));

export const companyMetricsRelations = relations(companyMetrics, ({ one }) => ({
  company: one(portfolioCompanies, {
    fields: [companyMetrics.companyId],
    references: [portfolioCompanies.id],
  }),
}));

export const newsRelations = relations(news, ({ one }) => ({
  company: one(portfolioCompanies, {
    fields: [news.companyId],
    references: [portfolioCompanies.id],
  }),
}));

export const jobsRelations = relations(jobs, ({ many }) => ({
  applications: many(jobApplications),
}));

export const jobApplicationsRelations = relations(jobApplications, ({ one }) => ({
  job: one(jobs, {
    fields: [jobApplications.jobId],
    references: [jobs.id],
  }),
}));

// Zod schemas
export const insertPortfolioCompanySchema = createInsertSchema(portfolioCompanies);
export const selectPortfolioCompanySchema = createSelectSchema(portfolioCompanies);
export type PortfolioCompany = z.infer<typeof selectPortfolioCompanySchema>;
export type NewPortfolioCompany = z.infer<typeof insertPortfolioCompanySchema>;

export const insertCompanyMetricSchema = createInsertSchema(companyMetrics);
export const selectCompanyMetricSchema = createSelectSchema(companyMetrics);
export type CompanyMetric = z.infer<typeof selectCompanyMetricSchema>;
export type NewCompanyMetric = z.infer<typeof insertCompanyMetricSchema>;

export const insertNewsSchema = createInsertSchema(news);
export const selectNewsSchema = createSelectSchema(news);
export type News = z.infer<typeof selectNewsSchema>;
export type NewNews = z.infer<typeof insertNewsSchema>;

export const insertJobSchema = createInsertSchema(jobs);
export const selectJobSchema = createSelectSchema(jobs);
export type Job = z.infer<typeof selectJobSchema>;
export type NewJob = z.infer<typeof insertJobSchema>;

export const insertJobApplicationSchema = createInsertSchema(jobApplications);
export const selectJobApplicationSchema = createSelectSchema(jobApplications);
export type JobApplication = z.infer<typeof selectJobApplicationSchema>;
export type NewJobApplication = z.infer<typeof insertJobApplicationSchema>;

export const insertTeamMemberSchema = createInsertSchema(teamMembers);
export const selectTeamMemberSchema = createSelectSchema(teamMembers);
export type TeamMember = z.infer<typeof selectTeamMemberSchema>;
export type NewTeamMember = z.infer<typeof insertTeamMemberSchema>;

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions);
export const selectContactSubmissionSchema = createSelectSchema(contactSubmissions);
export type ContactSubmission = z.infer<typeof selectContactSubmissionSchema>;
export type NewContactSubmission = z.infer<typeof insertContactSubmissionSchema>;

export const insertNewsletterSubscriberSchema = createInsertSchema(newsletterSubscribers);
export const selectNewsletterSubscriberSchema = createSelectSchema(newsletterSubscribers);
export type NewsletterSubscriber = z.infer<typeof selectNewsletterSubscriberSchema>;
export type NewNewsletterSubscriber = z.infer<typeof insertNewsletterSubscriberSchema>;

// Keep legacy subsidiaries export for backward compatibility
export const subsidiaries = portfolioCompanies;
export const insertSubsidiarySchema = insertPortfolioCompanySchema;
export const selectSubsidiarySchema = selectPortfolioCompanySchema;
export type Subsidiary = PortfolioCompany;
export type NewSubsidiary = NewPortfolioCompany;
