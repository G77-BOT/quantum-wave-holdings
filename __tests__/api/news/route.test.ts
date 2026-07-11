import { GET } from '@/app/api/news/route';
import { NextResponse } from 'next/server';

describe('News API', () => {
  it('should return a list of news articles', async () => {
    const response = await GET();
    const data = await response.json();

    expect(response).toBeInstanceOf(NextResponse);
    expect(response.status).toBe(200);
    expect(data).toHaveProperty('news');
    expect(Array.isArray(data.news)).toBe(true);
    expect(data.news.length).toBeGreaterThan(0);

    const firstArticle = data.news[0];
    expect(firstArticle).toHaveProperty('id');
    expect(firstArticle).toHaveProperty('title');
    expect(firstArticle).toHaveProperty('content');
    expect(firstArticle).toHaveProperty('date');
    expect(firstArticle).toHaveProperty('author');
  });
});
