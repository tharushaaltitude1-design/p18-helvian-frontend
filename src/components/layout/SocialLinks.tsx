import { Instagram, Linkedin, Youtube } from 'lucide-react';
import { socialLinks } from '@/data';
import { cn } from '@/utils';

function XGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const glyphs = { linkedin: <Linkedin size={18} aria-hidden="true" />, x: <XGlyph />, instagram: <Instagram size={18} aria-hidden="true" />, youtube: <Youtube size={18} aria-hidden="true" /> };

/** Social profile links; always open in a new tab. `tone="dark"` = dark circles for use on yellow. */
export function SocialLinks({ tone = 'accent' }: { tone?: 'accent' | 'dark' }) {
  return (
    <ul className={cn('social-row', `social-row--${tone}`)}>
      {socialLinks.map((link) => (
        <li key={link.key}>
          <a className="social-icon" href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${link.label} (opens in a new tab)`}>
            {glyphs[link.key]}
          </a>
        </li>
      ))}
    </ul>
  );
}
