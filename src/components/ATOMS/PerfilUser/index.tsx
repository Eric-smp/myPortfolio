import Image from "next/image";
import ImagePerfil from "@/assets/png/foto perfil.jpeg";
import * as Styles from "./styles";

export function PerfilUser() {
  return (
    <Styles.Content>
      <div className="photoPerfil">
        <Image
          alt="Eric Sampaio"
          src={ImagePerfil}
          // placeholder="blur"
          quality={100}
          width={150}
          // fill
          sizes="100%"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <p>Eric Sampaio</p>
    </Styles.Content>
  );
}
