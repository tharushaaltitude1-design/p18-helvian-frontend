// TODO: every contact detail below is a fake placeholder. Replace with real details before launch.
export const brand = {
  name: 'Helvian',
  tagline: 'Clinical Operations & Patient Workflow Intelligence',
  email: 'hello@helvian.net',
  phone: '+1 (555) 010-0199',
  address: '123 Healthcare Ave, Suite 500',
  city: 'Northbridge, CA 90210',
  hours: 'Monday–Friday · 9:00–18:00',
  socials: {
    linkedin: 'https://www.linkedin.com/',
    x: 'https://x.com/',
    instagram: 'https://www.instagram.com/',
    youtube: 'https://www.youtube.com/',
  },
};

export const socialLinks = [
  { key: 'linkedin', label: 'LinkedIn', href: brand.socials.linkedin },
  { key: 'x', label: 'X', href: brand.socials.x },
  { key: 'instagram', label: 'Instagram', href: brand.socials.instagram },
  { key: 'youtube', label: 'YouTube', href: brand.socials.youtube },
] as const;

export const dashboardUrl = 'https://client.helvian.net';

export const dashboardCta = {
  label: 'Go to Dashboard',
  newTab: 'opens in a new tab',
};

export const footerMarquee = ['Clinical Operations', 'Patient Workflow', 'Care Coordination', 'Department Insights'];

export const marqueeItems = ['Patient Workflows', 'Appointments', 'Care Coordination', 'Department Insights'];
