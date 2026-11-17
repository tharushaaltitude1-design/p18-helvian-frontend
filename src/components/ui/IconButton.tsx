import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils';

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label'> & {
  label: string;
  children: ReactNode;
  tone?: 'default' | 'accent' | 'dark';
  size?: 'sm' | 'md';
};

export function IconButton({ label, children, tone = 'default', size = 'sm', className, type = 'button', ...rest }: Props) {
  const base = size === 'md' ? 'round-button' : 'icon-button';
  const toneClass = tone === 'accent' ? 'round-button--accent' : tone === 'dark' ? 'icon-button--dark' : undefined;
  return (
    <button type={type} aria-label={label} className={cn(base, toneClass, className)} {...rest}>
      {children}
    </button>
  );
}
