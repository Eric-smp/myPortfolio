import * as Styles from "./styles";
import { Header, BodyAboutMy, MenuLeft } from "@/components";
import ImageFundo from "@/public/image/wall.jpg";
import Image from "next/image";

export function PageAboutMy() {
  return (
    <Styles.Wrapper>
      <div className="conteudo">
        <MenuLeft />
        <Header />
        <BodyAboutMy />
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
