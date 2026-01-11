export function ProductCardSkeleton() {
  return (
    <article className="border border-border bg-card p-6 rounded">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="h-5 w-48 skeleton-shimmer rounded" />
        <div className="h-5 w-16 skeleton-shimmer rounded" />
      </div>

      <div className="space-y-3">
        <div className="flex items-baseline gap-2">
          <div className="h-4 w-16 skeleton-shimmer rounded" />
          <div className="h-4 w-28 skeleton-shimmer rounded" />
        </div>

        <div className="flex items-baseline gap-2">
          <div className="h-4 w-20 skeleton-shimmer rounded" />
          <div className="h-4 w-36 skeleton-shimmer rounded" />
        </div>

        <div className="flex items-baseline gap-2">
          <div className="h-4 w-24 skeleton-shimmer rounded" />
          <div className="h-4 w-20 skeleton-shimmer rounded" />
        </div>
      </div>
    </article>
  );
}

export function ProductListSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}
