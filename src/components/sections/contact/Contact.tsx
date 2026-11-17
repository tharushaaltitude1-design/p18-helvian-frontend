import { Clock3, MapPin, Phone } from 'lucide-react';
import { brand, contact } from '@/data';
import { ContactForm } from '@/components/forms';
import { SocialLinks } from '@/components/layout';
import { ChamferCard, Section, SectionHeading, TitleWithHighlight } from '@/components/ui';
import { InfoCard } from './InfoCard';
import { MapBlock } from './MapBlock';

export function Contact({ onToast }: { onToast: (message: string) => void }) {
  return (
    <Section id="contact" labelledBy="contact-title">
      <div className="container">
        <SectionHeading label={contact.label} titleId="contact-title" title={<TitleWithHighlight title={contact.title} />} />
        <div className="contact-layout">
          <ContactForm onToast={onToast} />
          <div className="contact-aside">
            <InfoCard title={contact.cards.address}>
              <MapPin size={16} aria-hidden="true" />
              <address>{brand.address}<br />{brand.city}</address>
            </InfoCard>
            <InfoCard title={contact.cards.contact}>
              <Phone size={16} aria-hidden="true" />
              <span><a href={`tel:${brand.phone.replace(/[^\d+]/g, '')}`}>{brand.phone}</a><br /><a href={`mailto:${brand.email}`}>{brand.email}</a></span>
            </InfoCard>
            <InfoCard title={contact.cards.hours}>
              <Clock3 size={16} aria-hidden="true" />
              <span>{brand.hours}</span>
            </InfoCard>
            <ChamferCard as="section" tone="accent" className="connected-card" innerClassName="connected-card__inner">
              <h3>{contact.cards.social}</h3>
              <SocialLinks tone="dark" />
            </ChamferCard>
          </div>
        </div>
        <MapBlock />
      </div>
    </Section>
  );
}
