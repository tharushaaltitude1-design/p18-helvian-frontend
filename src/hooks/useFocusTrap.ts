import { useEffect, useRef, type RefObject } from 'react';

const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

/**
 * Traps Tab inside `ref` while `active`, closes on Escape, returns focus on unmount.
 * onClose is held in a ref so re-renders never re-run the effect (no focus stealing).
 */
export function useFocusTrap(ref: RefObject<HTMLElement>, active: boolean, onClose?: () => void) {
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    if (!active) return;
    const root = ref.current;
    if (!root) return;
    const previous = document.activeElement as HTMLElement | null;
    const items = () => Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((el) => el.offsetParent !== null || el === document.activeElement);
    const preferred = root.querySelector<HTMLElement>('[data-autofocus]');
    (preferred ?? items()[0] ?? root).focus();
    // Portal dialogs: hide the rest of the app from keyboard + assistive tech while open.
    const app = document.getElementById('root');
    const inertApp = app !== null && !app.contains(root);
    if (inertApp) app?.setAttribute('inert', '');

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        closeRef.current?.();
        return;
      }
      if (event.key !== 'Tab') return;
      const list = items();
      if (!list.length) {
        event.preventDefault();
        root.focus();
        return;
      }
      const head = list[0];
      const tail = list[list.length - 1];
      if (event.shiftKey && (document.activeElement === head || document.activeElement === root)) {
        event.preventDefault();
        tail.focus();
      } else if (!event.shiftKey && document.activeElement === tail) {
        event.preventDefault();
        head.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      if (inertApp) app?.removeAttribute('inert');
      previous?.focus?.();
    };
  }, [ref, active]);
}
