import { useState } from 'react';
import { faqCategories, faqCopy } from '@/data';
import { Accordion, Section, SectionHeading, Tabs, TitleWithHighlight } from '@/components/ui';
import { Marquee } from '@/components/layout';
import { FaqAside } from './FaqAside';

const categories = Object.keys(faqCategories) as (keyof typeof faqCategories)[];

export function Faq() {
  const [tab, setTab] = useState(0);
  const [openId, setOpenId] = useState<string | null>('0');
  const items = faqCategories[categories[tab]].map(([question, answer], index) => ({ id: String(index), question, answer }));
  const select = (index: number) => { setTab(index); setOpenId('0'); };
  return (
    <Section id="faq" labelledBy="faq-title" className="faq-section">
      <Marquee items={faqCopy.marquee} />
      <div className="container faq-container">
        <SectionHeading label={faqCopy.label} titleId="faq-title" title={<TitleWithHighlight title={faqCopy.title} />} />
        <div className="faq-layout">
          <div className="faq-sidebar">
            <Tabs items={categories} value={tab} onChange={select} label={faqCopy.tabsLabel} idPrefix="faq" className="faq-tabs" />
            <FaqAside />
          </div>
          <div id="faq-panel" role="tabpanel" aria-labelledby={`faq-tab-${tab}`} className="faq-list">
            <Accordion items={items} openId={openId} onToggle={(id) => setOpenId((current) => (current === id ? null : id))} idPrefix="faq" />
          </div>
        </div>
      </div>
    </Section>
  );
}
