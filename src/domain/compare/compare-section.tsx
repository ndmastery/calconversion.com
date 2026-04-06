import { component$, useSignal, useComputed$, useVisibleTask$ } from "@builder.io/qwik";
import styles from "./compare-section.module.css";
import { Container } from "@/shared/container/container";
import { ScrollReveal } from "@/shared/scroll-reveal/scroll-reveal";
import { GradientText } from "@/shared/gradient-text/gradient-text";
import { ArenaScoreRing } from "@/domain/compare/compare-score-ring";
import { ArenaCompetitorSelector } from "@/domain/compare/compare-competitor-selector";
import { ArenaDuelCard } from "@/domain/compare/compare-duel-card";
import { ArenaVictoryBar } from "@/domain/compare/compare-victory-bar";
import { COMPETITORS, COMPARISON_FEATURES } from "@/constants/competitors";
import { CAROUSEL_INTERVAL } from "@/constants/timings";

const AUTO_INTERVAL = CAROUSEL_INTERVAL.COMPARE_MS;

export const CompareSection = component$(() => {
  const calConversion = COMPETITORS[0];
  const rivals = COMPETITORS.slice(1);
  const activeRivalIndex = useSignal(0);
  const resetKey = useSignal(0);

  useVisibleTask$(({ cleanup, track }) => {
    track(() => resetKey.value);

    const id = setInterval(() => {
      activeRivalIndex.value = (activeRivalIndex.value + 1) % rivals.length;
    }, AUTO_INTERVAL);

    cleanup(() => clearInterval(id));
  });

  const tally = useComputed$(() => {
    const rival = rivals[activeRivalIndex.value];
    let wins = 0;
    let ties = 0;
    let losses = 0;

    for (const feat of COMPARISON_FEATURES) {
      const ours = calConversion.features[feat];
      const theirs = rival.features[feat];
      const oursPositive =
        ours === true || (typeof ours === "string" && ours !== "Limited");
      const theirsPositive =
        theirs === true || (typeof theirs === "string" && theirs !== "Limited");

      if (oursPositive && !theirsPositive) wins++;
      else if (oursPositive && theirsPositive) ties++;
      else losses++;
    }

    return { wins, ties, losses };
  });

  return (
    <section class={styles.section} id="compare">
      <Container>

        <ScrollReveal>
          <div class={styles.arenaHeader}>
            <span class={styles.arenaTagline}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              Competitive Analysis
            </span>
            <h2 class={styles.arenaTitle}>
              <GradientText>CalConversion vs. The Competition</GradientText>
            </h2>
            <p class={styles.arenaSubtitle}>
              Select a competitor below to see a head-to-head feature breakdown.
              CalConversion leads with complete coverage across all 12 capabilities.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <ArenaScoreRing
            score={COMPARISON_FEATURES.length}
            total={COMPARISON_FEATURES.length}
          />
        </ScrollReveal>

        <ScrollReveal>
          <ArenaCompetitorSelector
            competitors={rivals}
            activeIndex={activeRivalIndex.value}
            onSelect$={(i: number) => {
              activeRivalIndex.value = i;
              resetKey.value++;
            }}
          />
        </ScrollReveal>

        <div class={styles.duelGrid} key={activeRivalIndex.value}>
          {COMPARISON_FEATURES.map((feat, i) => (
            <ArenaDuelCard
              key={feat}
              featureName={feat}
              oursValue={calConversion.features[feat]}
              theirsValue={rivals[activeRivalIndex.value].features[feat]}
              competitorName={rivals[activeRivalIndex.value].name}
              index={i}
            />
          ))}
        </div>

        <ScrollReveal>
          <ArenaVictoryBar
            wins={tally.value.wins}
            ties={tally.value.ties}
            losses={tally.value.losses}
          />
        </ScrollReveal>
      </Container>
    </section>
  );
});
