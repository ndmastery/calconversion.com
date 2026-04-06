import { component$ } from "@builder.io/qwik";
import { DocumentSectionCard } from "@/shared/document-layout/document-section-card";
import { documentStyles } from "@/shared/document-layout/document-layout-styles";
import reportStyles from "../support-report.module.css";
import { SvgIcon } from "@/shared/document-layout/svg-icon";
import { classMerge } from "@/utilities/class-merge";
import { COMPANY } from "@/constants/brand";
import { CONTACT_INFO, BUG_REPORT_INFO, FAQ_ITEMS } from "@/constants/support";

const styles: Record<string, string> = { ...documentStyles, ...reportStyles };

export const SupportSections1 = component$(() => {
  return (
    <>
                        <DocumentSectionCard id="report" icon="form" num="08" title="Submit a Report">

                <p class={styles.bodyText}>
                  CalConversion includes a built-in bug reporting feature directly within the app. Here's
                  how it works:
                </p>
                <div class={styles.reportCard}>
                  <div class={styles.reportBlock}>
                    <div class={styles.reportBlockTitle}>Built-in Bug Reporter</div>
                    <p class={styles.reportBlockText}>
                      {BUG_REPORT_INFO.description}
                    </p>
                  </div>
                  <div class={styles.reportBlock}>
                    <div class={styles.reportBlockTitle}>Email Fallback</div>
                    <p class={styles.reportBlockText}>
                      If you're unable to use the in-app reporter, you can also reach us directly via email.
                      Include your device model, OS version, and app version for faster diagnosis.
                    </p>
                    <a href={`mailto:${BUG_REPORT_INFO.emailFallback}`} class={styles.reportEmailRow}>
                      <SvgIcon name="email" class={styles.reportEmailIcon} />
                      <span class={styles.reportEmailLink}>{BUG_REPORT_INFO.emailFallback}</span>
                    </a>
                  </div>
                </div>
                          </DocumentSectionCard>
                        <DocumentSectionCard id="contact" icon="mail" num="09" title="Contact Us" class={styles.contactGateway}>


                <div class={styles.gwHero}>
                  <div class={styles.gwHeroGlow} />
                  <div class={styles.gwHeroIconWrap}>
                    <SvgIcon name="headset" class={styles.gwHeroIcon} />
                  </div>
                  <h3 class={styles.gwHeroTitle}>Need Help? We're Here.</h3>
                  <p class={styles.gwHeroSubtitle}>
                    Whether you have questions about CalConversion, need technical assistance,
                    or want to share feedback — our team is ready to help.
                  </p>
                </div>

                <div class={styles.gwPathwayGrid}>
                  <div class={styles.gwPathwayCard}>
                    <div class={styles.gwPathwayIconWrap}>
                      <SvgIcon name="faq" class={styles.gwPathwayIcon} />
                    </div>
                    <h4 class={styles.gwPathwayTitle}>Browse FAQs Above</h4>
                    <p class={styles.gwPathwayDesc}>
                      Scroll up to explore {FAQ_ITEMS.length} frequently asked questions organized across
                      7 categories covering every aspect of CalConversion.
                    </p>
                    <button onClick$={() => document.getElementById("general")?.scrollIntoView({ behavior: "smooth", block: "start" })} class={styles.gwPathwayCta}>
                      Go to FAQs
                      <SvgIcon name="arrow-right" class={styles.gwCtaArrow} />
                    </button>
                  </div>

                  <div class={styles.gwPathwayCard}>
                    <div class={classMerge(styles.gwPathwayIconWrap, styles.gwPathwayIconAlt)}>
                      <SvgIcon name="form" class={styles.gwPathwayIcon} />
                    </div>
                    <h4 class={styles.gwPathwayTitle}>Contact Our Team</h4>
                    <p class={styles.gwPathwayDesc}>
                      Can't find what you need? Send us a detailed message with rich Markdown
                      formatting and attach images, videos, or documents for faster resolution.
                    </p>
                    <a href={`mailto:${CONTACT_INFO.email}`} class={classMerge(styles.gwPathwayCta, styles.gwPathwayCtaAlt)}>
                      Send Email
                      <SvgIcon name="arrow-right" class={styles.gwCtaArrow} />
                    </a>
                  </div>
                </div>

                <div class={styles.gwContactRow}>
                  <a href={`mailto:${CONTACT_INFO.email}`} class={styles.gwContactChip}>
                    <SvgIcon name="email" class={styles.gwChipIcon} />
                    <div class={styles.gwChipContent}>
                      <span class={styles.gwChipLabel}>Email</span>
                      <span class={styles.gwChipValue}>{CONTACT_INFO.email}</span>
                    </div>
                  </a>
                  <a href={COMPANY.website} target="_blank" rel="noopener noreferrer" class={styles.gwContactChip}>
                    <SvgIcon name="website" class={styles.gwChipIcon} />
                    <div class={styles.gwChipContent}>
                      <span class={styles.gwChipLabel}>Website</span>
                      <span class={styles.gwChipValue}>{COMPANY.website}</span>
                    </div>
                  </a>
                  <div class={styles.gwContactChip}>
                    <SvgIcon name="dev" class={styles.gwChipIcon} />
                    <div class={styles.gwChipContent}>
                      <span class={styles.gwChipLabel}>Developer</span>
                      <span class={styles.gwChipValue}>{COMPANY.name}</span>
                    </div>
                  </div>
                </div>

                <div class={styles.gwResponseStrip}>
                  <div class={styles.gwResponseIconWrap}>
                    <SvgIcon name="clock-ring" class={styles.gwResponseIcon} />
                  </div>
                  <p class={styles.gwResponseText}>
                    We typically respond to all inquiries within <strong>{CONTACT_INFO.responseTime}</strong>.
                    Your satisfaction matters to us.
                  </p>
                </div>
                          </DocumentSectionCard>
    </>
  );
});
