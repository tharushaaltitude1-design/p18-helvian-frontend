import { productScope } from '@/data';
import { ChamferCard, Section, SectionHeading, TitleWithHighlight } from '@/components/ui';

export function ProductScope() {
  return (
    <Section id="product-scope" labelledBy="product-scope-title">
      <div className="container">
        <SectionHeading
          label={productScope.label}
          titleId="product-scope-title"
          title={<TitleWithHighlight title={productScope.title} />}
        />
        <ChamferCard tone="dark" className="product-scope" innerClassName="product-scope__inner">
          <p className="product-scope__intro">{productScope.intro}</p>
          <ul className="product-scope__list">
            {productScope.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </ChamferCard>
      </div>
    </Section>
  );
}
