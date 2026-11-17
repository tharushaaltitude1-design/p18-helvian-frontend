import { productEngagement } from '@/data';
import { ChamferCard, Icon, Section, SectionHeading, TitleWithHighlight } from '@/components/ui';

export function ProductEngagement() {
  return (
    <Section id="product-engagement" labelledBy="product-engagement-title">
      <div className="container">
        <SectionHeading
          label={productEngagement.label}
          titleId="product-engagement-title"
          title={<TitleWithHighlight title={productEngagement.title} />}
        >
          <span>{productEngagement.description}</span>
        </SectionHeading>
        <h3 className="product-engagement__label">{productEngagement.commercialLabel}</h3>
        <ul className="product-engagement__commercial">
          {productEngagement.commercial.map((item) => (
            <ChamferCard as="li" key={item.title} className="product-engagement__card" innerClassName="product-engagement__inner">
              <Icon name={item.icon} size={22} />
              <span>{item.title}</span>
            </ChamferCard>
          ))}
        </ul>
        <h3 className="product-engagement__label">{productEngagement.targetLabel}</h3>
        <ul className="product-engagement__targets">
          {productEngagement.targets.map((target) => <li key={target}>{target}</li>)}
        </ul>
      </div>
    </Section>
  );
}
