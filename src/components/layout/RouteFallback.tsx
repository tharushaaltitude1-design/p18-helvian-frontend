import { ui } from '@/data';

export function RouteFallback() {
  return (
    <div className="route-fallback" role="status">
      {ui.loading}
    </div>
  );
}
