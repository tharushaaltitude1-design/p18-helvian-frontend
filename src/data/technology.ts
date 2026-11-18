export const technology = {
  label: 'Technology Foundation',
  title: { before: 'Proposed smart framework, ', highlight: 'ready to grow', after: '.' },
  description: 'Proposed technology options for future development.',
  badge: 'Proposed',
  diagramLabel: 'Proposed system architecture',
  disclaimer:
    'The technologies are proposed architectural options and do not imply finished clinical tools, medical imaging or patient monitoring integrations.',
};

export const technologies = [
  { name: '', description: 'Proposed conversational assistance development option.', icon: 'message' },
  { name: '', description: 'Proposed speech interaction technology.', icon: 'mic' },
  { name: '', description: 'Proposed model deployment option.', icon: 'box' },
  { name: '', description: 'Proposed inference serving infrastructure.', icon: 'server' },
  { name: '', description: 'Proposed framework for healthcare imaging AI research and development.', icon: 'scan' },
];

/** Listed bottom to top; the diagram renders the last entry highest. */
export const architectureLayers = [
  'SQL Database',
  'Laravel Backend / Clinical Workflow APIs',
  'Role-Based Authentication',
  'Responsive Web Application',
];

export const aiLayer = { label: 'Proposed AI Layer', items: [] };
