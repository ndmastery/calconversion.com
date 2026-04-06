import { component$, useSignal, $, Slot } from "@builder.io/qwik";
import { useScrollSpy } from "./document-scroll-spy";
import { DocumentSidebar } from "./document-sidebar";
import { DocumentMobileDrawer } from "./document-mobile-drawer";
import shellStyles from "./document-layout-shell.module.css";
import cardStyles from "./document-layout-card.module.css";

export interface DocumentSection {
  id: string;
  title: string;
  icon: string;
  num: string;
}

export interface DocumentLayoutProps {
  sections: readonly DocumentSection[];
}

export const DocumentLayout = component$<DocumentLayoutProps>(({ sections }) => {
  const sectionIds = sections.map((s) => s.id);
  const { activeSection, scrollProgress } = useScrollSpy(sectionIds);
  const drawerOpen = useSignal(false);

  const scrollToSection = $((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      drawerOpen.value = false;
    }
  });

  return (
    <div class={shellStyles.page}>
      <div class={shellStyles.layout}>

        <Slot name="hero" />

        <DocumentSidebar
          sections={sections}
          activeSection={activeSection}
          scrollProgress={scrollProgress}
          onScrollTo$={scrollToSection}
        />

        <div class={cardStyles.content}>
          <Slot />
        </div>

        <DocumentMobileDrawer
          sections={sections}
          activeSection={activeSection}
          drawerOpen={drawerOpen}
          onScrollTo$={scrollToSection}
          onClose$={$(() => { drawerOpen.value = false; })}
          onToggle$={$(() => { drawerOpen.value = !drawerOpen.value; })}
        />

      </div>
    </div>
  );
});
