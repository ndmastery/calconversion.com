import { component$ } from "@builder.io/qwik";
import { ICONS } from "./document-icons";

interface SvgIconProps {
  name: string;
  class?: string;
}

export const SvgIcon = component$<SvgIconProps>(({ name, class: className }) => {
  return (
    <span
      class={className}
      dangerouslySetInnerHTML={ICONS[name] || ""}
    />
  );
});
