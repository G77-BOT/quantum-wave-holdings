import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db/connection';
import { jobs } from '@/lib/db/schema';
import { eq, ilike, and, or, desc } from 'drizzle-orm';

// Helper to map DB Job to frontend Job
function mapJob(job: any) {
  let salary = undefined;
  if (job.salaryMin && job.salaryMax) {
    const currencySym = job.salaryCurrency === 'USD' ? '$' : '';
    salary = `${currencySym}${job.salaryMin.toLocaleString()} - ${currencySym}${job.salaryMax.toLocaleString()}`;
  } else if (job.salaryMin) {
    const currencySym = job.salaryCurrency === 'USD' ? '$' : '';
    salary = `${currencySym}${job.salaryMin.toLocaleString()}+`;
  }

  // Capitalize job type for UI display (e.g. full-time -> Full-time)
  const displayType = job.type
    ? job.type.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join('-')
    : '';

  return {
    ...job,
    type: displayType,
    salary,
    postedDate: job.createdAt.toISOString().split('T')[0],
  };
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Get query parameters
    const department = searchParams.get('department');
    const location = searchParams.get('location');
    const type = searchParams.get('type');
    const featured = searchParams.get('featured');
    const limit = searchParams.get('limit');
    const search = searchParams.get('search');

    const conditions = [];

    // Only query active jobs by default
    conditions.push(eq(jobs.status, 'active'));

    if (department && department !== 'all') {
      conditions.push(ilike(jobs.department, `%${department}%`));
    }

    if (location) {
      conditions.push(ilike(jobs.location, `%${location}%`));
    }

    if (type) {
      conditions.push(eq(jobs.type, type.toLowerCase() as any));
    }

    if (featured === 'true') {
      conditions.push(eq(jobs.featured, true));
    }

    if (search) {
      const searchPattern = `%${search}%`;
      conditions.push(
        or(
          ilike(jobs.title, searchPattern),
          ilike(jobs.description, searchPattern),
          ilike(jobs.department, searchPattern)
        )
      );
    }

    let query = db.select().from(jobs).where(and(...conditions)).orderBy(desc(jobs.featured), desc(jobs.createdAt));

    if (limit) {
      const limitNum = parseInt(limit);
      if (!isNaN(limitNum) && limitNum > 0) {
        query = query.limit(limitNum) as any;
      }
    }

    const dbJobs = await query;
    const mappedJobs = dbJobs.map(mapJob);

    return NextResponse.json({
      success: true,
      jobs: mappedJobs,
      total: mappedJobs.length,
      filters: {
        department,
        location,
        type,
        featured,
        search
      }
    });

  } catch (error) {
    console.error('Error fetching jobs:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch jobs',
        jobs: [],
        total: 0
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = ['title', 'department', 'location', 'type', 'description'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Create new job in database
    const [newJob] = await db.insert(jobs).values({
      title: body.title,
      department: body.department,
      location: body.location,
      type: body.type.toLowerCase() as any,
      description: body.description,
      requirements: body.requirements || [],
      benefits: body.benefits || [],
      salaryMin: body.salaryMin || null,
      salaryMax: body.salaryMax || null,
      salaryCurrency: body.salaryCurrency || 'USD',
      status: 'active',
      featured: body.featured || false,
    }).returning();

    return NextResponse.json({
      success: true,
      job: mapJob(newJob),
      message: 'Job created successfully'
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating job:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create job' },
      { status: 500 }
    );
  }
}

// Get individual job by ID
export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Job ID is required' },
        { status: 400 }
      );
    }

    const [job] = await db.select().from(jobs).where(eq(jobs.id, id));

    if (!job) {
      return NextResponse.json(
        { success: false, error: 'Job not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      job: mapJob(job)
    });

  } catch (error) {
    console.error('Error fetching job:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch job' },
      { status: 500 }
    );
  }
}
