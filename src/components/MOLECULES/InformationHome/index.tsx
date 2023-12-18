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
        <div className="header">
          <h1>Olá, sou Eric Sampaio</h1>
        </div>
        <div className="body">
          <p>
            Desenvolvi esse portfolio com intuito de me apresentar, mostrar as
            minhas habilidades no mundo da programação e também apresentar os
            projetos que desenvolvi sozinho e em grupo.
          </p>
        </div>
        <div className="footer">
          <Button
            label={"Sobre mim"}
            onClick={() => router.push("/aboutMy")}
            insertIcon={false}
          />
        </div>
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
