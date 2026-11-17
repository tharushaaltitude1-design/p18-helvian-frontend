import { privacyDoc } from '@/data';
import { LegalLayout } from '@/components/layout/LegalLayout';

export function PrivacyPage() {
  return <LegalLayout doc={privacyDoc} />;
}
