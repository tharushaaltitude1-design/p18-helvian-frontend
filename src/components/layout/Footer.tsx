import { Link } from 'react-router-dom';
import { brand, footer, footerMarquee, navigation } from '@/data';
import { useSectionLink } from '@/hooks';
import { NewsletterForm } from '@/components/forms';
import { Logo } from '@/components/ui';
import { FooterCta } from './FooterCta';
import { Marquee } from './Marquee';
import { SocialLinks } from './SocialLinks';

export function Footer({ onToast }: { onToast: (message: string) => void }) {
  const goTo = useSectionLink();
  return (
    <footer className="footer">
      <Marquee items={footerMarquee} dark />
      <div className="container">
        <FooterCta />
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>{footer.about}</p>
            <SocialLinks />
          </div>
          <nav aria-label="Footer">
            <h3>{footer.titles.nav}</h3>
            <ul>
              {navigation.map((item) => (
                <li key={item.label}>
                  {item.type === 'route'
                    ? <Link to={item.href}>{item.label}</Link>
                    : <a href={`/${item.href}`} onClick={(event) => goTo(event, item.href)}>{item.label}</a>}
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3>{footer.titles.contact}</h3>
            <ul>
              <li><a href={`tel:${brand.phone.replace(/[^\d+]/g, '')}`}>{brand.phone}</a></li>
              <li><a href={`mailto:${brand.email}`}>{brand.email}</a></li>
              <li><address>{brand.address}<br />{brand.city}</address></li>
            </ul>
          </div>
          <NewsletterForm onToast={onToast} />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <span>{footer.copyright}</span>
          <ul>
            {footer.legal.map((link) => <li key={link.to}><Link to={link.to}>{link.label}</Link></li>)}
          </ul>
        </div>
      </div>
    </footer>
  );
}
