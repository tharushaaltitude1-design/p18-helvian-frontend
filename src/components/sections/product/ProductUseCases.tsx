import { productUseCases } from '@/data';
import { ChamferCard, Icon, Section, SectionHeading, TitleWithHighlight } from '@/components/ui';

export function ProductUseCases() {
  return (
    <Section id="product-coordination" labelledBy="product-coordination-title">
      <div className="container">
        <SectionHeading
          label={productUseCases.label}
          titleId="product-coordination-title"
          title={<TitleWithHighlight title={productUseCases.title} />}
        >
          <span>{productUseCases.description}</span>
        </SectionHeading>
        <ul className="product-use-cases">
          {productUseCases.items.map((item) => (
            <ChamferCard as="li" key={item.title} className="product-use-case" innerClassName="product-use-case__inner">
              <Icon name={item.icon} size={24} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="product-use-case__role">
                <span>{productUseCases.roleLabel}</span> {item.role}
              </span>
            </ChamferCard>
          ))}
        </ul>
      </div>
    </Section>
  );
}
