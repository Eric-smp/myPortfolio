import { Header, HomeBody, MenuLeft, Footer } from "@/components";

import * as Styles from "./styles";

export function FirstPage() {
  return (
    <Styles.Wrapper>
      <MenuLeft />
      <Header />
      <HomeBody />
      {/* <Footer /> */}
    </Styles.Wrapper>
  );
}
