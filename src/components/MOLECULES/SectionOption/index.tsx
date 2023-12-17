import { Button } from "@/components";
import * as Styles from "./styles";
import { useRouter } from "next/router";

export function SectionOption() {
  const router = useRouter();

  return (
    <Styles.Content>
      <Button label="Portifolio" onClick={() => router.push("/init")} />
      <Button label="Projetos" onClick={() => router.push("/developers")} />
    </Styles.Content>
  );
}
