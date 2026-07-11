import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db/connection';
import { news } from '@/lib/db/schema';
import { desc, eq } from 'drizzle-orm';

function mapNews(item: any) {
  return {
    id: item.id,
    title: item.title,
    content: item.content,
    date: item.publishedAt ? item.publishedAt.toISOString().split('T')[0] : item.createdAt.toISOString().split('T')[0],
    author: item.author,
    category: item.category,
    featured: item.featured,
    imageUrl: item.imageUrl,
    slug: item.slug
  };
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured');
    const category = searchParams.get('category');
    const limit = searchParams.get('limit');

    const conditions = [];
    if (featured === 'true') {
      conditions.push(eq(news.featured, true));
    }
    if (category) {
      conditions.push(eq(news.category, category as any));
    }

    let query = db.select().from(news).orderBy(desc(news.publishedAt), desc(news.createdAt));

    if (conditions.length > 0) {
      // If we have filters, apply them
      const { and } = await import('drizzle-orm');
      query = query.where(and(...conditions)) as any;
    }

    if (limit) {
      const limitNum = parseInt(limit);
      if (!isNaN(limitNum) && limitNum > 0) {
        query = query.limit(limitNum) as any;
      }
    }

    const dbNews = await query;
    const mappedNews = dbNews.map(mapNews);

    return NextResponse.json({
      success: true,
      news: mappedNews,
      total: mappedNews.length
    });

  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch news',
        news: [],
        total: 0
      },
      { status: 500 }
    );
  }
}
