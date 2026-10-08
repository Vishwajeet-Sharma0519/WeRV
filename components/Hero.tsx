'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { SignalArt } from './SignalArt';
export function Hero() {
  const section = useRef<HTMLElement>(null);
  const image = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const hero = section.current;
    const backdrop = image.current;
    if (!hero || !backdrop) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const fine = window.matchMedia('(min-width: 801px) and (hover: hover) and (pointer: fine)');
    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;
    let progress = 0;
    let scrollDirty = true;
    let lastTime = 0;
    const canMove = () => !reduced.matches && fine.matches && !document.hidden;
    const schedule = () => {
      if (!frame && !document.hidden) frame = requestAnimationFrame(update);
    };
    const update = (time: number) => {
      frame = 0;
      if (scrollDirty) {
        const rect = hero.getBoundingClientRect();
        progress = Math.max(0, Math.min(1, -rect.top / (rect.height * 0.88)));
        scrollDirty = false;
        backdrop.style.opacity = String(1 - progress * 0.55);
        hero.style.setProperty('--scroll-dim', String(progress * 0.24));
      }
      const moving = canMove() && progress < 1;
      if (!moving) {
        targetX = 0;
        targetY = 0;
        x = 0;
        y = 0;
      }
      // Time-based damping feels the same on 60 Hz and 120 Hz screens; stop when settled.
      const delta = lastTime ? Math.min(time - lastTime, 40) : 16;
      lastTime = time;
      const blend = 1 - Math.exp(-delta / 190);
      x += (targetX - x) * blend;
      y += (targetY - y) * blend;
      backdrop.style.transform = moving
        ? `translate3d(${x * -3}px, ${y * -2 + progress * 6}px, 0) scale(${1.01 + progress * 0.008})`
        : 'none';
      hero.style.setProperty('--depth-x', `${x * 2}px`);
      hero.style.setProperty('--depth-y', `${y * 1.5}px`);
      hero.style.setProperty('--copy-x', `${x}px`);
      hero.style.setProperty('--copy-y', `${y * 0.7}px`);
      if (Math.abs(targetX - x) > 0.001 || Math.abs(targetY - y) > 0.001) schedule();
    };
    const scroll = () => {
      scrollDirty = true;
      schedule();
    };
    const pointer = (event: PointerEvent) => {
      if (!canMove() || event.pointerType === 'touch') return;
      const rect = hero.getBoundingClientRect();
      targetX = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width) * 2 - 1));
      targetY = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height) * 2 - 1));
      schedule();
    };
    const reset = () => {
      targetX = 0;
      targetY = 0;
      schedule();
    };
    const preference = () => {
      reset();
      scroll();
    };
    const visibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else preference();
    };
    schedule();
    window.addEventListener('scroll', scroll, { passive: true });
    window.addEventListener('resize', scroll);
    window.addEventListener('blur', reset);
    hero.addEventListener('pointermove', pointer, { passive: true });
    hero.addEventListener('pointerleave', reset);
    reduced.addEventListener('change', preference);
    fine.addEventListener('change', preference);
    document.addEventListener('visibilitychange', visibility);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('resize', scroll);
      window.removeEventListener('blur', reset);
      hero.removeEventListener('pointermove', pointer);
      hero.removeEventListener('pointerleave', reset);
      reduced.removeEventListener('change', preference);
      fine.removeEventListener('change', preference);
      document.removeEventListener('visibilitychange', visibility);
    };
  }, []);
  return (
    <section ref={section} className="hero">
      <div className="hero-backdrop" ref={image}>
        <picture>
          <source srcSet="/assets/hero.webp" type="image/webp" />
          <img src="/assets/hero.jpg" alt="" width="736" height="414" fetchPriority="high" />
        </picture>
      </div>
      <div className="hero-shade" />
      <div className="hero-depth-grid" aria-hidden="true" />
      <div className="container hero-content">
        <div className="eyebrow light">
          <span />
          EARTH OBSERVATION × AI × RISK INTELLIGENCE
        </div>
        <h1>
          See the risk
          <br />
          beneath the
          <br />
          <em>surface.</em>
        </h1>
        <p>
          Satellite intelligence for groundwater stress
          <br className="desktop-break" /> and land-subsidence risk. Built for decisions
          <br className="desktop-break" /> that reach beyond the next season.
        </p>
        <div className="button-row">
          <Link className="button primary" href="/technology">
            Explore our technology
          </Link>
          <Link className="button ghost" href="/contact">
            Talk to the team
          </Link>
        </div>
      </div>
      <aside className="hero-observation" aria-label="Conceptual Earth observation graphic">
        <div className="observation-label">
          <span>THE EARTH, IN CONTEXT</span>
          <span>01 / OBSERVE</span>
        </div>
        <SignalArt variant="orbit" />
        <div className="observation-foot">
          <span>
            Surface signals.
            <br />
            <strong>Deeper understanding.</strong>
          </span>
          <span className="micro">
            CONCEPTUAL
            <br />
            EARTH OBSERVATION
          </span>
        </div>
      </aside>
      <div className="container hero-bottom">
        <span>FROM EARTH OBSERVATION TO DECISION INTELLIGENCE</span>
        <a href="#problem">
          SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
