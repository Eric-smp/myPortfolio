import { Header, BodyDevelopers, MenuLeft } from "@/components";
import * as Styles from "./styles";

export function PageDevelopers() {
  return (
    <Styles.Wrapper>
      <MenuLeft />
      <Header />
      <BodyDevelopers />
    </Styles.Wrapper>
  );
}
