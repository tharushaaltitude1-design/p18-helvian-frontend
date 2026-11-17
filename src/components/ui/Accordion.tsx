import { Minus, Plus } from 'lucide-react';
import { ChamferCard } from './ChamferCard';
import { cn } from '@/utils';

export type AccordionItem = { id: string; question: string; answer: string };
type Props = { items: AccordionItem[]; openId: string | null; onToggle: (id: string) => void; idPrefix: string };

/** One item open at a time (controlled). Closed panels are visibility:hidden, so they leave the tab order. */
export function Accordion({ items, openId, onToggle, idPrefix }: Props) {
  return (
    <ul className="accordion">
      {items.map((item) => {
        const open = item.id === openId;
        const buttonId = `${idPrefix}-q-${item.id}`;
        const panelId = `${idPrefix}-a-${item.id}`;
        return (
          <ChamferCard as="li" key={item.id} tone={open ? 'accent' : 'surface'} className={cn('accordion-item', open && 'is-open')} innerClassName="accordion-item__inner">
            <h3>
              <button type="button" id={buttonId} aria-expanded={open} aria-controls={panelId} onClick={() => onToggle(item.id)}>
                <span>{item.question}</span>
                <span className="accordion-icon" aria-hidden="true">{open ? <Minus size={16} /> : <Plus size={16} />}</span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} className="accordion-panel">
              <div>
                <p>{item.answer}</p>
              </div>
            </div>
          </ChamferCard>
        );
      })}
    </ul>
  );
}
