import { component$ } from "@builder.io/qwik";
import type { PropFunction, Signal } from "@builder.io/qwik";
import { SvgIcon } from "./svg-icon";
import { classMerge } from "@/utilities/class-merge";
import { UI_TEXT } from "@/constants/ui-text";
import sidebarStyles from "./document-layout-sidebar.module.css";

export interface SidebarSection {
  id: string;
  title: string;
  icon: string;
}

export interface DocumentSidebarProps {
  sections: readonly SidebarSection[];
  activeSection: Signal<string>;
  scrollProgress: Signal<number>;
  onScrollTo$: PropFunction<(id: string) => void>;
}

export const DocumentSidebar = component$<DocumentSidebarProps>(
  ({ sections, activeSection, scrollProgress, onScrollTo$ }) => {
    return (
      <aside class={sidebarStyles.sidebar}>
        <div class={sidebarStyles.sidebarLabel}>{UI_TEXT.CONTENTS_SIDEBAR_LABEL}</div>
        <nav class={sidebarStyles.sidebarNav}>
          {sections.map((s) => (
            <button
              key={s.id}
              class={classMerge(
                sidebarStyles.sidebarLink,
                activeSection.value === s.id && sidebarStyles.sidebarLinkActive
              )}
              onClick$={() => onScrollTo$(s.id)}
            >
              <SvgIcon name={s.icon} class={sidebarStyles.sidebarIcon} />
              {s.title}
            </button>
          ))}
        </nav>
        <div class={sidebarStyles.progressTrack}>
          <div
            class={sidebarStyles.progressFill}
            style={{ width: `${scrollProgress.value}%` }}
          />
        </div>
      </aside>
    );
  }
);
