export const governance = {
  label: 'Governance & Enterprise Readiness',
  title: { before: 'Control who sees what, ', highlight: 'and when', after: '.' },
  description:
    'Role-based access, department-level permissions and activity history keep clinical operations organized and accountable.',
  rolesLabel: 'User Roles:',
};

export const governanceItems = [
  { title: 'Patient information access control', icon: 'user' },
  { title: 'Department-level permissions', icon: 'network' },
  { title: 'Clinical workflow history', icon: 'history' },
  { title: 'Care coordination records', icon: 'calendar' },
  { title: 'Data validation', icon: 'check' },
  { title: 'Activity tracking', icon: 'activity' },
];

export const roleSummaries = {
  Administrator: 'Manages users, access settings and organization-wide configuration.',
  'Clinical Manager': 'Oversees department workflows, status and care coordination activity.',
  Doctor: 'Reviews assigned patients, appointments and relevant workflow tasks.',
  Nurse: 'Coordinates assigned care tasks and follows patient workflow progress.',
  'Care Coordinator': 'Keeps appointments, handoffs and task ownership moving between teams.',
};
