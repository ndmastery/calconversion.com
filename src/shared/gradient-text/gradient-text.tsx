import { component$, Slot } from "@builder.io/qwik";
import styles from "./gradient-text.module.css";

interface GradientTextProps {
  gradientStart?: string;
  gradientEnd?: string;
}

export const GradientText = component$<GradientTextProps>(({
  gradientStart = "var(--color-primary-start)",
  gradientEnd = "var(--color-primary-end)",
}) => {
  return (
    <span
      class={styles.gradient}
      style={{
        backgroundImage: `linear-gradient(135deg, ${gradientStart}, ${gradientEnd})`,
      }}
    >
      <Slot />
    </span>
  );
});
