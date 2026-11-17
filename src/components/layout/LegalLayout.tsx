import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { footer, legalNav, type LegalDoc } from '@/data';
import { useDocumentTitle } from '@/hooks';
import { Logo, SectionLabel } from '@/components/ui';

export function LegalLayout({ doc }: { doc: LegalDoc }) {
  useDocumentTitle(doc.documentTitle);
  return (
    <div className="legal-page">
      <header className="navbar-wrap is-scrolled">
        <nav className="navbar container" aria-label="Legal page navigation">
          <Link to="/" className="brand-link" aria-label="Helvian home">
            <Logo />
          </Link>
          <Link className="text-link" to="/">
            {legalNav.home} <ArrowLeft size={16} aria-hidden="true" />
          </Link>
        </nav>
      </header>
      <main id="main" tabIndex={-1} className="container legal-content">
        <SectionLabel>{legalNav.label}</SectionLabel>
        <h1>{doc.title}</h1>
        <p className="legal-warning">{doc.warning}</p>
        {doc.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
        <nav className="legal-links" aria-label={legalNav.other}>
          {footer.legal.map((link) => (
            <Link key={link.to} to={link.to}>{link.label}</Link>
          ))}
        </nav>
      </main>
    </div>
  );
}
