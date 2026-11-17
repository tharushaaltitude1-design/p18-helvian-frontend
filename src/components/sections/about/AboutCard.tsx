import { ArrowUpRight } from 'lucide-react';
import { Icon } from '@/components/ui';

type Props = { title: string; subtitle: string; icon: string };

export function AboutCard({ title, subtitle, icon }: Props) {
  return (
    <div className="chamfer-card about-card">
      <Icon name={icon} size={26} />
      <div>
        <strong>
          {title} <ArrowUpRight size={15} aria-hidden="true" />
        </strong>
        <span>{subtitle}</span>
      </div>
    </div>
  );
}
