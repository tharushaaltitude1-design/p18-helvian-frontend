import { useState } from 'react';
import { Layers3, Sparkles } from 'lucide-react';
import { aiLayer, architectureLayers, technology } from '@/data';
import { cn } from '@/utils';

/** Stack drawn top to bottom: AI layer (dashed), then the layers in reverse of data order (data is bottom to top). */
export function Architecture() {
  const [active, setActive] = useState<number | null>(null);
  const top = architectureLayers.map((name, index) => ({ name, index })).reverse();
  const bind = (id: number) => ({
    tabIndex: 0,
    onMouseEnter: () => setActive(id),
    onMouseLeave: () => setActive(null),
    onFocus: () => setActive(id),
    onBlur: () => setActive(null),
  });
  return (
    <figure className="architecture">
      <figcaption className="architecture-label">{technology.diagramLabel}</figcaption>
      <ol className="architecture-stack">
        <li className={cn('architecture-ai', active === -1 && 'is-active')} {...bind(-1)}>
          <Sparkles size={17} aria-hidden="true" />
          <span>{`${aiLayer.label} (${aiLayer.items.join(' · ')})`}</span>
        </li>
        {top.map(({ name, index }) => (
          <li className={cn('architecture-layer', `layer-${index}`, active === index && 'is-active')} key={name} {...bind(index)}>
            <Layers3 size={16} aria-hidden="true" />
            <span>{name}</span>
            <b aria-hidden="true">{String(index + 1).padStart(2, '0')}</b>
          </li>
        ))}
      </ol>
    </figure>
  );
}
