import { Product } from "@/types/disclosure";
import { StatusBadge } from "./StatusBadge";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="block group"
    >
      <article className="border border-border bg-card p-6 rounded transition-normal hover:border-muted-foreground/30 hover:bg-accent/50 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-base font-medium text-foreground group-hover:text-foreground/90 transition-subtle leading-tight">
            {product.name}
          </h3>
          <StatusBadge status={product.status} />
        </div>

        <dl className="space-y-2 text-sm">
          <div className="flex items-baseline gap-2">
            <dt className="text-muted-foreground">Category</dt>
            <dd className="text-foreground">{product.category}</dd>
          </div>

          <div className="flex items-baseline gap-2">
            <dt className="text-muted-foreground">Declared by</dt>
            <dd className="text-foreground">{product.producerName}</dd>
          </div>

          <div className="flex items-baseline gap-2">
            <dt className="text-muted-foreground">Last updated</dt>
            <dd className="text-foreground tabular-nums">
              {formatDate(product.lastUpdated)}
            </dd>
          </div>
        </dl>
      </article>
    </Link>
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
