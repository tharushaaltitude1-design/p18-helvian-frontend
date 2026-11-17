import { forwardRef, type SelectHTMLAttributes } from 'react';
import { ChevronDown } from 'lucide-react';

type Props = SelectHTMLAttributes<HTMLSelectElement> & { placeholder: string; options: string[] };

/** Native select (full keyboard and mobile support) with a custom chevron. */
export const Select = forwardRef<HTMLSelectElement, Props>(function Select({ placeholder, options, ...rest }, ref) {
  return (
    <span className="select">
      <select ref={ref} {...rest}>
        <option value="">{placeholder}</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
      <ChevronDown size={16} aria-hidden="true" />
    </span>
  );
});
