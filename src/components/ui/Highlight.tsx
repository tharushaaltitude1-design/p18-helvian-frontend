import type { ReactNode } from 'react';
import { cn } from '@/utils';

export function Highlight({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <span className={cn('highlight', dark && 'highlight--dark')}>[{children}]</span>;
}
