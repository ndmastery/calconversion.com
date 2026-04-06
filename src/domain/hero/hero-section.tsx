import { component$, useSignal, useVisibleTask$, useContextProvider } from "@builder.io/qwik";
import styles from "./hero-section.module.css";
import { Container } from "@/shared/container/container";
import { HeroContent } from "@/domain/hero/hero-content";
import { HeroTheater } from "@/domain/hero/hero-theater";
import { HeroCategoryContext, CATEGORY_COUNT, CYCLE_INTERVAL_MS } from "@/domain/hero/hero-context";

export const HeroSection = component$(() => {
  const activeIndex = useSignal(0);
  const resetKey = useSignal(0);

  useContextProvider(HeroCategoryContext, { activeIndex, resetKey });

  useVisibleTask$(({ cleanup, track }) => {
    track(() => resetKey.value);

    const id = setInterval(() => {
      activeIndex.value = (activeIndex.value + 1) % CATEGORY_COUNT;
    }, CYCLE_INTERVAL_MS);

    cleanup(() => clearInterval(id));
  });

  return (
    <section class={styles.hero} id="hero">

      <div class={styles.noiseGrain} aria-hidden="true" />
      <div class={styles.gridLines} aria-hidden="true" />
      <div class={styles.radialGlow} aria-hidden="true" />

      <Container size="wide">
        <div class={styles.grid}>
          <HeroContent />
          <HeroTheater />
        </div>
      </Container>

      <a href="/#features" class={styles.scrollHint} aria-label="Scroll to features">
        <svg class={styles.scrollChevron} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M4 7l6 6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </section>
  );
});
