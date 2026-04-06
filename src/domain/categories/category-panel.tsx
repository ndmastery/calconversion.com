import { component$ } from "@builder.io/qwik";
import styles from "./world-panel.module.css";
import type { Category } from "@/types/category";
import { GradientText } from "@/shared/gradient-text/gradient-text";
import { Icon } from "@/shared/icon/icon";
import { UnitCountBadge } from "@/domain/categories/unit-count-badge";
import { SubcategoryList } from "@/domain/categories/subcategory-list";

interface WorldPanelProps {
  category: Category;
}

export const WorldPanel = component$<WorldPanelProps>(({ category }) => {
  return (
    <div
      class={styles.panel}
      style={{
        "--grad-start": category.gradientStart,
        "--grad-end": category.gradientEnd,
      } as Record<string, string>}
    >
      <div class={styles.decoration} />
      <div class={styles.content}>
        <div class={styles.header}>
          <div class={styles.iconArea}>
            <Icon pathData={category.iconPath} size={40} color="white" />
          </div>
          <div class={styles.meta}>
            <h3 class={styles.name}>
              <GradientText gradientStart={category.gradientStart} gradientEnd="white">
                {category.name}
              </GradientText>
            </h3>
            <p class={styles.tagline}>{category.tagline}</p>
          </div>
        </div>
        <UnitCountBadge count={category.unitCount} color={category.gradientStart} />
        <p class={styles.description}>{category.description}</p>
        <SubcategoryList subcategories={category.subcategories} />
      </div>
    </div>
  );
});
