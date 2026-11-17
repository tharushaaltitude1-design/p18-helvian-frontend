import { ArrowRight } from 'lucide-react';
import { modules } from '@/data';
import { Icon } from '@/components/ui';
import { cn } from '@/utils';

type Module = (typeof modules)[number];
type Props = { module: Module; active: boolean; learnMore: string; onActivate: () => void; onOpen: () => void };

/** Article card; the only interactive control is the "Learn more" button (valid HTML, one tab stop). */
export function ModuleCard({ module, active, learnMore, onActivate, onOpen }: Props) {
  return (
    <article
      className={cn('module-card chamfer-card', active && 'is-active')}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onOpen}
    >
      <span className="module-number" aria-hidden="true">{module.number}</span>
      <Icon name={module.icon} size={30} />
      <h3>{module.title}</h3>
      <p>{module.description}</p>
      <button type="button" className="learn-more" aria-label={`${learnMore}: ${module.title}`}>
        {learnMore} <ArrowRight size={15} aria-hidden="true" />
      </button>
    </article>
  );
}
