export type SidebarItem = { label: string; icon: 'dashboard' | 'patients' | 'departments' | 'workflows' | 'appointments' | 'tasks' | 'reports' | 'settings' };
export type Appointment = { patient: string; doctor: string; department: string; time: string; minutes: number; status: 'Scheduled' | 'In Progress' | 'Completed' };
export type AppointmentColumn = { key: 'patient' | 'doctor' | 'department' | 'minutes' | 'status'; label: string };

export const appPreview = {
  label: 'Application Preview',
  title: { before: 'A dashboard that shows ', highlight: 'what needs attention', after: '.' },
  description: 'Workflow oversight, department activity and tasks in one visual hub.',
  notes: { left: 'Workflow completed', right: 'New task assigned' },
  swipeHint: 'Swipe to explore',
  frameLabel: 'Demonstration dashboard with sample data',
};

export const dashboardDemo = {
  brand: 'Helvian',
  searchPlaceholder: 'Search patients, workflows...',
  user: { initials: 'AS', name: 'Dr. Amara Silva', role: 'Clinical Manager' },
  sidebarTooltip: 'Available in the full application',
  sidebar: [
    { label: 'Dashboard', icon: 'dashboard' },
    { label: 'Patients', icon: 'patients' },
    { label: 'Departments', icon: 'departments' },
    { label: 'Workflows', icon: 'workflows' },
    { label: 'Appointments', icon: 'appointments' },
    { label: 'Tasks', icon: 'tasks' },
    { label: 'Reports', icon: 'reports' },
    { label: 'Settings', icon: 'settings' },
  ] as SidebarItem[],
  kpis: [
    { label: 'Active Workflows', value: '128' },
    { label: "Today's Appointments", value: '48' },
    { label: 'Pending Tasks', value: '17' },
    { label: 'Completed This Week', value: '312' },
  ],
  barsTitle: 'Department Activity',
  barsUnit: 'active workflows',
  axis: [100, 75, 50, 25, 0],
  departments: [
    { label: 'Cardiology', value: 72 },
    { label: 'Radiology', value: 94 },
    { label: 'Pediatrics', value: 56 },
    { label: 'Orthopedics', value: 83 },
    { label: 'General', value: 66 },
  ],
  statusTitle: 'Workflow Status',
  statusTotalLabel: 'workflows',
  statuses: [
    { label: 'Active', value: 52 },
    { label: 'Pending', value: 30 },
    { label: 'Completed', value: 18 },
  ],
  appointmentsTitle: 'Upcoming Appointments',
  columns: [
    { key: 'patient', label: 'Patient' },
    { key: 'doctor', label: 'Doctor' },
    { key: 'department', label: 'Department' },
    { key: 'minutes', label: 'Time' },
    { key: 'status', label: 'Status' },
  ] as AppointmentColumn[],
  appointments: [
    { patient: 'Elena Rostova', doctor: 'Dr. Graham', department: 'Cardiology', time: '09:30 AM', minutes: 570, status: 'Scheduled' },
    { patient: 'Daniel Reyes', doctor: 'Dr. Mills', department: 'Orthopedics', time: '10:15 AM', minutes: 615, status: 'In Progress' },
    { patient: 'Alika Sonken', doctor: 'Dr. Patel', department: 'Pediatrics', time: '11:00 AM', minutes: 660, status: 'Scheduled' },
    { patient: 'Jaine Tannon', doctor: 'Dr. Miles', department: 'Orthopedics', time: '01:30 PM', minutes: 810, status: 'In Progress' },
    { patient: 'Omar Haddad', doctor: 'Dr. Okafor', department: 'Radiology', time: '02:15 PM', minutes: 855, status: 'Scheduled' },
  ] as Appointment[],
  activityTitle: 'Recent Activity',
  /** Newest first, times strictly descending. */
  activities: [
    { time: '11:45 AM', text: 'Task assigned' },
    { time: '11:15 AM', text: 'Appointment updated' },
    { time: '10:30 AM', text: 'Workflow created' },
    { time: '09:50 AM', text: 'Department reviewed' },
    { time: '09:30 AM', text: 'Workflow created' },
  ],
};
