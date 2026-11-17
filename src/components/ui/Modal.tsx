import { useId, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useFocusTrap, useLockBodyScroll } from '@/hooks';
import { demoRequest } from '@/data';
import { IconButton } from './IconButton';

type Props = { open: boolean; onClose: () => void; title: ReactNode; label?: ReactNode; children: ReactNode };

export function Modal({ open, onClose, title, label, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const titleId = useId();
  useLockBodyScroll(open);
  useFocusTrap(ref, open, onClose);
  if (!open) return null;
  return createPortal(
    <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="modal chamfer-card" role="dialog" aria-modal="true" aria-labelledby={titleId} tabIndex={-1} ref={ref}>
        <div className="modal__header">
          <div>
            {label}
            <h2 id={titleId}>{title}</h2>
          </div>
          <IconButton label={demoRequest.close} onClick={onClose}><X aria-hidden="true" /></IconButton>
        </div>
        {children}
      </div>
    </div>,
    document.body,
  );
}
