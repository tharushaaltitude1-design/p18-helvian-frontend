import { Check } from 'lucide-react';

/** Persistent live region so screen readers announce each new message. */
export function Toast({ message }: { message: string }) {
  return (
    <div role="status" aria-live="polite" aria-atomic="true">
      {message && (
        <div className="toast">
          <Check size={16} aria-hidden="true" />
          {message}
        </div>
      )}
    </div>
  );
}
