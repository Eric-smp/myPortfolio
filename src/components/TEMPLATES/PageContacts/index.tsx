import { Header, MenuLeft, BodyContacts } from "@/components";
import * as Styles from "./styles";
import ImageFundo from "@/public/image/wall.jpg";
import Image from "next/image";

export function PageContacts() {
  return (
    <Styles.Wrapper>
      <MenuLeft />
      <Header />
      <BodyContacts />
    </Styles.Wrapper>
  );
}
