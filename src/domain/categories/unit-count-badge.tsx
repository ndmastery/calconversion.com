import { component$ } from "@builder.io/qwik";
import styles from "./unit-count-badge.module.css";

interface UnitCountBadgeProps {
  count: string;
  color: string;
}

export const UnitCountBadge = component$<UnitCountBadgeProps>(({ count, color }) => {
  return (
    <div class={styles.badge} style={{ "--badge-glow": color } as Record<string, string>}>
      <span class={styles.count}>{count}</span>
      <span class={styles.label}>units</span>
    </div>
  );
});
