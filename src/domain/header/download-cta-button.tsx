import { component$ } from "@builder.io/qwik";
import styles from "./download-cta-button.module.css";

export const DownloadCtaButton = component$(() => {
  return (
    <div class={styles.wrapper}>
      <a class={styles.cta} href="/#download">
        <span class={styles.ctaGlow} aria-hidden="true" />
        <span class={styles.ctaContent}>
          <svg
            class={styles.ctaIcon}
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10 3v10m0 0l-3.5-3.5M10 13l3.5-3.5"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 16h12"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
            />
          </svg>
          <span class={styles.ctaText}>Get the App</span>
          <span class={styles.ctaChevron} aria-hidden="true">
            <svg viewBox="0 0 8 12" fill="none">
              <path
                d="M1.5 1l5 5-5 5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </span>
      </a>
    </div>
  );
});
