import { Icon } from "@/components/ui";
import { cn } from "@/utils";

type Props = {
  number: string;
  title: string;
  description: string;
  icon: string;
  active: boolean;
  onSelect: () => void;
};

/** Button contains only phrasing content (spans), so the markup is valid. */
export function WorkflowStep({
  number,
  title,
  description,
  icon,
  active,
  onSelect,
}: Props) {
  return (
    <li className="workflow-cell">
      <div className={cn("workflow-step chamfer-card", active && "is-active")}>
        <button type="button" aria-pressed={active} onClick={onSelect}>
          <span className="workflow-step__top">
            <Icon name={icon} size={34} />
            <span className="workflow-step__num" aria-hidden="true">
              {number}
            </span>
          </span>
          <span className="workflow-step__title">{title}</span>
          <span className="workflow-step__text">{description}</span>
        </button>
      </div>
    </li>
  );
}
