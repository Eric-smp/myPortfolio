import { NavBarHeader } from "@/components";
import IconPortfolio from "@/assets/svg/iconProjetct.svg";
import IconMobileMenu from "@/assets/svg/iconMenuMobile.svg";
import * as Styles from "./styles";
import { useGlobal } from "@/hooks/context/global";

export function Header() {
  const { setVisibleMenuMobile } = useGlobal();
  return (
    <Styles.Container>
      <div className="iconOpenMenuMobile">
        <IconMobileMenu onClick={() => setVisibleMenuMobile(true)} />
      </div>
      <div className="iconPortifolio">
        <IconPortfolio />
      </div>
      <div className="textNavegation">
        <NavBarHeader />
      </div>
      <div className="titleHeader">
        <h1>Eric Sampaio</h1>
      </div>
    </Styles.Container>
  );
}
