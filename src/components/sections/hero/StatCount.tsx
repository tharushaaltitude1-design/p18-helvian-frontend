import { useCountUp } from '@/hooks';

type Props = { value: number; suffix: string; label: string };

export function StatCount({ value, suffix, label }: Props) {
  const { ref, value: shown } = useCountUp<HTMLElement>(value);
  return (
    <div>
      <strong ref={ref}>
        <span aria-hidden="true">{shown}{suffix}</span>
        <span className="sr-only">{value}{suffix}</span>
      </strong>
      <span>{label}</span>
    </div>
  );
}
