import shellStyles from "./document-layout-shell.module.css";
import heroStyles from "./document-layout-hero.module.css";
import sidebarStyles from "./document-layout-sidebar.module.css";
import cardStyles from "./document-layout-card.module.css";
import providersStyles from "./document-layout-providers.module.css";
import gatewayHeroStyles from "./document-layout-gateway-hero.module.css";
import gatewayPathwayStyles from "./document-layout-gateway-pathway.module.css";
import gatewayContactStyles from "./document-layout-gateway-contact.module.css";
import drawerStyles from "./document-layout-drawer.module.css";
import printStyles from "./document-layout-print.module.css";

export const documentStyles: Record<string, string> = {
  ...shellStyles,
  ...heroStyles,
  ...sidebarStyles,
  ...cardStyles,
  ...providersStyles,
  ...gatewayHeroStyles,
  ...gatewayPathwayStyles,
  ...gatewayContactStyles,
  ...drawerStyles,
  ...printStyles,
};
