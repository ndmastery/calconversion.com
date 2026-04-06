import { component$ } from "@builder.io/qwik";
import styles from "./compare-score-ring.module.css";

interface ArenaScoreRingProps {
  score: number;
  total: number;
}

export const ArenaScoreRing = component$<ArenaScoreRingProps>(
  ({ score, total }) => {
    const radius = 62;
    const circumference = 2 * Math.PI * radius;
    const ratio = score / total;
    const dashTarget = circumference * (1 - ratio);

    return (
      <div
        class={styles.ring}
        style={{
          "--circumference": `${circumference}`,
          "--dash-target": `${dashTarget}`,
        } as Record<string, string>}
      >
        <svg class={styles.svg} viewBox="0 0 140 140">
          <defs>
            <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="var(--color-primary-start)" />
              <stop offset="100%" stop-color="var(--color-primary-end)" />
            </linearGradient>
          </defs>
          <circle class={styles.trackCircle} cx="70" cy="70" r={radius} />
          <circle class={styles.progressCircle} cx="70" cy="70" r={radius} />
        </svg>
        <div class={styles.center}>
          <span class={styles.scoreValue}>
            {score}<span class={styles.scoreSuffix}>/{total}</span>
          </span>
          <span class={styles.scoreLabel}>Features</span>
        </div>
      </div>
    );
  }
);
