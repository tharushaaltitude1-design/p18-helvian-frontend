export const brand = {
  name: 'Helvian',
  legalNameUS: 'Helvian Digital Technologies LLC',
  legalNameSL: 'Helvian Digital Technologies (Private) Limited',
  tagline: 'Clinical Operations & Patient Workflow Intelligence',
  email: 'support@helvian.net',
  phoneUS: '+1 (914) 497-6364',
  phoneUSRaw: '+19144976364',
  phoneSL: '+94 76 992 0865',
  phoneSLRaw: '+94769920865',
  phone: '+1 (914) 497-6364',
  addressUS: '850 South Figueroa Street, Suite 302, Los Angeles, CA 90017, USA',
  addressSL: '14, Bluebell Avenue, Vavuniya, Sri Lanka',
  address: '850 South Figueroa Street, Suite 302',
  city: 'Los Angeles, CA 90017, USA',
  hours: 'Monday–Friday · 9:00–18:00',
  foundedDate: '28 February 2024',
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
