import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db/connection';
import { newsletterSubscribers } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { email } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json({
        success: false,
        error: "Email is required"
      }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({
        success: false,
        error: "Invalid email format"
      }, { status: 400 });
    }

    // Check DATABASE_URL is set
    if (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes('host:port/db')) {
      console.error('DATABASE_URL is not properly configured');
      return NextResponse.json({
        success: false,
        error: "Database not configured. Please contact support."
      }, { status: 500 });
    }

    // Check if email already exists
    const existing = await db.select()
      .from(newsletterSubscribers)
      .where(eq(newsletterSubscribers.email, email))
      .limit(1);

    if (existing.length > 0) {
      return NextResponse.json({
        success: false,
        error: "Email already subscribed"
      }, { status: 409 });
    }

    // Insert subscriber into database (only email required)
    await db.insert(newsletterSubscribers).values({
      email,
      isActive: true,
      subscribedAt: new Date(),
    });
    
    return NextResponse.json({ 
      success: true, 
      message: "Thank you for subscribing to our newsletter!" 
    });
  } catch (error: any) {
    console.error('Error subscribing to newsletter:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message || "Failed to subscribe. Please try again." 
    }, { status: 500 });
  }
}
