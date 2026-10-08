'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const revealSelector = [
  '.section-heading',
  '.problem-item',
  '.dashboard',
  '.steps-grid article',
  '.why-grid article',
  '.focus-grid > .region-map',
  '.audience-grid > a',
  '.team-card',
  '.use-case',
  '.timeline-phase',
  '.numbered-list article',
  '.research-empty',
  '.contact-form',
  '.vision-block',
  '.cta-inner',
].join(',');
const surfaceSelector =
  '.button, .nav-cta, .layer, .audience-grid > a, .use-case-panel, .team-card, .hero-observation';

/** Progressive enhancement: server-rendered content stays visible without JavaScript. */
export function MotionEnhancements() {
  const pathname = usePathname();

  useEffect(() => {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = matchMedia('(min-width: 801px) and (hover: hover) and (pointer: fine)');
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    let observer: IntersectionObserver | undefined;
    let frame = 0;
    let active: HTMLElement | null = null;
    let pointer = { x: 0, y: 0 };

    const reveal = (element: HTMLElement) => {
      element.dataset.reveal = 'visible';
      observer?.unobserve(element);
    };
    const resetSurface = () => {
      if (!active) return;
      active.style.removeProperty('--pointer-x');
      active.style.removeProperty('--pointer-y');
      active.style.removeProperty('--magnet-x');
      active.style.removeProperty('--magnet-y');
      active.style.removeProperty('--orbit-x');
      active.style.removeProperty('--orbit-y');
      active.removeAttribute('data-pointer');
      active = null;
    };
    const configure = () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      frame = 0;
      resetSurface();
      // Switching preferences makes all content immediately available, including pending reveals.
      if (reduced.matches || !('IntersectionObserver' in window)) {
        elements.forEach((element) => {
          element.removeAttribute('data-reveal');
        });
        return;
      }
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) reveal(entry.target as HTMLElement);
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px 70px 0px' },
      );
      elements.forEach((element) => {
        // Do not hide restored scroll positions or content already on screen.
        if (
          element.getBoundingClientRect().top < innerHeight ||
          element.dataset.reveal === 'visible'
        ) {
          reveal(element);
        } else {
          element.dataset.reveal = 'pending';
          observer?.observe(element);
        }
      });
    };
    const renderPointer = () => {
      frame = 0;
      if (!active || reduced.matches || !finePointer.matches) return;
      const rect = active.getBoundingClientRect();
      const x = pointer.x - rect.left;
      const y = pointer.y - rect.top;
      active.style.setProperty('--pointer-x', `${x}px`);
      active.style.setProperty('--pointer-y', `${y}px`);
      active.dataset.pointer = 'active';
      if (active.matches('.hero-observation')) {
        active.style.setProperty(
          '--orbit-x',
          `${Math.max(-1, Math.min(1, (x / rect.width) * 2 - 1)) * 6}deg`,
        );
        active.style.setProperty(
          '--orbit-y',
          `${Math.max(-1, Math.min(1, (y / rect.height) * 2 - 1)) * -6}deg`,
        );
      }
    };
    const move = (event: PointerEvent) => {
      if (reduced.matches || !finePointer.matches || event.pointerType === 'touch') return;
      const target =
        event.target instanceof Element ? event.target.closest<HTMLElement>(surfaceSelector) : null;
      if (target !== active) {
        resetSurface();
        active = target;
      }
      if (!active) return;
      pointer = { x: event.clientX, y: event.clientY };
      if (!frame) frame = requestAnimationFrame(renderPointer);
    };
    const focus = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      const element = event.target.closest<HTMLElement>('[data-reveal="pending"]');
      if (element) {
        element.style.setProperty('--reveal-delay', '0ms');
        reveal(element);
      }
    };
    const visibility = () => {
      if (document.hidden) resetSurface();
    };
    configure();
    reduced.addEventListener('change', configure);
    finePointer.addEventListener('change', configure);
    document.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', resetSurface);
    document.addEventListener('focusin', focus);
    document.addEventListener('visibilitychange', visibility);
    window.addEventListener('blur', resetSurface);
    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      resetSurface();
      elements.forEach((element) => element.removeAttribute('data-reveal'));
      reduced.removeEventListener('change', configure);
      finePointer.removeEventListener('change', configure);
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', resetSurface);
      document.removeEventListener('focusin', focus);
      document.removeEventListener('visibilitychange', visibility);
      window.removeEventListener('blur', resetSurface);
    };
  }, [pathname]);
  return null;
}
