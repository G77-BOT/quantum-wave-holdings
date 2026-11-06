import type { MetadataRoute } from 'next';
import { primaryRoutes, site, siteCompanies } from '@/lib/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = primaryRoutes
    .map((route) => route.path)
    .concat([
      '/portfolio/criteria',
      '/portfolio/success-stories',
      '/investor-relations/performance',
      '/investor-relations/reports',
      '/privacy',
      '/terms',
      '/cookies',
      '/disclaimer',
    ]);

  return [
    ...staticRoutes.map((path) => ({
      url: `${site.url}${path === '/' ? '' : path}`,
      lastModified,
      changeFrequency: (path === '/' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
      priority: path === '/' ? 1 : 0.7,
    })),
    ...siteCompanies.map((company) => ({
      url: `${site.url}${company.href}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
