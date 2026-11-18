import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, X } from 'lucide-react';
import { Button, DashboardLink, IconButton, Logo } from '@/components/ui';
import { useFocusTrap } from '@/hooks';
import { useSectionLink } from '@/hooks/useSectionLink';
import { navigation } from '@/data';
import { cn } from '@/utils';

type Props = { open: boolean; onClose: () => void; onDemo: () => void; active: string };

export function MobileMenu({ open, onClose, onDemo, active }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const goTo = useSectionLink();
  useFocusTrap(ref, open, onClose);
  return (
    <div ref={ref} className={cn('mobile-menu', open && 'is-open')} role="dialog" aria-modal="true" aria-label="Site menu" tabIndex={-1}>
      <div className="mobile-menu__top">
        <Logo />
        <IconButton label="Close menu" tone="dark" onClick={onClose}><X aria-hidden="true" /></IconButton>
      </div>
      <nav className="mobile-menu__links" aria-label="Mobile navigation">
        {navigation.map((item) => {
          const isActive = active === item.key;
          const current = isActive ? (item.type === 'route' ? 'page' : 'location') : undefined;
          if (item.type === 'route') {
            return (
              <Link key={item.label} to={item.href} aria-current={current} onClick={onClose}>
                {item.label}<ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            );
          }
          return (
            <a
              key={item.label}
              href={`/${item.href}`}
              aria-current={current}
              onClick={(event) => { goTo(event, item.href); onClose(); }}
            >
              {item.label}<ArrowUpRight size={18} aria-hidden="true" />
            </a>
          );
        })}
      </nav>
      <div className="mobile-menu__actions">
        <Button to="/product" className="mobile-menu__cta" onClick={onClose}>HV.OS <ArrowUpRight size={17} aria-hidden="true" /></Button>
      </div>
    </div>
  );
}
