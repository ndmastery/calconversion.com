import type { DocumentHead } from "@builder.io/qwik-city";
import type { PageMeta } from "@/types/seo";
import { SITE_NAME, SITE_URL, SITE_DEFAULT_LOGO } from "@/constants/site";

export function buildPageTitle(title: string): string {
  return `${title} | ${SITE_NAME}`;
}

export function buildDocumentHead(pageMeta: PageMeta): DocumentHead {
  const fullTitle = buildPageTitle(pageMeta.title);
  const canonical = pageMeta.canonical || SITE_URL;

  return {
    title: fullTitle,
    meta: [
      { name: "description", content: pageMeta.description },
      { name: "keywords", content: pageMeta.keywords.join(", ") },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: pageMeta.description },
      { property: "og:url", content: canonical },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:image", content: pageMeta.ogImage || SITE_DEFAULT_LOGO },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: pageMeta.description },
      { name: "twitter:image", content: pageMeta.ogImage || SITE_DEFAULT_LOGO },
    ],
    links: [
      { rel: "canonical", href: canonical },
    ],
  };
}
