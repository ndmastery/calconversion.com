import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { DocumentLayout } from "@/shared/document-layout/document-layout";
import { DocumentHeroBanner } from "@/shared/document-layout/document-hero-banner";
import { buildDocumentHead } from "@/utilities/seo-helpers";
import { PAGE_META } from "@/constants/seo";
import { RoutePath } from "@/enums/route-path";
import { COMPANY } from "@/constants/brand";
import { TermsSections1 } from "./sections/terms-sections-1";
import { TermsSections2 } from "./sections/terms-sections-2";
import { TermsSections3 } from "./sections/terms-sections-3";

const SECTIONS = [
  { id: "acceptance", num: "01", title: "Acceptance of Terms", icon: "shield" },
  { id: "provider", num: "02", title: "Service Provider", icon: "building" },
  { id: "description", num: "03", title: "Description of Service", icon: "globe" },
  { id: "license", num: "04", title: "License Grant", icon: "lock" },
  { id: "pricing", num: "05", title: "Pricing & Purchases", icon: "dollar" },
  { id: "exchange-rates", num: "06", title: "Exchange Rate Accuracy", icon: "trending-up" },
  { id: "unit-accuracy", num: "07", title: "Unit Conversion Accuracy", icon: "server" },
  { id: "liability", num: "08", title: "Limitation of Liability", icon: "shield" },
  { id: "third-party", num: "09", title: "Third-Party Services", icon: "world" },
  { id: "bug-reports", num: "10", title: "Bug Reports", icon: "bug" },
  { id: "ip", num: "11", title: "Intellectual Property", icon: "lock" },
  { id: "termination", num: "12", title: "Termination", icon: "clock" },
  { id: "governing-law", num: "13", title: "Governing Law", icon: "globe" },
  { id: "severability", num: "14", title: "Severability", icon: "version" },
  { id: "entire-agreement", num: "15", title: "Entire Agreement", icon: "version" },
  { id: "changes", num: "16", title: "Changes to Terms", icon: "refresh" },
  { id: "contact", num: "17", title: "Contact", icon: "mail" },
] as const;

const HERO_META = [
  { icon: "calendar", text: "Updated April 05, 2026" },
  { icon: "version", text: "Version 1.0.0" },
  { icon: "clock", text: "~12 min read" },
];

export default component$(() => {
  return (
    <DocumentLayout sections={SECTIONS}>
      <DocumentHeroBanner
        q:slot="hero"
        eyebrow="Legal Agreement"
        title="Terms of Service"
        subtitle={`These Terms govern your use of the CalConversion mobile application. By downloading or using the app, you agree to be bound by these Terms — a legally binding agreement between you and ${COMPANY.name}.`}
        metaItems={HERO_META}
      />
      <TermsSections1 />
      <TermsSections2 />
      <TermsSections3 />
    </DocumentLayout>
  );
});

export const head: DocumentHead = buildDocumentHead(PAGE_META[RoutePath.Terms]);
