import { component$, useSignal, useVisibleTask$, useOnWindow, useStore, $ } from "@builder.io/qwik";
import shellStyles from "./header-shell.module.css";
import navStyles from "./header-nav.module.css";
import hamburgerStyles from "./header-hamburger.module.css";
const styles: Record<string, string> = { ...shellStyles, ...navStyles, ...hamburgerStyles };
import { NAV_ITEMS } from "@/constants/navigation";
import { NavLink } from "@/domain/header/nav-link";
import { DownloadCtaButton } from "@/domain/header/download-cta-button";
import { SupportCtaButton } from "@/domain/header/support-cta-button";
import { MobileMenu } from "@/domain/header/mobile-menu";
import { ThemeSwitcher } from "@/shared/theme-switcher/theme-switcher";
import { SCROLL_THRESHOLD } from "@/constants/timings";
import { UI_TEXT } from "@/constants/ui-text";
import { SITE_NAME } from "@/constants/site";

const SECTION_IDS = ["features", "categories", "compare", "showcase", "guide"];

export const Header = component$(() => {
  const isScrolled = useSignal(false);
  const isMobileMenuOpen = useSignal(false);
  const activeSection = useSignal("");
  const highlight = useStore({ x: 0, width: 0, visible: false });
  const navRef = useSignal<HTMLElement>();

  useOnWindow(
    "scroll",
    $(() => {
      isScrolled.value = window.scrollY > SCROLL_THRESHOLD.HEADER_CAPSULE_PX;
    })
  );

  useVisibleTask$(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id;
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    for (const el of sections) observer.observe(el);
    return () => observer.disconnect();
  });

  const onNavHover = $((e: PointerEvent) => {
    const target = (e.target as HTMLElement).closest("[data-nav-link]") as HTMLElement | null;
    if (!target || !navRef.value) return;

    const navRect = navRef.value.getBoundingClientRect();
    const linkRect = target.getBoundingClientRect();

    highlight.x = linkRect.left - navRect.left;
    highlight.width = linkRect.width;
    highlight.visible = true;
  });

  const onNavLeave = $(() => {
    highlight.visible = false;
  });

  return (
    <>
      <header class={[styles.header, isScrolled.value && styles.headerScrolled]}>
        <div class={[styles.capsule, isScrolled.value && styles.capsuleScrolled]}>

          <div class={styles.logoGroup}>
            <a href="/" class={styles.logoLink} aria-label={`${SITE_NAME} Home`}>
              <img
                src="/images/brand/app-icon-192.png"
                alt={SITE_NAME}
                width={34}
                height={34}
                class={styles.logoIcon}
              />
              <span class={styles.logoText}>{SITE_NAME}</span>
            </a>
            <span class={styles.badge}>
              <span class={styles.badgeDot} aria-hidden="true" />
              500+ units
            </span>
          </div>

          <nav
            ref={navRef}
            class={styles.nav}
            onPointerMove$={onNavHover}
            onPointerLeave$={onNavLeave}
          >

            <div
              class={styles.highlightPill}
              data-visible={highlight.visible}
              style={{
                transform: `translateX(${highlight.x}px)`,
                width: `${highlight.width}px`,
              }}
              aria-hidden="true"
            />

            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                isExternal={item.isExternal}
                isActive={
                  !!item.href.includes("#") &&
                  activeSection.value === item.href.replace("/#", "")
                }
              />
            ))}
          </nav>

          <div class={styles.controls}>
            <ThemeSwitcher />
            <SupportCtaButton />
            <DownloadCtaButton />
          </div>

          <button
            class={styles.hamburger}
            data-open={isMobileMenuOpen.value}
            onClick$={() => {
              isMobileMenuOpen.value = !isMobileMenuOpen.value;
            }}
            aria-label={isMobileMenuOpen.value ? UI_TEXT.CLOSE_MENU : UI_TEXT.OPEN_MENU}
          >
            <span class={styles.hamburgerLine} aria-hidden="true" />
            <span class={styles.hamburgerLine} aria-hidden="true" />
            <span class={styles.hamburgerLine} aria-hidden="true" />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} activeSection={activeSection.value} />
    </>
  );
});
