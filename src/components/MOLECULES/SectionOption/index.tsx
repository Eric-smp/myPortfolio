import { Button } from "@/components";
import * as Styles from "./styles";
import { useRouter } from "next/router";

export function SectionOption() {
  const router = useRouter();

  return (
    <Styles.Content>
      <Button
        label="portfólio"
        onClick={() => router.push("/init")}
        insertIcon={false}
      />
      <Button
        label="Projetos"
        onClick={() => router.push("/developers")}
        insertIcon={false}
      />
    </Styles.Content>
  );
}
