import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa6';
import { navigation } from '@/data/site';
import { members } from '@/data/team';
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-main">
        <div>
          <Link href="/" className="wordmark">
            WeRV
            <span className="brand-orbit" aria-hidden="true" />
          </Link>
          <p>
            Satellite intelligence for groundwater,
            <br />
            subsidence and long-term risk.
          </p>
          <span className="micro">EARTH OBSERVATION. LONGER HORIZONS.</span>
        </div>
        <div className="footer-nav" aria-label="Footer navigation">
          {[
            ...navigation,
            { href: '/contact', label: 'Contact' },
            { href: '/research', label: 'Research' },
          ].map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </div>
        <div className="footer-contact">
          {members.map((m) => (
            <div key={m.name}>
              <a href={`mailto:${m.email}`}>{m.email}</a>
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${m.name} on LinkedIn`}
              >
                <FaLinkedinIn />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 WeRV. All rights reserved.</span>

        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
