export interface PageMeta {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

interface StructuredDataEntity {
  "@type": string;
  name?: string;
  url?: string;
  price?: string;
  priceCurrency?: string;
  position?: number;
  item?: string;
  text?: string;
  acceptedAnswer?: StructuredDataEntity;
}

export interface StructuredData {
  "@context": string;
  "@type": string;
  name?: string;
  url?: string;
  description?: string;
  operatingSystem?: string;
  applicationCategory?: string;
  offers?: StructuredDataEntity;
  author?: StructuredDataEntity;
  logo?: string;
  brand?: StructuredDataEntity;
  publisher?: StructuredDataEntity;
  mainEntity?: StructuredDataEntity[];
  itemListElement?: StructuredDataEntity[];
}
