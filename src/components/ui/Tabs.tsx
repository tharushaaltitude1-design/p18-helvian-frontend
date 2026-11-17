import { useRef, type KeyboardEvent } from 'react';
import { cn } from '@/utils';

type Props = { items: string[]; value: number; onChange: (index: number) => void; label: string; idPrefix: string; className?: string };

/** Vertical or horizontal tab list with roving tabindex and arrow/Home/End keys. Panels use `${idPrefix}-panel`. */
export function Tabs({ items, value, onChange, label, idPrefix, className }: Props) {
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const move = (next: number) => {
    const target = (next + items.length) % items.length;
    onChange(target);
    refs.current[target]?.focus();
  };
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const keys: Record<string, number> = { ArrowDown: index + 1, ArrowRight: index + 1, ArrowUp: index - 1, ArrowLeft: index - 1, Home: 0, End: items.length - 1 };
    if (event.key in keys) { event.preventDefault(); move(keys[event.key]); }
  };
  return (
    <div role="tablist" aria-label={label} className={cn('tabs', className)}>
      {items.map((item, index) => (
        <button
          type="button"
          role="tab"
          key={item}
          ref={(node) => { refs.current[index] = node; }}
          id={`${idPrefix}-tab-${index}`}
          aria-selected={value === index}
          aria-controls={`${idPrefix}-panel`}
          tabIndex={value === index ? 0 : -1}
          className={cn('tab', value === index && 'is-active')}
          onClick={() => onChange(index)}
          onKeyDown={(event) => onKeyDown(event, index)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
