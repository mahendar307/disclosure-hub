import { Product, ProductDetail, ProductVersion } from "@/types/disclosure";

export const mockProducts: Product[] = [
  {
    id: "prod-001",
    name: "Industrial Solvent X-47",
    category: "Chemical Products",
    producerName: "Meridian Chemical Corp.",
    status: "published",
    lastUpdated: "2025-12-15",
    declarationDate: "2025-11-20",
    evidenceCount: 3,
  },
  {
    id: "prod-002",
    name: "Agricultural Compound B-12",
    category: "Agricultural Inputs",
    producerName: "Greenfield Agri Solutions",
    status: "submitted",
    lastUpdated: "2026-01-08",
    declarationDate: "2026-01-05",
    evidenceCount: 2,
  },
  {
    id: "prod-003",
    name: "Textile Dye Formula TD-90",
    category: "Industrial Materials",
    producerName: "Coastal Manufacturing Ltd.",
    status: "draft",
    lastUpdated: "2026-01-10",
    declarationDate: "2026-01-10",
    evidenceCount: 0,
  },
  {
    id: "prod-004",
    name: "Polymer Resin Grade A",
    category: "Chemical Products",
    producerName: "Northland Polymers Inc.",
    status: "published",
    lastUpdated: "2025-10-22",
    declarationDate: "2025-09-15",
    evidenceCount: 5,
  },
  {
    id: "prod-005",
    name: "Lubricant Additive LB-300",
    category: "Industrial Materials",
    producerName: "Apex Industrial Supplies",
    status: "submitted",
    lastUpdated: "2025-12-28",
    declarationDate: "2025-12-20",
    evidenceCount: 1,
  },
  {
    id: "prod-006",
    name: "Food-Grade Preservative FP-8",
    category: "Food Additives",
    producerName: "SafeFood Ingredients Co.",
    status: "published",
    lastUpdated: "2025-11-05",
    declarationDate: "2025-10-01",
    evidenceCount: 4,
  },
  {
    id: "prod-007",
    name: "Electronic Coating EC-200",
    category: "Industrial Materials",
    producerName: "TechCoat Industries",
    status: "draft",
    lastUpdated: "2026-01-09",
    declarationDate: "2026-01-09",
    evidenceCount: 0,
  },
  {
    id: "prod-008",
    name: "Pharmaceutical Excipient PE-15",
    category: "Pharmaceutical",
    producerName: "BioMed Compounds LLC",
    status: "published",
    lastUpdated: "2025-08-30",
    declarationDate: "2025-07-15",
    evidenceCount: 6,
  },
];

export const mockProductDetail: ProductDetail = {
  id: "prod-001",
  name: "Industrial Solvent X-47",
  category: "Chemical Products",
  producerName: "Meridian Chemical Corp.",
  status: "published",
  lastUpdated: "2025-12-15",
  declarationDate: "2025-11-20",
  evidenceCount: 3,
  description:
    "Producer-declared industrial solvent for manufacturing applications. This disclosure contains information as reported by the producer.",
  versions: [
    {
      version: "1.0",
      date: "2025-09-01",
      status: "draft",
      notes: "Initial disclosure submission",
    },
    {
      version: "1.1",
      date: "2025-10-15",
      status: "submitted",
      notes: "Additional evidence attached",
    },
    {
      version: "1.2",
      date: "2025-11-20",
      status: "published",
      notes: "Disclosure published to registry",
    },
  ],
};

export const categories = [
  "All Categories",
  "Chemical Products",
  "Agricultural Inputs",
  "Industrial Materials",
  "Food Additives",
  "Pharmaceutical",
];

export const statuses = ["All Statuses", "Draft", "Submitted", "Published"];

export const sortOptions = [
  { value: "name-asc", label: "Name (A–Z)" },
  { value: "name-desc", label: "Name (Z–A)" },
  { value: "updated-desc", label: "Last Updated (Newest)" },
  { value: "updated-asc", label: "Last Updated (Oldest)" },
];
