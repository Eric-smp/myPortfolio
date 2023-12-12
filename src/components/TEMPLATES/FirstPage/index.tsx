import Image from "next/image";
import { Header, HomeBody, MenuLeft } from "@/components";
import ImageFundo from "@/public/image/wall.jpg";

import * as Styles from "./styles";

export function FirstPage() {
  return (
    <Styles.Wrapper>
      <div className="conteudo">
        <MenuLeft />
        <Header />
        <HomeBody />
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
