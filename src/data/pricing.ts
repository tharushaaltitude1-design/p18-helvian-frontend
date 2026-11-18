export type Billing = 'monthly' | 'annually';

export type Plan = {
  badge: string;
  title: string;
  subtitle: string;
  price?: string;
  annualPrice?: string;
  features: string[];
  action: string;
  monthlyLink: string;
  annualLink: string;
  contact?: boolean;
  featured?: boolean;
};

export const pricing = {
  label: 'Plans',
  title: { before: 'Flexible licensing for ', highlight: 'every facility', after: '.' },
  description: 'Choose a plan that fits your facility, with transparent licensing and onboarding support.',
  from: 'From',
  annualFrom: 'Billed annually',
  period: '/mo',
  annualPeriod: '/yr',
  customPrice: 'Let’s talk',
  monthlyLabel: 'Monthly',
  annualLabel: 'Annually',
  saving: 'Save 2 months',
  popular: 'Most Popular',
  caption: 'Illustrative pricing. Final quotes are provided per facility.',
  strip: ['Role-based access', 'Activity history', 'Data validation', 'Onboarding support'],
};

export const plans: Plan[] = [
  {
    badge: 'Starter',
    title: 'Starter',
    subtitle: 'Single-facility subscription',
    price: '$499',
    annualPrice: '$4,990',
    features: ['Patient Profiles', 'Appointments', 'Task Management', 'Basic Dashboard'],
    action: 'Get Started',
    monthlyLink: 'https://buy.stripe.com/test_5kQ00beGx9Fj9wScxv2sM00',
    annualLink: 'https://buy.stripe.com/test_5kQbIT55X9FjdN89lj2sM01',
  },
  {
    badge: 'Professional',
    title: 'Professional',
    subtitle: 'Per-facility licensing',
    price: '$1,290',
    annualPrice: '$12,900',
    features: ['All Starter modules', 'Multi-department management', 'Workflow Registry', 'Role-based access', 'Activity history'],
    action: 'Get Started',
    monthlyLink: 'https://buy.stripe.com/test_fZudR16a16t7gZk0ON2sM02',
    annualLink: 'https://buy.stripe.com/test_7sY9AL7e5dVz8sO1SR2sM03',
    featured: true,
  },
  {
    badge: 'Custom',
    title: 'Custom',
    subtitle: 'Enterprise engagement',
    features: ['Multi-facility support', 'Enterprise integration services', 'Custom workflow modules', 'Dedicated onboarding'],
    action: 'Contact Sales',
    monthlyLink: '#contact',
    annualLink: '#contact',
    contact: true,
  },
];
