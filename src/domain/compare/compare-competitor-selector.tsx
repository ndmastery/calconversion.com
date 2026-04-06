import { component$, type QRL } from "@builder.io/qwik";
import styles from "./compare-competitor-selector.module.css";
import { classMerge } from "@/utilities/class-merge";
import type { Competitor } from "@/types/competitor";
import { COMPARISON_FEATURES } from "@/constants/competitors";

interface ArenaCompetitorSelectorProps {
  competitors: Competitor[];
  activeIndex: number;
  onSelect$: QRL<(index: number) => void>;
}

function countFeatureScore(competitor: Competitor): number {
  return COMPARISON_FEATURES.reduce((sum, feat) => {
    const val = competitor.features[feat];
    return sum + (val === true || (typeof val === "string" && val !== "Limited") ? 1 : 0);
  }, 0);
}

export const ArenaCompetitorSelector = component$<ArenaCompetitorSelectorProps>(
  ({ competitors, activeIndex, onSelect$ }) => {
    return (
      <div class={styles.strip} role="tablist" aria-label="Select competitor to compare">
        {competitors.map((comp, i) => (
          <button
            key={comp.name}
            class={classMerge(styles.chip, activeIndex === i && styles.chipActive)}
            role="tab"
            aria-selected={activeIndex === i}
            onClick$={() => onSelect$(i)}
          >
            <span class={styles.chipName}>{comp.name}</span>
            <span class={styles.chipScore}>
              {countFeatureScore(comp)}/{COMPARISON_FEATURES.length}
            </span>
          </button>
        ))}
      </div>
    );
  }
);
