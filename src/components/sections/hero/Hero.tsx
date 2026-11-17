import { ArrowRight } from 'lucide-react';
import { hero } from '@/data';
import { useSectionLink } from '@/hooks';
import { Button, IconButton, Section, SectionLabel, TitleWithHighlight } from '@/components/ui';
import { DashboardMock } from '@/components/dashboard/DashboardMock';
import { FloatingCard } from './FloatingCard';
import { StatCount } from './StatCount';

export function Hero({ onDemo }: { onDemo: () => void }) {
  const goTo = useSectionLink();
  return (
    <Section id="home" plain className="hero" labelledBy="hero-title">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <SectionLabel>{hero.label}</SectionLabel>
          <h1 id="hero-title">
            <TitleWithHighlight title={hero.title} />
          </h1>
          <p>{hero.description}</p>
          <div className="hero__actions">
            <div className="hero__cta">
              <Button onClick={onDemo}>{hero.primaryCta}</Button>
              <IconButton size="md" label={hero.primaryCtaLabel} onClick={onDemo} tabIndex={-1} aria-hidden="true">
                <ArrowRight size={19} aria-hidden="true" />
              </IconButton>
            </div>
            <a className="text-link" href={hero.secondaryHref} onClick={(event) => goTo(event, hero.secondaryHref)}>
              {hero.secondaryCta}
            </a>
          </div>
          <div className="hero__stats">
            {hero.stats.map((stat) => (
              <StatCount key={stat.label} {...stat} />
            ))}
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero-circle" aria-hidden="true" />
          <div className="hero-browser">
            <DashboardMock compact />
          </div>
          <FloatingCard {...hero.floatingCards[0]} position="one" />
          <FloatingCard {...hero.floatingCards[1]} position="two" />
        </div>
        <div className="hero__index" aria-hidden="true">
          {hero.index.current} <span>/ {hero.index.total}</span>
        </div>
      </div>
    </Section>
  );
}
