'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { navigation } from '@/data/site';
export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      header.current?.style.setProperty('--nav-scroll', String(Math.min(window.scrollY / 120, 1)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false);
        button.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  return (
    <header ref={header} className="site-header">
      <div className="nav-shell">
        <Link href="/" className="wordmark" aria-label="WeRV home">
          WeRV
          <span className="brand-orbit" aria-hidden="true" />
        </Link>
        <button
          ref={button}
          className="menu-button"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
          <span aria-hidden="true">{open ? '×' : '☰'}</span>
        </button>
        <nav
          id="primary-nav"
          aria-label="Main navigation"
          className={open ? 'navigation is-open' : 'navigation'}
        >
          {navigation.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={pathname === n.href ? 'page' : undefined}
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="nav-cta"
            aria-current={pathname === '/contact' ? 'page' : undefined}
          >
            Talk to us
          </Link>
        </nav>
      </div>
    </header>
  );
}
