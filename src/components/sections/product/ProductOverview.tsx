import { ArrowUpRight } from 'lucide-react';
import { productOverview } from '@/data';
import { Button, ChamferCard, DashboardLink, Section, SectionHeading, TitleWithHighlight } from '@/components/ui';

export function ProductOverview({ onDemo }: { onDemo: () => void }) {
  return (
    <Section id="product-overview" labelledBy="product-overview-title">
      <div className="container product-overview">
        <SectionHeading
          label={productOverview.label}
          titleId="product-overview-title"
          title={<TitleWithHighlight title={productOverview.title} />}
        >
          {productOverview.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </SectionHeading>
        <ul className="product-challenges">
          {productOverview.challenges.map((challenge) => (
            <ChamferCard as="li" key={challenge} className="product-chip" innerClassName="product-chip__inner">
              {challenge}
            </ChamferCard>
          ))}
        </ul>
        <div className="product-actions">
          <Button onClick={onDemo}>{productOverview.primaryCta} <ArrowUpRight size={16} aria-hidden="true" /></Button>
          <DashboardLink variant="outline" />
        </div>
      </div>
    </Section>
  );
}
