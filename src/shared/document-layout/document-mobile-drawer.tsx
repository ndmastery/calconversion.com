import { component$ } from "@builder.io/qwik";
import type { PropFunction, Signal } from "@builder.io/qwik";
import { SvgIcon } from "./svg-icon";
import { classMerge } from "@/utilities/class-merge";
import { UI_TEXT } from "@/constants/ui-text";
import drawerStyles from "./document-layout-drawer.module.css";

export interface DrawerSection {
  id: string;
  title: string;
  icon: string;
}

export interface DocumentMobileDrawerProps {
  sections: readonly DrawerSection[];
  activeSection: Signal<string>;
  drawerOpen: Signal<boolean>;
  onScrollTo$: PropFunction<(id: string) => void>;
  onClose$: PropFunction<() => void>;
  onToggle$: PropFunction<() => void>;
}

export const DocumentMobileDrawer = component$<DocumentMobileDrawerProps>(
  ({ sections, activeSection, drawerOpen, onScrollTo$, onClose$, onToggle$ }) => {
    return (
      <>
        <button
          class={drawerStyles.mobileNavToggle}
          onClick$={onToggle$}
          aria-label={UI_TEXT.OPEN_TOC}
        >
          <SvgIcon name="toc" class={drawerStyles.mobileNavIcon} />
        </button>

        <div
          class={classMerge(
            drawerStyles.mobileDrawerOverlay,
            drawerOpen.value && drawerStyles.mobileDrawerOverlayOpen
          )}
          onClick$={onClose$}
        />

        <div
          class={classMerge(
            drawerStyles.mobileDrawer,
            drawerOpen.value && drawerStyles.mobileDrawerOpen
          )}
        >
          <div class={drawerStyles.mobileDrawerHandle} />
          <div class={drawerStyles.mobileDrawerTitle}>{UI_TEXT.TABLE_OF_CONTENTS}</div>
          <nav class={drawerStyles.mobileNavList}>
            {sections.map((s) => (
              <button
                key={s.id}
                class={classMerge(
                  drawerStyles.mobileNavItem,
                  activeSection.value === s.id && drawerStyles.mobileNavItemActive
                )}
                onClick$={() => onScrollTo$(s.id)}
              >
                <SvgIcon name={s.icon} class={drawerStyles.mobileNavItemIcon} />
                {s.title}
              </button>
            ))}
          </nav>
        </div>
      </>
    );
  }
);
