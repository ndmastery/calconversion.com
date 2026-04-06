import { component$, Slot } from "@builder.io/qwik";
import { SvgIcon } from "./svg-icon";
import { classMerge } from "@/utilities/class-merge";
import cardStyles from "./document-layout-card.module.css";

export interface DocumentSectionCardProps {
  id: string;
  icon: string;
  num: string;
  title: string;
  class?: string;
}

export const DocumentSectionCard = component$<DocumentSectionCardProps>(
  ({ id, icon, num, title, class: className }) => {
    return (
      <section id={id} class={classMerge(cardStyles.sectionCard, className)}>
        <div class={cardStyles.cardHeader}>
          <div class={cardStyles.cardIconWrap}>
            <SvgIcon name={icon} class={cardStyles.cardIcon} />
          </div>
          <div class={cardStyles.cardTitleGroup}>
            <div class={cardStyles.cardNumber}>Section {num}</div>
            <h2 class={cardStyles.cardTitle}>{title}</h2>
          </div>
        </div>
        <div class={cardStyles.cardBody}>
          <Slot />
        </div>
      </section>
    );
  }
);
