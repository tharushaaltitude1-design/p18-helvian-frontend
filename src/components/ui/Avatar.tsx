import { useState } from 'react';

export function Avatar({ src, name }: { src?: string; name: string }) {
  const [failed, setFailed] = useState(false);
  return failed || !src ? (
    <span className="avatar avatar--initials">
      {name
        .split(' ')
        .map((word) => word[0])
        .slice(0, 2)
        .join('')}
    </span>
  ) : (
    <img className="avatar" src={src} alt={`${name} portrait`} onError={() => setFailed(true)} />
  );
}
