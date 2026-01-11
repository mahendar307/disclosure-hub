import { DisclosureStatus } from "@/types/disclosure";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: DisclosureStatus;
  className?: string;
}

const statusConfig: Record<
  DisclosureStatus,
  { label: string; className: string }
> = {
  draft: {
    label: "Draft",
    className: "bg-status-draft-bg text-status-draft",
  },
  submitted: {
    label: "Submitted",
    className: "bg-status-submitted-bg text-status-submitted",
  },
  published: {
    label: "Published",
    className: "bg-status-published-bg text-status-published",
  },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-xs font-medium rounded transition-subtle",
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
