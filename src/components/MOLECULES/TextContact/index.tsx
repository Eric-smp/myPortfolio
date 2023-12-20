import Image from "next/image";
import ImagePerfil from "@/assets/png/foto perfil.jpeg";
import IconGithub from "@/assets/svg/logo-github 1.svg";
import IconLinkedin from "@/assets/svg/logo-linkedin 1.svg";
import IconInstagram from "@/assets/svg/logo-instagram 1.svg";
import * as Styles from "./styles";

export function TextContact() {
  return (
    <Styles.Content>
      <Image
        alt="Image Fundo"
        src={ImagePerfil}
        // placeholder="blur"
        quality={100}
        // fill
        sizes="100px"
        style={{
          objectFit: "cover",
          height: "120px",
          width: "120px",
        }}
      />

      <div className="descricaoContent">
        <h1>Gostou do meu trabalho? </h1>
        <p>
          Entre em contato comigo através desse formulário ou me mande uma
          mensagem em uma das minhas redes
        </p>
      </div>
    </Styles.Content>
  );
}
