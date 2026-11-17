import { useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { demoRequest } from '@/data';
import { Button } from '@/components/ui';

/** Shown inside the modal after a successful submit; takes focus so keyboard users are not lost. */
export function DemoSuccess({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => ref.current?.focus(), []);
  return (
    <div className="modal-success" ref={ref} tabIndex={-1} role="status">
      <CheckCircle2 size={32} aria-hidden="true" />
      <h3>{demoRequest.success.title}</h3>
      <p>{demoRequest.success.body}</p>
      <Button onClick={onClose}>{demoRequest.success.close}</Button>
    </div>
  );
}
