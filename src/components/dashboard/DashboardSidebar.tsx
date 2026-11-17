import { Building2, CalendarDays, CheckSquare, CircleUserRound, ClipboardList, LayoutDashboard, Settings, UsersRound, Workflow } from 'lucide-react';
import { dashboardDemo, type SidebarItem } from '@/data';
import { Tooltip } from '@/components/ui';

const icons: Record<SidebarItem['icon'], typeof Settings> = {
  dashboard: LayoutDashboard,
  patients: UsersRound,
  departments: Building2,
  workflows: Workflow,
  appointments: CalendarDays,
  tasks: CheckSquare,
  reports: ClipboardList,
  settings: Settings,
};

export function DashboardSidebar({ navLabel }: { navLabel: string }) {
  const { brand, sidebar, sidebarTooltip, user } = dashboardDemo;
  return (
    <aside className="dashboard-sidebar">
      <div className="dashboard-brand">
        <span className="dashboard-logo-mark" aria-hidden="true">H</span>
        <strong>{brand}</strong>
      </div>
      <nav aria-label={navLabel}>
        {sidebar.map((item, index) => {
          const Glyph = icons[item.icon];
          const content = (
            <>
              <Glyph size={14} aria-hidden="true" />
              <span>{item.label}</span>
            </>
          );
          return index === 0 ? (
            <button type="button" className="dashboard-nav-item is-active" aria-current="page" key={item.label}>
              {content}
            </button>
          ) : (
            <Tooltip text={sidebarTooltip} key={item.label}>
              <button type="button" className="dashboard-nav-item">{content}</button>
            </Tooltip>
          );
        })}
      </nav>
      <div className="dashboard-user">
        <CircleUserRound size={22} aria-hidden="true" />
        <span>
          <b>{user.name}</b>
          <small>{user.role}</small>
        </span>
      </div>
    </aside>
  );
}
