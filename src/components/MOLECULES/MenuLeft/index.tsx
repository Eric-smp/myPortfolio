import { useGlobal } from "@/hooks/context/global";
import IconClose from "@/assets/svg/iconCloseModal.svg";
import IconArrowRigth from "@/assets/svg/arrowRigth.svg";
import IconGitHub from "@/assets/svg/logo-github 1.svg";
import IconLinkedin from "@/assets/svg/logo-linkedin 1.svg";
import IconInstagram from "@/assets/svg/logo-instagram 1.svg";
import Link from "next/link";
import * as Styles from "./styles";
import { useRouter } from "next/router";

export function MenuLeft() {
  const { visibleMenuMobile, setVisibleMenuMobile } = useGlobal();
  const router = useRouter();
  const handleGitHubClick = () => {
    // Redirecionar para o YouTube quando o ícone do GitHub for clicado
  };
  return (
    <Styles.Wrapper visibleMenuLeft={visibleMenuMobile}>
      <div className="contentMenuLeft">
        <div className="header">
          <h2>Eric Sampaio</h2>
          <IconClose onClick={() => setVisibleMenuMobile(false)} />
        </div>
        <div className="bodyMenuLeft">
          <div
            className="optionText"
            onClick={() => {
              router.push("/");
              setVisibleMenuMobile(false);
            }}
          >
            <h3>Inicio</h3>
            <IconArrowRigth />
          </div>
          <div
            className="optionText"
            onClick={() => {
              router.push("/aboutMy");
              setVisibleMenuMobile(false);
            }}
          >
            <h3>Sobre mim</h3>
            <IconArrowRigth />
          </div>
          <div
            className="optionText"
            onClick={() => {
              router.push("/developers ");
              setVisibleMenuMobile(false);
            }}
          >
            <h3>Desenvolvimentos</h3>
            <IconArrowRigth />
          </div>
          <div
            className="optionText"
            onClick={() => {
              router.push("/contacts");
              setVisibleMenuMobile(false);
            }}
          >
            <h3>Contatos</h3>
            <IconArrowRigth />
          </div>
        </div>
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
      </div>
    </Styles.Wrapper>
  );
}
