import type { PageMeta } from "@/types/seo";
import { RoutePath } from "@/enums/route-path";
import { SITE_URL, SITE_NAME } from "@/constants/site";
import { BRAND_TAGLINE } from "@/constants/brand";

export const DEFAULT_META: PageMeta = {
  title: `${SITE_NAME} — ${BRAND_TAGLINE}`,
  description: "The ultimate cross-platform conversion app with 500+ units across currency, distance, apparel, data storage, and mass. Real-time rates, offline support, and multi-target conversion.",
  keywords: ["unit converter", "currency converter", "conversion app", SITE_NAME, "distance converter", "apparel size converter", "data storage converter", "mass converter"],
};

export const PAGE_META: Record<string, PageMeta> = {
  [RoutePath.Home]: {
    title: BRAND_TAGLINE,
    description: `${SITE_NAME} is the ultimate cross-platform conversion app with 500+ units across currency, distance, apparel, data storage, and mass. Free on iOS and Android.`,
    keywords: ["unit converter", "currency converter", "conversion app", SITE_NAME, "multi-target conversion", "offline converter"],
    canonical: SITE_URL,
  },
  [RoutePath.Support]: {
    title: "Support",
    description: `Get help with ${SITE_NAME}. Find answers to frequently asked questions, report bugs, and contact our support team.`,
    keywords: [`${SITE_NAME} support`, "FAQ", "help", "bug report", "contact"],
    canonical: `${SITE_URL}/support`,
  },
  [RoutePath.Terms]: {
    title: "Terms of Service",
    description: `Read the Terms of Service for ${SITE_NAME}. Understand the conditions for using our conversion app.`,
    keywords: ["terms of service", "legal", `${SITE_NAME} terms`],
    canonical: `${SITE_URL}/terms`,
  },
  [RoutePath.Privacy]: {
    title: "Privacy Policy",
    description: `${SITE_NAME} Privacy Policy. Learn how we handle your data, location information, and third-party services.`,
    keywords: ["privacy policy", "data privacy", `${SITE_NAME} privacy`],
    canonical: `${SITE_URL}/privacy`,
  },
};

export const OG_DEFAULTS = {
  siteName: SITE_NAME,
  type: "website",
  imageWidth: "1200",
  imageHeight: "630",
} as const;
