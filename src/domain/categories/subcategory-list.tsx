import { component$ } from "@builder.io/qwik";
import styles from "./subcategory-list.module.css";
import type { Subcategory } from "@/types/category";
import { ANIMATION_DELAY } from "@/constants/timings";

interface SubcategoryListProps {
  subcategories: Subcategory[];
}

export const SubcategoryList = component$<SubcategoryListProps>(({ subcategories }) => {
  return (
    <div class={styles.list}>
      {subcategories.map((sub, index) => (
        <span
          key={sub.name}
          class={styles.chip}
          style={{ animationDelay: `${index * ANIMATION_DELAY.SUBCATEGORY_STAGGER_S}s` }}
        >
          {sub.name}
        </span>
      ))}
    </div>
  );
});
