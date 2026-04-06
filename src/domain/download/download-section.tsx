import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import shellStyles from "./download-shell.module.css";
import ctaStyles from "./download-cta.module.css";
import dockStyles from "./download-dock.module.css";
import previewStyles from "./download-preview.module.css";
import trustStyles from "./download-trust.module.css";
import miscStyles from "./download-misc.module.css";
const styles: Record<string, string> = { ...shellStyles, ...ctaStyles, ...dockStyles, ...previewStyles, ...trustStyles, ...miscStyles };
import { Container } from "@/shared/container/container";
import { classMerge } from "@/utilities/class-merge";
import {
  STORE_URLS,
  PLATFORM_OPTIONS,
} from "@/constants/downloads";
import { SCROLL_THRESHOLD } from "@/constants/timings";
import { PLATFORM_ICONS, CONVERSION_PREVIEW, TRUST_SIGNALS } from "@/constants/download";

export const DownloadSection = component$(() => {
  const isVisible = useSignal(false);

  useVisibleTask$(({ cleanup }) => {
    const el = document.getElementById("download");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.disconnect();
        }
      },
      { threshold: SCROLL_THRESHOLD.DOWNLOAD_OBSERVER_THRESHOLD }
    );

    observer.observe(el);
    cleanup(() => observer.disconnect());
  });

  const v = isVisible.value;

  return (
    <section class={styles.section} id="download">

      <div class={styles.backdrop} aria-hidden="true">
        <div class={styles.backdropOrb} />
        <div class={styles.backdropOrb} />
        <div class={styles.backdropOrb} />
      </div>

      <div class={styles.frame}>
        <Container>

          <div class={styles.splitPanel}>

            <div class={styles.contentCol}>
              <div class={classMerge(styles.revealUp, v && styles.visible)}>
                <span class={styles.eyebrow}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  Get CalConversion
                </span>
              </div>

              <div
                class={classMerge(
                  styles.revealUp,
                  styles.delay1,
                  v && styles.visible
                )}
              >
                <h2 class={styles.headline}>
                  One App.
                  <span class={styles.headlineAccent}>
                    Every Conversion.
                  </span>
                </h2>
              </div>

              <div
                class={classMerge(
                  styles.revealUp,
                  styles.delay2,
                  v && styles.visible
                )}
              >
                <p class={styles.description}>
                  500+ units across currency, distance, apparel, data storage,
                  and weight — powered by 11 cross-verified rate providers with
                  built-in math expressions. Free on iOS and Android. No account
                  needed. Works completely offline.
                </p>
              </div>

              <div
                class={classMerge(
                  styles.revealUp,
                  styles.delay3,
                  v && styles.visible
                )}
              >
                <div class={styles.trustRow}>
                  {TRUST_SIGNALS.map((signal) => (
                    <div key={signal} class={styles.trustItem}>
                      <span class={styles.trustIcon}>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {signal}
                    </div>
                  ))}
                </div>
              </div>

              <div
                class={classMerge(
                  styles.revealUp,
                  styles.delay4,
                  v && styles.visible
                )}
              >
                <div class={styles.ctaRow}>
                  <a
                    class={classMerge(styles.storeBtn, styles.ctaPrimary)}
                    href={STORE_URLS.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download on the App Store"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d={PLATFORM_ICONS.ios} />
                    </svg>
                    <span class={styles.storeBtnText}>
                      <span class={styles.storeBtnSmall}>Download on the</span>
                      <span class={styles.storeBtnName}>App Store</span>
                    </span>
                  </a>
                  <a
                    class={classMerge(styles.storeBtn, styles.ctaSecondary)}
                    href={STORE_URLS.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get it on Google Play"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d={PLATFORM_ICONS.android} />
                    </svg>
                    <span class={styles.storeBtnText}>
                      <span class={styles.storeBtnSmall}>Get it on</span>
                      <span class={styles.storeBtnName}>Google Play</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div class={styles.showcaseCol}>

              <div
                class={classMerge(
                  styles.revealRight,
                  v && styles.visible
                )}
              >
                <div class={styles.previewCard}>
                  <div class={styles.previewHeader}>
                    <span class={styles.previewTitle}>
                      Multi-Target Preview
                    </span>
                    <span class={styles.previewLive}>
                      <span class={styles.liveDot} />
                      Live
                    </span>
                  </div>

                  <div class={styles.sourceRow}>
                    <span class={styles.sourceValue}>
                      {CONVERSION_PREVIEW.source.value}
                    </span>
                    <span class={styles.sourceCurrency}>
                      {CONVERSION_PREVIEW.source.code}
                    </span>
                    <span class={styles.sourceLabel}>
                      {CONVERSION_PREVIEW.source.label}
                    </span>
                  </div>

                  <div class={styles.targetGrid}>
                    {CONVERSION_PREVIEW.targets.map((t) => (
                      <div key={t.code} class={styles.targetRow}>
                        <span class={styles.targetValue}>{t.value}</span>
                        <span class={styles.targetCode}>
                          {t.code} · {t.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div
                class={classMerge(
                  styles.revealRight,
                  styles.delay2,
                  v && styles.visible
                )}
              >
                <div class={styles.dockSection}>
                  <div class={styles.dockLabel}>
                    <span class={styles.dockLabelText}>
                      Platform Availability
                    </span>
                    <span class={styles.dockLabelLine} />
                  </div>

                  <div class={styles.dockBar}>
                    {PLATFORM_OPTIONS.map((p) => (
                      <a
                        key={p.id}
                        class={classMerge(
                          styles.dockItem,
                          p.available ? styles.dockAvailable : styles.dockSoon
                        )}
                        href={p.available ? p.href : undefined}
                        target={p.available ? "_blank" : undefined}
                        rel={p.available ? "noopener noreferrer" : undefined}
                        aria-label={`${p.label} — ${p.sublabel}`}
                      >
                        <div
                          class={classMerge(
                            styles.dockIcon,
                            p.available
                              ? styles.dockIconLive
                              : styles.dockIconSoon
                          )}
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d={PLATFORM_ICONS[p.id]} />
                          </svg>
                        </div>
                        <span class={styles.dockName}>{p.label}</span>
                        <span
                          class={classMerge(
                            styles.dockStatus,
                            p.available
                              ? styles.dockStatusLive
                              : styles.dockStatusSoon
                          )}
                        >
                          {p.sublabel}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </Container>
      </div>
    </section>
  );
});
