import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { cn } from '@/utils';

type Props = { src: string; alt: string; width: number; height: number; className?: string; eager?: boolean };

/** Lazy image with reserved size; swaps to a dark placeholder with an icon if loading fails. */
export function ImageWithFallback({ src, alt, width, height, className, eager = false }: Props) {
  const [failed, setFailed] = useState(false);
  const style = { aspectRatio: `${width} / ${height}` };
  if (failed) {
    return (
      <div role="img" aria-label={alt} className={cn('img-fallback', className)} style={style}>
        <ImageOff size={40} strokeWidth={1.25} aria-hidden="true" />
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
      style={style}
      onError={() => setFailed(true)}
    />
  );
}
