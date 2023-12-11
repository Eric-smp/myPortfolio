import { useGlobal } from "@/hooks/context/global";
import IconClose from "@/assets/svg/iconCloseModal.svg";
import IconArrowRigth from "@/assets/svg/arrowRigth.svg";
import * as Styles from "./styles";

export function MenuLeft() {
  const { visibleMenuMobile, setVisibleMenuMobile } = useGlobal();
  return (
    <Styles.Wrapper visibleMenuLeft={visibleMenuMobile}>
      <div className="contentMenuLeft">
        <div className="header">
          <h2>Eric Sampaio</h2>
          <IconClose onClick={() => setVisibleMenuMobile(false)} />
        </div>
        <div className="bodyMenuLeft">
          <div className="optionText">
            <h3>Inicio</h3>
            <IconArrowRigth />
          </div>
          <div className="optionText">
            <h3>Sobre mim</h3>
            <IconArrowRigth />
          </div>
          <div className="optionText">
            <h3>Desenvolvimentos</h3>
            <IconArrowRigth />
          </div>
          <div className="optionText">
            <h3>Contatos</h3>
            <IconArrowRigth />
          </div>
        </div>
      </div>
    </Styles.Wrapper>
  );
}
