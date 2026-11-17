import type { ReactNode } from 'react';
import { ChamferCard } from '@/components/ui';

export function InfoCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <ChamferCard as="section" className="info-card" innerClassName="info-card__inner">
      <h3>{title}</h3>
      <div className="info-card__body">{children}</div>
    </ChamferCard>
  );
}
