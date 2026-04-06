import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import styles from "./nav-link.module.css";

interface NavLinkProps {
  href: string;
  label: string;
  isExternal?: boolean;
  isActive?: boolean;
}

export const NavLink = component$<NavLinkProps>(({ href, label, isExternal, isActive = false }) => {
  if (isExternal) {
    return (
      <a
        class={styles.link}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        data-nav-link
        data-active={isActive}
      >
        {label}
        <span class={styles.activeDot} aria-hidden="true" />
      </a>
    );
  }

  return (
    <Link
      class={styles.link}
      href={href}
      data-nav-link
      data-active={isActive}
    >
      {label}
      <span class={styles.activeDot} aria-hidden="true" />
    </Link>
  );
});
