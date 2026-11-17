import { dashboardDemo } from '@/data';

export function ActivityFeed() {
  return (
    <ol className="activity-list">
      {dashboardDemo.activities.map((item) => (
        <li className="activity-row" key={`${item.time}-${item.text}`}>
          <i aria-hidden="true" />
          <small>{item.time}</small>
          <span>{item.text}</span>
        </li>
      ))}
    </ol>
  );
}
