import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToId } from '@/utils';

/** On route change: scroll to the hash target (retrying while the page mounts) or to the top. */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) { window.scrollTo(0, 0); return; }
    let tries = 0;
    let frame = 0;
    const attempt = () => {
      if (scrollToId(hash, false) || tries++ > 30) return;
      frame = window.requestAnimationFrame(attempt);
    };
    attempt();
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}
