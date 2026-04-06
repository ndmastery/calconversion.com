import { component$ } from "@builder.io/qwik";
import shellStyles from "./guide-step-shell.module.css";
import contentStyles from "./guide-step-content.module.css";
import expandStyles from "./guide-step-expand.module.css";
import baseStyles from "./guide-step-base.module.css";
const styles: Record<string, string> = { ...shellStyles, ...contentStyles, ...expandStyles, ...baseStyles };
import { classMerge } from "@/utilities/class-merge";
import type { GuideStep } from "@/types/guide";
import { ANIMATION_DELAY } from "@/constants/timings";

interface GuideJourneyStepProps {
  step: GuideStep;
  isActive: boolean;
  isCompleted: boolean;
  isLast: boolean;
  totalSteps: number;
  index: number;
  onActivate$: () => void;
}

const STEP_ICONS: Record<number, string> = {
  1: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z",
  2: "M4 6h16M4 10h16M4 14h16M4 18h16",
  3: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  4: "M4 7h6m4 0h6M4 12h16M4 17h10",
  5: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  6: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
};

const STEP_TAGS: Record<number, string[]> = {
  1: ["GPS Detection", "Offline Ready", "Privacy-First"],
  2: ["Currency", "Distance", "Apparel", "Storage", "Weight"],
  3: ["Multi-Target", "Side-by-Side", "All Categories"],
  4: ["+ − × ÷", "Math Input", "No Calculator"],
  5: ["Cross-Verified", "History Log", "Trend Tracking"],
  6: ["Screenshots", "Attachments", "Fast Response"],
};

export const GuideJourneyStep = component$<GuideJourneyStepProps>(
  ({
    step,
    isActive,
    isCompleted,
    isLast,
    totalSteps,
    index,
    onActivate$,
  }) => {
    const tags = STEP_TAGS[step.stepNumber] || [];
    const delayMs = index * ANIMATION_DELAY.GUIDE_STEP_STAGGER_MS;

    return (
      <div
        class={styles.step}
        style={{ "--step-delay": `${delayMs}ms` } as Record<string, string>}
      >

        <div class={styles.timelineCol}>
          <button
            class={classMerge(
              styles.indicator,
              isActive && styles.indicatorActive,
              isCompleted && styles.indicatorCompleted
            )}
            onClick$={onActivate$}
            aria-label={`Step ${step.stepNumber}: ${step.title}`}
            aria-expanded={isActive}
          >
            {isCompleted ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              step.stepNumber
            )}

          </button>

          {!isLast && (
            <div
              class={styles.connector}
              style={{
                "--connector-fill": isCompleted ? "1" : "0",
              } as Record<string, string>}
            />
          )}
        </div>

        <div class={styles.contentCol}>

          <div
            class={styles.headerRow}
            onClick$={onActivate$}
            role="button"
            tabIndex={0}
          >
            <div class={styles.headerLeft}>
              <span
                class={classMerge(
                  styles.stepLabel,
                  !isActive && styles.stepLabelInactive
                )}
              >
                Step {step.stepNumber} of {totalSteps}
              </span>
              <h3
                class={classMerge(
                  styles.stepTitle,
                  !isActive && styles.stepTitleInactive
                )}
              >
                {step.title}
              </h3>
            </div>
            <svg
              class={classMerge(styles.chevron, isActive && styles.chevronOpen)}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>

          <div
            class={classMerge(
              styles.expandWrapper,
              isActive && styles.expandWrapperOpen
            )}
          >
            <div class={styles.expandInner}>
              <div
                class={classMerge(
                  styles.panelContent,
                  isActive && styles.panelContentVisible
                )}
              >

                <div class={styles.descriptionArea}>
                  <p class={styles.stepDescription}>{step.description}</p>
                  {step.detail && (
                    <div class={styles.detailCallout}>
                      <svg
                        class={styles.detailCalloutIcon}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4M12 8h.01" />
                      </svg>
                      <span class={styles.detailCalloutText}>
                        {step.detail}
                      </span>
                    </div>
                  )}
                </div>

                <div class={styles.featureCard}>
                  <div class={styles.featureIcon}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d={STEP_ICONS[step.stepNumber]} />
                    </svg>
                  </div>
                  {step.highlight && (
                    <span class={styles.featureHighlight}>
                      {step.highlight}
                    </span>
                  )}
                  <div class={styles.featureTags}>
                    {tags.map((tag, i) => (
                      <span
                        key={tag}
                        class={styles.featureTag}
                        style={{
                          "--tag-delay": `${i * ANIMATION_DELAY.GUIDE_TAG_STAGGER_MS + ANIMATION_DELAY.GUIDE_TAG_BASE_MS}ms`,
                        } as Record<string, string>}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
