import { NavBarHeader } from "@/components";
import IconPortfolio from "@/assets/svg/iconProjetct.svg";
import IconMobileMenu from "@/assets/svg/iconMenuMobile.svg";
import * as Styles from "./styles";

export function Header() {
  return (
    <Styles.Container>
      <div className="iconOpenMenuMobile">
        <IconMobileMenu />
      </div>
      <div className="iconPortifolio">
        <IconPortfolio />
      </div>
      <div className="textNavegation">
        <NavBarHeader />
      </div>
      <div className="titleHeader">
        <h1>Portifolio</h1>
      </div>
    </Styles.Container>
  );
}
