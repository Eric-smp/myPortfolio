import { Header, HomeBody, MenuLeft } from "@/components";

import * as Styles from "./styles";

export function FirstPage() {
  return (
    <Styles.Wrapper>
      <MenuLeft />
      <Header />
      <HomeBody />
    </Styles.Wrapper>
  );
}
