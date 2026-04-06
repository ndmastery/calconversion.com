import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { HeroSection } from "@/domain/hero/hero-section";
import { FeaturesSection } from "@/domain/features/features-section";
import { CategoriesSection } from "@/domain/categories/categories-section";
import { CompareSection } from "@/domain/compare/compare-section";
import { GuideSection } from "@/domain/guide/guide-section";
import { DownloadSection } from "@/domain/download/download-section";
import { ShowcaseSection } from "@/domain/showcase/showcase-section";
import { buildDocumentHead } from "@/utilities/seo-helpers";
import { buildSoftwareAppSchema, buildOrganizationSchema, buildWebSiteSchema } from "@/utilities/structured-data";
import { PAGE_META } from "@/constants/seo";
import { RoutePath } from "@/enums/route-path";

export default component$(() => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <CompareSection />
      <GuideSection />
      <ShowcaseSection />
      <DownloadSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify(buildSoftwareAppSchema())}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify(buildOrganizationSchema())}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify(buildWebSiteSchema())}
      />
    </>
  );
});

export const head: DocumentHead = buildDocumentHead(PAGE_META[RoutePath.Home]);
