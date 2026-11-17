import { images } from '@/data';
import { ImageWithFallback } from '@/components/ui';

/** The L-shaped accent is anchored to the photo frame's lower-left corner, not the outer wrapper. */
export function AboutPhoto({ badge }: { badge: string }) {
  const { src, alt, width, height } = images.about;
  return (
    <div className="about-photo">
      <div className="about-photo__frame">
        <span className="about-accent" aria-hidden="true" />
        <ImageWithFallback src={src} alt={alt} width={width} height={height} className="about-photo__img" />
        <span className="photo-badge">{badge}</span>
      </div>
    </div>
  );
}
