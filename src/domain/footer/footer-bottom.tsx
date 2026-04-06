import { component$ } from "@builder.io/qwik";
import shellStyles from "./footer-shell.module.css";
import brandStyles from "./footer-brand.module.css";
import linksStyles from "./footer-links.module.css";
import bottomStyles from "./footer-bottom.module.css";
import baseStyles from "./footer-base.module.css";
const styles: Record<string, string> = { ...shellStyles, ...brandStyles, ...linksStyles, ...bottomStyles, ...baseStyles };
import { COMPANY } from "@/constants/brand";

export const FooterBottom = component$(() => {
  const year = new Date().getFullYear();

  return (
    <div class={styles.bottomBar}>
      <p class={styles.copyright}>
        © {year} CalConversion. All rights reserved.
      </p>
      <div class={styles.bottomMeta}>
        <p class={styles.company}>
          Crafted by{" "}
          <a
            href={COMPANY.website}
            target="_blank"
            rel="noopener noreferrer"
            class={styles.companyLink}
          >
            {COMPANY.name}
          </a>
        </p>
      </div>
    </div>
  );
});
