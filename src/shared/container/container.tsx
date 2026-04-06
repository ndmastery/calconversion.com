import { component$, Slot } from "@builder.io/qwik";
import styles from "./container.module.css";
import { classMerge } from "@/utilities/class-merge";

interface ContainerProps {
  size?: "default" | "narrow" | "wide";
}

export const Container = component$<ContainerProps>(({ size = "default" }) => {
  return (
    <div class={classMerge(styles.container, styles[size])}>
      <Slot />
    </div>
  );
});
