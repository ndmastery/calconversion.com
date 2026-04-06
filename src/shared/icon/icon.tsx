import { component$ } from "@builder.io/qwik";
import styles from "./icon.module.css";

interface IconProps {
  pathData: string;
  size?: number;
  color?: string;
  label?: string;
}

export const Icon = component$<IconProps>(({ pathData, size = 24, color = "currentColor", label }) => {
  return (
    <svg
      class={styles.icon}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-label={label}
      role={label ? "img" : "presentation"}
    >
      <path d={pathData} />
    </svg>
  );
});
