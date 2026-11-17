import { cloneElement, isValidElement, useId, type ReactElement, type ReactNode } from 'react';

type Props = { label: string; error?: string; children: ReactNode; full?: boolean };

/** Label + control + inline error. Wires aria-labelledby / aria-describedby / aria-invalid onto the control. */
export function FormField({ label, error, children, full = false }: Props) {
  const id = useId();
  const labelId = `${id}-label`;
  const errorId = `${id}-error`;
  const control = isValidElement(children)
    ? cloneElement(children as ReactElement<Record<string, unknown>>, {
        'aria-labelledby': labelId,
        'aria-describedby': error ? errorId : undefined,
        'aria-invalid': error ? true : undefined,
      })
    : children;
  return (
    <label className={`field ${full ? 'field--full' : ''}`}>
      <span id={labelId}>{label}</span>
      {control}
      {error && (
        <small id={errorId} className="field-error" role="alert">
          {error}
        </small>
      )}
    </label>
  );
}
