import { useState } from 'react';
import { marqueeItems, sectionNavigation, ui } from '@/data';
import { useLockBodyScroll, useScrollSpy, useTheme, useToast } from '@/hooks';
import { Hero } from '@/components/sections/hero/Hero';
import { About } from '@/components/sections/about/About';
import { Platform } from '@/components/sections/platform/Platform';
import { Workflow } from '@/components/sections/workflow/Workflow';
import { ApplicationPreview } from '@/components/sections/app-preview/ApplicationPreview';
import { Technology } from '@/components/sections/technology/Technology';
import { Governance } from '@/components/sections/governance/Governance';
import { Pricing } from '@/components/sections/pricing/Pricing';
import { Testimonials } from '@/components/sections/testimonials/Testimonials';
import { Faq } from '@/components/sections/faq/Faq';
import { Contact } from '@/components/sections/contact/Contact';
import { Footer } from '@/components/layout/Footer';
import { DemoRequestModal } from '@/components/forms/DemoRequestModal';
import { ModuleDrawer, type ModuleItem } from '@/components/sections/platform';
import { BackToTop, Toast } from '@/components/ui';
import { Marquee, MobileMenu, Navbar } from '@/components/layout';

export function HomePage() {
  const { theme, toggle } = useTheme();
  /** null = closed, '' = open without a plan, otherwise the preselected plan title. */
  const [demoPlan, setDemoPlan] = useState<string | null>(null);
  const [module, setModule] = useState<ModuleItem | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const toast = useToast();
  const active = useScrollSpy(sectionNavigation.map((item) => item.href.slice(1)));
  useLockBodyScroll(menuOpen);
  const openDemo = (plan = '') => setDemoPlan(plan);
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">
        {ui.skip}
      </a>
      <Navbar theme={theme} onToggleTheme={toggle} onDemo={() => openDemo()} onMenu={() => setMenuOpen(true)} active={active} />
      <MobileMenu
        active={active}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onDemo={() => {
          setMenuOpen(false);
          openDemo();
        }}
      />
      <main id="main" tabIndex={-1}>
        <Hero onDemo={() => openDemo()} />
        <Marquee items={marqueeItems} />
        <About />
        <Platform onOpen={setModule} />
        <Workflow />
        <ApplicationPreview />
        <Technology />
        <Governance />
        <Pricing onDemo={openDemo} />
        <Testimonials />
        <Faq />
        <Contact onToast={toast.show} />
      </main>
      <Footer onToast={toast.show} />
      <BackToTop />
      {demoPlan !== null && <DemoRequestModal plan={demoPlan} onClose={() => setDemoPlan(null)} onToast={toast.show} />}
      <ModuleDrawer module={module} onClose={() => setModule(null)} onDemo={() => openDemo()} />
      <Toast message={toast.message} />
    </div>
  );
}
