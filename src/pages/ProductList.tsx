import { useState, useMemo, useEffect } from "react";
import { mockProducts } from "@/data/mockProducts";
import { PageHeader } from "@/components/disclosure/PageHeader";
import { FilterControls } from "@/components/disclosure/FilterControls";
import { ProductCard } from "@/components/disclosure/ProductCard";
import { ProductListSkeleton } from "@/components/disclosure/ProductCardSkeleton";
import { EmptyState } from "@/components/disclosure/EmptyState";

export default function ProductList() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [sortBy, setSortBy] = useState("name-asc");

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...mockProducts];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(query));
    }

    // Category filter
    if (categoryFilter !== "All Categories") {
      result = result.filter((p) => p.category === categoryFilter);
    }

    // Status filter
    if (statusFilter !== "All Statuses") {
      result = result.filter(
        (p) => p.status.toLowerCase() === statusFilter.toLowerCase()
      );
    }

    // Sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "updated-desc":
          return (
            new Date(b.lastUpdated).getTime() -
            new Date(a.lastUpdated).getTime()
          );
        case "updated-asc":
          return (
            new Date(a.lastUpdated).getTime() -
            new Date(b.lastUpdated).getTime()
          );
        default:
          return 0;
      }
    });

    return result;
  }, [searchQuery, categoryFilter, statusFilter, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageHeader
          title="Product Disclosures"
          description="Browse producer-declared product information. All data presented here is reported by producers and has not been independently reviewed."
        />

        <FilterControls
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          categoryFilter={categoryFilter}
          onCategoryChange={setCategoryFilter}
          statusFilter={statusFilter}
          onStatusChange={setStatusFilter}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {isLoading ? (
          <ProductListSkeleton count={6} />
        ) : filteredProducts.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}
