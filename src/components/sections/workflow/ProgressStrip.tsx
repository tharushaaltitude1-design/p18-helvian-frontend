import { ChevronsRight } from 'lucide-react';
import { cn } from '@/utils';

type Props = { label: string; chips: string[]; current: number };

/** Chips before the current one are filled, the current one is outlined, the rest are slate. */
export function ProgressStrip({ label, chips, current }: Props) {
  return (
    <div className="progress-strip">
      <h3 className="eyebrow">{label}</h3>
      <ol className="progress-chips">
        {chips.map((chip, index) => (
          <li key={chip}>
            <span
              className={cn('chip', index < current && 'is-done', index === current && 'is-current')}
              aria-current={index === current ? 'step' : undefined}
            >
              {chip}
            </span>
            {index < chips.length - 1 && <ChevronsRight size={22} strokeWidth={1.5} aria-hidden="true" />}
          </li>
        ))}
      </ol>
    </div>
  );
}
