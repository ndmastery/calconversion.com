import { component$, useSignal, useComputed$, useOnDocument, useVisibleTask$, $ } from "@builder.io/qwik";
import headerStyles from "./showcase-header.module.css";
import stageStyles from "./showcase-stage.module.css";
import scenarioStyles from "./showcase-scenario.module.css";
import narrativeStyles from "./showcase-narrative.module.css";
import controlsStyles from "./showcase-controls.module.css";
import highlightStyles from "./showcase-highlight.module.css";
import miscStyles from "./showcase-misc.module.css";
const styles: Record<string, string> = { ...headerStyles, ...stageStyles, ...scenarioStyles, ...narrativeStyles, ...controlsStyles, ...highlightStyles, ...miscStyles };
import { Container } from "@/shared/container/container";
import { ScrollReveal } from "@/shared/scroll-reveal/scroll-reveal";
import { GradientText } from "@/shared/gradient-text/gradient-text";
import { classMerge } from "@/utilities/class-merge";
import { SHOWCASES } from "@/constants/showcase";
import { CAROUSEL_INTERVAL } from "@/constants/timings";

const AUTO_INTERVAL = CAROUSEL_INTERVAL.SHOWCASE_MS;

const CATEGORY_COLORS: Record<string, string> = {
  Currency: "#66BB6A",
  Apparel: "#AB47BC",
  "Data Storage": "#26C6DA",
  Distance: "#42A5F5",
  Mass: "#FFA726",
};

const getColor = (cat: string) => CATEGORY_COLORS[cat] ?? "#6C63FF";

export const ShowcaseSection = component$(() => {
  const activeIndex = useSignal(0);
  const resetKey = useSignal(0);

  const showcase = useComputed$(() => SHOWCASES[activeIndex.value]);

  useVisibleTask$(({ cleanup, track }) => {
    track(() => resetKey.value);

    const id = setInterval(() => {
      activeIndex.value =
        activeIndex.value === SHOWCASES.length - 1 ? 0 : activeIndex.value + 1;
    }, AUTO_INTERVAL);

    cleanup(() => clearInterval(id));
  });

  useOnDocument(
    "keydown",
    $((e: Event) => {
      const ke = e as KeyboardEvent;
      if (ke.key === "ArrowRight") {
        activeIndex.value =
          activeIndex.value === SHOWCASES.length - 1 ? 0 : activeIndex.value + 1;
        resetKey.value++;
      } else if (ke.key === "ArrowLeft") {
        activeIndex.value =
          activeIndex.value === 0 ? SHOWCASES.length - 1 : activeIndex.value - 1;
        resetKey.value++;
      }
    })
  );

  const currentColor = getColor(SHOWCASES[activeIndex.value].category);

  return (
    <section
      class={styles.section}
      id="showcase"
      style={{
        "--theater-glow-a": `color-mix(in srgb, ${currentColor} 5%, transparent)`,
        "--theater-glow-b": `color-mix(in srgb, ${currentColor} 3%, transparent)`,
      } as Record<string, string>}
    >
      <Container>

        <ScrollReveal>
          <div class={styles.header}>
            <span class={styles.eyebrow}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              Real-World Scenarios
            </span>
            <h2 class={styles.title}>
              <GradientText>See It in Action</GradientText>
            </h2>
            <p class={styles.subtitle}>
              Real problems people face every day — and how CalConversion
              solves each one in seconds.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div class={styles.timeline} role="tablist" aria-label="Showcase scenarios">
            {SHOWCASES.map((showcase, i) => {
              const color = getColor(showcase.category);
              const isActive = activeIndex.value === i;
              const isFilled = i < activeIndex.value;

              return (
                <>
                  {i > 0 && (
                    <div
                      class={classMerge(
                        styles.timelineConnector,
                        isFilled && styles.connectorFilled
                      )}
                      style={{
                        "--connector-color": getColor(SHOWCASES[i - 1].category),
                      } as Record<string, string>}
                    >
                      <span class={styles.timelineConnectorFill} />
                    </div>
                  )}
                  <button
                    key={showcase.category}
                    class={classMerge(
                      styles.timelineNode,
                      isActive && styles.timelineNodeActive
                    )}
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Showcase: ${showcase.scenario}`}
                    onClick$={() => {
                      activeIndex.value = i;
                      resetKey.value++;
                    }}
                    style={{
                      "--node-color": color,
                    } as Record<string, string>}
                  >
                    <span class={styles.timelineOrb}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d={showcase.icon} />
                      </svg>
                    </span>
                    <span class={styles.timelineLabel}>{showcase.category}</span>
                  </button>
                </>
              );
            })}
          </div>
        </ScrollReveal>

        <div
          class={styles.stage}
          key={showcase.value.category}
          style={{
            "--showcase-color": getColor(showcase.value.category),
          } as Record<string, string>}
        >
          <article class={styles.showcaseCard}>

            <div class={styles.scenarioCol}>
              <div class={styles.scenarioIconWrap}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d={showcase.value.icon} />
                </svg>
              </div>
              <span class={styles.scenarioTitle}>{showcase.value.scenario}</span>
              <span class={styles.scenarioBadge}>
                <span>{showcase.value.emoji}</span>
                {showcase.value.category}
              </span>
            </div>

            <div class={styles.narrativeCol}>

              <div class={styles.splitPanels}>
                <div class={classMerge(styles.narrativePane, styles.paneProblem)}>
                  <span class={classMerge(styles.paneLabel, styles.paneLabelProblem)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    The Problem
                  </span>
                  <p class={styles.paneText}>{showcase.value.problem}</p>
                </div>

                <div class={classMerge(styles.narrativePane, styles.paneSolution)}>
                  <span class={classMerge(styles.paneLabel, styles.paneLabelSolution)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    CalConversion Solution
                  </span>
                  <p class={styles.paneText}>{showcase.value.solution}</p>
                </div>
              </div>

              <div class={styles.highlightsBar}>
                <span class={styles.highlightsLabel}>Powered by</span>
                {showcase.value.highlights.map((h) => (
                  <span key={h} class={styles.highlightPill}>
                    <span class={styles.highlightDiamond} />
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
});
