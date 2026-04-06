import type { CategoryId } from "@/enums/category-id";

export interface Subcategory {
  name: string;
  examples?: string[];
}

export interface Category {
  id: CategoryId;
  name: string;
  tagline: string;
  description: string;
  unitCount: string;
  gradientStart: string;
  gradientEnd: string;
  iconPath: string;
  subcategories: Subcategory[];
}
