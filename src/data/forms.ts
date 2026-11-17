export const ui = {
  skip: 'Skip to content',
  loading: 'Loading…',
  toastRegion: 'Notifications',
};

export const demoRequest = {
  label: 'Request Demo',
  title: { before: 'See Helvian in ', highlight: 'your workflow.' },
  fields: {
    fullName: 'Full Name',
    email: 'Work Email',
    organization: 'Organization',
    role: 'Role',
    facility: 'Facility Type',
    plan: 'Plan of interest',
    message: 'Message (optional)',
  },
  placeholders: { role: 'Select role', facility: 'Select facility', plan: 'Not sure yet' },
  roles: ['Clinical Administrator', 'Operations Manager', 'Doctor', 'Nurse', 'Care Coordinator', 'System Administrator', 'Other'],
  submit: 'Request Demo',
  sending: 'Sending…',
  toast: 'Thanks, we will reach out within 1–2 business days.',
  success: {
    title: 'Request received',
    body: 'Thank you. This is a demonstration form, so your details are stored only in this browser.',
    close: 'Close',
  },
  close: 'Close dialog',
};

export const moduleDrawer = { demo: 'Request a demo', close: 'Close details', closeLabel: 'Close details' };

export const notFound = {
  code: '404',
  title: 'That page moved elsewhere.',
  body: 'Let’s get you back to a clear view.',
  action: 'Back to home',
  documentTitle: 'Page not found | Helvian',
};

export type LegalDoc = {
  documentTitle: string;
  title: string;
  warning: string;
  sections: { heading: string; body: string[] }[];
};

export const legalNav = { home: 'Back to home', label: 'Template', other: 'Legal pages' };

export const termsDoc: LegalDoc = {
  documentTitle: 'User Terms & Conditions | Helvian',
  title: 'User Terms & Conditions',
  warning: 'Template text — review with legal before publishing.',
  sections: [
    {
      heading: 'Overview',
      body: [
        'These template terms describe a fictional Helvian marketing site and demonstration experience. They are a starting point for review and do not create a contract or promise any production service.',
      ],
    },
    {
      heading: 'Use of this site',
      body: [
        'You may browse the site and submit information through its demonstration forms. Please do not submit confidential patient information, medical records or other sensitive data through this experience.',
      ],
    },
    {
      heading: 'Illustrative content',
      body: [
        'Dashboards, figures, testimonials, names and pricing shown on this site are illustrative demonstration content. Final pricing is provided per facility.',
        'Helvian is focused on administrative workflow management. Nothing on this site is medical advice, diagnosis or treatment guidance.',
      ],
    },
    {
      heading: 'Proposed technology',
      body: [
        'Technologies mentioned in the architecture section are proposed options for future development and do not describe completed integrations.',
      ],
    },
    { heading: 'Changes to these terms', body: ['These template terms may change before the product is launched.'] },
  ],
};

export const privacyDoc: LegalDoc = {
  documentTitle: 'Privacy Policy | Helvian',
  title: 'Privacy Policy',
  warning: 'Template text — review with legal before publishing.',
  sections: [
    {
      heading: 'Overview',
      body: [
        'This template privacy policy explains how the Helvian demonstration site handles information. It is a starting point for review and must be replaced with a policy approved by qualified legal counsel.',
      ],
    },
    {
      heading: 'Information you submit',
      body: [
        'The demo request, contact and updates forms collect the details you type into them, such as name, work email, organization and message. In this demonstration build, submissions are stored only in your own browser and are not sent to a server.',
        'Please do not enter patient information or other sensitive data.',
      ],
    },
    {
      heading: 'Preferences',
      body: ['Your light or dark theme choice is saved in your browser so the site remembers it on your next visit.'],
    },
    {
      heading: 'Your choices',
      body: ['You can clear this information at any time by clearing the site data in your browser settings.'],
    },
  ],
};
