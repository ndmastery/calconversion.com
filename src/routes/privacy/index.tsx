import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { DocumentLayout } from "@/shared/document-layout/document-layout";
import { DocumentHeroBanner } from "@/shared/document-layout/document-hero-banner";
import { buildDocumentHead } from "@/utilities/seo-helpers";
import { PAGE_META } from "@/constants/seo";
import { RoutePath } from "@/enums/route-path";
import { PrivacySections1 } from "./sections/privacy-sections-1";
import { PrivacySections2 } from "./sections/privacy-sections-2";
import { PrivacySections3 } from "./sections/privacy-sections-3";

const SECTIONS = [
  { id: "data-controller", num: "01", title: "Data Controller", icon: "building" },
  { id: "no-collect", num: "02", title: "What We Don't Collect", icon: "shield" },
  { id: "local-storage", num: "03", title: "On-Device Storage", icon: "device" },
  { id: "location", num: "04", title: "Location Data", icon: "location" },
  { id: "network", num: "05", title: "Network & Providers", icon: "globe" },
  { id: "bug-reports", num: "06", title: "Bug Reports", icon: "bug" },
  { id: "security", num: "07", title: "Data Security", icon: "lock" },
  { id: "children", num: "08", title: "Children's Privacy", icon: "child" },
  { id: "retention", num: "09", title: "Data Retention", icon: "clock" },
  { id: "your-rights", num: "10", title: "Your Rights", icon: "user" },
  { id: "international", num: "11", title: "International Users", icon: "world" },
  { id: "changes", num: "12", title: "Policy Changes", icon: "refresh" },
  { id: "contact", num: "13", title: "Contact Us", icon: "mail" },
] as const;

const HERO_META = [
  { icon: "calendar", text: "Updated April 05, 2026" },
  { icon: "version", text: "Version 1.0.0" },
  { icon: "clock", text: "~8 min read" },
];

export default component$(() => {
  return (
    <DocumentLayout sections={SECTIONS}>
      <DocumentHeroBanner
        q:slot="hero"
        eyebrow="Privacy-First App"
        title="Privacy Policy"
        subtitle="CalConversion is built on a fundamentally privacy-first architecture. Your conversion data never leaves your device — no accounts, no tracking, no data collection. Here's exactly how we protect your privacy."
        metaItems={HERO_META}
      />
      <PrivacySections1 />
      <PrivacySections2 />
      <PrivacySections3 />
    </DocumentLayout>
  );
});

export const head: DocumentHead = buildDocumentHead(PAGE_META[RoutePath.Privacy]);
