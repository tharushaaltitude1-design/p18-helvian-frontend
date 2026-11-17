import type { ReactNode } from 'react';
import { cn } from '@/utils';

export function SectionLabel({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <div className={cn('section-label', light && 'section-label--light')}>
      <svg className="double-circle" width="24" height="14" viewBox="0 0 24 14" aria-hidden="true" focusable="false">
        <circle cx="7" cy="7" r="6.25" fill="currentColor" stroke="none" />
        <circle cx="16.5" cy="7" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span>{children}</span>
    </div>
  );
}
