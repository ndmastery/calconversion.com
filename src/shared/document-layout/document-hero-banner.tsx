import { component$ } from "@builder.io/qwik";
import { SvgIcon } from "./svg-icon";
import heroStyles from "./document-layout-hero.module.css";

export interface HeroMetaItem {
  icon: string;
  text: string;
}

export interface DocumentHeroBannerProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  metaItems: HeroMetaItem[];
}

export const DocumentHeroBanner = component$<DocumentHeroBannerProps>(
  ({ eyebrow, title, subtitle, metaItems }) => {
    return (
      <div class={heroStyles.heroBanner}>
        <div class={heroStyles.heroContent}>
          <div class={heroStyles.heroEyebrow}>
            <span class={heroStyles.heroEyebrowDot} />
            {eyebrow}
          </div>
          <h1 class={heroStyles.heroTitle}>{title}</h1>
          <p class={heroStyles.heroSubtitle}>{subtitle}</p>
          <div class={heroStyles.heroMeta}>
            {metaItems.map((item) => (
              <span key={item.icon} class={heroStyles.heroMetaItem}>
                <SvgIcon name={item.icon} class={heroStyles.heroMetaIcon} />
                {item.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
);
