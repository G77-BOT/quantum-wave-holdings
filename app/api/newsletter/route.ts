import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db/connection';
import { newsletterSubscribers } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { email, firstName, lastName, interests } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json({
        success: false,
        error: "Email is required"
      }, { status: 400 });
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

    // Insert subscriber into database
    await db.insert(newsletterSubscribers).values({
      email,
      firstName: firstName || null,
      lastName: lastName || null,
      interests: interests || null,
      isActive: true,
      subscribedAt: new Date(),
    });
    
    return NextResponse.json({ 
      success: true, 
      message: "Thank you for subscribing to our newsletter!" 
    });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return NextResponse.json({ 
      success: false, 
      error: "Failed to subscribe. Please try again." 
    }, { status: 500 });
  }
}
