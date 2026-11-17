import type { ReactNode } from 'react';
import { cn } from '@/utils';
import { SectionLabel } from './SectionLabel';

type Props = { label: string; title: ReactNode; titleId?: string; children?: ReactNode; action?: ReactNode; light?: boolean };

export function SectionHeading({ label, title, titleId, children, action, light = false }: Props) {
  return (
    <div className={cn('section-heading', light && 'section-heading--light')}>
      <SectionLabel light={light}>{label}</SectionLabel>
      <h2 id={titleId}>{title}</h2>
      {children && <div className="section-heading__sub">{children}</div>}
      {action}
    </div>
  );
}
