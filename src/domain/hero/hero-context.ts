import { createContextId, type Signal } from "@builder.io/qwik";
import { CAROUSEL_INTERVAL } from "@/constants/timings";

export interface HeroCategoryState {
  activeIndex: Signal<number>;
  resetKey: Signal<number>;
}

export const HeroCategoryContext = createContextId<HeroCategoryState>("hero-category");

export const CATEGORY_COUNT = 5;
export const CYCLE_INTERVAL_MS = CAROUSEL_INTERVAL.HERO_MS;

export const ROTATING_WORDS = ["Currency", "Distance", "Apparel", "Storage", "Weight"] as const;

export interface CategorySource {
  label: string;
  prefix: string;
  value: string;
}

export interface CategoryTarget {
  label: string;
  prefix: string;
  value: string;
}

export interface CategoryData {
  name: string;
  icon: string;
  color: string;
  source: CategorySource;
  targets: CategoryTarget[];
}

export const CATEGORIES: CategoryData[] = [
  {
    name: "Currency",
    icon: "💱",
    color: "var(--color-currency-start)",
    source: { label: "US Dollar", prefix: "🇺🇸 USD", value: "1,000.00" },
    targets: [
      { label: "Euro", prefix: "🇪🇺 EUR", value: "921.35" },
      { label: "British Pound", prefix: "🇬🇧 GBP", value: "789.42" },
      { label: "Japanese Yen", prefix: "🇯🇵 JPY", value: "149,832" },
    ],
  },
  {
    name: "Distance",
    icon: "📏",
    color: "var(--color-distance-start)",
    source: { label: "Kilometers", prefix: "km", value: "42.195" },
    targets: [
      { label: "Miles", prefix: "mi", value: "26.219" },
      { label: "Meters", prefix: "m", value: "42,195" },
      { label: "Feet", prefix: "ft", value: "138,435" },
    ],
  },
  {
    name: "Apparel",
    icon: "👟",
    color: "var(--color-apparel-start)",
    source: { label: "EU Shoe Size", prefix: "EU", value: "42" },
    targets: [
      { label: "US Size", prefix: "US", value: "9" },
      { label: "UK Size", prefix: "UK", value: "8" },
      { label: "JP Size", prefix: "JP", value: "27 cm" },
    ],
  },
  {
    name: "Storage",
    icon: "💾",
    color: "var(--color-storage-start)",
    source: { label: "Gigabytes", prefix: "GB", value: "256" },
    targets: [
      { label: "Megabytes", prefix: "MB", value: "262,144" },
      { label: "Terabytes", prefix: "TB", value: "0.25" },
      { label: "Gibibytes", prefix: "GiB", value: "238.42" },
    ],
  },
  {
    name: "Mass",
    icon: "⚖️",
    color: "var(--color-mass-start)",
    source: { label: "Kilograms", prefix: "kg", value: "75" },
    targets: [
      { label: "Pounds", prefix: "lb", value: "165.35" },
      { label: "Ounces", prefix: "oz", value: "2,645.5" },
      { label: "Grams", prefix: "g", value: "75,000" },
    ],
  },
];
