import { NextRequest, NextResponse } from 'next/server';

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
    
    // In a real implementation, you would process the contact form submission
    // For now, we'll just return a success response
    
    return NextResponse.json({ 
      success: true, 
      message: "Thank you for your message. We'll get back to you soon!" 
    });
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: "Failed to send message. Please try again." 
    }, { status: 500 });
  }
}
