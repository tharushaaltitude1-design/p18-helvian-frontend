import { ArrowUpRight, Bell, Search } from 'lucide-react';
import type { ReactNode } from 'react';
import { appPreview, dashboardDemo } from '@/data';
import { cn } from '@/utils';
import { ActivityFeed } from './ActivityFeed';
import { AppointmentsTable } from './AppointmentsTable';
import { BarChart } from './BarChart';
import { DashboardSidebar } from './DashboardSidebar';
import { DonutChart } from './DonutChart';
import { KpiCard } from './KpiCard';

function Panel({ title, className, children }: { title: string; className?: string; children: ReactNode }) {
  return (
    <section className={cn('dashboard-panel', className)}>
      <div className="panel-title">
        <h3>{title}</h3>
        <ArrowUpRight size={12} aria-hidden="true" />
      </div>
      {children}
    </section>
  );
}

/** Static demonstration dashboard (sample data). `compact` is the small hero version. */
export function DashboardMock({ compact = false }: { compact?: boolean }) {
  const d = dashboardDemo;
  return (
    <div className={cn('dashboard-shell', compact && 'dashboard-shell--compact')} role="group" aria-label={appPreview.frameLabel}>
      <div className="dashboard-topline" aria-hidden="true"><span /><span /><span /><i /></div>
      <div className="dashboard-layout">
        <DashboardSidebar navLabel={compact ? 'Hero preview sidebar' : 'Application preview sidebar'} />
        <div className="dashboard-content">
          <div className="dashboard-header">
            <div className="dashboard-search"><Search size={14} aria-hidden="true" /> {d.searchPlaceholder}</div>
            <Bell size={16} aria-hidden="true" />
            <div className="dashboard-avatar" aria-hidden="true">{d.user.initials}</div>
          </div>
          <div className="dashboard-kpis">
            {d.kpis.map((kpi) => <KpiCard key={kpi.label} {...kpi} />)}
          </div>
          <div className="dashboard-grid dashboard-grid--charts">
            <Panel title={d.barsTitle} className="bar-panel"><BarChart /></Panel>
            <Panel title={d.statusTitle} className="donut-panel"><DonutChart /></Panel>
          </div>
          <div className="dashboard-grid dashboard-grid--lower">
            <Panel title={d.appointmentsTitle} className="appointment-panel"><AppointmentsTable /></Panel>
            <Panel title={d.activityTitle} className="activity-panel"><ActivityFeed /></Panel>
          </div>
        </div>
      </div>
    </div>
  );
}
