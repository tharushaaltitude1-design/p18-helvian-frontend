import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils';

type Variant = 'accent' | 'dark' | 'outline';
type Common = { variant?: Variant; small?: boolean; className?: string; children: ReactNode };
type AsButton = Common & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & { to?: undefined; href?: undefined };
type AsLink = Common & { to: string; href?: undefined; onClick?: (event: MouseEvent<HTMLAnchorElement>) => void };
type AsAnchor = Common & { href: string; external?: boolean; to?: undefined; onClick?: (event: MouseEvent<HTMLAnchorElement>) => void };

export function Button(props: AsButton | AsLink | AsAnchor) {
  const { variant = 'accent', small = false, className, children } = props;
  const classes = cn('button', `button--${variant}`, small && 'button--small', className);
  if (props.to !== undefined) {
    return <Link to={props.to} className={classes} onClick={props.onClick}>{children}</Link>;
  }
  if (props.href !== undefined) {
    const external = 'external' in props && props.external;
    return (
      <a href={props.href} className={classes} onClick={props.onClick} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}
      </a>
    );
  }
  const { variant: _v, small: _s, className: _c, children: _ch, to: _t, href: _h, type = 'button', ...rest } = props;
  void _v; void _s; void _c; void _ch; void _t; void _h;
  return <button type={type} className={classes} {...rest}>{children}</button>;
}
