import { component$ } from "@builder.io/qwik";
import sidebarStyles from "./features-sidebar.module.css";
import deckStyles from "./features-deck.module.css";
import pillStyles from "./features-pill.module.css";
import baseStyles from "./features-base.module.css";
import { classMerge } from "@/utilities/class-merge";
import { ANIMATION_DELAY } from "@/constants/timings";
import type { Feature } from "@/types/feature";

const styles: Record<string, string> = { ...sidebarStyles, ...deckStyles, ...pillStyles, ...baseStyles };

interface FeatureSpotlightProps {
  active: Feature;
  tierMeta: { label: string; badge: string };
}

export const FeatureSpotlight = component$<FeatureSpotlightProps>(({ active, tierMeta }) => {
  return (
    <div
      class={styles.spotlight}
      style={{
        "--feature-accent": active.accentColor,
        "--glow-color": `color-mix(in srgb, ${active.accentColor} 8%, transparent)`,
      } as Record<string, string>}
    >
      <div class={styles.spotlightGlow} aria-hidden="true" />
      <div class={styles.visualCol}>
        <span class={classMerge(styles.tierBadge, tierMeta.badge)}>
          {active.isExclusive ? (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ) : (
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          )}
          {tierMeta.label}
        </span>
        <div class={styles.iconOrb}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d={active.iconPath} />
          </svg>
        </div>
        <div class={styles.statChips}>
          {active.highlights.slice(0, 3).map((h, i) => (
            <span
              key={`${active.number}-chip-${i}`}
              class={styles.statChip}
              style={{ "--chip-delay": `${i * ANIMATION_DELAY.FEATURES_CHIP_STAGGER_MS + ANIMATION_DELAY.FEATURES_CHIP_BASE_MS}ms` } as Record<string, string>}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {h}
            </span>
          ))}
        </div>
        <span class={styles.featureNum}>{active.number}</span>
      </div>
      <div class={styles.contentCol}>
        <div class={styles.contentInner} key={`content-${active.number}`}>
          {active.isExclusive && (
            <span class={styles.exclusiveBadge}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Only in CalConversion
            </span>
          )}
          <h3 class={styles.contentTitle}>{active.title}</h3>
          <p class={styles.contentDesc}>{active.description}</p>
          <div class={styles.whyBlock}>
            <div class={styles.whyLabel}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Why This Matters
            </div>
            <p>{active.whyItMatters}</p>
          </div>
          <div class={styles.highlights}>
            {active.highlights.map((h) => (
              <span key={h} class={styles.highlightChip}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {h}
              </span>
            ))}
          </div>
          <div class={styles.useCases}>
            <span class={styles.useCasesLabel}>Real-World Scenarios</span>
            {active.useCases.map((uc, i) => (
              <div key={uc} class={styles.useCase}>
                <span class={styles.useCaseNum}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p>{uc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
