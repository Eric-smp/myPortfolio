import { useRouter } from "next/router";
import * as Styles from "./styles";

export function NavBarHeader() {
  const router = useRouter();
  return (
    <Styles.TextNav>
      <h2 onClick={() => router.push("/init")}>Home</h2>
      <h2 onClick={() => router.push("/aboutMy")}>Sobre mim</h2>
      <h2 onClick={() => router.push("/developers")}>Desenvolvimentos</h2>
      <h2 onClick={() => router.push("/contacts")}>Contatos</h2>
    </Styles.TextNav>
  );
}
