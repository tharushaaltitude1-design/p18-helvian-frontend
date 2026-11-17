import { useEffect, useRef, useState } from 'react';

/** Counts from 0 to `target` once, when the element first enters the viewport. Honors reduced motion. */
export function useCountUp<T extends HTMLElement>(target: number, duration = 1200) {
  const ref = useRef<T>(null);
  const [value, setValue] = useState(target);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') return;
    let frame = 0;
    let started = false;
    const run = () => {
      started = true;
      const begin = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - begin) / duration, 1);
        setValue(Math.round(target * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frame = window.requestAnimationFrame(tick);
      };
      setValue(0);
      frame = window.requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        observer.disconnect();
        run();
      }
    });
    observer.observe(node);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [target, duration]);

  return { ref, value };
}
