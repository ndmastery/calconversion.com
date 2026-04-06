import { component$ } from "@builder.io/qwik";
import shellStyles from "./footer-shell.module.css";
import brandStyles from "./footer-brand.module.css";
import linksStyles from "./footer-links.module.css";
import bottomStyles from "./footer-bottom.module.css";
import baseStyles from "./footer-base.module.css";
const styles: Record<string, string> = { ...shellStyles, ...brandStyles, ...linksStyles, ...bottomStyles, ...baseStyles };
import {
  BRAND_NAME,
  BRAND_DESCRIPTION,
  SOCIAL_LINKS,
} from "@/constants/brand";
import { CATEGORIES } from "@/constants/categories";

export const FooterBrand = component$(() => {
  return (
    <div class={styles.brandColumn}>

      <div class={styles.brandLogo}>
        <div class={styles.brandIcon}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 4h16v16H4z" />
            <path d="M9 9h6M9 12h6M9 15h4" />
          </svg>
        </div>
        <span class={styles.brandName}>{BRAND_NAME}</span>
      </div>

      <p class={styles.brandTagline}>{BRAND_DESCRIPTION}</p>

      <div class={styles.categoryPills}>
        {CATEGORIES.map((cat) => (
          <span key={cat.id} class={styles.categoryPill}>
            <span
              class={styles.pillDot}
              style={{
                background: `linear-gradient(135deg, ${cat.gradientStart}, ${cat.gradientEnd})`,
                color: cat.gradientStart,
              }}
            />
            {cat.name}
          </span>
        ))}
      </div>

      <div class={styles.socialRow}>
        <a
          href={SOCIAL_LINKS.twitter.url}
          target="_blank"
          rel="noopener noreferrer"
          class={`${styles.socialLink} ${styles.socialTwitter}`}
          aria-label="Twitter"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href={SOCIAL_LINKS.github.url}
          target="_blank"
          rel="noopener noreferrer"
          class={`${styles.socialLink} ${styles.socialGithub}`}
          aria-label="GitHub"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </a>
        <a
          href={SOCIAL_LINKS.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          class={`${styles.socialLink} ${styles.socialInstagram}`}
          aria-label="Instagram"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>
        <a
          href={SOCIAL_LINKS.threads.url}
          target="_blank"
          rel="noopener noreferrer"
          class={`${styles.socialLink} ${styles.socialThreads}`}
          aria-label="Threads"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.432 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.187.408-2.26 1.33-3.021.88-.726 2.132-1.137 3.628-1.194 1.088-.04 2.089.08 2.992.345.02-.6.018-1.2-.073-1.758-.2-1.312-.805-1.96-2.387-2.03-1.02.02-1.84.315-2.368.856l-.164.178-1.86-1.07.216-.293c.803-1.094 2.192-1.71 3.918-1.74h.164c1.534.03 2.768.546 3.567 1.49.737.871 1.12 2.082 1.14 3.602v.04c.005.26.005.53-.004.8 1.016.576 1.834 1.39 2.38 2.391.726 1.332 1.086 3.058.505 5.1-.753 2.652-2.891 4.508-5.98 5.142-.736.152-1.527.232-2.36.238zm-.07-6.86c1.038-.063 1.82-.443 2.322-1.13.375-.511.653-1.17.814-1.963-.646-.225-1.357-.343-2.134-.343h-.128c-1.013.037-1.79.276-2.313.714-.496.416-.734.946-.706 1.478.03.554.363 1.027.938 1.335.547.293 1.184.382 1.744.382l.231-.006.232-.007z" />
          </svg>
        </a>
        <a
          href={SOCIAL_LINKS.tiktok.url}
          target="_blank"
          rel="noopener noreferrer"
          class={`${styles.socialLink} ${styles.socialTiktok}`}
          aria-label="TikTok"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
          </svg>
        </a>
        <a
          href={SOCIAL_LINKS.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          class={`${styles.socialLink} ${styles.socialLinkedin}`}
          aria-label="LinkedIn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </div>
  );
});
