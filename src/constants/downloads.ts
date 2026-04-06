import { INTEGRATIONS } from "@/constants/integrations";

export const STORE_URLS = {
  appStore: INTEGRATIONS.appStoreUrl,
  playStore: INTEGRATIONS.playStoreUrl,
} as const;

export type PlatformId = "ios" | "android" | "windows" | "linux" | "macos" | "web";

export interface PlatformOption {
  id: PlatformId;
  label: string;
  sublabel: string;
  href: string;
  available: boolean;
}

export const PLATFORM_OPTIONS: PlatformOption[] = [
  {
    id: "windows",
    label: "Windows",
    sublabel: "Coming Soon",
    href: "#",
    available: false,
  },
  {
    id: "macos",
    label: "macOS",
    sublabel: "Coming Soon",
    href: "#",
    available: false,
  },
  {
    id: "linux",
    label: "Linux",
    sublabel: "Coming Soon",
    href: "#",
    available: false,
  },
  {
    id: "web",
    label: "Web App",
    sublabel: "In Development",
    href: "#",
    available: false,
  },
];

export const DOWNLOAD_STATS = [
  { label: "Units", value: "500+" },
  { label: "Categories", value: "5" },
  { label: "Rate Providers", value: "11" },
  { label: "Platforms", value: "6" },
] as const;
