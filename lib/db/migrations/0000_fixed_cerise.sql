CREATE TYPE "public"."application_status" AS ENUM('pending', 'reviewing', 'interviewing', 'rejected', 'hired');--> statement-breakpoint
CREATE TYPE "public"."company_status" AS ENUM('active', 'inactive', 'acquired', 'sold', 'development');--> statement-breakpoint
CREATE TYPE "public"."contact_inquiry_type" AS ENUM('general', 'investment', 'partnership', 'careers', 'media', 'support');--> statement-breakpoint
CREATE TYPE "public"."contact_priority" AS ENUM('low', 'normal', 'high', 'urgent');--> statement-breakpoint
CREATE TYPE "public"."contact_status" AS ENUM('new', 'in_progress', 'resolved', 'closed');--> statement-breakpoint
CREATE TYPE "public"."job_status" AS ENUM('active', 'paused', 'closed', 'draft');--> statement-breakpoint
CREATE TYPE "public"."job_type" AS ENUM('full-time', 'part-time', 'contract', 'internship');--> statement-breakpoint
CREATE TYPE "public"."news_category" AS ENUM('corporate', 'portfolio', 'industry', 'events', 'press');--> statement-breakpoint
CREATE TABLE "company_metrics" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"company_id" uuid NOT NULL,
	"metric_type" varchar(50) NOT NULL,
	"value" varchar(255) NOT NULL,
	"label" varchar(100),
	"date" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "contact_submissions" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone" varchar(50),
	"company" varchar(255),
	"subject" varchar(255) NOT NULL,
	"message" text NOT NULL,
	"inquiry_type" "contact_inquiry_type" DEFAULT 'general' NOT NULL,
	"status" "contact_status" DEFAULT 'new' NOT NULL,
	"priority" "contact_priority" DEFAULT 'normal' NOT NULL,
	"notes" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "job_applications" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"job_id" uuid NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone" varchar(50),
	"resume_url" varchar(500),
	"cover_letter" text,
	"portfolio_url" varchar(500),
	"linkedin_url" varchar(500),
	"github_url" varchar(500),
	"experience" text,
	"location" varchar(255),
	"salary_expectation" integer,
	"available_from" timestamp,
	"status" "application_status" DEFAULT 'pending' NOT NULL,
	"notes" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "jobs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"department" varchar(100) NOT NULL,
	"location" varchar(255) NOT NULL,
	"type" "job_type" DEFAULT 'full-time' NOT NULL,
	"description" text NOT NULL,
	"requirements" text[] NOT NULL,
	"benefits" text[],
	"salary_min" integer,
	"salary_max" integer,
	"salary_currency" varchar(3) DEFAULT 'USD',
	"status" "job_status" DEFAULT 'draft' NOT NULL,
	"featured" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"expires_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "news" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"content" text NOT NULL,
	"excerpt" varchar(500),
	"author" varchar(255) NOT NULL,
	"category" "news_category" DEFAULT 'corporate' NOT NULL,
	"featured" boolean DEFAULT false,
	"image_url" varchar(500),
	"company_id" uuid,
	"published_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "news_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "newsletter_subscribers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" varchar(255) NOT NULL,
	"first_name" varchar(255),
	"last_name" varchar(255),
	"interests" text[],
	"is_active" boolean DEFAULT true,
	"subscribed_at" timestamp DEFAULT now() NOT NULL,
	"unsubscribed_at" timestamp,
	CONSTRAINT "newsletter_subscribers_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "portfolio_companies" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(255) NOT NULL,
	"slug" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"short_description" varchar(500),
	"industry" varchar(100) NOT NULL,
	"website" varchar(500),
	"logo_url" varchar(500),
	"founded" varchar(10),
	"headquarters" varchar(255),
	"employees" varchar(100),
	"status" "company_status" DEFAULT 'development' NOT NULL,
	"funding" varchar(100),
	"valuation" varchar(100),
	"featured" boolean DEFAULT false,
	"tags" text[],
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "portfolio_companies_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "team_members" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"role" varchar(255) NOT NULL,
	"title" varchar(255),
	"bio" text,
	"photo_url" varchar(500),
	"email" varchar(255),
	"linkedin_url" varchar(500),
	"twitter_url" varchar(500),
	"is_leadership" boolean DEFAULT false,
	"department" varchar(100),
	"order" integer DEFAULT 0,
	"is_active" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "company_metrics" ADD CONSTRAINT "company_metrics_company_id_portfolio_companies_id_fk" FOREIGN KEY ("company_id") REFERENCES "public"."portfolio_companies"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "job_applications" ADD CONSTRAINT "job_applications_job_id_jobs_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."jobs"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "news" ADD CONSTRAINT "news_company_id_portfolio_companies_id_fk" FOREIGN KEY ("company_id") REFERENCES "public"."portfolio_companies"("id") ON DELETE set null ON UPDATE no action;