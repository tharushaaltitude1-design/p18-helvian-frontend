import { useCallback, type MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToId } from '@/utils';

/**
 * Click handler for "#section" links that works from any route:
 * on "/" it smooth-scrolls and updates the hash; elsewhere it navigates to "/#section".
 */
export function useSectionLink() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return useCallback(
    (event: MouseEvent<HTMLElement>, href: string) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
      event.preventDefault();
      const hash = href.startsWith('#') ? href : `#${href}`;
      if (pathname === '/') {
        if (scrollToId(hash)) window.history.pushState(null, '', hash);
      } else {
        navigate({ pathname: '/', hash });
      }
    },
    [pathname, navigate],
  );
}
