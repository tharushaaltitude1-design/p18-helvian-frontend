import { Star } from 'lucide-react';
import { testimonialsCopy } from '@/data';
import { Avatar, ChamferCard } from '@/components/ui';
import type { Testimonial } from './types';

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <ChamferCard as="figure" className="testimonial-small" innerClassName="testimonial-small__inner">
      <div className="testimonial-small__body">
        <div className="stars" role="img" aria-label={testimonialsCopy.ratingLabel}>
          {Array.from({ length: 5 }, (_, i) => <Star size={14} fill="currentColor" key={i} aria-hidden="true" />)}
        </div>
        <blockquote>{item.quote}</blockquote>
        <figcaption className="testimonial-person">
          <Avatar src={item.image} name={item.name} />
          <span>
            <strong>{item.name}</strong>
            <small>{item.role}</small>
          </span>
        </figcaption>
      </div>
    </ChamferCard>
  );
}
