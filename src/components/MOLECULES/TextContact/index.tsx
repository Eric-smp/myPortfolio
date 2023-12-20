import Image from "next/image";
import ImagePerfil from "@/assets/png/foto perfil.jpeg";
import * as Styles from "./styles";

export function TextContact() {
  return (
    <Styles.Content>
      <Image
        alt="Image Fundo"
        src={ImagePerfil}
        quality={100}
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
