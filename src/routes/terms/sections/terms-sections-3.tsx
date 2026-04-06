import { component$ } from "@builder.io/qwik";
import { DocumentSectionCard } from "@/shared/document-layout/document-section-card";
import { documentStyles as styles } from "@/shared/document-layout/document-layout-styles";
import { SvgIcon } from "@/shared/document-layout/svg-icon";
import { classMerge } from "@/utilities/class-merge";
import { COMPANY } from "@/constants/brand";
import { RoutePath } from "@/enums/route-path";

export const TermsSections3 = component$(() => {
  return (
    <>
                        <DocumentSectionCard id="termination" icon="clock" num="12" title="Termination">

                <p class={styles.bodyText}>
                  {COMPANY.name} reserves the right to terminate or suspend your access to the App at any time,
                  without notice, for conduct that it believes violates these Terms or is otherwise harmful to the
                  App, its users, or the interests of {COMPANY.name}. Upon termination, your license to use the
                  App is immediately revoked, and you must uninstall the App from all devices.
                </p>
                <p class={styles.bodyText}>
                  You may terminate this agreement at any time by uninstalling the App. Upon uninstall, all locally
                  stored data is permanently deleted.
                </p>
                          </DocumentSectionCard>
                        <DocumentSectionCard id="governing-law" icon="globe" num="13" title="Governing Law & Dispute Resolution">

                <p class={styles.bodyText}>
                  These Terms shall be governed by and construed in accordance with the laws of the Republic of
                  Indonesia, without regard to its conflict of law provisions. Any disputes arising from these
                  Terms or your use of the App shall be resolved through good-faith negotiation. If negotiation
                  fails, disputes shall be submitted to the competent courts in Indonesia.
                </p>
                          </DocumentSectionCard>
                        <DocumentSectionCard id="severability" icon="version" num="14" title="Severability">

                <p class={styles.bodyText}>
                  If any provision of these Terms is found to be unenforceable or invalid by a court of competent
                  jurisdiction, that provision shall be limited or eliminated to the minimum extent necessary, and
                  the remaining provisions of these Terms shall remain in full force and effect.
                </p>
                          </DocumentSectionCard>
                        <DocumentSectionCard id="entire-agreement" icon="version" num="15" title="Entire Agreement">

                <p class={styles.bodyText}>
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you
                  and {COMPANY.name} regarding the use of CalConversion. These Terms supersede any prior
                  agreements, communications, or understandings regarding the App.
                </p>
                          </DocumentSectionCard>
                        <DocumentSectionCard id="changes" icon="refresh" num="16" title="Changes to Terms">

                <p class={styles.bodyText}>
                  We reserve the right to modify these Terms at any time. When we make material changes:
                </p>
                <div class={styles.featureList}>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      The "Last Updated" date at the top of these Terms will be revised.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      Updated Terms will be published on our website and accessible within the App.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      Your continued use of the App after changes constitutes acceptance of the modified Terms.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      If you do not agree to modified Terms, your sole remedy is to uninstall the App.
                    </span>
                  </div>
                </div>
                          </DocumentSectionCard>
                        <DocumentSectionCard id="contact" icon="mail" num="17" title="Contact" class={styles.contactGateway}>

                <div class={styles.gwHero}>
                  <div class={styles.gwHeroGlow} />
                  <div class={styles.gwHeroIconWrap}>
                    <SvgIcon name="headset" class={styles.gwHeroIcon} />
                  </div>
                  <h3 class={styles.gwHeroTitle}>Need Help? We're Here.</h3>
                  <p class={styles.gwHeroSubtitle}>
                    Whether you have questions about these Terms, technical inquiries, or need direct
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
                      Find quick answers to common questions about CalConversion's features,
                      usage, and troubleshooting.
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
                    Your satisfaction matters to us.
                  </p>
                </div>
                          </DocumentSectionCard>
    </>
  );
});
