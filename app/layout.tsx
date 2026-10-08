import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MotionEnhancements } from '@/components/MotionEnhancements';
import { siteUrl } from '@/lib/metadata';
import './globals.css';
import './interactions.css';
import './refinements.css';
import './home.css';
export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: 'WeRV — Satellite Intelligence for Groundwater & Subsidence Risk',
    template: '%s | WeRV',
  },
  icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <MotionEnhancements />
      </body>
    </html>
  );
}
