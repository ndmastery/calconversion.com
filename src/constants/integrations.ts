export const INTEGRATIONS = {
  googleSheetWebhookUrl:
    import.meta.env.GOOGLE_SHEET_WEBHOOK_URL ?? "",
  appStoreUrl: import.meta.env.PUBLIC_APP_STORE_URL ?? "",
  playStoreUrl: import.meta.env.PUBLIC_PLAY_STORE_URL ?? "",
  contactEmail: import.meta.env.PUBLIC_CONTACT_EMAIL ?? "",
} as const;
