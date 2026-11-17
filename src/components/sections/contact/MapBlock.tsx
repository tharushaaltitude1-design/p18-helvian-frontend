import { contact } from '@/data';

/** Inline line-art map (no external tiles). One pulsing pin marks the office. */
export function MapBlock() {
  return (
    <figure className="map-block">
      <svg viewBox="0 0 1200 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label={contact.map.label}>
        <g className="map-streets">
          <path d="M0 70 L1200 30 M0 150 L1200 120 M0 230 L1200 250 M0 290 L1200 276" />
          <path d="M120 0 L170 300 M330 0 L300 300 M520 0 L560 300 M760 0 L720 300 M980 0 L1030 300 M1150 0 L1130 300" />
        </g>
        <g className="map-blocks">
          <rect x="190" y="82" width="90" height="48" /><rect x="350" y="44" width="110" height="56" /><rect x="590" y="90" width="100" height="40" />
          <rect x="790" y="60" width="150" height="46" /><rect x="1050" y="72" width="70" height="50" /><rect x="200" y="172" width="100" height="50" />
          <rect x="360" y="168" width="120" height="44" /><rect x="580" y="164" width="110" height="60" /><rect x="800" y="150" width="130" height="64" />
          <rect x="1040" y="160" width="80" height="60" /><rect x="360" y="252" width="120" height="30" /><rect x="800" y="268" width="140" height="24" />
        </g>
        <path className="map-river" d="M0 200 C200 170 360 250 560 215 S900 120 1200 190" />
        <path className="map-route" d="M170 300 L240 150 L560 130 L730 96" />
        <g transform="translate(730 96)">
          <circle className="map-pulse" r="12" />
          <path className="map-pin" d="M0 0 C-20 -22 -20 -44 0 -44 C20 -44 20 -22 0 0Z" />
          <circle className="map-pin-dot" cy="-30" r="5" />
        </g>
      </svg>
      <figcaption>{contact.map.caption}</figcaption>
    </figure>
  );
}
