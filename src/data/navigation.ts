export type NavItem = {
  label: string;
  href: string;
  key: string;
  type: 'section' | 'route';
};

export const navigation: NavItem[] = [
  { label: 'Home', href: '#home', key: 'home', type: 'section' },
  { label: 'Platform', href: '#platform', key: 'platform', type: 'section' },
  { label: 'Workflows', href: '#workflows', key: 'workflows', type: 'section' },
  { label: 'Dashboard', href: '#dashboard', key: 'dashboard', type: 'section' },
  { label: 'Technology', href: '#technology', key: 'technology', type: 'section' },
  { label: 'FAQ', href: '#faq', key: 'faq', type: 'section' },
];

export const sectionNavigation = navigation.filter((item) => item.type === 'section');
