import { technologies, technology } from '@/data';
import { Section, SectionHeading, TitleWithHighlight } from '@/components/ui';
import { Architecture } from './Architecture';
import { TechnologyCard } from './TechnologyCard';

export type TechItem = { name: string; description: string; icon: string; role?: string };
type Title = { before: string; highlight: string; after?: string };

type Props = {
  id?: string;
  label?: string;
  title?: Title;
  description?: string;
  items?: TechItem[];
  badge?: string;
  roleLabel?: string;
  disclaimer?: string;
};

export function Technology({
  id = 'technology',
  label = technology.label,
  title = technology.title,
  description = technology.description,
  items = technologies,
  badge = technology.badge,
  roleLabel,
  disclaimer = technology.disclaimer,
}: Props = {}) {
  return (
    <Section id={id} labelledBy={`${id}-title`}>
      <div className="container">
        <SectionHeading label={label} titleId={`${id}-title`} title={<TitleWithHighlight title={title} />}>
          <span>{description}</span>
        </SectionHeading>
        <ul className="technology-cards">
          {items.map((item, index) => (
            <TechnologyCard key={item.name || index} badge={badge} roleLabel={roleLabel} {...item} />
          ))}
        </ul>
        <Architecture />
        <p className="disclaimer">{disclaimer}</p>
      </div>
    </Section>
  );
}
