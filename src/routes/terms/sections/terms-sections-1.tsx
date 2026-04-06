import { component$ } from "@builder.io/qwik";
import { DocumentSectionCard } from "@/shared/document-layout/document-section-card";
import { documentStyles as styles } from "@/shared/document-layout/document-layout-styles";
import { SvgIcon } from "@/shared/document-layout/svg-icon";
import { classMerge } from "@/utilities/class-merge";
import { COMPANY } from "@/constants/brand";

export const TermsSections1 = component$(() => {
  return (
    <>
                        <DocumentSectionCard id="acceptance" icon="shield" num="01" title="Acceptance of Terms">

                <p class={styles.bodyText}>
                  By downloading, installing, accessing, or using the CalConversion mobile application ("the App"),
                  you ("User") agree to be bound by these Terms of Service ("Terms"). If you do not agree to all of
                  these Terms, you must not download, install, or use the App.
                </p>
                <div class={styles.highlightBox}>
                  These Terms constitute a <strong>legally binding agreement</strong> between you
                  and {COMPANY.name} ("{COMPANY.shortName}").
                </div>
                          </DocumentSectionCard>
                        <DocumentSectionCard id="provider" icon="building" num="02" title="Service Provider">

                <p class={styles.bodyText}>
                  CalConversion is developed, published, and maintained by{" "}
                  <a class={styles.link} href={COMPANY.website} target="_blank" rel="noopener noreferrer">
                    {COMPANY.name}
                  </a>. All rights, title, and interest in and to the App — including but not limited to the source
                  code, design, user interface, icons, logos, documentation, and any associated intellectual
                  property — remain the exclusive property of {COMPANY.name}.
                </p>
                          </DocumentSectionCard>
                        <DocumentSectionCard id="description" icon="globe" num="03" title="Description of Service">

                <p class={styles.bodyText}>
                  CalConversion is a cross-platform mobile conversion application available on iOS (App Store) and
                  Android (Google Play) that provides the following services:
                </p>
                <div class={styles.featureList}>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Unit Conversion</strong> across 5 categories: Currency (260+ units including fiat,
                      crypto, and stocks), Distance (144 units), Apparel (18+ countries), Data Storage (60 units),
                      and Mass/Weight (122 units).
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Multi-Target Conversion</strong> that allows simultaneous conversion of a single input
                      value to up to 6 different target units.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Real-Time Exchange Rates</strong> fetched from 11 independent data providers with
                      cross-verification and automatic failover.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Bargain Mode</strong> for two-way currency price comparison with built-in
                      arithmetic operators.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Expression Evaluation</strong> supporting mathematical expressions up to 50 characters
                      with +, −, ×, ÷ operators.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Calculation History</strong> storing up to 50 timestamped conversion records locally on
                      the device.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Offline Support</strong> using locally cached exchange rates when no internet connection
                      is available.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Location-Based Defaults</strong> that automatically detect your country and set
                      appropriate currency defaults.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Three Visual Themes:</strong> Light, Dark, and AMOLED (true black).
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Built-In Bug Reporting</strong> with file attachment support, delivered via SMTP.
                    </span>
                  </div>
                </div>
                          </DocumentSectionCard>
                        <DocumentSectionCard id="license" icon="lock" num="04" title="License Grant">

                <p class={styles.bodyText}>
                  Subject to your compliance with these Terms, {COMPANY.name} grants you a limited, non-exclusive,
                  non-transferable, revocable, non-sublicensable license to download, install, and use the App on
                  any compatible mobile device that you own or control, for both personal and commercial purposes.
                </p>
                <div class={styles.subSection}>
                  <h3 class={styles.subHeading}>4.1 Restrictions</h3>
                  <p class={styles.bodyText}>You may not:</p>
                  <div class={styles.featureList}>
                    <div class={styles.featureItem}>
                      <span class={styles.featureDot} />
                      <span class={styles.featureContent}>
                        Copy, modify, adapt, translate, reverse-engineer, decompile, disassemble, or create
                        derivative works based on the App.
                      </span>
                    </div>
                    <div class={styles.featureItem}>
                      <span class={styles.featureDot} />
                      <span class={styles.featureContent}>
                        Remove, alter, or obscure any proprietary notices, labels, or marks on the App.
                      </span>
                    </div>
                    <div class={styles.featureItem}>
                      <span class={styles.featureDot} />
                      <span class={styles.featureContent}>
                        Use the App for any unlawful purpose or in violation of any applicable laws or regulations.
                      </span>
                    </div>
                    <div class={styles.featureItem}>
                      <span class={styles.featureDot} />
                      <span class={styles.featureContent}>
                        Distribute, sublicense, lease, rent, or lend the App to any third party.
                      </span>
                    </div>
                    <div class={styles.featureItem}>
                      <span class={styles.featureDot} />
                      <span class={styles.featureContent}>
                        Use automated systems, bots, or scripts to access the App's rate-fetching services in a
                        manner that exceeds normal individual use.
                      </span>
                    </div>
                    <div class={styles.featureItem}>
                      <span class={styles.featureDot} />
                      <span class={styles.featureContent}>
                        Attempt to gain unauthorized access to the App's backend services, API keys, or infrastructure.
                      </span>
                    </div>
                  </div>
                </div>
                          </DocumentSectionCard>
                        <DocumentSectionCard id="pricing" icon="dollar" num="05" title="Pricing & In-App Purchases">

                <p class={styles.bodyText}>
                  CalConversion is provided completely free of charge. There are no subscriptions, premium tiers,
                  in-app purchases, paywalls, or hidden fees. All features described in Section 3 are available to
                  all users without any payment obligation.
                </p>
                <div class={styles.highlightBox}>
                  {COMPANY.name} reserves the right to introduce paid features in the future, which would be
                  subject to updated Terms and <strong>communicated clearly to users</strong>.
                </div>
                          </DocumentSectionCard>
    </>
  );
});
