import { Sparkles } from 'lucide-react';
import { testimonials, testimonialsCopy as copy } from '@/data';
import { useCarousel } from '@/hooks';
import { Section, SectionHeading, TitleWithHighlight } from '@/components/ui';
import { CarouselControls } from './CarouselControls';
import { TestimonialCard } from './TestimonialCard';
import { TestimonialFeature } from './TestimonialFeature';

export function Testimonials() {
  const count = testimonials.length;
  const { index, setIndex, next, prev, autoplay, regionProps } = useCarousel(count);
  const at = (offset: number) => testimonials[(index + offset) % count];
  return (
    <Section id="testimonials" labelledBy="testimonials-title">
      <div className="container">
        <SectionHeading label={copy.label} titleId="testimonials-title" title={<TitleWithHighlight title={copy.title} />} />
        <div
          className="testimonial-layout"
          role="group"
          aria-roledescription="carousel"
          aria-label={copy.regionLabel}
          aria-live={autoplay ? 'off' : 'polite'}
          {...regionProps}
        >
          <TestimonialFeature item={at(0)} />
          <div className="testimonial-side">
            <TestimonialCard item={at(1)} />
            <TestimonialCard item={at(2)} />
          </div>
        </div>
        <div className="testimonial-footer">
          <ul className="company-row" aria-label={copy.partnersLabel}>
            {copy.partners.map((name) => (
              <li key={name}><Sparkles size={14} aria-hidden="true" />{name}</li>
            ))}
          </ul>
          <CarouselControls count={count} index={index} onSelect={setIndex} onPrev={prev} onNext={next} />
        </div>
        <p className="illustrative-note">{copy.note}</p>
      </div>
    </Section>
  );
}
