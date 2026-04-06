import { component$ } from "@builder.io/qwik";
import styles from "./support-cta-button.module.css";

export const SupportCtaButton = component$(() => {
  return (
    <div class={styles.wrapper}>
      <a class={styles.cta} href="/support" aria-label="Get Support">
        <span class={styles.ctaBorder} aria-hidden="true" />
        <span class={styles.ctaContent}>
          <span class={styles.ctaOrb} aria-hidden="true" />
          <svg
            class={styles.ctaIcon}
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
              stroke="currentColor"
              stroke-width="1.4"
            />
            <path
              d="M7.5 7.5a2.5 2.5 0 0 1 4.85.83c0 1.67-2.5 2.5-2.5 2.5"
              stroke="currentColor"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle
              cx="10"
              cy="14"
              r="0.75"
              fill="currentColor"
            />
          </svg>
          <span class={styles.ctaLabel}>Support</span>
        </span>
      </a>
    </div>
  );
});
