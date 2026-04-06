import { INTEGRATIONS } from "@/constants/integrations";

export const FAQ_ITEMS = [
  {
    question: "What is CalConversion?",
    answer: "CalConversion is a free, cross-platform mobile conversion app available on iOS and Android. It supports 500+ units across 5 categories: Currency (260+ fiat, crypto, and stock tickers), Distance (144 units), Apparel (18+ countries), Data Storage (60 units), and Mass/Weight (122 units). It features real-time exchange rates from 11 independent providers, multi-target conversion (up to 6 targets at once), expression evaluation, Bargain Mode, calculation history, offline support, location-based defaults, three visual themes, and built-in bug reporting.",
  },
  {
    question: "Is CalConversion really free? Are there any hidden costs?",
    answer: "Yes, CalConversion is completely free to download and use on both iOS and Android. There are no subscriptions, premium tiers, in-app purchases, ads, paywalls, or hidden fees of any kind. Every feature — including Multi-Target Conversion, Bargain Mode, real-time rates from all 11 providers, and offline support — is available to every user at no cost.",
  },
  {
    question: "Which platforms is CalConversion available on?",
    answer: "CalConversion is available on iOS (App Store) and Android (Google Play Store). Both versions offer the same complete feature set, identical conversion catalogs, and access to the same 11 exchange rate providers. The app is optimized for phones and supports both portrait and landscape orientations.",
  },
  {
    question: "Do I need to create an account to use CalConversion?",
    answer: "No. CalConversion does not require account creation, registration, email verification, or any form of sign-up. You can start converting immediately after installation. The app does not collect personal identifiers — no name, email, phone number, or social login is ever needed.",
  },

  {
    question: "How many currencies does CalConversion support?",
    answer: "CalConversion supports 260+ currency units: 160+ fiat currencies from countries worldwide, 80+ cryptocurrencies (including BTC, ETH, SOL, DOGE, and many altcoins discovered dynamically from CoinPaprika), and 20+ global stock market tickers (such as AAPL, GOOGL, TSLA, and AMZN, with live search to find additional stocks). New cryptocurrencies and stocks are discovered automatically as providers add them.",
  },
  {
    question: "How are exchange rates updated?",
    answer: "Exchange rates are fetched from 11 independent data providers in real-time. While the app is actively in use, fiat currency rates are polled every 60 seconds. Cryptocurrency coverage from CoinPaprika and supplemental stock market listings are refreshed approximately every 30 minutes. When you reopen the app after a period of inactivity, rates are refreshed immediately. All rates use HTTP over TLS (HTTPS) encryption.",
  },
  {
    question: "Which rate providers does CalConversion use?",
    answer: "For fiat currencies: Open Exchange Rates (primary), Frankfurter (secondary verification), and CurrencyAPI (tertiary coverage). For cryptocurrencies: CoinPaprika (discovery and rates) and CoinLore (supplementary rates). For stock market tickers: Financial Modeling Prep, Twelve Data, Finnhub, Alpha Vantage, Marketstack, and EODHD. Rates from multiple providers are cross-verified, and CalConversion automatically fails over to the next available provider if one is down.",
  },
  {
    question: "Can I choose which rate provider to use for a specific currency?",
    answer: "Yes. CalConversion lets you view all available rate sources for any given currency and manually select which provider's rate you want to use. This is accessible through the Rate Source dialog in the converter. Your selection is remembered per currency. If your selected provider becomes unavailable, CalConversion will automatically fall back to the next available provider.",
  },
  {
    question: "Are the exchange rates suitable for financial transactions?",
    answer: "CalConversion displays market reference rates aggregated from 11 independent providers. These rates are indicative and intended for general-purpose conversion, comparison, and budgeting. They may differ from the transactional rates offered by banks, money changers, forex brokers, or cryptocurrency exchanges. CalConversion should not be used as the sole basis for financial transactions, investment decisions, or trading activities.",
  },

  {
    question: "What is Multi-Target Conversion?",
    answer: "Multi-Target Conversion lets you convert a single input value into up to 6 different target units simultaneously, all displayed on the same screen. For example, you can type a price in USD and see it in EUR, GBP, JPY, AUD, and CAD at the same time — without re-entering the value or switching tabs. This works across all 5 conversion categories, not just currency. You can add, remove, and reorder target units from the results panel.",
  },
  {
    question: "What is Bargain Mode?",
    answer: "Bargain Mode is a dedicated two-way price comparison feature exclusive to the Currency category. It lets you type a price from either the source or target side and instantly see the equivalent in the other currency. It includes built-in arithmetic (+, −, ×, ÷) so you can add taxes, multiply quantities, or subtract discounts directly within the conversion — no separate calculator needed. It's designed for international shopping, travel budgeting, and market haggling.",
  },
  {
    question: "What is Expression Evaluation?",
    answer: "Expression Evaluation lets you type mathematical expressions directly into the input field — like 5×20+10 or 1500÷3−45 — and CalConversion evaluates them instantly before converting the result. Expressions support addition (+), subtraction (−), multiplication (×), and division (÷), with a maximum length of 50 characters. This eliminates the need to switch between a calculator app and a converter. You can also press the equals (=) button in expression mode to resolve the expression and save it to history.",
  },
  {
    question: "How does Calculation History work?",
    answer: "Every conversion you perform is automatically saved to your local history with a full timestamp, the input expression, evaluated result, source unit, all target units, and all converted results. The history stores up to 50 entries — the oldest is automatically removed when a new one is added beyond this limit. You can browse, reuse, delete individual entries, batch-select and delete multiple entries, or clear all history. All history data is stored locally on your device and is never synced to any cloud service.",
  },
  {
    question: "How does offline support work?",
    answer: "CalConversion caches the latest exchange rates locally on your device using platform-native storage (SharedPreferences on Android, UserDefaults on iOS). When you lose internet connectivity — whether you're on a flight, in a remote area, or simply without data — the app automatically falls back to cached rates. All non-currency categories (Distance, Apparel, Data Storage, Mass) work fully offline at all times since they use static conversion factors. When connectivity is restored, rates are refreshed automatically.",
  },
  {
    question: "What does Location-Based Defaults do?",
    answer: "When you grant location permission, CalConversion detects your country and automatically sets your local currency as the default. For example, if you're in Japan, JPY is pre-selected; if you're in the UK, GBP appears. If you deny location permission, the app defaults to EUR → USD. Location is processed locally on your device — your coordinates are never sent to any external server. The country detection uses coarse (approximate) location only and does not track you in the background.",
  },
  {
    question: "What themes are available?",
    answer: "CalConversion offers three visual themes: Light mode for bright environments, Dark mode for comfortable nighttime use with reduced eye strain, and AMOLED mode — a true black theme (#000000 background) specifically optimized for OLED and AMOLED displays. AMOLED mode can save up to 30% battery on devices with OLED screens because true black pixels are completely turned off. You can switch between themes instantly from the top bar menu.",
  },

  {
    question: "What distance units does CalConversion support?",
    answer: "CalConversion supports 144 distance and length units across metric, imperial, maritime, astronomical, and 12+ historical measurement systems. This includes everyday units (km, miles, feet, inches) as well as specialized units like nautical miles, light years, angstroms, and traditional units from Asian, Indian, Southeast Asian, Islamic/Arabic, Persian, Biblical, African, Celtic/Nordic, Ottoman, Hindu/Vedic, Polynesian, and typographic measurement systems.",
  },
  {
    question: "How does apparel/clothing size conversion work?",
    answer: "The Apparel category converts sizes across 18+ countries for men's shoes, women's shoes, children's shoes, clothing, pants, and rings. You select your known size in one country's standard and see equivalents for all other supported countries. A built-in Size Guide shows valid input ranges for each country and gender, so you always know what values to enter. Note: apparel sizes are standardized approximations — individual fit may vary between brands and manufacturers.",
  },
  {
    question: "What data storage units are supported?",
    answer: "CalConversion supports 60 data storage and transfer units organized into Bit Units, Byte Units, Binary (IEC) Units (KiB, MiB, GiB, TiB), SI Extensions, Structural Units, and Storage Media (Floppy Disk, CD, DVD, Blu-ray, etc.). This covers both the SI decimal system (KB, MB, GB) and the IEC binary system (KiB, MiB, GiB) so you can avoid confusion between the two.",
  },
  {
    question: "What mass/weight units are supported?",
    answer: "CalConversion supports 122 mass and weight units spanning Metric, Imperial, Precious Metals (troy ounce, carat), Apothecary, Scientific (atomic mass unit, Planck mass), and traditional systems from cultures around the world — including Asian, Indian, Middle Eastern, Southeast Asian, Latin American, Islamic/Arabic, Hindu/Vedic, Biblical, Persian, African, Ottoman, Polynesian, and European Historical measurement systems.",
  },

  {
    question: "Does CalConversion collect my personal data?",
    answer: "No. CalConversion does not require account creation and does not collect, store, or transmit personal information to any server. There are no analytics, advertising SDKs, user tracking, or telemetry of any kind. All data — including conversion history, cached rates, and preferences — is stored locally on your device and never leaves it (except bug reports you voluntarily submit).",
  },
  {
    question: "What data is stored on my device?",
    answer: "CalConversion stores the following locally: up to 50 conversion history entries (with timestamps, expressions, and results), cached exchange rates and last update time, discovered cryptocurrency and stock metadata, your theme preference, selected rate source preferences per currency, and the last-used converter category and unit selections. All data is stored in platform-native sandboxed storage and is not accessible to other apps.",
  },
  {
    question: "Can I delete my data?",
    answer: "Yes. You can delete individual history entries or clear all history from within the app. To completely remove all CalConversion data, clear the app's data from your device settings (Android: Settings → Apps → CalConversion → Clear Data; iOS: uninstall and reinstall). Uninstalling the app permanently deletes all locally stored data.",
  },

  {
    question: "How do I report a bug?",
    answer: "CalConversion has a built-in bug reporting tool accessible from the app's settings or top bar menu. You can select a bug category, describe the issue in detail, and attach screenshots or other files. Reports are sent directly to the development team via authenticated SMTP with TLS encryption. The report automatically includes your device model, OS version, app version, and screen resolution to help us diagnose the issue. You do not need to provide your email address unless you want to be contacted about your report.",
  },
  {
    question: "Can I suggest a new feature or unit?",
    answer: `Yes! You can use the same built-in bug reporting tool to submit feature requests and suggestions. Select the appropriate category and describe your idea. You can also email us directly at ${INTEGRATIONS.contactEmail}. We review every submission and prioritize additions based on user demand.`,
  },

  {
    question: "How accurate are the conversion results?",
    answer: "For non-currency categories (Distance, Data Storage, Mass), CalConversion uses mathematically exact conversion factors with double-precision floating-point arithmetic (up to 15 decimal places). For currency conversions, accuracy depends on the refreshness and reliability of exchange rates from 11 cross-verified providers. For apparel sizes, conversions follow standardized international sizing tables but individual brand fit may vary.",
  },
  {
    question: "What happens if all rate providers are down?",
    answer: "CalConversion implements multi-level failover. If the primary fiat provider (Open Exchange Rates) is unavailable, it falls back to Frankfurter, then CurrencyAPI. Crypto and stock providers have similar cascading fallbacks. If all providers are unreachable, the app uses locally cached rates from the last successful fetch and displays an 'Using cached rates' indicator so you always know the data freshness.",
  },
  {
    question: "Why does the app request location permission?",
    answer: "Location permission is used solely to detect your country and pre-select your local currency. It uses coarse (approximate) location only, processed entirely on your device — coordinates are never sent externally. The permission is optional: if denied, CalConversion defaults to EUR → USD. The app does not track your location in the background and does not require location access for any functionality beyond setting the default currency.",
  },
  {
    question: "What is the maximum input length?",
    answer: "Standard numeric inputs support up to 15 characters. Mathematical expressions (using +, −, ×, ÷) support up to 50 characters. Clothing/apparel size inputs support up to 3 characters. These limits ensure responsive performance and prevent interface overflow.",
  },
  {
    question: "How often are cached rates refreshed?",
    answer: "While the app is actively in use, fiat currency rates are polled every 60 seconds. Supplemental cryptocurrency coverage (from CoinPaprika) and stock market catalog listings refresh approximately every 30 minutes. Stock quotes for selected tickers are refreshed on demand and when the cache is stale. When you reopen the app, rates are fetched immediately.",
  },
];

export const CONTACT_INFO = {
  email: INTEGRATIONS.contactEmail,
  responseTime: "24-48 hours",
} as const;

export const BUG_REPORT_INFO = {
  description: "Use the built-in bug reporter in the app settings to send detailed bug reports with screenshots and file attachments directly to our development team. Reports are delivered via authenticated SMTP with TLS encryption and automatically include your device model, OS version, and app version for faster diagnosis. No personal contact information is required.",
  emailFallback: INTEGRATIONS.contactEmail,
} as const;
