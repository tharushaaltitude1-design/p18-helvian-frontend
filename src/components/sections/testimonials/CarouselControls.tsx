import { ArrowLeft, ArrowRight } from 'lucide-react';
import { testimonialsCopy } from '@/data';
import { IconButton } from '@/components/ui';
import { cn } from '@/utils';

type Props = { count: number; index: number; onSelect: (index: number) => void; onPrev: () => void; onNext: () => void };

export function CarouselControls({ count, index, onSelect, onPrev, onNext }: Props) {
  return (
    <div className="carousel-controls">
      <div className="carousel-dots">
        {Array.from({ length: count }, (_, dot) => (
          <button
            type="button"
            key={dot}
            className={cn(dot === index && 'is-active')}
            aria-label={`${testimonialsCopy.dot} ${dot + 1} of ${count}`}
            aria-current={dot === index ? 'true' : undefined}
            onClick={() => onSelect(dot)}
          />
        ))}
      </div>
      <IconButton size="md" label={testimonialsCopy.prev} onClick={onPrev}><ArrowLeft size={20} aria-hidden="true" /></IconButton>
      <IconButton size="md" tone="accent" label={testimonialsCopy.next} onClick={onNext}><ArrowRight size={20} aria-hidden="true" /></IconButton>
    </div>
  );
}
