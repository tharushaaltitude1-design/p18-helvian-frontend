import { Check } from 'lucide-react';
import { pricing, type Billing, type Plan } from '@/data';
import { Button, ChamferCard } from '@/components/ui';
import { cn } from '@/utils';

export function PlanCard({ plan, billing }: { plan: Plan; billing: Billing }) {
  const variant = plan.featured ? 'dark' : 'outline';
  const cta = (
    <>
      {plan.action}
      <span className="sr-only"> for {plan.title}</span>
    </>
  );

  return (
    <li className={cn('plan', plan.featured && 'plan--featured')}>
      {plan.featured && <span className="popular-tag">{pricing.popular}</span>}
      <span className="plan-badge" aria-hidden="true">{plan.badge}</span>
      <ChamferCard tone={plan.featured ? 'accent' : 'surface'} className="plan-card" innerClassName="plan-card__inner">
        <h3>{plan.title}</h3>
        <p className="plan-subtitle">{plan.subtitle}</p>
        {plan.price ? (
          <p className="price">
            <span className="price__from">{billing === 'monthly' ? pricing.from : pricing.annualFrom}</span>
            <strong>{billing === 'monthly' ? plan.price : plan.annualPrice ?? plan.price}</strong>
            <small>{billing === 'monthly' ? pricing.period : pricing.annualPeriod}</small>
          </p>
        ) : (
          <p className="price price--custom"><strong>{pricing.customPrice}</strong></p>
        )}
        <ul className="plan-features">
          {plan.features.map((feature) => (
            <li key={feature}>
              <Check size={15} aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
        <Button
          variant={variant}
          href={plan.contact ? plan.monthlyLink : billing === 'monthly' ? plan.monthlyLink : plan.annualLink}
          {...(plan.contact ? {} : { external: true })}
        >
          {cta}
        </Button>
      </ChamferCard>
    </li>
  );
}
