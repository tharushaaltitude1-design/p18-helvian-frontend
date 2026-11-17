import { ArrowRight, Check } from 'lucide-react';
import { moduleDrawer, type modules } from '@/data';
import { Button, Drawer, Icon } from '@/components/ui';

export type ModuleItem = (typeof modules)[number];

type Props = { module: ModuleItem | null; onClose: () => void; onDemo: () => void };

export function ModuleDrawer({ module, onClose, onDemo }: Props) {
  return (
    <Drawer
      open={module !== null}
      onClose={onClose}
      heading={module?.title}
      eyebrow={<span className="module-number">{module?.number}</span>}
      icon={module ? <Icon name={module.icon} /> : null}
    >
      {module && (
        <>
          <p>{module.description}</p>
          <ul>
            {module.bullets.map((bullet) => (
              <li key={bullet}>
                <Check size={15} aria-hidden="true" />
                {bullet}
              </li>
            ))}
          </ul>
          <div className="drawer__actions">
            <Button onClick={() => { onClose(); onDemo(); }}>
              {moduleDrawer.demo} <ArrowRight size={16} aria-hidden="true" />
            </Button>
            <Button variant="outline" onClick={onClose}>{moduleDrawer.close}</Button>
          </div>
        </>
      )}
    </Drawer>
  );
}
