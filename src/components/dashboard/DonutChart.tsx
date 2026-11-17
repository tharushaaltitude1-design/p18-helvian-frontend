import { useState } from 'react';
import { dashboardDemo } from '@/data';
import { cn } from '@/utils';

export function DonutChart() {
  const { statuses, kpis, statusTotalLabel } = dashboardDemo;
  const [active, setActive] = useState<number | null>(null);
  let offset = 0;
  const segments = statuses.map((status, index) => {
    const start = offset;
    offset += status.value;
    return { ...status, index, start };
  });
  const current = active === null ? null : statuses[active];
  return (
    <div className="donut-wrap" onMouseLeave={() => setActive(null)}>
      <div className="donut">
        <svg viewBox="0 0 36 36" role="img" aria-label={statuses.map((s) => `${s.label} ${s.value}%`).join(', ')}>
          {segments.map((seg) => (
            <circle
              key={seg.label}
              className={cn('donut-seg', `donut-seg--${seg.index}`, active !== null && active !== seg.index && 'is-dim')}
              cx="18"
              cy="18"
              r="15.9155"
              pathLength="100"
              strokeDasharray={`${seg.value - 0.8} ${100 - seg.value + 0.8}`}
              strokeDashoffset={-seg.start}
              onMouseEnter={() => setActive(seg.index)}
            />
          ))}
        </svg>
        <div className="donut-center" aria-hidden="true">
          <b>{current ? `${current.value}%` : kpis[0].value}</b>
          <small>{current ? current.label : statusTotalLabel}</small>
        </div>
      </div>
      <ul className="donut-legend">
        {statuses.map((status, index) => (
          <li key={status.label}>
            <button
              type="button"
              className={cn('legend-item', active === index && 'is-active')}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onBlur={() => setActive(null)}
            >
              <i className={`dot dot--${index}`} />
              {status.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
