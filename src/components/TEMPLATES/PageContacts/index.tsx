import { Header, MenuLeft, BodyContacts } from "@/components";
import * as Styles from "./styles";
import ImageFundo from "@/public/image/wall.jpg";
import Image from "next/image";

export function PageContacts() {
  return (
    <Styles.Wrapper>
      <div className="conteudo">
        <MenuLeft />
        <Header />
        <BodyContacts />
      </div>
      <Image
        alt="Image Fundo"
        src={ImageFundo}
        // placeholder="blur"
        quality={100}
        fill
        sizes="100%"
        style={{
          objectFit: "cover",
        }}
      />
    </Styles.Wrapper>
  );
}
