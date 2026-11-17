import { dashboardDemo } from '@/data';
import { Tooltip } from '@/components/ui';

export function BarChart() {
  const { departments, axis, barsUnit } = dashboardDemo;
  return (
    <div className="bar-chart">
      <ul className="bar-axis" aria-hidden="true">
        {axis.map((tick) => <li key={tick}>{tick}</li>)}
      </ul>
      <div className="bar-plot">
        {departments.map((item) => {
          const text = `${item.label}: ${item.value} ${barsUnit}`;
          return (
            <div className="bar-column" key={item.label}>
              <div className="bar-track">
                <Tooltip text={text}>
                  <button type="button" className="bar" style={{ height: `${item.value}%` }} aria-label={text} />
                </Tooltip>
              </div>
              <small>{item.label}</small>
            </div>
          );
        })}
      </div>
    </div>
  );
}
