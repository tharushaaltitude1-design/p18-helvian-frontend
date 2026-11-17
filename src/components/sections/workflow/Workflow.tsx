import { useState } from 'react';
import { workflow, workflowChips, workflowSteps } from '@/data';
import { Container, Section, SectionHeading, TitleWithHighlight } from '@/components/ui';
import { ProgressStrip } from './ProgressStrip';
import { WorkflowStep } from './WorkflowStep';

export function Workflow() {
  const [active, setActive] = useState(workflow.defaultStep);
  return (
    <Section id="workflows" labelledBy="workflow-title">
      <Container>
        <SectionHeading label={workflow.label} titleId="workflow-title" title={<TitleWithHighlight title={workflow.title} />}>
          <span>{workflow.description}</span>
        </SectionHeading>
        <ol className="workflow-steps">
          {workflowSteps.map((step, index) => (
            <WorkflowStep key={step.number} {...step} active={active === index} onSelect={() => setActive(index)} />
          ))}
        </ol>
        <ProgressStrip label={workflow.progressLabel} chips={workflowChips} current={workflowSteps[active].chip} />
      </Container>
    </Section>
  );
}
