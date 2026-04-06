import { component$ } from "@builder.io/qwik";
import { DocumentSectionCard } from "@/shared/document-layout/document-section-card";
import { documentStyles as styles } from "@/shared/document-layout/document-layout-styles";
import { SvgIcon } from "@/shared/document-layout/svg-icon";
import { classMerge } from "@/utilities/class-merge";
import { COMPANY } from "@/constants/brand";

export const TermsSections2 = component$(() => {
  return (
    <>
                        <DocumentSectionCard id="exchange-rates" icon="trending-up" num="06" title="Exchange Rate Accuracy & Disclaimer">

                <p class={styles.bodyText}>
                  CalConversion aggregates exchange rate data from 11 independent third-party providers to maximize
                  accuracy and reliability. However:
                </p>
                <div class={styles.featureList}>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Exchange rates are indicative, not definitive.</strong> Rates may differ from those
                      offered by banks, money changers, forex brokers, or cryptocurrency exchanges. CalConversion
                      displays market reference rates, not transactional rates.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Rates are subject to delays.</strong> While CalConversion polls for updated rates every
                      60 seconds during active use, real-time market conditions may change between updates.
                      Cryptocurrency and stock market rates from supplemental providers refresh approximately
                      every 30 minutes.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>No financial advice.</strong> CalConversion is a utility tool, not a financial advisory
                      service. Conversion results should not be used as the sole basis for financial transactions,
                      investment decisions, trading activities, or any other decisions involving monetary risk.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Offline rates may be stale.</strong> When using the app without an internet connection,
                      cached rates reflect the last successful fetch and may be hours or days old depending on when
                      you last had connectivity.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Provider availability.</strong> Third-party rate providers may experience downtime,
                      rate-limit requests, or discontinue service. CalConversion implements automatic failover, but
                      temporary gaps in coverage are possible.
                    </span>
                  </div>
                </div>
                          </DocumentSectionCard>
                        <DocumentSectionCard id="unit-accuracy" icon="server" num="07" title="Unit Conversion Accuracy">

                <p class={styles.bodyText}>
                  For non-currency categories (Distance, Apparel, Data Storage, Mass/Weight), CalConversion uses
                  mathematically precise conversion factors. However:
                </p>
                <div class={styles.featureList}>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Apparel sizing is approximate.</strong> Clothing and shoe size standards vary between
                      brands, manufacturers, and regions. CalConversion provides standardized conversion tables based
                      on commonly accepted international sizing charts, but individual fit may vary.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Historical and traditional units.</strong> Conversion factors for historical measurement
                      systems (e.g., Biblical, Ottoman, Celtic, Polynesian units) are derived from scholarly and
                      reference sources but may have inherent variability due to regional or temporal differences.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Floating-point precision.</strong> Conversion results are computed using double-precision
                      floating-point arithmetic (up to 15 decimal places) and may exhibit minor rounding differences
                      compared to arbitrary-precision calculations.
                    </span>
                  </div>
                </div>
                          </DocumentSectionCard>
                        <DocumentSectionCard id="liability" icon="shield" num="08" title="Limitation of Liability">

                <div class={styles.highlightBox}>
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:
                </div>
                <div class={styles.featureList}>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      The App is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, whether express,
                      implied, statutory, or otherwise, including but not limited to implied warranties of
                      merchantability, fitness for a particular purpose, and non-infringement.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      {COMPANY.name} does not warrant that the App will be uninterrupted, error-free, secure, or
                      free of harmful components.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      In no event shall {COMPANY.name}, its officers, directors, employees, agents, or affiliates
                      be liable for any direct, indirect, incidental, special, consequential, or punitive damages
                      arising out of or in connection with your use of the App, including but not limited to
                      financial losses resulting from reliance on conversion data, exchange rates, or unit
                      conversion results.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      This limitation applies regardless of the legal theory on which the claim is based, including
                      breach of contract, tort (including negligence), strict liability, or any other basis.
                    </span>
                  </div>
                </div>
                          </DocumentSectionCard>
                        <DocumentSectionCard id="third-party" icon="world" num="09" title="Third-Party Services">

                <p class={styles.bodyText}>
                  CalConversion relies on third-party data providers for exchange rate information (as detailed in
                  our Privacy Policy). Your use of the App is also subject to the terms and conditions of:
                </p>
                <div class={styles.featureList}>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      Apple's App Store Terms of Service (for iOS users)
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      Google Play Terms of Service (for Android users)
                    </span>
                  </div>
                </div>
                <p class={styles.bodyText}>
                  {COMPANY.name} is not responsible for the availability, accuracy, or policies of third-party
                  service providers. In the event that a third-party provider discontinues its service, modifies
                  its terms, or becomes unavailable, {COMPANY.name} will make reasonable efforts to maintain App
                  functionality through alternative providers or cached data.
                </p>
                          </DocumentSectionCard>
                        <DocumentSectionCard id="bug-reports" icon="bug" num="10" title="Bug Reports & User Submissions">

                <p class={styles.bodyText}>
                  When you submit a bug report through the App's built-in bug reporting feature:
                </p>
                <div class={styles.featureList}>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      You grant {COMPANY.name} a non-exclusive, royalty-free right to use the information in your
                      report (including attached screenshots) solely for the purpose of diagnosing and resolving
                      software issues.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      Bug reports are transmitted via authenticated SMTP with STARTTLS encryption and delivered
                      directly to the development team.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      You are responsible for not including sensitive personal information (e.g., passwords,
                      financial account numbers) in bug report descriptions or attachments.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      Feature requests and suggestions submitted through the bug reporting system may be
                      implemented at {COMPANY.name}'s discretion without obligation or compensation.
                    </span>
                  </div>
                </div>
                          </DocumentSectionCard>
                        <DocumentSectionCard id="ip" icon="lock" num="11" title="Intellectual Property">

                <p class={styles.bodyText}>
                  The CalConversion name, logo, user interface designs, source code, documentation, and all
                  associated intellectual property are owned by {COMPANY.name} and are protected by applicable
                  intellectual property laws. Nothing in these Terms grants you any right, title, or interest in
                  the App beyond the limited license set forth in Section 4.
                </p>
                          </DocumentSectionCard>
    </>
  );
});
