import { component$ } from "@builder.io/qwik";
import styles from "./divider.module.css";
import { classMerge } from "@/utilities/class-merge";

interface DividerProps {
  variant?: "straight" | "wave" | "angled";
}

export const Divider = component$<DividerProps>(({ variant = "straight" }) => {
  return <div class={classMerge(styles.divider, styles[variant])} />;
});
