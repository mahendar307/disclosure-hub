import { FileText } from "lucide-react";

interface EmptyStateProps {
  message?: string;
}

export function EmptyState({
  message = "No disclosures match the current filters.",
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-12 h-12 rounded bg-muted flex items-center justify-center mb-4">
        <FileText className="w-6 h-6 text-muted-foreground" />
      </div>
      <p className="text-sm text-muted-foreground max-w-sm">{message}</p>
    </div>
  );
}
