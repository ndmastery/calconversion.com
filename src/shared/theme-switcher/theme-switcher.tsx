import { component$, useSignal, useVisibleTask$, $ } from "@builder.io/qwik";
import { ThemeMode } from "@/enums/theme-mode";
import { STORAGE_KEYS } from "@/constants/storage";
import { TRANSITION_DURATION } from "@/constants/timings";
import { THEME_LABELS } from "@/constants/ui-text";
import styles from "./theme-switcher.module.css";

const MODES = [ThemeMode.System, ThemeMode.Light, ThemeMode.Dark, ThemeMode.Amoled] as const;

function getResolvedTheme(mode: ThemeMode): "light" | "dark" | "amoled" {
  if (mode === ThemeMode.System) {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
    return "dark";
  }
  return mode as "light" | "dark" | "amoled";
}

function applyTheme(mode: ThemeMode) {
  const resolved = getResolvedTheme(mode);
  document.documentElement.setAttribute("data-theme", resolved);
  localStorage.setItem(STORAGE_KEYS.THEME, mode);
}

export const ThemeSwitcher = component$(() => {
  const active = useSignal<ThemeMode>(ThemeMode.Dark);
  const isTransitioning = useSignal(false);

  useVisibleTask$(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.THEME) as ThemeMode | null;
    if (stored && Object.values(ThemeMode).includes(stored)) {
      active.value = stored;
      applyTheme(stored);
    } else {
      active.value = ThemeMode.Dark;
      applyTheme(ThemeMode.Dark);
    }

    if (stored === ThemeMode.System || !stored) {
      const mq = window.matchMedia("(prefers-color-scheme: light)");
      const handler = () => applyTheme(active.value);
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  });

  const cycleForward = $(() => {
    if (isTransitioning.value) return;
    isTransitioning.value = true;
    const idx = MODES.indexOf(active.value);
    const next = MODES[(idx + 1) % MODES.length];
    active.value = next;
    applyTheme(next);
    setTimeout(() => { isTransitioning.value = false; }, TRANSITION_DURATION.THEME_CYCLE_MS);
  });

  const cycleBackward = $((e: Event) => {
    e.preventDefault();
    if (isTransitioning.value) return;
    isTransitioning.value = true;
    const idx = MODES.indexOf(active.value);
    const prev = MODES[(idx - 1 + MODES.length) % MODES.length];
    active.value = prev;
    applyTheme(prev);
    setTimeout(() => { isTransitioning.value = false; }, TRANSITION_DURATION.THEME_CYCLE_MS);
  });

  const getLabel = (mode: ThemeMode) => {
    switch (mode) {
      case ThemeMode.System: return THEME_LABELS.SYSTEM;
      case ThemeMode.Light: return THEME_LABELS.LIGHT;
      case ThemeMode.Dark: return THEME_LABELS.DARK;
      case ThemeMode.Amoled: return THEME_LABELS.AMOLED;
    }
  };

  return (
    <button
      class={styles.cycler}
      onClick$={cycleForward}
      onContextMenu$={cycleBackward}
      aria-label={`Theme: ${getLabel(active.value)}. Click to switch.`}
    >
      <div class={styles.iconWrap} key={active.value}>
        {active.value === ThemeMode.System && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
        )}
        {active.value === ThemeMode.Light && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        )}
        {active.value === ThemeMode.Dark && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
        {active.value === ThemeMode.Amoled && (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a10 10 0 0 1 0 20z" fill="currentColor" />
          </svg>
        )}
      </div>
    </button>
  );
});
