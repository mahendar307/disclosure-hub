export type DisclosureStatus = "draft" | "submitted" | "published";

export interface Product {
  id: string;
  name: string;
  category: string;
  producerName: string;
  status: DisclosureStatus;
  lastUpdated: string;
  declarationDate: string;
  evidenceCount: number;
}

export interface ProductVersion {
  version: string;
  date: string;
  status: DisclosureStatus;
  notes?: string;
}

export interface ProductDetail extends Product {
  description?: string;
  versions: ProductVersion[];
}
