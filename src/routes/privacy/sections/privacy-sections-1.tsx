import { component$ } from "@builder.io/qwik";
import { DocumentSectionCard } from "@/shared/document-layout/document-section-card";
import { documentStyles as styles } from "@/shared/document-layout/document-layout-styles";
import { SvgIcon } from "@/shared/document-layout/svg-icon";
import { classMerge } from "@/utilities/class-merge";
import { COMPANY } from "@/constants/brand";

export const PrivacySections1 = component$(() => {
  return (
    <>
                        <DocumentSectionCard id="data-controller" icon="building" num="01" title="Data Controller">

                <p class={styles.bodyText}>
                  CalConversion is developed and maintained by{" "}
                  <a class={styles.link} href={COMPANY.website} target="_blank" rel="noopener noreferrer">
                    {COMPANY.name}
                  </a>{" "}
                  ("{COMPANY.shortName}"). This Privacy Policy governs how we collect, process, store, and protect
                  information when you use the CalConversion mobile application on iOS and Android.
                </p>
                <div class={styles.highlightBox}>
                  By installing or using CalConversion, you acknowledge that you have read and understood this policy. Our
                  commitment: <strong>your data stays on your device</strong>.
                </div>
                          </DocumentSectionCard>
                        <DocumentSectionCard id="no-collect" icon="shield" num="02" title="Information We Do Not Collect">

                <p class={styles.bodyText}>
                  CalConversion is designed with a privacy-first philosophy. We want to be explicit about what we
                  do <strong>not</strong> collect:
                </p>
                <div class={styles.featureList}>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      We do <strong>not</strong> require you to create an account, provide your name, email address,
                      phone number, or any other personal identifier to use the app.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      We do <strong>not</strong> collect, store, or transmit your conversion history, input values,
                      or results to any external server. All conversion data remains exclusively on your device.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      We do <strong>not</strong> use analytics tracking, advertising SDKs, user profiling, behavioral
                      tracking, or any third-party analytics service.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      We do <strong>not</strong> sell, rent, share, or monetize any user data in any way.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      We do <strong>not</strong> access your contacts, camera, microphone, calendar, or any other
                      device sensor beyond location (when explicitly granted by you).
                    </span>
                  </div>
                </div>
                          </DocumentSectionCard>
                        <DocumentSectionCard id="local-storage" icon="device" num="03" title="Information Stored Locally on Your Device">

                <p class={styles.bodyText}>
                  CalConversion stores the following data locally on your device using platform-native storage
                  mechanisms (SharedPreferences on Android, UserDefaults on iOS). This data never leaves your device:
                </p>
                <div class={styles.featureList}>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Conversion History:</strong> Up to 50 of your most recent conversions are saved with
                      timestamps, source/target units, input expressions, and results. This data is stored in a
                      local-only preference file and is never synced, uploaded, or backed up to any cloud service
                      controlled by us.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Cached Exchange Rates:</strong> The most recently fetched fiat currency, cryptocurrency,
                      and stock market exchange rates are stored locally so the app works fully offline. Cached rates
                      include the raw rate values and the last update timestamp.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Discovered Currencies:</strong> Metadata about cryptocurrency and stock market tickers
                      discovered from provider APIs (code, name, symbol) is cached locally to populate picker interfaces.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>User Preferences:</strong> Your selected theme (Light, Dark, or AMOLED), preferred rate
                      source selections per currency, and the last-used converter category and unit selections.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Rate Source Preferences:</strong> If you manually select a specific rate provider for a
                      particular currency (e.g., choosing Frankfurter over Open Exchange Rates for EUR), that preference
                      is stored locally.
                    </span>
                  </div>
                </div>
                <div class={styles.highlightBox}>
                  You can clear all locally stored data at any time by clearing the app's data through your device
                  settings, or by uninstalling the app.
                </div>
                          </DocumentSectionCard>
                        <DocumentSectionCard id="location" icon="location" num="04" title="Location Data">

                <p class={styles.bodyText}>
                  CalConversion requests access to your device's location services for a single specific purpose: to
                  automatically detect your country and set the appropriate default currency. Here is exactly how
                  location data is handled:
                </p>
                <div class={styles.featureList}>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Permission is optional.</strong> The app functions fully without location access. If you
                      deny the permission, CalConversion defaults to EUR → USD as the starting currency pair.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Coarse location only.</strong> We use coarse (approximate) location to determine your
                      country code. We do not need or use your precise GPS coordinates.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Processed entirely on-device.</strong> The country code is resolved locally on your device
                      using the platform's reverse geocoding services. Your location coordinates are never transmitted to
                      our servers or to any third party by CalConversion.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Not stored persistently.</strong> The derived country code is used at runtime to select the
                      local currency and is temporarily held in memory. It is not written to persistent storage beyond the
                      resulting default currency selection.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Used only on launch.</strong> Location is checked when you first open the app or when you
                      travel to a new country. CalConversion does not track your location in the background.
                    </span>
                  </div>
                </div>
                          </DocumentSectionCard>
    </>
  );
});
