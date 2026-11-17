import type { ElementType, ReactNode } from 'react';
import { cn } from '@/utils';

type Props = { as?: ElementType; tone?: 'surface' | 'accent' | 'dark'; className?: string; innerClassName?: string; children: ReactNode };

/** Outer wrapper paints the border colour, inner layer is clipped 1px smaller, so the border follows the cut corners. */
export function ChamferCard({ as: Tag = 'div', tone = 'surface', className, innerClassName, children }: Props) {
  return (
    <Tag className={cn('chamfer', tone !== 'surface' && `chamfer--${tone}`, className)}>
      <div className={cn('chamfer__inner', innerClassName)}>{children}</div>
    </Tag>
  );
}
