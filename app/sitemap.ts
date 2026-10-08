import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/metadata';
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  return [
    '',
    '/technology',
    '/solutions',
    '/about',
    '/team',
    '/contact',
    '/research',
    '/privacy',
    '/terms',
  ].map((path) => ({
    url: new URL(path || '/', siteUrl).toString(),
    changeFrequency: 'monthly',
    priority: path ? 0.7 : 1,
  }));
}
