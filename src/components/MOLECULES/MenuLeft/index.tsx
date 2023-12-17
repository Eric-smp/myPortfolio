import { useGlobal } from "@/hooks/context/global";
import IconClose from "@/assets/svg/iconCloseModal.svg";
import IconArrowRigth from "@/assets/svg/arrowRigth.svg";
import IconGitHub from "@/assets/svg/logo-github 1.svg";
import IconLinkedin from "@/assets/svg/logo-linkedin 1.svg";
import IconInstagram from "@/assets/svg/logo-instagram 1.svg";
import * as Styles from "./styles";
import { useRouter } from "next/router";

export function MenuLeft() {
  const {
    visibleMenuLeft,
    setVisibleMenuLeft,
    isSideBarVisible,
    setIsSideBarVisible,
  } = useGlobal();
  const router = useRouter();

  return (
    <Styles.Wrapper visibleMenuLeft={visibleMenuLeft} active={isSideBarVisible}>
      <div className="contentMenuLeft">
        <div className="header">
          <h2>Eric Sampaio</h2>
          <IconClose
            onClick={() => {
              setVisibleMenuLeft(false);
              setIsSideBarVisible(!visibleMenuLeft);
            }}
          />
        </div>
        <div className="bodyMenuLeft">
          <div
            className="optionText"
            onClick={() => {
              router.push("/");
              setVisibleMenuLeft(false);
            }}
          >
            <h3>Inicio</h3>
            <IconArrowRigth />
          </div>
          <div
            className="optionText"
            onClick={() => {
              router.push("/init");
              setVisibleMenuLeft(false);
            }}
          >
            <h3>Apresentação</h3>
            <IconArrowRigth />
          </div>
          <div
            className="optionText"
            onClick={() => {
              router.push("/aboutMy");
              setVisibleMenuLeft(false);
            }}
          >
            <h3>Sobre mim</h3>
            <IconArrowRigth />
          </div>
          <div
            className="optionText"
            onClick={() => {
              router.push("/developers ");
              setVisibleMenuLeft(false);
            }}
          >
            <h3>Desenvolvimentos</h3>
            <IconArrowRigth />
          </div>
          <div
            className="optionText"
            onClick={() => {
              router.push("/contacts");
              setVisibleMenuLeft(false);
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
