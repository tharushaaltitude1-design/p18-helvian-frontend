import { ArrowRight, ArrowUpRight, Building2, CalendarDays, ClipboardCheck, UserRound } from 'lucide-react';
import { useSectionLink } from '@/hooks';
import { Button, Section, SectionLabel, TitleWithHighlight } from '@/components/ui';

const pathway = [
  { icon: UserRound, title: 'Patient registered', detail: 'A clear starting point' },
  { icon: Building2, title: 'Department connected', detail: 'The right team in view' },
  { icon: CalendarDays, title: 'Appointment planned', detail: 'The next step is visible' },
  { icon: ClipboardCheck, title: 'Care tasks assigned', detail: 'Ownership stays clear' },
];

export function ProductHero() {
  const goTo = useSectionLink();

  return (
    <Section id="product-hero" plain grid={false} className="product-hero" labelledBy="product-hero-title">
      <div className="product-hero__glow" aria-hidden="true" />
      <div className="container product-hero__layout">
        <div className="product-hero__copy">
          <SectionLabel>Helvian V1 · Clinical operations</SectionLabel>
          <h1 id="product-hero-title">
            Better-coordinated care starts with <TitleWithHighlight title={{ before: '', highlight: 'a clearer workflow.' }} />
          </h1>
          <p>
            Bring patient journeys, appointments and care tasks into one shared view for teams across hospital departments. Helvian V1 helps make the next step and its owner easier to see.
          </p>
          <div className="product-hero__actions">
            <Button href="https://client.helvian.net" external>
              Open the live product <ArrowUpRight size={17} aria-hidden="true" />
            </Button>
            <a
              className="text-link"
              href="#product-roadmap"
              onClick={(event) => goTo(event, '#product-roadmap')}
            >
              Explore the AI roadmap <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="product-hero__promise">
            <span>Designed for</span>
            <strong>12+ hospital departments</strong>
          </div>
        </div>

        <div className="product-hero__art" role="img" aria-label="A patient journey connecting registration, department assignment, appointment planning and care task ownership">
          <div className="product-hero__orbit product-hero__orbit--outer" aria-hidden="true" />
          <div className="product-hero__orbit product-hero__orbit--inner" aria-hidden="true" />
          <div className="product-hero__pathway">
            <div className="product-hero__pathway-head">
              <span>THE PATIENT JOURNEY</span>
              <span>01 <i>/</i> 04</span>
            </div>
            <ol>
              {pathway.map(({ icon: Icon, title, detail }, index) => (
                <li className={index === 0 ? 'is-first' : undefined} key={title}>
                  <span className="product-hero__step-icon"><Icon size={18} aria-hidden="true" /></span>
                  <span className="product-hero__step-copy">
                    <strong>{title}</strong>
                    <small>{detail}</small>
                  </span>
                  <span className="product-hero__step-count">0{index + 1}</span>
                </li>
              ))}
            </ol>
            <div className="product-hero__pathway-foot">
              <span className="product-hero__live-dot" aria-hidden="true" />
              From registration to coordinated next steps
            </div>
          </div>
          <div className="product-hero__department-tag" aria-hidden="true">Care moves across teams</div>
        </div>
      </div>
    </Section>
  );
}
