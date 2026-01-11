import { useParams, Link } from "react-router-dom";
import { ArrowLeft, FileText, Paperclip } from "lucide-react";
import { mockProductDetail } from "@/data/mockProducts";
import { StatusBadge } from "@/components/disclosure/StatusBadge";
import { VersionHistory } from "@/components/disclosure/VersionHistory";
import { Disclaimer } from "@/components/disclosure/Disclaimer";
import { Separator } from "@/components/ui/separator";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, fetch based on id
  const product = mockProductDetail;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back navigation */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-subtle mb-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to disclosures
        </Link>

        {/* Header section */}
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
            <div>
              <h1 className="text-2xl font-semibold text-foreground tracking-tight mb-1">
                {product.name}
              </h1>
              <p className="text-sm text-muted-foreground">
                {product.category}
              </p>
            </div>
            <StatusBadge status={product.status} className="self-start" />
          </div>

          <p className="text-sm text-muted-foreground">
            Declared by{" "}
            <span className="text-foreground font-medium">
              {product.producerName}
            </span>
          </p>
        </header>

        <Separator className="my-8" />

        {/* Disclosure Summary */}
        <section className="mb-8">
          <h2 className="text-lg font-medium text-foreground mb-4">
            Disclosure Summary
          </h2>

          <dl className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="text-sm text-muted-foreground sm:w-40 flex-shrink-0">
                Declared by
              </dt>
              <dd className="text-sm text-foreground">{product.producerName}</dd>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="text-sm text-muted-foreground sm:w-40 flex-shrink-0">
                Declaration date
              </dt>
              <dd className="text-sm text-foreground tabular-nums">
                {formatDate(product.declarationDate)}
              </dd>
            </div>

            <div className="flex flex-col sm:flex-row sm:gap-4">
              <dt className="text-sm text-muted-foreground sm:w-40 flex-shrink-0">
                Evidence attached
              </dt>
              <dd className="text-sm text-foreground flex items-center gap-2">
                <Paperclip className="w-4 h-4 text-muted-foreground" />
                {product.evidenceCount > 0
                  ? `${product.evidenceCount} document${product.evidenceCount > 1 ? "s" : ""}`
                  : "None provided"}
              </dd>
            </div>
          </dl>

          {product.description && (
            <div className="mt-6 p-4 bg-muted/50 rounded border border-border">
              <div className="flex items-start gap-3">
                <FileText className="w-4 h-4 text-muted-foreground mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
              </div>
            </div>
          )}
        </section>

        <Separator className="my-8" />

        {/* Version History */}
        <section className="mb-8">
          <h2 className="text-lg font-medium text-foreground mb-4">
            Version History
          </h2>
          <VersionHistory versions={product.versions} />
        </section>

        <Separator className="my-8" />

        {/* Disclaimer */}
        <Disclaimer />
      </div>
    </div>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
