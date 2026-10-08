import type { Metadata } from 'next';
import { siteDescription } from '@/data/site';
const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
export const siteUrl = configured ? new URL(configured) : undefined;
if (
  siteUrl &&
  (!['https:', 'http:'].includes(siteUrl.protocol) ||
    siteUrl.pathname !== '/' ||
    siteUrl.search ||
    siteUrl.hash ||
    siteUrl.username ||
    siteUrl.password)
) {
  throw new Error(
    'NEXT_PUBLIC_SITE_URL must be an HTTP(S) origin without a path, credentials, query or fragment',
  );
}
export function pageMetadata(title: string, description = siteDescription, path = '/'): Metadata {
  const url = siteUrl ? new URL(path, siteUrl).toString() : undefined;
  const image = siteUrl ? new URL('/assets/hero.jpg', siteUrl).toString() : undefined;
  const fullTitle = path === '/' ? `WeRV — ${title}` : `${title} | WeRV`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      type: 'website',
      siteName: 'WeRV',
      url,
      images: image
        ? [{ url: image, width: 736, height: 414, alt: 'Satellite above Earth — WeRV' }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: image ? [image] : undefined,
    },
    robots: siteUrl ? { index: true, follow: true } : { index: false, follow: false },
  };
}
