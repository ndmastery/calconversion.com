import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import shellStyles from "./footer-shell.module.css";
import brandStyles from "./footer-brand.module.css";
import linksStyles from "./footer-links.module.css";
import bottomStyles from "./footer-bottom.module.css";
import baseStyles from "./footer-base.module.css";
const styles: Record<string, string> = { ...shellStyles, ...brandStyles, ...linksStyles, ...bottomStyles, ...baseStyles };
import { Container } from "@/shared/container/container";
import { FooterBrand } from "@/domain/footer/footer-brand";
import { FooterLinkColumn } from "@/domain/footer/footer-link-column";
import { FooterBottom } from "@/domain/footer/footer-bottom";
import {
  FOOTER_PRODUCT_LINKS,
  FOOTER_LEGAL_LINKS,
} from "@/constants/navigation";

export const Footer = component$(() => {
  const isVisible = useSignal(false);

  useVisibleTask$(({ cleanup }) => {
    const el = document.getElementById("footer-nexus");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    cleanup(() => observer.disconnect());
  });

  return (
    <footer id="footer-nexus" class={styles.footer}>

      <div class={styles.aurora} aria-hidden="true">
        <div class={styles.auroraOrb} />
        <div class={styles.auroraOrb} />
        <div class={styles.auroraOrb} />
      </div>

      <div class={styles.topDivider} aria-hidden="true" />

      <div class={styles.content}>
        <Container>

          <div
            class={[
              styles.mainGrid,
              styles.stagger,
            ].join(" ")}
          >
            <div
              class={[
                styles.brandColumn,
                styles.revealUp,
                isVisible.value && styles.visible,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <FooterBrand />
            </div>

            <div
              class={[
                styles.revealUp,
                isVisible.value && styles.visible,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <FooterLinkColumn title="Product" links={FOOTER_PRODUCT_LINKS} />
            </div>

            <div
              class={[
                styles.revealUp,
                isVisible.value && styles.visible,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <FooterLinkColumn title="Legal" links={FOOTER_LEGAL_LINKS} />
            </div>

            <div
              class={[
                styles.revealUp,
                isVisible.value && styles.visible,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <FooterLinkColumn
                title="Newsletter"
                links={[]}
                showNewsletter
              />
            </div>
          </div>

          <div
            class={[
              styles.revealUp,
              isVisible.value && styles.visible,
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <FooterBottom />
          </div>
        </Container>
      </div>
    </footer>
  );
});
