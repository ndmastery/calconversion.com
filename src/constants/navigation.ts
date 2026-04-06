import type { NavItem } from "@/types/navigation";

export const NAV_ITEMS: NavItem[] = [
  { label: "Features", href: "/#features", icon: "sparkle", description: "500+ units across 5 categories" },
  { label: "Categories", href: "/#categories", icon: "layers", description: "Currency, Distance, Apparel & more" },
  { label: "Compare", href: "/#compare", icon: "scale", description: "Side-by-side conversions" },
  { label: "Showcase", href: "/#showcase", icon: "gallery", description: "See CalConversion in action" },
  { label: "Guide", href: "/#guide", icon: "book", description: "Quick start & tips" },
];

export const FOOTER_PRODUCT_LINKS: NavItem[] = [
  { label: "Features", href: "/#features" },
  { label: "Categories", href: "/#categories" },
  { label: "Compare", href: "/#compare" },
  { label: "Showcase", href: "/#showcase" },
  { label: "Guide", href: "/#guide" },
  { label: "Download", href: "/#download" },
  { label: "Support", href: "/support" },
];

export const FOOTER_LEGAL_LINKS: NavItem[] = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];
