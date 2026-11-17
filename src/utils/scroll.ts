/** Smooth-scrolls to an element id ("#platform" or "platform"); never throws on invalid input. */
export function scrollToId(id: string, smooth = true): boolean {
  const clean = id.replace(/^#/, '');
  if (!clean) return false;
  const el = document.getElementById(clean);
  if (!el) return false;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  el.scrollIntoView({ behavior: smooth && !reduced ? 'smooth' : 'auto', block: 'start' });
  return true;
}
