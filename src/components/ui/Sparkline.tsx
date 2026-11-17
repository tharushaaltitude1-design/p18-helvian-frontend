export function Sparkline({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M1.5 9.5c2.2-1 3.1-5.2 5.2-5.2 2.4 0 2.6 6.4 5.2 6.4 2.3 0 2.7-6 5-6 1.3 0 2.2 1.5 4.6 1.5" />
    </svg>
  );
}
