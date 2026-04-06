import { component$, Slot } from "@builder.io/qwik";
import styles from "./badge.module.css";
import { classMerge } from "@/utilities/class-merge";

interface BadgeProps {
  variant?: "filled" | "outlined";
  color?: string;
}

export const Badge = component$<BadgeProps>(({ variant = "filled", color }) => {
  return (
    <span
      class={classMerge(styles.badge, styles[variant])}
      style={color ? { "--badge-color": color } as Record<string, string> : undefined}
    >
      <Slot />
    </span>
  );
});
