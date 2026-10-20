import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db/connection';
import { contactSubmissions } from '@/lib/db/schema';

export async function GET() {
  const contact = {
    company: "Quantum Wave Holdings",
    email: "contact@quantumwaveholdings.com",
    phone: "+1 (555) 123-4567",
    address: {
      street: "123 Innovation Street",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "USA"
    },
    support: {
      email: "support@quantumwaveholdings.com",
      hours: "24/7"
    }
  };

  return NextResponse.json({ contact });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    let firstName = body.firstName || body.first_name;
    let lastName = body.lastName || body.last_name;
    const email = body.email;
    const phone = body.phone;
    const company = body.company;
    const subject = body.subject;
    const message = body.message;
    const inquiryType = body.inquiryType || body.inquiry_type || 'general';

    // Fallback to name field if firstName/lastName not provided
    if (!firstName && !lastName && body.name) {
      const nameParts = body.name.trim().split(/\s+/);
      firstName = nameParts[0];
      lastName = nameParts.slice(1).join(' ');
    }

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({
        success: false,
        error: "Missing required fields (first_name, last_name, email, subject, message)"
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

    // Insert submission into database
    await db.insert(contactSubmissions).values({
      firstName,
      lastName,
      email,
      phone: phone || null,
      company: company || null,
      subject,
      message,
      inquiryType: inquiryType.toLowerCase() as any,
      status: 'new',
      priority: 'normal'
    });
    
    return NextResponse.json({ 
      success: true, 
      message: "Thank you for your message. We'll get back to you soon!" 
    });
  } catch (error: any) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message || "Failed to send message. Please try again." 
    }, { status: 500 });
  }
}
