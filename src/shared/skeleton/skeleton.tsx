import { component$ } from "@builder.io/qwik";
import styles from "./skeleton.module.css";
import { classMerge } from "@/utilities/class-merge";

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  variant?: "text" | "circle" | "rectangle";
}

export const Skeleton = component$<SkeletonProps>(({
  width = "100%",
  height = "1em",
  borderRadius,
  variant = "text",
}) => {
  return (
    <div
      class={classMerge(styles.skeleton, styles[variant])}
      style={{
        width,
        height,
        borderRadius: borderRadius || undefined,
      }}
    />
  );
});
