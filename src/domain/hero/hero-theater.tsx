import { component$, useContext } from "@builder.io/qwik";
import shellStyles from "./hero-theater-shell.module.css";
import displayStyles from "./hero-theater-display.module.css";
import baseStyles from "./hero-theater-base.module.css";
const styles: Record<string, string> = { ...shellStyles, ...displayStyles, ...baseStyles };
import { HeroCategoryContext, CATEGORIES } from "@/domain/hero/hero-context";
import { ANIMATION_DELAY } from "@/constants/timings";

export const HeroTheater = component$(() => {
  const { activeIndex, resetKey } = useContext(HeroCategoryContext);

  return (
    <div class={styles.theater} aria-label="Live conversion demonstration">

      <nav class={styles.dotNav} aria-label="Conversion categories">
        <div class={styles.dotTrack} aria-hidden="true">
          <div
            class={styles.dotTrackFill}
            style={{ transform: `translateY(${activeIndex.value * 36}px)` }}
          />
        </div>
        {CATEGORIES.map((cat, i) => (
          <button
            key={cat.name}
            class={[
              styles.dotBtn,
              i === activeIndex.value ? styles.dotBtnActive : "",
            ].join(" ")}
            style={{ "--dot-color": cat.color } as Record<string, string>}
            onClick$={() => {
              activeIndex.value = i;
              resetKey.value++;
            }}
            aria-label={cat.name}
            aria-selected={i === activeIndex.value}
            role="tab"
          >
            <span class={styles.dotIcon} aria-hidden="true">
              {cat.icon}
            </span>
          </button>
        ))}
      </nav>

      <div class={styles.perspective}>
        <div
          class={styles.card}
          style={{
            "--card-accent": CATEGORIES[activeIndex.value].color,
          } as Record<string, string>}
        >

          <div class={styles.cardHeader}>
            <span class={styles.cardDot} aria-hidden="true" />
            <span class={styles.cardLabel}>
              {CATEGORIES[activeIndex.value].name} Conversion
            </span>
            <span class={styles.cardLive}>LIVE</span>
          </div>

          <div class={styles.cardBody}>
            {CATEGORIES.map((cat, i) => (
              <div
                key={cat.name}
                class={[
                  styles.slide,
                  i === activeIndex.value ? styles.slideActive : "",
                ].join(" ")}
                aria-hidden={i !== activeIndex.value}
              >

                <div class={styles.sourceRow}>
                  <span class={styles.sourcePrefix}>{cat.source.prefix}</span>
                  <span class={styles.sourceValue}>{cat.source.value}</span>
                </div>

                <div class={styles.flowLine} aria-hidden="true">
                  <div class={styles.flowPulse} />
                </div>

                <div class={styles.targetList}>
                  {cat.targets.map((t, ti) => (
                    <div
                      key={t.prefix}
                      class={styles.targetRow}
                      style={{ animationDelay: `${ANIMATION_DELAY.HERO_TARGET_STAGGER_S * (ti + 1)}s` }}
                    >
                      <span class={styles.targetPrefix}>{t.prefix}</span>
                      <span class={styles.targetValue}>{t.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
