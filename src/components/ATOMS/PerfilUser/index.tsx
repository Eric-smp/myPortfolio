import Image from "next/image";
import ImagePerfil from "@/assets/png/foto perfil.jpeg";
import * as Styles from "./styles";

export function PerfilUser() {
  return (
    <Styles.Content>
      <div className="photoPerfil">
        <Image
          alt="Image Fundo"
          src={ImagePerfil}
          // placeholder="blur"
          quality={100}
          // fill
          sizes="150px"
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
          }}
        />
      </div>
      <p>Eric Sampaio</p>
    </Styles.Content>
  );
}
