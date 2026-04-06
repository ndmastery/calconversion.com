import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./guide-section.module.css";
import { Container } from "@/shared/container/container";
import { ScrollReveal } from "@/shared/scroll-reveal/scroll-reveal";
import { GradientText } from "@/shared/gradient-text/gradient-text";
import { GuideJourneyStep } from "@/domain/guide/guide-journey-step";
import { GUIDE_STEPS } from "@/constants/guide";
import { CAROUSEL_INTERVAL } from "@/constants/timings";

const AUTO_INTERVAL = CAROUSEL_INTERVAL.GUIDE_MS;

export const GuideSection = component$(() => {
  const activeIndex = useSignal(0);
  const resetKey = useSignal(0);

  useVisibleTask$(({ cleanup, track }) => {
    track(() => resetKey.value);

    const id = setInterval(() => {
      activeIndex.value = (activeIndex.value + 1) % GUIDE_STEPS.length;
    }, AUTO_INTERVAL);

    cleanup(() => clearInterval(id));
  });

  return (
    <section class={styles.section} id="guide">
      <Container>

        <ScrollReveal>
          <div class={styles.header}>
            <span class={styles.eyebrow}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              How It Works
            </span>
            <h2 class={styles.title}>
              <GradientText>Your Conversion Journey</GradientText>
            </h2>
            <p class={styles.subtitle}>
              From launch to result in six seamless steps. Here's exactly how
              CalConversion turns any value into the units you need.
            </p>
          </div>
        </ScrollReveal>

        <div class={styles.journey}>
          {GUIDE_STEPS.map((step, i) => (
            <GuideJourneyStep
              key={step.stepNumber}
              step={step}
              isActive={activeIndex.value === i}
              isCompleted={i < activeIndex.value}
              isLast={i === GUIDE_STEPS.length - 1}
              totalSteps={GUIDE_STEPS.length}
              index={i}
              onActivate$={() => {
                activeIndex.value = i;
                resetKey.value++;
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
});
