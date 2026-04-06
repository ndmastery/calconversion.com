import { component$, Slot } from "@builder.io/qwik";
import providersStyles from "./document-layout-providers.module.css";

export type ProviderPanelVariant = "fiat" | "crypto" | "stocks";

export interface ProviderPanelItem {
  name: string;
  role: string;
}

export interface ProviderPanelProps {
  variant: ProviderPanelVariant;
  icon: string;
  title: string;
  badge: string;
  providers: ProviderPanelItem[];
}

export const ProviderPanel = component$<ProviderPanelProps>(
  ({ variant, icon, title, badge, providers }) => {
    const variantClass =
      variant === "fiat"
        ? providersStyles.providerPanelFiat
        : variant === "crypto"
          ? providersStyles.providerPanelCrypto
          : providersStyles.providerPanelStocks;

    return (
      <div class={`${providersStyles.providerPanel} ${variantClass}`}>
        <div class={providersStyles.providerPanelHeader}>
          <div class={providersStyles.providerPanelIconWrap}>
            <span
              class={providersStyles.providerPanelIcon}
              dangerouslySetInnerHTML={icon}
            />
          </div>
          <div class={providersStyles.providerPanelTitleGroup}>
            <div class={providersStyles.providerPanelTitle}>{title}</div>
            <span class={providersStyles.providerPanelBadge}>{badge}</span>
          </div>
        </div>
        <ul class={providersStyles.providerList}>
          {providers.map((p) => (
            <li key={p.name} class={providersStyles.providerRow}>
              <span class={providersStyles.providerRowDot} />
              <span class={providersStyles.providerRowName}>{p.name}</span>
              <span class={providersStyles.providerRowRole}>{p.role}</span>
            </li>
          ))}
        </ul>
        <Slot />
      </div>
    );
  }
);

export const DocumentProviderPanels = component$(() => {
  return (
    <div class={providersStyles.providerPanels}>
      <Slot />
    </div>
  );
});
