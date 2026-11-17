export const technology = {
  label: 'Technology Foundation',
  title: { before: 'Proposed AI architecture, ', highlight: 'ready to grow', after: '.' },
  description: 'Proposed technology options for future development.',
  badge: 'Proposed',
  diagramLabel: 'Proposed system architecture',
  disclaimer:
    'These technologies are proposed architectural options and do not imply completed clinical AI, medical imaging or patient monitoring integrations.',
};

export const technologies = [
  { name: 'NVIDIA NeMo', description: 'Proposed conversational assistance development option.', icon: 'message' },
  { name: 'NVIDIA Riva', description: 'Proposed speech interaction technology.', icon: 'mic' },
  { name: 'NVIDIA NIM', description: 'Proposed model deployment option.', icon: 'box' },
  { name: 'NVIDIA Triton', description: 'Proposed inference serving infrastructure.', icon: 'server' },
  { name: 'MONAI', description: 'Proposed framework for healthcare imaging AI research and development.', icon: 'scan' },
];

/** Listed bottom to top; the diagram renders the last entry highest. */
export const architectureLayers = [
  'SQL Database',
  'Laravel Backend / Clinical Workflow APIs',
  'Role-Based Authentication',
  'Responsive Web Application',
];

export const aiLayer = { label: 'Proposed AI Layer', items: ['NeMo', 'Riva', 'NIM', 'Triton', 'MONAI'] };
