export type FeatureTier = "hero" | "core" | "utility";

export interface Feature {
  title: string;
  description: string;
  whyItMatters: string;
  useCases: string[];
  highlights: string[];
  iconPath: string;
  accentColor: string;
  tier: FeatureTier;
  number: string;
  micro: string;
  isExclusive: boolean;
}
