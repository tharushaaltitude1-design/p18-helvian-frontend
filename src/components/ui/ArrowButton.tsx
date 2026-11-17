import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/utils';

export function ArrowButton({ label, onClick, dark = false }: { label: string; onClick?: () => void; dark?: boolean }) {
  return (
    <button type="button" className={cn('arrow-action', dark && 'arrow-action--dark')} onClick={onClick}>
      {label}
      <span><ArrowUpRight size={17} aria-hidden="true" /></span>
    </button>
  );
}
