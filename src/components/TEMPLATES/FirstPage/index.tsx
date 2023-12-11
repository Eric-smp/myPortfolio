import Image from "next/image";
import ImageFundo from "@/public/image/wall.jpg";
import { Header, HomeBody, MenuLeft } from "@/components";
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
        alt="pmdspmas"
        src={ImageFundo}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vh"
        style={{
          objectFit: "cover",
        }}
      />
    </Styles.Wrapper>
  );
}
