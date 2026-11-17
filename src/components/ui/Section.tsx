import type { ReactNode } from 'react';
import { useReveal } from '@/hooks';
import { cn } from '@/utils';

type SectionProps = { id: string; className?: string; grid?: boolean; plain?: boolean; children: ReactNode; labelledBy?: string };

/** Page section: sticky-offset anchor, optional vertical guide lines, safe reveal. */
export function Section({ id, className, grid = true, plain = false, labelledBy, children }: SectionProps) {
  const ref = useReveal<HTMLElement>();
  return (
    <section id={id} ref={ref} aria-labelledby={labelledBy} className={cn(!plain && 'section', grid && 'section-grid', className)}>
      {children}
    </section>
  );
}
