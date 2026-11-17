import { ChamferCard, Icon } from '@/components/ui';

type Props = { name: string; description: string; icon: string; badge: string; role?: string; roleLabel?: string };

export function TechnologyCard({ name, description, icon, badge, role, roleLabel }: Props) {
  return (
    <ChamferCard as="li" className="technology-card" innerClassName="technology-card__inner">
      <div className="technology-card__top">
        <Icon name={icon} size={22} />
        <span className="badge">{badge}</span>
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      {role && roleLabel && (
        <p className="technology-card__role">
          <span>{roleLabel}</span> {role}
        </p>
      )}
    </ChamferCard>
  );
}
