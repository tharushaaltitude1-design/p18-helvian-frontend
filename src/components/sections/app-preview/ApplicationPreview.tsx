import { ArrowLeft, ArrowRight, Check, ClipboardCheck } from 'lucide-react';
import { appPreview } from '@/data';
import { DashboardMock } from '@/components/dashboard';
import { Section, SectionHeading, TitleWithHighlight } from '@/components/ui';

export function ApplicationPreview({ caption }: { caption?: string } = {}) {
  return (
    <Section id="dashboard" className="preview-section" labelledBy="preview-title">
      <div className="container">
        <SectionHeading label={appPreview.label} titleId="preview-title" title={<TitleWithHighlight title={appPreview.title} />}>
          <span>{appPreview.description}</span>
        </SectionHeading>
        <div className="preview-wrap">
          <div className="preview-circle" aria-hidden="true" />
          <div className="preview-note preview-note--left">
            {appPreview.notes.left} <Check size={15} aria-hidden="true" />
          </div>
          <div className="preview-note preview-note--right">
            {appPreview.notes.right} <ClipboardCheck size={15} aria-hidden="true" />
          </div>
          <div className="dashboard-frame">
            <DashboardMock />
          </div>
        </div>
        {caption && <p className="preview-caption">{caption}</p>}
        <p className="swipe-hint">
          <ArrowLeft size={14} aria-hidden="true" /> {appPreview.swipeHint} <ArrowRight size={14} aria-hidden="true" />
        </p>
      </div>
    </Section>
  );
}
