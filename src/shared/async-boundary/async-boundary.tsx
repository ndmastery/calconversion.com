import { component$, Slot } from "@builder.io/qwik";
import styles from "./async-boundary.module.css";

export const AsyncBoundary = component$(() => {
  return (
    <div class={styles.boundary}>
      <Slot />
    </div>
  );
});
