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
          // quality={100}
          width={150}
          // fill
          sizes="20%"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <p>Eric Sampaio</p>
    </Styles.Content>
  );
}
