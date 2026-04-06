import { component$ } from "@builder.io/qwik";
import styles from "./section-heading.module.css";
import { GradientText } from "@/shared/gradient-text/gradient-text";
import { classMerge } from "@/utilities/class-merge";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeading = component$<SectionHeadingProps>(({ title, subtitle, align = "center" }) => {
  return (
    <div class={classMerge(styles.heading, styles[align])}>
      <h2 class={styles.title}>
        <GradientText>{title}</GradientText>
      </h2>
      {subtitle && <p class={styles.subtitle}>{subtitle}</p>}
    </div>
  );
});
