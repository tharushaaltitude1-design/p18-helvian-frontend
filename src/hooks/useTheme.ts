import { useEffect } from 'react';

export type Theme = 'dark' | 'light';

export function useTheme() {
  useEffect(() => {
    document.documentElement.dataset.theme = 'dark';
    try {
      window.localStorage.setItem('helvian.theme', 'dark');
    } catch {
      /* storage unavailable */
    }
  }, []);

  return { theme: 'dark' as const, toggle: () => {} };
}
