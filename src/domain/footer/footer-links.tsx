import { component$ } from "@builder.io/qwik";
import shellStyles from "./footer-shell.module.css";
import brandStyles from "./footer-brand.module.css";
import linksStyles from "./footer-links.module.css";
import bottomStyles from "./footer-bottom.module.css";
import baseStyles from "./footer-base.module.css";
const styles: Record<string, string> = { ...shellStyles, ...brandStyles, ...linksStyles, ...bottomStyles, ...baseStyles };
import type { NavItem } from "@/types/navigation";

interface FooterLinksProps {
  title: string;
  links: NavItem[];
}

export const FooterLinks = component$<FooterLinksProps>(({ title, links }) => {
  return (
    <div class={styles.linkGroup}>
      <h4 class={styles.linkGroupTitle}>{title}</h4>
      <ul class={styles.linkList}>
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} class={styles.link}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
});
