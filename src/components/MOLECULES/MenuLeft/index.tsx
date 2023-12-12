import { useGlobal } from "@/hooks/context/global";
import IconClose from "@/assets/svg/iconCloseModal.svg";
import IconArrowRigth from "@/assets/svg/arrowRigth.svg";
import * as Styles from "./styles";
import { useRouter } from "next/router";

export function MenuLeft() {
  const { visibleMenuMobile, setVisibleMenuMobile } = useGlobal();
  const router = useRouter();
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
      </div>
    </Styles.Wrapper>
  );
}
