import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { notFound } from '@/data';
import { useDocumentTitle } from '@/hooks';
import { Logo } from '@/components/ui';

export function NotFoundPage() {
  useDocumentTitle(notFound.documentTitle);
  return (
    <main id="main" tabIndex={-1} className="not-found">
      <Link to="/" aria-label="Helvian home"><Logo /></Link>
      <span aria-hidden="true">{notFound.code}</span>
      <h1>
        <span className="sr-only">{notFound.code}: </span>
        {notFound.title}
      </h1>
      <p>{notFound.body}</p>
      <Link className="button button--accent" to="/">
        {notFound.action} <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
    </main>
  );
}
