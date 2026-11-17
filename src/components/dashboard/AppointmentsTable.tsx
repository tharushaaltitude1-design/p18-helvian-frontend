import { useMemo, useState } from 'react';
import { dashboardDemo, type Appointment, type AppointmentColumn } from '@/data';
import { cn } from '@/utils';

type Sort = { key: AppointmentColumn['key']; dir: 'asc' | 'desc' };

export function AppointmentsTable() {
  const { columns, appointments } = dashboardDemo;
  const [sort, setSort] = useState<Sort>({ key: 'minutes', dir: 'asc' });
  const rows = useMemo(() => {
    const sorted = [...appointments].sort((a, b) => {
      const left = a[sort.key];
      const right = b[sort.key];
      const result = typeof left === 'number' && typeof right === 'number' ? left - right : String(left).localeCompare(String(right));
      return sort.dir === 'asc' ? result : -result;
    });
    return sorted;
  }, [appointments, sort]);
  const toggle = (key: Sort['key']) =>
    setSort((prev) => (prev.key === key ? { key, dir: prev.dir === 'asc' ? 'desc' : 'asc' } : { key, dir: 'asc' }));
  const cell = (row: Appointment, key: Sort['key']) =>
    key === 'minutes' ? row.time : key === 'status' ? <em className={cn('status', `status--${row.status.toLowerCase().replace(' ', '-')}`)}>{row.status}</em> : row[key];
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key} scope="col" aria-sort={sort.key === col.key ? (sort.dir === 'asc' ? 'ascending' : 'descending') : 'none'}>
              <button type="button" onClick={() => toggle(col.key)}>
                {col.label}
                <span aria-hidden="true">{sort.key === col.key ? (sort.dir === 'asc' ? '▲' : '▼') : ''}</span>
              </button>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.patient}>
            {columns.map((col) => <td key={col.key}>{cell(row, col.key)}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
