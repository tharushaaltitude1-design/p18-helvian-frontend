import { type ReactNode } from 'react';

export function SocialIcon({ icon, href }: { icon: ReactNode; href: string }) {
  return (
    <a
      className="social-icon"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open social profile"
    >
      {icon}
    </a>
  );
}
