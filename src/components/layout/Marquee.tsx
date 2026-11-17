import { Sparkles } from 'lucide-react';
import { cn } from '@/utils';

export function Marquee({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <div className={cn('marquee', dark && 'marquee--dark')} aria-hidden="true">
      <div className="marquee__track">
        {[...items, ...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}>{item}<Sparkles size={14} /></span>
        ))}
      </div>
    </div>
  );
}
