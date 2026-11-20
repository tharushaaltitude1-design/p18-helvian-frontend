export type ProductTitle = { before: string; highlight: string; after?: string };

export const productMeta = {
  documentTitle: 'Helvian V1 | Clinical Operations Platform',
  description:
    'Explore Helvian V1’s patient workflows and care coordination tools, with a roadmap for AI-assisted clinical operations across hospital departments.',
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
  label: 'Planned AI foundation',
  title: { before: 'The tools behind a ', highlight: 'responsible scale-up', after: '.' } satisfies ProductTitle,
  description: 'A concise view of the NVIDIA technologies being considered for future Helvian capabilities.',
  badge: 'Planned',
  roleLabel: 'Potential role',
  disclaimer:
    'These technologies are roadmap options, not deployed Helvian features. Clinical use, integrations, infrastructure and governance would require validation before implementation.',
  items: [
    {
      name: 'NVIDIA NeMo',
      description: 'Language models adapted to clinical documentation, medical terminology and hospital procedures.',
      icon: 'message',
      role: 'Could help summarize handoffs and identify suggested coordination tasks from notes.',
    },
    {
      name: 'NVIDIA Riva',
      description: 'Speech recognition designed for responsive transcription.',
      icon: 'mic',
      role: 'Could support real-time clinical dictation and hands-free workflow updates.',
    },
    {
      name: 'MONAI',
      description: 'Healthcare-focused imaging AI development framework.',
      icon: 'scan',
      role: 'Could support future imaging research and departmental image workflows.',
    },
    {
      name: 'NVIDIA NIM',
      description: 'Packaged services for deploying optimized AI models.',
      icon: 'box',
      role: 'Could support private deployment options for approved workflow assistants.',
    },
    {
      name: 'NVIDIA Triton',
      description: 'Serving infrastructure for concurrent AI workloads.',
      icon: 'server',
      role: 'Could help run speech, language and imaging services reliably at scale.',
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
