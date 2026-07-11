import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db/connection';
import { jobApplications, jobs } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { z } from 'zod';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const name = body.name || (body.firstName && body.lastName ? `${body.firstName} ${body.lastName}` : '');
    const email = body.email;
    const resume = body.resume || body.resumeUrl;
    const jobId = body.jobId;

    // Validate required fields
    if (!jobId || !name || !email || !resume) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email using Zod (safe and standard, prevents ReDoS)
    const emailResult = z.string().email().max(254).safeParse(email);
    if (!emailResult.success) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if the job exists and is open
    const [job] = await db.select().from(jobs).where(eq(jobs.id, jobId));
    if (!job) {
      return NextResponse.json(
        { success: false, error: 'Job not found' },
        { status: 400 }
      );
    }

    if (job.status === 'closed' || job.status === 'paused' || job.status === 'draft') {
      return NextResponse.json(
        { success: false, error: 'This job is not currently accepting applications' },
        { status: 400 }
      );
    }

    const nameParts = name.trim().split(/\s+/);
    const firstName = body.firstName || nameParts[0] || '';
    const lastName = body.lastName || nameParts.slice(1).join(' ') || '';

    // Create new application in the database
    const [newApplication] = await db.insert(jobApplications).values({
      jobId,
      firstName,
      lastName,
      email,
      phone: body.phone || null,
      resumeUrl: resume, // Mapping form 'resume' field to 'resumeUrl' in DB
      coverLetter: body.coverLetter || null,
      status: 'pending'
    }).returning();

    const returnedApp = {
      id: newApplication.id,
      jobId: newApplication.jobId,
      firstName: newApplication.firstName,
      lastName: newApplication.lastName,
      name: `${newApplication.firstName} ${newApplication.lastName}`.trim(),
      email: newApplication.email,
      phone: newApplication.phone,
      resume: newApplication.resumeUrl,
      coverLetter: newApplication.coverLetter,
      status: newApplication.status,
      appliedAt: newApplication.createdAt,
      createdAt: newApplication.createdAt,
      updatedAt: newApplication.updatedAt
    };

    return NextResponse.json({
      success: true,
      data: returnedApp,
      application: returnedApp,
      message: 'Application submitted successfully'
    }, { status: 201 });

  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
