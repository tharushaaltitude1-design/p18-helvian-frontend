import { ChamferCard, Sparkline } from '@/components/ui';

type Props = { label: string; value: string; position: 'one' | 'two' };

export function FloatingCard({ label, value, position }: Props) {
  return (
    <ChamferCard className={`floating-card floating-card--${position}`} innerClassName="floating-card__inner">
      <span className="floating-card__label">{label}</span>
      <span className="floating-card__icon"><Sparkline /></span>
      <strong>{value}</strong>
    </ChamferCard>
  );
}
