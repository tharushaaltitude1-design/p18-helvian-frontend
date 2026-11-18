import { Fragment, useState } from 'react';
import { plans, pricing, type Billing } from '@/data';
import { Section, SectionHeading, TitleWithHighlight } from '@/components/ui';
import { cn } from '@/utils';
import { PlanCard } from './PlanCard';

export function Pricing() {
  const [billing, setBilling] = useState<Billing>('monthly');

  return (
    <Section id="pricing" labelledBy="pricing-title">
      <div className="container">
        <SectionHeading label={pricing.label} titleId="pricing-title" title={<TitleWithHighlight title={pricing.title} />}>
          <span>{pricing.description}</span>
        </SectionHeading>
        <div className="billing-toggle" role="group" aria-label="Billing period">
          <button
            type="button"
            className={cn('billing-toggle__option', billing === 'monthly' && 'is-active')}
            aria-pressed={billing === 'monthly'}
            onClick={() => setBilling('monthly')}
          >
            {pricing.monthlyLabel}
          </button>
          <button
            type="button"
            className={cn('billing-toggle__option', billing === 'annually' && 'is-active')}
            aria-pressed={billing === 'annually'}
            onClick={() => setBilling('annually')}
          >
            {pricing.annualLabel}
            <span className="billing-toggle__saving">{pricing.saving}</span>
          </button>
        </div>
        <ul className="pricing-grid">
          {plans.map((plan) => (
            <PlanCard key={plan.title} plan={plan} billing={billing} />
          ))}
        </ul>
        <p className="pricing-caption">{pricing.caption}</p>
        <p className="pricing-strip">
          {pricing.strip.map((item, index) => (
            <Fragment key={item}>
              {index > 0 && <span aria-hidden="true">•</span>}
              {item}
            </Fragment>
          ))}
        </p>
      </div>
    </Section>
  );
}
