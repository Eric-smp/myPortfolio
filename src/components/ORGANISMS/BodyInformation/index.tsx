import { useTheme } from "styled-components";
import * as Styles from "./styles";
import { NavBarHeader, PerfilUser, SectionOption } from "@/components";
import IconGitHub from "@/assets/svg/logo-github 1.svg";
import IconLinkedin from "@/assets/svg/logo-linkedin 1.svg";
import IconInstagram from "@/assets/svg/logo-instagram 1.svg";

export function BodyInformation() {
  const theme = useTheme();
  return (
    <Styles.Wrapper>
      <PerfilUser />
      <SectionOption />
      <div className="footer">
        <IconGitHub
          onClick={() => window.open("https://github.com/Eric-smp", "_blank")}
        />

        <IconLinkedin
          onClick={() =>
            window.open("https://www.linkedin.com/in/eric-smp/", "_blank")
          }
        />
        <IconInstagram
          onClick={() =>
            window.open("https://www.instagram.com/eric__sampaio/", "_blank")
          }
        />
      </div>
    </Styles.Wrapper>
  );
}
