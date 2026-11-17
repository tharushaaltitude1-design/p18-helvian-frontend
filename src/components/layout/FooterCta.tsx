import { ArrowRight } from 'lucide-react';
import { footer } from '@/data';
import { useSectionLink } from '@/hooks';
import { Button, Highlight } from '@/components/ui';

export function FooterCta() {
  const { cta } = footer;
  const goTo = useSectionLink();
  return (
    <div className="footer-cta">
      <h2>{cta.before}<Highlight>{cta.highlight}</Highlight>{cta.after}</h2>
      <div className="footer-cta__actions">
        <Button href={cta.href} onClick={(event) => goTo(event, cta.href)}>{cta.action}</Button>
        <a className="round-button" href={cta.href} aria-label={cta.arrowLabel} onClick={(event) => goTo(event, cta.href)}>
          <ArrowRight size={20} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
