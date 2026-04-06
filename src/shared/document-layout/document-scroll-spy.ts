import { useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";

export interface ScrollSpyState {
  activeSection: Signal<string>;
  scrollProgress: Signal<number>;
}

export function useScrollSpy(sectionIds: readonly string[]): ScrollSpyState {
  const activeSection = useSignal<string>(sectionIds[0] ?? "");
  const scrollProgress = useSignal(0);

  useVisibleTask$(() => {
    const sectionEls = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sectionEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id;
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sectionEls.forEach((el) => observer.observe(el));

    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.value =
        docHeight > 0 ? Math.min((window.scrollY / docHeight) * 100, 100) : 0;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  });

  return { activeSection, scrollProgress };
}
