import { Button } from "@/components";
import Image from "next/image";
import ImageHome from "@/assets/png/wallpaperHome.png";
import { useRouter } from "next/router";
import * as Styles from "./styles";

export function InformationHome() {
  const router = useRouter();
  return (
    <Styles.Content>
      <div className="textContent">
        <header>
          <h1>Olá, sou Eric Sampaio</h1>
        </header>
        <body>
          <p>
            Desenvolvi esse portfolio com intuito de me apresentar, mostrar as
            minhas habilidades no mundo da programação e também apresentar os
            projetos que desenvolvi sozinho e em grupo.
          </p>
        </body>
        <footer>
          <Button label={"Sobre mim"} onClick={() => router.push("/aboutMy")} />
        </footer>
      </div>
      <div className="imgContent">
        <Image
          alt="Image Fundo"
          src={ImageHome}
          // placeholder="blur"
          quality={100}
          // fill
          sizes="600px"
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        />
      </div>
    </Styles.Content>
  );
}