export type ProductTitle = { before: string; highlight: string; after?: string };

export const productMeta = {
  documentTitle: 'Product | Helvian',
  description:
    'Explore the Helvian clinical operations platform: patient profiles, departments, workflows, appointments, care tasks and dashboard summaries.',
};

export const productMarquee = ['Patient Profiles', 'Departments', 'Workflows', 'Appointments', 'Care Tasks', 'Dashboard'];

export const productOverview = {
  label: 'Product',
  title: { before: 'One platform for ', highlight: 'clinical operations', after: '.' } satisfies ProductTitle,
  paragraphs: [
    'Disconnected operational records create delays and reduce visibility into patient-related administrative processes.',
    'Helvian centralizes patient workflow records, improves care coordination visibility, organizes clinical operational activities, simplifies task assignment and supports department-level reporting.',
  ],
  challenges: [
    'Fragmented patient workflow records',
    'Delayed care coordination',
    'Unorganized clinical activities',
    'Limited department-level visibility',
    'Difficulty tracking workflow completion',
    'Inconsistent operational reporting',
  ],
  primaryCta: 'Request Demo',
};

export const productCapabilities = {
  label: 'Capabilities',
  title: { before: 'Six modules for ', highlight: 'everyday clinical operations', after: '.' } satisfies ProductTitle,
  description:
    'Built around the administrative workflow requirements for patient profiles, departments, workflows, appointments, care tasks and dashboard summaries.',
  items: [
    {
      title: 'Patient Profile Management',
      icon: 'users',
      bullets: [
        'Register patient information',
        'Maintain patient profiles',
        'Record relevant administrative details',
        'Restrict access by user role',
      ],
    },
    {
      title: 'Clinical Department Management',
      icon: 'building',
      bullets: [
        'Register departments',
        'Maintain department details',
        'Associate authorized staff',
        'Track department status',
      ],
    },
    {
      title: 'Patient Workflow Registry',
      icon: 'route',
      bullets: [
        'Create workflow records',
        'Define workflow stages',
        'Associate patients with workflows',
        'Track workflow completion',
      ],
    },
    {
      title: 'Clinical Appointment Management',
      icon: 'calendar',
      bullets: [
        'Schedule appointments',
        'Assign doctors and departments',
        'Track appointment status',
        'Maintain appointment history',
      ],
    },
    {
      title: 'Care Coordination Task Management',
      icon: 'check',
      bullets: [
        'Create coordination tasks',
        'Assign responsibilities',
        'Define due dates',
        'Track task completion',
      ],
    },
    {
      title: 'Clinical Operations Dashboard',
      icon: 'chart',
      bullets: [
        'Patient workflow summaries',
        'Upcoming appointments',
        'Pending coordination tasks',
        'Department activity',
      ],
    },
  ],
};

export const productUseCases = {
  label: 'Care Coordination',
  title: { before: 'Administrative work, ', highlight: 'clearly owned', after: '.' } satisfies ProductTitle,
  description: 'Examples of the administrative activities supported by the MVP. The platform does not provide clinical decisions.',
  roleLabel: 'Role',
  items: [
    {
      title: 'Patient registration and department assignment',
      description: 'Registering a patient and assigning a department.',
      role: 'Clinical Administrator',
      icon: 'user',
    },
    {
      title: 'Appointment scheduling',
      description: 'Scheduling an appointment with a doctor and department.',
      role: 'Care Coordinator',
      icon: 'calendar',
    },
    {
      title: 'Care task assignment',
      description: 'Assigning a care task with a due date.',
      role: 'Nurse',
      icon: 'check',
    },
    {
      title: 'Department activity review',
      description: 'Reviewing department-level activity.',
      role: 'Clinical Manager',
      icon: 'chart',
    },
  ],
};

export const productPreview = {
  caption: 'Demonstration data',
};

export const productTechnology = {
  label: 'Technology Foundation',
  title: { before: 'Proposed AI foundation, ', highlight: 'scoped to operations', after: '.' } satisfies ProductTitle,
  description: 'Proposed technology options for future development, limited to administrative workflow use.',
  badge: 'Proposed',
  roleLabel: 'Proposed role in Helvian',
  disclaimer:
    'The technologies are proposed architectural options and do not imply finished clinical tools, medical imaging or patient monitoring integrations.',
  items: [
    {
      name: 'NVIDIA NeMo',
      description: 'Proposed conversational assistance development option.',
      icon: 'message',
      role: 'Could support an administrative assistance option for navigating workflow records.',
    },
    {
      name: 'NVIDIA Riva',
      description: 'Proposed speech interaction technology.',
      icon: 'mic',
      role: 'Could support proposed speech interaction for administrative workflow entry.',
    },
    {
      name: 'NVIDIA NIM',
      description: 'Proposed model deployment option.',
      icon: 'box',
      role: 'Could support proposed deployment of models used in administrative workflow features.',
    },
    {
      name: 'NVIDIA Triton',
      description: 'Proposed inference serving infrastructure.',
      icon: 'server',
      role: 'Could provide proposed inference serving for administrative workflow functions.',
    },
    {
      name: 'MONAI',
      description: 'Proposed framework for healthcare imaging AI research and development.',
      icon: 'scan',
      role: 'Could support proposed imaging AI research and development; not deployed in the MVP.',
    },
  ],
};

export const productArchitecture = {
  label: 'Technical Architecture',
  title: { before: 'A practical base for ', highlight: 'clinical operations', after: '.' } satisfies ProductTitle,
  description: 'The proposed MVP stack for administrative workflow management.',
  items: [
    { label: 'PHP / Laravel', icon: 'server' },
    { label: 'SQL database', icon: 'box' },
    { label: 'Responsive web application', icon: 'grid' },
    { label: 'Clinical workflow management APIs', icon: 'workflow' },
    { label: 'Patient and appointment records', icon: 'calendar' },
    { label: 'Role-based authentication', icon: 'user' },
  ],
};

export const productScope = {
  label: 'Scope & Limitations',
  title: { before: 'What the MVP ', highlight: 'does not include', after: '.' } satisfies ProductTitle,
  intro: 'The MVP focuses on administrative and workflow management using demonstration data.',
  items: [
    'Clinical diagnosis',
    'Treatment recommendations',
    'Medical image interpretation',
    'Electronic health record integrations',
    'Real-time patient monitoring',
    'Direct NVIDIA MONAI deployment',
  ],
};

export const productEngagement = {
  label: 'Engagement',
  title: { before: 'A commercial model for ', highlight: 'healthcare organizations', after: '.' } satisfies ProductTitle,
  description: 'Engagement options for hospitals, specialist clinics and healthcare networks.',
  commercialLabel: 'Commercial model',
  commercial: [
    { title: 'Hospital subscriptions', icon: 'building' },
    { title: 'Per-facility licensing', icon: 'grid' },
    { title: 'Clinical workflow management modules', icon: 'workflow' },
    { title: 'Enterprise healthcare integration services', icon: 'network' },
  ],
  targetLabel: 'Target market',
  targets: ['Hospitals', 'Specialist clinics', 'Healthcare networks', 'Medical centres', 'Digital health organizations'],
};

export const productClosing = {
  label: 'Next step',
  title: { before: 'Ready to see ', highlight: 'Helvian in action', after: '?' } satisfies ProductTitle,
  description: 'Request a demonstration or open the dashboard to explore demonstration data.',
  primaryCta: 'Request Demo',
  note: 'The dashboard opens in a new tab.',
};
