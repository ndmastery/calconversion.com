import { component$, type Signal } from "@builder.io/qwik";
import styles from "./mobile-menu.module.css";
import { NAV_ITEMS } from "@/constants/navigation";
import { ThemeSwitcher } from "@/shared/theme-switcher/theme-switcher";
import { UI_TEXT } from "@/constants/ui-text";
import { SITE_NAME } from "@/constants/site";

interface MobileMenuProps {
  isOpen: Signal<boolean>;
  activeSection?: string;
}

const NAV_ICONS: Record<string, string[]> = {
  sparkle: [
    "M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z",
  ],
  layers: [
    "M12 2L2 7l10 5 10-5-10-5z",
    "M2 17l10 5 10-5",
    "M2 12l10 5 10-5",
  ],
  scale: [
    "M16 3h5v5",
    "M8 3H3v5",
    "M21 3l-8.5 8.5",
    "M3 3l8.5 8.5",
    "M3 21h18",
    "M12 12v9",
  ],
  gallery: [
    "M3 3h7v7H3z",
    "M14 3h7v7h-7z",
    "M14 14h7v7h-7z",
    "M3 14h7v7H3z",
  ],
  book: [
    "M4 19.5A2.5 2.5 0 0 1 6.5 17H20",
    "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z",
  ],
};

const CATEGORIES = [
  { label: "Currency", className: "catCurrency" },
  { label: "Distance", className: "catDistance" },
  { label: "Apparel", className: "catApparel" },
  { label: "Storage", className: "catStorage" },
  { label: "Mass", className: "catMass" },
] as const;

export const MobileMenu = component$<MobileMenuProps>(({ isOpen, activeSection = "" }) => {
  return (
    <>
      {/* Backdrop overlay */}
      <div
        class={[styles.overlay, isOpen.value && styles.overlayOpen]}
        onClick$={() => {
          isOpen.value = false;
        }}
        aria-hidden="true"
      />

      {/* Side panel */}
      <aside
        class={[styles.panel, isOpen.value && styles.panelOpen]}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* ─── Header ─── */}
        <div class={styles.panelHeader}>
          <div class={styles.brandGroup}>
            <img
              src="/images/brand/app-icon-192.png"
              alt={SITE_NAME}
              width={38}
              height={38}
              class={styles.brandLogo}
            />
            <div class={styles.brandInfo}>
              <span class={styles.brandName}>{SITE_NAME}</span>
              <span class={styles.versionBadge}>
                <span class={styles.versionDot} aria-hidden="true" />
                500+ units
              </span>
            </div>
          </div>

          <button
            class={styles.closeBtn}
            onClick$={() => {
              isOpen.value = false;
            }}
            aria-label={UI_TEXT.CLOSE_MENU}
          >
            <svg
              class={styles.closeSvg}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ─── Body ─── */}
        <div class={styles.panelBody}>
          {/* Navigation label */}
          <div
            class={styles.sectionLabel}
            style={{ "--stagger-delay": "0.12s" }}
          >
            Navigate
          </div>

          {/* Navigation cards */}
          <div class={styles.navCards}>
            {NAV_ITEMS.map((item, idx) => {
              const sectionId = item.href.replace("/#", "");
              const isActive = item.href.includes("#") && activeSection === sectionId;
              const paths = NAV_ICONS[item.icon || ""] || [];
              const delay = `${0.14 + idx * 0.04}s`;

              return (
                <a
                  key={item.href}
                  class={styles.navCard}
                  href={item.href}
                  data-active={isActive}
                  style={{ "--stagger-delay": delay }}
                  onClick$={() => {
                    isOpen.value = false;
                  }}
                  {...(item.isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <div class={styles.navCardIconWrap}>
                    <svg
                      class={styles.navCardIcon}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {paths.map((d) => (
                        <path key={d} d={d} />
                      ))}
                    </svg>
                  </div>
                  <div class={styles.navCardContent}>
                    <span class={styles.navCardLabel}>{item.label}</span>
                    {item.description && (
                      <span class={styles.navCardDesc}>{item.description}</span>
                    )}
                  </div>
                  <svg
                    class={styles.navCardArrow}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </a>
              );
            })}
          </div>

          {/* Category showcase strip */}
          <div
            class={styles.categorySection}
            style={{ "--stagger-delay": `${0.14 + NAV_ITEMS.length * 0.04 + 0.02}s` }}
          >
            <div
              class={styles.sectionLabel}
              style={{ "--stagger-delay": `${0.14 + NAV_ITEMS.length * 0.04 + 0.02}s` }}
            >
              Categories
            </div>
            <div class={styles.categoryStrip}>
              {CATEGORIES.map((cat) => (
                <span key={cat.label} class={[styles.categoryPill, styles[cat.className]]}>
                  <span class={styles.categoryDot} aria-hidden="true" />
                  {cat.label}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <hr
            class={styles.divider}
            style={{ "--stagger-delay": `${0.14 + NAV_ITEMS.length * 0.04 + 0.08}s` }}
          />

          {/* Utility row */}
          <div
            class={styles.utilityRow}
            style={{ "--stagger-delay": `${0.14 + NAV_ITEMS.length * 0.04 + 0.1}s` }}
          >
            <a
              class={styles.utilityItem}
              href="/support"
              onClick$={() => {
                isOpen.value = false;
              }}
            >
              <svg
                class={styles.utilityIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <circle cx="12" cy="17" r="0.5" fill="currentColor" stroke="none" />
              </svg>
              <span class={styles.utilityLabel}>Support</span>
            </a>

            <div class={styles.utilityItem}>
              <svg
                class={styles.utilityIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
              <span class={styles.utilityLabel}>Theme</span>
              <div class={styles.themeControl}>
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        </div>

        {/* ─── Footer CTA ─── */}
        <div
          class={styles.panelFooter}
          style={{ "--stagger-delay": `${0.14 + NAV_ITEMS.length * 0.04 + 0.14}s` }}
        >
          <a
            class={styles.ctaButton}
            href="/#download"
            onClick$={() => {
              isOpen.value = false;
            }}
          >
            <svg
              class={styles.ctaIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span class={styles.ctaLabel}>Get the App</span>
          </a>
        </div>
      </aside>
    </>
  );
});
