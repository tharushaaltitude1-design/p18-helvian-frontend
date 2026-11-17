import { type SVGProps } from 'react';

type LogoProps = SVGProps<SVGSVGElement> & { compact?: boolean };

export function Logo({ compact = false, ...props }: LogoProps) {
  return (
    <span className={`logo ${compact ? 'logo--compact' : ''}`} aria-label="Helvian home">
      <svg width="32" height="32" viewBox="0 0 32 32" role="img" {...props}>
        <rect width="32" height="32" rx="9" fill="var(--accent)" />
        <path d="M9 8.5h5.1v5.1h3.8V8.5H23v15h-5.1v-5.2h-3.8v5.2H9v-15Z" fill="var(--accent-ink)" transform="skewX(-9)" />
      </svg>
      {!compact && <span className="logo__wordmark">Helvian</span>}
    </span>
  );
}
