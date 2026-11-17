import { termsDoc } from '@/data';
import { LegalLayout } from '@/components/layout/LegalLayout';

export function TermsPage() {
  return <LegalLayout doc={termsDoc} />;
}
