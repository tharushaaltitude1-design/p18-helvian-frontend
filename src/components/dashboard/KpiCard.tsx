import { TrendingUp } from 'lucide-react';

export function KpiCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="dashboard-kpi">
      <small>{label}</small>
      <strong>{value}</strong>
      <TrendingUp size={12} aria-hidden="true" />
    </div>
  );
}
