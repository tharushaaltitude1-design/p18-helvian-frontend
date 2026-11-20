import { ArrowRight } from 'lucide-react';
import { ChamferCard, Section, SectionHeading, TitleWithHighlight } from '@/components/ui';

const stages = [
  {
    number: '01',
    status: 'Available today',
    title: 'A shared operational picture',
    description:
      'Helvian V1 brings patient profiles, departments, appointments, workflow stages and assigned care tasks into one place for teams.',
  },
  {
    number: '02',
    status: 'Planned',
    title: 'Less time turning notes into next steps',
    description:
      'Plan for real-time speech transcription and documentation assistance that can surface administrative tasks and make handoffs easier to follow.',
  },
  {
    number: '03',
    status: 'Planned',
    title: 'Department-aware intelligence',
    description:
      'Build toward coordinated pathways across 12+ hospital departments, including specialized imaging telemetry workflows, with staff in control of review and action.',
  },
  {
    number: '04',
    status: 'Planned',
    title: 'Built to grow with hospital networks',
    description:
      'Progress toward GPU-based model training and adaptation, private deployment options and reliable service across more departments and facilities.',
  },
];

export function ProductRoadmap() {
  return (
    <Section id="product-roadmap" labelledBy="product-roadmap-title">
      <div className="container">
        <SectionHeading
          label="A clear path forward"
          titleId="product-roadmap-title"
          title={<TitleWithHighlight title={{ before: 'From coordinated workflows to ', highlight: 'assisted operations.' }} />}
        >
          <span>
            The roadmap builds on Helvian’s current workflow foundation. AI capabilities below are planned and are not part of the live product today.
          </span>
        </SectionHeading>
        <ol className="product-roadmap">
          {stages.map((stage, index) => (
            <ChamferCard as="li" key={stage.number} className="product-roadmap__card" innerClassName="product-roadmap__inner">
              <div className="product-roadmap__top">
                <span className="product-roadmap__number">{stage.number}</span>
                <span className={index === 0 ? 'product-roadmap__status is-current' : 'product-roadmap__status'}>
                  {stage.status}
                </span>
              </div>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
              {index < stages.length - 1 && <ArrowRight className="product-roadmap__connector" size={18} aria-hidden="true" />}
            </ChamferCard>
          ))}
        </ol>
        <p className="product-roadmap__note">
          Roadmap direction is subject to validation with clinical operations teams, hospital governance and deployment requirements.
        </p>
      </div>
    </Section>
  );
}
