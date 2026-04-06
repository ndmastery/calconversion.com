import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { DocumentLayout } from "@/shared/document-layout/document-layout";
import { DocumentHeroBanner } from "@/shared/document-layout/document-hero-banner";
import { documentStyles } from "@/shared/document-layout/document-layout-styles";
import { SvgIcon } from "@/shared/document-layout/svg-icon";
import faqStyles from "./support-faq.module.css";
import reportStyles from "./support-report.module.css";
import { buildDocumentHead } from "@/utilities/seo-helpers";
import { buildFaqSchema, buildBreadcrumbSchema } from "@/utilities/structured-data";
import { PAGE_META } from "@/constants/seo";
import { FAQ_ITEMS, CONTACT_INFO } from "@/constants/support";
import { RoutePath } from "@/enums/route-path";
import { classMerge } from "@/utilities/class-merge";
import { BREADCRUMB_LABEL } from "@/constants/ui-text";
import { SITE_URL } from "@/constants/site";
import { SupportSections1 } from "./sections/support-sections-1";

const styles: Record<string, string> = { ...documentStyles, ...faqStyles, ...reportStyles };

const FAQ_GROUPS = [
  { label: "General", start: 0, end: 4 },
  { label: "Currency & Rates", start: 4, end: 9 },
  { label: "App Features", start: 9, end: 16 },
  { label: "Unit Categories", start: 16, end: 20 },
  { label: "Privacy & Data", start: 20, end: 23 },
  { label: "Bug Reporting", start: 23, end: 25 },
  { label: "Technical", start: 25, end: 30 },
] as const;

const SECTIONS = [
  { id: "general", num: "01", title: "General", icon: "globe" },
  { id: "currency", num: "02", title: "Currency & Rates", icon: "trending-up" },
  { id: "features", num: "03", title: "App Features", icon: "device" },
  { id: "categories", num: "04", title: "Unit Categories", icon: "server" },
  { id: "privacy", num: "05", title: "Privacy & Data", icon: "shield" },
  { id: "bug-report", num: "06", title: "Bug Reporting", icon: "bug" },
  { id: "technical", num: "07", title: "Technical", icon: "lock" },
  { id: "report", num: "08", title: "Submit a Report", icon: "form" },
  { id: "contact", num: "09", title: "Contact Us", icon: "mail" },
] as const;

const HERO_META = [
  { icon: "calendar", text: "Updated April 05, 2026" },
  { icon: "version", text: "Version 1.0.0" },
  { icon: "clock", text: "~11 min read" },
];

export default component$(() => {
  return (
    <>
      <DocumentLayout sections={SECTIONS}>
        <DocumentHeroBanner
          q:slot="hero"
          eyebrow="Help Center"
          title="How Can We Help?"
          subtitle="Find answers to frequently asked questions about CalConversion's features, conversions, exchange rates, privacy, and more. Can't find what you need? Reach out to our team directly."
          metaItems={HERO_META}
        />

        {FAQ_GROUPS.map((group, groupIdx) => {
          const section = SECTIONS[groupIdx];
          const items = FAQ_ITEMS.slice(group.start, group.end);
          return (
            <section key={section.id} id={section.id} class={styles.sectionCard}>
              <div class={styles.cardHeader}>
                <div class={styles.cardIconWrap}>
                  <SvgIcon name={section.icon} class={styles.cardIcon} />
                </div>
                <div class={styles.cardTitleGroup}>
                  <div class={styles.cardNumber}>Section {section.num}</div>
                  <h2 class={styles.cardTitle}>{section.title}</h2>
                </div>
                <span class={styles.faqCount}>{items.length} questions</span>
              </div>
              <div class={styles.cardBody}>
                <div class={styles.faqAccordion}>
                  {items.map((item) => (
                    <details key={item.question} class={styles.faqItem}>
                      <summary class={styles.faqSummary}>{item.question}</summary>
                      <div class={styles.faqAnswer}>
                        <div class={styles.faqAnswerInner}>
                          <p class={styles.faqAnswerText}>{item.answer}</p>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <SupportSections1 />
      </DocumentLayout>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify(buildFaqSchema(FAQ_ITEMS))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={JSON.stringify(
          buildBreadcrumbSchema([
            { name: BREADCRUMB_LABEL.HOME, url: SITE_URL },
            { name: BREADCRUMB_LABEL.SUPPORT, url: `${SITE_URL}/support` },
          ])
        )}
      />
    </>
  );
});

export const head: DocumentHead = buildDocumentHead(PAGE_META[RoutePath.Support]);
