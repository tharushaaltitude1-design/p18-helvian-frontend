import { ArrowUpRight } from 'lucide-react';
import { productClosing } from '@/data';
import { Button, DashboardLink, Section, SectionLabel, TitleWithHighlight } from '@/components/ui';

export function ProductClosingCta({ onDemo }: { onDemo: () => void }) {
  return (
    <Section id="product-cta" className="product-closing" labelledBy="product-closing-title">
      <div className="product-closing__glow" aria-hidden="true" />
      <div className="container product-closing__inner">
        <SectionLabel>{productClosing.label}</SectionLabel>
        <h2 id="product-closing-title">
          <TitleWithHighlight title={productClosing.title} />
        </h2>
        <p>{productClosing.description}</p>
        <div className="product-closing__actions">
          <Button onClick={onDemo}>{productClosing.primaryCta} <ArrowUpRight size={16} aria-hidden="true" /></Button>
          <DashboardLink variant="outline" />
        </div>
        <p className="product-closing__note">{productClosing.note}</p>
      </div>
    </Section>
  );
}
