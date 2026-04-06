import { component$, useSignal, useComputed$, useVisibleTask$ } from "@builder.io/qwik";
import shellStyles from "./categories-shell.module.css";
import hubStyles from "./categories-hub.module.css";
import identityStyles from "./categories-identity.module.css";
import stageStyles from "./categories-stage.module.css";
import examplesStyles from "./categories-examples.module.css";
import chipsStyles from "./categories-chips.module.css";
import miscStyles from "./categories-misc.module.css";
const styles: Record<string, string> = { ...shellStyles, ...hubStyles, ...identityStyles, ...stageStyles, ...examplesStyles, ...chipsStyles, ...miscStyles };
import { Container } from "@/shared/container/container";
import { ScrollReveal } from "@/shared/scroll-reveal/scroll-reveal";
import { GradientText } from "@/shared/gradient-text/gradient-text";
import { Icon } from "@/shared/icon/icon";
import { classMerge } from "@/utilities/class-merge";
import { CATEGORIES } from "@/constants/categories";
import { CAROUSEL_INTERVAL, ANIMATION_DELAY } from "@/constants/timings";

const AUTO_INTERVAL = CAROUSEL_INTERVAL.CATEGORIES_MS;

export const CategoriesSection = component$(() => {
  const activeIndex = useSignal(0);
  const resetKey = useSignal(0);

  const active = useComputed$(() => CATEGORIES[activeIndex.value]);

  useVisibleTask$(({ cleanup, track }) => {
    track(() => resetKey.value);

    const id = setInterval(() => {
      activeIndex.value = (activeIndex.value + 1) % CATEGORIES.length;
    }, AUTO_INTERVAL);

    cleanup(() => clearInterval(id));
  });

  return (
    <section
      class={styles.section}
      id="categories"
      style={{
        "--constellation-glow": `color-mix(in srgb, ${CATEGORIES[activeIndex.value].gradientStart} 6%, transparent)`,
      } as Record<string, string>}
    >
      <Container>

        <ScrollReveal>
          <div class={styles.header}>
            <span class={styles.eyebrow}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
              </svg>
              Five Worlds of Conversion
            </span>
            <h2 class={styles.title}>
              <GradientText>500+ Units. Five Categories. Zero Limits.</GradientText>
            </h2>
            <p class={styles.subtitle}>
              Explore every category CalConversion covers — from fiat currencies and
              cryptocurrencies to historic measurement systems from 18+ civilizations.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div class={styles.hubRing} role="tablist" aria-label="Conversion categories">
            {CATEGORIES.map((cat, i) => {
              const isActive = activeIndex.value === i;
              return (
                <button
                  key={cat.id}
                  class={classMerge(
                    styles.hubNode,
                    isActive && styles.hubNodeActive
                  )}
                  role="tab"
                  aria-selected={isActive}
                  onClick$={() => {
                    activeIndex.value = i;
                    resetKey.value++;
                  }}
                  style={{
                    "--node-color-start": cat.gradientStart,
                    "--node-color-end": cat.gradientEnd,
                  } as Record<string, string>}
                >
                  <div class={styles.hubIcon}>
                    <Icon pathData={cat.iconPath} size={18} color="white" />
                  </div>
                  <span class={styles.hubLabel}>{cat.name}</span>
                  <span class={styles.hubCount}>{cat.unitCount} units</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        <div
          class={styles.stage}
          key={active.value.id}
          style={{
            "--stage-color-start": active.value.gradientStart,
            "--stage-color-end": active.value.gradientEnd,
          } as Record<string, string>}
        >
          <div class={styles.stageCard}>

            <div class={styles.identityPanel}>
              <div class={styles.identityTop}>
                <div class={styles.identityIcon}>
                  <Icon pathData={active.value.iconPath} size={28} color="white" />
                </div>
                <div class={styles.identityMeta}>
                  <h3 class={styles.identityName}>
                    <GradientText
                      gradientStart={active.value.gradientStart}
                      gradientEnd={active.value.gradientEnd}
                    >
                      {active.value.name}
                    </GradientText>
                  </h3>
                  <span class={styles.identityTagline}>{active.value.tagline}</span>
                </div>
              </div>

              <div class={styles.identityStats}>
                <span class={styles.statNumber}>{active.value.unitCount}</span>
                <span class={styles.statSuffix}>units</span>
              </div>

              <p class={styles.identityDescription}>{active.value.description}</p>
            </div>

            <div class={styles.stageDivider} aria-hidden="true" />

            <div class={styles.subcategoryPanel}>
              <span class={styles.subcategoryTitle}>Sub-categories</span>
              <div class={styles.subcategoryGrid}>
                {active.value.subcategories.map((sub, i) => (
                  <span
                    key={sub.name}
                    class={styles.subcategoryChip}
                    style={{ "--chip-delay": `${i * ANIMATION_DELAY.CATEGORIES_CHIP_STAGGER_MS}ms` } as Record<string, string>}
                  >
                    <span class={styles.chipDot} aria-hidden="true" />
                    {sub.name}
                  </span>
                ))}
              </div>

              {active.value.subcategories.some((s) => s.examples && s.examples.length > 0) && (
                <div class={styles.examplesSection}>
                  <span class={styles.examplesTitle}>Popular Units</span>
                  <div class={styles.examplesList}>
                    {active.value.subcategories
                      .filter((s) => s.examples && s.examples.length > 0)
                      .flatMap((s) => s.examples!)
                      .map((ex) => (
                        <span key={ex} class={styles.exampleTag}>{ex}</span>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <ScrollReveal>
          <div class={styles.totalBar}>
            <div class={styles.totalStat}>
              <span class={styles.totalValue}>5</span>
              <span class={styles.totalLabel}>Categories</span>
            </div>
            <div class={styles.totalSep} aria-hidden="true" />
            <div class={styles.totalStat}>
              <span class={styles.totalValue}>586+</span>
              <span class={styles.totalLabel}>Total Units</span>
            </div>
            <div class={styles.totalSep} aria-hidden="true" />
            <div class={styles.totalStat}>
              <span class={styles.totalValue}>18+</span>
              <span class={styles.totalLabel}>Countries</span>
            </div>
            <div class={styles.totalSep} aria-hidden="true" />
            <div class={styles.totalStat}>
              <span class={styles.totalValue}>14+</span>
              <span class={styles.totalLabel}>Historic Systems</span>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
});
