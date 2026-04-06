import { component$ } from "@builder.io/qwik";
import styles from "./compare-duel-card.module.css";
import { classMerge } from "@/utilities/class-merge";
import { ANIMATION_DELAY } from "@/constants/timings";

interface ArenaDuelCardProps {
  featureName: string;
  oursValue: boolean | string;
  theirsValue: boolean | string;
  competitorName: string;
  index: number;
}

type Verdict = "win" | "tie" | "loss";

function resolveVerdict(ours: boolean | string, theirs: boolean | string): Verdict {
  const oursPositive =
    ours === true || (typeof ours === "string" && ours !== "Limited");
  const theirsPositive =
    theirs === true || (typeof theirs === "string" && theirs !== "Limited");

  if (oursPositive && !theirsPositive) return "win";
  if (oursPositive && theirsPositive) return "tie";
  return "loss";
}

function formatValue(val: boolean | string): string {
  if (val === true) return "Yes";
  if (val === false) return "No";
  return val;
}

export const ArenaDuelCard = component$<ArenaDuelCardProps>(
  ({ featureName, oursValue, theirsValue, competitorName, index }) => {
    const verdict = resolveVerdict(oursValue, theirsValue);
    const delayMs = index * ANIMATION_DELAY.COMPARE_CARD_STAGGER_MS;

    return (
      <div
        class={styles.card}
        style={{ "--card-delay": `${delayMs}ms` } as Record<string, string>}
      >

        <div class={styles.sideOurs}>
          <span class={styles.featureName}>{featureName}</span>
          <span class={styles.featureValue}>
            <span
              class={classMerge(
                styles.verdictIcon,
                verdict === "win"
                  ? styles.verdictWin
                  : verdict === "tie"
                    ? styles.verdictTie
                    : styles.verdictLoss
              )}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {verdict === "loss" ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <polyline points="20 6 9 17 4 12" />
                )}
              </svg>
            </span>
            <span class={styles.valueTextHighlight}>
              {formatValue(oursValue)}
            </span>
          </span>
        </div>

        <div class={styles.divider}>
          <span class={styles.vsIcon}>vs</span>
        </div>

        <div class={styles.sideTheirs}>
          <span class={styles.featureName}>{competitorName}</span>
          <span class={styles.featureValue}>
            <span
              class={classMerge(
                styles.verdictIcon,
                verdict === "win"
                  ? styles.verdictLoss
                  : verdict === "tie"
                    ? styles.verdictTie
                    : styles.verdictWin
              )}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {verdict === "win" ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <polyline points="20 6 9 17 4 12" />
                )}
              </svg>
            </span>
            <span class={styles.valueText}>{formatValue(theirsValue)}</span>
          </span>
        </div>
      </div>
    );
  }
);
