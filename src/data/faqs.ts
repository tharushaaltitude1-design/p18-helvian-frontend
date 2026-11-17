export const faqCategories = {
  General: [
    [
      'Who is Helvian designed for?',
      'Helvian is designed for hospitals, specialist clinics, healthcare networks, medical centres and digital health organizations. It supports clinical administrators, operations managers, doctors, nurses, care coordinators and system administrators.',
    ],
    [
      'Does Helvian handle clinical diagnosis?',
      'No. Helvian focuses on administrative and workflow management: patient workflows, appointments and care coordination tasks. It does not provide diagnosis or treatment recommendations.',
    ],
    [
      'Is Helvian a live clinical system?',
      'This marketing experience presents an MVP concept with demonstration data focused on administrative and workflow management.',
    ],
    [
      'Can I request a walkthrough?',
      'Yes. Use any Request Demo button or the contact form to share your facility details and areas of interest.',
    ],
  ],
  Platform: [
    [
      'Which user roles are supported?',
      'Administrator, Clinical Manager, Doctor, Nurse and Care Coordinator roles are supported in the proposed platform model.',
    ],
    [
      'What can teams manage?',
      'Teams can organize patient profiles, departments, workflows, appointments, care tasks and operational summaries.',
    ],
    [
      'Can departments have separate permissions?',
      'Yes. Department-level permissions are part of the proposed access model, alongside role-based access.',
    ],
    [
      'Does the platform include reports?',
      'The Operations Dashboard includes department activity and workflow summaries, with activity history for review.',
    ],
  ],
  'Security & Access': [
    [
      'How is access organized?',
      'The proposed access model uses role-based data access and department-level permissions to keep operational information organized.',
    ],
    [
      'Is activity history available?',
      'Yes. Activity history is included to provide a consistent record of workflow and coordination actions.',
    ],
    [
      'Does Helvian claim HIPAA or GDPR compliance?',
      'No. This MVP does not make compliance, uptime or support claims. Any production deployment would require a separate review.',
    ],
    [
      'Can access be limited by role?',
      'Yes. Role-restricted access is part of the proposed administrative platform model.',
    ],
  ],
  Workflows: [
    [
      'What does a workflow record contain?',
      'A workflow record connects a patient to defined stages, ownership and progress updates through completion.',
    ],
    [
      'Can tasks have due dates?',
      'Yes. Care tasks can be assigned to an owner, given a due date and tracked through completion.',
    ],
    [
      'Can appointments be linked to departments?',
      'Yes. Appointments can be assigned to doctors and departments while preserving appointment history.',
    ],
    ['What are the four workflow steps?', 'Register, Create Workflow, Coordinate, and Track & Report.'],
  ],
  Pricing: [
    [
      'How is pricing shown?',
      'The plans use illustrative monthly starting points. Final quotes are provided per facility.',
    ],
    [
      'Does every plan include onboarding?',
      'Dedicated onboarding is listed for the Healthcare Network plan; onboarding conversations can be part of any facility discussion.',
    ],
    [
      'Can a hospital start with one facility?',
      'Yes. Hospital System is described as per-facility licensing.',
    ],
    [
      'Can I discuss a custom workflow?',
      'Yes. Contact Sales opens the demo request flow with the plan preselected.',
    ],
  ],
  Technology: [
    [
      'Are the NVIDIA technologies live in the product?',
      'No. They are proposed architectural options for future development and do not imply completed clinical AI, imaging or monitoring integrations.',
    ],
    [
      'Does the MVP connect to electronic health records?',
      'No, EHR integrations are out of scope for the MVP; enterprise integration services are offered separately.',
    ],
    [
      'What is the technology foundation?',
      'The proposed foundation includes a SQL database, Laravel backend and clinical workflow APIs, role-based authentication and a responsive web application.',
    ],
    [
      'Why are the technologies marked Proposed?',
      'They describe possible future development options, not completed product capabilities.',
    ],
  ],
};

export const faqCopy = {
  label: 'FAQs',
  title: { before: 'Questions? ', highlight: 'Look here', after: '.' },
  marquee: ['Questions answered', 'Role-based access', 'Patient workflows', 'Proposed technology'],
  tabsLabel: 'FAQ categories',
  aside: {
    title: 'Have different questions?',
    subtitle: 'Ask away!',
    body: 'Your questions, our answers.',
    action: 'Contact Us',
    arrowLabel: 'Go to the contact form',
    href: '#contact',
  },
};
