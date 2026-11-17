import { useEffect, useRef } from 'react';

/**
 * Content is visible by default (no JS, reduced motion, failed observer).
 * Only sections that start below the fold are hidden, and a timer guarantees they are shown.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') return;
    if (node.getBoundingClientRect().top < window.innerHeight) return;

    node.classList.add('reveal-pending');
    const show = () => node.classList.add('is-visible');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -6% 0px' },
    );
    observer.observe(node);
    const failsafe = window.setTimeout(show, 4000);
    const check = () => {
      if (node.getBoundingClientRect().top < window.innerHeight * 0.94) {
        show();
        observer.disconnect();
      }
    };
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('hashchange', check);
    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
      window.removeEventListener('scroll', check);
      window.removeEventListener('hashchange', check);
      node.classList.remove('reveal-pending', 'is-visible');
    };
  }, []);

  return ref;
}
