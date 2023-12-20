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
          quality={100}
          sizes="100px"
          style={{
            objectFit: "cover",
            height: "150px",
            width: "150px",
          }}
        />
      </div>
      <p>Eric Sampaio</p>
    </Styles.Content>
  );
}
