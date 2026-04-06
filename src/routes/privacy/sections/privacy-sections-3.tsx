import { component$ } from "@builder.io/qwik";
import { DocumentSectionCard } from "@/shared/document-layout/document-section-card";
import { documentStyles as styles } from "@/shared/document-layout/document-layout-styles";
import { SvgIcon } from "@/shared/document-layout/svg-icon";
import { classMerge } from "@/utilities/class-merge";
import { COMPANY } from "@/constants/brand";
import { RoutePath } from "@/enums/route-path";

export const PrivacySections3 = component$(() => {
  return (
    <>
                        <DocumentSectionCard id="children" icon="child" num="08" title="Children's Privacy">

                <p class={styles.bodyText}>
                  CalConversion does not knowingly collect any personal information from children under the age of 13
                  (or the relevant age threshold in your jurisdiction). The app does not require account creation, does
                  not collect personal identifiers, and does not display targeted advertising. It is suitable for users
                  of all ages.
                </p>
                          </DocumentSectionCard>
                        <DocumentSectionCard id="retention" icon="clock" num="09" title="Data Retention">

                <p class={styles.bodyText}>
                  Since all user data is stored locally on your device, data retention is entirely under your control:
                </p>
                <div class={styles.featureList}>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      Conversion history is retained on your device until you manually clear it from the app or clear
                      the app's data from device settings.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      The maximum history capacity is 50 entries; the oldest entry is automatically removed when a new
                      one is added beyond this limit.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      Cached exchange rates are overwritten each time new rates are fetched successfully.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      Uninstalling the app permanently deletes all locally stored data.
                    </span>
                  </div>
                </div>
                          </DocumentSectionCard>
                        <DocumentSectionCard id="your-rights" icon="user" num="10" title="Your Rights">

                <p class={styles.bodyText}>
                  Because CalConversion does not collect, transmit, or store personal data on external servers,
                  traditional data subject rights (access, correction, deletion, portability) are directly exercisable
                  by you through your device:
                </p>
                <div class={styles.featureList}>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Access:</strong> All your data is visible within the app (conversion history, preferences).
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Deletion:</strong> Clear app data from your device settings or uninstall the app.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Portability:</strong> Conversion history can be viewed and manually recorded from the
                      app's history screen.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Restriction:</strong> You can deny location permissions and continue using the app with
                      default settings.
                    </span>
                  </div>
                </div>
                <p class={styles.bodyText}>
                  If you have submitted a bug report and wish to have its contents deleted from our email systems,
                  contact us at the address below.
                </p>
                          </DocumentSectionCard>
                        <DocumentSectionCard id="international" icon="world" num="11" title="International Users">

                <p class={styles.bodyText}>
                  CalConversion is designed for users worldwide. Since user data is processed and stored locally on
                  your device and is not transmitted to external servers (except as described in sections 5 and 6 above),
                  cross-border data transfer concerns are minimized. Exchange rate API providers may be hosted in various
                  jurisdictions; however, the only data transmitted to them is the API request itself, which does not
                  contain personal information.
                </p>
                          </DocumentSectionCard>
                        <DocumentSectionCard id="changes" icon="refresh" num="12" title="Changes to This Policy">

                <p class={styles.bodyText}>
                  We may update this Privacy Policy periodically to reflect changes in our practices, legal
                  requirements, or app functionality. When we make significant changes:
                </p>
                <div class={styles.featureList}>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      The "Last Updated" date at the top of this policy will be revised.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      The updated policy will be published on our website and accessible within the app.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      Your continued use of CalConversion after changes constitutes acceptance of the updated policy.
                    </span>
                  </div>
                </div>
                <p class={styles.bodyText}>
                  We encourage you to review this policy periodically.
                </p>
                          </DocumentSectionCard>
                        <DocumentSectionCard id="contact" icon="mail" num="13" title="Contact Us" class={styles.contactGateway}>

                <div class={styles.gwHero}>
                  <div class={styles.gwHeroGlow} />
                  <div class={styles.gwHeroIconWrap}>
                    <SvgIcon name="headset" class={styles.gwHeroIcon} />
                  </div>
                  <h3 class={styles.gwHeroTitle}>Need Help? We're Here.</h3>
                  <p class={styles.gwHeroSubtitle}>
                    Whether you have privacy-related inquiries, technical questions, or need direct
                    assistance — our support center has you covered.
                  </p>
                </div>

                <div class={styles.gwPathwayGrid}>

                  <div class={styles.gwPathwayCard}>
                    <div class={styles.gwPathwayIconWrap}>
                      <SvgIcon name="faq" class={styles.gwPathwayIcon} />
                    </div>
                    <h4 class={styles.gwPathwayTitle}>Browse FAQs</h4>
                    <p class={styles.gwPathwayDesc}>
                      Find quick answers to common questions about CalConversion's privacy practices,
                      data handling, features, and troubleshooting.
                    </p>
                    <a href={`${RoutePath.Support}#faq`} class={styles.gwPathwayCta}>
                      Visit Support Center
                      <SvgIcon name="arrow-right" class={styles.gwCtaArrow} />
                    </a>
                  </div>

                  <div class={styles.gwPathwayCard}>
                    <div class={classMerge(styles.gwPathwayIconWrap, styles.gwPathwayIconAlt)}>
                      <SvgIcon name="form" class={styles.gwPathwayIcon} />
                    </div>
                    <h4 class={styles.gwPathwayTitle}>Contact Our Team</h4>
                    <p class={styles.gwPathwayDesc}>
                      Can't find what you need? Submit a detailed request with rich Markdown
                      formatting and attach images, videos, or documents for faster resolution.
                    </p>
                    <a href={`${RoutePath.Support}#contact`} class={classMerge(styles.gwPathwayCta, styles.gwPathwayCtaAlt)}>
                      Submit a Request
                      <SvgIcon name="arrow-right" class={styles.gwCtaArrow} />
                    </a>
                  </div>
                </div>

                <div class={styles.gwContactRow}>
                  <a href={`mailto:${COMPANY.email}`} class={styles.gwContactChip}>
                    <SvgIcon name="email" class={styles.gwChipIcon} />
                    <div class={styles.gwChipContent}>
                      <span class={styles.gwChipLabel}>Email</span>
                      <span class={styles.gwChipValue}>{COMPANY.email}</span>
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
                    We typically respond to all inquiries within <strong>24–48 hours</strong>.
                    Your privacy matters to us.
                  </p>
                </div>
                          </DocumentSectionCard>
    </>
  );
});
