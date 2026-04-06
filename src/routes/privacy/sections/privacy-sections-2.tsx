import { component$ } from "@builder.io/qwik";
import { DocumentSectionCard } from "@/shared/document-layout/document-section-card";
import { documentStyles as styles } from "@/shared/document-layout/document-layout-styles";
import { SvgIcon } from "@/shared/document-layout/svg-icon";
import { classMerge } from "@/utilities/class-merge";

export const PrivacySections2 = component$(() => {
  return (
    <>
                        <DocumentSectionCard id="network" icon="globe" num="05" title="Network Requests & Third-Party Data Providers">

                <p class={styles.bodyText}>
                  CalConversion connects to the internet to fetch live exchange rates. These are the categories of
                  network requests made by the app and the data transmitted:
                </p>

                <div class={styles.providerPanels}>

                  <div class={classMerge(styles.providerPanel, styles.providerPanelFiat)}>
                    <div class={styles.providerPanelHeader}>
                      <div class={styles.providerPanelIconWrap}>
                        <SvgIcon name="dollar" class={styles.providerPanelIcon} />
                      </div>
                      <div class={styles.providerPanelTitleGroup}>
                        <h3 class={styles.providerPanelTitle}>Fiat Currency</h3>
                        <span class={styles.providerPanelBadge}>3 providers</span>
                      </div>
                    </div>
                    <div class={styles.providerList}>
                      <div class={styles.providerRow}>
                        <span class={styles.providerRowDot} />
                        <span class={styles.providerRowName}>Open Exchange Rates</span>
                        <span class={styles.providerRowRole}>Primary (160+ currencies)</span>
                      </div>
                      <div class={styles.providerRow}>
                        <span class={styles.providerRowDot} />
                        <span class={styles.providerRowName}>Frankfurter</span>
                        <span class={styles.providerRowRole}>Secondary / verification</span>
                      </div>
                      <div class={styles.providerRow}>
                        <span class={styles.providerRowDot} />
                        <span class={styles.providerRowName}>CurrencyAPI</span>
                        <span class={styles.providerRowRole}>Tertiary coverage</span>
                      </div>
                    </div>
                  </div>

                  <div class={classMerge(styles.providerPanel, styles.providerPanelCrypto)}>
                    <div class={styles.providerPanelHeader}>
                      <div class={styles.providerPanelIconWrap}>
                        <SvgIcon name="bitcoin" class={styles.providerPanelIcon} />
                      </div>
                      <div class={styles.providerPanelTitleGroup}>
                        <h3 class={styles.providerPanelTitle}>Cryptocurrency</h3>
                        <span class={styles.providerPanelBadge}>2 providers</span>
                      </div>
                    </div>
                    <div class={styles.providerList}>
                      <div class={styles.providerRow}>
                        <span class={styles.providerRowDot} />
                        <span class={styles.providerRowName}>CoinPaprika</span>
                        <span class={styles.providerRowRole}>Discovery & rates (80+ tokens)</span>
                      </div>
                      <div class={styles.providerRow}>
                        <span class={styles.providerRowDot} />
                        <span class={styles.providerRowName}>CoinLore</span>
                        <span class={styles.providerRowRole}>Supplementary rates</span>
                      </div>
                    </div>
                  </div>

                  <div class={classMerge(styles.providerPanel, styles.providerPanelStocks)}>
                    <div class={styles.providerPanelHeader}>
                      <div class={styles.providerPanelIconWrap}>
                        <SvgIcon name="trending-up" class={styles.providerPanelIcon} />
                      </div>
                      <div class={styles.providerPanelTitleGroup}>
                        <h3 class={styles.providerPanelTitle}>Stock Market</h3>
                        <span class={styles.providerPanelBadge}>6 providers</span>
                      </div>
                    </div>
                    <div class={styles.providerList}>
                      <div class={styles.providerRow}>
                        <span class={styles.providerRowDot} />
                        <span class={styles.providerRowName}>Financial Modeling Prep</span>
                        <span class={styles.providerRowRole}>Stock price quotes</span>
                      </div>
                      <div class={styles.providerRow}>
                        <span class={styles.providerRowDot} />
                        <span class={styles.providerRowName}>Twelve Data</span>
                        <span class={styles.providerRowRole}>Market data & quotes</span>
                      </div>
                      <div class={styles.providerRow}>
                        <span class={styles.providerRowDot} />
                        <span class={styles.providerRowName}>Finnhub</span>
                        <span class={styles.providerRowRole}>Real-time stock data</span>
                      </div>
                      <div class={styles.providerRow}>
                        <span class={styles.providerRowDot} />
                        <span class={styles.providerRowName}>Alpha Vantage</span>
                        <span class={styles.providerRowRole}>Equity price data</span>
                      </div>
                      <div class={styles.providerRow}>
                        <span class={styles.providerRowDot} />
                        <span class={styles.providerRowName}>Marketstack</span>
                        <span class={styles.providerRowRole}>Global stock data</span>
                      </div>
                      <div class={styles.providerRow}>
                        <span class={styles.providerRowDot} />
                        <span class={styles.providerRowName}>EODHD</span>
                        <span class={styles.providerRowRole}>End-of-day historical</span>
                      </div>
                    </div>
                  </div>

                </div>

                <div class={styles.subSection}>
                  <h3 class={styles.subHeading}>5.4 Data Transmitted in Each Request</h3>
                  <p class={styles.bodyText}>When fetching exchange rates, the only data transmitted is:</p>
                  <div class={styles.featureList}>
                    <div class={styles.featureItem}>
                      <span class={styles.featureDot} />
                      <span class={styles.featureContent}>
                        The HTTP request itself (URL, method, headers as required by standard HTTP/HTTPS protocols)
                      </span>
                    </div>
                    <div class={styles.featureItem}>
                      <span class={styles.featureDot} />
                      <span class={styles.featureContent}>
                        API authentication keys (pre-configured in the app, not user-specific)
                      </span>
                    </div>
                    <div class={styles.featureItem}>
                      <span class={styles.featureDot} />
                      <span class={styles.featureContent}>
                        Your device's IP address (inherent to any network connection; not stored or processed by us)
                      </span>
                    </div>
                  </div>
                  <div class={styles.highlightBox}>
                    We do not transmit any user-identifiable information, conversion inputs, conversion results, or device
                    identifiers in rate-fetching requests. All requests use <strong>HTTPS encryption</strong>.
                  </div>
                </div>
                          </DocumentSectionCard>
                        <DocumentSectionCard id="bug-reports" icon="bug" num="06" title="Bug Report Submissions">

                <p class={styles.bodyText}>
                  CalConversion includes a built-in bug reporting feature. When you voluntarily submit a bug report,
                  the following information is transmitted via SMTP (email):
                </p>
                <div class={styles.featureList}>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Your description</strong> of the issue (text you write manually)
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Selected bug category</strong> (chosen from a predefined list)
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Device metadata</strong> automatically attached: device model, operating system version,
                      app version, and screen resolution
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Optional attachments:</strong> Screenshots or other files you choose to include
                    </span>
                  </div>
                </div>
                <div class={styles.highlightBox}>
                  Bug reports are delivered directly to the development team's email address via authenticated SMTP with
                  TLS/STARTTLS encryption. No intermediary service processes, reads, or stores the reports. Bug reports do
                  not include your email address or any personal contact information unless you voluntarily include it in
                  the description text.
                </div>
                          </DocumentSectionCard>
                        <DocumentSectionCard id="security" icon="lock" num="07" title="Data Security">

                <p class={styles.bodyText}>
                  We implement the following technical measures to protect your data:
                </p>
                <div class={styles.featureList}>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>HTTPS/TLS:</strong> All network requests to exchange rate providers are made over HTTPS
                      with TLS encryption.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>SMTP with STARTTLS:</strong> Bug reports are transmitted via authenticated SMTP with
                      STARTTLS encryption, with configurable timeout thresholds to prevent hanging connections.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Local-only storage:</strong> Conversion history, cached rates, and preferences are stored
                      in platform-native sandboxed storage (SharedPreferences / UserDefaults) that is private to the
                      CalConversion app and not accessible to other apps on your device.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>No cloud sync:</strong> Data is not replicated to any cloud service, cloud database, or
                      remote backup system controlled by us.
                    </span>
                  </div>
                  <div class={styles.featureItem}>
                    <span class={styles.featureDot} />
                    <span class={styles.featureContent}>
                      <strong>Rate polling:</strong> Exchange rates are refreshed automatically every 60 seconds while
                      the app is active, with automatic failover between providers if one is unavailable. Supplemental
                      coverage (crypto assets, stock listings) refreshes every 30 minutes.
                    </span>
                  </div>
                </div>
                          </DocumentSectionCard>
    </>
  );
});
