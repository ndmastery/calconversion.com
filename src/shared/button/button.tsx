import { component$, Slot } from "@builder.io/qwik";
import styles from "./button.module.css";
import { classMerge } from "@/utilities/class-merge";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  type?: "button" | "submit";
  fullWidth?: boolean;
}

export const Button = component$<ButtonProps>(({ variant = "primary", href, type = "button", fullWidth = false }) => {
  const className = classMerge(
    styles.button,
    styles[variant],
    fullWidth && styles.fullWidth,
  );

  if (href) {
    return (
      <a class={className} href={href}>
        <Slot />
      </a>
    );
  }

  return (
    <button class={className} type={type}>
      <Slot />
    </button>
  );
});
