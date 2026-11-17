import { useState, type FocusEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { moduleMarquee, modules, platform } from '@/data';
import { useSectionLink } from '@/hooks';
import { IconButton, Section, SectionHeading, TitleWithHighlight } from '@/components/ui';
import { Marquee } from '@/components/layout';
import { ModuleCard } from './ModuleCard';

type Module = (typeof modules)[number];

export function Platform({ onOpen }: { onOpen: (module: Module) => void }) {
  const [active, setActive] = useState(platform.defaultActive);
  const goTo = useSectionLink();
  const reset = () => setActive(platform.defaultActive);
  const onBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) reset();
  };
  const card = (module: Module) => (
    <ModuleCard
      key={module.number}
      module={module}
      active={active === module.number}
      learnMore={platform.learnMore}
      onActivate={() => setActive(module.number)}
      onOpen={() => onOpen(module)}
    />
  );
  return (
    <Section id="platform" labelledBy="platform-title">
      <div className="container">
        <div className="platform-layout" onMouseLeave={reset} onBlur={onBlur}>
          <div className="platform-col platform-col--left">
            <SectionHeading label={platform.label} titleId="platform-title" title={<TitleWithHighlight title={platform.title} />} />
            <div className="platform-pair">{modules.slice(0, 2).map(card)}</div>
          </div>
          <div className="platform-col platform-col--right">
            <div className="platform-aside">
              <p>{platform.description}</p>
              <IconButton
                size="md"
                tone="accent"
                label={platform.ctaLabel}
                onClick={(event) => goTo(event, '#workflows')}
              >
                <ArrowRight size={20} aria-hidden="true" />
              </IconButton>
            </div>
            <div className="platform-pair platform-pair--grid">{modules.slice(2).map(card)}</div>
          </div>
        </div>
      </div>
      <Marquee items={moduleMarquee} />
    </Section>
  );
}
