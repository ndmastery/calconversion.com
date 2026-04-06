import { component$, useSignal, $ } from "@builder.io/qwik";
import shellStyles from "./footer-shell.module.css";
import brandStyles from "./footer-brand.module.css";
import linksStyles from "./footer-links.module.css";
import bottomStyles from "./footer-bottom.module.css";
import baseStyles from "./footer-base.module.css";
const styles: Record<string, string> = { ...shellStyles, ...brandStyles, ...linksStyles, ...bottomStyles, ...baseStyles };
import type { NavItem } from "@/types/navigation";
import { INTEGRATIONS } from "@/constants/integrations";
import { TRANSITION_DURATION } from "@/constants/timings";
import { NEWSLETTER_TEXT } from "@/constants/ui-text";

interface FooterLinkColumnProps {
  title: string;
  links: NavItem[];
  showNewsletter?: boolean;
}

export const FooterLinkColumn = component$<FooterLinkColumnProps>(
  ({ title, links, showNewsletter = false }) => {
    const submitState = useSignal<"idle" | "loading" | "success" | "error">("idle");
    const emailValue = useSignal("");

    const handleSubscribe = $(async () => {
      const email = emailValue.value.trim();
      if (!email) return;

      submitState.value = "loading";

      const now = new Date();
      const timestamp = now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZoneName: "short",
      });

      try {
        await fetch(INTEGRATIONS.googleSheetWebhookUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain" },
          body: JSON.stringify({ email, timestamp }),
        });

        submitState.value = "success";
        emailValue.value = "";

        setTimeout(() => {
          submitState.value = "idle";
        }, TRANSITION_DURATION.SUBSCRIBE_RESET_MS);
      } catch {
        submitState.value = "error";
        setTimeout(() => {
          submitState.value = "idle";
        }, TRANSITION_DURATION.SUBSCRIBE_RESET_MS);
      }
    });

    return (
      <div class={styles.linkColumn}>
        <h4 class={styles.linkColumnTitle}>{title}</h4>
        <ul class={styles.linkList}>
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                class={styles.linkItem}
                {...(link.isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label}
                <svg
                  class={styles.linkArrow}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
        {showNewsletter && (
          <div class={styles.newsletter}>
            <p class={styles.newsletterLabel}>
              {NEWSLETTER_TEXT.PROMPT}
            </p>
            <form
              class={styles.newsletterForm}
              preventdefault:submit
              onSubmit$={handleSubscribe}
              noValidate
            >
              <input
                type="email"
                class={styles.newsletterInput}
                placeholder={NEWSLETTER_TEXT.EMAIL_PLACEHOLDER}
                aria-label={NEWSLETTER_TEXT.EMAIL_ARIA}
                bind:value={emailValue}
                disabled={submitState.value === "loading" || submitState.value === "success"}
              />
              <button
                type="submit"
                class={[
                  styles.newsletterBtn,
                  submitState.value === "success" && styles.newsletterBtnSuccess,
                  submitState.value === "error" && styles.newsletterBtnError,
                ]}
                disabled={submitState.value === "loading" || submitState.value === "success"}
              >
                {submitState.value === "idle" && NEWSLETTER_TEXT.SUBSCRIBE}
                {submitState.value === "loading" && NEWSLETTER_TEXT.SENDING}
                {submitState.value === "success" && NEWSLETTER_TEXT.SUBSCRIBED}
                {submitState.value === "error" && NEWSLETTER_TEXT.FAILED}
              </button>
            </form>
          </div>
        )}
      </div>
    );
  }
);
