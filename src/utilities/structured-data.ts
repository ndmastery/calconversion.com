import type { StructuredData } from "@/types/seo";
import { COMPANY, BRAND_NAME } from "@/constants/brand";
import { SITE_URL, SITE_APP_ICON } from "@/constants/site";

export function buildSoftwareAppSchema(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: BRAND_NAME,
    operatingSystem: "iOS, Android",
    applicationCategory: "UtilitiesApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Convert 500+ units across currency, distance, apparel, data storage, and mass with real-time rates.",
    url: SITE_URL,
    author: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.website,
    },
  };
}

export function buildFaqSchema(items: { question: string; answer: string }[]): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildOrganizationSchema(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    url: COMPANY.website,
    logo: SITE_APP_ICON,
    brand: {
      "@type": "Brand",
      name: BRAND_NAME,
      url: SITE_URL,
    },
  };
}

export function buildWebSiteSchema(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND_NAME,
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      url: COMPANY.website,
    },
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
