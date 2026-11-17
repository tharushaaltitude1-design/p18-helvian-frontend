import { productCapabilities } from '@/data';
import { ChamferCard, Icon, Section, SectionHeading, TitleWithHighlight } from '@/components/ui';

export function ProductCapabilities() {
  return (
    <Section id="product-capabilities" labelledBy="product-capabilities-title">
      <div className="container">
        <SectionHeading
          label={productCapabilities.label}
          titleId="product-capabilities-title"
          title={<TitleWithHighlight title={productCapabilities.title} />}
        >
          <span>{productCapabilities.description}</span>
        </SectionHeading>
        <ul className="product-capabilities">
          {productCapabilities.items.map((item) => (
            <ChamferCard as="li" key={item.title} className="product-module" innerClassName="product-module__inner">
              <div className="product-module__top">
                <Icon name={item.icon} size={24} />
                <h3>{item.title}</h3>
              </div>
              <ul className="product-module__list">
                {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </ChamferCard>
          ))}
        </ul>
      </div>
    </Section>
  );
}
