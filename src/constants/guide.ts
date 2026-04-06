import type { GuideStep } from "@/types/guide";

export const GUIDE_STEPS: GuideStep[] = [
  {
    stepNumber: 1,
    title: "Open & Auto-Detect Location",
    description:
      "Launch CalConversion and grant location access. The app instantly identifies your country and pre-selects your local currency — zero setup, zero typing. You can always override manually, but most users never need to.",
    detail: "Location data never leaves your device. Works fully offline after first launch.",
    highlight: "Zero-config setup",
  },
  {
    stepNumber: 2,
    title: "Pick a Conversion Category",
    description:
      "Choose from five specialized converters: Currency (260+ fiat, 80+ crypto, 20+ stocks), Distance & Length, Apparel & Ring Sizes, Data Storage, and Mass & Weight. Each category is color-coded with units organized by relevance.",
    detail: "500+ units across all categories — the most comprehensive converter on mobile.",
    highlight: "5 categories, 500+ units",
  },
  {
    stepNumber: 3,
    title: "Set Source & Target Units",
    description:
      "Select your source unit and up to 6 simultaneous targets. Compare results side by side — convert 100 USD into EUR, GBP, JPY, BTC, and AUD all at once, on a single screen, without switching tabs.",
    detail: "Multi-target works in every category, not just currency.",
    highlight: "Up to 6 targets at once",
  },
  {
    stepNumber: 4,
    title: "Enter a Value or Expression",
    description:
      "Type a number or a full math expression like 5×20+10. CalConversion evaluates it instantly and converts the result across all your targets — a built-in calculator and converter in one step.",
    detail: "Supports +, −, ×, ÷ with expressions up to 50 characters.",
    highlight: "Built-in expression engine",
  },
  {
    stepNumber: 5,
    title: "View Results & History",
    description:
      "All results appear simultaneously with real-time rates cross-verified across 11 independent providers. Every conversion is auto-saved with full timestamps, so you can revisit, compare trends, and track favorites.",
    detail: "Rates are cross-verified across providers for maximum accuracy.",
    highlight: "11 rate providers",
  },
  {
    stepNumber: 6,
    title: "Report Issues Instantly",
    description:
      "Found a bug? Use the built-in report tool — describe the issue, attach screenshots, and submit directly to the dev team. Device metadata is included automatically for faster resolution.",
    detail: "Reports are delivered via secure SMTP with full device context attached.",
    highlight: "Direct dev channel",
  },
];
