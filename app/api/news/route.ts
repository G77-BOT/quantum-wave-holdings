import { NextResponse } from 'next/server';

export async function GET() {
  const news = [
    {
      id: 1,
      title: "Quantum Wave Holdings Announces Strategic Partnership",
      content: "Quantum Wave Holdings today announced a strategic partnership to accelerate growth across our portfolio companies.",
      date: "2024-01-15",
      author: "Quantum Wave Holdings Team"
    },
    {
      id: 2,
      title: "BotStream Launches Advanced Trading Features",
      content: "We've released several new API endpoints to improve data access and integration capabilities for our enterprise clients.",
      date: "2024-01-10",
      author: "Development Team"
    },
    {
      id: 3,
      title: "Technology Innovation Awards 2024",
      content: "Recognition for outstanding contribution to fintech innovation.",
      date: "2024-01-05",
      author: "Business Development"
    }
  ];

  return NextResponse.json({ news });
}
