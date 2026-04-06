import type { Showcase } from "@/types/showcase";

export const SHOWCASES: Showcase[] = [
  {
    category: "Currency",
    categoryColor: "var(--color-currency-start)",
    emoji: "💱",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    scenario: "Shopping From Overseas Websites",
    problem:
      "You find an item on a foreign store but the price is in an unfamiliar currency. You open a browser tab for the exchange rate, then grab your phone calculator to add shipping and tax. By the time you figure out the real cost, you've wasted minutes and still aren't sure it's a good deal. Most converter apps handle only one currency pair at a time with no built-in math.",
    solution:
      "Open Bargain Mode, type the foreign price, add shipping, multiply by quantity — all inside the conversion field. The total instantly appears in your home currency. Switch to Multi-Target to see that same total in 5 other currencies at once. Live rates from 11 cross-verified providers mean you can trust every number on screen.",
    highlights: ["Bargain Mode", "Multi-Target Conversion", "11 Rate Providers"],
  },
  {
    category: "Apparel",
    categoryColor: "var(--color-apparel-start)",
    emoji: "👗",
    icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
    scenario: "Ordering Clothes & Shoes Internationally",
    problem:
      "You want shoes from an international brand but sizes read EU 42, UK 8, US 9, JP 27. Every country uses different standards — men's, women's, and children's scales all differ. Online size charts conflict with each other. You order the wrong size, face expensive returns, and the same nightmare repeats with clothing across every garment type.",
    solution:
      "CalConversion's Apparel category has size tables for 18+ countries covering men's shoes, women's shoes, children's shoes, clothing, pants, and rings. Select your known size and instantly see equivalents in every supported country. A dedicated Size Guide shows valid input ranges so there's never ambiguity.",
    highlights: ["18+ Country Size Tables", "Size Guide", "All Garment Types"],
  },
  {
    category: "Data Storage",
    categoryColor: "var(--color-storage-start)",
    emoji: "💾",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
    scenario: "Understanding Cloud Storage & File Sizes",
    problem:
      "Your cloud storage shows 15 GB free but your video is listed as 2,847 MB — will it fit? You need to upload 50 photos at 4.2 MB each — how much space is that? Your ISP advertises Mbps but downloads show KB/s. No calculator app understands the difference between megabytes and mebibytes, or SI vs IEC binary units.",
    solution:
      "CalConversion supports 60 data storage and transfer units — from bits to Blu-ray discs, covering SI (MB, GB, TB) and IEC binary (MiB, GiB, TiB) prefixes. Type 50×4.2 MB using Expression Evaluation and see exactly how much space you need. Multi-Target shows results in every unit on a single screen.",
    highlights: ["60 Storage Units", "Expression Evaluation", "SI & IEC Binary"],
  },
  {
    category: "Distance",
    categoryColor: "var(--color-distance-start)",
    emoji: "📐",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    scenario: "Navigating Measurements While Traveling",
    problem:
      "A recipe uses cups and ounces but your tools measure in grams and milliliters. Road signs show kilometers but your car reads miles. A real estate listing abroad quotes square meters while you think in square feet. The world uses dozens of measurement systems and most converter apps only support 10–15 common units.",
    solution:
      "CalConversion's Distance category covers 144 units across metric, imperial, maritime, astronomical, and 12+ historical systems — including Southeast Asian, Persian, Biblical, Celtic, and Ottoman units. Expression Evaluation lets you calculate total distance (5.2+3.8+7.1 km) and convert instantly. Location-Based Defaults auto-set your preferred system.",
    highlights: ["144 Distance Units", "Location-Based Defaults", "12+ Historical Systems"],
  },
  {
    category: "Mass",
    categoryColor: "var(--color-mass-start)",
    emoji: "⚖️",
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
    scenario: "Working With Weights Across Systems",
    problem:
      "A foreign recipe lists butter in sticks and flour in cups but your scale shows grams. You're shipping internationally — the carrier wants pounds but you measured kilograms and customs asks for ounces. A jeweler quotes gold per troy ounce but you need cost per gram. Common apps handle kg and lbs but not troy ounces, carats, or traditional units.",
    solution:
      "CalConversion includes 122 mass units spanning metric, imperial, precious metals, apothecary, scientific, and 14+ traditional systems worldwide. Use Expression Evaluation to add up package weights (3×2.5+1.8 kg) and see totals in pounds and ounces instantly. Every conversion is saved in your history with exact timestamps.",
    highlights: ["122 Mass Units", "Calculation History", "14+ Traditional Systems"],
  },
];
