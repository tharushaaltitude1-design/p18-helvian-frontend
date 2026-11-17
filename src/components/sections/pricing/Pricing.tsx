import { Fragment } from 'react';
import { plans, pricing } from '@/data';
import { Section, SectionHeading, TitleWithHighlight } from '@/components/ui';
import { PlanCard } from './PlanCard';

export function Pricing({ onDemo }: { onDemo: (plan: string) => void }) {
  return (
    <Section id="pricing" labelledBy="pricing-title">
      <div className="container">
        <SectionHeading label={pricing.label} titleId="pricing-title" title={<TitleWithHighlight title={pricing.title} />}>
          <span>{pricing.description}</span>
        </SectionHeading>
        <ul className="pricing-grid">
          {plans.map((plan) => (
            <PlanCard key={plan.title} plan={plan} onSelect={onDemo} />
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
