import { useTheme } from "styled-components";
import * as Styles from "./styles";
import { PerfilUser, SectionOption } from "@/components";
import IconGitHub from "@/assets/svg/logo-github 1.svg";
import IconLinkedin from "@/assets/svg/logo-linkedin 1.svg";
import IconInstagram from "@/assets/svg/logo-instagram 1.svg";
import IconGmail from "@/assets/svg/iconeGmailMenu.svg";

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
        <IconGmail
          onClick={() => window.open("mailto:e.sousa5980@gmail.com", "_blank")}
        />
      </div>
    </Styles.Wrapper>
  );
}
