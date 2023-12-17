import { NavBarHeader } from "@/components";
import IconPortfolio from "@/assets/svg/iconProjetct.svg";
import IconMobileMenu from "@/assets/svg/iconMenuMobile.svg";
import * as Styles from "./styles";
import { useGlobal } from "@/hooks/context/global";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function Header() {
  const { visibleMenuLeft, setVisibleMenuLeft } = useGlobal();
  const router = useRouter();

  console.log("amdpoas", setVisibleMenuLeft);

  return (
    <Styles.Container>
      <div className="iconOpenMenuMobile">
        <IconMobileMenu onClick={() => console.log(setVisibleMenuLeft(true))} />
      </div>
      <div className="iconPortifolio">
        <IconPortfolio />
      </div>
      <div className="textNavegation">
        <NavBarHeader />
      </div>
      <div className="titleHeader">
        <h1 onClick={() => router.push("/")}>Eric Sampaio</h1>
      </div>
    </Styles.Container>
  );
}
