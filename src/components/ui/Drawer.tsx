import { useId, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useFocusTrap, useLockBodyScroll } from '@/hooks';
import { IconButton } from './IconButton';

type Props = { open: boolean; onClose: () => void; heading: ReactNode; eyebrow?: ReactNode; icon?: ReactNode; children: ReactNode };

export function Drawer({ open, onClose, heading, eyebrow, icon, children }: Props) {
  const ref = useRef<HTMLElement>(null);
  const titleId = useId();
  useLockBodyScroll(open);
  useFocusTrap(ref, open, onClose);
  if (!open) return null;
  return createPortal(
    <div className="drawer-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <aside className="drawer" role="dialog" aria-modal="true" aria-labelledby={titleId} tabIndex={-1} ref={ref}>
        <div className="drawer__header">
          {eyebrow}
          <IconButton label="Close details" onClick={onClose}><X aria-hidden="true" /></IconButton>
        </div>
        {icon}
        <h2 id={titleId}>{heading}</h2>
        {children}
      </aside>
    </div>,
    document.body,
  );
}
