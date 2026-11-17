export const modules = [
  {
    number: '01',
    title: 'Patient Profiles',
    description: 'Register and maintain administrative patient details with role-restricted access.',
    icon: 'users',
    bullets: [
      'Patient registration records',
      'Role-restricted profile access',
      'Structured contact details',
      'Searchable patient directory',
    ],
  },
  {
    number: '02',
    title: 'Clinical Departments',
    description: 'Create departments, assign authorized staff and track department status.',
    icon: 'building',
    bullets: [
      'Department directories',
      'Authorized staff assignment',
      'Department status tracking',
      'Clear ownership visibility',
    ],
  },
  {
    number: '03',
    title: 'Patient Workflows',
    description: 'Define stages, link patients and track workflows through to completion.',
    icon: 'route',
    bullets: [
      'Configurable workflow stages',
      'Patient-to-workflow linking',
      'Status progression',
      'Workflow ownership',
    ],
  },
  {
    number: '04',
    title: 'Appointments',
    description: 'Schedule visits, assign doctors and departments, keep full appointment history.',
    icon: 'calendar',
    bullets: [
      'Appointment scheduling',
      'Doctor and department assignment',
      'Status tracking',
      'Appointment history',
    ],
  },
  {
    number: '05',
    title: 'Care Tasks',
    description: 'Create tasks, assign owners, set due dates and track completion.',
    icon: 'check',
    bullets: [
      'Assigned task ownership',
      'Due dates and status tracking',
      'Completion tracking',
      'Care coordination notes',
    ],
  },
  {
    number: '06',
    title: 'Operations Dashboard',
    description: 'See workflows, appointments and department activity in one summary.',
    icon: 'chart',
    bullets: [
      'Workflow overview',
      'Department activity summary',
      'Appointment visibility',
      'Task attention signals',
    ],
  },
];

export const moduleMarquee = ['Profiles', 'Departments', 'Workflows', 'Appointments', 'Tasks', 'Reports'];

export const platform = {
  label: 'Platform',
  title: { before: 'Everything your clinic runs on, ', highlight: 'in one place.' },
  description: 'Seamlessly manage every aspect of your patient journey and clinical operations.',
  ctaLabel: 'Explore workflows',
  defaultActive: '03',
  learnMore: 'Learn more',
};
