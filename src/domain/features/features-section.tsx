import { component$, useSignal, $, useVisibleTask$ } from "@builder.io/qwik";
import headerStyles from "./features-header.module.css";
import sidebarStyles from "./features-sidebar.module.css";
import deckStyles from "./features-deck.module.css";
import pillStyles from "./features-pill.module.css";
import baseStyles from "./features-base.module.css";
const styles: Record<string, string> = { ...headerStyles, ...sidebarStyles, ...deckStyles, ...pillStyles, ...baseStyles };
import { Container } from "@/shared/container/container";
import { ScrollReveal } from "@/shared/scroll-reveal/scroll-reveal";
import { GradientText } from "@/shared/gradient-text/gradient-text";
import { classMerge } from "@/utilities/class-merge";
import { FEATURES, HERO_FEATURES, CORE_FEATURES, UTILITY_FEATURES } from "@/constants/features";
import { CAROUSEL_INTERVAL } from "@/constants/timings";
import type { Feature } from "@/types/feature";
import { FeatureSpotlight } from "./feature-spotlight";

const AUTO_INTERVAL = CAROUSEL_INTERVAL.FEATURES_MS;

const TIER_META: Record<string, { label: string; badge: string }> = {
  hero: { label: "Exclusive", badge: styles.tierHero },
  core: { label: "Essential", badge: styles.tierCore },
  utility: { label: "Quality of Life", badge: styles.tierUtility },
};

const TIER_LABEL: Record<string, string> = {
  hero: "★ Exclusive Features",
  core: "⚡ Essential Tools",
  utility: "✦ Quality of Life",
};

export const FeaturesSection = component$(() => {
  const activeIndex = useSignal(0);
  const resetKey = useSignal(0);
  const pillScrollerRef = useSignal<HTMLElement>();
  const sidebarOpen = useSignal(false);

  const selectFeature = $((index: number) => {
    activeIndex.value = index;
    resetKey.value++;

    const scroller = pillScrollerRef.value;
    if (scroller) {
      const pill = scroller.children[index] as HTMLElement;
      if (pill) {
        pill.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  });

  useVisibleTask$(({ cleanup, track }) => {
    track(() => resetKey.value);

    const id = setInterval(() => {
      activeIndex.value = (activeIndex.value + 1) % FEATURES.length;
    }, AUTO_INTERVAL);

    cleanup(() => clearInterval(id));
  });

  const active: Feature = FEATURES[activeIndex.value];
  const tierMeta = TIER_META[active.tier];

  const groups: { tier: string; features: Feature[]; offset: number }[] = [
    { tier: "hero", features: HERO_FEATURES, offset: 0 },
    { tier: "core", features: CORE_FEATURES, offset: HERO_FEATURES.length },
    { tier: "utility", features: UTILITY_FEATURES, offset: HERO_FEATURES.length + CORE_FEATURES.length },
  ];

  return (
    <section class={styles.section} id="features">

      <div class={styles.ambientBg} aria-hidden="true">
        <div class={styles.ambientOrb1} />
        <div class={styles.ambientOrb2} />
      </div>

      <Container>

        <ScrollReveal>
          <header class={styles.header}>
            <span class={styles.eyebrow}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              9 Precision Features
            </span>
            <h2 class={styles.title}>
              <GradientText>Engineered for</GradientText>
              {" "}Every Conversion
            </h2>
            <p class={styles.subtitle}>
              Three features that exist nowhere else, plus six essential tools
              that redefine what a conversion app can do.
            </p>
          </header>
        </ScrollReveal>

        <ScrollReveal>
          <div class={styles.deck}>

            <div class={styles.pillScroller} ref={pillScrollerRef}>
              {FEATURES.map((f, i) => (
                <button
                  key={`pill-${f.number}`}
                  class={classMerge(
                    styles.pill,
                    activeIndex.value === i && styles.pillActive
                  )}
                  style={{ "--pill-accent": f.accentColor } as Record<string, string>}
                  onClick$={() => selectFeature(i)}
                  aria-label={f.title}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d={f.iconPath} />
                  </svg>
                  <span class={styles.pillLabel}>{f.title}</span>
                </button>
              ))}
            </div>

            <button
              class={styles.sidebarToggle}
              onClick$={() => {
                sidebarOpen.value = !sidebarOpen.value;
              }}
              aria-label={sidebarOpen.value ? "Hide feature list" : "Show feature list"}
              aria-expanded={sidebarOpen.value}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class={[
                  styles.sidebarToggleIcon,
                  sidebarOpen.value && styles.sidebarToggleIconOpen,
                ]}
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <div class={[styles.sidebarWrap, sidebarOpen.value && styles.sidebarWrapOpen]}>
              <nav class={styles.sidebar} aria-label="Feature navigation">
              {groups.map((group) => (
                <div key={group.tier} class={styles.sidebarGroup}>
                  <div class={styles.groupLabel}>{TIER_LABEL[group.tier]}</div>
                  {group.features.map((f, fi) => {
                    const globalIndex = group.offset + fi;
                    return (
                      <button
                        key={f.number}
                        class={classMerge(
                          styles.sidebarItem,
                          activeIndex.value === globalIndex && styles.sidebarItemActive
                        )}
                        style={{
                          "--sidebar-accent": f.accentColor,
                          "--auto-duration": `${AUTO_INTERVAL}ms`,
                        } as Record<string, string>}
                        onClick$={() => selectFeature(globalIndex)}
                        aria-selected={activeIndex.value === globalIndex}
                      >
                        <div class={styles.sidebarIcon}>
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d={f.iconPath} />
                          </svg>
                        </div>
                        <div class={styles.sidebarMeta}>
                          <span class={styles.sidebarTitle}>{f.title}</span>
                          <span class={styles.sidebarMicro}>{f.micro}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              ))}
            </nav>
            </div>

            <FeatureSpotlight active={active} tierMeta={tierMeta} />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
});
