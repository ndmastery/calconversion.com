import { component$ } from "@builder.io/qwik";
import styles from "./compare-victory-bar.module.css";
import { classMerge } from "@/utilities/class-merge";

interface ArenaVictoryBarProps {
  wins: number;
  ties: number;
  losses: number;
}

export const ArenaVictoryBar = component$<ArenaVictoryBarProps>(
  ({ wins, ties, losses }) => {
    return (
      <div class={styles.bar} role="status" aria-label="Comparison results summary">
        <div class={styles.stat}>
          <span class={classMerge(styles.statCount, styles.statCountWin)}>
            {wins}
          </span>
          <span class={styles.statLabel}>Wins</span>
        </div>
        <div class={styles.separator} aria-hidden="true" />
        <div class={styles.stat}>
          <span class={classMerge(styles.statCount, styles.statCountTie)}>
            {ties}
          </span>
          <span class={styles.statLabel}>Ties</span>
        </div>
        <div class={styles.separator} aria-hidden="true" />
        <div class={styles.stat}>
          <span class={classMerge(styles.statCount, styles.statCountLoss)}>
            {losses}
          </span>
          <span class={styles.statLabel}>Losses</span>
        </div>
      </div>
    );
  }
);
