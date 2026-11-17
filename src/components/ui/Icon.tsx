import { Activity, BarChart3, Box, Building2, CalendarDays, CheckCircle2, CircleDot, ClipboardCheck, Clock, Clock3, LayoutGrid, TrendingUp, Workflow as WorkflowIcon, MessageCircle, Mic2, Network, Route as RouteIcon, ScanLine, Server, UserRound, UsersRound } from 'lucide-react';

const iconMap: Record<string, typeof UsersRound> = {
  users: UsersRound,
  building: Building2,
  route: RouteIcon,
  calendar: CalendarDays,
  check: CheckCircle2,
  chart: BarChart3,
  message: MessageCircle,
  mic: Mic2,
  box: Box,
  server: Server,
  scan: ScanLine,
  user: UserRound,
  network: Network,
  history: Clock3,
  activity: Activity,
  grid: LayoutGrid,
  clock: Clock,
  trend: TrendingUp,
  report: ClipboardCheck,
  workflow: WorkflowIcon,
};

export function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const Component = iconMap[name] || CircleDot;
  return <Component size={size} strokeWidth={1.5} aria-hidden="true" />;
}
