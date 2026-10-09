import type { NextConfig } from 'next';
const config: NextConfig = {
  output: 'export',
  // Cloudflare serves out/ as static assets, without Next.js's /_next/image endpoint.
  images: { unoptimized: true },
  poweredByHeader: false,
};
export default config;
