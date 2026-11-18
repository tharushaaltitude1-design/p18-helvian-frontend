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
            <InfoCard title="USA Office">
              <MapPin size={16} aria-hidden="true" />
              <address>
                <strong>Helvian Digital Technologies LLC</strong><br />
                850 South Figueroa Street, Suite 302<br />
                Los Angeles, CA 90017, USA
              </address>
            </InfoCard>
            <InfoCard title="Sri Lanka Office">
              <MapPin size={16} aria-hidden="true" />
              <address>
                <strong>Helvian Digital Technologies (Pvt) Ltd</strong><br />
                14, Bluebell Avenue<br />
                Vavuniya, Sri Lanka
              </address>
            </InfoCard>
            <InfoCard title={contact.cards.contact}>
              <Phone size={16} aria-hidden="true" />
              <div className="contact-numbers">
                <div>
                  <span className="contact-tag">USA:</span>{' '}
                  <a href={`tel:${brand.phoneUSRaw}`}>{brand.phoneUS}</a>
                </div>
                <div>
                  <span className="contact-tag">SL:</span>{' '}
                  <a href={`tel:${brand.phoneSLRaw}`}>{brand.phoneSL}</a>
                </div>
                <div>
                  <span className="contact-tag">Email:</span>{' '}
                  <a href={`mailto:${brand.email}`}>{brand.email}</a>
                </div>
              </div>
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
