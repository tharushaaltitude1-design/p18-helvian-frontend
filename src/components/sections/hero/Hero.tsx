import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { hero } from '@/data';
import { useSectionLink } from '@/hooks';
import { Button, Section, SectionLabel, TitleWithHighlight } from '@/components/ui';
import { DashboardMock } from '@/components/dashboard/DashboardMock';
import { FloatingCard } from './FloatingCard';
import { StatCount } from './StatCount';

type HeroProps = { variant?: 'home' | 'product' };

export function Hero({ variant = 'home' }: HeroProps) {
  const goTo = useSectionLink();
  const isProduct = variant === 'product';
  const label = isProduct ? 'Helvian V1 · Clinical operations' : hero.label;
  const title = isProduct
    ? { before: 'Care coordination today. ', highlight: 'Intelligence at scale.' }
    : hero.title;
  const description = isProduct
    ? 'Bring patient workflows, appointments and care tasks into one shared view today, with a clear path toward AI-assisted coordination across hospital departments.'
    : hero.description;
  const primaryCta = isProduct ? 'Open Helvian V1' : hero.primaryCta;
  return (
    <Section id={isProduct ? 'product-hero' : 'home'} plain className={isProduct ? 'hero hero--product' : 'hero'} labelledBy="hero-title">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <SectionLabel>{label}</SectionLabel>
          <h1 id="hero-title">
            <TitleWithHighlight title={title} />
          </h1>
          <p>{description}</p>
          <div className="hero__actions">
            <div className="hero__cta">
              {isProduct ? (
                <Button href="https://client.helvian.net" external>
                  {primaryCta} <ArrowUpRight size={17} aria-hidden="true" />
                </Button>
              ) : (
                <Button to="/product">
                  {primaryCta} <ArrowRight size={17} aria-hidden="true" />
                </Button>
              )}
            </div>
            <a
              className="text-link"
              href={isProduct ? '#product-roadmap' : hero.secondaryHref}
              onClick={(event) => goTo(event, isProduct ? '#product-roadmap' : hero.secondaryHref)}
            >
              {isProduct ? 'Explore the AI roadmap' : hero.secondaryCta}
            </a>
          </div>
          {!isProduct && <div className="hero__stats">
            {hero.stats.map((stat) => (
              <StatCount key={stat.label} {...stat} />
            ))}
          </div>}
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
