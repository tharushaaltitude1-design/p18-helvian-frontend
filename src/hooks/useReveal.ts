import { useEffect, useRef } from 'react';

/**
 * Content is visible by default (no JS, reduced motion, failed observer).
 * Sections reveal smoothly as they approach the viewport without staying hidden.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') {
      node.classList.add('is-visible');
      return;
    }

    // If already in or near the initial viewport, stay visible immediately
    if (node.getBoundingClientRect().top < window.innerHeight * 1.1) {
      node.classList.add('is-visible');
      return;
    }

    node.classList.add('reveal-pending');
    const show = () => {
      node.classList.add('is-visible');
      node.classList.remove('reveal-pending');
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '120px 0px 50px 0px' },
    );
    observer.observe(node);

    // Fast failsafe guarantees content is never left invisible
    const failsafe = window.setTimeout(show, 600);
    const check = () => {
      if (node.getBoundingClientRect().top < window.innerHeight * 1.15) {
        show();
        observer.disconnect();
      }
    };

    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check, { passive: true });
    window.addEventListener('hashchange', check);

    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
      window.removeEventListener('hashchange', check);
      node.classList.remove('reveal-pending');
    };
  }, []);

  return ref;
}
