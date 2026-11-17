import { useCallback, useEffect, useRef, useState, type FocusEvent, type TouchEvent } from 'react';
import { useMediaQuery } from './useMediaQuery';

/** Index state + autoplay (pauses on hover/focus, off under reduced motion) + swipe handlers. */
export function useCarousel(length: number, interval = 7000) {
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef<number | null>(null);
  const next = useCallback(() => setIndex((value) => (value + 1) % length), [length]);
  const prev = useCallback(() => setIndex((value) => (value - 1 + length) % length), [length]);

  useEffect(() => {
    if (paused || reduced) return;
    const timer = window.setInterval(next, interval);
    return () => window.clearInterval(timer);
  }, [paused, reduced, next, interval, index]);

  const regionProps = {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onFocus: () => setPaused(true),
    onBlur: (event: FocusEvent<HTMLElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
    },
    onTouchStart: (event: TouchEvent<HTMLElement>) => { startX.current = event.touches[0].clientX; },
    onTouchEnd: (event: TouchEvent<HTMLElement>) => {
      if (startX.current === null) return;
      const delta = event.changedTouches[0].clientX - startX.current;
      startX.current = null;
      if (Math.abs(delta) > 50) (delta < 0 ? next : prev)();
    },
  };

  return { index, setIndex, next, prev, autoplay: !reduced, regionProps };
}
