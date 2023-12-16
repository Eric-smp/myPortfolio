import { Header, BodyDevelopers, MenuLeft } from "@/components";
import * as Styles from "./styles";
import ImageFundo from "@/public/image/wall.jpg";
import Image from "next/image";

export function PageDevelopers() {
  return (
    <Styles.Wrapper>
      <MenuLeft />
      <Header />
      <BodyDevelopers />
    </Styles.Wrapper>
  );
}
