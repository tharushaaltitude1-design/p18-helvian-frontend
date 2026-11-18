import { useState } from 'react';
import { productMarquee, productMeta, productPreview, productTechnology, ui } from '@/data';
import { useLockBodyScroll, usePageMeta, useTheme, useToast } from '@/hooks';
import { Hero } from '@/components/sections/hero';
import { ApplicationPreview } from '@/components/sections/app-preview';
import { Technology } from '@/components/sections/technology';
import { Governance } from '@/components/sections/governance';
import {
  ProductArchitecture,
  ProductCapabilities,
  ProductClosingCta,
  ProductEngagement,
  ProductOverview,
  ProductScope,
  ProductUseCases,
} from '@/components/sections/product';
import { Footer, Marquee, MobileMenu, Navbar } from '@/components/layout';
import { DemoRequestModal } from '@/components/forms';
import { BackToTop, Toast } from '@/components/ui';

export function ProductPage() {
  const { theme, toggle } = useTheme();
  const [demoOpen, setDemoOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toast = useToast();
  usePageMeta(productMeta.documentTitle, productMeta.description);
  useLockBodyScroll(menuOpen);
  const openDemo = () => setDemoOpen(true);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">{ui.skip}</a>
      <Navbar onDemo={openDemo} onMenu={() => setMenuOpen(true)} active="product" />
      <MobileMenu
        active="product"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onDemo={() => { setMenuOpen(false); openDemo(); }}
      />
      <main id="main" tabIndex={-1}>
        <Hero onDemo={openDemo} />
        <Marquee items={productMarquee} />
        <ProductOverview onDemo={openDemo} />
        <ProductCapabilities />
        <ProductUseCases />
        <ApplicationPreview caption={productPreview.caption} />
        <Technology
          id="product-technology"
          label={productTechnology.label}
          title={productTechnology.title}
          description={productTechnology.description}
          items={productTechnology.items}
          badge={productTechnology.badge}
          roleLabel={productTechnology.roleLabel}
          disclaimer={productTechnology.disclaimer}
        />
        <ProductArchitecture />
        <Governance />
        <ProductScope />
        <ProductEngagement />
        <ProductClosingCta onDemo={openDemo} />
      </main>
      <Footer onToast={toast.show} />
      <BackToTop />
      {demoOpen && <DemoRequestModal plan="" onClose={() => setDemoOpen(false)} onToast={toast.show} />}
      <Toast message={toast.message} />
    </div>
  );
}
