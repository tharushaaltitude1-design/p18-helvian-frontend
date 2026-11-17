import { ExternalLink } from 'lucide-react';
import { dashboardCta, dashboardUrl } from '@/data';
import { cn } from '@/utils';

type Props = { variant?: 'primary' | 'outline'; small?: boolean; className?: string };

/** External link to the Helvian dashboard; always opens in a new tab. */
export function DashboardLink({ variant = 'outline', small = false, className }: Props) {
  return (
    <a
      className={cn('button', variant === 'primary' ? 'button--accent' : 'button--outline', small && 'button--small', 'dashboard-link', className)}
      href={dashboardUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {dashboardCta.label}
      <ExternalLink size={15} aria-hidden="true" />
      <span className="sr-only"> ({dashboardCta.newTab})</span>
    </a>
  );
}
