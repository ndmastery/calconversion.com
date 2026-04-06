import { component$, Slot } from "@builder.io/qwik";
import { SvgIcon } from "./svg-icon";
import { COMPANY } from "@/constants/brand";
import { classMerge } from "@/utilities/class-merge";
import gatewayHeroStyles from "./document-layout-gateway-hero.module.css";
import gatewayPathwayStyles from "./document-layout-gateway-pathway.module.css";
import gatewayContactStyles from "./document-layout-gateway-contact.module.css";

const gatewayStyles: Record<string, string> = {
  ...gatewayHeroStyles,
  ...gatewayPathwayStyles,
  ...gatewayContactStyles,
};

export interface GatewayPathwayCard {
  icon: string;
  alt?: boolean;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref?: string;
}

export interface DocumentGatewayProps {
  subtitle: string;
  pathwayCards: GatewayPathwayCard[];
  responseMessage: string;
}

export const DocumentGateway = component$<DocumentGatewayProps>(
  ({ subtitle, pathwayCards, responseMessage }) => {
    return (
      <div class={gatewayStyles.cardBody}>
        <div class={gatewayStyles.gwHero}>
          <div class={gatewayStyles.gwHeroGlow} />
          <div class={gatewayStyles.gwHeroIconWrap}>
            <SvgIcon name="headset" class={gatewayStyles.gwHeroIcon} />
          </div>
          <h3 class={gatewayStyles.gwHeroTitle}>Need Help? We're Here.</h3>
          <p class={gatewayStyles.gwHeroSubtitle}>{subtitle}</p>
        </div>

        <div class={gatewayStyles.gwPathwayGrid}>
          {pathwayCards.map((card) => (
            <div key={card.icon} class={gatewayStyles.gwPathwayCard}>
              <div
                class={classMerge(
                  gatewayStyles.gwPathwayIconWrap,
                  card.alt ? gatewayStyles.gwPathwayIconAlt : ""
                )}
              >
                <SvgIcon name={card.icon} class={gatewayStyles.gwPathwayIcon} />
              </div>
              <h4 class={gatewayStyles.gwPathwayTitle}>{card.title}</h4>
              <p class={gatewayStyles.gwPathwayDesc}>{card.description}</p>
              {card.ctaHref ? (
                <a
                  href={card.ctaHref}
                  class={classMerge(
                    gatewayStyles.gwPathwayCta,
                    card.alt ? gatewayStyles.gwPathwayCtaAlt : ""
                  )}
                >
                  {card.ctaLabel}
                  <SvgIcon name="arrow-right" class={gatewayStyles.gwCtaArrow} />
                </a>
              ) : (
                <Slot name={`cta-${card.icon}`} />
              )}
            </div>
          ))}
        </div>

        <div class={gatewayStyles.gwContactRow}>
          <a href={`mailto:${COMPANY.email}`} class={gatewayStyles.gwContactChip}>
            <SvgIcon name="email" class={gatewayStyles.gwChipIcon} />
            <div class={gatewayStyles.gwChipContent}>
              <span class={gatewayStyles.gwChipLabel}>Email</span>
              <span class={gatewayStyles.gwChipValue}>{COMPANY.email}</span>
            </div>
          </a>
          <a
            href={COMPANY.website}
            target="_blank"
            rel="noopener noreferrer"
            class={gatewayStyles.gwContactChip}
          >
            <SvgIcon name="website" class={gatewayStyles.gwChipIcon} />
            <div class={gatewayStyles.gwChipContent}>
              <span class={gatewayStyles.gwChipLabel}>Website</span>
              <span class={gatewayStyles.gwChipValue}>{COMPANY.website}</span>
            </div>
          </a>
          <div class={gatewayStyles.gwContactChip}>
            <SvgIcon name="dev" class={gatewayStyles.gwChipIcon} />
            <div class={gatewayStyles.gwChipContent}>
              <span class={gatewayStyles.gwChipLabel}>Developer</span>
              <span class={gatewayStyles.gwChipValue}>{COMPANY.name}</span>
            </div>
          </div>
        </div>

        <div class={gatewayStyles.gwResponseStrip}>
          <div class={gatewayStyles.gwResponseIconWrap}>
            <SvgIcon name="clock-ring" class={gatewayStyles.gwResponseIcon} />
          </div>
          <p class={gatewayStyles.gwResponseText} dangerouslySetInnerHTML={responseMessage} />
        </div>
      </div>
    );
  }
);
