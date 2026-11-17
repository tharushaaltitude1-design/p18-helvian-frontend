import { about } from '@/data';
import { Container, Section, SectionHeading, TitleWithHighlight } from '@/components/ui';
import { AboutCard } from './AboutCard';
import { AboutPhoto } from './AboutPhoto';

export function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <Container>
        <SectionHeading label={about.label} titleId="about-title" title={<TitleWithHighlight title={about.title} />} />
        <div className="about-layout">
          <AboutPhoto badge={about.badge} />
          <div className="about-content">
            <p className="lead">{about.lead}</p>
            <div className="about-cards">
              {about.cards.map((card) => (
                <AboutCard key={card.title} {...card} />
              ))}
            </div>
            <div className="stat-row">
              {about.stats.map((stat) => (
                <div key={stat.label}>
                  <strong>
                    {stat.value}
                    <em>{stat.suffix}</em>
                  </strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
