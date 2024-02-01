import { AbilityCard } from "@/components";
import IconJavaScript from "@/assets/svg/iconJavaScript.svg";
import IconHtml from "@/assets/svg/iconHTML.svg";
import IconCSS from "@/assets/svg/iconCSS.svg";
import IconReact from "@/assets/svg/iconReact.svg";
import IconNext from "@/assets/svg/iconNextJS.svg";
import IconStyledComponents from "@/assets/svg/iconStyle-components.svg";
import IconTypeScript from "@/assets/svg/iconTypeScript.svg";
import IconCypress from "@/assets/svg/cypress.svg";

import * as Styles from "./styles";

export function AbilityDev() {
  return (
    <Styles.Content>
      <AbilityCard icon={<IconHtml />} language="HTML" />
      <AbilityCard icon={<IconCSS />} language="CSS" />
      <AbilityCard icon={<IconJavaScript />} language="JavaScript" />
      <AbilityCard icon={<IconTypeScript />} language="TypeScript" />
      <AbilityCard icon={<IconReact />} language="React" />
      <AbilityCard icon={<IconNext />} language="NextJS" />
      <AbilityCard icon={<IconStyledComponents />} language="css-in-js" />
      <AbilityCard icon={<IconCypress />} language="Cypress" />
    </Styles.Content>
  );
}
