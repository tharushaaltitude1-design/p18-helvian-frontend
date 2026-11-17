import { governance, governanceItems } from '@/data';
import { Highlight, Section, SectionHeading } from '@/components/ui';
import { GovernanceCard } from './GovernanceCard';
import { RoleChips } from './RoleChips';

export function Governance() {
  const { title } = governance;
  return (
    <Section id="governance" className="governance" labelledBy="governance-title">
      <div className="container governance-layout">
        <SectionHeading
          label={governance.label}
          titleId="governance-title"
          light
          title={
            <>
              {title.before}
              <Highlight dark>{title.highlight}</Highlight>
              {title.after}
            </>
          }
        >
          <span>{governance.description}</span>
        </SectionHeading>
        <ul className="governance-cards">
          {governanceItems.map((item) => (
            <GovernanceCard key={item.title} {...item} />
          ))}
        </ul>
        <RoleChips />
      </div>
    </Section>
  );
}
