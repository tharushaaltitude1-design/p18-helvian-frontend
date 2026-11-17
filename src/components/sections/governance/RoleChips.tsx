import { governance, roleSummaries } from '@/data';
import { Tooltip } from '@/components/ui';

export function RoleChips() {
  return (
    <div className="roles">
      <strong id="roles-label">{governance.rolesLabel}</strong>
      <ul className="roles__list" aria-labelledby="roles-label">
        {Object.entries(roleSummaries).map(([role, summary]) => (
          <li key={role}>
            <Tooltip text={summary}>
              <button type="button" className="role-chip">{role}</button>
            </Tooltip>
          </li>
        ))}
      </ul>
    </div>
  );
}
