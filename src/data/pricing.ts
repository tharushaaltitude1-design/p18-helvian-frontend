export type Plan = {
  badge: string;
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  action: string;
  featured?: boolean;
};

export const pricing = {
  label: 'Plans',
  title: { before: 'Flexible licensing for ', highlight: 'every facility', after: '.' },
  description: 'Choose a plan that fits your facility, with transparent licensing and onboarding support.',
  from: 'From',
  period: '/mo',
  popular: 'Most Popular',
  caption: 'Illustrative pricing. Final quotes are provided per facility.',
  strip: ['Role-based access', 'Activity history', 'Data validation', 'Onboarding support'],
};

export const plans: Plan[] = [
  {
    badge: 'Clinic',
    title: 'Specialist Clinic',
    subtitle: 'Single-facility subscription',
    price: '$499',
    features: ['Patient Profiles', 'Appointments', 'Task Management', 'Basic Dashboard'],
    action: 'Get Started',
  },
  {
    badge: 'Hospital',
    title: 'Hospital System',
    subtitle: 'Per-facility licensing',
    price: '$1,290',
    features: ['All Clinic modules', 'Multi-department management', 'Workflow Registry', 'Role-based access', 'Activity history'],
    action: 'Contact Sales',
    featured: true,
  },
  {
    badge: 'Network',
    title: 'Healthcare Network',
    subtitle: 'Enterprise engagement',
    price: '$3,400',
    features: ['Multi-facility support', 'Enterprise integration services', 'Custom workflow modules', 'Dedicated onboarding'],
    action: 'Get Started',
  },
];
