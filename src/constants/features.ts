import type { Feature } from "@/types/feature";

export const FEATURES: Feature[] = [
  {
    title: "Multi-Target Conversion",
    description:
      "Convert a single value into up to 6 different target units at the same time — all displayed side-by-side on one screen. Whether you're converting currencies, distances, apparel sizes, weights, or digital storage, every result appears instantly without switching tabs or re-entering values. No other conversion app offers this level of simultaneous multi-unit output.",
    whyItMatters:
      "Most conversion apps only let you convert one unit at a time, forcing you to repeat the same input again and again. Multi-Target eliminates that friction completely, saving significant time and reducing errors when you need to compare or share multiple results.",
    useCases: [
      "Compare a product price in USD, EUR, GBP, JPY, AUD, and CAD at a glance while shopping internationally",
      "Convert your height into cm, inches, feet, and meters simultaneously for filling out international forms",
      "See a file size in KB, MB, GB, TB, and PB at once when managing cloud storage or transferring data",
    ],
    highlights: [
      "Up to 6 target units simultaneously",
      "All results visible on a single screen",
      "Works across every conversion category",
      "No re-entering values — change once, update all",
    ],
    iconPath: "M4 6h16M4 12h16M4 18h8",
    accentColor: "#6C63FF",
    tier: "hero",
    number: "01",
    micro: "Up to 6 targets at once",
    isExclusive: true,
  },
  {
    title: "Real-Time Rates",
    description:
      "CalConversion pulls live exchange rates from 11 independent data providers covering fiat currencies, cryptocurrencies, and global stock indices. Every rate is cross-verified across multiple sources for maximum accuracy, with automatic failover — if one provider goes down, CalConversion seamlessly switches to the next without any interruption to you.",
    whyItMatters:
      "Exchange rates change constantly. Apps that rely on a single data source risk showing stale or inaccurate rates, which can lead to costly mistakes. Cross-verification across 11 providers ensures the rate you see is always reliable — critical for financial decisions, travel budgeting, and cross-border commerce.",
    useCases: [
      "Check the exact USD/EUR exchange rate before transferring money overseas to maximize your value",
      "Track cryptocurrency prices (BTC, ETH, USDT) alongside fiat currencies in one unified interface",
      "Verify that a quoted exchange rate at a money changer or bank is competitive before you commit",
    ],
    highlights: [
      "11 independent data providers",
      "Cross-verified for accuracy",
      "Automatic failover between sources",
      "Covers fiat, crypto, and stock indices",
    ],
    iconPath: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
    accentColor: "#8BC34A",
    tier: "hero",
    number: "02",
    micro: "11 providers, cross-verified",
    isExclusive: true,
  },
  {
    title: "Bargain Mode",
    description:
      "A dedicated price-comparison mode with built-in arithmetic that lets you calculate and compare prices across two currencies in real time. Type from either the source or target side — input a price in one currency and instantly see what it costs in another, complete with arithmetic operators so you can add taxes, multiply quantities, or subtract discounts on the fly.",
    whyItMatters:
      "When shopping abroad or online from international retailers, you need more than a simple currency conversion — you need to factor in quantities, taxes, and discounts. Bargain Mode combines a calculator and currency converter into one seamless workflow, something no existing app on the market provides.",
    useCases: [
      "Calculate 5 items × ¥2,480 each + 10% tax and instantly see the total in your home currency",
      "Compare whether a €89 product with free shipping is cheaper than a $95 product with $12 shipping",
      "Negotiate prices at a market abroad — type the vendor's asking price and see your cost in real time",
    ],
    highlights: [
      "Two-way price comparison",
      "Built-in arithmetic (+, −, ×, ÷)",
      "Input from either currency side",
      "Perfect for travel and international shopping",
    ],
    iconPath:
      "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    accentColor: "#66BB6A",
    tier: "hero",
    number: "03",
    micro: "Two-way price comparison",
    isExclusive: true,
  },

  {
    title: "Expression Evaluation",
    description:
      "Type full mathematical expressions like 5×20+10 or 1500÷3−45 directly into the input field — no calculator app needed. CalConversion evaluates expressions up to 50 characters long instantly and converts the result across all your target units. Supports addition, subtraction, multiplication, and division.",
    whyItMatters:
      "Switching between a calculator and a converter wastes time and introduces copy-paste errors. With built-in expression evaluation, you can perform complex calculations and convert the result in a single step — a workflow that's surprisingly absent from virtually every competitor.",
    useCases: [
      "Calculate total weight: type 3×2.5+1.8 in kg and instantly see the result in pounds, ounces, and grams",
      "Split a bill: type 847500÷4 in IDR and see each person's share in USD",
      "Compute accumulated distance: type 5.2+3.8+7.1 in km and see it in miles and meters",
    ],
    highlights: [
      "Supports +, −, ×, ÷ operators",
      "Up to 50-character expressions",
      "Result auto-converts to all targets",
      "No need for a separate calculator",
    ],
    iconPath:
      "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
    accentColor: "#42A5F5",
    tier: "core",
    number: "04",
    micro: "Built-in calculator",
    isExclusive: false,
  },
  {
    title: "Calculation History",
    description:
      "Every conversion you perform is automatically saved with a full timestamp, source value, target values, and the exchange rates used at that moment. Browse, search, and reuse past conversions at any time. Batch operations let you select and export multiple history entries. All data is stored locally on your device for complete privacy.",
    whyItMatters:
      "When you're tracking expenses, auditing past transactions, or simply trying to recall a rate you looked up last week, having a searchable history with exact timestamps and rates is invaluable. Most conversion apps either don't save history at all, or only keep the last few entries.",
    useCases: [
      "Review what exchange rate you used when you converted money during your last trip",
      "Re-run a complex multi-target conversion from last month without typing it all again",
      "Track your daily spending conversions during a business trip to compile an expense report",
    ],
    highlights: [
      "Full timestamps on every entry",
      "Batch select and export",
      "Searchable history log",
      "100% local storage — fully private",
    ],
    iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    accentColor: "#AB47BC",
    tier: "core",
    number: "05",
    micro: "Timestamped records",
    isExclusive: false,
  },
  {
    title: "Offline Support",
    description:
      "CalConversion caches the latest exchange rates so the app works fully without an internet connection. Convert currencies, distances, apparel sizes, weights, digital storage, and more — anywhere in the world, even in airplane mode. Rates are automatically refreshed whenever you reconnect.",
    whyItMatters:
      "Travelers, field workers, and anyone in areas with limited connectivity need reliable conversions without depending on a data connection. Offline mode ensures you're never stranded without the conversion data you need — whether you're on a flight, in a remote region, or simply conserving mobile data.",
    useCases: [
      "Convert currencies at an airport with no Wi-Fi while deciding how much local currency to withdraw",
      "Check recipe measurements in metric vs. imperial while camping in an area without cell service",
      "Quickly convert distances and weights during fieldwork in a remote construction site",
    ],
    highlights: [
      "Cached rates work without internet",
      "Auto-refresh when reconnected",
      "All categories available offline",
      "No Wi-Fi or mobile data needed",
    ],
    iconPath:
      "M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414 1 1 0 01-1.414-1.414z",
    accentColor: "#FFA726",
    tier: "core",
    number: "06",
    micro: "No internet required",
    isExclusive: false,
  },

  {
    title: "Location-Based Defaults",
    description:
      "CalConversion automatically detects your geographic location and pre-selects the most relevant default currency and unit preferences for your country. No manual configuration needed — the moment you open the app, it's already personalized for where you are. Travel to a new country and the defaults intelligently update.",
    whyItMatters:
      "Setting up currencies and units manually is tedious, especially for frequent travelers. Location-based defaults mean zero setup — the app just works from the first launch, and adapts as you move between countries.",
    useCases: [
      "Land in Japan and the app automatically sets JPY as your source currency",
      "Open the app in the UK and see GBP, miles, and stone pre-selected as your defaults",
      "Switch between countries during a multi-stop trip without reconfiguring anything",
    ],
    highlights: [
      "Auto-detect country on launch",
      "Pre-selects local currency and units",
      "Adapts when you travel",
      "Zero manual setup required",
    ],
    iconPath:
      "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    accentColor: "#26C6DA",
    tier: "utility",
    number: "07",
    micro: "Auto-detect country",
    isExclusive: false,
  },
  {
    title: "Three Themes",
    description:
      "Choose from three carefully crafted visual themes: Light mode for bright environments, Dark mode for comfortable nighttime use with reduced eye strain, and AMOLED mode — a true black theme specifically optimized for OLED and AMOLED displays that saves significant battery life on modern smartphones.",
    whyItMatters:
      "Screen comfort and battery life matter. A true AMOLED black theme (where pixels are completely off) isn't just aesthetic — it can reduce battery consumption by up to 30% on OLED screens compared to standard dark modes. Most apps still don't offer this option.",
    useCases: [
      "Switch to AMOLED mode on your Galaxy or iPhone to maximize battery during long travel days",
      "Use Light mode in bright outdoor settings for maximum readability",
      "Enable Dark mode at night to reduce blue light exposure and eye fatigue",
    ],
    highlights: [
      "Light, Dark, and AMOLED themes",
      "AMOLED uses true black (#000000)",
      "Up to 30% battery savings on OLED",
      "Instant theme switching",
    ],
    iconPath:
      "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
    accentColor: "#EC407A",
    tier: "utility",
    number: "08",
    micro: "Light · Dark · AMOLED",
    isExclusive: false,
  },
  {
    title: "Built-In Bug Reporting",
    description:
      "Report issues directly from within the app using a streamlined error-reporting form. Attach screenshots, describe the problem, and submit — your report is delivered via SMTP to the development team with full device and app-version metadata attached automatically. No need to leave the app, find an email address, or open a browser.",
    whyItMatters:
      "When something goes wrong, most users won't go out of their way to report it — they just leave. An in-app reporting system with zero friction makes it easy for users to contribute to quality improvement, and helps the development team catch and fix issues faster.",
    useCases: [
      "Spot an incorrect conversion rate and report it with a screenshot in under 30 seconds",
      "Describe a UI glitch and attach a screen recording directly from the bug-report form",
      "Suggest a new feature or unit category through the same reporting interface",
    ],
    highlights: [
      "In-app submission — no email needed",
      "Attach screenshots or files",
      "Auto-includes device metadata",
      "Delivered via secure SMTP",
    ],
    iconPath:
      "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    accentColor: "#EF5350",
    tier: "utility",
    number: "09",
    micro: "In-app reports",
    isExclusive: false,
  },
];

export const HERO_FEATURES = FEATURES.filter((f) => f.tier === "hero");
export const CORE_FEATURES = FEATURES.filter((f) => f.tier === "core");
export const UTILITY_FEATURES = FEATURES.filter((f) => f.tier === "utility");
