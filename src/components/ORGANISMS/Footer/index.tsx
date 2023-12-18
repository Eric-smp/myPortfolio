import IconProject from "@/assets/svg/iconProjetct.svg";
import * as Styles from "./styles";

export function Footer() {
  return (
    <Styles.Content>
      <div className="titleAndIcon">
        <IconProject />
        <h3>Eric Sampaio</h3>
      </div>
      <div className="FooterNav">
        <a href="https://github.com/Eric-smp" target="_blank">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/eric-smp/" target="_blank">
          Linkedin
        </a>
        <a href="https://www.instagram.com/eric__sampaio/" target="_blank">
          Instagram
        </a>
      </div>
    </Styles.Content>
  );
}
