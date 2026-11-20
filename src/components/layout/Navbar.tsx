import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Menu } from 'lucide-react';
import { Button, IconButton, Logo } from '@/components/ui';
import { useSectionLink } from '@/hooks/useSectionLink';
import { navigation } from '@/data';
import { cn } from '@/utils';

type Props = { theme?: 'dark' | 'light'; onToggleTheme?: () => void; onDemo?: () => void; onMenu: () => void; active: string };

export function Navbar({ onMenu, active }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const goTo = useSectionLink();
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className={cn('navbar-wrap', scrolled && 'is-scrolled')}>
      <nav className="navbar container" aria-label="Primary navigation">
        <Link to="/#home" className="brand-link" aria-label="Helvian home" onClick={(event) => goTo(event, '#home')}><Logo /></Link>
        <div className="nav-links">
          {navigation.map((item) => {
            const isActive = active === item.key;
            const current = isActive ? (item.type === 'route' ? 'page' : 'location') : undefined;
            if (item.type === 'route') {
              return (
                <Link key={item.label} to={item.href} className={cn(isActive && 'is-active')} aria-current={current}>
                  {item.label}
                </Link>
              );
            }
            return (
              <a
                key={item.label}
                href={`/${item.href}`}
                className={cn(isActive && 'is-active')}
                aria-current={current}
                onClick={(event) => goTo(event, item.href)}
              >
                {item.label}
              </a>
            );
          })}
        </div>
        <div className="nav-actions">
          <Button small to="/product">Helvian V1 <ArrowUpRight size={15} aria-hidden="true" /></Button>
          <IconButton label="Open menu" className="menu-trigger" onClick={onMenu}><Menu aria-hidden="true" /></IconButton>
        </div>
      </nav>
    </header>
  );
}
