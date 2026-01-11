import { ProductVersion } from "@/types/disclosure";
import { StatusBadge } from "./StatusBadge";

interface VersionHistoryProps {
  versions: ProductVersion[];
}

export function VersionHistory({ versions }: VersionHistoryProps) {
  const sortedVersions = [...versions].reverse();

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-3 top-2 bottom-2 w-px bg-border" />

      <div className="space-y-6">
        {sortedVersions.map((version, index) => (
          <div key={version.version} className="relative pl-8">
            {/* Timeline dot */}
            <div
              className={`absolute left-1.5 top-1.5 w-3 h-3 rounded-full border-2 border-background transition-subtle ${
                index === 0 ? "bg-foreground" : "bg-muted-foreground/40"
              }`}
            />

            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-foreground tabular-nums">
                  v{version.version}
                </span>
                <StatusBadge status={version.status} />
              </div>

              <span className="text-sm text-muted-foreground tabular-nums">
                {formatDate(version.date)}
              </span>
            </div>

            {version.notes && (
              <p className="mt-1.5 text-sm text-muted-foreground">
                {version.notes}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
