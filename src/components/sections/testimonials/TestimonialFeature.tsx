import { Quote } from 'lucide-react';
import { Avatar, ChamferCard } from '@/components/ui';
import type { Testimonial } from './types';

export function TestimonialFeature({ item }: { item: Testimonial }) {
  return (
    <ChamferCard as="figure" tone="accent" className="testimonial-feature" innerClassName="testimonial-feature__inner">
      <Quote className="quote-mark" size={44} fill="currentColor" strokeWidth={0} aria-hidden="true" />
      <blockquote>{item.quote}</blockquote>
      <figcaption className="testimonial-person">
        <Avatar src={item.image} name={item.name} />
        <span>
          <strong>{item.name}</strong>
          <small>{item.role}</small>
        </span>
      </figcaption>
    </ChamferCard>
  );
}
