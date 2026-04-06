import { component$, Slot } from "@builder.io/qwik";
import styles from "./scroll-reveal.module.css";
import { classMerge } from "@/utilities/class-merge";

interface ScrollRevealProps {
  direction?: "up" | "left" | "right";
}

export const ScrollReveal = component$<ScrollRevealProps>(({ direction = "up" }) => {
  return (
    <div class={classMerge(styles.reveal, styles[direction])}>
      <Slot />
    </div>
  );
});
