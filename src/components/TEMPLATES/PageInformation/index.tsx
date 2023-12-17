import { BodyInformation } from "@/components";
import Image from "next/image";
import ImageFundo from "@/assets/png/bg-desktop.png";

import * as Styles from "./styles";

export function PageInformation() {
  return (
    <Styles.Wrapper>
      <div className="content">
        <BodyInformation />
      </div>
      <Image
        alt="Image Fundo"
        src={ImageFundo}
        // placeholder="blur"
        quality={100}
        fill
        sizes="100vh"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
      />
    </Styles.Wrapper>
  );
}
