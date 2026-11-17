import { ArrowRight, MessageCircle } from 'lucide-react';
import { faqCopy } from '@/data';
import { useSectionLink } from '@/hooks';
import { Button, ChamferCard } from '@/components/ui';

export function FaqAside() {
  const { aside } = faqCopy;
  const goTo = useSectionLink();
  return (
    <ChamferCard className="faq-aside" innerClassName="faq-aside__inner">
      <MessageCircle size={26} aria-hidden="true" />
      <h3>{aside.title}<br />{aside.subtitle}</h3>
      <p>{aside.body}</p>
      <div className="faq-aside__actions">
        <Button href={aside.href} small onClick={(event) => goTo(event, aside.href)}>{aside.action}</Button>
        <a className="round-button round-button--accent" href={aside.href} aria-label={aside.arrowLabel} onClick={(event) => goTo(event, aside.href)}>
          <ArrowRight size={18} aria-hidden="true" />
        </a>
      </div>
    </ChamferCard>
  );
}
