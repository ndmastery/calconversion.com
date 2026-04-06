import { component$ } from "@builder.io/qwik";
import shellStyles from "./footer-shell.module.css";
import brandStyles from "./footer-brand.module.css";
import linksStyles from "./footer-links.module.css";
import bottomStyles from "./footer-bottom.module.css";
import baseStyles from "./footer-base.module.css";
const styles: Record<string, string> = { ...shellStyles, ...brandStyles, ...linksStyles, ...bottomStyles, ...baseStyles };
import { DOWNLOAD_STATS } from "@/constants/downloads";
import { ANIMATION_DELAY } from "@/constants/timings";

export const FooterStatsTicker = component$(() => {
  return (
    <>
      {DOWNLOAD_STATS.map((stat, i) => (
        <div key={stat.label} class={styles.statItem}>
          <span
            class={styles.statValue}
            style={{
              animationDelay: `${i * ANIMATION_DELAY.FOOTER_TICKER_STAGGER_MS}ms`,
            }}
          >
            {stat.value}
          </span>
          <span class={styles.statLabel}>{stat.label}</span>
        </div>
      ))}
    </>
  );
});
