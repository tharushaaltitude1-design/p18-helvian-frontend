import { Check } from 'lucide-react';
import { pricing, type Plan } from '@/data';
import { Button, ChamferCard } from '@/components/ui';
import { cn } from '@/utils';

export function PlanCard({ plan, onSelect }: { plan: Plan; onSelect: (title: string) => void }) {
  return (
    <li className={cn('plan', plan.featured && 'plan--featured')}>
      {plan.featured && <span className="popular-tag">{pricing.popular}</span>}
      <span className="plan-badge" aria-hidden="true">{plan.badge}</span>
      <ChamferCard tone={plan.featured ? 'accent' : 'surface'} className="plan-card" innerClassName="plan-card__inner">
        <h3>{plan.title}</h3>
        <p className="plan-subtitle">{plan.subtitle}</p>
        <p className="price">
          <span className="price__from">{pricing.from}</span>
          <strong>{plan.price}</strong>
          <small>{pricing.period}</small>
        </p>
        <ul className="plan-features">
          {plan.features.map((feature) => (
            <li key={feature}>
              <Check size={15} aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
        <Button variant={plan.featured ? 'dark' : 'outline'} onClick={() => onSelect(plan.title)}>
          {plan.action}
          <span className="sr-only"> for {plan.title}</span>
        </Button>
      </ChamferCard>
    </li>
  );
}
