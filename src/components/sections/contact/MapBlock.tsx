import { useState } from 'react';
import { ArrowUpRight, Building2, MapPin, Phone } from 'lucide-react';
import { cn } from '@/utils';

const mapLocations = {
  usa: {
    id: 'usa',
    label: 'USA Office (Los Angeles)',
    title: 'Helvian Digital Technologies LLC',
    badge: 'USA Office',
    city: 'Los Angeles, California',
    address: '850 South Figueroa Street, Suite 302, Los Angeles, CA 90017, USA',
    phone: '+1 (914) 497-6364',
    phoneRaw: '+19144976364',
    embedUrl:
      'https://maps.google.com/maps?q=850+South+Figueroa+Street+Suite+302+Los+Angeles+CA+90017+USA&t=&z=16&ie=UTF8&iwloc=&output=embed',
    directUrl:
      'https://www.google.com/maps/search/?api=1&query=850+South+Figueroa+Street+Suite+302+Los+Angeles+CA+90017+USA',
  },
  sl: {
    id: 'sl',
    label: 'Sri Lanka Office (Vavuniya)',
    title: 'Helvian Digital Technologies (Pvt) Ltd',
    badge: 'Sri Lanka Office',
    city: 'Vavuniya, Sri Lanka',
    address: '14, Bluebell Avenue, Vavuniya, Sri Lanka',
    phone: '+94 76 992 0865',
    phoneRaw: '+94769920865',
    embedUrl:
      'https://maps.google.com/maps?q=14+Bluebell+Avenue+Vavuniya+Sri+Lanka&t=&z=16&ie=UTF8&iwloc=&output=embed',
    directUrl:
      'https://www.google.com/maps/search/?api=1&query=14+Bluebell+Avenue+Vavuniya+Sri+Lanka',
  },
} as const;

type LocationKey = keyof typeof mapLocations;

export function MapBlock() {
  const [activeKey, setActiveKey] = useState<LocationKey>('usa');
  const active = mapLocations[activeKey];

  return (
    <section className="map-section" aria-label="Helvian Global Office Locations">
      <div className="map-controls">
        <div className="map-switcher" role="tablist" aria-label="Office Location Selector">
          <button
            type="button"
            role="tab"
            aria-selected={activeKey === 'usa'}
            className={cn('map-tab', activeKey === 'usa' && 'is-active')}
            onClick={() => setActiveKey('usa')}
          >
            <span className="map-tab-flag" aria-hidden="true">🇺🇸</span>
            <span>USA Office</span>
            <small>Los Angeles</small>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeKey === 'sl'}
            className={cn('map-tab', activeKey === 'sl' && 'is-active')}
            onClick={() => setActiveKey('sl')}
          >
            <span className="map-tab-flag" aria-hidden="true">🇱🇰</span>
            <span>Sri Lanka Office</span>
            <small>Vavuniya</small>
          </button>
        </div>
      </div>

      <div className="map-container">
        <div className="map-card" tabIndex={0}>
          <div className="map-card__header">
            <span className="badge map-card__badge">{active.badge}</span>
            <span className="map-card__city">{active.city}</span>
          </div>
          <h4 className="map-card__title">
            <Building2 size={16} aria-hidden="true" />
            <span>{active.title}</span>
          </h4>
          <address className="map-card__address">
            <MapPin size={15} aria-hidden="true" />
            <span>{active.address}</span>
          </address>
          <div className="map-card__contact">
            <Phone size={15} aria-hidden="true" />
            <a href={`tel:${active.phoneRaw}`}>{active.phone}</a>
          </div>
          <a
            className="map-card__action"
            href={active.directUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${active.title} address in Google Maps (opens in a new tab)`}
          >
            <span>Open in Google Maps</span>
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>

        <iframe
          key={active.id}
          title={`Google Map showing ${active.title} at ${active.address}`}
          src={active.embedUrl}
          className="map-iframe"
          loading="lazy"
          allowFullScreen={false}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
