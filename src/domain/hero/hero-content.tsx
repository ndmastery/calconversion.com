import { component$, useContext } from "@builder.io/qwik";
import shellStyles from "./hero-content-shell.module.css";
import headlineStyles from "./hero-content-headline.module.css";
import baseStyles from "./hero-content-base.module.css";
const styles: Record<string, string> = { ...shellStyles, ...headlineStyles, ...baseStyles };
import { Button } from "@/shared/button/button";
import { GradientText } from "@/shared/gradient-text/gradient-text";
import { HeroCategoryContext, ROTATING_WORDS, CATEGORY_COUNT } from "@/domain/hero/hero-context";
import { ANIMATION_DELAY } from "@/constants/timings";

export const HeroContent = component$(() => {
  const { activeIndex } = useContext(HeroCategoryContext);

  return (
    <div class={styles.content}>

      <div class={styles.statBar}>
        <div class={styles.statChip} style={{ animationDelay: ANIMATION_DELAY.HERO_STAT_CHIP_1_S }}>
          <span class={styles.statValue}>500+</span>
          <span class={styles.statLabel}>Units</span>
        </div>
        <span class={styles.statDivider} aria-hidden="true" />
        <div class={styles.statChip} style={{ animationDelay: ANIMATION_DELAY.HERO_STAT_CHIP_2_S }}>
          <span class={styles.statValue}>5</span>
          <span class={styles.statLabel}>Categories</span>
        </div>
        <span class={styles.statDivider} aria-hidden="true" />
        <div class={styles.statChip} style={{ animationDelay: ANIMATION_DELAY.HERO_STAT_CHIP_3_S }}>
          <span class={styles.statPulse} aria-hidden="true" />
          <span class={styles.statLabel}>Real-time Rates</span>
        </div>
      </div>

      <h1 class={styles.headline}>
        <span class={styles.headlineLine}>Convert Every</span>
        <span class={styles.headlineLine}>
          <span class={styles.rotatorWrapper}>
            {ROTATING_WORDS.map((word, i) => (
              <span
                key={word}
                class={[
                  styles.rotatorWord,
                  i === activeIndex.value ? styles.rotatorWordActive : "",
                ].join(" ")}
                aria-hidden={i !== activeIndex.value}
              >
                <GradientText
                  gradientStart={i === activeIndex.value ? "var(--color-primary-start)" : "var(--color-primary)"}
                  gradientEnd={i === activeIndex.value ? "#42A5F5" : "var(--color-primary-end)"}
                >
                  {word}
                </GradientText>
              </span>
            ))}
          </span>
          <span class={styles.headlinePeriod}>.</span>
        </span>
      </h1>

      <p class={styles.subtitle}>
        The all-in-one converter for currencies, crypto, stocks, distance,
        apparel sizing, data storage, and mass — with real-time exchange rates,
        multi-target conversion, a built-in bargain calculator, and full offline
        support.
      </p>

      <div class={styles.ctaStack}>
        <Button variant="primary" href="/#download">
          Download Free
        </Button>
        <a href="/#guide" class={styles.ctaLink}>
          Learn more
          <svg
            class={styles.ctaArrow}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 8h10m0 0L9 4m4 4L9 12"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>

      <div class={styles.categoryBadges}>
        {Array.from({ length: CATEGORY_COUNT }).map((_, i) => (
          <span
            key={`dot-${i}`}
            class={[
              styles.categoryDot,
              i === activeIndex.value ? styles.categoryDotActive : "",
            ].join(" ")}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
});
