import { ChamferCard, Icon } from '@/components/ui';

export function GovernanceCard({ title, icon }: { title: string; icon: string }) {
  return (
    <ChamferCard as="li" tone="dark" className="governance-card" innerClassName="governance-card__inner">
      <Icon name={icon} size={26} />
      <h3>{title}</h3>
    </ChamferCard>
  );
}
