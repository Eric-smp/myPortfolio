import * as Styles from "./styles";
import { Header, BodyAboutMy, MenuLeft } from "@/components";

export function PageAboutMy() {
  return (
    <Styles.Wrapper>
      <MenuLeft />
      <Header />
      <BodyAboutMy />
    </Styles.Wrapper>
  );
}
