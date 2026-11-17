export const workflowSteps = [
  { number: '01', title: 'Register', description: 'Add the patient profile and assign the care department.', icon: 'user', chip: 0 },
  { number: '02', title: 'Create Workflow', description: 'Define stages and attach the patient to a workflow record.', icon: 'network', chip: 1 },
  { number: '03', title: 'Coordinate', description: 'Schedule appointments and assign care tasks with due dates.', icon: 'workflow', chip: 2 },
  { number: '04', title: 'Track & Report', description: 'Monitor status updates and review department-level reports.', icon: 'calendar', chip: 3 },
];

/** Progress chips. Each step's `chip` index marks the current chip: 01 Registered, 02 In Review, 03 Scheduled, 04 In Progress. */
export const workflowChips = ['Registered', 'In Review', 'Scheduled', 'In Progress', 'Completed'];

export const workflow = {
  label: 'Workflow',
  title: { before: 'From registration to ', highlight: 'completion', after: ' in four steps.' },
  description: 'Move each patient workflow forward with a shared sequence of clear ownership and status.',
  progressLabel: 'Workflow progression',
  defaultStep: 2,
};
