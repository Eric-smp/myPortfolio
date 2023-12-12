import { Header, BodyDevelopers, MenuLeft } from "@/components";
import * as Styles from "./styles";
import ImageFundo from "@/public/image/wall.jpg";
import Image from "next/image";

export function PageDevelopers() {
  return (
    <Styles.Wrapper>
      <div className="conteudo">
        <MenuLeft />
        <Header />
        <BodyDevelopers />
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
