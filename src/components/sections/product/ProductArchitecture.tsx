import { productArchitecture } from '@/data';
import { ChamferCard, Icon, Section, SectionHeading, TitleWithHighlight } from '@/components/ui';

export function ProductArchitecture() {
  return (
    <Section id="product-architecture" labelledBy="product-architecture-title">
      <div className="container">
        <SectionHeading
          label={productArchitecture.label}
          titleId="product-architecture-title"
          title={<TitleWithHighlight title={productArchitecture.title} />}
        >
          <span>{productArchitecture.description}</span>
        </SectionHeading>
        <ul className="product-architecture">
          {productArchitecture.items.map((item) => (
            <ChamferCard as="li" key={item.label} className="product-architecture__item" innerClassName="product-architecture__inner">
              <Icon name={item.icon} size={22} />
              <span>{item.label}</span>
            </ChamferCard>
          ))}
        </ul>
      </div>
    </Section>
  );
}
